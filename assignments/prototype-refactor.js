class GameObject {
  constructor(attrs) {
    this.createdAt = attrs.createdAt;
    this.name = attrs.name;
    this.dimensions = attrs.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(charAttrs) {
    super(charAttrs);
    this.healthPoints = charAttrs.healthPoints;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(humAttrs) {
    super(humAttrs);
    this.team = humAttrs.team;
    this.weapons = humAttrs.weapons;
    this.language = humAttrs.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

class Hero extends Humanoid {
  constructor(heroAttrs) {
    super(heroAttrs);
    this.specialPower = heroAttrs.specialPower;
  }

  heal(char, x) {
    char.healthPoints += x;

    if (x < 2) {
      return `${this.name} used ${this.specialPower} to heal ${
        char.name
      } by ${x} point.`;
    } else {
      return `${this.name} used ${this.specialPower} to heal ${
        char.name
      } by ${x} points.`;
    }
  }
}

class Villian extends Humanoid {
  constructor(villAttrs) {
    super(villAttrs);
    this.evilSaying = villAttrs.evilSaying;
  }

  attack(char, x) {
    if (x > char.healthPoints) {
      char.healthPoints = "Dead";
      return `${this.name} has killed ${char.name}.`;
    } else {
      char.healthPoints -= x;
      return `${this.name} has taken ${x} health from ${char.name}.`;
    }
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  name: "Bruce",
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  name: "Sir Mustachio",
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  name: "Lilith",
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

const wizard = new Hero({
  createdAt: new Date(),
  name: "Remus",
  dimensions: {
    length: 3,
    width: 3,
    height: 5
  },
  healthPoints: 35,
  team: "Dumbledore's Army",
  weapons: ["Wand", "Cloak of Invisibility", "Pensieve"],
  language: "Common Tongue",
  specialPower: "Magic"
});

const politician = new Villian({
  createdAt: new Date(),
  name: "Herman",
  dimensions: {
    length: 2,
    width: 5,
    height: 2
  },
  healthPoints: 30,
  team: "Republican",
  weapons: ["Propoganda", "Fox News", "Rich Family"],
  language: "Filibuster",
  evilSaying: "We deserve stuff, they don't!"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log(politician.attack(mage, 3));
console.log(wizard.heal(mage, 4));
console.log(politician.attack(mage, 6));
console.log(wizard.heal(mage, 2));
console.log(politician.attack(mage, 3));

console.log(mage.healthPoints);

console.log(wizard.heal(archer, 3));
console.log(archer.healthPoints);
