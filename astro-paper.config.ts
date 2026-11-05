import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://quant-blog-u2z.pages.dev/",
    title: "peanuts 的 AI × 量化实验室",
    description: "AI Agent 工程化 × 量化投资：端侧部署、多智能体辩论回测、A 股实战记录。",
    author: "peanuts",
    profile: "https://github.com/peanuts1994",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/peanuts1994",
    },
    {
      name: "rss",
      url: "", // 留空自动指向 /rss.xml
    },
  ],
});
