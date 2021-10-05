import * as React from "react";
import { BinaryTreeContext } from "./BinaryTreeComponent";

import styles from "../../styles/ConfirmationModal.module.scss";

export default function ConfirmationModal() {
  const [isSelectView, setIsSelectView] = React.useState(true);
  const [isAddView, setIsAddView] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const { deleteNode, targetNode, closeModal, addNode } =
    React.useContext(BinaryTreeContext);

  return (
    <div className={styles.ConfirmationModal}>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <button onClick={closeModal}>x</button>
        <div>
          {isSelectView ? (
            <React.Fragment>
              <button
                onClick={() => {
                  setIsSelectView(false);
                  setIsAddView(true);
                }}
              >
                Add
              </button>
              <button
                onClick={
                  targetNode?.left !== null && targetNode?.right !== null
                    ? () => {
                        setIsSelectView(false);
                        setIsAddView(false);
                      }
                    : () => {
                        deleteNode();
                        closeModal();
                      }
                }
              >
                Delete
              </button>
            </React.Fragment>
          ) : isAddView ? (
            <React.Fragment>
              <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />{" "}
              <button
                onClick={() => {
                  addNode(inputValue);
                  closeModal();
                }}
              >
                Add
              </button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span>Which branch do you want to keep?</span>
              <button
                onClick={() => {
                  deleteNode(targetNode?.left?.value, targetNode?.right?.value);
                  closeModal();
                }}
              >
                {targetNode?.left?.value}
              </button>
              <button
                onClick={() => {
                  deleteNode(targetNode?.right?.value, targetNode?.left?.value);
                  closeModal();
                }}
              >
                {targetNode?.right?.value}
              </button>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
