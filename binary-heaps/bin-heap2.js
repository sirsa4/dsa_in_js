const log = (data) => console.log(data);
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
  extractMax = () => {
    let max = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;

  }
  sinkDown = () => {
    let index = 0;
    const element = this.values[0];
    const length = this.values.length;
    while (true) {
      let leftChildIndex = (2 * index) + 1;
      let rightChildIndex = (2 * index) + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIndex;
        }
      }
      //stop loop - loop end condition 
      if (swap === null) break;

      //if swap happend
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }


  }

}

const mb = new MaxBinaryHeap();
mb.insert(41);
mb.insert(39);
mb.insert(33);
mb.insert(18);
mb.insert(27);
mb.insert(12);
mb.insert(55);
let max = mb.extractMax();
mb.extractMax();
mb.extractMax();
console.log(mb);
console.log("------------------");
log(max);
