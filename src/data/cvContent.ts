import type { SiteLocale } from "../utils/routes";

type Localized = Record<SiteLocale, string>;
type CvItem = {
  title: Localized;
  date: Localized;
  meta?: Localized;
  project?: Localized;
  description?: Localized;
  bullets?: Localized[];
};

export type CvCopy = {
  kicker: string;
  name: string;
  role: string;
  focus: string;
  download: string;
  email: string;
  stats: { value: string; label: string }[];
  sections: {
    education: string;
    research: string;
    honors: string;
    competitions: string;
    leadership: string;
    keywords: string;
    skills: string;
  };
  education: CvItem[];
  research: CvItem[];
  honors: { year: string; text: string }[];
  competitions: { year: string; text: string }[];
  leadership: CvItem[];
  keywords: string[];
  skills: string[];
  pdf: string;
};

const text = (en: string, zhcn: string, zhhk: string): Localized => ({ en, "zh-cn": zhcn, "zh-hk": zhhk });

export const cvContent: Record<SiteLocale, CvCopy> = {
  en: {
    kicker: "Curriculum Vitae",
    name: "Yuze Guo",
    role: "Astrophysics PhD student at Peking University, with a B.Sc. in Physics from Wuhan University.",
    focus: "Research interests: gravitational-wave astronomy, compact stars, and multi-messenger astronomy.",
    download: "Download PDF",
    email: "Email",
    stats: [
      { value: "3.95/4.0", label: "Overall GPA" },
      { value: "1/236", label: "Undergraduate ranking" },
      { value: "PhD", label: "Astrophysics at PKU" },
      { value: "IELTS 8.0", label: "English proficiency" },
    ],
    sections: { education: "Education", research: "Research Experience", honors: "Honors & Awards", competitions: "Competitions", leadership: "Leadership & Other Experience", keywords: "Research Keywords", skills: "Skills" },
    education: [
      { title: text("Peking University · Ph.D. in Astrophysics", "北京大学 · 天体物理学博士", "北京大學 · 天體物理學博士"), date: text("Beijing · 2026 - Present", "北京 · 2026 年至今", "北京 · 2026 年至今"), description: text("Doctoral student in astrophysics.", "攻读天体物理方向博士学位。", "攻讀天體物理方向博士學位。") },
      { title: text("Wuhan University · B.Sc. in Physics", "武汉大学 · 物理学学士", "武漢大學 · 物理學學士"), date: text("Wuhan · Sep. 2022 - 2026", "武汉 · 2022 年 9 月至 2026 年", "武漢 · 2022 年 9 月至 2026 年"), description: text("Overall GPA: 3.95/4.0, ranking 1/236. Core courses include General Physics, Methods of Mathematical Physics, Theoretical Mechanics, Electrodynamics, Quantum Mechanics, Statistical Mechanics, Computational Physics, General Astronomy, and Astrophysics.", "总 GPA：3.95/4.0，排名 1/236。核心课程包括普通物理、数学物理方法、理论力学、电动力学、量子力学、热力学与统计物理学、计算物理、普通天文学和天体物理。", "平均學分積點：3.95/4.0，排名 1/236。核心課程包括普通物理、數學物理方法、理論力學、電動力學、量子力學、熱力學與統計物理學、計算物理、普通天文學和天體物理。") },
    ],
    research: [
      {
        title: text("Undergraduate Thesis", "本科毕业课题", "本科畢業課題"),
        date: text("Dec. 2025 - Apr. 2026", "2025 年 12 月 - 2026 年 4 月", "2025 年 12 月 - 2026 年 4 月"),
        meta: text("School of Physics and Technology, Wuhan University · Supervisor: Wei Wang", "武汉大学物理科学与技术学院 · 导师：王伟", "武漢大學物理科學與技術學院 · 導師：王偉"),
        project: text("X-ray Polarimetric Study of Black Hole X-ray Binary Swift J1727.8-1613: Disk-Corona-Jet Geometry Constraints", "黑洞 X 射线双星 Swift J1727.8-1613 的 X 射线偏振研究：盘-冕-喷流几何约束", "黑洞 X 射線雙星 Swift J1727.8-1613 的 X 射線偏振研究：盤-冕-噴流幾何約束"),
        bullets: [
          text("Analyzed IXPE observations across the hard-intermediate to soft-state transition.", "利用 IXPE 偏振观测分析从硬中间态到软态过程中的变化。", "利用 IXPE 偏振觀測分析從硬中間態到軟態過程中的變化。"),
          text("Tracked energy-dependent polarization growth and broad alignment with the jet direction.", "关注偏振度随能量升高而增强、偏振角整体稳定并大致与喷流方向一致等现象。", "關注偏振度隨能量升高而增強、偏振角整體穩定並大致與噴流方向一致等現象。"),
          text("Interpreted time-averaged polarization as likely arising from a stable, non-spherical Compton scattering region.", "将平均偏振解释为可能来自几何取向稳定、非球对称的 Compton 散射区域。", "將平均偏振解釋為可能來自幾何取向穩定、非球對稱的 Compton 散射區域。"),
        ],
      },
      {
        title: text("Research Training", "科研训练", "科研訓練"),
        date: text("Apr. 2024 - Present", "2024 年 4 月至今", "2024 年 4 月至今"),
        meta: text("School of Physics and Technology, Wuhan University · Supervisor: Wei Wang", "武汉大学物理科学与技术学院 · 导师：王伟", "武漢大學物理科學與技術學院 · 導師：王偉"),
        project: text("Continuous Gravitational Radiation from Magnetically Deformed Neutron Stars", "由磁场引起形变的中子星所产生的连续引力辐射", "由磁場引起形變的中子星所產生的連續引力輻射"),
        bullets: [
          text("Studied continuous gravitational waves from tilted magnetized neutron stars.", "研究倾斜磁化中子星产生的连续引力波。", "研究傾斜磁化中子星產生的連續引力波。"),
          text("Showed how frozen toroidal magnetic fields can turn axisymmetric deformation into time-varying quadrupole radiation.", "讨论冻结在星体内的环向磁场如何使轴对称旋转形变转化为随时间变化的四极矩辐射。", "討論凍結在星體內的環向磁場如何使軸對稱旋轉形變轉化為隨時間變化的四極矩輻射。"),
          text("Found that millisecond-period neutron stars can enhance gravitational-wave amplitude by up to four orders of magnitude; article under submission.", "发现毫秒级快速转动中子星的引力波振幅最高可增强约 4 个数量级；文章正在投稿。", "發現毫秒級快速轉動中子星的引力波振幅最高可增強約 4 個數量級；文章正在投稿。"),
        ],
      },
      {
        title: text("Oxford Academic English Skills for Research", "牛津学术英语研究技能", "牛津學術英語研究技能"),
        date: text("Jul. 2023 - Aug. 2023", "2023 年 7 月 - 2023 年 8 月", "2023 年 7 月 - 2023 年 8 月"),
        meta: text("University of Oxford Language Centre · Tutor: Daniel Worthing", "牛津大学语言中心 · 导师：Daniel Worthing", "牛津大學語言中心 · 導師：Daniel Worthing"),
        project: text("Multi-messenger Astronomy and its Role in Modern Cosmological Research", "多信使天文学及其在现代宇宙学研究中的作用", "多信使天文學及其在現代宇宙學研究中的作用"),
        bullets: [
          text("Developed literature review, citation, academic presentation, and editing skills.", "训练文献综述、正确引用、学术汇报与编辑能力。", "訓練文獻綜述、正確引用、學術匯報與編輯能力。"),
          text("Completed a discipline-related literature review and presented the work in academic discussions.", "完成专业相关文献综述，并在学术讨论中展示成果。", "完成專業相關文獻綜述，並在學術討論中展示成果。"),
          text("Achieved an A+ and received a letter of recommendation.", "以 A+ 的成绩完成课程，并获得推荐信。", "以 A+ 的成績完成課程，並獲得推薦信。"),
        ],
      },
    ],
    honors: [
      { year: "2026", text: "Outstanding Undergraduate Graduate, Wuhan University" },
      { year: "2025", text: "Blue Moon Scholarship, Wuhan University" },
      { year: "2025", text: "Second-Class Outstanding Student Scholarship, Wuhan University" },
      { year: "2024", text: "National Scholarship, Ministry of Education of the People's Republic of China" },
      { year: "2024", text: "Annual Scholarship of National Astronomical Observatories, Chinese Academy of Sciences" },
      { year: "2023 & 2024", text: "First-Class Outstanding Student Scholarship, Wuhan University" },
      { year: "2023-2025", text: "University-Level Merit Student, Wuhan University" },
      { year: "2023", text: "Third Semester Exchange Scholarship, Wuhan University" },
    ],
    competitions: [
      { year: "Nov. 2021", text: "Gold Medal, XIV International Olympiad on Astronomy and Astrophysics" },
      { year: "Dec. 2024", text: "Second Prize, The 10th China Undergraduate Physics Experiment Competition" },
      { year: "Jul. 2024", text: "First Prize, The 9th Hubei Provincial Competition of Innovative Design on Physics Experiments" },
      { year: "May 2024", text: "Grand Prize, 2024 National English Competition for College Students" },
    ],
    leadership: [
      { title: text("Vice President and Head of the Academic Department", "副会长兼学术部部长", "副會長兼學術部部長"), date: text("May 2023 - Apr. 2024", "2023 年 5 月 - 2024 年 4 月", "2023 年 5 月 - 2024 年 4 月"), meta: text("Wuhan University Astronomy Association", "武汉大学天文爱好者协会", "武漢大學天文愛好者協會"), description: text("Assisted association management and led academic forecasts, science communication articles, and lecture series.", "协助协会管理，并组织天文预报、科普文章和科学讲座等活动。", "協助協會管理，並組織天文預報、科普文章和科學講座等活動。") },
    ],
    keywords: ["Gravitational Waves", "Compact Stars", "X-ray Polarization", "Multi-messenger Astronomy"],
    skills: ["Programming: C, Python, Mathematica", "Typesetting: Microsoft Office, LaTeX, Markdown", "Languages: English, Mandarin, Cantonese"],
    pdf: "/assets/pdf/en-us/cv_en.pdf",
  },
  "zh-cn": {} as CvCopy,
  "zh-hk": {} as CvCopy,
};

cvContent["zh-cn"] = {
  ...cvContent.en,
  kicker: "个人简历",
  name: "郭雨泽",
  role: "北京大学天体物理博士生，本科毕业于武汉大学物理学专业。",
  focus: "研究兴趣：引力波天文学、致密天体与多信使天文学。",
  download: "下载 PDF",
  email: "邮箱",
  stats: [
    { value: "3.95/4.0", label: "总 GPA" },
    { value: "1/236", label: "本科排名" },
    { value: "博士", label: "北大天体物理" },
    { value: "IELTS 8.0", label: "英语能力" },
  ],
  sections: { education: "教育经历", research: "研究与项目经历", honors: "荣誉与奖项", competitions: "竞赛经历", leadership: "其它经历", keywords: "研究关键词", skills: "技能" },
  honors: [
    { year: "2026", text: "2026 届优秀本科毕业生，武汉大学" },
    { year: "2025", text: "蓝月亮奖学金，武汉大学" },
    { year: "2025", text: "优秀学生乙等奖学金，武汉大学" },
    { year: "2024", text: "国家奖学金，中华人民共和国教育部" },
    { year: "2024", text: "中国科学院国家天文台奖学金，中国科学院国家天文台" },
    { year: "2023 & 2024", text: "优秀学生甲等奖学金，武汉大学" },
    { year: "2023-2025", text: "校级三好学生，武汉大学" },
    { year: "2023", text: "第三学期交流奖学金，武汉大学" },
  ],
  competitions: [
    { year: "2021 年 11 月", text: "金牌，第十四届国际天文与天体物理奥林匹克竞赛" },
    { year: "2024 年 12 月", text: "二等奖，第十届全国大学生物理实验竞赛（创新）" },
    { year: "2024 年 7 月", text: "一等奖，第九届湖北省大学生物理实验创新设计竞赛" },
    { year: "2024 年 5 月", text: "特等奖，2024 年全国大学生英语竞赛（湖北赛区）" },
  ],
  keywords: ["引力波", "致密天体", "X 射线偏振", "多信使天文学"],
  skills: ["计算机编程：C、Python、Mathematica", "文字排版：Microsoft Office、LaTeX、Markdown", "语言：中文、英语、粤语"],
  pdf: "/assets/pdf/zh-cn/cv_zh.pdf",
};

cvContent["zh-hk"] = {
  ...cvContent["zh-cn"],
  kicker: "個人履歷",
  name: "郭雨澤",
  role: "北京大學天體物理博士生，本科畢業於武漢大學物理學專業。",
  focus: "研究興趣：引力波天文學、緻密天體與多信使天文學。",
  download: "下載 PDF",
  email: "郵箱",
  stats: [
    { value: "3.95/4.0", label: "總 GPA" },
    { value: "1/236", label: "本科排名" },
    { value: "博士", label: "北大天體物理" },
    { value: "IELTS 8.0", label: "英語能力" },
  ],
  sections: { education: "教育經歷", research: "研究與項目經歷", honors: "榮譽與獎項", competitions: "競賽經歷", leadership: "其它經歷", keywords: "研究關鍵詞", skills: "技能" },
  honors: [
    { year: "2026", text: "2026 屆優秀本科畢業生，武漢大學" },
    { year: "2025", text: "藍月亮獎學金，武漢大學" },
    { year: "2025", text: "優秀學生乙等獎學金，武漢大學" },
    { year: "2024", text: "國家獎學金，中華人民共和國教育部" },
    { year: "2024", text: "中國科學院國家天文台獎學金，中國科學院國家天文台" },
    { year: "2023 & 2024", text: "優秀學生甲等獎學金，武漢大學" },
    { year: "2023-2025", text: "校級三好學生，武漢大學" },
    { year: "2023", text: "第三學期交流獎學金，武漢大學" },
  ],
  competitions: [
    { year: "2021 年 11 月", text: "金牌，第十四屆國際天文與天體物理奧林匹克競賽" },
    { year: "2024 年 12 月", text: "二等獎，第十屆全國大學生物理實驗競賽（創新）" },
    { year: "2024 年 7 月", text: "一等獎，第九屆湖北省大學生物理實驗創新設計競賽" },
    { year: "2024 年 5 月", text: "特等獎，2024 年全國大學生英語競賽（湖北賽區）" },
  ],
  keywords: ["引力波", "緻密天體", "X 射線偏振", "多信使天文學"],
  skills: ["計算機編程：C、Python、Mathematica", "文字排版：Microsoft Office、LaTeX、Markdown", "語言：中文、英語、粵語"],
  pdf: "/assets/pdf/zh-hk/cv_hk.pdf",
};
