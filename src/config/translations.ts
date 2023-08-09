import { Language } from '@shared-types/index';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import config from '.';

const resources = {
  [Language.EN]: {
    translation: {
      about: 'About',
      projects: 'Projects',
      stack: 'Stack',
      education: 'Education',
      cv: 'CV',
      noPage: 'Looks like the page you are trying to open does not exist.',
      home: 'Back to Home page',
      position: {
        seniorLead: 'Senior Frontend Developer / Team Lead',
        senior: 'Senior Frontend Developer',
        core: 'Core Fullstack Contributor',
        be: 'Senior Backend Developer',
      },
      location: {
        fr: 'Paris, France',
        ams: 'Amsterdam, Netherlands',
        ein: 'Eindhoven, Netherlands',
        kz: 'Almaty, Kazakhstan',
      },
      description: {
        athenian: {
          p1: 'Athenian, a French startup, specialized in offering engineering metrics to engineering leaders. This B2B business developed a SaaS product and was established in late 2019. By May 2023, it had amassed a customer base of over 40 active clients.',
          p2: 'I joined Athenian as the sole Frontend Developer and took ownership of the entire frontend codebase for the web application. After a year, the company underwent another round of investment and expanded, leading to my promotion to the position of Team Lead. During this time, I conducted numerous interviews and had the privilege of hiring several exceptional talents. The team under my leadership was known as the Application Team, tasked with the responsibility of developing all customer-facing applications.',
          p3: 'Athenian operated as a fully remote company, and I collaborated with them from my home in Almaty.',
          p4: "Regrettably, in May 2023, Athenian ceased its operations. The closure came as a significant surprise to all of its employees, as it was our CEO's decision to pursue a new opportunity.",
        },
        luggo: {
          p1: "LuggageCare was a Dutch startup that pioneered an innovative service: delivering airline passengers' luggage to either the airport or their final destination. Despite its groundbreaking concept, the company remained relatively small, employing around 10 individuals in total.",
          p2: "I joined LuggageCare as a Senior Frontend Developer, tasked with enhancing their React application. Upon joining, the company's service had not yet been launched. It took us approximately six months to comprehensively develop and unveil the service to the public. We constructed two distinct services: 'Door to Airport' and 'Door to Door'. While primarily focused on the frontend, I also made contributions to the backend application, which was developed using Django.",
          p3: 'I became a part of LuggageCare while residing in Amsterdam, commuting to their office located near the Schiphol airport. However, with the onset of the pandemic in 2020, I approached the management and requested to relocate back to Kazakhstan, allowing me to continue working remotely from there.',
          p4: 'After six months of contributing as a developer at LuggageCare, I was promoted to the position of Team Lead. In this capacity, I led a team comprising two frontend and two backend developers.',
        },
        jumbo: {
          p1: 'Frontmen was a Dutch consultancy company that assisted me in relocating to the Netherlands. They were seeking an experienced Vue developer to assign to a new client project at one of the largest supermarket chains in the Netherlands, called Jumbo. I successfully passed all the interview rounds, including one with Jumbo employees, while still in Kazakhstan, and subsequently moved to the new country.',
          p2: 'My goal at Jumbo was to refactor an existing legacy web store application using the Vue stack. My experience there was so successful that Jumbo hired many more developers from Frontmen shortly after.',
          p3: "The Jumbo headquarters, where I commuted every day, was located in a small town called Veghel, which was near Eindhoven, the larger city where I lived. After working at Jumbo for over a year, I made the decision to switch projects and relocate to Amsterdam. Fortunately, this transition was feasible due to Frontmen's nature as a consultancy company. Alongside the project change, I also aimed to transition stacks, specifically looking for a React project. However, when I was ready to make the switch, I encountered an unfortunate situation: there were no available projects matching my criteria. As a result, I found myself on the 'bench', which did not particularly appeal to me. Ultimately, this was the primary reason for my decision to leave the company.",
        },
      },
      achievements: {
        title: 'Some of my achievements',
        athenian: {
          p1: 'Introduced best practices to the project and performed extensive refactoring of legacy code, resulting in significantly improved readability and maintainability.',
          p2: "Spearheaded the implementation of a new product named Align, which not only boosted sales but also significantly enhanced the company's profitability.",
          p3: 'Actively took part in the recruitment process for new developers, both frontend and backend, contributing to the formation of an exceptional team comprised of top-tier talent.',
        },
        luggo: {
          p1: 'Elevated the quality and reliability of the application by implementing unit tests and creating Storybook stories.',
          p2: "Enhanced the app's appeal and user-friendliness by incorporating responsive design, dynamic styling themes, and establishing a comprehensive design system.",
          p3: "Enhanced the app's user experience by implementing instant updates through server-side events.",
        },
        jumbo: {
          p1: 'Successfully eliminated a substantial amount of unmaintainable legacy code and replaced it with a Vue.js application.',
          p2: 'Enhanced the code quality by establishing a component library, implementing unit tests, and creating Storybook stories.',
          p3: 'Resolved the issue of a slow legacy API by introducing a Node middleware BFF (Backend For Frontend) that efficiently served GraphQL queries.',
        },
      },
    },
  },
  [Language.KZ]: {
    translation: {
      about: 'Өзім туралы',
      projects: 'Жобалар',
      stack: 'Стэк',
      education: 'Білім',
      cv: 'Резюме',
      noPage: 'Сіз ашайын деп тұрған парақша жоқ сияқты.',
      home: 'Бастапқы парақшаға қайтып оралу',
      position: {
        seniorLead: 'Аға фронтэнд әзірлеуші / Жетекші',
        senior: 'Аға фронтэнд әзірлеуші',
        core: 'Негізгі толық стэк әзірлеуші',
        be: 'Аға бэкэнд әзірлеуші',
      },
      location: {
        fr: 'Париж, Франция',
        ams: 'Амстердам, Нидерланд',
        ein: 'Эйндховен, Нидерланд',
        kz: 'Алматы, Қазақстан',
      },
      description: {
        athenian: {
          p1: 'Athenian инженерлік жетекшілерге инженерлік көрсеткіштерді жеткізетін француз стартапы еді. Ол басқа мекемелерге бағдарламалық жасақтама қызметін (SaaS) ұсынған болатын. Мекеме 2019 жылдың соңында ашылып, 2023 жылдың мамыр айында оның 40-қа жуық клиенттері болған.',
          p2: 'Мен Athenian-ға жалғыз фронтэнд әзірлеушісі ретінде қосылып, вэб қолданбаның бүкіл фронтэнд кодының иесі болдым. Бір жылдан соң мекеме келесі инвестиция кезеңінен өтіп, өсе бастады. Сол кезде мен жетекші лауазымына ие болдым. Көптеген кандидаттармен тілдесу өткізіп, бірнеше дарынды әзірлеушілерді жұмысқа алдым. Менің тобым Қолданбалар тобы деп аталды және біз мекеменің барлық клиенттерге бағытталған қолданбаларына жауап бердік.',
          p3: 'Athenian толықтай қашықтан жұмыс әдісін қолданды және мен олармен Алматыдан қашықтан жұмыс істедім.',
          p4: 'Өкінішке орай, 2023 жылдың мамыр айында Athenian жабылды. Менің ойымша, бұл барлық әріптестерім үшін күтпеген жағдай болды, бірақ біздің бас директор басқа мекемеге кетуге шешім қабылдады.',
        },
        luggo: {
          p1: 'LuggageCare - әуе жүргіншілердің тасымал жүктерін әуежайға немесе ақырғы баратын жерлеріне дейін жеткізуді ұсынатын инновацилық қызметті жасаған нидерландтық стартап. Ол құрамында он шақты адам жұмыс істеген кішігірім мекеме еді.',
          p2: 'Мен LuggageCare мекемесіне олардың React қолданбасын дамыту үшін аға фронтэнд әзірлеуші болып кірдім. Мен кіргенде олардың қызметі әлі жарияланбаған болатын. Жарты жылдың ішінде біз оны толықтай бітіріп, баршаға жария еттік. Екі түрлі қызмет көрсетілген болатын: есіктен әуежайға дейін және есіктен есікке дейін. Фронтэндпен қатар мен Django-мен жасалған бэкенд қолданбасына да әзірлеу жұмыстарын жасадым.',
          p3: 'Мен LuggageCare мекемесіне Амстердамда тұрған кезімде кірдім және күнделікті олардың Схипхол әуежайының қасында орналасқан кеңсесіне қатынадым. 2020 жылы пандемия басталған кезде, мен басшылықтан Қазақстанға оралып, сол жерден әрі қарай жұмыс істеуіме рұқсат берулерін сұрадым.',
          p4: 'Әзірлеуші болып жарты жыл жұмыс істеген соң, мені жетекші лауазымына көтерді. Ол кезде мен екі фронтэнд пен екі бэкенд әзірлеушілерінен құралған топты басқардым.',
        },
        jumbo: {
          p1: 'Frontmen маған Нидерланд еліне көшуге септігін тигізген нидерландтық кеңесші мекемесі еді. Олар Jumbo атты ірі супермаркет желісі болып табылатын жаңа клиент жобасына тағайындау үшін тәжірибелі Vue әзірлеушісін іздеген. Мен әлі Қазақстанда бола барлық (Jumbo қызметкерлерімен де) тілдесу кезеңдерінен өтіп, содан соң жаңа мемлекетке көштім.',
          p2: 'Jumbo-дағы негізгі мақсатым Vue стэкті қолданып, сондағы бар ескі онлайн дүкен қолданбасын өзгерту болатын. Менің ол жерде істеген жұмысымның сәтті болғаны соншалық, айтарлықтай қысқа мерзімнің ішінде Jumbo Frontmen-нен әлдеқайда көбірек әзірлеушілерді жұмысқа алатын болды.',
          p3: 'Мен күнделікті қатынаған Jumbo-ның бас кеңсесі кішігірім Veghel атты қалашықта орналасқан-тұғын, ал мен соның қасындағы үлкенірек Eindhoven қаласында тұрдым. Jumbo-да бір жылдан астам уақыт жұмыс істеген соң, мен жобаны ауыстырып, Амстердамға көшуге бел будым. Қуанышқа орай, бұл өзгеріс Frontmen-нің кеңесшілік табиғатына орай мүмкін болды. Тек жобаны ғана ауыстырып қоймай, сонымен қатар стэкті де ауыстырғым келді, нақтырақ айтқанда React-пен жұмыс істеуді қаладым. Алайда, ауысуға келгенде, қол жетімді жобалар табылмай қалды. Нәтижесінде мен күту тізіміне түсіп қалдым, бұл мен үшін күтпеген жағдай болды. Ақыр аяғында, бұл компаниядан кетудің басты себебі болды.',
        },
      },
      achievements: {
        title: 'Кейбір жетістектерім',
        athenian: {
          p1: 'Жобаға ең үздік әдістерді әкелу және ескі кодтың біразын өзгерту арқылы оқуды және қолдау көрсетуді әлдеқайда оңайырақ еттім.',
          p2: 'Align атты жаңа өнімді әзірлеп, мекеменің сату деңгейін және табысын ұлғайттым.',
          p3: 'Бэкэнд пен фронтэнд салаларындағы әзірлеушілерді жұмысқа қабылдау үрдісіне қатысып, үздік білімді дарындардан құралған топты құрастыруға ат салыстым.',
        },
        luggo: {
          p1: 'Қолданба сапасы мен беріктігін модульдік тестілер мен Storybook хикаялары арқылы жақсарттым.',
          p2: 'Бейімделген дизайн, динамикалық дизайн тақырыптары мен дизайн жүйесін жасау арқылы қолданбаны әсемдеу әрі қолданушыға ыңғайлы етіп жасадым.',
          p3: 'Сервер жақты оқиғалар көмегімен қолданбаның UX-ін жақсарттым.',
        },
        jumbo: {
          p1: 'Қолдау көрсетуді қиындатқан ескі кодтың біразын Vue.js қолданбасымен сәтті ауыстырып өзгерттім.',
          p2: 'Код сапасын компоненттер кітапханасын құру, модульдік тестілерді және Storybook хикаяларын құрастыру арқылы жақсарттым.',
          p3: 'Ескі баяу API мәселесін тиімді GraphQL сұратымдарын қамтамасыз еткен Node аралық бағдарламасын (фронтэнд үшін арналған бэкэнд) әзірлеу арқылы шештім.',
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: config.defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
