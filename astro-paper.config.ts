import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://blog.example.com/", // TODO: 部署后替换为正式域名
    title: "peanuts 的 AI × 量化实验室",
    description: "AI Agent 工程化 × 量化投资：端侧部署、多智能体辩论回测、A 股实战记录。",
    author: "Yunlong Gao",
    profile: "https://github.com/", // TODO: 替换为 GitHub 主页
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
      url: "https://github.com/", // TODO: 替换
    },
    {
      name: "rss",
      url: "", // 留空自动指向 /rss.xml
    },
  ],
});
