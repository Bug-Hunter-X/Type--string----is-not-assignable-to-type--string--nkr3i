function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user[0])); //Correct usage with single string element
console.log(greeterArray(user)); //Correct usage with array