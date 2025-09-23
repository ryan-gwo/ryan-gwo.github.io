
const currentUrl = window.location.href;
const siteUrl = "https://ryan-gwo.github.io"; 
let updatedUrl = currentUrl.replace("https://ryan-gwo.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("zh-hk".length > 0) {
  updatedUrl = updatedUrl.replace("/zh-hk", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-關於",
    title: "關於",
    section: "導航菜單",
    handler: () => {
      window.location.href = "/zh-hk/";
    },
  },{id: "nav-部落格",
          title: "部落格",
          description: "思想、故事和想法。",
          section: "導航菜單",
          handler: () => {
            window.location.href = "/zh-hk/blog/";
          },
        },{id: "nav-發表",
          title: "發表",
          description: "按類別以倒序時間順序排列的發表。由 jekyll-scholar 生成。",
          section: "導航菜單",
          handler: () => {
            window.location.href = "/zh-hk/publications/";
          },
        },{id: "nav-項目",
          title: "項目",
          description: "一個不斷增長的酷項目集合。",
          section: "導航菜單",
          handler: () => {
            window.location.href = "/zh-hk/projects/";
          },
        },{id: "nav-倉庫",
          title: "倉庫",
          description: "",
          section: "導航菜單",
          handler: () => {
            window.location.href = "/zh-hk/repositories/";
          },
        },{id: "nav-簡歷",
          title: "簡歷",
          description: "我的履歷如下供參考。另提供 PDF 版本供下載。",
          section: "導航菜單",
          handler: () => {
            window.location.href = "/zh-hk/cv/";
          },
        },{id: "nav-資源下載",
          title: "資源下載",
          description: "可下載的檔案和資源。",
          section: "導航菜單",
          handler: () => {
            window.location.href = "/zh-hk/resources/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "其他選項",
              handler: () => {
                window.location.href = "/zh-hk/books/";
              },
            },{id: "dropdown-teaching",
              title: "teaching",
              description: "",
              section: "其他選項",
              handler: () => {
                window.location.href = "/zh-hk/teaching/";
              },
            },{id: "post-度規概念的初步感悟",
        
          title: "度規概念的初步感悟",
        
        description: "對於度規這一概念的初步理解",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2025/template/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "文章",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "文章",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/zh-hk/books/zh-hk/the_godfather/";
            },},{id: "news-本個人主頁建立",
          title: '本個人主頁建立！',
          description: "",
          section: "新鮮事",},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "項目",handler: () => {
              window.location.href = "/zh-hk/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "項目",handler: () => {
              window.location.href = "/zh-hk/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "項目",handler: () => {
              window.location.href = "/zh-hk/projects/9_project/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "項目",handler: () => {
              window.location.href = "/zh-hk/projects/zh-hk/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "項目",handler: () => {
              window.location.href = "/zh-hk/projects/zh-hk/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "項目",handler: () => {
              window.location.href = "/zh-hk/projects/zh-hk/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "項目",handler: () => {
              window.location.href = "/zh-hk/projects/zh-hk/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "項目",handler: () => {
              window.location.href = "/zh-hk/projects/zh-hk/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "項目",handler: () => {
              window.location.href = "/zh-hk/projects/zh-hk/6_project/";
            },},{
        id: 'social-email',
        title: '發送電子郵件',
        section: '社交媒體',
        handler: () => {
          window.open("mailto:%67%75%6F%79%75%7A%65@%77%68%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: '社交媒體',
        handler: () => {
          window.open("https://github.com/ryan-gwo", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: '社交媒體',
        handler: () => {
          window.open("https://orcid.org/0009-0004-6676-1985", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: '社交媒體',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: '社交媒體',
        handler: () => {
          window.open("", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: '語言',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-zh-cn',
          title: 'zh-cn',
          section: '語言',
          handler: () => {
            window.location.href = "/zh-cn" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '將主題更改爲淺色',
      description: '將網站主題更改爲淺色',
      section: '主題',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '將主題更改爲深色',
      description: '將網站主題更改爲深色',
      section: '主題',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '使用系統默認主題',
      description: '將網站主題更改爲系統默認',
      section: '主題',
      handler: () => {
        setThemeSetting("system");
      },
    },];
