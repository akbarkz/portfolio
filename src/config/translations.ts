import { Language } from '@shared-types/index';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import config from '.';

const resources = {
  [Language.EN]: {
    translation: {
      projects: 'Projects',
      stack: 'Stack',
      cv: 'CV',
      noPage: 'Looks like the page you are trying to open does not exist.',
      home: 'Back to Home page',
      underDevelopment: 'This page is currently under development...',
      footerText: 'Akbar Abdrakhmanov 2023',
      more: 'more',
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
        ca: 'Hamilton, Canada',
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
        vueStorefront: {
          p1: "Vue Storefront, an open-source e-commerce solution, currently boasts over 10 thousand GitHub stars. I had the privilege of becoming a core contributor to this project during its early stages. The project's primary goal was to develop a Progressive Web Application (PWA) utilizing Vue on the frontend. It served as a view layer for various e-commerce platforms such as Magento, alongside a backend middleware built with Node. My contributions extended to both the Vue and Node applications.",
          p2: 'During my time at Vue Storefront, I had the opportunity to collaborate with exceptional individuals who were, and still are, outstanding software engineers. Their expertise greatly influenced my growth, not only within my home country but on a global scale, contributing to the advancement of my career.',
        },
        infitIt: {
          p1: 'Played a pivotal role in the development of a versatile Internet Banking solution, which subsequently found its way into multiple premier banks across Kazakhstan. Shortly after joining the company, my contributions were swiftly recognized, leading to a well-deserved promotion to the position of Frontend Team Lead. In this capacity, I successfully guided and managed a dedicated team of four frontend developers, steering our collective efforts toward the creation of innovative and user-centric banking solutions.',
        },
        kaspi: {
          p1: "During my tenure at Kaspi Bank, an institution renowned for its exceptional innovation and prominent recognition in Kazakhstan, I was actively involved in a pivotal project. This project was geared towards the development of a user-friendly and efficient solution, designed to enable seamless discovery of various places and points of interest. The endeavor aligned perfectly with the bank's reputation for pioneering initiatives that cater to the evolving needs of its clientele.",
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
        infinIt: {
          p1: 'Spearheaded the formulation of a robust architecture that enabled seamless support for multiple banks through a unified application. This visionary approach laid the groundwork for efficient multi-bank integration, reducing development complexity and enhancing overall scalability.',
          p2: 'Successfully partitioned a substantial monolithic React application into discrete repositories. This strategic initiative not only simplified maintenance but also facilitated independent development, enabling more streamlined updates and improved codebase manageability.',
          p3: "Uplifted code quality by introducing cutting-edge technologies such as TypeScript and Sass. By embracing these advanced tools, I bolstered the application's reliability and maintainability. Additionally, the adoption of modular components streamlined development processes and enhanced code reusability.",
        },
        kaspi: {
          p1: "Played a pivotal role in shaping the overarching architecture of the solution. Through strategic planning and meticulous design, I contributed to establishing a strong and coherent foundation that supported the project's objectives.",
          p2: "Successfully executed data gathering from diverse online sources, encompassing a wide spectrum of geospatial information, including addresses, administrative boundaries, and points of interest. This comprehensive data aggregation enhanced the solution's depth and utility.",
          p3: 'Spearheaded the development of a cutting-edge mobile application employing React Native and Django. This innovative application facilitated the seamless recording and storage of GPS coordinates for various objects, both online and offline. The offline functionality enabled data collection even in regions with limited or no internet connectivity, thereby enriching the geolocation dataset.',
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
      about: {
        header: 'About',
        p1: "I'm Akbar Abdrakhmanov, a seasoned software engineer hailing from the picturesque city of Almaty, Kazakhstan. With a passion for crafting exceptional digital experiences, I've spent years honing my skills in the realm of web development, specializing in the art of frontend technologies.",
        p2: "My journey through the ever-evolving landscape of software engineering has seen me flourish on the frontend frontier, where I've become a master of React, Vue, and the intricate dance of JavaScript and TypeScript. But my expertise doesn't stop there – I've ventured into the realms of backend development, databases, and the intricate world of CI/CD.",
        p3: "As a remote contractor, I've had the privilege of collaborating with diverse teams and clients from around the globe, bringing innovation and efficiency to every project I touch. Whether it's creating captivating user interfaces or architecting robust backend systems, I thrive on transforming ideas into tangible digital realities.",
      },
      education: {
        header: 'Education',
        thesis: {
          title: 'Graduation work title',
          mcmaster: 'A Regression Test Selection Technique Applied to Legacy Systems',
          narxoz: 'Usage of Enterprise Resource Planning Systems',
          satbayev: 'Wi-Fi Nets: Vulnerabilities, Attacks and Ways of Their Protection',
        },
        description: {
          mcmaster: {
            p1: "After working for a few years as a developer at one of the leading banks in Kazakhstan, I reached a point where I desired to expand my knowledge and expertise in my field. This drove me to pursue a Master's degree.",
            p2: "In Kazakhstan, an annual competition called 'Bolashak' offered a chance to secure a state scholarship for studying abroad. This scholarship covered all expenses, including tuition fees and living costs, along with a generous stipend. I applied for the scholarship, successfully navigated all the required exams, and secured a spot at McMaster University, one of Canada's premier technical universities.",
            p3: 'This marked my inaugural journey abroad, and Canada proved to be the ideal destination where I spent two enriching years in pursuit of education. Fond memories continue to linger from that period, and I maintain contact with some remarkable individuals I met during my studies.',
            p4: "An integral condition of the 'Bolashak' scholarship mandated returning to Kazakhstan and contributing five consecutive years of service to the country after graduation. Consequently, following my graduation in 2011, I returned to my homeland, fulfilling the scholarship's stipulation and legal requirement.",
          },
          narxoz: {
            p1: "As I concluded my studies at Satbayev University, I was already deeply entrenched in my career at BTA Bank, a prominent financial institution in Kazakhstan. My trajectory within the bank was promising, and as I contemplated a long-term commitment to the financial industry, I recognized the value of acquiring a formal financial education. This rationale led me to pursue admission into Narxoz University, renowned for its excellence in economic disciplines. Over the span of two years, I engaged in distance learning, culminating in the attainment of my Bachelor's degree in Finance.",
          },
          satbayev: {
            p1: 'Upon completing my studies with honors at the best physics-mathematics high school in Kazakhstan, I embarked on a path in the technical field. Fueled by my keen interest in computers, I decided to channel my aspirations into an IT specialty. During that period, a unique opportunity existed to secure a scholarship, granting the privilege of free education in any university across the country.',
            p2: 'I deliberately chose a discipline with a limited number of scholarships and without a paid alternative. This ensured that only highly educated individuals would be drawn to it. Remarkably, I excelled in all the examinations and secured the top position with the highest score. Consequently, I secured admission to Satbayev University, a pivotal juncture that spanned five years, culminating in the attainment of a Specialist Engineer degree, designed to encompass both Bachelor and Master degrees.',
          },
        },
        degree: {
          masc: 'Master of Applied Science',
          bachelor: 'Bachelor',
          specialist: 'Specialist Engineer',
        },
        specialty: {
          se: 'Software Engineering',
          finance: 'Finance',
          is: 'Organization and Technology of Information Security',
        },
      },
    },
  },
  [Language.KZ]: {
    translation: {
      projects: 'Жобалар',
      stack: 'Стэк',
      cv: 'Резюме',
      noPage: 'Сіз ашайын деп тұрған парақша жоқ сияқты.',
      home: 'Бастапқы парақшаға қайтып оралу',
      underDevelopment: 'Бұл парақша әлі әзірленуде...',
      footerText: 'Әбдірахман Акбар, 2023',
      more: 'көбірек',
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
        ca: 'Гамильтон, Канада',
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
        vueStorefront: {
          p1: 'Ашық қолжетімді электрондық коммерция шешімі болып табылатын Vue Storefront-тың қазіргі таңда 10 мыңнан астам Github жұлдызы бар. Мен бұл жобаға ерте кезеңінде қосулуыма жолым болды. Жобаның негізгі мақсаты фронтэндте Vue.js қолданып, алдыңғы қатарлы вэб қолданбасын (PWA) әзірлеу еді. Ол Magento сияқты әртүрлі электрондық коммерция платформары үшін көрсету қабатын, және оған қоса Node арқылы жазылған бэкенд аралық бағдарламасын ұсынды. Мен Vue және Node қолданбаларының екеуінің де дамуына үлесімді қостым.',
          p2: 'Vue Storefront жобасымен жұмыс істеген кезімде, өз ісінің білікті мамандары болып табылатын бірқатар адамдармен әріптес болуыма сәті түсті. Олардың құзыреті менің тек туған елімнің аумағында емес, сонымен қатар дүниежүзілік ауқымда маман ретінде өсуіме үлкен септігін тигізді.',
        },
        infitIt: {
          p1: 'Infin-IT мекемесінде күллі Қазақстан аумағындағы бірнеше озық банктерге жолын тапқан әмбебап интернет банкинг өнімін әзірлеуде негізгі рөл атқардым. Мекемеге кіргеннен соң аз уақытта жетістіктерім көзге түсіп, фронтэнд жетекшісі лауазымына лайықты түрде тағайындалдым. Бұл рөлде төрт фронтэнд әзірлеушілерден құралған топты басқарып, инновациялық және клиентке бағдарланған банкинг өнімдерін жасаудағы бірлескен жұмысты жүргіздім.',
        },
        kaspi: {
          p1: 'Өзінің айрықша инновациялары мен Қазақстандағы біртуар танымалдығымен ерекшеленетін Kaspi Bank мекемесінде жұмыс істегенімде, мен маңызды жобаға белсенді ат салыстым. Бұл жоба әр түрлі орындар мен көрнекі жерлерді бөгетсіз табуға арналған ыңғайлы және тиімді шешім еді. Бұл бастама банктің клиенттерінің өсіп келе жатқан қажеттіліктерін қанағаттандыруына бағытталған инновациялық кәсіпкер ретіндегі беделіне әбден сәйкес келетін.',
        },
      },
      achievements: {
        title: 'Кейбір жетістіктерім',
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
          p2: 'Кодтың сапасын компоненттер кітапханасын құру, модульдік тестілерді және Storybook хикаяларын құрастыру арқылы жақсарттым.',
          p3: 'Ескі баяу API мәселесін тиімді GraphQL сұратымдарын қамтамасыз еткен Node аралық бағдарламасын (фронтэнд үшін арналған бэкэнд, BFF) әзірлеу арқылы шештім.',
        },
        infinIt: {
          p1: 'Бірыңғайланған қолданба арқылы бірнеше банктерді бөгелмей қолдауды қамтамасыз ететін берік архитектураны әзірлеуді басқардым.',
          p2: 'Күрделі монолиттік React қолданбаны бірнеше репозиторийлерге сәтті түрде бөлдім. Бұл стратегиялық бастама тек қызмет көрсетуді ғана оңайлатып қоймай, сонымен қатар жаңарту үрдістерін жеңілдететін және кодты басқаруды жақсартатын тәуелсіз әзірлеуді қамтамасыз етті.',
          p3: 'Typescript пен Sass секілді үздік технологияларды ендіру арқылы кодтың сапасын жақсарттым. Осы арқылы қолданбаның сенімділігі мен қызмет көрсетілімдігін көтердім. ',
        },
        kaspi: {
          p1: 'Өнімнің жан-жақты архитектурасын құруда түйінді рөл атқардым. Стратегиялық жоспарлау мен мұқият жобалау арқылы жобаның мақсатына жетуіне көмектесетін берік әрі жүйелі негіз қалыптастыруға ат салыстым.',
          p2: 'Мекен-жайлар, әкімшілік шекаралар мен қызығу нүктелерін қосқандағы кең ауқымды геокеңістікті ақпаратты қамтитын деректерді алуан түрлі онлайн дереккөздерінен сәтті түрде жинадым. Бұл деректерді кешенді біріктіру өнімнің ауқымдылығы мен пайдалылығын ұлғайтты.',
          p3: 'React Native пен Django көмегімен алдыңғы қатарлы мобилді қолданбаны әзірледім. Бұл инновациялық қолданба әр түрлі объекттердің GPS-координаттарын онлайн да, офлайн форматында да бөгетсіз жинау және сақтауды оңайлатты. Автономды функционалдылық деректерді интернеті шектеулі немесе жоқ болған аймақтарда да жинауды қамтамасыз етті, соның нәтижесінде геолокация деректерінің жинағын байытты.',
        },
      },
      main: {
        greeting: 'Сәлем!',
        welcome: 'Менің жеке вебсайтыма қош келдіңіз!',
        text: {
          p1: 'Бұл вэбсайт менің құзыретімнің ауқымын сипаттайтын код дүниеме және мұқият іріктелген бастамалар жинағыма терезе болып табылады. Өнерлік сезімімді айқындайтын жеке жобаларымнан бастап, техникалық шеберлігімді көрсететін кәсіпқой әріптестіктеріме дейін, мен сіздерді жұмыстарымның алаңына шақырамын.',
          p2: 'Байланысамын немесе қызметтесемін немесе жай бағдарлама инженерлік ісіне қатысты қызықты мүмкіндіктерді талқылаймын десеңіз, менімен хабарласуыңызды сұраймын. Кіріп шыққаныңыз үшін алғысымды білдіремін және сіз менің сандық дүниеме шолуды ұнатасыз деп үміттенемін.',
          p3: 'Бұл вэбсайттың бастапқы коды ашық қолжетімділікте және ол менің Github тіркеулік жазбамда қолжетімді. Көргіңіз келсе, мархабат.',
        },
      },
      about: {
        header: 'Өзім жайлы',
        p1: 'Менің есімім Әбдірахман Акбар, мен Қазақстанның көркем Алматы қаласында тұратын тәжірибелі бағадарламалар инженерімін. Мен вэб әзірлеу саласында, атап айтқанда фронтэнд бағытында, көптеген жылдар бойы білімімді ұштап келемін. Мен ерекше бірегей сандық өнімдерді құрастыруға қызығамын.',
        p2: 'Шексіз дами беретін бағдарламалар әзірлеу өрісінде мен фронтэнд саласында асқан жетістіктерге жетіп, React, Vue фрэймворктарының және де Javascript пен Typescript тілдерінің шебері болдым. Бірақ менің құзыретім бұнымен ғана шектелмей, бэкенд әзірлеу, дерекқорлар және күрделі CI/CD салаларын да меңгере білдім.',
        p3: 'Қашықтан мердігер ретінде мен дүние жүзі ауқымында әркелкі топтар мен клиенттермен жұмыс істедім. Істеген жобаларымның бәрінде де инновация мен нәтижелілік амалдарын қолдана білдім.',
      },
      education: {
        header: 'Білім',
        thesis: {
          title: 'Дипломдық жұмыстың тақырыбы',
          mcmaster: 'Ескі жүйелерге қолданылатын регрессиялық тестілерді іріктеу техникасы',
          narxoz: 'Кәсіпорын қорларын жоспарлау жүйелерін қолдану',
          satbayev: 'Wi-Fi жүйелері: осалдықтар, шабуылдар және олардан қорғану тәсілдері',
        },
        description: {
          mcmaster: {
            p1: 'Қазақстандағы озық банктердің бірінде бірнеше жыл жұмыс істеген соң, мен өз саламда білімім мен құзыретімді ұлғайтқым келді. Магистратураға түсуге бел будым.',
            p2: 'Қазақстанда шетелдік университеттерде оқуға жол беретін "Болашақ" атты мемлекеттік грант ұтып алатын мүмкіндік болды. Ол шәкірттің оқу төлемін, тұру шығындарын толықтай өтеп, оған қоса жақсы шәкіртақы ұсынатын. Мен "Болашақ" бағдарламасына қатысып, керекті емтихандарынан сәтті өтіп, Канаданың озық техникалық университеттерінің бірі McMaster-ге түстім.',
            p3: 'Бұл менің өмірімдегі шетелге бірінші сапарым еді, және ол жерде оқумен екі тамаша жыл өткіздім. Сол кезеңнен көптеген оңтайлы естеліктер қалды, ол жерде танысқан кейбір адамдармен әлі күнге дейін жақсы қарым-қатынастамын.',
            p4: '"Болашақ" бағдарламасының міндетті шарттарының бірі оқу бітіргеннен кейін Қазақстанға оралып, бес жыл бойы жергілікті мекемелерде жұмыс істеп шығу болатын. Сәйкесінше, 2011 жылы оқу бітірген соң, мен бағдарламаның шарттары мен заңды талаптарын орындау үшін туған еліме қайтып келдім.',
          },
          narxoz: {
            p1: 'Satbayev университетінде оқуды бітірерде, мен Қазақстанның әйгілі қаржы мекемесі БТА банкінде әжептәуір жұмыс атқарып үлгердім. Менің бүл мекемедегі мансабым айтарлықтай сәтті болғандықтан және мен ол жерде ұзақ уақыт жұмыс істеймін деп ойлағамдықтан, қаржы саласында да білім алсам артық болмас деп ойладым. Сол үшін өзінің экономика бағытымен кең танымал Narxoz университетіне оқуға түстім. Екі жыл сырттан оқып, қаржы саласында бакалавр дәрежесіне ие болдым.',
          },
          satbayev: {
            p1: 'Қазақстандағы ең күшті физика-математикалық мектепті үздік бітірген соң, өзімнің мансабымды техникалық салада құрамын деп шештім. Компьютерлерге қызығушылығым зор болғандықтан, IT мамандығына түскім келді. Сол уақытта мемлекеттің кез келген университетінде тегін оқуға мүмкіндік болған.',
            p2: 'Мен грант саны шектеулі және ақылы бөлімшесі жоқ болған мамандықты әдейі таңдадым. Оның себебі оған тек білім деңгейі жоғары адамдар түседі деген ой еді. Мен барлық емтихандардан жақсы өтіп, нәтижесінде тізімде ең жақсы нәтижемен бірінші болып шықтым. Содан соң Satbayev университетіне барлығы бес жылға созылған, бакалавр және магистр дәрежелерін біріктіретін инженер-маман дәрежесін иелену үшін оқуға түстім.',
          },
        },
        degree: {
          masc: 'Қолданбалы ғылым магистры',
          bachelor: 'Бакалавр',
          specialist: 'Инженер-маман',
        },
        specialty: {
          se: 'Бағдарлама инженерлік ісі',
          finance: 'Қаржы',
          is: 'Ақпараттық қауіпсіздікті ұйымдастыру мен технологиясы',
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
