import * as React from "react";
import TreeLevelComponent from "./TreeLevelComponent";

import styles from "../../styles/BinaryTreeComponent.module.scss";
import ConfirmationModal from "./ConfirmationModal";

export const BinaryTreeContext = React.createContext(null);

export default function BinaryTreeComponent({ data }) {
  const [tree] = React.useState(data);
  const [treeLevels, setTreeLevels] = React.useState([]);
  const [targetNode, setTargetNode] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const addNode = (value) => {
    console.log(value, targetNode.value);
    tree.insert(value, targetNode.value);
    const newLevels = tree.getLevels();
    setTreeLevels(newLevels);

    setTargetNode(null);
  };

  const deleteNode = (replacementValue, otherValue) => {
    console.log(targetNode);
    tree.remove(targetNode.value, replacementValue, otherValue);
    const newLevels = tree.getLevels();
    setTreeLevels(newLevels);

    setTargetNode(null);
  };

  const generateTreeLevels = (treeLevel, i) => {
    return <TreeLevelComponent key={`treeLevel-${i}`} treeLevel={treeLevel} />;
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  React.useEffect(() => {
    const newTreeLevels = tree.getLevels();
    setTreeLevels(newTreeLevels);
  }, []);

  return (
    <BinaryTreeContext.Provider
      value={{
        targetNode,
        addNode,
        closeModal,
        deleteNode,
        openModal,
        setTargetNode,
      }}
    >
      <div
        className={styles.BinaryTreeComponent}
        style={{ gridTemplateRows: `repeat(${treeLevels.length}, 75px)` }}
      >
        {treeLevels.map(generateTreeLevels)}
      </div>
      {isOpen && <ConfirmationModal />}
    </BinaryTreeContext.Provider>
  );
}
