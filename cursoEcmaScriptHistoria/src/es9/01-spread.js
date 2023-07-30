// spread operator
//los ... sirven para destructurar elementos de array u objetos

const user = {username : "victor", age : 20, country : "mx"};
const {username, ...values} = user;
console.log(username);
console.log(values);

