document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Элементы ---
    const svg = d3.select("#network-svg");
    const loader = document.getElementById('loader');
    const filtersContainer = document.getElementById('filters-container');
    const descriptionModal = document.getElementById('descriptionModal');
    const mentorCardModal = document.getElementById('mentorCardModal');
    const resetFiltersBtn = document.getElementById('resetFiltersBtn');
    const descriptionBtn = document.getElementById('descriptionBtn');
    const mentorSearchInput = document.getElementById('mentorSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');

    const g = svg.append("g");
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // --- Константы и Переменные ---
    let width = svg.node().getBoundingClientRect().width;
    let height = svg.node().getBoundingClientRect().height;
    let simulation, node, link;
    let initialNodes = [], initialLinks = [];
    let currentNodes = [], currentLinks = [];
    let valueNodeMap = new Map();
    let activeFilters = [];
    let searchTerm = "";

    // --- Параметры визуализации ---
    const baseMentorRadius = 20;
    const mentorRadiusIncrement = 3;
    const baseLinkWidth = 1.5;
    const linkWidthIncrement = 1;

    const traditionalValuesList = [
        "Жизнь", "Достоинство", "Права и свободы человека", "Патриотизм", "Гражданственность",
        "Служение Отечеству и ответственность за его судьбу", "Высокие нравственные идеалы",
        "Крепкая семья", "Созидательный труд", "Приоритет духовного над материальным",
        "Гуманизм", "Милосердие", "Справедливость", "Коллективизм",
        "Взаимопомощь и взаимоуважение", "Историческая память и преемственность поколений",
        "Единство народов России"
    ];

    const valueColors = {
        "Жизнь": "#FFD700", "Достоинство": "#6495ED", "Права и свободы человека": "#20B2AA",
        "Патриотизм": "#DC143C", "Гражданственность": "#FF8C00", "Служение Отечеству и ответственность за его судьбу": "#8B0000",
        "Высокие нравственные идеалы": "#9370DB", "Крепкая семья": "#DA70D6", "Созидательный труд": "#32CD32",
        "Приоритет духовного над материальным": "#FF4500", "Гуманизм": "#008080", "Милосердие": "#B0C4DE",
        "Справедливость": "#4682B4", "Коллективизм": "#5F9EA0", "Взаимопомощь и взаимоуважение": "#CD853F",
        "Историческая память и преемственность поколений": "#778899", "Единство народов России": "#4169E1"
    };

    // --- Функции управления UI ---
    const showLoader = () => loader.style.display = 'flex';
    const hideLoader = () => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    };

    const showModal = (modalElement) => {
        modalElement.style.display = 'flex';
        requestAnimationFrame(() => modalElement.classList.add('show'));
    };

    const hideModal = (modalElement) => {
        modalElement.classList.remove('show');
        setTimeout(() => modalElement.style.display = 'none', 300);
    };

    /**
     * КЛЮЧЕВАЯ ФУНКЦИЯ: Инициализация данных с объединением дубликатов.
     */
    function initializeGraphData() {
        let nodes = [];
        let links = [];
        let nodeIdCounter = 0;
        valueNodeMap.clear();

        const center = { x: width / 2, y: height / 2 };
        const valueClusterRadius = Math.min(width, height) / 3;

        // 1. Создаем узлы ценностей
        traditionalValuesList.forEach((value, i) => {
            const angle = (i / traditionalValuesList.length) * 2 * Math.PI;
            const id = `value_${nodeIdCounter++}`;
            const valueNode = {
                id, name: value, type: 'value', radius: 35,
                color: valueColors[value] || '#999',
                fx: center.x + valueClusterRadius * Math.cos(angle),
                fy: center.y + valueClusterRadius * Math.sin(angle)
            };
            nodes.push(valueNode);
            valueNodeMap.set(value, valueNode);
        });

        // 2. Объединяем наставников
        const consolidatedMentors = new Map();
        mentorsData.forEach(entry => {
            if (consolidatedMentors.has(entry.fio)) {
                const existing = consolidatedMentors.get(entry.fio);
                existing.duplicateCount++;
                entry.values.forEach(v => existing.allValues.add(v));
            } else {
                const mentorId = `mentor_${nodeIdCounter++}`;
                consolidatedMentors.set(entry.fio, {
                    id: mentorId,
                    type: 'mentor',
                    name: entry.fio,
                    activity: entry.activity,
                    photo: entry.photo,
                    duplicateCount: 1,
                    allValues: new Set(entry.values)
                });
            }
        });

        // 3. Добавляем узлы наставников в общий массив и задаем финальные свойства
        consolidatedMentors.forEach(mentorNode => {
            mentorNode.values = Array.from(mentorNode.allValues);
            mentorNode.primaryValue = mentorNode.values[0] || null;
            mentorNode.color = valueColors[mentorNode.primaryValue] || '#7f8c8d';
            mentorNode.radius = baseMentorRadius + (mentorNode.duplicateCount - 1) * mentorRadiusIncrement;
            nodes.push(mentorNode);
        });

        // 4. Агрегируем связи
        const linkAggregator = new Map();
        mentorsData.forEach(entry => {
            const consolidatedMentor = consolidatedMentors.get(entry.fio);
            if (!consolidatedMentor) return;

            entry.values.forEach(valueName => {
                const valueNode = valueNodeMap.get(valueName);
                if (valueNode) {
                    const linkKey = `${consolidatedMentor.id}|${valueNode.id}`; // Более надежный ключ
                    if (!linkAggregator.has(linkKey)) {
                        linkAggregator.set(linkKey, { count: 0, isPrimary: false });
                    }
                    const linkData = linkAggregator.get(linkKey);
                    linkData.count++;
                    // Основной считается ценность, идущая первой в конкретной *заявке*
                    if (valueName === entry.values[0]) {
                        linkData.isPrimary = true;
                    }
                }
            });
        });

        // 5. Создаем финальный массив связей
        linkAggregator.forEach((data, key) => {
            const [sourceId, targetId] = key.split('|');
            links.push({
                source: sourceId,
                target: targetId,
                isPrimary: data.isPrimary,
                strokeWidth: baseLinkWidth + (data.count - 1) * linkWidthIncrement
            });
        });

        initialNodes = nodes;
        initialLinks = links;
    }


    /**
     * Обновление и рендеринг графа на основе отфильтрованных данных.
     */
    function updateGraph(filteredNodes, filteredLinks) {
        g.selectAll("*").remove();

        simulation = d3.forceSimulation(filteredNodes)
            .force("link", d3.forceLink(filteredLinks).id(d => d.id).distance(d => d.isPrimary ? 80 : 120).strength(0.1))
            .force("charge", d3.forceManyBody().strength(-800))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collision", d3.forceCollide().radius(d => d.radius + 8))
            .on("tick", ticked);

        link = g.append("g")
            .attr("class", "links")
            .selectAll("path") // Изменено с "line" на "path"
            .data(filteredLinks)
            .enter().append("path") // Изменено с "line" на "path"
            .attr("stroke-width", d => d.strokeWidth)
            .attr("stroke-dasharray", d => d.isPrimary ? "0" : "5,5")
            .attr("fill", "none"); // Arcs should typically not be filled

        node = g.append("g")
            .attr("class", "nodes")
            .selectAll(".node")
            .data(filteredNodes, d => d.id)
            .enter().append("g")
            .attr("class", d => `node ${d.type}-node`);

        node.filter(d => d.type === 'mentor')
            .append("defs")
            .append("pattern")
            .attr("id", d => `pattern-${d.id.replace(/[^a-zA-Z0-9]/g, '-')}`)
            .attr("width", 1).attr("height", 1)
            .append("image")
            .attr("xlink:href", d => d.photo)
            .attr("width", d => d.radius * 2).attr("height", d => d.radius * 2)
            .attr("preserveAspectRatio", "xMidYMid slice");

        node.append("circle")
            .attr("r", d => d.radius)
            .attr("fill", d => d.type === 'mentor' ? `url(#pattern-${d.id.replace(/[^a-zA-Z0-9]/g, '-')})` : d.color)
            .attr("stroke", d => d.type === 'mentor' ? d.color : 'white')
            .attr("stroke-width", d => d.type === 'mentor' ? 3 : 1.5);

        node.append("text")
            .attr("dy", d => d.radius + (d.type === 'value' ? 18 : 12))
            .text(d => d.name)
            .style("font-size", d => d.type === 'value' ? "12px" : "10px")
            .style("font-weight", d => d.type === 'value' ? "bold" : "normal");

        node.call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));

        node.on("mouseover", handleMouseOver).on("mouseout", handleMouseOut).on("click", handleClick);

        simulation.alpha(1).restart();
    }

    // --- Остальные функции (без изменений) ---

    function ticked() {
        link.attr("d", d => {
            const x1 = d.source.x;
            const y1 = d.source.y;
            const x2 = d.target.x;
            const y2 = d.target.y;

            // Середина линии
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;

            // Вектор от источника к цели
            const dx = x2 - x1;
            const dy = y2 - y1;

            // Перпендикулярный вектор для направления изгиба
            // (dy, -dx) для одного направления, (-dy, dx) для другого
            const normalDx = dy;
            const normalDy = -dx;

            // Нормализация перпендикулярного вектора
            const length = Math.sqrt(normalDx * normalDx + normalDy * normalDy);
            const unitNormalDx = length === 0 ? 0 : normalDx / length;
            const unitNormalDy = length === 0 ? 0 : normalDy / length;

            // Фактор изгиба - отрегулируйте это значение для большей или меньшей кривизны
            const bend = 30; // в пикселях

            // Контрольная точка для квадратичной кривой Безье
            const controlX = midX + unitNormalDx * bend;
            const controlY = midY + unitNormalDy * bend;

            return `M ${x1},${y1} Q ${controlX},${controlY} ${x2},${y2}`;
        });
        node.attr("transform", d => `translate(${d.x},${d.y})`);
    }

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x; d.fy = d.y;
    }
    function dragged(event, d) { d.fx = event.x; d.fy = event.y; }
    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        if (d.type !== 'value') { d.fx = null; d.fy = null; }
    }

    let linkedByIndex = {};
    function updateLinkedByIndex(links) {
        linkedByIndex = {};
        links.forEach(l => {
            linkedByIndex[`${l.source.id},${l.target.id}`] = 1;
        });
    }
    const isConnected = (a, b) => linkedByIndex[`${a.id},${b.id}`] || linkedByIndex[`${b.id},${a.id}`] || a.id === b.id;

    function handleMouseOver(event, d) {
        let tooltipContent = d.type === 'value'
            ? `<b>Ценность:</b> ${d.name}`
            : `<b>${d.name}</b><br>${d.activity}`;
        if (d.type === 'mentor' && d.duplicateCount > 1) {
            tooltipContent += `<br><b>Упоминаний:</b> ${d.duplicateCount}`;
        }

        tooltip.style("opacity", 1)
            .html(tooltipContent)
            .style("left", (event.pageX + 15) + "px")
            .style("top", (event.pageY - 28) + "px");

        node.style("opacity", o => isConnected(d, o) ? 1 : 0.2);
        link.style("opacity", o => o.source === d || o.target === d ? 1 : 0.2);
    }

    function handleMouseOut() {
        tooltip.style("opacity", 0);
        node.style("opacity", 1);
        link.style("opacity", 1);
    }

    function handleClick(event, d) {
        if (d.type === 'mentor') showMentorCard(d);
    }

    function applyCombinedFilters() {
        let filteredNodes = initialNodes.filter(n => {
            if (n.type === 'value') return true;
            const matchesFilters = activeFilters.length === 0 || n.values.some(v => activeFilters.includes(v));
            const matchesSearch = searchTerm === "" || n.name.toLowerCase().includes(searchTerm);
            return matchesFilters && matchesSearch;
        });
        const filteredNodeIds = new Set(filteredNodes.map(n => n.id));
        let filteredLinks = initialLinks.filter(l => filteredNodeIds.has(l.source) && filteredNodeIds.has(l.target));

        currentNodes = filteredNodes;
        currentLinks = filteredLinks.map(l => ({...l}));

        const nodeMap = new Map(currentNodes.map(n => [n.id, n]));
        currentLinks.forEach(l => {
            l.source = nodeMap.get(l.source);
            l.target = nodeMap.get(l.target);
        });

        updateLinkedByIndex(currentLinks);
        updateGraph(currentNodes, currentLinks);
    }

    function createFilterCheckboxes() {
        const allValues = [...traditionalValuesList].sort((a,b) => a.localeCompare(b, 'ru'));
        filtersContainer.innerHTML = '';
        allValues.forEach(value => {
            const id = `filter-${value.replace(/\s+/g, '-')}`;
            const item = document.createElement('div');
            item.className = 'checkbox-item';
            item.innerHTML = `<input type="checkbox" id="${id}" value="${value}"><label for="${id}">${value}</label>`;
            filtersContainer.appendChild(item);
        });
        activeFilters = [];
    }

    function showMentorCard(d) {
        document.getElementById('mentorCardPhoto').src = d.photo || 'https://via.placeholder.com/100';
        document.getElementById('mentorCardFIO').textContent = d.name;
        document.getElementById('mentorCardActivity').textContent = d.activity;
        const valuesContainer = document.getElementById('mentorCardValuesContainer');
        valuesContainer.innerHTML = '';
        d.values.forEach(value => {
            const tag = document.createElement('span');
            tag.className = 'value-tag';
            tag.textContent = value;
            tag.style.backgroundColor = valueColors[value] || '#999';
            valuesContainer.appendChild(tag);
        });
        showModal(mentorCardModal);
    }

    function setupEventListeners() {
        document.querySelector('.close-description-modal').addEventListener('click', () => hideModal(descriptionModal));
        document.querySelector('.close-mentor-card-modal').addEventListener('click', () => hideModal(mentorCardModal));
        descriptionBtn.addEventListener('click', () => showModal(descriptionModal));
        window.addEventListener('click', e => {
            if (e.target === descriptionModal) hideModal(descriptionModal);
            if (e.target === mentorCardModal) hideModal(mentorCardModal);
        });

        filtersContainer.addEventListener('change', e => {
            if (e.target.type === 'checkbox') {
                activeFilters = Array.from(filtersContainer.querySelectorAll('input:checked')).map(cb => cb.value);
                applyCombinedFilters();
            }
        });
        resetFiltersBtn.addEventListener('click', () => {
            filtersContainer.querySelectorAll('input:checked').forEach(cb => cb.checked = false);
            mentorSearchInput.value = '';
            activeFilters = [];
            searchTerm = '';
            applyCombinedFilters();
        });

        mentorSearchInput.addEventListener('input', () => {
            searchTerm = mentorSearchInput.value.trim().toLowerCase();
            applyCombinedFilters();
        });
        clearSearchBtn.addEventListener('click', () => {
            mentorSearchInput.value = '';
            searchTerm = '';
            applyCombinedFilters();
        });

        svg.call(d3.zoom().scaleExtent([0.2, 5]).on("zoom", e => g.attr("transform", e.transform)));

        window.addEventListener('resize', () => {
            width = svg.node().getBoundingClientRect().width;
            height = svg.node().getBoundingClientRect().height;
            initializeGraphData();
            applyCombinedFilters();
        });
    }

    (function init() {
        showLoader();
        setTimeout(() => {
            initializeGraphData();
            createFilterCheckboxes();
            applyCombinedFilters();
            setupEventListeners();

            hideLoader();
            showModal(descriptionModal);
        }, 150);
    })();
});