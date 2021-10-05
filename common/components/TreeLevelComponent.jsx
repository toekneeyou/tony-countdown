import * as React from "react";
import NodeComponent from "./NodeComponent";

import styles from "../../styles/TreeLevelComponent.module.scss";

export default function TreeLevelComponent({ treeLevel }) {
  const generateNode = (node) => {
    return <NodeComponent key={`node-${node?.value}`} node={node} />;
  };
  return (
    <div
      className={styles.TreeLevelComponent}
      style={{ gridTemplateColumns: `repeat(${treeLevel.length}, 1fr)` }}
    >
      {treeLevel.map(generateNode)}
    </div>
  );
}
