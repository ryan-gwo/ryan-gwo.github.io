
const currentUrl = window.location.href;
const siteUrl = "https://ryan-gwo.github.io"; 
let updatedUrl = currentUrl.replace("https://ryan-gwo.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("zh-cn".length > 0) {
  updatedUrl = updatedUrl.replace("/zh-cn", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-关于",
    title: "关于",
    section: "导航菜单",
    handler: () => {
      window.location.href = "/zh-cn/";
    },
  },{id: "nav-博客",
          title: "博客",
          description: "思想、故事和想法。",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/blog/";
          },
        },{id: "nav-发表",
          title: "发表",
          description: "publicações por categoria em ordem cronológica reversa. gerado pelo jekyll-scholar.",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/publications/";
          },
        },{id: "nav-项目",
          title: "项目",
          description: "Uma crescente coleção de seus projetos interessantes.",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/projects/";
          },
        },{id: "nav-仓库",
          title: "仓库",
          description: "",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/repositories/";
          },
        },{id: "nav-简历",
          title: "简历",
          description: "我的简历如下供参考。另外还有PDF版本可供下载。",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/cv/";
          },
        },{id: "nav-资源下载",
          title: "资源下载",
          description: "可下载的文件和资源。",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/resources/";
          },
        },{id: "dropdown-publicações",
              title: "publicações",
              description: "",
              section: "其他选项",
              handler: () => {
                window.location.href = "/zh-cn/publications/";
              },
            },{id: "dropdown-projetos",
              title: "projetos",
              description: "",
              section: "其他选项",
              handler: () => {
                window.location.href = "/zh-cn/projects/";
              },
            },{id: "dropdown-teaching",
              title: "teaching",
              description: "",
              section: "其他选项",
              handler: () => {
                window.location.href = "/zh-cn/teaching/";
              },
            },{id: "post-度规概念的初步感悟",
        
          title: "度规概念的初步感悟",
        
        description: "对于度规这一概念的初步理解",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2025/template/";
          
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
              window.location.href = "/zh-cn/books/zh-cn/the_godfather/";
            },},{id: "news-本个人主页建立",
          title: '本个人主页建立！',
          description: "",
          section: "新鲜事",},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/9_project/";
            },},{id: "projects-projeto-1",
          title: 'projeto 1',
          description: "com imagem de fundo",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/1_project/";
            },},{id: "projects-projeto-2",
          title: 'projeto 2',
          description: "um projeto com imagem de fundo e comentários do giscus",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/2_project/";
            },},{id: "projects-projeto-3-com-um-nome-bem-longo",
          title: 'projeto 3 com um nome bem longo',
          description: "um projeto que redireciona pra outro website",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/3_project/";
            },},{id: "projects-projeto-4",
          title: 'projeto 4',
          description: "outro sem imagem",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/4_project/";
            },},{id: "projects-projeto-5",
          title: 'projeto 5',
          description: "um projeto com imagem de fundo",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/5_project/";
            },},{id: "projects-projeto-6",
          title: 'projeto 6',
          description: "um projeto sem imagem",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/6_project/";
            },},{
        id: 'social-email',
        title: '发送电子邮件',
        section: '社交媒体',
        handler: () => {
          window.open("mailto:%67%75%6F%79%75%7A%65@%77%68%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: '社交媒体',
        handler: () => {
          window.open("https://github.com/ryan-gwo", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: '社交媒体',
        handler: () => {
          window.open("https://orcid.org/0009-0004-6676-1985", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: '社交媒体',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: '社交媒体',
        handler: () => {
          window.open("", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: '语言',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-zh-hk',
          title: 'zh-hk',
          section: '语言',
          handler: () => {
            window.location.href = "/zh-hk" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '将主题更改为浅色',
      description: '将网站主题更改为浅色',
      section: '主题',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '将主题更改为深色',
      description: '将网站主题更改为深色',
      section: '主题',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '使用系统默认主题',
      description: '将网站主题更改为系统默认',
      section: '主题',
      handler: () => {
        setThemeSetting("system");
      },
    },];
