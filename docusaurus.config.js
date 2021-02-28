const path = require("path");

module.exports = {
  title: "Kristijan Bakaric",
  tagline: "Check out my projects and posts!",
  url: "https://baky0905.github.io", // url where websited is hosted
  baseUrl: "/personal-website/", // path where website is available
  favicon: "img/favicon.ico",
  organizationName: "baky0905", // GitHub org/user name.
  projectName: "personal-website", // project name i.e repo name of project
  onBrokenLinks: "error",
  onBrokenMarkdownLinks: "error",

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "KB", // title
      logo: {
        alt: "Site Logo",
        src: "img/logo.png", // path with respect to static dir
      },
      items: [
        // {
        //   to: "docs/projects/project1",
        //   label: "Projects",
        //   position: "left",
        // },
        // {
        //   to: "./", // path to page
        //   label: "Tips and Tricks",
        //   position: "left",
        // },
        { to: "blog", label: "Blog", position: "left" },
        {
          to: "blog/tags/projects",
          label: "Projects",
          position: "left",
        },
        {
          to: "docs/bookmarks", // path to page
          label: "THE Bookmarks",
          position: "left",
        },
        {
          to: "docs/bookmarks-norway",
          label: "Awesome Norway",
          position: "left",
        },
        {
          href: "https://github.com/baky0905",
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
      links: [],
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
