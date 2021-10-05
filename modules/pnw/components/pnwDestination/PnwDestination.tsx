import React from "react";

import styles from "./PnwDestination.module.scss";

interface PnwDestinationProps {
  name: string;
  links: string[];
  images: string[];
  descriptions?: string[];
}

export default function PnwDestination({
  name,
  links,
  images,
  descriptions = ["description here"],
}: PnwDestinationProps) {
  return (
    <div className={styles.pnw_destination}>
      <h2 className={styles.pnw_destination_name}>{name}</h2>

      {descriptions?.length > 0 && (
        <ul className={styles.pnw_destionation_description_list}>
          {descriptions.map((description) => {
            return (
              <li key={description} className={styles.pnw_destination_description}>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      )}

      {links?.length > 0 && (
        <ul className={styles.pnw_destination_link_list}>
          {links.map((link) => {
            return (
              <li className={styles.pnw_destination_link} key={link}>
                <a href={link}>{link}</a>
              </li>
            );
          })}
        </ul>
      )}

      {images?.length > 0 && (
        <ul className={styles.pnw_destination_image_list}>
          {images.map((image) => {
            return (
              <li className={styles.pnw_destination_image} key={image}>
                <img src={image} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
