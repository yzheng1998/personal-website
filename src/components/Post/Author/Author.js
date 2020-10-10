// @flow strict
import React from "react";
import styles from "./Author.module.scss";
import { useSiteMetadata } from "../../../hooks";

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles["author"]}>
      <p className={styles["author__bio"]}>
        {author.name} &#8212; {author.bio.split("\n")[0]}
      </p>
    </div>
  );
};

export default Author;
