import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <a href="docs/about/about-me">About Me</a>,
    imageUrl: "svg/about.svg",
    description: "",
  },
  {
    title: <a href="blog">Blog</a>,
    imageUrl: "svg/blog.svg",
    description: "",
  },
  {
    title: <a href="./">Personal Projects</a>,
    imageUrl: "svg/portfolio.svg",
    description: "",
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      <div className="text--center">
        {/* <img className={styles.featureImage} src={imgUrl} alt={title} /> */}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
//
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Build performant, native and cross-platform desktop applications with Vue 🚀"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img
            className={styles.mainImage}
            width="300"
            height="300"
            src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/13873040_994700733982988_8010722443748572250_n.jpg?_nc_cat=103&ccb=3&_nc_sid=174925&_nc_ohc=HHx2SQJzSrAAX_erckn&_nc_ht=scontent-arn2-1.xx&oh=f7157112ffc01a4f490a6e5a4ef4f217&oe=604FB0A1"
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            {/* <Link
              className={classnames(
                "button button--outline button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/guides/1-getting-started")}
            >
              Get Started
            </Link> */}
          </div>
        </div>
      </header>
      <main className={styles.content}>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        {/* <section className={classnames(styles.column, styles.description)}>
          <h2>Song of the day!</h2>
          <div className={styles.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/cWGE9Gi0bB0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <a
            className={styles.caption}
            href="https://www.youtube.com/watch?v=cWGE9Gi0bB0"
            target="_blank"
          >
            Enjoy!
          </a>
        </section> */}
      </main>
    </Layout>
  );
}

export default Home;
