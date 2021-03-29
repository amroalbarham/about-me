'use strict'


let userName=prompt('please write the name  ')
// console.log(userName);
alert('you are welcome in my website Mr '+userName);

let farmer=prompt('are you a farmer?');
farmer=farmer.toLocaleLowerCase();

if (farmer=='y' || farmer=='yes'){
        // console.log(farmer);
        alert('you are a farmer');

}else if(farmer=='n'|| farmer=='no'){
        // console.log(farmer);
        alert('you are not a farmer !');
}else{
        // console.log(farmer);
        alert('please enter yes or no or y or n');
}



let player=prompt('are you love Nadal ?');
player=player.toLocaleLowerCase();

if (player=='y' || player=='yes'){
        // console.log(player);
        alert('your favourite plater is nadal ');

}else if(player=='n'|| player=='no'){
        // console.log(player);
        alert('your favourite plater isn\'t nadal!');
}else{
        // console.log(player);
        alert('please enter yes or no or y or n');
}


let weather=prompt('are you love the hot weather?');
weather=weather.toLocaleLowerCase();

if (weather=='y' || weather=='yes'){
        // console.log(weather);
        alert('you are love hot weather');

}else if(weather=='n'|| weather=='no'){
        // console.log(weather);
        alert('you are don\'t love hot weather');
}else{
        // console.log(weather);
        alert('please enter yes or no or y or n');
}


let brothers=prompt('have you brothers?');
brothers=brothers.toLocaleLowerCase();

if (brothers=='y' || brothers=='yes'){
        // console.log(brothers);
        alert('you are have brothers');

}else if(brothers=='n'|| brothers=='no'){
        // console.log(brothers);
        alert('you are don\'t have brothers');
}else{
        // console.log(brothers);
        alert('please enter yes or no or y or n');
}
let stars=prompt('are you love stars?');
stars=stars.toLocaleLowerCase();

if (stars=='y' || stars=='yes'){
        // console.log(stars);
        alert('you are love stars');

}else if(stars=='n'|| stars=='no'){
        // console.log(stars);
        alert('you are don\'t love stars');
}else{
        // console.log(stars);
        alert('please enter yes or no or y or n');
}

alert('hope you are enjoyed Mr '+userName+' in my website,have a nice day ');

