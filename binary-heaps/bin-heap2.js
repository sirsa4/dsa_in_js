class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert = (element) => {
    this.values.push(element);
    this.bubbleUp(element);
  }
  bubbleUp = () => {
    let index = this.values.length - 1;
    let element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;

      //update index to be parent 
      index = parentIndex;
    }
  }
}

const mb = new MaxBinaryHeap();
mb.insert(55);
mb.insert(40);
mb.insert(60);
console.log(mb);
