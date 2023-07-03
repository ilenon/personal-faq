/**
 * ################################################################################################
 * ##### Factory function can be defined as a function that creates an object and returns it! #####
 * ################################################################################################
 */
function createPirate(first_name, last_name, h, w) {
  return {
    // Attributes 'first_name' and 'last_name'
    first_name,
    last_name,
    // Method 'toTalk'
    toTalk(subject) {
      // In this case 'this' represents the object that is executing that function
      return `${this.first_name} is talking ${subject}.`;
    },
    get fullName() {
      return `${this.first_name} ${this.last_name}`;
    },
    set fullName(name) {
      name = name.split(' ');
      this.first_name = name.shift();
      this.last_name = name.join(' ');
    },

    height: h,
    weight: w,
    get bmi() {
      const index = this.weight / (this.height ** 2);
      return index.toFixed(2);
    }
  };
}
/**
 * When a function creates and returns a new object, it is called a factory function.
 * The createPirate() is a factory function because it returns a new person object
 */
const pirate1 = createPirate('Jack', 'Sparrow', 1.78, 78)
const pirate2 = createPirate('Will', 'Turner', 1.80, 77)
console.log(pirate1)
console.log(pirate2)

console.log(pirate2.toTalk('about a treasure'))
console.log(pirate1.toTalk('about rum'))

// The 'get' syntax binds an object property to a function that will be called when that property is looked up
console.log(pirate1.fullName) // Jack Sparrow
console.log(pirate2.fullName) // Will Turner

// The 'set' binds an object property to a function to be called when there is an attempt to set the property
pirate1.fullName = 'Captain Jack Sparrow' // This value will be assigned because the fullname property contains a setter method
console.log(pirate1.fullName) // Captain Jack Sparrow
console.log(pirate2.fullName) // Will Turner

console.log(pirate1.bmi) // 24.62
console.log(pirate2.bmi) // 23.77
pirate1.imc = 0 // This value will not be assigned in the bmi property, because the property does not have a setter method
console.log(pirate1.bmi) // 24.62
console.log(pirate2.bmi) // 23.77

/**
 * ##############################################################################################################################
 * ##### By the way, you will rarely use the factory functions. Instead, you use classes or constructor/prototype patterns. #####
 * ##############################################################################################################################
 */