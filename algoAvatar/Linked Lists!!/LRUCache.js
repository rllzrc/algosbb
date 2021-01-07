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

// LRU Cache Class:
// this is an input class
class LRUCache {
  constructor(maxSize) {
    this.cache = {};
    this.maxSize = maxSize || 1;
    this.currentSize = 0;
    this.listOfMostRecent = new DoublyLinkedList();
  }
}