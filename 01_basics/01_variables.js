const accountId = 144453
let accountEmail = "storm@gmail.com"
var accountPassword = "12345"
accountCity ="Kolkata"
let accountState;
// accountId =23 //not allowed
accountEmail = "spyderstorm@gmail.com"
accountPassword = "54321"
accountCity ="Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issues in block scope and functionnal scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity.accountState])