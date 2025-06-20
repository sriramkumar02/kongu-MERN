let person = {
  name: "sriram kumar m",
  age: 20,
  city: "madurai",
  greet: function() {
    console.log("Hello, I’m " + this.name + " from " + this.city + ".");
  }
};
person.greet();

 