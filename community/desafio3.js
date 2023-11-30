class hero{
  constructor(name,age,type){
    this.name = name;
    this.age = age;
    this.type = type;
  }
  verifyType(){
    var ataque = "none"
    switch(this.type){
      case "Mago" : ataque = "magia";
      break
      case "Guerreiro" : ataque = "espada";
      break
      case "Monge" : ataque = "artes marciais";
      break
      case "Ninja" : ataque = "shuriken";
      break
      default : "tipo não encontrado";
    }
    console.log(`o ${this.type} atacou usando ${ataque}`);
  }
  }

  let gameOne = new hero("Slaweys","19","Mago");

  gameOne.verifyType()
