import * as React from "react";
import { BinaryTreeContext } from "./BinaryTreeComponent";

import styles from "../../styles/NodeComponent.module.scss";

export default function NodeComponent({ node }) {
  const { openModal, setTargetNode } = React.useContext(BinaryTreeContext);

  const onClick = () => {
    setTargetNode(node);
    openModal();
  };

  return (
    <React.Fragment>
      {node ? (
        <div className={styles.NodeComponent} onClick={onClick}>
          {node && <div className={styles.node}>{node.value}</div>}
        </div>
      ) : (
        <div />
      )}
    </React.Fragment>
  );
}
