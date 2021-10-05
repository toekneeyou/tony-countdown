import React, { createContext, useEffect, useRef, useState } from "react";

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
  const blogRef = useRef(null);
  const blogMainRef = useRef(null);
  const [isMinimizeNav, setIsMinimizeNav] = useState(false);

  useEffect(() => {
    const blogEl = blogRef.current;
    const blogMain: HTMLDivElement = blogMainRef.current;

    const handleScroll = (e) => {
      setIsMinimizeNav(() => {
        return blogMain.getBoundingClientRect().top < 25;
      });
    };

    blogEl.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <PnwContext.Provider value={{ pnwNavValues }}>
      <div className={styles.pnw_blog} ref={blogRef}>
        <PnwNav isMinimizeNav={isMinimizeNav} />

        <div ref={blogMainRef}>
          <PnwMain />
        </div>
      </div>
    </PnwContext.Provider>
  );
}
