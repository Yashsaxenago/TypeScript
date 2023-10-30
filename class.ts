class Employee {
    id: number;
    name: string;
    address: string;

    // perameterised constructor
    constructor(id: number, name: string, address: string) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    // methods
    getNamewithAdd(): string {
        return `${this.name} stays at ${this.address}`
    }

    // getter setter
    get empId():number {
        return this.id;
    }

    set empId(id:number){
        this.id=id;
    }
    
}



let john = new Employee(12, "yash", "pata nhi");

let address = john.getNamewithAdd();
// john.id=12;
// john.name="yash";
// john.address="pata nahi";

console.log(john);
console.log(address);


/* Notes 
1 : # is used to private the perameter
2: by default all the member are public in class
3: protected is used in intances of a class

*/
