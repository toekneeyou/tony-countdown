class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.level = null;
    this.rowIndex = null;
  }
}

export default class BinaryTree {
  constructor() {
    this.root = null;
    this.references = new Map();
  }

  insert(value, parentValue) {
    const newNode = new Node(value);
    this.references.set(value, newNode);

    if (this.root === null) {
      newNode.level = 0;
      newNode.rowIndex = 0;
      this.root = newNode;
    } else {
      const parentNode = this.references.get(parentValue);
      newNode.level = parentNode.level + 1;
      if (!parentNode.left) {
        newNode.rowIndex = parentNode.rowIndex * 2;
        parentNode.left = newNode;
      } else if (!parentNode.right) {
        newNode.rowIndex = parentNode.rowIndex * 2 + 1;
        parentNode.right = newNode;
      } else {
        console.warn("Too many children");
      }
    }
  }

  removeReferences(node) {
    this.references.delete(node.value);
    if (node.left) this.removeReferences(node.left);
    if (node.right) this.removeReferences(node.right);
  }

  updateLevelsAndIndices(node) {
    node.level--;
    if (node.rowIndex % 2 === 0) {
      node.rowIndex /= 2;
    } else {
      node.rowIndex--;
      node.rowIndex /= 2;
    }

    if (node.left) this.updateLevelsAndIndices(node.left);
    if (node.right) this.updateLevelsAndIndices(node.right);
  }

  remove(targetValue, selectedChildValue, otherValue) {
    let targetNode = this.references.get(targetValue);
    // remove reference
    this.references.delete(targetValue);

    // no children
    if (targetNode.left === null && targetNode.right === null) {
      targetNode = null;
    } else {
      // 2 children
      const selectedChildNode = this.references.get(selectedChildValue);
      const otherNode = this.references.get(otherValue);

      targetNode.value = selectedChildNode.value;
      targetNode.left = selectedChildNode.left;
      targetNode.right = selectedChildNode.right;
      // update reference
      this.references.set(targetNode.value, targetNode);

      // index and levels remains the same for target, but must change for children
      if (targetNode.left) this.updateLevelsAndIndices(targetNode.left);
      if (targetNode.right) this.updateLevelsAndIndices(targetNode.right);

      // remove references of deleted children
      if (otherNode) {
        this.removeReferences(otherNode);
      }
    }
  }

  getLevels() {
    const levels = [];
    this.references.forEach((node) => {
      const { rowIndex, level } = node;
      if (!levels[level]) {
        levels[level] = new Array(Math.pow(2, level)).fill(null);
      }

      levels[level][rowIndex] = node;
    });
    return levels;
  }
}

export const tree = new BinaryTree();
tree.insert(10);
tree.insert(5, 10);
tree.insert(15, 10);
tree.insert(20, 15);
tree.insert(21, 20);
tree.insert(50, 20);
tree.insert(13, 50);
tree.insert(100, 13);
