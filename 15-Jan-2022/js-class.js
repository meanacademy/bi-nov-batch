class Person {
  personName;
  personAddress;
  contactno = 9876544210;
  constructor(name, address) {
    this.personName = name;
    this.personAddress = address;
  }

  getPersonDetails() {
    console.log(`the person details are: 
        \n
        Person Name: ${this.personName} \n
        Person Address: ${this.personAddress}
        `);
  }
}

//crete an object of a class Person
let personObject = new Person("Mahesh", "Nanded");

let personName = personObject.personName;
console.log(personName);

personObject.getPersonDetails();

let person2 = new Person("Vipul", "Mumbai");

console.log(person2.personAddress);
person2.getPersonDetails();
