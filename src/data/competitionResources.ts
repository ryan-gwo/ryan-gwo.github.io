export type ResourceLocale = 'en' | 'zh-cn' | 'zh-hk';
export type CompetitionSlug = 'ioaa' | 'iao' | 'cnao';

export type DownloadLink = {
  label: string;
  href: string;
};

export type ResourceFact = {
  label: string;
  value: string;
};

export type CompetitionEdition = {
  slug: string;
  label: string;
  logo?: string;
  date?: string;
  location?: string;
  format?: string;
  summary?: string;
  facts?: ResourceFact[];
  downloads: DownloadLink[];
};

export type CompetitionResource = {
  slug: CompetitionSlug;
  title: string;
  description: string;
  eyebrow: string;
  logo: string;
  overview?: string;
  facts?: ResourceFact[];
  structureNote?: string;
  editions: CompetitionEdition[];
};

export const localePrefixes: Record<ResourceLocale, string> = {
  en: '',
  'zh-cn': '/zh-cn',
  'zh-hk': '/zh-hk',
};

export const resourceText = {
  en: {
    resourceHome: 'Back to resources',
    competitionHome: 'Back to competition page',
    viewDetails: 'View details',
    materials: 'Materials',
    materialCount: (count: number) => `${count} material${count === 1 ? '' : 's'}`,
    editionDescription: (competition: string, edition: string, count: number) =>
      `${edition} collects ${count} downloadable item${count === 1 ? '' : 's'} currently maintained for ${competition}.`,
    overviewTitle: 'Overview',
    editionsTitle: 'Edition archive',
    downloadsTitle: 'Available downloads',
    editionInfoTitle: 'Edition notes',
  },
  'zh-cn': {
    resourceHome: '返回资源首页',
    competitionHome: '返回竞赛页面',
    viewDetails: '查看详情',
    materials: '资料',
    materialCount: (count: number) => `${count} 项资料`,
    editionDescription: (_competition: string, edition: string, count: number) =>
      `当前页面整理${edition}的 ${count} 项可下载资料。`,
    overviewTitle: '竞赛概览',
    editionsTitle: '届次索引',
    downloadsTitle: '可下载资料',
    editionInfoTitle: '当届信息',
  },
  'zh-hk': {
    resourceHome: '返回資源首頁',
    competitionHome: '返回競賽頁面',
    viewDetails: '查看詳情',
    materials: '資料',
    materialCount: (count: number) => `${count} 項資料`,
    editionDescription: (_competition: string, edition: string, count: number) =>
      `當前頁面整理${edition}的 ${count} 項可下載資料。`,
    overviewTitle: '競賽概覽',
    editionsTitle: '屆次索引',
    downloadsTitle: '可下載資料',
    editionInfoTitle: '當屆資訊',
  },
} satisfies Record<ResourceLocale, {
  resourceHome: string;
  competitionHome: string;
  viewDetails: string;
  materials: string;
  materialCount: (count: number) => string;
  editionDescription: (competition: string, edition: string, count: number) => string;
  overviewTitle: string;
  editionsTitle: string;
  downloadsTitle: string;
  editionInfoTitle: string;
}>;

export const competitionResources: Record<ResourceLocale, Record<CompetitionSlug, CompetitionResource>> = {
  en: {
    ioaa: {
      slug: 'ioaa',
      title: 'IOAA Resources',
      description: 'Each edition opens into a focused download page.',
      eyebrow: 'Competition',
      logo: '/assets/logos/ioaa/ioaa.png',
      overview: 'The IOAA promotes interest in astronomy, astrophysics, and related STEM subjects through an international competition for high-school students.',
      facts: [
        { label: 'Focus', value: 'Astronomy and astrophysics' },
        { label: 'Audience', value: 'High-school students' },
        { label: 'Role', value: 'International academic exchange' },
      ],
      structureNote: 'This archive keeps downloadable papers on dedicated edition pages, with brief edition notes drawn from the collected competition information.',
      editions: [
        {
          slug: '2025',
          label: '2025 (18th IOAA)',
          logo: '/assets/logos/ioaa/ioaa2025.png',
          date: 'August 11-21, 2025',
          location: 'Mumbai, India',
          summary: 'The 18th IOAA will be held in Mumbai, India, from August 11 to 21, 2025.',
          downloads: [
            { label: 'Data Sheet', href: '/assets/pdf/en-us/IOAA_2025_Data_Sheet.pdf' },
            { label: 'Theory Bundle', href: '/assets/pdf/en-us/IOAA_2025_Theory.pdf' },
            { label: 'Data Analysis Bundle', href: '/assets/pdf/en-us/IOAA_2025_Data_Analysis.pdf' },
            { label: 'Observation (Sky Map) Bundle', href: '/assets/pdf/en-us/IOAA_2025_Observation_Map.pdf' },
            { label: 'Observation (Telescope) Bundle', href: '/assets/pdf/en-us/IOAA_2025_Observation_Telescope.pdf' },
            { label: 'Observation (Planetarium) Bundle', href: '/assets/pdf/en-us/IOAA_2025_Observation_Planetarium.pdf' },
            { label: 'Group Bundle', href: '/assets/pdf/en-us/IOAA_2025_Group.pdf' },
          ],
        },
        {
          slug: '2024',
          label: '2024 (17th IOAA)',
          logo: '/assets/logos/ioaa/ioaa2024.png',
          date: 'August 17-27, 2024',
          location: 'Vassouras, Rio de Janeiro, Brazil',
          summary: 'The 17th IOAA was organized by Observatorio Nacional and held in Vassouras, in the state of Rio de Janeiro, Brazil.',
          downloads: [
            { label: 'Theory Problems', href: '/assets/pdf/en-us/IOAA_2024_Theory.pdf' },
            { label: 'Data Analysis Problems', href: '/assets/pdf/en-us/IOAA_2024_Data_Analysis.pdf' },
            { label: 'Observation Problems', href: '/assets/pdf/en-us/IOAA_2024_Observation.pdf' },
            { label: 'Planetarium Problems', href: '/assets/pdf/en-us/IOAA_2024_Planetarium.pdf' },
          ],
        },
        {
          slug: '2023',
          label: '2023 (16th IOAA)',
          logo: '/assets/logos/ioaa/ioaa2023.png',
          date: 'August 10-20, 2023',
          location: 'Katowice, Poland',
          summary: 'The 16th IOAA was held in person in Katowice, Poland, with 52 main teams participating.',
          downloads: [
            { label: 'Theory Problems', href: '/assets/pdf/en-us/IOAA_2023_Theory.pdf' },
            { label: 'Data Analysis Problems', href: '/assets/pdf/en-us/IOAA_2023_Data.pdf' },
            { label: 'Observation Problems', href: '/assets/pdf/en-us/IOAA_2023_Observation.pdf' },
            { label: 'Planetarium Problems', href: '/assets/pdf/en-us/IOAA_2023_Planetarium.pdf' },
            { label: 'Group Problems', href: '/assets/pdf/en-us/IOAA_2023_Group.pdf' },
          ],
        },
        {
          slug: '2022',
          label: '2022 (15th IOAA)',
          logo: '/assets/logos/ioaa/ioaa2022.png',
          date: 'August 14-21, 2022',
          location: 'Kutaisi, Georgia',
          format: 'Hybrid',
          summary: 'The 15th IOAA was held in hybrid mode, with main teams in Kutaisi and additional teams joining online.',
          downloads: [
            { label: 'Theory Problems', href: '/assets/pdf/en-us/IOAA_2022_Theory.pdf' },
            { label: 'Data Analysis Problem 1 with Solution', href: '/assets/pdf/en-us/IOAA_2022_Data_1_sol.pdf' },
            { label: 'Data Analysis Problem 2 with Solution', href: '/assets/pdf/en-us/IOAA_2022_Data_2_sol.pdf' },
            { label: 'Nighttime Observation Problems', href: '/assets/pdf/en-us/IOAA_2022_Observation_Night.pdf' },
            { label: 'Daytime Observation Problems', href: '/assets/pdf/en-us/IOAA_2022_Observation_Day.pdf' },
          ],
        },
        {
          slug: 'archive',
          label: 'Historical Materials',
          logo: '/assets/logos/ioaa/ioaa.png',
          summary: 'A compiled historical problem book for earlier IOAA editions.',
          downloads: [
            { label: 'IOAA Problem Book (2007-2021)', href: '/assets/pdf/en-us/IOAA Problem Book.pdf' },
          ],
        },
      ],
    },
    iao: {
      slug: 'iao',
      title: 'IAO Resources',
      description: 'Selected IAO files are organized into focused edition pages.',
      eyebrow: 'Competition',
      logo: '/assets/logos/iao/iao.png',
      overview: 'The International Astronomy Olympiad is an astronomy education competition for secondary-school students, founded by the Euro-Asian Astronomical Society in 1996.',
      facts: [
        { label: 'Founded', value: '1996' },
        { label: 'Typical age range', value: 'About 14-18' },
        { label: 'Components', value: 'Theory, observation, practical/data work' },
      ],
      structureNote: 'Available downloads remain focused on the editions already maintained in this resource library.',
      editions: [
        {
          slug: '2015',
          label: '2015 (20th IAO)',
          logo: '/assets/logos/iao/iao2015.png',
          date: 'October 15-23, 2015',
          location: 'Kazan, Tatarstan, Russia',
          summary: 'The 20th IAO took place in Kazan, Tatarstan, Russia, with materials grouped by theory, practical, and observational rounds.',
          downloads: [
            { label: 'Theory Round for Group alpha', href: '/assets/pdf/en-us/IAO_2015_Theory_a.pdf' },
            { label: 'Theory Round for Group beta', href: '/assets/pdf/en-us/IAO_2015_Theory_b.pdf' },
            { label: 'Supplementary Material 1 for Theory Round', href: '/assets/pdf/en-us/IAO_2015_Theory_Sup1.pdf' },
            { label: 'Supplementary Material 2 for Theory Round (Tab. of Const.)', href: '/assets/pdf/en-us/IAO_2015_Theory_Sup2.pdf' },
            { label: 'Supplementary Material 3 for Theory Round', href: '/assets/pdf/en-us/IAO_2015_Theory_Sup3.pdf' },
            { label: 'Supplementary Material 4 for Theory Round', href: '/assets/pdf/en-us/IAO_2015_Theory_Sup4.pdf' },
            { label: 'Supplementary Material 5 for Theory Round (HR Diagram, Group beta)', href: '/assets/pdf/en-us/IAO_2015_Theory_Sup5.pdf' },
            { label: 'Practical Round for Group alpha', href: '/assets/pdf/en-us/IAO_2015_Practical_a.pdf' },
            { label: 'Practical Round for Group beta', href: '/assets/pdf/en-us/IAO_2015_Practical_b.pdf' },
            { label: 'Supplementary Material 1 for Practical Round (Group beta)', href: '/assets/pdf/en-us/IAO_2015_Practical_Sup1.pdf' },
            { label: 'Observational Round (Planetarium)', href: '/assets/pdf/en-us/IAO_2015_Observation_Planetarium.pdf' },
            { label: 'Observational Round (Cloudy Sky)', href: '/assets/pdf/en-us/IAO_2015_Observation_Cloudy.pdf' },
          ],
        },
      ],
    },
    cnao: {
      slug: 'cnao',
      title: 'CNAO Resources',
      description: 'CNAO files are primarily in Chinese and grouped by academic year.',
      eyebrow: 'Competition',
      logo: '/assets/logos/cnao.png',
      overview: 'CNAO originated from a national astronomy correspondence competition in 2002 and developed into a national astronomy competition for secondary-school students in China.',
      facts: [
        { label: 'First official edition', value: '2003' },
        { label: 'Organizer', value: 'Chinese Astronomical Society' },
        { label: 'Selection role', value: 'China team pathway for IOAA, IAO, and APAO' },
      ],
      structureNote: 'The competition is organized around preliminary, final, and selection stages, with high-age and low-age groups.',
      editions: [
        {
          slug: '2024-2025',
          label: '2024-2025 Academic Year',
          date: 'May 12-16, 2025',
          location: 'Shantou, Guangdong',
          summary: 'The 2024-2025 academic year final round was held in Shantou, Guangdong.',
          downloads: [
            { label: 'Final Round Problems (Chinese)', href: '/assets/pdf/zh-cn/CNAO_2025.pdf' },
            { label: 'Final Round Problems with Answers (Chinese)', href: '/assets/pdf/zh-cn/CNAO_2025_ans.pdf' },
          ],
        },
        {
          slug: '2023-2024',
          label: '2023-2024 Academic Year',
          date: 'February-May 2024',
          location: 'Beijing',
          summary: 'The 2023-2024 academic year competition ran from registration and preliminary selection through the final round, closing in Beijing on May 11.',
          downloads: [
            { label: 'Final Round Problems (Chinese)', href: '/assets/pdf/zh-cn/CNAO_2024.pdf' },
            { label: 'Final Round Problems with Answers (Chinese)', href: '/assets/pdf/zh-cn/CNAO_2024_ans.pdf' },
          ],
        },
        {
          slug: '2022-2023',
          label: '2022-2023 Academic Year',
          date: 'February-May 2023',
          location: 'Tianjin',
          summary: 'The 2022-2023 academic year competition ran from registration and preliminary selection through the final round, closing in Tianjin on May 12.',
          downloads: [
            { label: 'Final Round Problems (Chinese)', href: '/assets/pdf/zh-cn/CNAO_2023.pdf' },
            { label: 'Final Round Problems with Answers (Chinese)', href: '/assets/pdf/zh-cn/CNAO_2023_ans.pdf' },
          ],
        },
        {
          slug: '2021-2022',
          label: '2021-2022 Academic Year',
          date: 'May 7-8, 2022',
          format: 'Online',
          summary: 'The 2021-2022 academic year final round was held online.',
          downloads: [
            { label: 'Final Round Problems (Chinese)', href: '/assets/pdf/zh-cn/CNAO_2022.pdf' },
            { label: 'Final Round Video (Chinese)', href: '/assets/pdf/zh-cn/CNAO_2022.mp4' },
          ],
        },
        {
          slug: 'archive',
          label: 'Historical Materials',
          summary: 'A historical collection covering CNAO materials from 2002 to 2020.',
          downloads: [
            { label: 'CNAO 2002-2020 Problem Set and Partial Solutions (Chinese)', href: '/assets/pdf/zh-cn/CNAO_2002_to_2020.pdf' },
            { label: 'Browse Chinese resources page', href: '/zh-cn/resources/' },
          ],
        },
      ],
    },
  },
  'zh-cn': {
    ioaa: {
      slug: 'ioaa',
      title: 'IOAA 资源',
      description: '按届次进入单独页面查看可下载题目。',
      eyebrow: '竞赛页面',
      logo: '/assets/logos/ioaa/ioaa.png',
      overview: 'IOAA 旨在通过面向高中生的国际竞赛，促进学生对天文学、天体物理及相关 STEM 学科的兴趣，并推动不同国家之间的天文教育交流。',
      facts: [
        { label: '主题', value: '天文学与天体物理' },
        { label: '对象', value: '高中阶段学生' },
        { label: '定位', value: '国际学术交流与竞赛' },
      ],
      structureNote: '本页只作为届次索引，具体试题资料集中放在各届详情页。',
      editions: [
        {
          slug: '2025',
          label: '第十八届（2025）',
          logo: '/assets/logos/ioaa/ioaa2025.png',
          date: '2025 年 8 月 11 日至 21 日',
          location: '印度孟买',
          summary: '第十八届 IOAA 将于 2025 年 8 月 11 日至 21 日在印度孟买举行。',
          downloads: [
            { label: '理论试题', href: '/assets/pdf/zh-cn/IOAA_2025_Theory_zh.pdf' },
            { label: '数据分析试题', href: '/assets/pdf/zh-cn/IOAA_2025_Data_zh.pdf' },
          ],
        },
        {
          slug: '2024',
          label: '第十七届（2024）',
          logo: '/assets/logos/ioaa/ioaa2024.png',
          date: '2024 年 8 月 17 日至 27 日',
          location: '巴西里约热内卢州瓦索拉斯',
          summary: '第十七届 IOAA 由 Observatorio Nacional 组织，在巴西里约热内卢州瓦索拉斯举行。',
          downloads: [
            { label: '理论试题', href: '/assets/pdf/zh-cn/IOAA_2024_Theory_zh.pdf' },
            { label: '数据分析试题', href: '/assets/pdf/zh-cn/IOAA_2024_Data_zh.pdf' },
          ],
        },
        {
          slug: '2023',
          label: '第十六届（2023）',
          logo: '/assets/logos/ioaa/ioaa2023.png',
          date: '2023 年 8 月 10 日至 20 日',
          location: '波兰卡托维兹',
          summary: '第十六届 IOAA 在波兰卡托维兹线下举行，共有 52 支主队参赛。',
          downloads: [
            { label: '理论试题', href: '/assets/pdf/zh-cn/IOAA_2023_Theory_zh.pdf' },
            { label: '数据分析试题', href: '/assets/pdf/zh-cn/IOAA_2023_Data_zh.pdf' },
            { label: '观测试题', href: '/assets/pdf/zh-cn/IOAA_2023_Observation_zh.pdf' },
            { label: '天象厅试题', href: '/assets/pdf/zh-cn/IOAA_2023_Planetarium_zh.pdf' },
            { label: '团队赛试题', href: '/assets/pdf/zh-cn/IOAA_2023_Group_zh.pdf' },
          ],
        },
        {
          slug: '2022',
          label: '第十五届（2022）',
          logo: '/assets/logos/ioaa/ioaa2022.png',
          date: '2022 年 8 月 14 日至 21 日',
          location: '格鲁吉亚库塔伊西',
          format: '混合形式',
          summary: '第十五届 IOAA 以混合形式举行，主队在库塔伊西参赛，另有队伍线上参加。',
          downloads: [
            { label: '理论试题', href: '/assets/pdf/zh-cn/IOAA_2022_Theory_zh.pdf' },
            { label: '数据分析试题', href: '/assets/pdf/zh-cn/IOAA_2022_Data_zh.pdf' },
            { label: '观测试题', href: '/assets/pdf/zh-cn/IOAA_2022_Observation_zh.pdf' },
          ],
        },
        {
          slug: '2021',
          label: '第十四届（2021）',
          logo: '/assets/logos/ioaa/ioaa2021.png',
          date: '2021 年 11 月 14 日至 21 日',
          location: '哥伦比亚波哥大',
          format: '混合形式',
          summary: '第十四届 IOAA 以混合形式举行，学术委员会与执行委员会在波哥大，领队和学生远程参与。',
          downloads: [
            { label: '理论试题', href: '/assets/pdf/zh-cn/IOAA_2021_Theory_zh.pdf' },
            { label: '数据分析试题', href: '/assets/pdf/zh-cn/IOAA_2021_Data_zh.pdf' },
            { label: '观测（太阳物理）试题', href: '/assets/pdf/zh-cn/IOAA_2021_Observation_zh.pdf' },
            { label: '团队赛试题', href: '/assets/pdf/zh-cn/IOAA_2021_Group_zh.pdf' },
          ],
        },
        {
          slug: 'archive',
          label: '历史资料',
          logo: '/assets/logos/ioaa/ioaa.png',
          summary: '早期 IOAA 理论与数据分析试题的整理资料。',
          downloads: [
            { label: 'IOAA 2007-2019 理论与数据分析试题集', href: '/assets/pdf/zh-cn/IOAA_2007_to_2019_zh.pdf' },
          ],
        },
      ],
    },
    iao: {
      slug: 'iao',
      title: 'IAO 资源',
      description: '收录可用的 IAO 试题与历史整理资料。',
      eyebrow: '竞赛页面',
      logo: '/assets/logos/iao/iao.png',
      overview: 'IAO 是面向中学生的国际天文科教竞赛，由 Euro-Asian Astronomical Society 于 1996 年创立，竞赛内容通常包括理论、观测和实测/数据处理等环节。',
      facts: [
        { label: '创立时间', value: '1996 年' },
        { label: '参赛年龄', value: '约 14-18 岁' },
        { label: '竞赛环节', value: '理论、观测、实测/数据处理' },
      ],
      structureNote: '本资源库只为当前已有下载资料的届次提供详情页。',
      editions: [
        {
          slug: '2021',
          label: '2021 年（IRAO）',
          logo: '/assets/logos/iao/irao2021.png',
          date: '2021 年 11 月 5 日至 13 日',
          location: '远程形式；主办办公室位于意大利米兰',
          format: 'IRAO 远程形式',
          summary: '2021 年 IAO 以 International Remote Astronomy Olympiad 形式举行。',
          downloads: [
            { label: '理论试题', href: '/assets/pdf/zh-cn/IAO_2021_Theory.pdf' },
          ],
        },
        {
          slug: 'archive',
          label: '历史资料',
          logo: '/assets/logos/iao/iao.png',
          summary: 'IAO 早期至 2021 年的部分试题整理资料。',
          downloads: [
            { label: 'IAO 1996-2021 部分试题集', href: '/assets/pdf/zh-cn/IAO_1996_to_2021_zh.pdf' },
          ],
        },
      ],
    },
    cnao: {
      slug: 'cnao',
      title: 'CNAO 资源',
      description: '按学年进入单独页面查看 CNAO 决赛资料。',
      eyebrow: '竞赛页面',
      logo: '/assets/logos/cnao.png',
      overview: 'CNAO 源于 2002 年《天文爱好者》杂志举办的全国中学生天文通讯赛，2003 年首届全国中学生天文奥林匹克竞赛正式举办，2019 年起更名并连续成为教育部面向全国中小学生的自然科学素养类竞赛活动。',
      facts: [
        { label: '正式举办', value: '2003 年' },
        { label: '主办单位', value: '中国天文学会' },
        { label: '选拔作用', value: 'IOAA、IAO、APAO 中国队选拔渠道' },
      ],
      structureNote: '竞赛通常包含预赛、决赛和选拔赛，并按年龄分为高年组和低年组。',
      editions: [
        {
          slug: '2024-2025',
          label: '2024-2025 学年',
          date: '2025 年 5 月 12 日至 16 日',
          location: '广东汕头',
          summary: '2024-2025 学年全国中学生天文知识竞赛决赛在广东汕头举行。',
          downloads: [
            { label: '决赛试题', href: '/assets/pdf/zh-cn/CNAO_2025.pdf' },
            { label: '决赛试题（含答案）', href: '/assets/pdf/zh-cn/CNAO_2025_ans.pdf' },
          ],
        },
        {
          slug: '2023-2024',
          label: '2023-2024 学年',
          date: '2024 年 2 月至 5 月',
          location: '北京',
          summary: '2023-2024 学年竞赛经报名、预赛选拔、决赛等环节，于 5 月 11 日在北京闭幕。',
          downloads: [
            { label: '决赛试题', href: '/assets/pdf/zh-cn/CNAO_2024.pdf' },
            { label: '决赛试题（含答案）', href: '/assets/pdf/zh-cn/CNAO_2024_ans.pdf' },
          ],
        },
        {
          slug: '2022-2023',
          label: '2022-2023 学年',
          date: '2023 年 2 月至 5 月',
          location: '天津',
          summary: '2022-2023 学年竞赛经报名、预赛选拔、决赛等环节，于 5 月 12 日在天津闭幕。',
          downloads: [
            { label: '决赛试题', href: '/assets/pdf/zh-cn/CNAO_2023.pdf' },
            { label: '决赛试题（含答案）', href: '/assets/pdf/zh-cn/CNAO_2023_ans.pdf' },
          ],
        },
        {
          slug: '2021-2022',
          label: '2021-2022 学年',
          date: '2022 年 5 月 7 日至 8 日',
          format: '线上举行',
          summary: '2021-2022 学年全国中学生天文知识竞赛决赛在线上举行。',
          downloads: [
            { label: '决赛试题', href: '/assets/pdf/zh-cn/CNAO_2022.pdf' },
            { label: '决赛试题视频', href: '/assets/pdf/zh-cn/CNAO_2022.mp4' },
          ],
        },
        {
          slug: 'archive',
          label: '历史资料',
          summary: 'CNAO 2002-2020 年决赛与国家集训队选拔赛试题及部分解答整理。',
          downloads: [
            { label: 'CNAO 2002-2020 决赛与国家集训队选拔赛试题及部分解答', href: '/assets/pdf/zh-cn/CNAO_2002_to_2020.pdf' },
          ],
        },
      ],
    },
  },
  'zh-hk': {
    ioaa: {
      slug: 'ioaa',
      title: 'IOAA 資源',
      description: '按屆次進入單獨頁面查看可下載題目。',
      eyebrow: '競賽頁面',
      logo: '/assets/logos/ioaa/ioaa.png',
      overview: 'IOAA 旨在透過面向高中生的國際競賽，促進學生對天文學、天體物理及相關 STEM 學科的興趣，並推動不同國家之間的天文教育交流。',
      facts: [
        { label: '主題', value: '天文學與天體物理' },
        { label: '對象', value: '高中階段學生' },
        { label: '定位', value: '國際學術交流與競賽' },
      ],
      structureNote: '本頁只作為屆次索引，具體試題資料集中放在各屆詳情頁。',
      editions: [
        {
          slug: '2025',
          label: '第十八屆（2025）',
          logo: '/assets/logos/ioaa/ioaa2025.png',
          date: '2025 年 8 月 11 日至 21 日',
          location: '印度孟買',
          summary: '第十八屆 IOAA 將於 2025 年 8 月 11 日至 21 日在印度孟買舉行。',
          downloads: [
            { label: '理論試題', href: '/assets/pdf/zh-hk/IOAA_2025_Theory_hk.pdf' },
            { label: '數據分析試題', href: '/assets/pdf/zh-hk/IOAA_2025_Data_hk.pdf' },
          ],
        },
        {
          slug: '2024',
          label: '第十七屆（2024）',
          logo: '/assets/logos/ioaa/ioaa2024.png',
          date: '2024 年 8 月 17 日至 27 日',
          location: '巴西里約熱內盧州瓦索拉斯',
          summary: '第十七屆 IOAA 由 Observatorio Nacional 組織，在巴西里約熱內盧州瓦索拉斯舉行。',
          downloads: [
            { label: '理論試題（簡體中文）', href: '/assets/pdf/zh-cn/IOAA_2024_Theory_zh.pdf' },
            { label: '數據分析試題（簡體中文）', href: '/assets/pdf/zh-cn/IOAA_2024_Data_zh.pdf' },
          ],
        },
        {
          slug: '2023',
          label: '第十六屆（2023）',
          logo: '/assets/logos/ioaa/ioaa2023.png',
          date: '2023 年 8 月 10 日至 20 日',
          location: '波蘭卡托維茲',
          summary: '第十六屆 IOAA 在波蘭卡托維茲線下舉行，共有 52 支主隊參賽。',
          downloads: [
            { label: '理論試題（簡體中文）', href: '/assets/pdf/zh-cn/IOAA_2023_Theory_zh.pdf' },
            { label: '數據分析試題（簡體中文）', href: '/assets/pdf/zh-cn/IOAA_2023_Data_zh.pdf' },
            { label: '觀測試題（簡體中文）', href: '/assets/pdf/zh-cn/IOAA_2023_Observation_zh.pdf' },
            { label: '天象廳試題（簡體中文）', href: '/assets/pdf/zh-cn/IOAA_2023_Planetarium_zh.pdf' },
            { label: '團隊賽試題（簡體中文）', href: '/assets/pdf/zh-cn/IOAA_2023_Group_zh.pdf' },
          ],
        },
        {
          slug: '2022',
          label: '第十五屆（2022）',
          logo: '/assets/logos/ioaa/ioaa2022.png',
          date: '2022 年 8 月 14 日至 21 日',
          location: '格魯吉亞庫塔伊西',
          format: '混合形式',
          summary: '第十五屆 IOAA 以混合形式舉行，主隊在庫塔伊西參賽，另有隊伍線上參加。',
          downloads: [
            { label: '理論試題（簡體中文）', href: '/assets/pdf/zh-cn/IOAA_2022_Theory_zh.pdf' },
            { label: '數據分析試題（簡體中文）', href: '/assets/pdf/zh-cn/IOAA_2022_Data_zh.pdf' },
            { label: '觀測試題（簡體中文）', href: '/assets/pdf/zh-cn/IOAA_2022_Observation_zh.pdf' },
          ],
        },
        {
          slug: '2021',
          label: '第十四屆（2021）',
          logo: '/assets/logos/ioaa/ioaa2021.png',
          date: '2021 年 11 月 14 日至 21 日',
          location: '哥倫比亞波哥大',
          format: '混合形式',
          summary: '第十四屆 IOAA 以混合形式舉行，學術委員會與執行委員會在波哥大，領隊和學生遠程參與。',
          downloads: [
            { label: '理論試題（簡體中文）', href: '/assets/pdf/zh-cn/IOAA_2021_Theory_zh.pdf' },
            { label: '數據分析試題（簡體中文）', href: '/assets/pdf/zh-cn/IOAA_2021_Data_zh.pdf' },
            { label: '觀測試題（簡體中文）', href: '/assets/pdf/zh-cn/IOAA_2021_Observation_zh.pdf' },
            { label: '團隊賽試題（簡體中文）', href: '/assets/pdf/zh-cn/IOAA_2021_Group_zh.pdf' },
          ],
        },
        {
          slug: 'archive',
          label: '歷史資料',
          logo: '/assets/logos/ioaa/ioaa.png',
          summary: '早期 IOAA 理論與數據分析試題的整理資料。',
          downloads: [
            { label: 'IOAA 2007-2019 理論與數據分析試題集（簡體中文）', href: '/assets/pdf/zh-cn/IOAA_2007_to_2019_zh.pdf' },
          ],
        },
      ],
    },
    iao: {
      slug: 'iao',
      title: 'IAO 資源',
      description: '目前繁中資料較少，以下提供可用歷史入口。',
      eyebrow: '競賽頁面',
      logo: '/assets/logos/iao/iao.png',
      overview: 'IAO 是面向中學生的國際天文科教競賽，由 Euro-Asian Astronomical Society 於 1996 年創立，競賽內容通常包括理論、觀測和實測/數據處理等環節。',
      facts: [
        { label: '創立時間', value: '1996 年' },
        { label: '參賽年齡', value: '約 14-18 歲' },
        { label: '競賽環節', value: '理論、觀測、實測/數據處理' },
      ],
      structureNote: '本資源庫只為目前已有下載資料的屆次提供詳情頁。',
      editions: [
        {
          slug: '2021',
          label: '2021 年（IRAO）',
          logo: '/assets/logos/iao/irao2021.png',
          date: '2021 年 11 月 5 日至 13 日',
          location: '遠程形式；主辦辦公室位於意大利米蘭',
          format: 'IRAO 遠程形式',
          summary: '2021 年 IAO 以 International Remote Astronomy Olympiad 形式舉行。',
          downloads: [
            { label: '理論試題（簡體中文）', href: '/assets/pdf/zh-cn/IAO_2021_Theory.pdf' },
          ],
        },
        {
          slug: 'archive',
          label: '歷史資料',
          logo: '/assets/logos/iao/iao.png',
          summary: 'IAO 早期至 2021 年的部分試題整理資料。',
          downloads: [
            { label: 'IAO 1996-2021 部分試題集（簡體中文）', href: '/assets/pdf/zh-cn/IAO_1996_to_2021_zh.pdf' },
          ],
        },
      ],
    },
    cnao: {
      slug: 'cnao',
      title: 'CNAO 資源',
      description: '按學年進入單獨頁面查看 CNAO 決賽資料。',
      eyebrow: '競賽頁面',
      logo: '/assets/logos/cnao.png',
      overview: 'CNAO 源於 2002 年《天文愛好者》雜誌舉辦的全國中學生天文通訊賽，2003 年首屆全國中學生天文奧林匹克競賽正式舉辦，2019 年起更名並連續成為教育部面向全國中小學生的自然科學素養類競賽活動。',
      facts: [
        { label: '正式舉辦', value: '2003 年' },
        { label: '主辦單位', value: '中國天文學會' },
        { label: '選拔作用', value: 'IOAA、IAO、APAO 中國隊選拔渠道' },
      ],
      structureNote: '競賽通常包含預賽、決賽和選拔賽，並按年齡分為高年組和低年組。',
      editions: [
        {
          slug: '2024-2025',
          label: '2024-2025 學年',
          date: '2025 年 5 月 12 日至 16 日',
          location: '廣東汕頭',
          summary: '2024-2025 學年全國中學生天文知識競賽決賽在廣東汕頭舉行。',
          downloads: [
            { label: '決賽試題', href: '/assets/pdf/zh-hk/CNAO_2025_hk.pdf' },
            { label: '決賽試題（含答案）', href: '/assets/pdf/zh-hk/CNAO_2025_ans_hk.pdf' },
          ],
        },
        {
          slug: '2023-2024',
          label: '2023-2024 學年',
          date: '2024 年 2 月至 5 月',
          location: '北京',
          summary: '2023-2024 學年競賽經報名、預賽選拔、決賽等環節，於 5 月 11 日在北京閉幕。',
          downloads: [
            { label: '決賽試題（簡體中文）', href: '/assets/pdf/zh-cn/CNAO_2024.pdf' },
            { label: '決賽試題（含答案，簡體中文）', href: '/assets/pdf/zh-cn/CNAO_2024_ans.pdf' },
          ],
        },
        {
          slug: '2022-2023',
          label: '2022-2023 學年',
          date: '2023 年 2 月至 5 月',
          location: '天津',
          summary: '2022-2023 學年競賽經報名、預賽選拔、決賽等環節，於 5 月 12 日在天津閉幕。',
          downloads: [
            { label: '決賽試題（簡體中文）', href: '/assets/pdf/zh-cn/CNAO_2023.pdf' },
            { label: '決賽試題（含答案，簡體中文）', href: '/assets/pdf/zh-cn/CNAO_2023_ans.pdf' },
          ],
        },
        {
          slug: '2021-2022',
          label: '2021-2022 學年',
          date: '2022 年 5 月 7 日至 8 日',
          format: '線上舉行',
          summary: '2021-2022 學年全國中學生天文知識競賽決賽在線上舉行。',
          downloads: [
            { label: '決賽試題（簡體中文）', href: '/assets/pdf/zh-cn/CNAO_2022.pdf' },
            { label: '決賽試題影片（簡體中文）', href: '/assets/pdf/zh-cn/CNAO_2022.mp4' },
          ],
        },
        {
          slug: 'archive',
          label: '歷史資料',
          summary: 'CNAO 2002-2020 年決賽與國家集訓隊選拔賽試題及部分解答整理。',
          downloads: [
            { label: 'CNAO 2002-2020 決賽與國家集訓隊選拔賽試題及部分解答（簡體中文）', href: '/assets/pdf/zh-cn/CNAO_2002_to_2020.pdf' },
          ],
        },
      ],
    },
  },
};

export function getCompetition(locale: ResourceLocale, slug: CompetitionSlug) {
  return competitionResources[locale][slug];
}

export function getCompetitionBasePath(locale: ResourceLocale, competition: CompetitionSlug) {
  return `${localePrefixes[locale]}/resources/${competition}/`;
}

export function getEditionPath(locale: ResourceLocale, competition: CompetitionSlug, edition: CompetitionEdition) {
  return `${getCompetitionBasePath(locale, competition)}${edition.slug}/`;
}

export function getAllEditionPaths(locale: ResourceLocale) {
  return Object.values(competitionResources[locale]).flatMap((competition) =>
    competition.editions.map((edition) => ({
      params: {
        competition: competition.slug,
        edition: edition.slug,
      },
      props: {
        locale,
        competition,
        edition,
      },
    }))
  );
}
