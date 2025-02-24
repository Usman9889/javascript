const accountId = 186553
let accountEmail = "usman@google.com"
var accountPassword = "12345"
accountCity = "gonda"
let accountState;

// accountId = 2 // not allowed


accountEmail = "us@.com"
accountPassword = "245568"
accountCity = "lucknow"

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
// console.log(accountId, accountEmail, accountPassword);
// console.log(accountCity);

 console.table([accountId, accountEmail, accountPassword, accountCity, accountState])