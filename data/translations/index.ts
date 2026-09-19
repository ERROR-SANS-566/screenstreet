export const translations = {
  en: {
    common: {
      home: 'Home',
      map: 'Map',
      about: 'About',
      explore: 'Explore Astana',
      
      learnMore: 'Learn More',
      getDirections: 'Get Directions',
      downloadQR: 'Download QR Code',
      backToMap: 'Back to Map',
      nearby: 'Nearby Places',
      loading: 'Loading...',
      error: 'An error occurred',
    },
    home: {
      hero: {
        title: 'Discover Astana.',
        subtitle: 'Understand its story.',
        description: 'A multilingual guide to help visitors discover Astana through QR codes and smart recommendations',
      },
      features: {
        title: 'Make Astana understandable to everyone',
        subtitle: 'Solving the language barrier for tourists visiting Kazakhstan',
        scanTitle: 'Scan & Discover',
        scanDesc: 'QR codes at landmarks lead you to detled information in your language',
        navigateTitle: 'Navigate Easily',
        navigateDesc: 'Get directions with 2GIS integration for real navigation',
      },
      languages: {
        title: 'Avlable in 7 languages',
        subtitle: 'Kazakh • Russian • English • Chinese • Turkish • German • French',
      },
      cta: {
        title: 'Start exploring Astana today',
        description: 'Visit our landmarks, scan QR codes, and discover the stories behind the city',
        button: 'Open Interactive Map',
      },
    },
    map: {
      title: 'Explore Astana',
      subtitle: 'Discover the most iconic landmarks and cultural sites in Astana',
      howToUse: {
        title: 'How to use Screenstreet',
        description: 'When visiting Astana, look for QR codes at landmarks. Scan them to access detled information in your language, ask our  guide questions, and get directions with 2GIS integration.',
      },
    },
    place: {
      about: 'About',
      history: 'History',
      facts: 'Interesting Facts',
      
      visitPlace: 'Visit This Place',
      qrCode: 'QR Code',
      scanQR: 'Scan this QR code to open this place',
      opensIn2GIS: 'Opens in 2GIS for real navigation',
    },
    about: {
      title: 'About Screenstreet',
      subtitle: 'Making Astana understandable to everyone through technology and multilingual support',
      problem: {
        title: 'The Problem',
        text: 'Foreign tourists visiting Kazakhstan often face language barriers that prevent them from fully understanding and appreciating the country\'s rich cultural heritage and modern landmarks. Without proper context and information in their native language, visitors miss out on the stories behind Astana\'s iconic sites.',
      },
      solution: {
        title: 'Our Solution',
        intro: 'Screenstreet bridges this gap by placing QR codes at key landmarks throughout Astana. When tourists scan these codes, they instantly access:',
        features: [
          'Detled information about the landmark in their language',
          'Historical context and interesting facts',
          'Personalized recommendations',
          'Navigation integration with 2GIS for easy route planning',
        ],
      },
      technology: {
        title: 'Technology Stack',
        frontend: 'Frontend',
        frontendItems: [
          'Next.js 15 with App Router',
          'TypeScript for type safety',
          'Tlwind CSS for modern UI',
          'Framer Motion for animations',
        ],
        apis: 'APIs',
        apisItems: [
          '2GIS Maps & Navigation',
          'Unsplash for landmark images',
          'QR code generation',
        ],
      },
      languages: {
        title: 'Supported Languages',
        list: [
          { flag: '🇰🇿', name: 'Kazakh' },
          { flag: '🇷🇺', name: 'Russian' },
          { flag: '🇬🇧', name: 'English' },
          { flag: '🇨🇳', name: 'Chinese' },
          { flag: '🇹🇷', name: 'Turkish' },
          { flag: '🇩🇪', name: 'German' },
          { flag: '🇫🇷', name: 'French' },
        ],
      },
      impact: {
        title: 'Expected Impact',
        items: [
          {
            title: 'Enhanced Tourist Experience:',
            text: 'Visitors gn deeper understanding of Kazakh culture and history',
          },
          {
            title: 'Breaking Language Barriers:',
            text: 'Information accessible in 7 major languages',
          },
          {
            title: 'Modern Tourism Infrastructure:',
            text: 'Showcasing Kazakhstan\'s commitment to international visitors',
          },
          {
            title: 'Scalable Solution:',
            text: 'Can be expanded to other cities and regions',
          },
        ],
      },
      project: {
        title: 'Project Information',
        text: 'Screenstreet is an educational project developed to demonstrate how modern technology can solve real-world problems in tourism and cultural accessibility. This MVP showcases the potential of combining QR codes, , and multilingual support to create an inclusive experience for international visitors to Kazakhstan.',
      },
    },
  },
  ru: {
    common: {
      home: 'Главная',
      map: 'Карта',
      about: 'О проекте',
      explore: 'Исследовать Астану',
      
      learnMore: 'Подробнее',
      getDirections: 'Построить маршрут',
      downloadQR: 'Скачать QR-код',
      backToMap: 'Вернуться к карте',
      nearby: 'Рядом',
      loading: 'Загрузка...',
      error: 'Произошла ошибка',
    },
    home: {
      hero: {
        title: 'Откройте для себя Астану.',
        subtitle: 'Поймите её историю.',
        description: 'Мультиязычный -гид, который помогает посетителям открывать Астану через QR-коды, местные истории и умные рекомендации.',
      },
      features: {
        title: 'Сделаем Астану понятной для всех',
        subtitle: 'Решение проблемы языкового барьера для туристов в Казахстане',
        scanTitle: 'Сканируй и открывай',
        scanDesc: 'QR-коды у достопримечательностей ведут к подробной информации на вашем языке',
        navigateTitle: 'Лёгкая навигация',
        navigateDesc: 'Получайте маршруты с интеграцией 2GIS для реальной навигации',
      },
      languages: {
        title: 'Доступно на 7 языках',
        subtitle: 'Казахский • Русский • Английский • Китайский • Турецкий • Немецкий • Французский',
      },
      cta: {
        title: 'Начните изучать Астану сегодня',
        description: 'Посещайте наши достопримечательности, сканируйте QR-коды и открывайте истории города',
        button: 'Открыть интерактивную карту',
      },
    },
    map: {
      title: 'Исследуйте Астану',
      subtitle: 'Откройте для себя самые знаковые достопримечательности и культурные объекты Астаны',
      howToUse: {
        title: 'Как использовать Screenstreet',
        description: 'При посещении Астаны ищите QR-коды у достопримечательностей. Отсканируйте их, чтобы получить подробную информацию на вашем языке, задать вопросы -гиду и построить маршрут с помощью 2GIS.',
      },
    },
    place: {
      about: 'Описание',
      history: 'История',
      facts: 'Интересные факты',
      
      visitPlace: 'Посетить это место',
      qrCode: 'QR-код',
      scanQR: 'Отсканируйте этот QR-код, чтобы открыть это место',
      opensIn2GIS: 'Открывается в 2GIS для реальной навигации',
    },
    about: {
      title: 'О проекте Screenstreet',
      subtitle: 'Делаем Астану понятной для всех с помощью технологий и мультиязычной поддержки',
      problem: {
        title: 'Проблема',
        text: 'Иностранные туристы, посещающие Казахстан, часто сталкиваются с языковыми барьерами, которые мешают им полностью понять и оценить богатое культурное наследие и современные достопримечательности страны. Без надлежащего контекста и информации на родном языке посетители упускают истории, стоящие за знаковыми местами Астаны.',
      },
      solution: {
        title: 'Наше решение',
        intro: 'Screenstreet устраняет этот пробел, размещая QR-коды у ключевых достопримечательностей по всей Астане. Когда туристы сканируют эти коды, они мгновенно получают доступ к:',
        features: [
          'Подробной информации о достопримечательности на их языке',
          'Историческому контексту и интересным фактам',
          '-гиду для персонализированных рекомендаций',
          'Интеграции навигации с 2GIS для легкого построения маршрутов',
        ],
      },
      technology: {
        title: 'Технологический стек',
        frontend: 'Frontend',
        frontendItems: ['Next.js 15 с App Router', 'TypeScript для типобезопасности', 'Tlwind CSS для современного UI', 'Framer Motion для анимаций'],
        apis: 'API',
        apisItems: ['2GIS Maps & Navigation', 'Unsplash для изображений', 'Генерация QR-кодов'],
      },
      languages: {
        title: 'Поддерживаемые языки',
        list: [
          { flag: '🇰🇿', name: 'Казахский' },
          { flag: '🇷🇺', name: 'Русский' },
          { flag: '🇬🇧', name: 'Английский' },
          { flag: '🇨🇳', name: 'Китайский' },
          { flag: '🇹🇷', name: 'Турецкий' },
          { flag: '🇩🇪', name: 'Немецкий' },
          { flag: '🇫🇷', name: 'Французский' },
        ],
      },
      impact: {
        title: 'Ожидаемый эффект',
        items: [
          { title: 'Улучшенный туристический опыт:', text: 'Посетители получают более глубокое понимание казахской культуры и истории' },
          { title: 'Преодоление языковых барьеров:', text: 'Информация доступна на 7 основных языках' },
          { title: 'Современная туристическая инфраструктура:', text: 'Демонстрация приверженности Казахстана международным посетителям' },
          { title: 'Масштабируемое решение:', text: 'Может быть расширено на другие города и регионы' },
        ],
      },
      project: {
        title: 'Информация о проекте',
        text: 'Screenstreet — это образовательный проект, демонстрирующий, как современные технологии могут решать реальные проблемы в туризме и культурной доступности. Этот MVP демонстрирует потенциал сочетания QR-кодов,  и мультиязычной поддержки для создания инклюзивного опыта для международных посетителей Казахстана.',
      },
    },
  },
  kk: {
    common: {
      home: 'Басты бет',
      map: 'Карта',
      about: 'Жоба туралы',
      explore: 'Астананы зерттеу',
      
      learnMore: 'Толығырақ',
      getDirections: 'Бағыт алу',
      downloadQR: 'QR-кодты жүктеп алу',
      backToMap: 'Картаға оралу',
      nearby: 'Жақын жерлер',
      loading: 'Жүктелуде...',
      error: 'Қате орын алды',
    },
    home: {
      hero: {
        title: 'Астананы ашыңыз.',
        subtitle: 'Оның тарихын түсініңіз.',
        description: 'QR-кодтар, жергілікті әңгімелер және ақылды ұсыныстар арқылы келушілерге Астананы ашуға көмектесетін көптілді -гид.',
      },
      features: {
        title: 'Астананы бәріне түсінікті етеміз',
        subtitle: 'Қазақстанға келген туристер үшін тіл кедергісін шешу',
        scanTitle: 'Сканерлеп ашыңыз',
        scanDesc: 'Көрнекті жерлердегі QR-кодтар сіздің тіліңізде толық ақпаратқа жетелейді',
        navigateTitle: 'Оңай навигация',
        navigateDesc: 'Нақты навигация үшін 2GIS интеграциясымен бағыттар алыңыз',
      },
      languages: {
        title: '7 тілде қолжетімді',
        subtitle: 'Қазақша • Орысша • Ағылшынша • Қытайша • Түрікше • Немісше • Французша',
      },
      cta: {
        title: 'Астананы бүгін зерттеуді бастаңыз',
        description: 'Көрнекті жерлерімізге барыңыз, QR-кодтарды сканерлеңіз және қала тарихын ашыңыз',
        button: 'Интерактивті картаны ашу',
      },
    },
    map: {
      title: 'Астананы зерттеңіз',
      subtitle: 'Астанадағы ең белгілі көрнекті орындар мен мәдени нысандарды ашыңыз',
      howToUse: {
        title: 'Screenstreet қалай пайдалану керек',
        description: 'Астанаға барғанда, көрнекті жерлердегі QR-кодтарды іздеңіз. Оларды сканерлеп, сіздің тіліңізде толық ақпарат алыңыз, -гидке сұрақтар қойыңыз және 2GIS көмегімен бағыт алыңыз.',
      },
    },
    place: {
      about: 'Сипаттама',
      history: 'Тарих',
      facts: 'Қызықты фактілер',
      
      visitPlace: 'Осы жерге бару',
      qrCode: 'QR-код',
      scanQR: 'Осы жерді ашу үшін QR-кодты сканерлеңіз',
      opensIn2GIS: 'Нақты навигация үшін 2GIS-те ашылады',
    },
    about: {
      title: 'Screenstreet туралы',
      subtitle: 'Технологиялар мен көптілді қолдау арқылы Астананы барлығына түсінікті етеміз',
      problem: {
        title: 'Мәселе',
        text: 'Қазақстанға келген шетелдік туристер жиі тіл кедергілеріне тап болады, бұл олардың елдің бай мәдени мұрасы мен заманауи көрікті жерлерін толық түсініп, бағалауына кедергі келтіреді. Ана тілінде тиісті контекст пен ақпаратсыз келушілер Астананың белгілі жерлері артындағы әңгімелерді жіберіп алады.',
      },
      solution: {
        title: 'Біздің шешім',
        intro: 'Screenstreet Астананың негізгі көрікті жерлеріне QR-кодтарын орналастыру арқылы осы олқылықты жояды. Туристер бұл кодтарды сканерлегенде, олар бірден мыналарға қол жеткізеді:',
        features: [
          'Көрікті жер туралы өз тілінде толық ақпарат',
          'Тарихи контекст пен қызықты фактілер',
          'Жекелендірілген ұсыныстар үшін -гид',
          'Жолды оңай жоспарлау үшін 2GIS навигациясының интеграциясы',
        ],
      },
      technology: {
        title: 'Технологиялық стек',
        frontend: 'Frontend',
        frontendItems: [
          'App Router-мен Next.js 15',
          'Түр қауіпсіздігі үшін TypeScript',
          'Заманауи UI үшін Tlwind CSS',
          'Анимациялар үшін Framer Motion',
        ],
        apis: 'API',
        apisItems: [
          '2GIS Maps & Navigation',
          'Көрікті жерлердің суреттері үшін Unsplash',
          'QR-код генерациясы',
        ],
      },
      languages: {
        title: 'Қолдау көрсетілетін тілдер',
        list: [
          { flag: '🇰🇿', name: 'Қазақ' },
          { flag: '🇷🇺', name: 'Орыс' },
          { flag: '🇬🇧', name: 'Ағылшын' },
          { flag: '🇨🇳', name: 'Қытай' },
          { flag: '🇹🇷', name: 'Түрік' },
          { flag: '🇩🇪', name: 'Неміс' },
          { flag: '🇫🇷', name: 'Француз' },
        ],
      },
      impact: {
        title: 'Күтілетін әсер',
        items: [
          {
            title: 'Туристік тәжірибені жақсарту:',
            text: 'Келушілер қазақ мәдениеті мен тарихын тереңірек түсінеді',
          },
          {
            title: 'Тіл кедергілерін жою:',
            text: 'Ақпарат 7 негізгі тілде қолжетімді',
          },
          {
            title: 'Заманауи туристік инфрақұрылым:',
            text: 'Қазақстанның халықаралық келушілерге деген міндеттемесін көрсету',
          },
          {
            title: 'Масштабталатын шешім:',
            text: 'Басқа қалалар мен өңірлерге кеңейтілуі мүмкін',
          },
        ],
      },
      project: {
        title: 'Жоба туралы ақпарат',
        text: 'Screenstreet - бұл заманауи технологиялардың туризм мен мәдени қолжетімділіктегі нақты мәселелерді қалай шеше алатынын көрсету үшін жасалған білім беру жобасы. Бұл MVP Қазақстанға келген халықаралық келушілер үшін инклюзивті тәжірибе жасау үшін QR-кодтарды,  мен көптілді қолдауды біріктірудің әлеуетін көрсетеді.',
      },
    },
  },
  zh: {
    common: {
      home: '首页',
      map: '地图',
      about: '关于',
      explore: '探索阿斯塔纳',
      
      learnMore: '了解更多',
      getDirections: '获取路线',
      downloadQR: '下载二维码',
      backToMap: '返回地图',
      nearby: '附近地点',
      loading: '加载中...',
      error: '发生错误',
    },
    home: {
      hero: {
        title: '探索阿斯塔纳。',
        subtitle: '了解它的故事。',
        description: '多语言导游，通过二维码、当地故事和智能推荐帮助游客发现阿斯塔纳。',
      },
      features: {
        title: '让每个人都能理解阿斯塔纳',
        subtitle: '解决访问哈萨克斯坦的游客的语言障碍',
        scanTitle: '扫描和发现',
        scanDesc: '地标处的二维码将引导您获取您语言的详细信息',
        navigateTitle: '轻松导航',
        navigateDesc: '通过2GIS集成获取真实导航路线',
      },
      languages: {
        title: '支持7种语言',
        subtitle: '哈萨克语 • 俄语 • 英语 • 中文 • 土耳其语 • 德语 • 法语',
      },
      cta: {
        title: '今天开始探索阿斯塔纳',
        description: '参观我们的地标，扫描二维码，发现城市背后的故事',
        button: '打开互动地图',
      },
    },
    map: {
      title: '探索阿斯塔纳',
      subtitle: '发现阿斯塔纳最具标志性的地标和文化景点',
      howToUse: {
        title: '如何使用Screenstreet',
        description: '访问阿斯塔纳时，寻找地标处的二维码。扫描它们以访问您语言的详细信息，向我们的导游提问，并通过2GIS集成获取路线。',
      },
    },
    place: {
      about: '关于',
      history: '历史',
      facts: '有趣的事实',
      
      visitPlace: '访问此地点',
      qrCode: '二维码',
      scanQR: '扫描此二维码以打开此地点',
      opensIn2GIS: '在2GIS中打开以进行真实导航',
    },
    about: {
      title: '关于Screenstreet',
      subtitle: '通过技术和多语言支持让每个人都能理解阿斯塔纳',
      problem: {
        title: '问题',
        text: '访问哈萨克斯坦的外国游客经常面临语言障碍，这阻碍了他们充分理解和欣赏该国丰富的文化遗产和现代地标。没有母语的适当背景和信息，游客错过了阿斯塔纳标志性景点背后的故事。',
      },
      solution: {
        title: '我们的解决方案',
        intro: 'Screenstreet通过在阿斯塔纳的关键地标放置二维码来弥合这一差距。当游客扫描这些代码时，他们可以立即访问：',
        features: [
          '您语言的地标详细信息',
          '历史背景和有趣的事实',
          '用于个性化推荐的导游',
          '与2GIS的导航集成，便于路线规划',
        ],
      },
      technology: {
        title: '技术栈',
        frontend: '前端',
        frontendItems: [
          '带App Router的Next.js 15',
          'TypeScript用于类型安全',
          'Tlwind CSS用于现代UI',
          'Framer Motion用于动画',
        ],
        apis: 'API',
        apisItems: [
          '2GIS地图和导航',
          'Unsplash用于地标图片',
          '二维码生成',
        ],
      },
      languages: {
        title: '支持的语言',
        list: [
          { flag: '🇰🇿', name: '哈萨克语' },
          { flag: '🇷🇺', name: '俄语' },
          { flag: '🇬🇧', name: '英语' },
          { flag: '🇨🇳', name: '中文' },
          { flag: '🇹🇷', name: '土耳其语' },
          { flag: '🇩🇪', name: '德语' },
          { flag: '🇫🇷', name: '法语' },
        ],
      },
      impact: {
        title: '预期影响',
        items: [
          {
            title: '增强游客体验：',
            text: '游客对哈萨克文化和历史有更深入的了解',
          },
          {
            title: '打破语言障碍：',
            text: '信息可通过7种主要语言访问',
          },
          {
            title: '现代旅游基础设施：',
            text: '展示哈萨克斯坦对国际游客的承诺',
          },
          {
            title: '可扩展的解决方案：',
            text: '可以扩展到其他城市和地区',
          },
        ],
      },
      project: {
        title: '项目信息',
        text: 'Screenstreet是一个教育项目，旨在展示现代技术如何解决旅游和文化可达性方面的实际问题。这个MVP展示了结合二维码、和多语言支持为哈萨克斯坦的国际游客创造包容性体验的潜力。',
      },
    },
  },
  tr: {
    common: {
      home: 'Ana Sayfa',
      map: 'Harita',
      about: 'Hakkında',
      explore: 'Astana\'yı Keşfet',
      
      learnMore: 'Daha Fazla Bilgi',
      getDirections: 'Yol Tarifi Al',
      downloadQR: 'QR Kodunu İndir',
      backToMap: 'Haritaya Dön',
      nearby: 'Yakındaki Yerler',
      loading: 'Yükleniyor...',
      error: 'Bir hata oluştu',
    },
    home: {
      hero: {
        title: 'Astana\'yı keşfedin.',
        subtitle: 'Hikayesini anlayın.',
        description: 'QR kodları, yerel hikayeler ve akıllı öneriler aracılığıyla ziyaretçilerin Astana\'yı keşfetmesine yardımcı olan çok dilli  rehberi.',
      },
      features: {
        title: 'Astana\'yı herkes için anlaşılır hale getirin',
        subtitle: 'Kazakistan\'ı ziyaret eden turistler için dil engelinin çözülmesi',
        scanTitle: 'Tara ve Keşfet',
        scanDesc: 'Simge yapılardaki QR kodları sizi kendi dilinizde ayrıntılı bilgilere yönlendirir',
        navigateTitle: 'Kolay Navigasyon',
        navigateDesc: 'Gerçek navigasyon için 2GIS entegrasyonuyla yol tarifi alın',
      },
      languages: {
        title: '7 dilde mevcut',
        subtitle: 'Kazakça • Rusça • İngilizce • Çince • Türkçe • Almanca • Fransızca',
      },
      cta: {
        title: 'Bugün Astana\'yı keşfetmeye başlayın',
        description: 'Simge yapılarımızı ziyaret edin, QR kodlarını tarayın ve şehrin arkasındaki hikayeleri keşfedin',
        button: 'İnteraktif Haritayı Aç',
      },
    },
    map: {
      title: 'Astana\'yı Keşfedin',
      subtitle: 'Astana\'nın en ikonik simge yapılarını ve kültürel sitelerini keşfedin',
      howToUse: {
        title: 'Screenstreet nasıl kullanılır',
        description: 'Astana\'yı ziyaret ederken simge yapılardaki QR kodlarını arayın. Kendi dilinizde ayrıntılı bilgilere erişmek,  rehberimize sorular sormak ve 2GIS entegrasyonuyla yol tarifi almak için onları tarayın.',
      },
    },
    place: {
      about: 'Hakkında',
      history: 'Tarih',
      facts: 'İlginç Gerçekler',
      ask: '\'ya bu yer hakkında sor',
      visitPlace: 'Bu Yeri Ziyaret Et',
      qrCode: 'QR Kodu',
      scanQR: 'Bu yeri açmak için bu QR kodunu tarayın',
      opensIn2GIS: 'Gerçek navigasyon için 2GIS\'te açılır',
    },
    about: {
      title: 'Screenstreet Hakkında',
      subtitle: 'Teknoloji ve çok dilli destek ile Astana\'yı herkes için anlaşılır hale getiriyoruz',
      problem: {
        title: 'Sorun',
        text: 'Kazakistan\'ı ziyaret eden yabancı turistler, ülkenin zengin kültürel mirasını ve modern simge yapılarını tam olarak anlamalarını ve takdir etmelerini engelleyen dil engellerine sık sık maruz kalıyorlar. Anadillerinde uygun bağlam ve bilgi olmadan ziyaretçiler, Astana\'nın simge mekanlarının ardındaki hikayeleri kaçırıyorlar.',
      },
      solution: {
        title: 'Çözümümüz',
        intro: 'Screenstreet, Astana genelinde önemli simge yapılara QR kodları yerleştirerek bu boşluğu dolduruyor. Turistler bu kodları taradığında anında şunlara erişebiliyorlar:',
        features: [
          'Simge yapı hakkında kendi dillerinde ayrıntılı bilgi',
          'Tarihsel bağlam ve ilginç gerçekler',
          'Kişiselleştirilmiş öneriler için  destekli rehber',
          'Kolay rota planlaması için 2GIS ile navigasyon entegrasyonu',
        ],
      },
      technology: {
        title: 'Teknoloji Yığını',
        frontend: 'Frontend',
        frontendItems: [
          'App Router ile Next.js 15',
          'Tip güvenliği için TypeScript',
          'Modern UI için Tlwind CSS',
          'Animasyonlar için Framer Motion',
        ],
        apis: 'API\'ler',
        apisItems: [
          '2GIS Haritalar ve Navigasyon',
          'Simge yapı görselleri için Unsplash',
          'QR kod oluşturma',
        ],
      },
      languages: {
        title: 'Desteklenen Diller',
        list: [
          { flag: '🇰🇿', name: 'Kazakça' },
          { flag: '🇷🇺', name: 'Rusça' },
          { flag: '🇬🇧', name: 'İngilizce' },
          { flag: '🇨🇳', name: 'Çince' },
          { flag: '🇹🇷', name: 'Türkçe' },
          { flag: '🇩🇪', name: 'Almanca' },
          { flag: '🇫🇷', name: 'Fransızca' },
        ],
      },
      impact: {
        title: 'Beklenen Etki',
        items: [
          {
            title: 'Gelişmiş Turist Deneyimi:',
            text: 'Ziyaretçiler Kazak kültürü ve tarihi hakkında daha derin anlayış kazanır',
          },
          {
            title: 'Dil Engellerini Kırmak:',
            text: 'Bilgi 7 ana dilde erişilebilir',
          },
          {
            title: 'Modern Turizm Altyapısı:',
            text: 'Kazakistan\'ın uluslararası ziyaretçilere olan bağlılığını sergileme',
          },
          {
            title: 'Ölçeklenebilir Çözüm:',
            text: 'Diğer şehirlere ve bölgelere genişletilebilir',
          },
        ],
      },
      project: {
        title: 'Proje Bilgileri',
        text: 'Screenstreet, modern teknolojinin turizm ve kültürel erişilebilirlik alanındaki gerçek dünya sorunlarını nasıl çözebileceğini göstermek için geliştirilmiş eğitici bir projedir. Bu MVP, Kazakistan\'ın uluslararası ziyaretçileri için kapsayıcı bir deneyim yaratmak üzere QR kodlarını, \'yı ve çok dilli desteği birleştirmenin potansiyelini sergiliyor.',
      },
    },
  },
  de: {
    common: {
      home: 'Startseite',
      map: 'Karte',
      about: 'Über uns',
      explore: 'Astana erkunden',
      
      learnMore: 'Mehr erfahren',
      getDirections: 'Wegbeschreibung',
      downloadQR: 'QR-Code herunterladen',
      backToMap: 'Zurück zur Karte',
      nearby: 'In der Nähe',
      loading: 'Wird geladen...',
      error: 'Ein Fehler ist aufgetreten',
    },
    home: {
      hero: {
        title: 'Entdecken Sie Astana.',
        subtitle: 'Verstehen Sie seine Geschichte.',
        description: 'Ein mehrsprachiger KI-Reiseführer, der Besuchern hilft, Astana durch QR-Codes, lokale Geschichten und intelligente Empfehlungen zu entdecken.',
      },
      features: {
        title: 'Astana für alle verständlich machen',
        subtitle: 'Lösung der Sprachbarriere für Touristen, die Kasachstan besuchen',
        scanTitle: 'Scannen & Entdecken',
        scanDesc: 'QR-Codes an Sehenswürdigkeiten führen Sie zu detllierten Informationen in Ihrer Sprache',
        navigateTitle: 'Einfache Navigation',
        navigateDesc: 'Erhalten Sie Wegbeschreibungen mit 2GIS-Integration für echte Navigation',
      },
      languages: {
        title: 'Verfügbar in 7 Sprachen',
        subtitle: 'Kasachisch • Russisch • Englisch • Chinesisch • Türkisch • Deutsch • Französisch',
      },
      cta: {
        title: 'Beginnen Sie heute mit der Erkundung von Astana',
        description: 'Besuchen Sie unsere Sehenswürdigkeiten, scannen Sie QR-Codes und entdecken Sie die Geschichten hinter der Stadt',
        button: 'Interaktive Karte öffnen',
      },
    },
    map: {
      title: 'Astana erkunden',
      subtitle: 'Entdecken Sie die bekanntesten Wahrzeichen und Kulturstätten in Astana',
      howToUse: {
        title: 'So verwenden Sie Screenstreet',
        description: 'Wenn Sie Astana besuchen, suchen Sie nach QR-Codes an Sehenswürdigkeiten. Scannen Sie sie, um auf detllierte Informationen in Ihrer Sprache zuzugreifen, Fragen an unseren KI-Reiseführer zu stellen und Wegbeschreibungen mit 2GIS-Integration zu erhalten.',
      },
    },
    place: {
      about: 'Über',
      history: 'Geschichte',
      facts: 'Interessante Fakten',
      
      visitPlace: 'Diesen Ort besuchen',
      qrCode: 'QR-Code',
      scanQR: 'Scannen Sie diesen QR-Code, um diesen Ort zu öffnen',
      opensIn2GIS: 'Öffnet in 2GIS für echte Navigation',
    },
    about: {
      title: 'Über Screenstreet',
      subtitle: 'Wir machen Astana für alle durch Technologie und mehrsprachige Unterstützung verständlich',
      problem: {
        title: 'Das Problem',
        text: 'Ausländische Touristen, die Kasachstan besuchen, stoßen oft auf Sprachbarrieren, die sie daran hindern, das reiche kulturelle Erbe und die modernen Sehenswürdigkeiten des Landes vollständig zu verstehen und zu schätzen. Ohne angemessenen Kontext und Informationen in ihrer Muttersprache verpassen Besucher die Geschichten hinter Astanas ikonischen Stätten.',
      },
      solution: {
        title: 'Unsere Lösung',
        intro: 'Screenstreet überbrückt diese Lücke, indem QR-Codes an wichtigen Sehenswürdigkeiten in ganz Astana platziert werden. Wenn Touristen diese Codes scannen, erhalten sie sofort Zugang zu:',
        features: [
          'Detllierten Informationen über die Sehenswürdigkeit in ihrer Sprache',
          'Historischem Kontext und interessanten Fakten',
          'KI-gesteuertem Touristenführer für personalisierte Empfehlungen',
          'Navigationsintegration mit 2GIS für einfache Routenplanung',
        ],
      },
      technology: {
        title: 'Technologie-Stack',
        frontend: 'Frontend',
        frontendItems: [
          'Next.js 15 mit App Router',
          'TypeScript für Typsicherheit',
          'Tlwind CSS für modernes UI',
          'Framer Motion für Animationen',
        ],
        apis: 'APIs',
        apisItems: [
          '2GIS Karten & Navigation',
          'Unsplash für Sehenswürdigkeitsbilder',
          'QR-Code-Generierung',
        ],
      },
      languages: {
        title: 'Unterstützte Sprachen',
        list: [
          { flag: '🇰🇿', name: 'Kasachisch' },
          { flag: '🇷🇺', name: 'Russisch' },
          { flag: '🇬🇧', name: 'Englisch' },
          { flag: '🇨🇳', name: 'Chinesisch' },
          { flag: '🇹🇷', name: 'Türkisch' },
          { flag: '🇩🇪', name: 'Deutsch' },
          { flag: '🇫🇷', name: 'Französisch' },
        ],
      },
      impact: {
        title: 'Erwartete Auswirkungen',
        items: [
          {
            title: 'Verbessertes Touristenerlebnis:',
            text: 'Besucher gewinnen ein tieferes Verständnis für kasachische Kultur und Geschichte',
          },
          {
            title: 'Sprachbarrieren überwinden:',
            text: 'Informationen in 7 Hauptsprachen zugänglich',
          },
          {
            title: 'Moderne Tourismusinfrastruktur:',
            text: 'Zeigt Kasachstans Engagement für internationale Besucher',
          },
          {
            title: 'Skalierbare Lösung:',
            text: 'Kann auf andere Städte und Regionen ausgeweitet werden',
          },
        ],
      },
      project: {
        title: 'Projektinformationen',
        text: 'Screenstreet ist ein Bildungsprojekt, das entwickelt wurde, um zu demonstrieren, wie moderne Technologie reale Probleme im Tourismus und der kulturellen Zugänglichkeit lösen kann. Dieses MVP zeigt das Potenzial der Kombination von QR-Codes, KI und mehrsprachiger Unterstützung, um ein inklusives Erlebnis für internationale Besucher in Kasachstan zu schaffen.',
      },
    },
  },
  fr: {
    common: {
      home: 'Accueil',
      map: 'Carte',
      about: 'À propos',
      explore: 'Explorer Astana',
      
      learnMore: 'En savoir plus',
      getDirections: 'Obtenir l\'itinérre',
      downloadQR: 'Télécharger le QR code',
      backToMap: 'Retour à la carte',
      nearby: 'À proximité',
      loading: 'Chargement...',
      error: 'Une erreur s\'est produite',
    },
    home: {
      hero: {
        title: 'Découvrez Astana.',
        subtitle: 'Comprenez son histoire.',
        description: 'Un guide IA multilingue qui de les visiteurs à découvrir Astana grâce aux codes QR, aux histoires locales et aux recommandations intelligentes.',
      },
      features: {
        title: 'Rendre Astana compréhensible pour tous',
        subtitle: 'Résoudre la barrière linguistique pour les touristes visitant le Kazakhstan',
        scanTitle: 'Scanner et découvrir',
        scanDesc: 'Les codes QR aux monuments vous mènent à des informations détllées dans votre langue',
        navigateTitle: 'Navigation facile',
        navigateDesc: 'Obtenez des itinérres avec l\'intégration 2GIS pour une vre navigation',
      },
      languages: {
        title: 'Disponible en 7 langues',
        subtitle: 'Kazakh • Russe • Angls • Chinois • Turc • Allemand • Françs',
      },
      cta: {
        title: 'Commencez à explorer Astana aujourd\'hui',
        description: 'Visitez nos monuments, scannez les codes QR et découvrez les histoires derrière la ville',
        button: 'Ouvrir la carte interactive',
      },
    },
    map: {
      title: 'Explorer Astana',
      subtitle: 'Découvrez les monuments et sites culturels les plus emblématiques d\'Astana',
      howToUse: {
        title: 'Comment utiliser Screenstreet',
        description: 'Lors de votre visite à Astana, recherchez les codes QR aux monuments. Scannez-les pour accéder à des informations détllées dans votre langue, poser des questions à notre guide IA et obtenir des itinérres avec l\'intégration 2GIS.',
      },
    },
    place: {
      about: 'À propos',
      history: 'Histoire',
      facts: 'Fts intéressants',
      ask: 'Demander à l\'IA à propos de ce lieu',
      visitPlace: 'Visiter ce lieu',
      qrCode: 'Code QR',
      scanQR: 'Scannez ce code QR pour ouvrir ce lieu',
      opensIn2GIS: 'S\'ouvre dans 2GIS pour une vre navigation',
    },
    about: {
      title: 'À propos de Screenstreet',
      subtitle: 'Rendre Astana compréhensible pour tous grâce à la technologie et au support multilingue',
      problem: {
        title: 'Le problème',
        text: 'Les touristes étrangers visitant le Kazakhstan sont souvent confrontés à des barrières linguistiques qui les empêchent de comprendre et d\'apprécier pleinement le riche patrimoine culturel et les monuments modernes du pays. Sans contexte approprié et informations dans leur langue maternelle, les visiteurs manquent les histoires derrière les sites emblématiques d\'Astana.',
      },
      solution: {
        title: 'Notre solution',
        intro: 'Screenstreet comble cette lacune en plaçant des codes QR aux monuments clés d\'Astana. Lorsque les touristes scannent ces codes, ils accèdent instantanément à:',
        features: [
          'Des informations détllées sur le monument dans leur langue',
          'Un contexte historique et des fts intéressants',
          'Un guide touristique alimenté par l\'IA pour des recommandations personnalisées',
          'L\'intégration de la navigation avec 2GIS pour une planification d\'itinérre facile',
        ],
      },
      technology: {
        title: 'Stack technologique',
        frontend: 'Frontend',
        frontendItems: [
          'Next.js 15 avec App Router',
          'TypeScript pour la sécurité des types',
          'Tlwind CSS pour une interface moderne',
          'Framer Motion pour les animations',
        ],
        apis: 'APIs',
        apisItems: [
          '2GIS Maps & Navigation',
          'Unsplash pour les images de monuments',
          'Génération de codes QR',
        ],
      },
      languages: {
        title: 'Langues prises en charge',
        list: [
          { flag: '🇰🇿', name: 'Kazakh' },
          { flag: '🇷🇺', name: 'Russe' },
          { flag: '🇬🇧', name: 'Angls' },
          { flag: '🇨🇳', name: 'Chinois' },
          { flag: '🇹🇷', name: 'Turc' },
          { flag: '🇩🇪', name: 'Allemand' },
          { flag: '🇫🇷', name: 'Françs' },
        ],
      },
      impact: {
        title: 'Impact attendu',
        items: [
          {
            title: 'Expérience touristique améliorée:',
            text: 'Les visiteurs acquièrent une compréhension plus profonde de la culture et de l\'histoire kazakhes',
          },
          {
            title: 'Briser les barrières linguistiques:',
            text: 'Informations accessibles en 7 langues principales',
          },
          {
            title: 'Infrastructure touristique moderne:',
            text: 'Montrant l\'engagement du Kazakhstan envers les visiteurs internationaux',
          },
          {
            title: 'Solution évolutive:',
            text: 'Peut être étendue à d\'autres villes et régions',
          },
        ],
      },
      project: {
        title: 'Informations sur le projet',
        text: 'Screenstreet est un projet éducatif développé pour démontrer comment la technologie moderne peut résoudre des problèmes réels dans le tourisme et l\'accessibilité culturelle. Ce MVP présente le potentiel de combiner les codes QR, l\'IA et le support multilingue pour créer une expérience inclusive pour les visiteurs internationaux au Kazakhstan.',
      },
    },
  },
};

export type Locale = keyof typeof translations;
export type Translation = typeof translations.en;

export function getTranslation(locale: string): Translation {
  return translations[locale as Locale] || translations.en;
}



