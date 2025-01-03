export class CircularBuffer<T> {
    private buffer: (T | null)[]; // The underlying array storage
    private head: number = 0; // Points to the oldest element
    private tail: number = 0; // Points to the next insertion point
    private size: number = 0; // Number of elements in the buffer
    private capacity: number; // Maximum size of the buffer
  
    constructor(capacity: number) {
      this.capacity = capacity;
      this.buffer = new Array(capacity).fill(null);
    }
  
    /**
     * Adds a new element to the buffer. Overwrites the oldest element if full.
     * @param item The item to add to the buffer.
     */
    add(item: T): void {
      this.buffer[this.tail] = item;
      if (this.size === this.capacity) {
        // Buffer is full; overwrite the oldest item
        this.head = (this.head + 1) % this.capacity;
      } else {
        this.size++;
      }
      this.tail = (this.tail + 1) % this.capacity;
    }
  
    /**
     * Converts the current contents of the buffer into an ordered array.
     * @returns An array containing the buffer's elements in insertion order.
     */
    toArray(): T[] {
      const result: T[] = [];
      for (let i = 0; i < this.size; i++) {
        result.push(this.buffer[(this.head + i) % this.capacity]!);
      }
      return result;
    }
  
    /**
     * Checks if the buffer is empty.
     * @returns True if the buffer is empty, otherwise false.
     */
    isEmpty(): boolean {
      return this.size === 0;
    }
  
    /**
     * Checks if the buffer is full.
     * @returns True if the buffer is full, otherwise false.
     */
    isFull(): boolean {
      return this.size === this.capacity;
    }
  
    /**
     * Clears the buffer.
     */
    clear(): void {
      this.buffer.fill(null);
      this.head = 0;
      this.tail = 0;
      this.size = 0;
    }
  }
  