import React from "react";
import PnwDestination from "../pnwDestination/PnwDestination";

import styles from "../../PnwBlog.module.scss";

export default function California() {
  return (
    <ul className={styles.destination}>
      <li>
        <PnwDestination
          name="Burney Falls"
          links={["https://www.parks.ca.gov/?page_id=455"]}
          images={[
            "https://parkscalifornia.org/wp-content/uploads/2020/12/burney_falls.jpg",
          ]}
          descriptions={[
            "The state park has a remote location surrounded by the Shasta National Forest along Hwy 89 - about half way (50 miles) between Lassen Volcanic National Park and Mount Shasta, and 63 miles northeast of Redding via Hwy 299. The entrance fee (2020) is $10 per vehicle.",
            "Although the falls can be seen right from the parking area, this scenic 1.3 mile loop is a great hike for all levels of hiking ability. Heading out on this trail will take you to the base of this 129 foot tall waterfall. Allegedly, Theodore Roosevelt referred to these falls as the “eighth wonder of the world”.",
          ]}
        />
      </li>

      <li>
        <PnwDestination
          name="Shark Fin Cove"
          links={["https://santacruzlife.com/shark-fin-cove/"]}
          images={[
            "https://cdn.shopify.com/s/files/1/0053/6513/7472/products/sharkfinsuset.jpg?v=1547093211",
          ]}
          descriptions={["Free parking.", "Apparently there is also a sea cave??"]}
        />
      </li>

      <li>
        <PnwDestination
          name="China Cove"
          links={["https://www.californiabeaches.com/beach/point-lobos-snr-china-cove/"]}
          images={[
            "https://media-cdn.tripadvisor.com/media/photo-s/17/45/02/19/china-cove.jpg",
          ]}
          descriptions={[
            "At low tide you can find a small cave and a rock arch in the south wall.",
            "To get here, drive to the very end of the park road and then walk out on the Bird Island Trail which has steps that lead down to the beach. If the parking lot at the end of the road is open, then you won’t half to walk far to get here, but the parking lots at Point Lobos fill up regularly.",
          ]}
        />
      </li>
    </ul>
  );
}
