/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jaimeLannisterAttack = 35;

if(jonSnowAttack > jaimeLannisterAttack){
    console.log('John Snow is  more beefy!');
} else if(jaimeLannisterAttack === jonSnowAttack){
    console.log('Equally strong');
}else{
    console.log('Jaime is more beefy!');
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

if(jonSnowHealth <= jaimeLannisterAttack){
    console.log("Jon SNow has been slain");
} else{
    jonSnowHealth -= jaimeLannisterAttack;
    console.log(`Jon's health is down to ${jonSnowHealth}`);
}

jonSnowDefense += 25
//jonSnowDefense = jonSnowDefense + 25;
if (jonSnowHealth <= jaimeLannisterAttack){
    console.log('Jon has been slain')
} else{
    jonSnowHealth -= jaimeLannisterAttack - jonSnowDefense;
    console.log(`Jon's health is down to ${jonSnowHealth}`);
}

if( jonSnowHealth + 50 >= 100){
    jonSnowHealth = 100;
} else{
    jonSnowHealth += 50;
}
console.log(`${jonSnowHealth}`);

let coinLandsHeads = true;

if(coinLandsHeads){
    console.log('The fight continues!')
} else{
    console.log('Jon is allowed to run away.');
}

// if(coinLandsHeads !== false){
//     console.log('The fight continues!')
// } else{
//     console.log('Jon is allowed to run away.')
// }

for( let i=0; i < 5; i++)
{
    if(jonSnowHealth <= 0){
        console.log('Jon has been slain');
    } else{
        jonSnowHealth -= jaimeLannisterAttack -jonSnowDefense;
        console.log(`Jon's health is ${jonSnowHealth}`);
    }
}

while(jonSnowHealth > 0){
    jonSnowHealth -= jaimeLannisterAttack - jonSnowDefense;
    if(jonSnowHealth <=0){
        console.log('Jon Snow is finally dead.')
    } else{
        console.log(`Jon's health is ${jonSnowHealth}`)
    }
}

if(jonSnowAttack > 25 && jonSnowAttack < 75){
    console.log('Jon is mid level beast.')
}

if(jaimeLannisterAttack < 25 || jaimeLannisterAttack > 75){
    console.log('Jaime is strong depending on the day.');
    } else{
        console.log('Jamie is mid level beast.');
    }
    
