/*podemos tener un objeto con una llave valor que tambien puede ser una llave valor
y al tratar de acceder, puede generar un error, con optional chaining podemos detener 
la evalucaicon del objeto cuando el valor es undefined o null*/

const users = {
    victor : {
        country : "mx"
    },

    ana : {
        country : "co"
    }
}

console.log(users.victor.age);
console.log(users?.money?.country);
console.log(users.victor?.age || "No existe esa información en la base de datos");