function Car(type, fueltype) {
    this.type = type;
    this.fueltype = fueltype;
}
function SetBrand(brand) {
    Car.call(this, "Convertible", "Diesel");
    this.brand = brand;
    console.log(`Car details=`, this);
}
function DefinePrice(price) {
    Car.call(this, "Convertible", "Diesel");
    this.price = price;
    console.log(`Car Details=`, this);
}
const newBrand = new SetBrand("Ferrari");
const newPrice = new DefinePrice(1000000);
console.log("*".repeat(80));
function Books(name, author) {
    this.name = name;
    this.author = author;
}
function setPublisher(pubs) {
    Books.call(this, "Shall we tell the president", "Jeffery Archer");
    this.pubs = pubs;
    console.log(`Book details=`, this);
}
function setBPrice(price) {
    Books.call(this, "Shall we tell the president", "Jeffery Archer");
    this.price = price;
    console.log(`Book details=`, this);
}
const aobj = new setPublisher("Blackstone and honeywell");
const bobj = new setBPrice(908);

