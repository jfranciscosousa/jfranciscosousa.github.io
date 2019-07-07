import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Header from "../components/Header";
import Layout from "../components/Layout";

import "./index.module.css";

export const pageQuery = graphql`
  query PageQuery {
    ...avatar
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default class HomeIndex extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const siteDescription = data.site.siteMetadata.description;

    return (
      <Layout>
        <Header data={data} />

        <div styleName="root">
          <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
          </Helmet>

          <div styleName="content">
            <section>
              <header>
                <h2>About me</h2>
              </header>
              <p>
                I&apos;ve been making a living out of web development since my
                first year of college. Currently, I&apos;m a full-stack
                developer at Aurora. While focusing on Rails and React, I&apos;m
                comfortable using (and often seek out) other well made, open
                source tech.
              </p>

              <p>
                Need help with the design/development of your awesome idea in
                the healthcare field? Get in touch with my consulting agency,{" "}
                <a href="https://auroradigital.co">auroradigital.co</a>. We
                specialize in web and mobile based solutions for professionals
                and consumers on the healthcare field.
              </p>
            </section>

            <section>
              <header>
                <h2>Skills</h2>
              </header>
              <p>
                I&apos;ve been a web developer for the last 4 years. I have
                worked with Java and Spring, Elixir and Phoenix, Javascript with
                Express and Next. I&apos;m perfectly comfortable with Front-end,
                Back-end, DevOps and Sysadmin work.
              </p>

              <p>
                My personal favorites are Ruby on Rails and React. I use them in
                my day-to-day, unless there&apos;s a clear, more adequate
                technology for the project at hand.
              </p>

              <p>
                I&apos;m a strong advocate for developer quality of life, clean
                code and testing practices. My motto is &quot;Write a test for
                it and make it work. Then make it pretty&quot;.
              </p>

              <p>
                You can check some of my open source projects{" "}
                <a href="https://github.com/jfranciscosousa">GitHub</a>, and
                some charitable web development me and a few others are doing
                for{" "}
                <a href="https://github.com/includebraga">
                  include {"#<braga>"}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}
