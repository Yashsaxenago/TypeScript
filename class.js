var Employee = /** @class */ (function () {
    // perameterised constructor
    function Employee(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    // methods
    Employee.prototype.getNamewithAdd = function () {
        return "".concat(this.name, " stays at ").concat(this.address);
    };
    return Employee;
}());
var john = new Employee(12, "yash", "pata nhi");
var address = john.getNamewithAdd();
// john.id=12;
// john.name="yash";
// john.address="pata nahi";
console.log(john);
console.log(address);
