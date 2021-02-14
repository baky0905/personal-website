const path = require("path");

module.exports = {
  title: "Personal Website", // title of website
  tagline:
    "Welcome to the website where you will find personal projects, blog posts and bookmarks.", // used in meta data
  url: "https://github.com/baky0905/personal-web/", // url where websited is hosted
  baseUrl: "/personal-website/", // path where website is available
  favicon: "img/favicon.ico", // path to favicon with respect to static dir
  organizationName: "baky0905", // Usually your GitHub org/user name.
  projectName: "personal-web", // project name i.e repo name of project
  //wrapPagesHTML: "true", // Boolean flag to indicate whether HTML files in /pages should be wrapped with Docusaurus site styles, header and foote
  onBrokenLinks: "ignore", // https://v2.docusaurus.io/docs/docusaurus.config.js/
  themeConfig: {
    navbar: {
      title: "KB", // title
      logo: {
        alt: "My Site Logo",
        src:
          "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1362&q=80", // path with respect to static dir
      },
      items: [
        {
          to: "docs/projects/project1",
          label: "Projects",
          position: "left",
        },
        {
          to: "./", // path to page
          label: "Tips and Tricks",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        // {
        //   to: "docs/", // path to page
        //   label: "",
        //   position: "left",
        // },

        {
          to: "docs/bookmarks", // path to page
          label: "The Bookmarks",
          position: "left",
        },
        {
          to: "docs/bookmarks-norway", // path to page
          label: "Awesome Norway",
          position: "left",
        },
        {
          href:
            "https://github.com/baky0905/personal-web/tree/master/personal-web",
          label: "GitHub",
          position: "right",
        },
        {
          to: "docs/about/about-me", // path to page
          //activeBasePath: "docs", // active it url matches regex
          label: "About",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        // {
        //   title: "About",
        //   items: [
        //     {
        //       label: "About",
        //       to: "docs/",
        //     },
        //     // {
        //     //   label: "",
        //     //   href:
        //     //     "",
        //     // },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kristijan Bakaric, Built with Docusaurus.`,
    },
    // prism: {
    //   additionalLanguages: ["powerquery", "dax"],
    // },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // showReadingTime: true,
          // Please change this to your repo.
          // editUrl: "",
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 5,
          // Please change this to your repo.
          // editUrl: "",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [require.resolve("docusaurus-lunr-search")],
};
