class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }

  speak() {
    return `Hello, my name is ${this.name} and I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }

  affectGrade(student) {
    Math.random() < 0.5
      ? (student.grade -= Math.round(Math.random()))
      : (student.grade += Math.round(Math.random() * 15));
  }
}

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this.grade = attr.grade;
  }

  listsSubjects() {
    return this.favSubjects.toString().split(",");
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun the sprint challenge on ${subject}.`;
  }

  graduateOrNah() {
    return this.grade >= 70 ? (this.grade = "Graduated!") : "Keep trying!";
  }
}

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel} @channel standby times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

const dan = new Instructor({
  name: "Dan Levy",
  age: 40,
  location: "Cat Land",
  specialty: "Cat Jokes",
  favLanguage: "JavaScript",
  catchPhrase: "*nervous laughter*"
});

const josh = new Instructor({
  name: "Josh Knell",
  age: 40,
  location: "Salt Lake City",
  gender: "M",
  specialty: "Vanilla JavaScript",
  favLanguage: "JavaScript",
  catchPhrase: "Ha, ha, ha.. oh boy."
});

const joshua = new ProjectManager({
  name: "Joshua Wood",
  age: 40,
  location: "somewhere west, USA",
  specialty: "being a kind and helpful person",
  favLanguage: "React JS",
  catchPhrase: "You're doing great.",
  gradClassName: "Web20",
  favInstructor: "Josh Knell"
});

const chance = new ProjectManager({
  name: "Chance Halo",
  age: 22,
  location: "St. Joseph, MO",
  gender: "M",
  specialty: "Farting",
  favLanguage: "React JS",
  catchPhrase: "I'm a big turd.",
  gradClassName: "Labs12",
  favInstructor: "Dustin"
});

const katie = new Student({
  name: "Katie McKnight",
  age: 27,
  location: "St. Joseph, MO",
  previousBackground: "Behavioral Health",
  className: "Web20",
  favSubjects: ["JavaScript", "Literature", "Psychology", "Economics"],
  grade: 0
});

const chris = new Student({
  name: "Chris Pelayo",
  age: 23,
  location: "Los Angeles, CA",
  prevBackground: "Sales",
  className: "Web20",
  favSubjects: ["JavaScript", "CSS", "HTML"],
  grade: 0
});

const winnie = new Student({
  name: "Winnie Song",
  location: "FLushing",
  age: 22,
  previousBackground: `MUA`,
  className: `Web20`,
  favSubjects: ["CSS", "HTML", "LESS"],
  grade: 0
});

const micah = new Student({
  name: "Micah",
  location: "Provo",
  age: 23,
  previousBackground: "Office Manager",
  className: "Web 20",
  favSubjects: ["CSS", "JS", "HTML"],
  grade: 0
});

const ramses = new Student({
  name: "Ramses Bermudez",
  age: 25,
  location: "Miami, FL",
  prevBackground: "Real Estate",
  className: "Web20",
  favSub: ["CSS", "HTML", "JS"],
  grade: 0
});

console.table(dan);
console.table(josh);
console.table(joshua);
console.log(katie);
console.table(chance);

console.log(katie.speak());
console.log(dan.demo("constructor functions"));
console.log(dan.grade(katie, "JavaScript III"));

console.log(joshua.standUp("Web20"));
console.log(joshua.debugsCode(katie, "DOM manipulation"));

console.log(katie.listsSubjects());
console.log(katie.PRAssignment("JavaScript IV"));
console.log(katie.sprintChallenge("DOM I"));

console.log(katie.grade);
console.log(dan.affectGrade(katie));
console.log(katie.grade);
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(katie.grade);
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(katie.grade);
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(katie.grade);
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(dan.affectGrade(katie));
console.log(katie.grade);
console.log(katie.graduateOrNah());
