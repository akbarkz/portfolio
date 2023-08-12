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
      underDevelopment: 'This page is currently under development...',
      footerText: 'Akbar Abdrakhmanov 2023',
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
      main: {
        greeting: 'Hi there!',
        welcome: 'Welcome to my portfolio website!',
        text: {
          p1: 'This portfolio is a window into my world of code, a curated collection of my endeavors that showcases the depth and breadth of my expertise. From personal projects that showcase my creative flair to professional collaborations that demonstrate my technical prowess, I invite you to explore the tapestry of my work.',
          p2: "Feel free to reach out if you'd like to connect, collaborate, or simply chat about the exciting possibilities of software engineering. Thank you for visiting, and I hope you enjoy your journey through my digital domain.",
          p3: 'The source code for this website is open source and available on my GitHub account, so feel free to take a look!',
        },
      },
      aboutText: {
        p1: "I'm Akbar Abdrakhmanov, a seasoned software engineer hailing from the picturesque city of Almaty, Kazakhstan. With a passion for crafting exceptional digital experiences, I've spent years honing my skills in the realm of web development, specializing in the art of frontend technologies.",
        p2: "My journey through the ever-evolving landscape of software engineering has seen me flourish on the frontend frontier, where I've become a master of React, Vue, and the intricate dance of JavaScript and TypeScript. But my expertise doesn't stop there – I've ventured into the realms of backend development, databases, and the intricate world of CI/CD.",
        p3: "As a remote contractor, I've had the privilege of collaborating with diverse teams and clients from around the globe, bringing innovation and efficiency to every project I touch. Whether it's creating captivating user interfaces or architecting robust backend systems, I thrive on transforming ideas into tangible digital realities.",
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
      underDevelopment: 'Бұл парақша әлі әзірленуде...',
      footerText: 'Әбдірахман Акбар, 2023',
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
      main: {
        greeting: 'Сәлем!',
        welcome: 'Менің жеке вебсайтыма қош келдіңіз!',
        text: {
          p1: 'Бұл вэбсайт менің құзыретімнің ауқымын сипаттайтын код дүниеме және мұқият іріктелген бастамалар жинағыма терезе болып табылады. Өнерлік сезімімді айқындайтын жеке жобаларымнан бастап, техникалық шеберлігімді көрсететін кәсіпқой әріптестіктеріме дейін, мен сіздерді жұмыстарымның алаңына шақырамын.',
          p2: 'Байланысамын немесе қызметтесемін немесе жай бағдарлама инженерлік ісіне қатысты қызықты мүмкіндіктерді талқылаймын десеңіз, менің хабарласуыңызды сұраймын. Кіріп шыққаныңыз үшін алғысымды білдіремін және сіз менің сандық дүниеме шолуды ұнатасыз деп үміттенемін.',
          p3: 'Бұл вэбсайттың бастапқы коды ашық қолжетімділікте және ол менің Github тіркеулік жазбамда қолжетімді. Көргіңіз келсе, мархабат.',
        },
      },
      aboutText: {
        p1: 'Менің есімім Әбдірахман Акбар, мен Қазақстанның көркем Алматы қаласында тұратын тәжірибелі бағадарламалар инженерімін. Мен вэб әзірлеу саласында, атап айтқанда фронтэнд бағытында, көптеген жылдар бойы білімімді ұштап келемін. Мен ерекше бірегей сандық өнімдерді құрастыруға қызығамын.',
        p2: 'Шексіз дами беретін бағдарламалар әзірлеу өрісінде мен фронтэнд саласында асқан жетістіктерге жетіп, React, Vue фрэймворктарының және де Javascript пен Typescript тілдерінің шебері болдым. Бірақ менің құзыретім бұнымен ғана шектелмей, бэкенд әзірлеу, дерекқорлар және күрделі CI/CD салаларын да меңгере білдім.',
        p3: 'Қашықтан мердігер ретінде мен дүние жүзі ауқымында әркелкі топтар мен клиенттермен жұмыс істедім. Істеген жобаларымның бәрінде де инновация мен нәтижелілік амалдарын қолдана білдім.',
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
