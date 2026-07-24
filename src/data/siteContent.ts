export type SiteLocale = 'en' | 'zh-cn' | 'zh-hk';

export const localePrefixes: Record<SiteLocale, string> = {
  en: '',
  'zh-cn': '/zh-cn',
  'zh-hk': '/zh-hk',
};

type Card = { title: string; description: string };

type SiteCopy = {
  meta: { title: string; description: string };
  navigation: {
    menu: string;
    search: string;
    language: string;
    home: string;
    research: string;
    writing: string;
    cv: string;
    interests: string;
    resources: string;
    locales: Record<SiteLocale, string>;
  };
  footer: {
    role: string;
    academic: string;
    writing: string;
    resources: string;
    connect: string;
    research: string;
    cv: string;
    selectedWriting: string;
    interests: string;
    resourceLibrary: string;
    email: string;
    sourceCode: string;
    language: string;
    rights: string;
    updated: string;
    builtWith: string;
    hostedOn: string;
    backToTop: string;
  };
  labels: { academicProfile: string; research: string; writing: string; archive: string; elsewhere: string; fields: string; inquiry: string; fieldNotes: string; training: string };
  home: {
    eyebrow: string;
    name: string;
    role: string;
    focus: string;
    lead: string;
    researchTitle: string;
    researchIntro: string;
    researchCards: Card[];
    profileTitle: string;
    profileEyebrow: string;
    profileParagraphs: string[];
    heroVisualAlt: string;
    portraitAlt: string;
    portraitCaption: string;
    currentTitle: string;
    currentItems: { label: string; value: string }[];
    writingTitle: string;
    writingIntro: string;
    resourcesTitle: string;
    resourcesDescription: string;
    resourcesLink: string;
    beyondTitle: string;
    beyondIntro: string;
    beyondCards: Card[];
    researchCta: string;
    cvCta: string;
    writingCta: string;
  };
  research: {
    title: string;
    description: string;
    areasTitle: string;
    areasIntro: string;
    areas: Card[];
    questionsTitle: string;
    questionsIntro: string;
    questions: string[];
    relatedEyebrow: string;
    relatedTitle: string;
    relatedDescription: string;
    writingCta: string;
    cvCta: string;
    resourcesCta: string;
  };
  writings: {
    title: string;
    description: string;
    listLabel: string;
    articleMeta: string;
    articleTitle: string;
    articleSummary: string;
    articleCta: string;
  };
  interests: {
    eyebrow: string;
    title: string;
    description: string;
    sectionTitle: string;
    sectionIntro: string;
    cards: (Card & { eyebrow: string; href?: string; cta?: string })[];
  };
  resources: {
    eyebrow: string;
    title: string;
    description: string;
    sectionTitle: string;
    sectionIntro: string;
    listLabel: string;
    openLabel: string;
    trainingTitle?: string;
    trainingDescription?: string;
    trainingLabel?: string;
  };
};

export const siteContent: Record<SiteLocale, SiteCopy> = {
  en: {
    meta: { title: 'Yuze Guo', description: 'Academic homepage of Yuze Guo, an astrophysics PhD student at Peking University.' },
    navigation: {
      menu: 'Menu', search: 'Search', language: 'Language', home: 'Home', research: 'Research', writing: 'Writing', cv: 'CV', interests: 'Interests', resources: 'Resources',
      locales: { en: 'English', 'zh-cn': '简体中文', 'zh-hk': '繁體中文' },
    },
    footer: {
      role: 'PhD Student in Astrophysics at Peking University', academic: 'Academic', writing: 'Writing', resources: 'Resources', connect: 'Connect',
      research: 'Research', cv: 'Curriculum Vitae', selectedWriting: 'Selected writing', interests: 'Interests', resourceLibrary: 'Astronomy resource library', email: 'Email', sourceCode: 'Source code', language: 'Language',
      rights: 'All rights reserved.', updated: 'Last updated', builtWith: 'Built with', hostedOn: 'Hosted on', backToTop: 'Back to top',
    },
    labels: { academicProfile: 'Academic profile', research: 'Research', writing: 'Writing', archive: 'Archive', elsewhere: 'Elsewhere', fields: 'Fields', inquiry: 'Inquiry', fieldNotes: 'Field notes', training: 'Training' },
    home: {
      eyebrow: 'Astrophysics · Gravitational Waves',
      name: 'Yuze Guo',
      role: 'PhD Student in Astrophysics at Peking University',
      focus: 'Gravitational-wave astronomy, compact objects, and multi-messenger astrophysics',
      lead: 'I study how faint signals can reveal the structure and evolution of the universe.',
      researchTitle: 'Research directions',
      researchIntro: 'My work connects theoretical modelling with the interpretation of astrophysical observations.',
      researchCards: [
        { title: 'Gravitational waves', description: 'Long-duration signals from compact objects, with an emphasis on continuous gravitational waves from neutron stars.' },
        { title: 'X-ray polarimetry', description: 'Physical interpretation of IXPE observations of Swift J1727.8–1613 and the geometry of black-hole accretion systems.' },
        { title: 'Multi-messenger astronomy', description: 'Joint reasoning across gravitational and electromagnetic observations to constrain astrophysical systems.' },
      ],
      profileTitle: 'A concise introduction',
      profileEyebrow: 'Profile',
      profileParagraphs: [
        'I am an astrophysics PhD student at Peking University. My long-term interests lie in high-energy astrophysics, especially gravitational waves, compact objects, cosmology, and multi-messenger astronomy.',
        'I completed my undergraduate studies in physics at Wuhan University, where I worked on continuous gravitational radiation and X-ray polarimetry. Earlier, astronomy olympiad training shaped the way I approach quantitative problems.',
      ],
      heroVisualAlt: 'Editorial visualization of a magnetized neutron star emitting gravitational waves',
      portraitAlt: 'Portrait of Yuze Guo',
      portraitCaption: 'Balliol College, Oxford, 2023.',
      currentTitle: 'Current direction',
      currentItems: [
        { label: 'Research', value: 'Theoretical models for continuous gravitational-wave signals from neutron stars.' },
        { label: 'Academic home', value: 'Department of Astronomy, School of Physics, Peking University.' },
      ],
      writingTitle: 'Selected writing',
      writingIntro: 'Notes that show how I think through physics and mathematics.',
      resourcesTitle: 'Astronomy resource library',
      resourcesDescription: 'A maintained archive of IOAA, IAO, and CNAO materials, organised by competition and edition.',
      resourcesLink: 'Browse the archive',
      beyondTitle: 'Beyond research',
      beyondIntro: 'A few quieter interests that keep technical work grounded.',
      beyondCards: [
        { title: 'Observing', description: 'Occasional sky-watching and concise observing notes.' },
        { title: 'Reading', description: 'History of science, biography, and long-form essays.' },
        { title: 'Walking & photography', description: 'Campus walks, travel, and noticing small details through a camera.' },
      ],
      researchCta: 'Explore research', cvCta: 'View CV', writingCta: 'Read article',
    },
    research: {
      title: 'Research',
      description: 'I work at the boundary between theoretical modelling and astrophysical inference, with a focus on gravitational waves, compact objects, and multi-messenger astronomy.',
      areasTitle: 'Research areas', areasIntro: 'Three connected directions that define my current research profile.',
      areas: [
        { title: 'Gravitational waves', description: 'Continuous-wave targets, compact objects, and the interpretation of weak, long-duration signals.' },
        { title: 'Compact objects', description: 'Neutron-star deformations, black-hole accretion systems, and the physical geometry behind high-energy observations.' },
        { title: 'Multi-messenger inference', description: 'Combining gravitational and electromagnetic channels into physically consistent models.' },
      ],
      questionsTitle: 'Questions in view', questionsIntro: 'Representative questions guiding my reading and modelling.',
      questions: [
        'How can continuous gravitational-wave searches become more sensitive and physically interpretable?',
        'How do compact-object geometry and emission mechanisms appear in polarimetric observations?',
        'How can heterogeneous signals be combined without losing physical consistency?',
      ],
      relatedEyebrow: 'Continue exploring', relatedTitle: 'Writing and public materials',
      relatedDescription: 'Research notes and the astronomy competition archive provide two complementary views of my work.',
      writingCta: 'Read writing', cvCta: 'View CV', resourcesCta: 'Browse resources',
    },
    writings: {
      title: 'Selected writing', description: 'A growing collection of concise notes on physics, mathematics, and related ideas.', listLabel: 'Published notes',
      articleMeta: 'September 23, 2025 · Mechanics / Mathematics', articleTitle: 'Initial insights into the concept of the metric',
      articleSummary: 'A short essay on understanding the metric as a generalisation of the Pythagorean theorem for infinitesimal distances.', articleCta: 'Read article',
    },
    interests: {
      eyebrow: 'Beyond research', title: 'Interests', description: 'Reading, observing, photography, and small technical projects that sit outside my formal research profile.',
      sectionTitle: 'A wider field of attention', sectionIntro: 'These interests are kept intentionally concise and connected to work already available on the site.',
      cards: [
        { eyebrow: 'Essays & notes', title: 'Thinking in public', description: 'Short essays, reading notes, and reflections outside formal research writing.', href: '/writings/', cta: 'Browse writing' },
        { eyebrow: 'Astronomy education', title: 'Competition archives', description: 'Curated materials for IOAA, IAO, and CNAO learners and educators.', href: '/resources/', cta: 'Open resources' },
        { eyebrow: 'Everyday practice', title: 'Observing and photography', description: 'Lightweight observing notes, campus walks, and occasional photography.' },
      ],
    },
    resources: {
      eyebrow: 'Astronomy archive', title: 'Resources', description: 'A curated collection of competition papers and supporting materials that are actively maintained on this site.',
      sectionTitle: 'Competition archive', sectionIntro: 'Choose a competition, then browse materials by edition.', listLabel: 'Competition collections', openLabel: 'Open collection',
    },
  },
  'zh-cn': {
    meta: { title: '郭雨泽', description: '北京大学天体物理博士生郭雨泽的学术个人主页。' },
    navigation: {
      menu: '菜单', search: '搜索', language: '语言', home: '首页', research: '研究', writing: '写作', cv: '简历', interests: '兴趣', resources: '资源库',
      locales: { en: 'English', 'zh-cn': '简体中文', 'zh-hk': '繁體中文' },
    },
    footer: {
      role: '北京大学天体物理博士生', academic: '学术', writing: '写作', resources: '资源', connect: '联系',
      research: '研究', cv: '个人简历', selectedWriting: '精选写作', interests: '研究之外', resourceLibrary: '天文资源库', email: '电子邮件', sourceCode: '源代码', language: '语言',
      rights: '保留所有权利。', updated: '最近更新', builtWith: '使用', hostedOn: '托管于', backToTop: '回到顶部',
    },
    labels: { academicProfile: '学术主页', research: '研究', writing: '写作', archive: '归档', elsewhere: '研究之外', fields: '方向', inquiry: '问题', fieldNotes: '兴趣札记', training: '训练' },
    home: {
      eyebrow: '天体物理 · 引力波', name: '郭雨泽', role: '北京大学天体物理博士生',
      focus: '引力波天文学、致密天体与多信使天体物理', lead: '我关注微弱观测信号如何揭示宇宙的结构与演化。',
      researchTitle: '研究方向', researchIntro: '我的工作连接理论建模与天体物理观测解释。',
      researchCards: [
        { title: '引力波', description: '关注致密天体产生的长时程信号，重点研究中子星连续引力波。' },
        { title: 'X 射线偏振', description: '分析 IXPE 对 Swift J1727.8–1613 的观测，并研究黑洞吸积系统的物理几何。' },
        { title: '多信使天文学', description: '联合引力与电磁观测，对天体系统进行物理上一致的约束与解释。' },
      ],
      profileTitle: '简要介绍', profileEyebrow: '个人简介',
      profileParagraphs: [
        '我目前是北京大学物理学院天文学系的天体物理博士生，长期兴趣集中在高能天体物理，尤其是引力波、致密天体、宇宙学与多信使天文学。',
        '本科就读于武汉大学物理科学与技术学院，曾开展连续引力辐射与 X 射线偏振研究。更早的天文奥赛训练塑造了我理解定量问题的方式。',
      ],
      heroVisualAlt: '磁化中子星发射引力波的编辑式科学插画',
      portraitAlt: '郭雨泽个人照片', portraitCaption: '2023 年摄于牛津大学贝利奥尔学院。', currentTitle: '当前方向',
      currentItems: [
        { label: '研究', value: '完善中子星连续引力波信号的理论模型。' },
        { label: '所在机构', value: '北京大学物理学院天文学系。' },
      ],
      writingTitle: '精选写作', writingIntro: '记录我思考物理与数学问题的方式。', resourcesTitle: '天文资源库',
      resourcesDescription: '持续维护的 IOAA、IAO 与 CNAO 资料归档，按赛事与届次组织。', resourcesLink: '浏览资源库',
      beyondTitle: '研究之外', beyondIntro: '几项让技术工作保持温度与尺度感的兴趣。',
      beyondCards: [
        { title: '观测', description: '偶尔观星，并保留简短的观测记录。' },
        { title: '阅读', description: '科学史、人物传记与长篇写作。' },
        { title: '行走与摄影', description: '校园散步、旅行，以及透过镜头留意细节。' },
      ],
      researchCta: '了解研究', cvCta: '查看简历', writingCta: '阅读文章',
    },
    research: {
      title: '研究', description: '我的工作位于理论建模与天体物理推断的交界，重点关注引力波、致密天体与多信使天文学。',
      areasTitle: '研究方向', areasIntro: '三个相互联系的方向构成了我目前的研究轮廓。',
      areas: [
        { title: '引力波', description: '连续引力波目标、致密天体，以及长时间弱信号的物理解释。' },
        { title: '致密天体', description: '中子星形变、黑洞吸积系统与高能观测背后的物理几何。' },
        { title: '多信使推断', description: '将引力和电磁观测整合为物理上一致的模型。' },
      ],
      questionsTitle: '当前问题', questionsIntro: '目前引导我阅读与建模的代表性问题。',
      questions: ['如何提升连续引力波搜寻的灵敏度与物理解释能力？', '致密天体的几何与辐射机制如何呈现在偏振观测中？', '如何在整合异质信号时保持模型的物理一致性？'],
      relatedEyebrow: '继续探索', relatedTitle: '写作与公开资料', relatedDescription: '研究笔记与天文竞赛资源库从两个角度延伸了本站的学术内容。',
      writingCta: '阅读写作', cvCta: '查看简历', resourcesCta: '浏览资源',
    },
    writings: {
      title: '精选写作', description: '持续整理的物理、数学与相关问题短文。', listLabel: '已发布文章',
      articleMeta: '2025 年 9 月 23 日 · 力学 / 数学', articleTitle: '度规概念的初步感悟',
      articleSummary: '从勾股定理出发，理解度规如何成为无穷小距离概念的推广。', articleCta: '阅读文章',
    },
    interests: {
      eyebrow: '研究之外', title: '兴趣', description: '阅读、观测、摄影与一些不属于正式研究的技术项目。',
      sectionTitle: '更宽的注意力', sectionIntro: '这里只保留已经形成稳定兴趣、并与本站内容有连接的方向。',
      cards: [
        { eyebrow: '随笔与笔记', title: '公开思考', description: '研究之外的短文、阅读笔记与阶段性想法。', href: '/zh-cn/writings/', cta: '浏览写作' },
        { eyebrow: '天文教育', title: '竞赛资料归档', description: '面向 IOAA、IAO 与 CNAO 学习者和教师的精选资料。', href: '/zh-cn/resources/', cta: '打开资源库' },
        { eyebrow: '日常实践', title: '观测与摄影', description: '轻量观测、校园行走与偶尔的摄影记录。' },
      ],
    },
    resources: {
      eyebrow: '天文资料归档', title: '资源库', description: '本站持续维护的竞赛试题与配套资料精选集合。',
      sectionTitle: '竞赛题库', sectionIntro: '先选择赛事，再按届次浏览与下载资料。', listLabel: '竞赛资料集合', openLabel: '进入资料集合',
      trainingTitle: '训练材料', trainingDescription: '省赛、国决选拔、国际赛训练与专题讲义。', trainingLabel: '进入讲义页面',
    },
  },
  'zh-hk': {
    meta: { title: '郭雨澤', description: '北京大學天體物理博士生郭雨澤的學術個人主頁。' },
    navigation: {
      menu: '選單', search: '搜尋', language: '語言', home: '首頁', research: '研究', writing: '寫作', cv: '履歷', interests: '興趣', resources: '資源庫',
      locales: { en: 'English', 'zh-cn': '简体中文', 'zh-hk': '繁體中文' },
    },
    footer: {
      role: '北京大學天體物理博士生', academic: '學術', writing: '寫作', resources: '資源', connect: '聯絡',
      research: '研究', cv: '個人履歷', selectedWriting: '精選寫作', interests: '研究之外', resourceLibrary: '天文資源庫', email: '電子郵件', sourceCode: '原始碼', language: '語言',
      rights: '保留所有權利。', updated: '最近更新', builtWith: '使用', hostedOn: '託管於', backToTop: '回到頂部',
    },
    labels: { academicProfile: '學術主頁', research: '研究', writing: '寫作', archive: '歸檔', elsewhere: '研究之外', fields: '方向', inquiry: '問題', fieldNotes: '興趣札記', training: '訓練' },
    home: {
      eyebrow: '天體物理 · 引力波', name: '郭雨澤', role: '北京大學天體物理博士生',
      focus: '引力波天文學、緻密天體與多信使天體物理', lead: '我關注微弱觀測信號如何揭示宇宙的結構與演化。',
      researchTitle: '研究方向', researchIntro: '我的工作連接理論建模與天體物理觀測解釋。',
      researchCards: [
        { title: '引力波', description: '關注緻密天體產生的長時程信號，重點研究中子星連續引力波。' },
        { title: 'X 射線偏振', description: '分析 IXPE 對 Swift J1727.8–1613 的觀測，並研究黑洞吸積系統的物理幾何。' },
        { title: '多信使天文學', description: '聯合引力與電磁觀測，對天體系統進行物理上一致的約束與解釋。' },
      ],
      profileTitle: '簡要介紹', profileEyebrow: '個人簡介',
      profileParagraphs: [
        '我目前是北京大學物理學院天文學系的天體物理博士生，長期興趣集中在高能天體物理，尤其是引力波、緻密天體、宇宙學與多信使天文學。',
        '本科就讀於武漢大學物理科學與技術學院，曾開展連續引力輻射與 X 射線偏振研究。更早的天文奧賽訓練塑造了我理解定量問題的方式。',
      ],
      heroVisualAlt: '磁化中子星發射引力波的編輯式科學插畫',
      portraitAlt: '郭雨澤個人照片', portraitCaption: '2023 年攝於牛津大學貝利奧爾學院。', currentTitle: '目前方向',
      currentItems: [
        { label: '研究', value: '完善中子星連續引力波信號的理論模型。' },
        { label: '所在機構', value: '北京大學物理學院天文學系。' },
      ],
      writingTitle: '精選寫作', writingIntro: '記錄我思考物理與數學問題的方式。', resourcesTitle: '天文資源庫',
      resourcesDescription: '持續維護的 IOAA、IAO 與 CNAO 資料歸檔，按賽事與屆次組織。', resourcesLink: '瀏覽資源庫',
      beyondTitle: '研究之外', beyondIntro: '幾項讓技術工作保持溫度與尺度感的興趣。',
      beyondCards: [
        { title: '觀測', description: '偶爾觀星，並保留簡短的觀測記錄。' },
        { title: '閱讀', description: '科學史、人物傳記與長篇寫作。' },
        { title: '行走與攝影', description: '校園散步、旅行，以及透過鏡頭留意細節。' },
      ],
      researchCta: '了解研究', cvCta: '查看履歷', writingCta: '閱讀文章',
    },
    research: {
      title: '研究', description: '我的工作位於理論建模與天體物理推斷的交界，重點關注引力波、緻密天體與多信使天文學。',
      areasTitle: '研究方向', areasIntro: '三個相互聯繫的方向構成了我目前的研究輪廓。',
      areas: [
        { title: '引力波', description: '連續引力波目標、緻密天體，以及長時間弱信號的物理解釋。' },
        { title: '緻密天體', description: '中子星形變、黑洞吸積系統與高能觀測背後的物理幾何。' },
        { title: '多信使推斷', description: '將引力和電磁觀測整合為物理上一致的模型。' },
      ],
      questionsTitle: '目前問題', questionsIntro: '目前引導我閱讀與建模的代表性問題。',
      questions: ['如何提升連續引力波搜尋的靈敏度與物理解釋能力？', '緻密天體的幾何與輻射機制如何呈現在偏振觀測中？', '如何在整合異質信號時保持模型的物理一致性？'],
      relatedEyebrow: '繼續探索', relatedTitle: '寫作與公開資料', relatedDescription: '研究筆記與天文競賽資源庫從兩個角度延伸了本站的學術內容。',
      writingCta: '閱讀寫作', cvCta: '查看履歷', resourcesCta: '瀏覽資源',
    },
    writings: {
      title: '精選寫作', description: '持續整理的物理、數學與相關問題短文。', listLabel: '已發佈文章',
      articleMeta: '2025 年 9 月 23 日 · 力學 / 數學', articleTitle: '度規概念的初步感悟',
      articleSummary: '從勾股定理出發，理解度規如何成為無窮小距離概念的推廣。', articleCta: '閱讀文章',
    },
    interests: {
      eyebrow: '研究之外', title: '興趣', description: '閱讀、觀測、攝影與一些不屬於正式研究的技術項目。',
      sectionTitle: '更寬的注意力', sectionIntro: '這裡只保留已形成穩定興趣、並與本站內容有連結的方向。',
      cards: [
        { eyebrow: '隨筆與筆記', title: '公開思考', description: '研究之外的短文、閱讀筆記與階段想法。', href: '/zh-hk/writings/', cta: '瀏覽寫作' },
        { eyebrow: '天文教育', title: '競賽資料歸檔', description: '面向 IOAA、IAO 與 CNAO 學習者和教師的精選資料。', href: '/zh-hk/resources/', cta: '打開資源庫' },
        { eyebrow: '日常實踐', title: '觀測與攝影', description: '輕量觀測、校園行走與偶爾的攝影記錄。' },
      ],
    },
    resources: {
      eyebrow: '天文資料歸檔', title: '資源庫', description: '本站持續維護的競賽試題與配套資料精選集合。',
      sectionTitle: '競賽題庫', sectionIntro: '先選擇賽事，再按屆次瀏覽與下載資料。', listLabel: '競賽資料集合', openLabel: '進入資料集合',
    },
  },
};

export const localizedPath = (locale: SiteLocale, path: string) => `${localePrefixes[locale]}${path}` || '/';
