---
title: From Markdown to a Docusaurus Website via GitHub, gh Actions, and gh pages 
author: Kristijan Bakaric
author_title: Mr.
author_url: https://www.linkedin.com/in/kristijanb/
author_image_url: https://media-exp1.licdn.com/dms/image/C4E03AQFL2UYdUXYxFA/profile-displayphoto-shrink_800_800/0/1617141761462?e=1622678400&v=beta&t=py0t0dPeiTU8dmsMt6IQM5ePd9XurfDwpVykObMRiiY
tags: [docusaurus, website, markdown, github, githubactions]
hide_table_of_contents: false
---

![](2021-04-02-docusaurus/landing.png)


> In this blog I will transfer you the gist of how to go from existing markdown written content 
>  hosted on GitHub, to a beautiful content-focused, yet customizable (if you are comfortable with React) Docusaurus Website.
<!--truncate-->


## Introduction

I don`t know about you but my personal preferance is to read content from a nice content-focused website:

![](2021-04-02-docusaurus/website.png)

compared to the original markdown content on GitHub:

![](2021-04-02-docusaurus/github.png)

There is a lot of benefits to the outcome, but then there are seveal steps you need go through in order to configure and setup the entire process.

When you are finished reading this post, you will have most of the ingredients you need to build your own website.

In brief, goal of the post is to go from input:
[https://github.com/andkret/Cookbook](https://github.com/andkret/Cookbook)

to output:
[https://cookbook.learndataengineering.com/](https://cookbook.learndataengineering.com/) 

Buckle on...

## Prerequisites

:::note
Keep in mind that I am developing on WSL2, Ubuntu-20.04.
:::

Entire workflow and setup is build with:

* [Docusaurus](https://docusaurus.io/) - An optimized site generator in React.
* [GitHub Actions](https://github.com/features/actions) - CI/CD automation
* [GitHub Pages](https://pages.github.com/) - Website Hosted directly from your GitHub repository. Just edit, push, and your changes are live.
* [Markdown](https://en.wikipedia.org/wiki/Markdown#:~:text=Markdown%20is%20a%20lightweight%20markup,using%20a%20plain%20text%20editor.) - book content.

Before you begin, you'll need the setup your local development environment with:

- [nodejs](https://nodejs.org/en/)
- [git](https://git-scm.com/)
- (Optional) [Visual Studio Code](https://code.visualstudio.com/) - awesome editor I love to use, but just a recommendation.

Of course, you will also need:
- public GitHub repository - in our case we have a [GitHub Repo](https://github.com/andkret/Cookbook)
- content you want to publish: markdown files and images/gifs...- in our case `sections` and `images` directories and its content


## Step 1 — Installation (local dev)

In this step, I cloned the repo with the markdown content, switched a branch to documentation and installed npm packages.

First, clone the repo:

```sh
git clone https://github.com/andkret/Cookbook.git
```

Next, switch a branch to `documentation`:

```sh
git checkout documentation
```

:::note
If you want to recreate a new branch without no parents, totally disconnected from all the other branches and commits
check the following command `git checkout --orphan <new_branch>`
:::

Finally, install Docusaurus wthich is essentially a set of npm packages that can be installed over npm. 
Install npm dependencies. It will install all modules listed as dependencies in `package.json`

```sh
npm install
```

[More Information about docusaurus installation.](https://docusaurus.io/docs/installation)


## Step 2 — Development and Docusaurus Configuration

### Running the development server

To preview your changes as you edit the files, you can run a local development server that will serve your website and it will reflect the latest changes.

```sh
npm run start
```

and contents will be generated within the `/build` directory, which can be copied to any static file hosting service like GitHub pages, Vercel or Netlify. Check out the docs on [deployment for more details](https://docusaurus.io/docs/deployment).

By default, a browser window will open at `http://localhost:3000`

### Project Structure

**DO NOT CHANGE MARKDOWN CONTENT UNDER `DOCS` DIRECTORY ON THIS BRANCH, DO IT ON THE MASTER BRANCH UNDER `SECTIONS` DIRECTORY.**

Reason being is CI/CD automation.

```
CookBook
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   ├── images
│   └── CNAME
├── docusaurus.config.js
├── package.json
├── README.md
└── sidebars.js
```

- `/docs/` - Contains the Markdown files for the docs. Customize the order of the docs sidebar in sidebars.js. More details can be found in the [docs guide](https://docusaurus.io/docs/docs-markdown-features)

- `/src/` - Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files in here but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing.
  - `/pages/` - Any files within this directory will be converted into a website page. More details can be found in the [pages guide](https://docusaurus.io/docs/creating-pages)

- `/static/` - Static directory. Any contents inside here will be copied into the root of the final `build` directory
  
- `/docusaurus.config.js` - A config file containing the site configuration.
  
- `/package.json` -  A Docusaurus website is a React app. You can install and use any npm packages you like in them.
  
- `/sidebar.js` - Used by the documentation to specify the order of documents in the sidebar

- `CNAME` file - that is only relevant if you are going to have a custom subdomain, and not a default github pages. This file contains the url to the subdomain that was created, in our case via AWS, and it is important that the file is located under `static` folder since after the build it will be located under the `root` of the site on `gh-pages` branch, otherwise every time you build the site, the AWS configuration will be cleared up, and that is not good if you want to automate the entire workflow.

## Step 3 - How to Configure Navigation, Sidebar, and the Landing Page

Even though you can get all the details on how tos on [Docusaurus Docs Introduction](https://docusaurus.io/docs/docs-introduction), I will briefly examplify how to configure navigation, sidebar and the landing page, just for the sake of relating it to our example.

- To configure **navbar**

![](2021-04-02-docusaurus/navbar.png)

edit `/docusaurus.config.js` file:

![](2021-04-02-docusaurus/navbar-config.png)

- To configure **sidebar content**

![](2021-04-02-docusaurus/sidebar.png)

edit `/sidebars.js` file:

![](2021-04-02-docusaurus/sidebar-config.png)

You might notice that it is a bit more cleaner in the sidebar on the website than in the `sidebars.js` file configuration, and the reason for it is that I have a [shell script](https://github.com/andkret/Cookbook/blob/documentation/prepend.sh) that cleans it up, by creating a front-matter in each markdown.
One example output of the script you can see on `documentation` branch, under `docs/02-BasicSkills.md` file:
```
---
sidebar_label: Basic Skills 
title: ' '
---
```

For running shell scripts via GitHub Actions, reference [this article](https://medium.com/@akash1233/change-file-permissions-when-working-with-git-repos-on-windows-ea22e34d5cee) in case you run into permission issues.

- To configure **the front page**

![](2021-04-02-docusaurus/frontpage.png)

edit `/src/pages/index.js` file.


If you have React skills then checkout [docs on Creating Pages](In this section, we will learn about creating ad-hoc pages in Docusaurus using React).

Also keep in mind that there is a blog directory you can utilize as well, if you wish for your blog posts. Check the [blog docs](https://docusaurus.io/docs/blog).

For more information about markdown features check the [markdown guide](https://docusaurus.io/docs/markdown-features).



## Step 4 — Summary of the CI/CD Automation Setup via GitHub Actions

Automation workflow consists of two Github actions as follows:

1) On `master` branch: `Cookbook/.github/workflows/copy-to-documenation-branch.yml` - [GitHub Action file](https://github.com/andkret/Cookbook/blob/master/.github/workflows/copy-to-documenation-branch.yml)
   
  - on push to `master` branch, action performs two jobs:
  
    - `copy-sections` job copies all markdown files FROM `/sections/.` directory on `master` branch TO `documentation` branch `/docs/` directory

    - `copy-images` job copies all image files 
      - FROM `/images/.` directory on `master` branch 
      - TO `documentation` branch `/static/images/` directory

2) On `documentation` branch: `Cookbook/.github/workflows/documentation.yml`]- [GitHub Action file](https://github.com/andkret/Cookbook/blob/documentation/.github/workflows/documentation.yml)

  - on push or pull request to `documentation` branch, action performs two jobs:

    - `write_front_matter` job runs a `/prepend.sh` shell script that cleans up sidebar lables by creating a frontmatter in each markdown file - TEMPORARELY DISABLED

    - `gh-release` job builds a docusaurus website and publishes it on gh-pages branch from the `./build` publish directory

## Conclusion

In this article, we took a journey from having markdowns and images (very valuable content that Andreas has prepared for us in the Data Engineering community) hosted in a GitHub repository, to hosting a beautiful content-focused Docusaurus static Website on GitHub pages, all automated via GitHub Actions.

If you want to see more showcase Docusaurus websites for inspiration, checkout [the awesome webistes people are building with Docusaurus](https://docusaurus.io/showcase).

Btw, this page where you are reading this post, is also... guess what...and you guessed right...a Docusaurus website with a similar setup, without having a custom subdomain, and you are currently in the blog section, and not the docs.

## Big Thanks to...

[Andreas Kretz](https://github.com/andkret) for making the cookbook available on GitHub.

## Contributing

Keep in mind that all of this was done in a very short time-frame, and has a lot of room for improvements,
so if you know more about any of the topics discussed, please contribute.

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Become a contributor and clone the project's [`documentation` branch](https://github.com/andkret/Cookbook/tree/documentation).
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request.

## Contact

If you have any questions:

- For author of the cookbook content, contact [Andreas Kretz](https://github.com/andkret).

- For website related questions, contact me [Kristijan Bakaric](https://www.linkedin.com/in/kristijanb/).