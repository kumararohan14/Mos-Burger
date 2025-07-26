export default class Customer {
    constructor(name,email,contact,address){
        this.name = name;
        this.email = email;
        this.address = address;
        this.contact = contact;
    }

    getName=()=>{//block scope ekaka function kiyana keword eka ona na na
        return this.name;
    }
    getAge=()=>{
        return this.age;
    }
    getAddress=()=>{
        return this.address;   
    }
    setName(){//block scope ekaka function kiyana keword eka ona na na
        return this.name;
    }
    setAge(){
        return this.age;
    }
    setAddress(){
        return this.address;   
    }
}