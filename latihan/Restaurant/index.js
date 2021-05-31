// const Koki = require('./Koki.js');
// const Pelayan = require('./Pelayan.js');

import Koki from './Koki.js';
import Pelayan from './Pelayan.js';
import ValidationError from './ValidationError.js';

const koki = new Koki();
const pelayan = new Pelayan();

try {
  // koki = "Hello ini koki";   // test re-assign variabel const koki, supaya error...

  console.log(koki);
  console.log(pelayan);
} catch(error) {
  console.log(error);
}

let json = '{ "age": 20 }';

try {
  const user = JSON.parse(json);

  if (! user.name)
    throw new ValidationError("'name' is required");

  if (! user.age)
    throw new ValidationError("'age' is required");

  console.log(user.name);
  console.log(user.age);
} catch(error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if(error instanceof ValidationError) {
    console.log(`Invalid data: ${error.message}`);
  } else if(error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
