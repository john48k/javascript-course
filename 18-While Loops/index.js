// while loop = repeat some code while some conditions are TRUE

// let username = "";

// while (username === "" || username === null) {
//   username = window.prompt(`Enter your name `);
// }

// console.log(`Hello ${username}`);

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt(`Enter your username`);
  password = window.prompt(`Enter your password`);

  if (username === "username" && password === "123") {
    loggedIn = true;
    console.log(`you are logged in `);
  } else {
    console.log(`invalid credentials please try again `);
  }
}
