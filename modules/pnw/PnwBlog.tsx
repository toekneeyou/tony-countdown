import React, { createContext } from "react";

import PnwNav from "./components/pnwNav/PnwNav";
import PnwMain from "./components/pnwMain/PnwMain";
import usePnwNav, { UsePnwNavValues } from "./hooks/usePnwNav";

import styles from "./PnwBlog.module.scss";

interface PnwContextValues {
  pnwNavValues: UsePnwNavValues;
}

export const PnwContext = createContext({} as PnwContextValues);

export default function PnwBlog() {
  const pnwNavValues = usePnwNav();

  return (
    <PnwContext.Provider value={{ pnwNavValues }}>
      <div className={styles.pnw_blog}>
        <header>
          <h1>PNW 2021</h1>
        </header>

        <PnwNav />

        <PnwMain />
      </div>
    </PnwContext.Provider>
  );
}
