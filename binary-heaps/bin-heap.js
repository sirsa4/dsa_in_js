const log = (data) => console.log(data);
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert = (element) => {
    this.values.push(element);
    this.bubbleUp(element)
  }
  bubbleUp = (element) => {
    let i = this.values.length - 1;
    while (i > 0) {
      let parentIndex = Math.floor((i - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[i] = parent;

      i = parentIndex;
    }
  }
}

let mb = new MaxBinaryHeap();
mb.insert(55);
mb.insert(39);
mb.insert(41);
mb.insert(18);
mb.insert(27);
mb.insert(12);
mb.insert(33);
mb.insert(5);
log(mb);
