import React, { useContext } from "react";
import classNames from "classnames";

import { pnwNavOptions } from "../../hooks/usePnwNav";
import { PnwContext } from "../../PnwBlog";

import styles from "./PmwNav.module.scss";

export default function PnwNav() {
  const { pnwNavValues } = useContext(PnwContext);
  const { selectedOption, setSelectedOption } = pnwNavValues;

  return (
    <nav className={styles.pnw_nav}>
      <ul className={styles.pnw_nav_option_list}>
        {Object.entries(pnwNavOptions).map(([key, value]) => {
          const isSelected = value === selectedOption;

          return (
            <li
              key={value}
              className={classNames(styles.pnv_nav_option, {
                [styles.selected_pnw_nav_option]: isSelected,
              })}
              onClick={() => setSelectedOption(value)}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
