//Knight ou Sorcerer - Guerreiro ou Mago
//LittleMonster ou BigMonster

class Character{
    //Caracteriticas padrão
    _life = 1;
    maxLife = 1;
    attack  = 0;
    defense = 0;

    constructor(name){
        this.name = name;
    }
    get life(){
        return this._life;
    }
    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }

}

class Knight extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
        
    }
}

class Sorcerer extends Character{
    constructor(name){
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}


class LittleMonster extends Character{
    constructor(){
        super("Little Monster");
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}


class BigMonster extends Character{
    constructor(){
        super("BigMonster");
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

//Iniciando informações essenciais para o Estágio
class Stage{
    constructor(fighter1, fighter2, fighter1El, fighter2El,logObject){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;

    }

start(){
    this.update();

    this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1,this.fighter2 ));
    this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2,this.fighter1 ));

    

    
}
update(){
    //Fighter 1
    this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name}  ---  ( ${this.fighter1.life.toFixed(2)} HP)`;
    let f1Pct = (this.fighter1.life / this.fighter1.maxLife) *100;
    this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;


    //Fighter 2
    this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name}  ---  ( ${this.fighter2.life.toFixed(2)} HP)`;
    let f2Pct = (this.fighter2.life / this.fighter2.maxLife) *100;
    this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;

   

}


doAttack(attacking, attacked){
   

    if (attacking.life <=0 || attacked.life<=0){
    this.log.addMessage(`<strong> <em> "A batalha não pode mais prosseguir!" </em></strong>`)
          return;        
     } else{
        this.log.addMessage(`<strong> <em> ${attacking.name} </em></strong> atacou <strong><em> ${attacked.name} </em></strong>`);

     }



    //Utilizando um fator de variação para modificar a intensidade do ataque
    let attackFactor = (Math.random() *1.65 ).toFixed(2);
    let defenseFactor = (Math.random() *1.15 ).toFixed(2);

    let actualAttack = attacking.attack * attackFactor;
    // Verificando o ataque
    // console.log(actualAttack.toFixed(2));

    let actualDefense = attacked.defense * defenseFactor;
    // Verificando a defesa
    //console.log(actualDefense.toFixed(2))

    if ((actualAttack - actualDefense) <= 0){
        actualAttack = 0;
        this.log.addMessage(`<strong> <em> ${attacked.name} </em></strong> conseguiu defender!`);
    } else{
        actualAttack = actualAttack - actualDefense;
        this.log.addMessage(`${attacking.name} causou um dano de ${actualAttack.toFixed(2)} em ${attacked.name}`)
        attacked.life -= actualAttack;
        // Verificando o life atual
        // this.log.addMessage(attacked.life);
    }

    this.update()
}

}

class Log{
    list=[];

    constructor(listEl){
        this.listEl = listEl;
    }

    addMessage(msg){
        this.list.push(msg);
        this.render();
    }

    render(){
        this.listEl.innerHTML = '';

        //Preenchendo os dados
        for(let i in this.list){
            this.listEl.innerHTML += `<li> ${this.list[i]}</li>`;
        }

    }



}
