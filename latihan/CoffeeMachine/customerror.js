class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const employee = { name: "Firman", title: "Web Developer", division: "Technic", age: 30 };

try {
  if (! employee.name) {
    throw new ValidationError("properti 'name' dibutuhkan");
  } else if(! employee.title) {
    throw new ValidationError("properti 'title' dibutuhkan");
  } else if(! employee.age) {
    throw new ValidationError("properti 'age' dibutuhkan");
  }

  console.log(employee.name);
  console.log(employee.title);
  console.log(employee.age);
} catch(error) {
  if (error instanceof SyntaxError) {
    console.log(`Oops, terjadi error: ${error.message}`);
  } else if(error instanceof ReferenceError) {
    console.log(error.message);
  } else if(error instanceof ValidationError) {
    console.log(`Invalid data: ${error.message}`);
  } else {
    console.log(error.stack);
  }
}