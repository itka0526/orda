import { Dish } from "@/types/dish";

export const Menu: Dish = {
    "ЭКЛЕРЫ С БАЙКАЛЬСКОЙ РЫБОЙ": {
        weight: "200 ГР",
        price: "860 Р",
        description: "",
        ingredients: [
            "Тесто на Эклер п/ф/",
            "Начинка на эклер с омулем",
            "Соус Французский п/ф/",
            "Земля из маслин п/сі",
            "Икод моивы (мосаго)",
            "Лицо кудинос",
        ],
        ETP: 10,
        tags: ["закуска"],
        image: "/20.png",
    },
    "СЫР ПОД ВИНО": {
        description: "Мягкий сыр с сухофруктами, орешками и медом, идеальное дополнение к бокалу изысканного вина.",
        weight: "250/30 Гр",
        price: "980 Р",
        ingredients: ["Сыр Сулугуни", "Сыр Маасдам", "Сыр Гауда", "Виноград п/ф", "Грецкий орех", "Миндаль орех", "Мёд п/ф"],
        ETP: 10,
        tags: ["закуска"],
    },
    "ТАРЕЛКА К ПИВУ": {
        description: "Балык, чесночные гренки, луковые кольца, кольца кальмара в кляре, черри, красный лук, горчица, хрен",
        weight: "170/40 ГР",
        price: "790 Р",
        ingredients: [
            "Луковые кольца",
            "Кольца кальмара в клясе.",
            "Хлеб Бородинский 0,500 кг п/ф",
            "Чесноиное масло п/ф",
            "Соус Песто п/ф",
            "Лук красный очищенный г/с",
            "Зелень п/ф",
            "Балык кеты п/Ф",
            "Лист салата п/ф|",
            "Помидоры Черри п/ф",
            "Хрен столовый",
            "Горчица собственного приготовлени...",
        ],
        ETP: 10,
        tags: ["закуска"],
        image: "/21.png",
    },
    "ТАРЕЛКА ИЗ ОВОЩЕЙ И ЗЕЛЕНИ": {
        description: "Помидор, огурец, болгарский перец, редис, зелень, сметана.",
        weight: "350/30 ГР",
        price: "580 Р",
        ETP: 10,
        ingredients: [
            "Перец болгарский п/ф",
            "Помидоры п/ф",
            "Огурцы свежие п/ф",
            "Редис п/ф",
            "Соус Французский п/ф",
            "Лук красный очищенный п/ф",
            "Лист салата п/ф",
            "Зелень п/ф",
        ],
        tags: ["закуска"],
    },
    "ХОЛОДЕЦ С САЛОМ": {
        description: "Говяжий холодец с соленым салом, маринованным огурчиком и капустой подается с фирменной горчицей",
        weight: "150/120/20 ГР",
        price: "700 Р",
        ingredients: [
            "Холодец п/ф",
            "Сало солёное без шкуры п/ф",
            "Паприка молотая",
            "Огурцы маринованные",
            "Зелень п/ф",
            "Брусника св/м",
            "Горчица собственного приготовлени...",
            "Капуста квашеная",
        ],
        ETP: 10,
        tags: ["закуска"],
        image: "/22.png",
    },
    "МЯСНАЯ ТАРЕЛКА": {
        description: "Буженина, запеченная говядина, куриная грудка, домашнее сало с аджикой",
        weight: "270 ГР",
        price: "1280 Р",
        ETP: 15,
        ingredients: [],
        tags: ["закуска"],
    },
    САЛАМАТ: {
        description:
            "Национальное бурятское блюдо из ржаной муки и сметаны, подается в горячем виде. С древних времен и по сей день «саламат», являясь символом белой пищи, подается только самым почитаемым и дорогим гостям.",
        weight: "100 ГР",
        price: "460 Р",
        ingredients: ["ржаной муки", "сметаны"],
        ETP: 10,
        image: "/2.png",
        tags: ["закуска"],
    },
    "ДЕГУСТАЦИОННЫЙ СЕТ «БАЙКАЛ»": {
        description:
            "(на 3 персоны)\nСагудай из байкальской рыбы, арбин с печенью, саламат, хугабша, мини-буузы, мини-хушууры, десерт «Холисо», фирменная настойка",
        weight: "740 гр",
        price: "3800 р",
        ETP: 25,
        ingredients: [],
        image: "/3.png",
        tags: ["закуска"],
    },
    "РУЛЕТ ИЗ АРБИНА И КОНСКОЙ ПЕЧЕНИ": {
        description: "Арбин-конский жир с загрибка, лук красный.\nНациональный бурятский деликатес!",
        weight: "130/30 ГР",
        price: "900 Р",
        ETP: 0,
        ingredients: [],
        image: "/4.png",
        tags: ["закуска"],
    },
    "КОСТНЫЙ МОЗГ": {
        description: "Подается с гренками и маринованным луком",
        weight: "300 гр",
        price: "700 Р",
        ingredients: [
            "Кости говяжьи",
            "Перец черный молотый",
            "Соль столовая",
            "Мука пшеничная в/сорт",
            "Лук красный маринованный п/ф",
            "Булочка пражская 40гр",
        ],
        ETP: 15,
        tags: ["закуска"],
        image: "/23.png",
    },
    "САГУДАЙ ИЗ БАЙКАЛЬСКОЙ РЫБЫ": {
        description: "Восхитительная закуска из нежной байкальской рыбы и двух видов лука с небольшим количеством масла и специй.",
        weight: "100/30 ГР",
        price: "650 Р",
        ETP: 0,
        ingredients: [],
        tags: ["закуска"],
    },
    "АССОРТИ ИЗ СОЛЕНИЙ": {
        description: "Грибочки в масле, мапосольные огурчики, кисло-сладкая капуста, маринованные помидоры черри, аджика",
        weight: "380 гр",
        price: "650 Р",
        ETP: 0,
        ingredients: [],
        tags: ["закуска"],
    },
    "РЫБНОЕ ПЛАТО": {
        description: "Ассорти из малосольной семги, муксуна и копченого балыка с долькой лимона.",
        weight: "220 ГР",
        price: "1490 Р",
        ETP: 0,
        ingredients: [],
        tags: ["закуска"],
    },
    "БАЯН НОЕН": {
        description: "Нарезка из говяжьего языка на подушке из помидоров под острым соусом",
        weight: "230 гр",
        price: "960 Р",
        ETP: 0,
        ingredients: [],
        tags: ["закуска"],
    },
    "САЛАТ ОТ ШЕФА": {
        description: "Байкальяская рыба, салатный микс, черри, свежий огурец, маринованный стебель сельдерея, редис, соус фьюжн",
        weight: "180 ГР",
        price: "790 Р",
        ETP: 0,
        ingredients: [],
        tags: ["салаты"],
    },
    "САЛАТ ОЛИВЬЕ С КУРИЦЕЙ": {
        description: "",
        ETP: 10,
        price: "",
        weight: "120 ГР",
        ingredients: [
            "Куриная грудка запеченная",
            "Горошек зелёный консервированный",
            "Соус Французский п/ф",
            "Огурцы маринованные",
            "Лук красный очищенный п/ф",
            "Огурцы свежие п/ф",
            "Морковь отварная очищенная п/ф",
            "Картофель отв. очищен, п/Ф",
            "Яйцо куриное",
        ],
        tags: ["салаты"],
    },
    "ОЛИВЬЕ С СЕМГОЙ МАЛОЙ СОЛИ И ЛОСОСЕВОЙ ИКРОЙ": {
        weight: "200 ГР",
        description: "",
        price: "780 Р",
        ETP: 0,
        ingredients: [],
        image: "/6.png",
        tags: ["салаты"],
    },
    "САЛАТ С ГОВЯЖЬИМ ЯЗЫКОМ": {
        ETP: 0,
        description: "",
        price: "750 P",
        weight: "",
        image: "/7.png",
        ingredients: ["Язык отварной", "огурец черри", "абокадо", "пистья салото", "кедровый орех", "соус ореховый."],
        tags: ["салаты"],
    },
    "САЛАТ С БАКЛАЖАНАМИ": {
        description: "Бакдажаны, фетакса, черри, лист салата, кедровый орех, кунжут",
        weight: "250 ГР",
        price: "550 Р",
        ETP: 0,
        ingredients: [],
        tags: ["салаты"],
    },
    "«ЗЕЛЕНЫЙ»": {
        description: "Огурец, авокадо, яблоко Грени, цукини, лук зеленый, лист салата под овощной заправкой",
        weight: "200 гр",
        price: "500 Р",
        ETP: 0,
        ingredients: [],
        tags: ["салаты"],
    },
    "САЛАТ С БАЙКАЛЬСКОЙ РЫБОЙ С ЗАПЕЧЕННЫМ АПЕЛЬСИНОМ И ОВОЩАМИ ПОД ФИРМЕННЫМ СОУСОМ": {
        weight: "180 ГР",
        price: "790 Р",
        description: "",
        ETP: 0,
        ingredients: [],
        tags: ["салаты"],
    },
    "САЛАТ С СЕМГОЙ": {
        description: "Аппетитный салат с малосольной семгой и картофелем «Айдахо», заправленный азиатским соусом",
        weight: "170 ГР",
        price: "790 Р",
        ETP: 0,
        ingredients: [],
        tags: ["салаты"],
    },
    "ТЕПЛЫЙ САЛАТ ИЗ КУРИНОЙ ГРУДКИ И ГРИБОВ ПОД БЕЛЫМ СОУСОМ": {
        weight: "180 ГР",
        price: "670 Р",
        description: "",
        ingredients: [
            "Масло растительност",
            "Сливки 22% п/ф/",
            "Куриная грудка филе п/ф",
            "Соус-крем Бальзамический",
            "Розмарин/Тимьян",
            "Помидоры Черри п/ф/",
            "Лист салата п/с",
            "Лук репчатый очищенный п/ф|",
            "Шампиньоны консеовированные",
            "Чеснок п/ф",
        ],
        ETP: 10,
        tags: ["салаты"],
        image: "/24.png",
    },
    "САЛАТ С БРОККОЛИ И КЕДРОВЫМИ ОРЕШКАМИ": {
        description: "Легкое, необычное и очень вкусное сочетание капусты брокколи, помидоров черри и кедрового ореха, заправленное ореховым соусом!",
        weight: "200 ГР",
        price: "500 Р",
        ETP: 0,
        ingredients: [],
        image: "/5.png",
        tags: ["салаты"],
    },
    "САЛАТ «ПО-КИТАЙСКИ» С РУБЦОМ": {
        description: "Пекинская капуста, огурцы свежие, перец болгарский, морковь, говяжий рубец, азиатский соус",
        weight: "200 гр",
        price: "550 Р",
        ETP: 0,
        ingredients: [],
        tags: ["салаты"],
    },
    "САЛАТ ИЗ СВЕЖИХ ОВОЩЕЙ": {
        weight: "250 ГР",
        price: "450 Р",
        description: "",
        ingredients: [
            "Огурцы свежие п/ф",
            "Помидоры п/ф",
            "Морковь сырая очищенная п/ф",
            "Перец болгарский п/ф",
            "Редис п/ф",
            "Масло Оливковое",
            "Зелень п/ф",
        ],
        ETP: 10,
        tags: ["салаты"],
    },
    "ЦЕЗАРЬ С КУРИНОЙ ГРУДКОЙ СУ-ВИД": {
        description: "Куриная грудка су-Вид, черри, сыр Пармезан, лист салата, крутоны из белого хлеба, соус Цезарь.",
        weight: "270 ГР",
        price: "650 Р",
        ETP: 0,
        ingredients: [],
        tags: ["салаты"],
    },
    "САЛАТ ИЗ ГОВЯЖЬЕЙ ВЫРЕЗКИ": {
        description: "Вырезка, болгарский перец, огурец, лайм, лист салата, имбирный соус",
        weight: "200 Гр",
        price: "890 Р",
        ETP: 0,
        ingredients: [],
        tags: ["салаты"],
    },
    "САЛАТ «ХАТАН»": {
        description:
            "Полезный и питательный салат из отварной свеклы, инжира, грецких орехов, орехов кешью и листьев салата под нежным кисло-сладким соусом.",
        weight: "150 ГР",
        price: "590 Р",
        ingredients: [
            "Свекла отварная очищенная п/ф",
            "Инжир сушеный",
            "Грецкий орех|",
            "Кешью орех",
            "Соус Гурман п/ф",
            "Лист салата п/ф",
            "Помидоры Черри п/ф",
            "Зелень п/ф",
        ],
        ETP: 10,
        image: "/8.png",
        tags: ["салаты"],
    },
    "УХА «БАЙКАЛЬСКАЯ»": {
        description: "Ароматная и наваристая уха из семги и байкальской рыбы подается с бородинским хлебцем и икрой.",
        weight: "350 ГР",
        price: "790 P",
        ingredients: [
            "Лук репчатый очищенный п/ф",
            "Морковь сырая очищенная п/ф",
            "Чеснок п/ф",
            "Масло растительное",
            "Помидоры п/ф",
            "Картофель отв. очищен. п/ф",
            "Соль столовая",
            "Перец черный молотый",
            "Зелень п/ф",
            "Хлеб черный",
            "Икра мойвы (Macaro)",
            "Соус Французский п/ф/",
            "Булочка пражская 40гр",
            "Омуль свежий филе п/ф",
        ],
        image: "/9.png",
        ETP: 15,
        tags: ["cупы"],
    },
    "КРЕМ-СУП ГРИБНОЙ": {
        weight: "280 Гр",
        price: "410 Р",
        description: "",
        ingredients: [
            "Шампиньоны свежие очищенные п/ф",
            "Бульон сухой Дашида, Кнорр, Хонда...",
            "Зелень п/ф",
            "соль столовая",
            "Масло растительное.",
            "Лук репчатый пассерованный",
            "Сыр плавленный",
            "Сливки 22% п/ф",
            "Мука пшеничная в/сорт",
            "Масло сливочное",
            "Картофель очищенный п/ф",
            "Соус Песто п/ф",
            "Гренки на Цезарь п/ф",
            "Кедровый орех",
        ],
        tags: ["cупы"],
        ETP: 15,
    },
    "ТЫКВЕННЫЙ КАРРИ": {
        description: "Сытный и густой суп с насыщенным вкусом тыквы и карри",
        weight: "280 Гр",
        price: "450 Р",
        ingredients: [
            "Паста Карри",
            "Молоко кокосовое",
            "Тыква кубик св/м",
            "Морковь сырая очищенная п/ф",
            "Лук репчатый очищенный п/ф",
            "Чеснок п/Ф",
            "Корень имбиря п/ф",
            "Сливки 22% п/сі",
            "Соль столовая",
            "Перец черный молотый",
            "Зелень п/ф",
            "Соус Песто п/ф",
            "земля из маслин п/ф",
            "Картофель очищенный п/ф",
            "Булочка французская 40гр",
            "Чеснок п/ф",
            "Зелень п/ф",
        ],
        tags: ["cупы"],
        ETP: 15,
        image: "/25.png",
    },
    "ДОМАШНИЙ СУП-ЛАПША С ГОВЯДИНОЙ": {
        weight: "300 ГР",
        price: "650 Р",
        description: "",
        ingredients: [
            "Бульон из говядины п/ф",
            "Говядина филе отварная п/ф",
            "Тесто на буузы и лапшу п/ф",
            "Лук репчатый очищенный п/ф",
            "Соль столовая",
            "Перец черный молотый",
            "Зелень п/ф",
        ],
        tags: ["cупы"],
        ETP: 10,
        image: "/26.png",
    },
    "ДОМАШНИЙ СУП-ЛАПША С БАРАНИНОЙ": {
        weight: "300 ГР",
        price: "750 Р",
        description: "",
        ingredients: [
            "Баранина отварная п/ф",
            "• Тесто на буузы и лапшу п/ф",
            "Лук репчатый очищенный п/ф",
            "Соль столовая",
            "Перец черный молотый",
            "Зелень п/ф",
            "Бульон из баранины п/ф",
        ],
        tags: ["cупы"],
        ETP: 10,
        image: "/26.png",
    },
    ДОТУР: {
        description: "Домашний суп-лапша из бараньих онутренностей",
        weight: "300 гр",
        price: "680 Р",
        ingredients: [
            "Внутренности отварные п/ф",
            "Тесто на буузы и лапшу п/ф",
            "Бульон из баранины п/ф",
            "Лук репчатый очищенный п/ф",
            "Соль столовая",
            "Перец черный молотый",
            "Зелень п/ф",
        ],
        tags: ["cупы"],
        ETP: 10,
    },
    "СУП «ЧИНГИСХАН»": {
        description: "Традиционный суп бурят-монгольской кухни на совяжьем бульоне с пельменями банш, кусочками гобядины.",
        weight: "350 ГР",
        price: "750 Р",
        ETP: 0,
        ingredients: [
            "Бульон из говядины п/ф",
            "Говядина филе отварная п/ф",
            "Пельмени Банш 16гр п/ф",
            "Соль столовая",
            "Перец черный молотый",
            "Зелень п/с",
            "Лук репчатый очищенный п/ф",
        ],
        tags: ["cупы"],
    },
    "ОРООХОТОЙ ШУЛЭН": {
        description: "Деревенский суп на костном говяжьем бульоне с мясом и зернами пшеницы",
        weight: "300 ГР",
        price: "520 Р",
        ETP: 0,
        ingredients: [],
        tags: ["cупы"],
    },
    "СУП «СТЕПНОЙ»": {
        description: "Суп с бараньими фрикадельками, рваной домашней лапшой и черемшой",
        weight: "300 ГР",
        price: "760 Р",
        ETP: 0,
        ingredients: [],
        tags: ["cупы"],
    },
    БАНТАН: {
        description: "Монгольский мучной суп с кусочками мяса и зеленью",
        weight: "300 Гр",
        price: "450 Р",
        ETP: 0,
        ingredients: [],
        image: "/10.png",
        tags: ["cупы"],
    },
    БУХЛЁОР: {
        description: "Традиционный бурятский суп из баранины с картофелем, морковью и зеленью",
        weight: "300 ГР",
        price: "750 Р",
        ETP: 0,
        ingredients: [],
        image: "/11.png",
        tags: ["cупы"],
    },
    'СУП "ХАНСКИЙ"': {
        description:
            "Сытный суп с нутом и перловой крупой на бараньем бульоне с добавлением кедрового молока и ароматных специй. Подается с шашлычком из баранины.",
        weight: "350 Гр",
        price: "790 р",
        ingredients: [
            "Мука кедровая",
            "Морковь отварная очищенная п/ф",
            "Масло сливочное",
            "Водоросли Вакаме",
            "Кардамон",
            "Перец черный молотый",
            "Соль столовая",
            "Зелень п/ф",
            "Жир бараний",
            "Баранина филе п/ф",
            "Корень имбиря п/ф",
            "Чеснок п/ф",
            "Лук репчатый очищенный п/ф",
            "Перловка отварная п/д",
            "Внутренности отварные п/ф",
            "Вода питьевая",
            "Бульон из баранины п/ф",
            "Кедровый орех",
        ],
        ETP: 15,
        image: "/12.png",
        tags: ["cупы"],
    },
    "РУБЛЕННЫЕ БУУЗЫ 3Ш": {
        price: "490 Р",
        weight: "",
        description: "Подают на листе салата с маринованным луком и горчицей собственного приготовления.",
        ingredients: ["Рубленное мясо говядина 75 гр", "Горчица собственного приготовлени...", "Лук красный маринованный п/ф", "Лист салата п/ф"],
        ETP: 0,
        image: "/1.png",
        tags: ["горячие блюда"],
    },
    "РУБЛЕННЫЕ БУУЗЫ 5Ш": {
        price: "750 Р",
        weight: "",
        ETP: 0,
        description: "Подают на листе салата с маринованным луком и горчицей собственного приготовления.",
        ingredients: ["Рубленное мясо говядина 75 гр", "Горчица собственного приготовлени...", "Лук красный маринованный п/ф", "Лист салата п/ф"],
        tags: ["горячие блюда"],
        image: "/1.png",
    },
    "ТРАДИЦИОННЫЕ БУУЗЫ 3Ш": {
        price: "440 Р",
        weight: "",
        ETP: 0,
        description: "Подают на листе салата с маринованным луком.",
        ingredients: ["Буузы говядина/свинина 75гр", "Горчица собственного приготовлени...", "Лук красный маринованный п/ф", "Лист салата п/ф"],
        image: "/1.png",
        tags: ["горячие блюда"],
    },
    "ТРАДИЦИОННЫЕ БУУЗЫ 5Ш": {
        price: "680 Р",
        weight: "",
        ETP: 0,
        description: "Подают на листе салата с маринованным луком.",
        ingredients: ["Буузы говядина/свинина 75гр", "Горчица собственного приготовлени...", "Лук красный маринованный п/ф", "Лист салата п/ф"],
        image: "/1.png",
        tags: ["горячие блюда"],
    },
    "БУУЗЫ ИЗ БАРАНИНЫ 3Ш": {
        price: "490 Р",
        weight: "",
        ETP: 0,
        description: "",
        ingredients: [],
        image: "/1.png",
        tags: ["горячие блюда"],
    },
    "БУУЗЫ ИЗ БАРАНИНЫ 5Ш": {
        price: "750 Р",
        weight: "",
        ETP: 0,
        description: "",
        ingredients: [],
        image: "/1.png",
        tags: ["горячие блюда"],
    },
    "БУУЗЫ С ВНУТРЕНОСТЯМИ 3Ш": {
        price: "420 Р",
        weight: "",
        ETP: 0,
        description: "Подают на листе салата с маринованным луком.",
        ingredients: ["Буузы с потрохами 55 гр МСК", "Горчица собственного приготовлени....", "Лук красный маринованный п/ф", "Лист салата п/ф"],
        image: "/1.png",
        tags: ["горячие блюда"],
    },
    "БУУЗЫ С ВНУТРЕНОСТЯМИ 5Ш": {
        price: "690 Р",
        weight: "",
        ETP: 0,
        description: "Подают на листе салата с маринованным луком.",
        ingredients: ["Буузы с потрохами 55 гр МСК", "Горчица собственного приготовлени....", "Лук красный маринованный п/ф", "Лист салата п/ф"],
        image: "/1.png",
        tags: ["горячие блюда"],
    },
    "БУУЗЫ ОВОЩНЫЕ 3Ш": {
        price: "330 Р",
        weight: "",
        ETP: 0,
        description: "Подают на листе салата и со сметаной..",
        ingredients: ["Морковь", "Перец болгарский", "Капуста обычная", "Лук", "Цукини "],
        image: "/1.png",
        tags: ["горячие блюда"],
    },
    "БУУЗЫ ОВОЩНЫЕ 5Ш": {
        price: "430 Р",
        weight: "",
        ETP: 0,
        description: "Подают на листе салата и со сметаной..",
        ingredients: ["Морковь", "Перец болгарский", "Капуста обычная", "Лук", "Цукини "],
        image: "/1.png",
        tags: ["горячие блюда"],
    },
    "КАЛМЫЦКИЕ БЕРЕГИ СО СМЕТАНОЙ": {
        description: "Одно из любимых блюд\n6 Калмыкии приготовленных из фарша говядины и свинины",
        weight: "5 ШТ",
        price: "550 Р",
        ingredients: ["Бёрики 1шт 30 гр п/ф/", "Сметана п/ф"],
        ETP: 0,
        tags: ["горячие блюда"],
    },
    ХУГАБША: {
        description: "Нежная печень в рубашке из внутреннего бараньего жира с маринованным лучком",
        weight: "200 гр",
        price: "850 Р",
        ingredients: [
            "Перец черный молотый",
            "Лист салата п/ф",
            "Соль столовая",
            "Зелень п/ф",
            "Лук репчатый очищенный п/ф",
            "Печень в рубашке (хугабша) п/ф",
        ],
        image: "/14.png",
        ETP: 15,
        tags: ["горячие блюда"],
    },
    "КУРИНАЯ ГРУДКА С ОВОЩАМИ": {
        description: "Сочная куриная грудка су-вид на пару с овощами и горчичным тар-таром.",
        weight: "260 ГР",
        price: "710 Р",
        ingredients: [],
        ETP: 0,
        tags: ["горячие блюда"],
    },
    "МЕДАЛЬОН ИЗ ГОВЯЖЬЕЙ ВЫРЕЗКИ": {
        description: "Ароматные нежные медальоны, запеченные в духовке. Подаются с овощами гриль",
        weight: "250 ГР",
        price: "1290 Р",
        ingredients: [],
        ETP: 0,
        tags: ["горячие блюда"],
    },
    "МЕДАЛЬОНЫ ИЗ СВИНИНЫ": {
        description: "Свинина запеченная в печи и томленая с ароматными травами и специями",
        weight: "250/60/50 ГР",
        price: "1100 Р",
        ingredients: [],
        ETP: 0,
        tags: ["горячие блюда"],
    },
    "ХУШУУРЫ С ГОВЯДИНОЙ 4ШТ": {
        description: "",
        price: "",
        weight: "",
        ingredients: ["Фарш рубленный из говядины на бу....", "Тесто на буузы и лапшу п/ф", "Мука пшеничная в/сорт"],
        image: "/13.png",
        tags: ["горячие блюда"],
        ETP: 10,
    },
    "ХУШУУРЫ С ГОВЯДИНОЙ И ЧЕРЕМШОЙ 4ШТ": {
        description: "",
        price: "",
        weight: "",
        ingredients: ["Тесто на буузы и лапшу п/ф", "Зелень п/ф|", "Фарш рубленный из говядины на бу....", "Мука пшеничная в/сорт"],
        tags: ["горячие блюда"],
        ETP: 10,
        image: "/27.png",
    },
    "ОВОЩНЫЕ ХУШУУРЫ 4ШТ": {
        description: "",
        price: "",
        weight: "",
        ingredients: ["цукини", "перец", "морковь", "лук"],
        tags: ["горячие блюда"],
        ETP: 10,
        image: "/13.png",
    },
    "ХУШУУРЫ С КУРИЦЕЙ И СЫРОМ 4ШТ": {
        description: "",
        price: "",
        weight: "",
        ingredients: ["Тесто на буузы и лапшу п/ф", "Куриная грудка копчёная", "Зелень п/ф|", "Сыр Гауда"],
        ETP: 10,
        image: "/13.png",
        tags: ["горячие блюда"],
    },
    "МИНИ-ПИРОЖКИ ФИРМЕННЫЕ": {
        description: "Пирожки с сыром, шпинатом и зеленью, грибами",
        weight: "300 ГР",
        price: "450 Р",
        ETP: 0,
        ingredients: [],
        tags: ["горячие блюда"],
    },
    "ЦУЙВАН с говядиной": {
        description: "Домашняя лапша, обжаренная с говядиной, овощами и луком",
        weight: "400 ГР",
        price: "730 Р",
        ingredients: [
            "Зелень п/ф",
            "Тесто на буузы и лапшу п/ф",
            "Масло растительное",
            "Бульон сухой Дашида, Кнорр, Хонда....",
            "Перец черный молотый",
            "соль столовая.",
            "Чеснок п/ф",
            "Перец болгарский п/Ф|",
            "Морковь сырая очищенная п/ф",
            "Лук репчатый очищенный п/ф|",
            "Говядина тазобедренная филе п/ф",
        ],
        ETP: 15,
        image: "/15.png",
        tags: ["горячие блюда"],
    },
    "СТЕЙК ИЗ ГОВЯДИНЫ С ЗЕЛЕНЫМ ЧИЛИ СОУСОМ": {
        description: "(без гарнира)\nЦЕНА ЗА 100 ГР",
        weight: "100 ГР",
        price: "980 Р",
        ETP: 0,
        ingredients: [],
        tags: ["горячие блюда"],
    },
    Бэлэг: {
        description: "Говядина острая с овощами на сковороде. Подается с домашними лепешками и тремя соусами",
        weight: "280/120/70 ГР",
        price: "950 Р",
        ETP: 0,
        ingredients: [
            "Зелень п/ф",
            "Тесто на буузы и лапшу п/ф",
            "Соус Песто п/ф",
            "Чеснок п/ф",
            "Капуста Пекинская п/ф",
            "Морковь сырая очищенная п/ф",
            "Лук репчатый очищенный п/ф",
            "Перец болгарский п/ф",
            "Говядина мапосольнная су-вид п/ф...",
            "Соус Кимчи",
            "Соус Терияки",
            "Соус томатный Барбекю",
            "Масло растительное",
            "Соль столовая",
            "Перец черный молотый",
            "Соус Деми Гляс п/ф",
        ],
        tags: ["горячие блюда"],
        image: "/29.png",
    },
    "ЖАРЕХА ИЗ СВИНИНЫ": {
        description: "Кусочки свинины, обжаренные на сковороде со специями, травами и луком",
        weight: "450 ГР",
        ETP: 0,
        ingredients: [],
        price: "1280 Р",
        tags: ["горячие блюда"],
    },
    "УЖИН ПАСТУХА": {
        description: "Говяжья печень обжаренная с луком в сливках",
        weight: "350 ГР",
        price: "950 Р",
        ingredients: [
            "Соль столовая",
            "Перец черный молотый",
            "Зелень п/ф",
            "Печень говяжья очищенная п/ф",
            "Лук репчатый очищенный п/ф",
            "Чеснок п/ф",
            "Масло растительное",
            "Сливки 22% п/ф",
            "Вода питьевая",
        ],
        ETP: 0,
        tags: ["горячие блюда"],
        image: "/28.png",
    },
    "КАРТОШКА ЖАРЕННАЯ НА СКОВОРОДЕ ПО-ДОМАШНЕМУ": {
        description: "По желанию подается со свининой или с салом и чесноком",
        weight: "350 Гр",
        price: "420 Р",
        ETP: 0,
        ingredients: [],
        tags: ["горячие блюда"],
    },
    "БАЯН ТАЛА": {
        description: "Филе Баранины, обжаренное на сковороде с картофелем и баклажаном, специями, травами и луком",
        weight: "350 ГР",
        price: "1380 Р",
        ETP: 0,
        ingredients: [],
        tags: ["горячие блюда"],
    },
    КОЧЕВНИК: {
        description: "Говяжий язык и печень с тушеными овощами",
        weight: "380 ГР",
        price: "950 Р",
        ETP: 0,
        ingredients: [],
        tags: ["горячие блюда"],
    },
    "КОЛБАСКИ ФИРМЕННЫЕ": {
        description:
            "Сочные мясные колбаски, собственного приготовления, обжаренные на гриле. Подаются с острым брусничным соусом.\nНа выбор: ГОВЯДИНА, БАРАНИНА, СВИНИНА, ЭРЕЭЛЖЭ (баранья печень, жир, лук)",
        weight: "",
        price: "",
        ETP: 0,
        ingredients: [],
        tags: ["горячие блюда"],
    },
    ХОРХОГ: {
        description:
            "История этого блюда уходит далеко в древность, во времена кочевников. Национальное бурят-монгольское блюдо. Нежнейшие бараньи ребра с овощами и зеленью готовятся на раскаленных камнях и томятся в собственном соку. Особенная технология приготовления делает это блюдо незабываемым.",
        weight: "800 ГР",
        price: "2900 Р",
        ETP: 0,
        ingredients: ["Перец Болгарский", "Морковь", "Соус терияки", "Кимчи", "Баранина ребра", "Лепешка"],
        image: "/16.png",
        tags: ["горячие блюда на компанию"],
    },
    "АССОРТИ «АЛТАН ЗАГАС»": {
        description: "Байкальская рыба, запеченные кусочки кеты, муксуна с картофелем айдахо. Подается с голландским соусом и соусом тар-тар.",
        weight: "580 ГР",
        price: "3500 Р",
        ETP: 0,
        ingredients: [],
        tags: ["горячие блюда"],
    },
    "МАЛЕНЬКАЯ БУРЯТИЯ": {
        description: "Хушууры мясные, буузы с потрошками, хугабша, костный мозг, морковный салат, хлебцы",
        weight: "650 ГР",
        price: "1700 Р",
        ETP: 0,
        ingredients: [],
        tags: ["горячие блюда на компанию"],
    },
    "БАРАНИНА ОСТРАЯ С ДОЛЬКАМИ ОБЖАРЕННОГО КАРТОФЕЛЯ": {
        description: "",
        weight: "400 ГР",
        price: "1500 Р",
        ETP: 0,
        ingredients: [],
        tags: ["горячие блюда на компанию"],
    },
    "МЯСНОЙ НАБОР": {
        description: "Говяжьи колбаски собственного приготовления, запеченная свинина, ароматная баранья корейка, овощи гриль.",
        weight: "700 ГР",
        price: "3490 Р",
        ETP: 0,
        ingredients: [],
        tags: ["горячие блюда на компанию"],
    },
    "АССОРТИ «НУХЭР»": {
        description: "Оленина на шпажке, запеченная куриная грудка и сочные свиные медальоны с картофельными дольками и аджикой",
        weight: "730 ГР",
        price: "2700 Р",
        ETP: 0,
        ingredients: [],
        tags: ["горячие блюда на компанию"],
    },
    "ЗВЕЗДА КОЧЕВНИКА": {
        description:
            "Обжаренная с овощами острая говядина, подается с пресной лепешкой, листьями салата и свежим гуакамоле. Блюдо фламбируется при гостях.",
        weight: "390 ГР",
        price: "1500 Р",
        ETP: 0,
        ingredients: [
            "Лук репчатый очищенный п/ф",
            "Чеснок п/ф",
            "Масло растительное",
            "Капуста брокколи",
            "Перец болгарский п/ф",
            "Лист салата п/ф",
            "Соус Бульгоги маринад",
            "Сыр Пармезан",
            "Зелень п/ф",
            "Тесто на буузы и лапшу п/ф",
            "Говядина тазобедренная филе п/ф",
        ],
        tags: ["горячие блюда на компанию"],
        image: "/30.png",
    },
    "КОЛБАСНЫЙ МИКС": {
        description: "Ассорти из трех видов колбасок собственного приготовления (говяжьи, свиные, бараньи, зрезлжа)!\nПодаются с овощами гриль",
        weight: "510/240 ГР",
        price: "2900 Р",
        ETP: 0,
        ingredients: [],
        tags: ["горячие блюда на компанию"],
    },
    ОРДА: {
        description: "Мясное ассорти национальных бурятских блюд (ребра бараньи, хушууры, буузы с бараниной, банш)",
        weight: "970 ГР",
        price: "2840 р",
        ETP: 0,
        ingredients: [],
        image: "/17.png",
        tags: ["горячие блюда на компанию"],
    },
    "ОВОЩИ ГРИЛЬ": {
        weight: "220 ГР",
        price: "390 Р",
        ingredients: [
            "Лимонный концентрат",
            "Приправа для гриля",
            "Масло растительное",
            "Зелень п/ф",
            "Соус Песто п/ф",
            "Соус-крем Бальзамический",
            "Перец болгарский п/ф",
            "Помидоры п/ф",
            "Лук репчатый очищенный п/ф",
            "Морковь сырая очищенная п/ф",
            "Кабачки / цукини п/ф",
            "Лист салата п/ф",
        ],
        ETP: 15,
        description: "",
        tags: ["гарниры и блюда из овощей"],
    },
    "ЗАПЕЧЕННЫЙ КАРТОФЕЛЬ": {
        weight: "150 ГР",
        price: "320 Р",
        ETP: 0,
        description: "",
        ingredients: [],
        tags: ["гарниры и блюда из овощей"],
    },
    "КАРТОФЕЛЬ ПО-ДОМАШНЕМУ": {
        description: "свинина со салом",
        weight: "200 Гр",
        price: "200 Р",
        ETP: 0,
        ingredients: [],
        tags: ["гарниры и блюда из овощей"],
    },
    "КАРТОФЕЛЬ ФРИ": {
        weight: "180 ГР",
        price: "320 Р",
        ETP: 0,
        ingredients: [],
        description: "",
        tags: ["гарниры и блюда из овощей"],
    },
    "РИС ОТВАРНОЙ": {
        weight: "150 ГР",
        price: "190 Р",
        ETP: 0,
        ingredients: [],
        description: "",
        tags: ["гарниры и блюда из овощей"],
    },
    "ХЛЕБНАЯ КОРЗИНА": {
        description: "(французский - белый, пражский - черный, злакоВый)",
        weight: "240 Гр",
        price: "250 Р",
        ETP: 0,
        ingredients: [],
        tags: ["гарниры и блюда из овощей"],
    },
    БУЛОЧКА: {
        description: "МУЛЬТИЗЛАКОВАЯ, ПРАЖСКАЯ - ЧЕРНЫЙ, ФРАНЦУЗСКАЯ - БЕЛЫЙ",
        weight: "",
        price: "",
        ETP: 0,
        ingredients: [],
        tags: ["гарниры и блюда из овощей"],
    },
    СОУСЫ: {
        description: "СОУС ГОРЧИЦА, СОБСТВЕННОГО ПРИГОТОВЛЕНИЯ, БАРБЕКЮ, БРУСНИЧНЫЙ, СОУС МАНГО-ЧИЛИ, СМЕТАННЫЙ, СОУС «ПЕСТО», СОУС ОРЕХОВЫЙ, АДЖИКА",
        weight: "50 ГР",
        price: "100 Р",
        ETP: 0,
        ingredients: [],
        tags: ["соусы"],
    },
    "КЕДРОВАЯ ШИШКА": {
        description: "Нежное муссовое пирожное на сливочной основе с начинкой из брусничного желе и молочного крема с цельными кедровыми орешками",
        weight: "120 ГР",
        price: "430 Р",
        ETP: 0,
        ingredients: [],
        tags: ["десерты"],
    },
    "ПИРОЖНОЕ ПЛОМБИР ИЗ КУМЫСА С БРУСНИЧНЫМ МУССОМ И КЕДРОВЫМ ПРАЛИНЕ": {
        description: "Нежный сливочный мусс с начинкой из Брусничного желе с кедровым пралине, политым нежным, белым шоколадом.",
        weight: "150 ГР",
        price: "560 Р",
        ETP: 0,
        ingredients: [],
        tags: ["десерты"],
    },
    "ФИНИКОВЫЙ ПУДИНГ": {
        description: "Нежный финиковый бисквит, политый соусом из солёной карамели под шариком нежного сливочного пломбира.",
        weight: "120/30 ГР",
        price: "500 P",
        ETP: 0,
        ingredients: [],
        tags: ["десерты"],
    },
    "ТОРТ ЧЕРЕМУХОВЫЙ С БРУСНИЧНЫМ МУССОМ": {
        weight: "150 ГР",
        price: "500 Р",
        ETP: 0,
        ingredients: [],
        description: "",
        tags: ["десерты"],
    },
    МОРОЖЕНОЕ: {
        weight: "70/20 ГР",
        price: "130 Р",
        ETP: 0,
        ingredients: [],
        description: "",
        tags: ["десерты"],
    },
    "ТАЕЖНЫЙ ДЕСЕРТ": {
        description: "Шоколадный фондан, облепиховый мусс и мороженое",
        weight: "160 Гр",
        price: "450 Р",
        ETP: 0,
        ingredients: [],
        tags: ["десерты"],
    },
    "ТОРТ МОРКОВНЫЙ": {
        weight: "150 ГР",
        price: "550 Р",
        ETP: 0,
        ingredients: [],
        description: "",
        tags: ["десерты"],
    },
    "ФРУКТОВАЯ ТАРЕЛКА": {
        description: "Яблоки, апельсины, груши, виноград",
        weight: "500 ГР",
        price: "600 Р",
        ETP: 0,
        ingredients: [],
        tags: ["десерты"],
    },
    "БООВЫ СО СГУЩЕНКОЙ": {
        weight: "120/50 ГР",
        price: "280 Р",
        description: "",
        ingredients: [],
        ETP: 0,
        image: "/18.png",
        tags: ["десерты"],
    },
    ХОЛИСО: {
        description: "Национальный бурятский десерт, состоящий из черемуховой муки, сметаны, ягод брусники, кедровых орехов и вафельной крошки.",
        weight: "140 ГР",
        price: "450 Р",
        ETP: 0,
        ingredients: [],
        image: "/19.png",
        tags: ["десерты"],
    },
};
