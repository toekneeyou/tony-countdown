import React from "react";

import PnwDestination from "../pnwDestination/PnwDestination";

import styles from "../../PnwBlog.module.scss";

export default function Washington() {
  return (
    <ul className={styles.destination}>
      <li>
        <PnwDestination
          name="Snow Lake"
          links={[
            "https://jesswandering.com/why-snow-lake-is-the-best-hike-near-seattle/",
          ]}
          images={[
            "http://cdn-assets.alltrails.com/static-map/production/at-map/67078704/trail-us-washington-snow-lake-trail-at-map-67078704-1617830563-1200x630-3-6.jpg",
          ]}
          descriptions={["Cool"]}
        />
      </li>
    </ul>
  );
}
