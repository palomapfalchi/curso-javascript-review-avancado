function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        if (this.gender == "male") {
            console.log((this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.'));
        } else {
            console.log((this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. She likes ' + this.interests[0] + ' and ' + this.interests[1] + '.'));
        }
    };
    this.greeting = function() {
      console.log(('Hi! I\'m ' + this.name.first + '.'));
    };
}
  

  var person1 = new Person("Baby", "Smith", 32, "female", ["music", "skiing", "movie"]);

  console.log(person1["age"]);
  console.log(person1.interests[1]);
  console.log(person1.bio());
  console.log(person1.greeting());

  var person2 = Object.create(person1);
  console.log(person2.name);
  console.log(person2.greeting());

  