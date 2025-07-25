const mentorsData = [
    {
      "photo": "https://cdn.culture.ru/c/466494.jpg",
      "fio": "Иванов Иван Иванович",
      "activity": "Инженер-конструктор, наставник молодых специалистов",
      "values": ["Созидательный труд", "Коллективизм", "Взаимопомощь и взаимоуважение", "Достоинство"]
    },
    {
      "photo": "https://cdn.culture.ru/c/466494.jpg",
      "fio": "Петрова Анна Сергеевна",
      "activity": "Преподаватель истории, руководитель военно-патриотического клуба",
      "values": ["Патриотизм", "Историческая память и преемственность поколений", "Служение Отечеству и ответственность за его судьбу"]
    },
    {
      "photo": "https://i.imgur.com/M7X1b2j.jpg",
      "fio": "Сидоров Андрей Николаевич",
      "activity": "Врач-хирург, основатель благотворительного фонда",
      "values": ["Жизнь", "Гуманизм", "Милосердие", "Достоинство"]
    },
    {
      "photo": "https://i.imgur.com/nJ2N3Fk.jpg",
      "fio": "Королева Елена Викторовна",
      "activity": "Многодетная мать, волонтёр, руководитель общественной организации",
      "values": ["Крепкая семья", "Милосердие", "Взаимопомощь и взаимоуважение", "Жизнь"]
    },
    {
      "photo": "https://i.imgur.com/zV8Q4Yg.jpg",
      "fio": "Морозов Денис Владимирович",
      "activity": "Фермер, глава семейного предприятия",
      "values": ["Созидательный труд", "Крепкая семья", "Единство народов России"]
    },
    {
      "photo": "https://i.imgur.com/cR7L9H0.jpg",
      "fio": "Смирнова Ольга Юрьевна",
      "activity": "Учитель начальных классов, автор образовательных программ",
      "values": ["Высокие нравственные идеалы", "Гуманизм", "Милосердие"]
    },
    {
      "photo": "https://i.imgur.com/rS6W5Xj.jpg",
      "fio": "Кузнецов Артем Александрович",
      "activity": "Военнослужащий, ветеран боевых действий",
      "values": ["Служение Отечеству и ответственность за его судьбу", "Патриотизм", "Достоинство"]
    },
    {
      "photo": "https://i.imgur.com/pV5J1Yn.jpg",
      "fio": "Волкова Мария Игоревна",
      "activity": "Юрист, защитник прав человека, общественный деятель",
      "values": ["Справедливость", "Права и свободы человека", "Достоинство"]
    },
    {
      "photo": "https://i.imgur.com/eP3K7Lw.jpg",
      "fio": "Николаев Павел Дмитриевич",
      "activity": "Историк, руководитель краеведческого музея",
      "values": ["Историческая память и преемственность поколений", "Патриотизм", "Единство народов России"]
    },
    {
      "photo": "https://i.imgur.com/tY2R1Xv.jpg",
      "fio": "Зайцева Светлана Георгиевна",
      "activity": "Предприниматель, меценат, поддерживает искусство",
      "values": ["Приоритет духовного над материальным", "Гуманизм", "Милосердие"]
    },
    {
      "photo": "https://i.imgur.com/hG1Z8Wq.jpg",
      "fio": "Лебедев Виктор Михайлович",
      "activity": "Спортсмен, олимпийский чемпион, тренер детских команд",
      "values": ["Высокие нравственные идеалы", "Патриотизм", "Дисциплина"]
    },
    {
      "photo": "https://i.imgur.com/kB0Y7Uo.jpg",
      "fio": "Романова Дарья Сергеевна",
      "activity": "Психолог, специалист по семейным отношениям",
      "values": ["Крепкая семья", "Взаимопомощь и взаимоуважение", "Жизнь"]
    },
    {
      "photo": "https://i.imgur.com/jC9X6Pz.jpg",
      "fio": "Григорьев Сергей Петрович",
      "activity": "Спасатель МЧС, участник ликвидации чрезвычайных ситуаций",
      "values": ["Жизнь", "Милосердие", "Служение Отечеству и ответственность за его судьбу"]
    },
    {
      "photo": "https://i.imgur.com/oA8S5Cq.jpg",
      "fio": "Белова Анна Владимировна",
      "activity": "Художник, основательница школы живописи для детей",
      "values": ["Приоритет духовного над материальным", "Высокие нравственные идеалы", "Красота"]
    },
    {
      "photo": "https://i.imgur.com/lP7Q4Bw.jpg",
      "fio": "Ковалев Игорь Николаевич",
      "activity": "Рабочий на заводе, передовик производства",
      "values": ["Созидательный труд", "Коллективизм", "Ответственность"]
    },
    {
      "photo": "https://i.imgur.com/qF6T3Vl.jpg",
      "fio": "Фёдорова Наталья Валерьевна",
      "activity": "Медицинская сестра, работает в хосписе",
      "values": ["Милосердие", "Гуманизм", "Жизнь"]
    },
    {
      "photo": "https://i.imgur.com/sE5P2Ua.jpg",
      "fio": "Ершов Дмитрий Павлович",
      "activity": "Ученый, исследователь в области экологии",
      "values": ["Ответственность за его судьбу", "Созидательный труд", "Природа"]
    },
    {
      "photo": "https://i.imgur.com/dH4N1Zg.jpg",
      "fio": "Попова Вера Анатольевна",
      "activity": "Бабушка, хранительница семейных традиций",
      "values": ["Историческая память и преемственность поколений", "Крепкая семья", "Взаимоуважение"]
    },
    {
      "photo": "https://i.imgur.com/wV3M0Xf.jpg",
      "fio": "Кузьмин Леонид Васильевич",
      "activity": "Военный пенсионер, занимается воспитанием молодежи",
      "values": ["Патриотизм", "Служение Отечеству и ответственность за его судьбу", "Гражданственность"]
    },
    {
      "photo": "https://i.imgur.com/uF2L9Wc.jpg",
      "fio": "Орлова Екатерина Андреевна",
      "activity": "Учитель русского языка и литературы, филолог",
      "values": ["Приоритет духовного над материальным", "Высокие нравственные идеалы", "Культура"]
    },
    {
      "photo": "https://i.imgur.com/rG1K8Vc.jpg",
      "fio": "Ткаченко Иван Георгиевич",
      "activity": "Строитель, возводит жилые дома и школы",
      "values": ["Созидательный труд", "Ответственность", "Коллективизм"]
    },
    {
      "photo": "https://i.imgur.com/tH0J7Ub.jpg",
      "fio": "Соколова Марина Николаевна",
      "activity": "Волонтёр, помогает бездомным животным",
      "values": ["Милосердие", "Гуманизм", "Жизнь"]
    },
    {
      "photo": "https://i.imgur.com/yI9I6Ta.jpg",
      "fio": "Козлов Сергей Алексеевич",
      "activity": "Пожарный, спасает жизни людей и имущество",
      "values": ["Жизнь", "Служение Отечеству и ответственность за его судьбу", "Отвага"]
    },
    {
      "photo": "https://i.imgur.com/xC8H5Sb.jpg",
      "fio": "Рябова Анастасия Михайловна",
      "activity": "Социальный работник, помогает пожилым людям",
      "values": ["Взаимопомощь и взаимоуважение", "Милосердие", "Гуманизм"]
    },
    {
      "photo": "https://i.imgur.com/zB7G4Ra.jpg",
      "fio": "Галкин Владимир Игоревич",
      "activity": "Воспитатель детского дома, отец-наставник",
      "values": ["Крепкая семья", "Жизнь", "Милосердие"]
    },
    {
      "photo": "https://i.imgur.com/aS6F3Qp.jpg",
      "fio": "Шилова Елена Петровна",
      "activity": "Фармацевт, консультирует пациентов",
      "values": ["Достоинство", "Ответственность", "Честность"]
    },
    {
      "photo": "https://i.imgur.com/bD5E2Oi.jpg",
      "fio": "Овчинников Михаил Юрьевич",
      "activity": "Шахтёр, трудится под землей",
      "values": ["Созидательный труд", "Коллективизм", "Мужество"]
    },
    {
      "photo": "https://i.imgur.com/cF4D1Nj.jpg",
      "fio": "Баранова Людмила Васильевна",
      "activity": "Пенсионерка, ведёт активную общественную деятельность",
      "values": ["Гражданственность", "Историческая память и преемственность поколений", "Активность"]
    },
    {
      "photo": "https://i.imgur.com/eE3C0Lk.jpg",
      "fio": "Егоров Антон Борисович",
      "activity": "Полицейский, обеспечивает порядок и безопасность",
      "values": ["Служение Отечеству и ответственность за его судьбу", "Справедливость", "Безопасность"]
    },
    {
      "photo": "https://i.imgur.com/gD2B9Ij.jpg",
      "fio": "Казакова Ирина Олеговна",
      "activity": "Музыкант, педагог по фортепиано",
      "values": ["Приоритет духовного над материальным", "Высокие нравственные идеалы", "Творчество"]
    },
    {
      "photo": "https://i.imgur.com/iC1A8Hk.jpg",
      "fio": "Васильев Олег Петрович",
      "activity": "Агроном, занимается выращиванием сельскохозяйственных культур",
      "values": ["Созидательный труд", "Ответственность", "Забота о земле"]
    },
    {
      "photo": "https://i.imgur.com/kH0Z7Gy.jpg",
      "fio": "Гришина Светлана Сергеевна",
      "activity": "Библиотекарь, популяризирует чтение",
      "values": ["Приоритет духовного над материальным", "Образование", "Развитие"]
    },
    {
      "photo": "https://i.imgur.com/mL9Y6Fx.jpg",
      "fio": "Данилов Алексей Владимирович",
      "activity": "Тренер по борьбе, воспитывает силу духа",
      "values": ["Высокие нравственные идеалы", "Достоинство", "Саморазвитие"]
    },
    {
      "photo": "https://i.imgur.com/nP8X5Ee.jpg",
      "fio": "Жукова Татьяна Ивановна",
      "activity": "Руководитель волонтерского центра",
      "values": ["Милосердие", "Взаимопомощь и взаимоуважение", "Коллективизм"]
    },
    {
      "photo": "https://i.imgur.com/qO7W4Dd.jpg",
      "fio": "Князев Александр Николаевич",
      "activity": "Геолог, открывает новые месторождения",
      "values": ["Созидательный труд", "Служение Отечеству и ответственность за его судьбу", "Исследование"]
    },
    {
      "photo": "https://i.imgur.com/rQ6V3Cc.jpg",
      "fio": "Лазарева Ольга Андреевна",
      "activity": "Художественный руководитель народного ансамбля",
      "values": ["Единство народов России", "Историческая память и преемственность поколений", "Культура"]
    },
    {
      "photo": "https://i.imgur.com/sT5U2Bb.jpg",
      "fio": "Макаров Евгений Борисович",
      "activity": "Архитектор, проектирует общественные здания",
      "values": ["Созидательный труд", "Ответственность", "Красота"]
    },
    {
      "photo": "https://i.imgur.com/uU4T1Aa.jpg",
      "fio": "Новикова Анна Геннадьевна",
      "activity": "Педиатр, заботится о здоровье детей",
      "values": ["Жизнь", "Милосердие", "Гуманизм"]
    },
    {
      "photo": "https://i.imgur.com/vW3S0Zz.jpg",
      "fio": "Осипов Денис Сергеевич",
      "activity": "Ученый-биолог, работает над сохранением редких видов",
      "values": ["Ответственность за судьбу", "Жизнь", "Природа"]
    },
    {
      "photo": "https://i.imgur.com/wX2R9Yy.jpg",
      "fio": "Павлова Юлия Викторовна",
      "activity": "Руководитель кризисного центра для женщин",
      "values": ["Крепкая семья", "Милосердие", "Помощь"]
    },
    {
      "photo": "https://i.imgur.com/xY1Q8Xx.jpg",
      "fio": "Рыбаков Алексей Иванович",
      "activity": "Пограничник, защищает границы Родины",
      "values": ["Патриотизм", "Служение Отечеству и ответственность за его судьбу", "Долг"]
    },
    {
      "photo": "https://i.imgur.com/zZ0P7Ww.jpg",
      "fio": "Семенова Дарья Дмитриевна",
      "activity": "Экскурсовод, популяризирует историю родного края",
      "values": ["Историческая память и преемственность поколений", "Патриотизм", "Образование"]
    },
    {
      "photo": "https://i.imgur.com/aA9O6Vv.jpg",
      "fio": "Тарасов Игорь Владимирович",
      "activity": "Рабочий-строитель, восстанавливает исторические здания",
      "values": ["Созидательный труд", "Историческая память и преемственность поколений", "Красота"]
    },
    {
      "photo": "https://i.imgur.com/bB8N5Uu.jpg",
      "fio": "Ушакова Светлана Игоревна",
      "activity": "Психотерапевт, помогает людям справиться с трудностями",
      "values": ["Жизнь", "Гуманизм", "Милосердие"]
    },
    {
      "photo": "https://i.imgur.com/cC7M4Tt.jpg",
      "fio": "Федоров Артур Робертович",
      "activity": "Преподаватель философии, развивает критическое мышление",
      "values": ["Приоритет духовного над материальным", "Высокие нравственные идеалы", "Мудрость"]
    },
    {
      "photo": "https://i.imgur.com/dD6L3Ss.jpg",
      "fio": "Харченко Вера Николаевна",
      "activity": "Воспитатель в детском саду, формирует личность",
      "values": ["Крепкая семья", "Жизнь", "Воспитание"]
    },
    {
      "photo": "https://i.imgur.com/eE5K2Rr.jpg",
      "fio": "Цветков Олег Константинович",
      "activity": "Программист, создает полезные приложения",
      "values": ["Созидательный труд", "Коллективизм", "Инновации"]
    },
    {
      "photo": "https://i.imgur.com/fF4J1Qq.jpg",
      "fio": "Чернова Ксения Евгеньевна",
      "activity": "Волонтер-эколог, убирает мусор в лесах и парках",
      "values": ["Ответственность за судьбу", "Природа", "Чистота"]
    },
    {
      "photo": "https://i.imgur.com/gG3I0Pp.jpg",
      "fio": "Шаповалов Дмитрий Михайлович",
      "activity": "Многодетный отец, строит дом для своей семьи",
      "values": ["Крепкая семья", "Созидательный труд", "Ответственность"]
    },
    {
      "photo": "https://i.imgur.com/hH2H9Oo.jpg",
      "fio": "Щербакова София Владимировна",
      "activity": "Учитель музыки, приобщает детей к искусству",
      "values": ["Приоритет духовного над материальным", "Высокие нравственные идеалы", "Красота"]
    },
    {
        "photo": "https://cdn.culture.ru/c/466494.jpg",
        "fio": "Иванов Иван Иванович",
        "activity": "Инженер-конструктор, наставник молодых специалистов",
        "values": ["Созидательный труд", "Достоинство"]
      },
      {
        "photo": "https://cdn.culture.ru/c/466494.jpg",
        "fio": "Иванов Иван Иванович",
        "activity": "Инженер-конструктор, наставник молодых специалистов",
        "values": ["Патриотизм", "Служение Отечеству и ответственность за его судьбу"]
      },
      {
        "photo": "https://cdn.culture.ru/c/466494.jpg",
        "fio": "Иванов Иван Иванович",
        "activity": "Инженер-конструктор, наставник молодых специалистов",
        "values": ["Крепкая семья", "Высокие нравственные идеалы"]
      },
      {
        "photo": "https://cdn.culture.ru/c/466494.jpg",
        "fio": "Иванов Иван Иванович",
        "activity": "Инженер-конструктор, наставник молодых специалистов",
        "values": ["Гуманизм", "Милосердие"]
      },
      {
        "photo": "https://cdn.culture.ru/c/466494.jpg",
        "fio": "Иванов Иван Иванович",
        "activity": "Инженер-конструктор, наставник молодых специалистов",
        "values": ["Жизнь", "Права и свободы человека"]
      },
  
      // Пример 2: Наставник "Петрова Анна Сергеевна" повторяется 4 раза
      // При этом ценность "Патриотизм" указана 2 раза, и "Гражданственность" 2 раза
      {
        "photo": "https://cdn.culture.ru/c/466494.jpg", // Используем другое фото для Петрова
        "fio": "Петрова Анна Сергеевна",
        "activity": "Преподаватель истории, руководитель военно-патриотического клуба",
        "values": ["Патриотизм", "Историческая память и преемственность поколений"]
      },
      {
        "photo": "https://cdn.culture.ru/c/466494.jpg",
        "fio": "Петрова Анна Сергеевна",
        "activity": "Преподаватель истории, руководитель военно-патриотического клуба",
        "values": ["Патриотизм", "Служение Отечеству и ответственность за его судьбу"]
      },
      {
        "photo": "https://cdn.culture.ru/c/466494.jpg",
        "fio": "Петрова Анна Сергеевна",
        "activity": "Преподаватель истории, руководитель военно-патриотического клуба",
        "values": ["Гражданственность", "Взаимопомощь и взаимоуважение"]
      },
      {
        "photo": "https://cdn.culture.ru/c/466494.jpg",
        "fio": "Петрова Анна Сергеевна",
        "activity": "Преподаватель истории, руководитель военно-патриотического клуба",
        "values": ["Гражданственность", "Единство народов России"]
      },
  
      // Другие наставники (можно добавить больше для разнообразия)
      {
        "photo": "https://i.imgur.com/M7X1b2j.jpg",
        "fio": "Сидоров Андрей Николаевич",
        "activity": "Врач-хирург, основатель благотворительного фонда",
        "values": ["Жизнь", "Гуманизм", "Милосердие", "Достоинство"]
      },
      {
        "photo": "https://i.imgur.com/nJ2N3Fk.jpg",
        "fio": "Королева Елена Викторовна",
        "activity": "Многодетная мать, волонтёр, руководитель общественной организации",
        "values": ["Крепкая семья", "Взаимопомощь и взаимоуважение"]
      },
      {
        "photo": "https://i.imgur.com/vH0292g.jpg",
        "fio": "Федоров Артур Робертович",
        "activity": "Преподаватель философии, развивает критическое мышление",
        "values": ["Приоритет духовного над материальным", "Высокие нравственные идеалы"]
      },
      {
        "photo": "https://i.imgur.com/eE5K2Rr.jpg",
        "fio": "Цветков Олег Константинович",
        "activity": "Программист, создает полезные приложения",
        "values": ["Созидательный труд", "Коллективизм"]
      }
  ];