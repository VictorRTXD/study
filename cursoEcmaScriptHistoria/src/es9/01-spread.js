const user = {username : "victor", age : 20, country : "mx"};
const {username, ...values} = user;
console.log(username);
console.log(values);

