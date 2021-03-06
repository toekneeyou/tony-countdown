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
  const { selectedOption } = pnwNavValues;
  const blogRef = useRef(null);
  const blogMainRef = useRef(null);
  const [isMinimizeNav, setIsMinimizeNav] = useState(false);

  useEffect(() => {
    const blogEl: HTMLDivElement = blogRef.current;
    const blogMain: HTMLDivElement = blogMainRef.current;

    const handleScroll = (e) => {
      setIsMinimizeNav(() => {
        return blogMain.getBoundingClientRect().top < 40;
      });
    };

    blogEl.addEventListener("scroll", handleScroll);

    return () => {
      blogEl.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const blogEl: HTMLDivElement = blogRef.current;
    blogEl.scrollTo(0, 0);
  }, [selectedOption]);

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
