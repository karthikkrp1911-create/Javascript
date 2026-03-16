class Car{
  setname(name){
    this.name = name;
  }

  startengine(){
   console.log('engine has started'+this.name);
  }
  stopengine(){
    console.log('engine has stoped'+this.name);

  }
}

class Toyato extends Car{
    topspeed(speed){
        console.log('my car is '+this.name+speed);
    }
}

let speed = new Toyato();
speed.setname('xcent');
speed.startengine();
speed.stopengine();
speed.topspeed(2000);