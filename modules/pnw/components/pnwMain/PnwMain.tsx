import React, { useContext } from "react";

import California from "../california/California";
import Oregon from "../oregon/Oregon";
import Washington from "../washington/Washington";
import { PnwContext } from "../../PnwBlog";

import styles from "./PnwMain.module.scss";

export default function PnwMain() {
  const { pnwNavValues } = useContext(PnwContext);
  const { isOregon, isCalifornia, isWashington } = pnwNavValues;

  return (
    <div className={styles.pnw_main}>
      {isCalifornia && <California />}
      {isOregon && <Oregon />}
      {isWashington && <Washington />}
    </div>
  );
}
