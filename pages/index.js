import Head from "next/head";
import Countdown from "../common/components/Countdown";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quarters Countdown</title>
        <meta name="description" content="Who needs this anyways?" />
      </Head>

      <Countdown />
    </div>
  );
}
