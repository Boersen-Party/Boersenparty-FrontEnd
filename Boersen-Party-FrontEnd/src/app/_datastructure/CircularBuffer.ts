export class CircularBuffer<T> {
    private buffer: (T | null)[]; 
    private head: number = 0; 
    private tail: number = 0; 
    private size: number = 0; 
    private capacity: number; 

    constructor(capacity: number) {
      this.capacity = capacity;
      this.buffer = new Array(capacity).fill(null);
    }
  
   
    add(item: T): void {
      this.buffer[this.tail] = item;
      if (this.size === this.capacity) {
        this.head = (this.head + 1) % this.capacity;
      } else {
        this.size++;
      }
      this.tail = (this.tail + 1) % this.capacity;
    }
  
    
    toArray(): T[] {
      const result: T[] = [];
      for (let i = 0; i < this.size; i++) {
        result.push(this.buffer[(this.head + i) % this.capacity]!);
      }
      return result;
    }
  
   
    isEmpty(): boolean {
      return this.size === 0;
    }
 
    isFull(): boolean {
      return this.size === this.capacity;
    }
  
    
    clear(): void {
      this.buffer.fill(null);
      this.head = 0;
      this.tail = 0;
      this.size = 0;
    }
  }
  