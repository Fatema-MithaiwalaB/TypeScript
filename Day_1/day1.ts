interface Address{
    street : string
    city : string;
    pincode : number;
}

interface PersonInfo {
    firstName : string;
    lastName : string;
    age : number;
    address: Address;
    contactNumbers: string[];
    getFullName(): string;
    getFullAddress(): string;
}

class Person implements PersonInfo{
    firstName : string;
    lastName : string;
    age : number;
    address: Address;
    contactNumbers: string[];

    constructor(firstName : string,
    lastName : string,
    age : number,
    address: Address,
        contactNumbers: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.contactNumbers = contactNumbers;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getFullAddress(): string {
        return `${this.address.street} ${this.address.city} ${this.address.pincode}`;
    }
}

const person =  new Person (
    "John",
    "Doe",
    50,
    {
        street: "13-A, Main street",
        city: "Ahmedabad",
        pincode: 123456
    },
    ["1234567890", "9876543210"]
);
 

console.log("Full name : " + person.getFullName());
console.log("Full Address : " + person.getFullAddress());