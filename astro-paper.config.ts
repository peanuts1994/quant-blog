import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://peanutsblog.cn",
    title: "Peanuts 的 AI 小站",
    description: "记录 AI 思考与实践：Vibe Coding、Agent 工程化、模型训练与部署，兼读前沿论文。",
    author: "peanuts",
    profile: "https://github.com/peanuts1994",
    ogImage: "default-og.jpg",
    lang: "zh",
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
