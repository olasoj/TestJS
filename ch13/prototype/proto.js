function PersonName(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.fullName = function () {
        return [this.first_name, this.last_name].join(" ");
    }
}

console.log(PersonName.prototype)


PersonName.prototype.fullName = function () {
    return [this.first_name, this.last_name].join(" ");
}


let pName1 = new PersonName("Gaurav", "Mehla");
let pName2 = new PersonName("Sarthak", "Sharma");

console.log(pName1.fullName());
console.log(pName2.fullName());

console.log(pName1)
console.log(pName1._proto_())