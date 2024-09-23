function Cars(type, fueltype) {
    this.type = type;
    this.fueltype = fueltype;
}
function SetBrand(brand) {
    Cars.apply(this, ["Convertible Sports", "Diesel"]);
    this.brand = brand;
    console.log(`Car details=`, this);
}
function DefinePrice(price) {
    Cars.apply(this, ["Convertible Sports", "Diesel"]);
    this.price = price;
    console.log(`Car details=`, this);
}
const aBrand = new SetBrand("Ferrari");
const aPrice = new DefinePrice(1000000);
console.log("*".repeat(80));
function Books(name, author) {
    this.name = name;
    this.author = author;
}
function SetPubs(pubs) {
    Books.apply(this, ["Quiet Sigh of moor", "Salman Rushdie"]);
    this.pubs = pubs;
    console.log(`Book details=`, this);
}
function SetLang(lang) {
    Books.apply(this, ["Quiet Sigh of moor", "Salman Rushdie"]);
    this.lang = lang;
    console.log(`Book details=`, this);
}
const aobj = new SetPubs("Nariman Press");
const bobj = new SetLang("English US");
