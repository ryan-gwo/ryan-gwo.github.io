
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
  },{id: "nav-blog",
          title: "blog",
          description: "um tema simples para acadêmicos",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/blog/";
          },
        },{id: "nav-publicações",
          title: "publicações",
          description: "publicações por categoria em ordem cronológica reversa. gerado pelo jekyll-scholar.",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/publications/";
          },
        },{id: "nav-projetos",
          title: "projetos",
          description: "Uma crescente coleção de seus projetos interessantes.",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/projects/";
          },
        },{id: "nav-repositórios",
          title: "repositórios",
          description: "Edite o `_data/repositories.yml` e mude as listas `github_users` e `github_repos` para incluir seu próprio perfil do GitHub e repositórios.",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Esta é uma descrição da página. Você pode modificá-la em &#39;_pages/cv.md&#39;. Também pode alterar ou remover o botão no topo de download de pdf.",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/cv/";
          },
        },{id: "nav-ensino",
          title: "ensino",
          description: "Materiais de cursos que você ministrou. Substitua esse texto com sua descrição.",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/teaching/";
          },
        },{id: "nav-membros",
          title: "membros",
          description: "membros do grupo de pesquisa ou laboratório",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/people/";
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
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "其他选项",
              handler: () => {
                window.location.href = "/zh-cn/blog/";
              },
            },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "文章",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "文章",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/assets/pdf/pt-br/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2021/diagrams/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2020/twitter/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2018/distill/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/math/";
          
        },
      },{id: "post-uma-postagem-com-código",
        
          title: "uma postagem com código",
        
        description: "um exemplo de uma postagem em um blog com código",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/zh-cn/books/zh-cn/the_godfather/";
            },},{id: "news-um-anúncio-simples-em-uma-linha",
          title: 'Um anúncio simples em uma linha.',
          description: "",
          section: "新鲜事",},{id: "news-um-anúncio-longo-com-detalhes",
          title: 'Um anúncio longo com detalhes',
          description: "",
          section: "新鲜事",handler: () => {
              window.location.href = "/zh-cn/news/zh-cn/announcement_2/";
            },},{id: "news-um-anúncio-simples-em-uma-linha-com-markdown-emoji-sparkles-smile",
          title: 'Um anúncio simples em uma linha com Markdown emoji! :sparkles: :smile:',
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
