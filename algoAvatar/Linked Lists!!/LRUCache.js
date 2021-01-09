// ** AE: Linked List Reps Challenge  
// ** --> { LRU Cache !!! }

// T A SK !!!

// Implement an LRU Cache class for a Least Recently Used cache. The class should support:

// INSERTING key-value pairs with the insertKeyValuePair method

// RETRIEVING a key's value with the getValueFromKey method

// RETRIEVING the most recently used (the most recently inserted or retrieved) key with the getMostRecentKey method

// Each of these methods should run in constant time.

// Additionally, the LRU Cache class should store a maxSize property set to the size of the cache, which is passed as an argument during instantiation. This size represents the maximum number of key-value pairs that the cache can store at once. If a key-value pair is inserted in the cache when it has reached maximum capacity, the least recently used key-value pair should be evicted from the cache and no longer retrievable; the newly added key-value pair should effectively replace it. 

// Note that inserting a key-value pair with an already existing key should simply replace the key's value in the cache with the new value and shouldn't evict a key-value pair if the cache is full. Lastly, attempting to retrieve a value from a key that isn't in the cache should return null. 

// * Time Complexity: methods should be all in constant time O(1)
// * Space Complexity: methods should be all in constant time O(1)

// * The entire LRU Cache will use a total of O(N) space where N = max size of the LRU Cache

// LRU Cache Class:
// this is an input class
class LRUCache {
  constructor(maxSize) {
    this.cache = {};
    this.maxSize = maxSize || 1;
    this.currentSize = 0;
    this.listOfMostRecent = new DoublyLinkedList();
  }

  // * inserting a new key/val pair:
  // * Time: O(1) | Space: O(1)
  insertKeyValuePair(key, val) {
    // check if key already exists in cache, if not check max size against current size
    if(!(key in this.cache)) {
      if(this.currentSize === this.maxSize) {
        // if so, invoke evictLeastRecent helper function since we're at max cap
        this.evictLeastRecent();
      } else {
        // if not yet at max, just increment the current size by 1
        this.currentSize += 1;
      }
      // if key wasn't in cache, regardless of the above a new property must be added to cache that points to a new Doubly Linked List node as its value
      this.cache[key] = new DoublyLinkedListNode(key, val);
    } else {
      // if key is already in cache, invoke replaceKey helper method to update its value in the doubly LL
      this.replaceKey(key, val);
    }
    // we have to update the most recent key/val pair to be the new one we inserted
    this.updateMostRecent(this.cache[key]);
  }

  // * method to obtain value from key passed in >> O(1) time + space
  getValueFromKey(key) {
    // check if key is not currently in cache hash table
    if(!(key in this.cache)) {
      return null;
    }
    // call update most recent method prior to returning the most recent key
    this.updateMostRecent(this.cache[key]);
    // else, return doubly linked list node thus access its value property 
    return this.cache[key].value;
  }

  // * method to obtain most recently used key >> O(1) time + space
  getMostRecentKey() {
    if(!this.listOfMostRecent.head) return;
    // accessing the key of the head of the doubly linked list since it stores least recently used at tail and most at the head
    return this.listOfMostRecent.head.key;
  }

  // * helper method to remove least recently used key/val pair from the Doubly LL and hash table if at max capacity 
  evictLeastRecent() {
    // before removing the tail, hold on to its value
    const keyToRemove = this.listOfMostRecent.tail.key;
    // find the tail of the doubly LL >> at all times the tail will hold the least recently used k/v pair
    // remove tail method will remove the current tail and update the node before it to be the new tail
    // calling this method will evict the least recently used key/val pair and update the node before that to become the new tail (effectively it will be the new least recently used pair)
    this.listOfMostRecent.removeTail();
    // the hash table still has the property of that key even though we removed the doubly linked list, thus delete key
    delete this.cache[keyToRemove];
  }

  // * helper method to update most recently used key/val pair from the list after insertion 
  // once a new key/val pair is inserted, we must update the list of most recent pairs doubly LL to have that node as its new head
  updateMostRecent(node) {
    // update head of this doubly LL to be the node that was just passed into it
    // invoke setHeadTo method to make that node the new head of the doubly LL
    this.listOfMostRecent.setHeadTo(node);
  }

  // * helper method to replace key/val pair from the hash table upon insertion if key is already in the cache
  replaceKey(key, val) {
    // check if key is not in cache, throw an error
    if(!(key in this.cache)) {
      throw new Error("The given key isn't in the cache!");
    }
    // if it is, simply update or replace its val with the one provided 
    // no need to create a new Doubly LL node, we just overwrite its value property to be the new one
    this.cache[key].val = val; 
  }
};


// * Doubly Linked List Class
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHeadTo(node) {
    if(this.head === node) {
      return;
    } else if(this.head === null) {
      this.head = node;
      this.tail = node;
    } else if(this.head === this.tail) {
      this.tail.prev = node;
      this.head = node;
      this.head.next = this.tail;
    } else {
      if(this.tail === node) this.removeTail();
      node.removeBindings();
      this.head.prev = node;
      node.next = this.head;
      this.head = node; 
    }
  }

  removeTail() {
    if(this.tail === null) return;
    if(this.tail === this.head) {
      this.head = null;
      this.tail = null;
      return; 
    }
    this.tail = this.tail.prev;
    this.tail.next = null; 
  }
}

// * Doubly Linked List Node class
class DoublyLinkedListNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }

  removeBindings() {
    if(this.prev !== null) {
      this.prev.next = this.next;
    }
    if(this.next !== null) {
      this.next.prev = this.prev; 
    }
    this.prev = null;
    this.next = null; 
  }
}
