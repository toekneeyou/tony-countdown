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
        />
      </li>

      <li>
        <PnwDestination
          name="Mount Storm King"
          links={["https://www.alltrails.com/trail/us/washington/mount-storm-king"]}
          images={[
            "https://images.theoutbound.com/uploads/1458536062363/ymq08963a3q8h0k9/2af428a539a861fb574ae732871f3d26?w=1200&h=630&fit=crop&auto=compress&q=50&dpr=1&s=af57ca25c235fdc2914a12eafcd262d7",
          ]}
        />
      </li>
    </ul>
  );
}
