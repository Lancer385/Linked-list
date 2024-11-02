export class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    append(value){
        if (this.head === null){
            let current = new Node(value);
            current.value = value;
            this.head = current;
        }
        else {
            let temp = this.head;
            while (temp.next !== null){
                temp = temp.next;
            }
            temp.next = new Node(value);
        };
        this.length++;

        console.log(this);
    }
    prepend(value){
        let current = new Node(value);
        if (this.head === null){
            this.head = current;
        }
        else {
            current.next = this.head;
            this.head = current;
        };
        this.length++;
        console.log(this);
    };
    size(){
        return this.length;
    }
    getHead(){
        return this.head;
    }
    tail(){
        let temp = this.head;
        while (temp.next !== null){
            temp = temp.next;
        }
        return temp;
    }
    at(index){
        let temp = this.head;
        let counter = 1;
        if (index === 0){
            return temp;
        }
        while (temp.next !== null){
            temp = temp.next;
            if (counter === index){
                return temp;
            };
            counter++;
        };
        return null;
    };
    pop(){
        if (this.length === 0){
            return;
        }
        if (this.length === 1){
            let poppedNode = this.head;
            this.head = null;
            this.length--;
            console.log(this)
            return poppedNode;
        };
        let temp = this.head;
        while (temp.next.next !== null){
            temp = temp.next;
        };
        let poppedNode = temp.next;
        temp.next = null;
        this.length--;
        console.log(this);
        return poppedNode;
    };
    contains(value){
        if (this.head === null){
            return false;
        };
        if (value === this.head.value){
            return true;
        };
        let temp = this.head;
        while (temp.next !== null){
            temp = temp.next
            if (value === temp.value){
                return true
            };
        }
        return false;
    }
    find(value){
        if (this.head === null){
            return null;
        };
        if (value === this.head.value){
            return 0;
        };
        let temp = this.head;
        let counter = 1;
        while (temp.next !== null){
            temp = temp.next
            if (value === temp.value){
                return counter;
            };
            counter++;
        }
        return null;
    }
}; 

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
};


