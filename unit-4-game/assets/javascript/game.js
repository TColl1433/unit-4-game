

// Global variables
var randomResult;
var lose = 0;
var win = 0;
var previous = 0;

//setters  below we are giving the crystal property a class
// $(".crystal").attr('class', 'red');
//getters



random_result = Math.floor(Math.random() * 69) + 30;

$("#result").html('Random Result: ' + random_result);

for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });

    crystal.html(random)

    $(".crystals").append(crystal);

}

$(".crystal").on('click', function () {


    var num = parseInt($(this).attr('data-random'));

    previous += num;

    if (previous > random_result) {
        lose--;

        $("#lose").html(lose);
    }
    else if (previous === random_result) {
        win++;

        $("#win").html(win);

    }

    console.log(previous)

});

// Crystals Collector game

// a game with 4 crystals and random results
// every crystal needs to have a random number from 1 to 12

// when clicking any crystal, it should add to the previous result until it equals the random result
// if it is greater than the random result then we decrement the loss counter
// if it is equal, then we increment a win counter
// A new number should be generated everytime we start over



