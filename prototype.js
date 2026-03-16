let Empdetails = function(name, age){
   this.name = name;
   this.age = age;
   

//    this.getname = function(){
//     return this.name;
//    };
//    this.getage= function(){
//     return this.age;
//    };
};

 

// prototye based inheritance
 Empdetails.prototype.getname = function(){
    return this.name;
  };
  Empdetails.prototype.getage = function(){
    return this.age;
  };


let emp1 = new Empdetails('karthik', '12');
console.log(emp1.name);