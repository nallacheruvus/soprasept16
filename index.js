const person = {
    name: "James Shelly",
    email: "james@yahoo.com",
    mobile: '9877656789',
    wish: function (thing) {
        console.log(this.name + " " + this.email + " " + this.mobile + " wishes you " + thing);
    }
}
person.wish("Hello There!");
let afunc = person.wish.bind({ name: "Satish N", email: "satish@yahoo.com", mobile: "9088767898" });
afunc("Hello There");
const book = {
    name: "Quiet flows of Don",
    author: "M Sholkov",
    dets: function (t) {
        console.log(this.name + " " + this.author + " " + t);
    }
}
book.dets(" Is An Excellent Book");
let bfunc = book.dets.bind({ name: "Adventures of tom sawyer", author: "Mark Twain" });
bfunc(" Is one of the best books written of 18 cent");
let arr1 = ["Ramayan", "Mahabharat", "Ainan e akbari", "Merchan of venice", "Elephant song"];
let arr2 = ["Valmiki", "Vyas", "Akbar", "Shakespere", "Wilbur Smith"];
let arr3 = ["Classic", "Cult", "Philosophy", "Drama", "Pulp"];
let j = 0;
arr1.forEach(n => {
    let cfunc = book.dets.bind({ name: arr1[j], author: arr2[j] });
    cfunc(arr3[j]); j++;
});







