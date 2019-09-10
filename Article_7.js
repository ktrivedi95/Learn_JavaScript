/*********WHAT ARE STACK AND QUEUE*********/

/*Stack - Array Implementation*/
class StackArr {
    constructor() {
        this.stack = [];
    }
    
    // Inserts the element into the top of the stack
    push(element) {
        this.stack.push(element);
    }
    
    // Removes the element from the top of the stack and return that element
    pop() {
        if (this.isEmpty()) return 'Stack is empty!';
        return this.stack.pop();
    }
    
    // Return which element is on top of the stack
    peek() {
        if (this.isEmpty()) return 'Stack is empty';
        return this.stack[this.stack.length - 1];
    }
    
    // helper method
    isEmpty() {
        return !this.stack.length;
    }
}


/*Stack - Linked List Implementation*/
class Node {
    constructor(next, value) {
        this.next = next;
        this.value = value;
    }
}

class StackLL {
    constructor() {
        this.stack = null;
    }
    
    push(element) {
        let head = this.stack;
        let newNode = new Node(null, element);
        
        if (!head) {
            this.stack = newNode;
        } else {
            newNode.next = head;
            this.stack = newNode;
        }
    }
    
    pop() {
        let head = this.stack;
        
        if (!head) return 'Stack is empty!';
        
        this.stack = head.next;
        return head.value;
    }
    
    peek() {
        if(!this.stack) return 'Stack is empty!';
        return this.stack.value;
    }
}


/*Queue - Array Implementation*/
class QueueArr {
    constructor() {
        this.queue = [];
    }
    
    enqueue(element) {
        this.queue.push(element);
    }
    
    dequeue() {
        if (this.isEmpty()) return 'Queue is empty';
        return this.queue.shift();
    }
    
    peek() {
        if (this.isEmpty()) return 'Queue is empty';
        return this.queue[0];
    }
    
    // helper method
    isEmpty() {
        return !this.queue.length;
    }
}


/*Queue - Linked List Implementation*/
/*class Node {
    constructor(next, value) {
        this.next = next;
        this.value = value;
    }
}*/

class QueueLL {
    constructor() {
        this.queue = null;
    }
    
    enqueue(element) {
        let head = this.queue;
        let newNode = new Node(null, element);
        
        if (!head) {
            this.queue = newNode;
        } else {
            let traverseNode = head;
            while (traverseNode.next) {
                traverseNode = traverseNode.next;
            }
            traverseNode.next = newNode;
        }
    }
    
    dequeue() {
        let head = this.queue;
        
        if (!head) return 'Queue is empty!';
        
        this.queue = head.next;
        return head.value;
    }
    
    peek() {
        if(!this.queue) return 'Queue is empty!';
        return this.queue.value;
    }
}