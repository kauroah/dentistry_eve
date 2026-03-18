import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Цены на стоматологические услуги в Казани — Eva Dent",
  description:
    "Полный прайс-лист на лечение зубов, имплантацию, протезирование, брекеты, хирургию в Казани. Прозрачное ценообразование, рассрочка. Стоматология Eva Dent.",
};

const priceCategories = [
  {
    title: "Имплантология",
    href: "/stomatologiya/implantatsiya",
    items: [
      { service: "Имплант Osstem", price: "55 000 ₽" },
      { service: "Имплант Straumann", price: "120 000 ₽" },
      { service: "имплант medentica", price: "75 000 ₽" },
      { service: "Имплант Антожир (Франция) коронка + имплант - цементная фиксация", price: "75 000 ₽" },
      { service: "Имплант Астра тех нобель штрауман", price: "60 000 ₽" },
      { service: "Имплант системы astra tech с циркониевой коронкой", price: "85 000 ₽" },
      { service: "Имплант тонкий 3,0", price: "40 000 ₽" },
      { service: "Установка импланта системы ADIN", price: "15 000 ₽" },
      { service: "Установка импланта корея Dio/Osstem акция", price: "39 900 ₽" },
      { service: "Установка 1 импланта системы SGS (Швейцария)", price: "20 000 ₽" },
      { service: "Операция имплантации системой \"Dio\" и \"Osstem\"", price: "55 000 ₽" },
      { service: "Операция имплантации системой \"Антожир\"", price: "75 000 ₽" },
      { service: "Хирургический этап установки импланта", price: "18 000 ₽" },
      { service: "Абатмент Straumann", price: "19 500 ₽" },
      { service: "Абатмент стандартный цементируемый Dio", price: "10 000 ₽" },
      { service: "Био Гайд мембрана", price: "25 000 ₽" },
      { service: "Био Осс", price: "25 000 ₽" },
      { service: "Мембрана Evolution (толстая) 20*20", price: "17 000 ₽" },
      { service: "Мембрана Evolution (толстая) 20*30", price: "25 000 ₽" },
      { service: "Мембрана Evolution (толстая) 25*25", price: "23 000 ₽" },
      { service: "Biogen Cancellous Granules BGS-09 (0,5 гр)", price: "15 000 ₽" },
      { service: "Biogen Cancellous Granules BGS-09 (1 гр)", price: "20 000 ₽" },
      { service: "Biogen Cancellous Granules BGS-09 (2 гр)", price: "25 000 ₽" },
      { service: "Гель BGM-GEL 0.5ml", price: "15 000 ₽" },
      { service: "Гель BGM-GEL 1 ml", price: "18 000 ₽" },
      { service: "Закрытый синус-лифтинг", price: "25 000 ₽" },
      { service: "Открытый синус-лифтинг", price: "50 000 ₽" },
      { service: "Установка формирователя десны", price: "8 000 ₽" },
      { service: "Формирователь десны astra tech", price: "10 000 ₽" },
      { service: "Формирователь десны нобель", price: "8 000 ₽" },
      { service: "Использование титановой мембраны", price: "20 000 ₽" },
      { service: "Винт самосверлящий", price: "5 000 ₽" },
      { service: "Извлечение внутреннего винта из имплантата", price: "10 000 ₽" },
      { service: "Цирконевая коронка на имплантате (доплата за материал)", price: "12 900 ₽" },
      { service: "Цирконевая коронка на имплантате (доплата за материал) премиум", price: "17 900 ₽" },
    ],
  },
  {
    title: "Ортопедия и протезирование",
    href: "/stomatologiya/ortopediya",
    items: [
      { service: "Условно-съёмный протез на 4 имплантах (акрил) всё включено", price: "250 000 ₽" },
      { service: "Условно-съёмный протез на 4 имплантах (диоксид циркония) всё включено", price: "350 000 ₽" },
      { service: "Условно-съёмный протез на 6 имплантах (акрил) всё включено", price: "300 000 ₽" },
      { service: "Условно-съёмный протез на 6 имплантах (диоксид циркония) всё включено", price: "400 000 ₽" },
      { service: "Балка ортопедическая", price: "120 000 ₽" },
      { service: "Бюгельный протез", price: "90 000 ₽" },
      { service: "Полный съемный протез (горячей полимеризации)", price: "35 000 ₽" },
      { service: "Полный съемный протез (по системе Vertex)", price: "40 000 ₽" },
      { service: "Частичный съемный протез до 3 зубов", price: "15 000 ₽" },
      { service: "Частичный съемный протез до 13 зубов", price: "20 000 ₽" },
      { service: "Нейлоновый протез полный 14 зуб", price: "60 000 ₽" },
      { service: "Нейлоновый протез частичный 4-13 зуб", price: "35 000 ₽" },
      { service: "Нейлоновый микропротез до 3 зуб", price: "40 000 ₽" },
      { service: "Косметический съемный протез из полиуретана \"Денталур\"", price: "30 000 ₽" },
      { service: "Металлокерамическая коронка", price: "20 000 ₽" },
      { service: "Металлокерамическая коронка с керамической шейкой", price: "20 000 ₽" },
      { service: "Керамическая коронка", price: "25 000 ₽" },
      { service: "Коронка из оксида циркония (3 Shape)", price: "40 000 ₽" },
      { service: "Коронка из оксида циркония (Procera)", price: "40 000 ₽" },
      { service: "Керамический винир", price: "35 000 ₽" },
      { service: "Керамическая коронка на импланте", price: "50 000 ₽" },
      { service: "Металлокерамическая коронка на импланте DIO", price: "45 000 ₽" },
      { service: "Цирконевая коронка на имплант", price: "60 000 ₽" },
      { service: "Временная пластмассовая коронка (в клинике)", price: "7 500 ₽" },
      { service: "Временная пластмассовая коронка (лабораторно)", price: "10 000 ₽" },
      { service: "Индивидуальный абатмент", price: "30 000 ₽" },
      { service: "Абатмент диоксид циркония", price: "20 000 ₽" },
      { service: "Временный абатмент + коронка", price: "20 000 ₽" },
      { service: "Шаровидные абатманты", price: "30 000 ₽" },
      { service: "Культевая вкладка (одноканальный зуб)", price: "10 000 ₽" },
      { service: "Культевая вкладка (двухканальный зуб)", price: "10 000 ₽" },
      { service: "Культевая вкладка (трехканальный зуб)", price: "100 000 ₽" },
      { service: "Циркониевая вкладка", price: "25 000 ₽" },
      { service: "Починка протеза", price: "7 000 ₽" },
      { service: "Коррекция съемного протеза", price: "9 000 ₽" },
      { service: "Перебазировка протеза", price: "7 000 ₽" },
      { service: "Винтовая фиксация коронок на импланты", price: "9 000 ₽" },
      { service: "Восковая моделировка", price: "5 000 ₽" },
    ],
  },
  {
    title: "Хирургическая стоматология",
    href: "/stomatologiya/khirurgiya",
    items: [
      { service: "Удаление зуба", price: "4 000 ₽" },
      { service: "Удаление зуба сложное", price: "7 000 ₽" },
      { service: "Удаление зуба атипическое", price: "10 000 ₽" },
      { service: "Удаление молочного зуба", price: "1 000 ₽" },
      { service: "Удаление ретинированного зуба мудрости", price: "13 000 ₽" },
      { service: "Удаление полуретинированного зуба мудрости", price: "10 000 ₽" },
      { service: "Ультразвуковое удаление зуба", price: "10 000 ₽" },
      { service: "Удаление осколка зуба", price: "1 500 ₽" },
      { service: "Удаление импланта", price: "10 000 ₽" },
      { service: "Удаление клинической коронки зуба", price: "3 000 ₽" },
      { service: "Резекция верхушки корня", price: "10 000 ₽" },
      { service: "Френулопластика (пластика уздечки)", price: "10 000 ₽" },
      { service: "Удаление уздечки языка у новорожденных", price: "7 500 ₽" },
      { service: "Вестибулопластика", price: "1 500 ₽" },
      { service: "Гингивопластика", price: "6 000 ₽" },
      { service: "Удлинение клинической коронки зуба", price: "3 000 ₽" },
      { service: "Закрытие рецессии десны", price: "15 000 ₽" },
      { service: "Удаление экзостоза", price: "7 000 ₽" },
      { service: "Удаление доброкачественной опухоли", price: "10 000 ₽" },
      { service: "Удаление папилломы", price: "1 000 ₽" },
      { service: "Цистэктомия губы", price: "10 000 ₽" },
      { service: "Вскрытие абсцесса", price: "5 000 ₽" },
      { service: "Внутриротовые разрезы с дренированием", price: "7 000 ₽" },
      { service: "Лечение альвеолита", price: "2 000 ₽" },
      { service: "Кюретаж постэкстракционной лунки", price: "2 000 ₽" },
      { service: "Пересадка костного блока", price: "100 000 ₽" },
      { service: "Костная пластика", price: "15 000 ₽" },
      { service: "Пластика альвеолярного отростка", price: "25 000 ₽" },
      { service: "Пластика перфорации гайморовой пазухи", price: "10 000 ₽" },
      { service: "Ушивание соустья гайморовой пазухи", price: "10 000 ₽" },
      { service: "Шинирование при переломе", price: "30 000 ₽" },
      { service: "Снятие шины", price: "7 000 ₽" },
      { service: "Компактостеотомия", price: "6 500 ₽" },
      { service: "Извлечение инородного тела", price: "5 000 ₽" },
    ],
  },
  {
    title: "Ортодонтия (Брекеты)",
    href: "/stomatologiya/brekety",
    items: [
      { service: "Консультация ортодонта", price: "1 500 ₽" },
      { service: "Осмотр, установка диагноза, план лечения", price: "3 000 ₽" },
      { service: "Установка металлических брекетов Damon Q (1 челюсть)", price: "150 000 ₽" },
      { service: "Установка металлических брекетов In-Ovation-R (1 челюсть)", price: "150 000 ₽" },
      { service: "Безлигатурные керамические брекеты In-Ovation-C", price: "150 000 ₽" },
      { service: "Безлигатурные металлические брекеты In-Ovation-R", price: "150 000 ₽" },
      { service: "Установка брекет-системы BioQuick", price: "150 000 ₽" },
      { service: "Установка брекет-системы DamonClear (керамические)", price: "150 000 ₽" },
      { service: "Установка брекет-системы Empower (Америка)", price: "150 000 ₽" },
      { service: "Установка брекет-системы Qucklear (Германия)", price: "300 000 ₽" },
      { service: "Элайнеры на одну челюсть", price: "300 000 ₽" },
      { service: "Пластинка детская для исправления прикуса", price: "30 000 ₽" },
      { service: "Трейнер взрослый", price: "25 000 ₽" },
      { service: "Трейнер детский", price: "25 000 ₽" },
      { service: "Каппа фиксирующая (ретенционный аппарат)", price: "7 000 ₽" },
      { service: "Установка ретенционного аппарата несъемный", price: "10 000 ₽" },
      { service: "Снятие брекетов и установка ретенционного аппарата", price: "15 000 ₽" },
      { service: "Снятие ретейнера", price: "2 000 ₽" },
      { service: "Повторное приклеивание металлического брекета", price: "10 000 ₽" },
      { service: "Повторное приклеивание керамического брекета", price: "15 000 ₽" },
      { service: "Брекет кнопка", price: "3 000 ₽" },
      { service: "Установка замка на 1 зуб", price: "3 500 ₽" },
      { service: "Установка металлических колец", price: "3 500 ₽" },
      { service: "Установка дуги суперэластичной (Ni-Ti)", price: "3 500 ₽" },
      { service: "Установка дуги ТМА", price: "3 000 ₽" },
      { service: "Установка пружины", price: "2 000 ₽" },
      { service: "Установка цепочки эластичной", price: "500 ₽" },
      { service: "Коррекция пластинки", price: "3 500 ₽" },
      { service: "Починка пластинки", price: "7 500 ₽" },
      { service: "Воск ортодонтический", price: "1 500 ₽" },
      { service: "Skyse (кристалл Сваровски)", price: "10 000 ₽" },
      { service: "Фторирование после снятия брекетов", price: "2 000 ₽" },
    ],
  },
  {
    title: "Терапевтическая стоматология",
    href: "/stomatologiya/lechenie-zubov",
    items: [
      { service: "Анестезия инфильтрационная", price: "1 300 ₽" },
      { service: "Анестезия проводниковая", price: "2 500 ₽" },
      { service: "Лечение среднего кариеса", price: "4 000 ₽" },
      { service: "Лечение глубокого кариеса", price: "7 000 ₽" },
      { service: "Эстетико-функциональное восстановление при кариесе", price: "4 000 ₽" },
      { service: "Эстетико-функциональное восстановление при пульпите", price: "9 000 ₽" },
      { service: "Реставрация зуба", price: "15 000 ₽" },
      { service: "Реставрация ранее депульпированного зуба", price: "7 000 ₽" },
      { service: "Формирование культи зуба", price: "4 500 ₽" },
      { service: "Временная пломба", price: "1 500 ₽" },
      { service: "Световая временная пломба (CLIP)", price: "2 500 ₽" },
      { service: "Медико-механическая обработка 1 канала", price: "1 500 ₽" },
      { service: "Пломбирование 1 канала гуттаперчей", price: "2 000 ₽" },
      { service: "Пломбирование 1 канала под ортопедию", price: "3 500 ₽" },
      { service: "Распломбирование 1 канала (гуттаперча)", price: "2 500 ₽" },
      { service: "Распломбирование 1 канала (паста)", price: "3 500 ₽" },
      { service: "Использование Протейперов", price: "3 500 ₽" },
      { service: "Наложение коффердама", price: "1 300 ₽" },
      { service: "Лечебная подкладка", price: "1 500 ₽" },
      { service: "Стекловолоконный штифт", price: "2 000 ₽" },
      { service: "Титановый штифт", price: "2 500 ₽" },
      { service: "Фиксация штифта", price: "2 000 ₽" },
      { service: "Извлечение штифта из канала", price: "3 500 ₽" },
      { service: "Винир", price: "15 000 ₽" },
      { service: "Люминиры", price: "95 000 ₽" },
      { service: "Композитная вкладка", price: "6 000 ₽" },
      { service: "Герметизация фиссур", price: "1 200 ₽" },
      { service: "Наложение девитализирующей пасты", price: "900 ₽" },
      { service: "Оказание экстренной помощи", price: "3 000 ₽" },
    ],
  },
  {
    title: "Пародонтология",
    href: "/stomatologiya/parodontologiya",
    items: [
      { service: "Закрытый кюретаж пародонтального кармана (2 зуба)", price: "2 000 ₽" },
      { service: "Открытый кюретаж пародонтального кармана (2 зуба)", price: "4 500 ₽" },
      { service: "Плазмалифтинг", price: "3 000 ₽" },
      { service: "Курс инъекций Линкомецина + Траумель С", price: "2 650 ₽" },
      { service: "Избирательная пришлифовка (3-4 зуба)", price: "1 500 ₽" },
      { service: "Иссечение гипертрофированной десны", price: "1 500 ₽" },
      { service: "Наложение пародонтальной повязки", price: "1 000 ₽" },
      { service: "Шинирование стекловолокном (3-4 зуба)", price: "10 000 ₽" },
      { service: "Медикаментозная обработка", price: "450 ₽" },
      { service: "Обучение гигиене полости рта", price: "500 ₽" },
      { service: "Фторирование препаратом InnoDent", price: "10 000 ₽" },
      { service: "Покрытие зуба с применением \"Глума\"", price: "2 000 ₽" },
      { service: "Снятие 1 шва, антисептическая обработка", price: "350 ₽" },
    ],
  },
  {
    title: "Профилактика и гигиена",
    href: "/stomatologiya/gigiena",
    items: [
      { service: "Проф. гигиена ультразвук + Air Flow", price: "5 000 ₽" },
      { service: "Проведение проф. гигиены УЗ (1 челюсть)", price: "2 500 ₽" },
      { service: "Удаление налета Air Flow (1 челюсть)", price: "3 500 ₽" },
      { service: "Снятие налета пастой", price: "2 000 ₽" },
      { service: "Покрытие фторсодержащей пастой (1 челюсть)", price: "2 500 ₽" },
      { service: "Отбеливание системой ZOOM 4 (1 этап)", price: "13 000 ₽" },
      { service: "Химическое отбеливание", price: "10 000 ₽" },
      { service: "Эндоканальное отбеливание", price: "4 500 ₽" },
      { service: "Набор для домашнего отбеливания", price: "10 000 ₽" },
      { service: "Карандаш для отбеливания", price: "4 000 ₽" },
      { service: "Шприц для отбеливания", price: "7 000 ₽" },
    ],
  },
  {
    title: "Общие услуги и диагностика",
    href: "/stomatologiya/tseny",
    items: [
      { service: "ОПТГ (панорамный снимок)", price: "1 000 ₽" },
      { service: "Диагностический снимок", price: "350 ₽" },
      { service: "Повторный контрольный снимок", price: "300 ₽" },
      { service: "Набор \"Антиспид\"", price: "300 ₽" },
      { service: "Снятие слепка альгинатной массой", price: "3 000 ₽" },
      { service: "Снятие слепка силиконовой массой", price: "5 000 ₽" },
      { service: "Снятие слепка индивидуальными ложками", price: "7 000 ₽" },
      { service: "Диагностическая модель из гипса", price: "3 000 ₽" },
      { service: "Индивидуальная ложка", price: "5 000 ₽" },
      { service: "Регистрация прикуса", price: "2 500 ₽" },
      { service: "Прикусной шаблон из воска", price: "4 000 ₽" },
      { service: "Наложение швов", price: "1 500 ₽" },
      { service: "Снятие швов", price: "500 ₽" },
      { service: "Перевязка после удаления", price: "1 000 ₽" },
      { service: "Перевязка раны в полости рта", price: "1 000 ₽" },
    ],
  },
];

export default function PricesPage() {
  return (
    <>
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Цены на стоматологические услуги
            </h1>
            <p className="text-lg text-muted-foreground">
              Полный прайс-лист клиники Eva Dent. Прозрачное ценообразование без скрытых платежей. 
              Возможна оплата в рассрочку.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {priceCategories.map((category) => (
              <Card key={category.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>
                    <Link href={category.href} className="text-primary hover:underline">
                      Перейти к разделу →
                    </Link>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
                    <div className="divide-y divide-border">
                      {category.items.map((item) => (
                        <div
                          key={item.service}
                          className="flex items-center justify-between py-2 text-sm first:pt-0 last:pb-0"
                        >
                          <span className="text-foreground pr-4">{item.service}</span>
                          <span className="shrink-0 font-medium text-primary whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-muted/50 p-6 text-center">
            <p className="mb-4 text-muted-foreground">
              Указаны актуальные цены. Точную стоимость лечения врач определит после
              консультации и диагностики. Возможна оплата в рассрочку.
            </p>
            <Button size="lg">Записаться на бесплатную консультацию</Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}