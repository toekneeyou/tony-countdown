import React from "react";

import PnwDestination from "../pnwDestination/PnwDestination";

import styles from "../../PnwBlog.module.scss";

export default function Oregon() {
  return (
    <ul className={styles.destination}>
      <li>
        <PnwDestination
          name="Umpqua Hot Springs"
          links={["https://www.alltrails.com/trail/us/oregon/umpqua-hot-springs"]}
          images={[
            "https://i0.wp.com/soakoregon.com/wp-content/uploads/2018/12/umpqua-hot-springs-pools-sq.jpg",
          ]}
          descriptions={["Temporarily Closed 10/5/2021"]}
        />
      </li>

      <li>
        <PnwDestination
          name="Samuel H Boardman Corridor"
          links={["https://localadventurer.com/samuel-h-boardman-state-scenic-corridor/"]}
          images={[
            "https://localadventurer.com/wp-content/uploads/2020/02/honeymoon-spots-in-usa.jpg",
          ]}
        />
      </li>
    </ul>
  );
}
