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
}; 

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
};


