var friends = {};

friends.bill = {firstName: "Bill", lastName: "Russell", number: "6", address: ['2607 Myrtle Street',
'Oakland', 'California',
'USA']};
friends.steve = {firstName: "Steve", lastName: "Nash", number: "13", address: ['3400 Richmond Road',
'Victoria', 'British Columbia', 'V8P 4P5',
'Canada']};

var list = function(obj) {
    for (var key in obj) {
        console.log(key)
    }
};

var search = function(name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};

list(friends);
search("Steve");