import * as React from "react";
import { DateTime, Duration } from "luxon";

import styles from "./Countdown.module.scss";

const CountdownDisplay = ({ time: { day, hour, minute, second } }) => {
  return (
    <div className={styles.CountdownDisplay}>
      <h1>Quarters BBQ</h1>

      <div className={styles.countdown_time}>
        <div>
          <p>{day}</p> days
        </div>
        <div>
          <p>{hour}</p> hours
        </div>
        <div>
          <p>{minute}</p> mins
        </div>
        <div>
          <p>{second}</p> secs
        </div>
      </div>
    </div>
  );
};

const Countdown = () => {
  const calculateDuration = (time) =>
    Duration.fromObject({ milliseconds: time }).toFormat("d h m s").split(" ");

  const currentTime = DateTime.local();
  const returnTime = DateTime.fromISO("2021-05-27T18:30:00");
  const difference = returnTime - currentTime;
  const duration = difference >= 0 ? calculateDuration(difference) : [0, 0, 0, 0];

  const [timeRemaining, changeTimeRemaining] = React.useState({
    day: duration[0],
    hour: duration[1],
    minute: duration[2],
    second: duration[3],
  });

  if (difference > 0) {
    const oneSecond = 1000;
    const newDifference = difference - oneSecond;
    const newDuration = calculateDuration(newDifference);

    setTimeout(() => {
      changeTimeRemaining({
        day: newDuration[0],
        hour: newDuration[1],
        minute: newDuration[2],
        second: newDuration[3],
      });
    }, 1000);
  }

  return (
    <div className={styles.countdown}>
      {difference >= 0 ? (
        <CountdownDisplay time={timeRemaining} />
      ) : (
        <div className={styles["countdown-over"]}>The wait is over!</div>
      )}
      <div className={styles["countdown-image"]}></div>
    </div>
  );
};

export default Countdown;
