function Employee(name, age, basesalary){
    this.name = name;
    this.age = age;
    this.basesalary = basesalary;
    
    let monthlybonus = 2000;

    let calculatethefinalsalary = function(){
        let totalsalry = basesalary+monthlybonus;
        console.log('total salary is' +totalsalry);
    }

    this.getempldetails = function(){
        console.log('Name :'+this.name+ '| Age:'+this.age);
        calculatethefinalsalary();
    }


}

let emp1 = new Employee('karthik', '30',200);
emp1.getempldetails();