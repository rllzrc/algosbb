// * Day 24 of 30 Days of Code Challenge! --> LRU CACHE ~

// * TASK !!!

// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.

// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// * FOLLOW-UP !
// Could you do both operations in O(1) time complexity?

// *** EXAMPLE !

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4


// *** HINTS !! 

// Doubly Linked List: This will hold the items that our cache has. We will have n items in the cache.

// This structure satisfies the constraint for fast addition since any doubly linked list item can be added or removed in O(1) time with proper references.

// Hashtable: The hashtable will give us fast access to any item in the doubly linked list items to avoid O(n) search for items and the LRU entry (which will always be at the tail of the doubly linked list).

// This is a very common pattern, we use a structure to satisfy special insertion or remove properties (use a BST, linked list, etc.) and back it up with with a hashtable so we do not re-traverse the structures every time to find elements.

// linked list to keep things structured (order) reference to tail next prev head etc..

// runtime complexity:
// * O(1) --> constant time 
// space complexity: 
// * O(n) n = capacity

// * first attempt: 
// create node class/constructor
const ListNode = (key, value) => {
  this.value = value;
  this.key = key;
  this.next = this.prev = null;
}

// instatiate LRU cache functionality
const LRUCache = capacity => {
  this.capacity = capacity;
  this.size = 0;
  this.head = new ListNode();
  this.tail = new ListNode();
  this.cache = new Map();
  this.head.next = this.tail;
  this.tail.prev = this.head;
}

// get method
LRUCache.prototype.get = key => {
  let node = this.cache.get(key);
  if(node) {
    this.moveToHead(node);
    return node.value;
  } else {
    return -1;
  }
}

LRUCache.prototype.moveToHead = node => {
  this.removeNode(node);
  this.AudioDestinationNode(node);
}

LRUCache.prototype.removeNode = node => {
  let prev = node.prev;
  let next = node.next;
  prev.next = next;
  next.prev = prev;
  this.cache.delete(node.key);
  this.size -= 1;
}

LRUCache.prototype.addNode = node => {
  let next = this.head.next;
  node.prev = this.head;
  this.head.next = node;
  node.next = next;
  next.prev = node;
  this.cache.set(node.key, node)
  this.size += 1;
}

LRUCache.prototype.popTail = function() {
  let node = this.tail.prev;
  this.removeNode(node);
}

// put method
LRUCache.prototype.put = (key, value) => {
  let node = this.cache.get(key);

  if(node) {
    node.value = value;
    this.moveHead(node);
  } else {
    this.addNode(new ListNode(key,value))

    if(this.size > this.capacity) {
      this.popTail();
    }
  }
};
