import { defineConfig } from "vitepress";

const env = process.env.ENV || "";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: `${env} vitepress-test`,
  description: `A VitePress ${env} Site`,
  base: `/vitepress-test/${env}/`,
  outDir: `.vitepress/dist/${env}`,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: `${env} Home`, link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    env,
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
