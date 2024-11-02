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
            return poppedNode;
        };
        let temp = this.head;
        while (temp.next.next !== null){
            temp = temp.next;
        };
        let poppedNode = temp.next;
        temp.next = null;
        this.length--;
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
    toString(){
        if (this.head === null){
            return 'null';
        };
        let temp = this.head;
        let stringValues = `( ${temp.value} ) ->`;
        while (temp.next !== null){
            temp = temp.next;
            stringValues += ` ( ${temp.value} ) ->`
        };
        stringValues += ` null`
        return stringValues;
    }
    insertAt(value, index){
        let current = new Node(value);
        let temp = this.head;
        if (index === 0){
            current.next = temp;
            this.head = current;
            this.length++;
            return this;
        };
        let counter = 1;
        while (temp.next !== null){
            if (index === counter){
             current.next = temp.next;
             temp.next = current;
             this.length++;
             return this;
            }
            counter++;
            temp = temp.next;
        };
        if (index === this.length){
            temp.next = current;
            this.length++;
            console.log("hello")
            return this;
        };
        return "out of bound";
    };
    removeAt(index){
        if (this.head === null){
            return null;
        };
        let temp = this.head;
        if (index === 0){
            let poppedNode = this.head;
            this.head = temp.next;
            this.length--;
            return poppedNode;
        };
        let counter = 1;
        while (temp.next !== null){
            if (index === counter){
                let poppedNode = temp.next;
                temp.next = temp.next.next;
                this.length--;
                return poppedNode;
            };
            temp = temp.next;
            counter++;
        }
        return "out of bounds";
    };
}; 

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
};


