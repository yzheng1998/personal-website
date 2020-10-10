// @flow strict
import React from "react";
import moment from "moment";
import { Link } from "gatsby";
import type { Edges } from "../../types";
import styles from "./Feed.module.scss";

type Props = {
  edges: Edges,
};

const Feed = ({ edges }: Props) => (
  <div className={styles["feed"]}>
    {edges.map((edge) => {
      const socialImageUrl =
        typeof edge.node.frontmatter.socialImage !== "undefined"
          ? edge.node.frontmatter.socialImage["publicURL"]
          : undefined;

      return (
        <div className={styles["feed__item"]} key={edge.node.fields.slug}>
          <div className={styles["feed__item-meta"]}>
            <time
              className={styles["feed__item-meta-time"]}
              dateTime={moment(edge.node.frontmatter.date).format(
                "MMMM D, YYYY"
              )}
            >
              {moment(edge.node.frontmatter.date).format("MMMM YYYY")}
            </time>
            <span className={styles["feed__item-meta-divider"]} />
            <span className={styles["feed__item-meta-category"]}>
              <Link
                to={edge.node.fields.categorySlug}
                className={styles["feed__item-meta-category-link"]}
              >
                {edge.node.frontmatter.category}
              </Link>
            </span>
          </div>
          <h2 className={styles["feed__item-title"]}>
            <Link
              className={styles["feed__item-title-link"]}
              to={edge.node.fields.slug}
            >
              {edge.node.frontmatter.title}
            </Link>
          </h2>
          <div className={styles["feed__row"]}>
            <div className={styles["feed__image"]}>
              <Link to={edge.node.fields.slug}>
                <img
                  src={socialImageUrl}
                  className={styles["feed__image-picture"]}
                ></img>
              </Link>
            </div>
            <div className={styles["feed__item-description"]}>
              <p className={styles["feed__item-description-p"]}>
                {edge.node.frontmatter.description}
              </p>
            </div>
          </div>
          <Link
            className={styles["feed__item-readmore"]}
            to={edge.node.fields.slug}
          >
            View
          </Link>
          {edge.node.frontmatter.demo && (
            <a
              className={styles["feed__item-readmore"]}
              href={edge.node.frontmatter.demo}
              target="_blank"
            >
              Demo
            </a>
          )}
          {edge.node.frontmatter.github && (
            <a
              className={styles["feed__item-readmore"]}
              href={edge.node.frontmatter.github}
              target="_blank"
            >
              Github
            </a>
          )}
        </div>
      );
    })}
  </div>
);

export default Feed;
