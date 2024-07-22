class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert = (element) => {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp = () => {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (index <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;

      //update index 
      index = parentIndex;
    }
  }
}
