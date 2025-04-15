interface Address{
    city : string;
    pincode : number;
    street : string
}

interface PersonInfo {
    firstName : string;
    lastName : string;
    age : number;
    address: Address;
    contactNumbers: string[];
}

var person: PersonInfo = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    address: {
        street: "13-A, Main street",
        city: "Ahmedabad",
        pincode: 123456
    },
    contactNumbers: ["1234567890", "9876543210"]
};
 
function getFullName(personInfo: PersonInfo)
{
    return personInfo.firstName + " " + personInfo.lastName;
}

function getFullAddress(person: PersonInfo)
{
    return person.address.street + " " + person.address.city + " " + person.address.pincode;
}

console.log("Full name : " + getFullName(person));
console.log("Full Address : " + getFullAddress(person));