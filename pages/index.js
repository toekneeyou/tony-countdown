import PnwBlog from "../modules/pnw/PnwBlog";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <PnwBlog />
    </div>
  );
}
