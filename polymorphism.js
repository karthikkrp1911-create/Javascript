class animal{
    constructor(name){
        this.name = name;
    }
   eats(){
    console.log(this.name+'eats food')
   }
}

let petname = new animal('dog');
petname.eats();