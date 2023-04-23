
const { default: mongoose } = require("mongoose");
const mongoos = require("mongoose");

mongoos.connect("mongodb://127.0.0.1:27017/fruitsDB");



// FRUIT SCHEMA, MODEL, AND SAVE

const fruitSchema = new mongoos.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoos.model("Fruit", fruitSchema);


const fruit = new Fruit ({
  rating: 10,
  review: "Peaches are so yummy"
})


// fruit.save()


// PERSON SCHEMA, MODEL, AND SAVE

const personSchema = new mongoos.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
})


const Person = mongoos.model("Person", personSchema)



const mango = new Fruit({
  name: "Mango",
  score: 5,
  review: "Nice fruit."
})

// mango.save()


// const person = new Person({
//   name: "Ammy",
//   age: 12,
//   favoriteFruit: pineapple
// })

// person.save()



Person.updateOne({name: "John"}, {favoriteFruit: mango}).then(function () {
  console.log("Successfully updated DB");
}).catch(function(err) {
  console.log(err);
})



// NEW FRUITS

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit"
// })

// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me"
// })

// const banana = new Fruit({
//   name: "Banna",
//   score: 3,
//   review: "Weird texture"
// })




// INSERT MANY

// // Fruit.insertMany([kiwi, orange, banana]).then(function() {
// //   console.log("Successfully saved defult items to DB");
// // }).catch(function (err) {
// //   console.log(err)
// // })



// FIND FRUIT

// Fruit.find().then(function(fruits) {
//   fruits.forEach(function(fruit) {
//     console.log(fruit.name);
//     mongoose.connection.close()
//   })
// }).catch(function(err) {
//   console.log(err);
// })


// UPDATE ONE

// Fruit.updateOne({_id: "64212e973ca8e866dd574f24"}, {name: "Peach"}).then(function() {
//   console.log("Successfully updated DB");
// }).catch(function(err) {
//   console.log(err);
// })



// DELETE ONE

// Fruit.deleteOne({name: "Peach"}).then(function() {
//   console.log("Data delted");
// }).catch(function(err) {
//   console.log(err);
// })



// DELETE MANY - Person

// Person.deleteMany({name: "John"}).then(function() {
//   console.log("delted");
// }).catch(function(err) {
//   console.log(err);
// })