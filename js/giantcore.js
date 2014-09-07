// Using the giantcore code found at:
// https://github.com/zsup/giantcore/blob/master/script.js

var accessToken = "7463f6b1577691cc5d287929be89ad469ce0938e";
var core1 = "53ff7a065075535118461187";
var core2 = "50ff68065067545647400387";
var core3 = "55ff72065075555322220487";
var core4 = "53ff6a065075535119241787";

var cores = {
    A0: {
        core: core2,
        pin: "D3"
    },
    A1: {
        core: core2,
        pin: "D2"
    },
    A2: {
        core: core2,
        pin: "D1"
    },
    A3: {
        core: core2,
        pin: "D0"
    },
    A4: {
        core: core1,
        pin: "D3"
    },
    A5: {
        core: core1,
        pin: "D2"
    },
    A6: {
        core: core1,
        pin: "D1"
    },
    A7: {
        core: core1,
        pin: "D0"
    },
    D0: {
        core: core4,
        pin: "D0"
    },
    D1: {
        core: core4,
        pin: "D1"
    },
    D2: {
        core: core4,
        pin: "D2"
    },
    D3: {
        core: core4,
        pin: "D3"
    },
    D4: {
        core: core3,
        pin: "D0"
    },
    D5: {
        core: core3,
        pin: "D1"
    },
    D6: {
        core: core3,
        pin: "D2"
    },
    D7: {
        core: core3,
        pin: "D3"
    }
}


var togglePin = function(target, message) {
    message = target.pin + "," + message;
    console.log(message);
    $.post( "https://api.spark.io/v1/devices/" + target.core + "/digitalwrite", {
        args: message, access_token: accessToken }, function( data ) {
        console.log( data );
    });
}

var setLevel = function(level, high_or_low){
	left = "A" + level;
	right = "D" + level;

	// console.log(left);

	togglePin(cores[left], high_or_low);
	togglePin(cores[right], high_or_low);
}

var on = function(level) {
	setLevel(level, "HIGH");
}

var off = function(level) {
	setLevel(level, "LOW");
}

var change = function(from, to) {
	if (from == to) {

		// Do nothing.

	} else if(from < to) { // Turn on more

		for(var i = (from + 1); i <= to; i++) {
			on(i);
		}

	} else { // turn some off

		for(var i = from; i >= (to + 1); i--){
			off(i);
		}

	}
}