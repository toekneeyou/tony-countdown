import React, { useContext, useEffect, useRef } from "react";
import classNames from "classnames";

import { pnwNavOptions } from "../../hooks/usePnwNav";
import { PnwContext } from "../../PnwBlog";

import styles from "./PmwNav.module.scss";

export default function PnwNav({ isMinimizeNav }) {
  const { pnwNavValues } = useContext(PnwContext);
  const { selectedOption, setSelectedOption } = pnwNavValues;

  return (
    <nav
      className={classNames(styles.pnw_nav, { [styles.minimize_pnw_nav]: isMinimizeNav })}
    >
      <header className={styles.left_header}>
        <h1>
          <span style={{ color: "#455733" }}>P</span>
          <span style={{ color: "#644f2b" }}>N</span>
          <span style={{ color: "#8f4422" }}>W</span>
          <span style={{ color: "rgb(226 114 21)" }}>2021</span>
        </h1>
      </header>

      <header className={styles.center_header}>
        <h1>
          <span style={{ color: "#455733" }}>P</span>
          <span style={{ color: "#644f2b" }}>N</span>
          <span style={{ color: "#8f4422" }}>W</span>
          <span style={{ color: "rgb(226 114 21)" }}>2021</span>
        </h1>
      </header>

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
