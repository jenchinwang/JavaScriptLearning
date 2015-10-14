/*jshint multistr:true */

var text = "Hey, how are you \
doing? My name is Jen-Chin. I \
have been called JC more \
frequently, instead of Jen-Chin \
, since I started working, but \
either way I am fine.";

var myName = "Jen-Chin";
var hits = [];

for (i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        for (j = i; j < myName.length + i ; j++) {
            if (text.substring(i, myName.length+i)===myName) {
                hits.push(text[j]);
            }
        };
    };
};

if (hits.length === 0) {
    console.log("My name was not found in the text")
}
else {
    console.log(hits)
};

//Alternative
/*var text = "Hey, how are you \
doing? My name is Jen-Chin. I \
have been called JC more \
frequently, instead of Jen-Chin \
, since I started working, but \
either way I am fine.";

var hits = text.match(/Jen-Chin/g);

if ( hits.length === 0 ) "Your name wasn't found!";
else console.log(hits);*/