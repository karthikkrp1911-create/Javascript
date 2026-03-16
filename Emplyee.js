
//encapsulation
class Employee{
     constructor(name, id, phonenumber){
        this.name = name;
        this.id = id;
        this.phonenumber = phonenumber;

     }

     getname(){
        return this.name;

     }
     getid(){
        return this.id;
    
     }
}

let emp = new Employee('kartik','101','3783783');
console.log(emp.getname());

