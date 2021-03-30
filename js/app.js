'use strict';


let score = 0;
let userName = prompt('please write the name  ');
// console.log(userName);
alert('you are welcome in my website Mr ' + userName);

let farmer = prompt('Am I a farmer?');
farmer = farmer.toLocaleLowerCase();

if (farmer == 'y' || farmer == 'yes') {
        // console.log(farmer);
        alert('yes great i\'m');
        score += 1;

} else if (farmer == 'n' || farmer == 'no') {
        // console.log(farmer);
        alert('no i\'m a farmer !');
} else {
        // console.log(farmer);
        alert('please enter yes or no or y or n');
}



let player = prompt('Am I love Nadal ?');
player = player.toLocaleLowerCase();

if (player == 'y' || player == 'yes') {
        // console.log(player);
        alert('correct,i love nadal ');
        score += 1;

} else if (player == 'n' || player == 'no') {
        // console.log(player);
        alert('wrong answer ');
} else {
        // console.log(player);
        alert('please enter yes or no or y or n');
}


let weather = prompt('Do I like the weather??');
weather = weather.toLocaleLowerCase();

if (weather == 'y' || weather == 'yes') {
        // console.log(weather);
        alert('yes i love hot weather');
        score += 1;

} else if (weather == 'n' || weather == 'no') {
        // console.log(weather);
        alert('no i don\'t love hot weather');
} else {
        // console.log(weather);
        alert('please enter yes or no or y or n');
}


let brothers = prompt('Do I have brothers?');
brothers = brothers.toLocaleLowerCase();

if (brothers == 'y' || brothers == 'yes') {
        // console.log(brothers);
        alert('yes i  have one brother');
        score += 1;

} else if (brothers == 'n' || brothers == 'no') {
        // console.log(brothers);
        alert('no i don\'t have brothers');
} else {
        // console.log(brothers);
        alert('please enter yes or no or y or n');
}
let stars = prompt('Do I love the stars?');
stars = stars.toLocaleLowerCase();

if (stars == 'y' || stars == 'yes') {
        // console.log(stars);
        alert('yes i love stars');
        score += 1;
} else if (stars == 'n' || stars == 'no') {
        // console.log(stars);
        alert('no i don\'t  love stars');
} else {
        // console.log(stars);
        alert('please enter yes or no or y or n');
}



let number = 5;

for (let i = 0; i <= 3; i++) {

        let guessingNumber = prompt('please enter the number ?');
        guessingNumber = parseInt(guessingNumber);

        if (guessingNumber === number) {
                score++;
                alert('great you answer correct');
                break;
        }
        else if (guessingNumber > number) {

                alert('the number is too high');

        }

        else if (guessingNumber < number) {
                alert('the nunber is too low');
        }
        if (i === 3) {
                alert(' hard luck ,the correct answer is 5');
        }

}


let playerList = ['NOVAK', 'DANIIL', 'NADAL', 'DOMINIC', 'DOMINIC', 'FEDERER', 'ZVEREV'];
for (let i = 0; i < 6; i++) {

        
        let userEnter = prompt('try to guess the player');
        userEnter = userEnter.toUpperCase();

        for (let j = 0; j < playerList.length; j++) {

                console.log(j);
                if (playerList[j] === userEnter) {
                        alert('great man correct answer');
                        score++;
                        
                        i =7;
                        break;
                        // console.log();
                }


        }
       

}

alert("the answer sheet\n NOVAK or DANIIL or NADAL or DOMINIC or  DOMINIC or FEDERER or ZVEREV ");









alert(`hope you are enjoyed Mr ${userName} in my website,have a nice day  and your score is ${score} out of 7`);

