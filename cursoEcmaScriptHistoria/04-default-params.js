//esto sirve para tener argumentos por defecto
function newUser(name, age, country) {
    var name = name || "Victor";
    var age = age || 20;
    var country = country || "MX";
    console.log(name, age, country);
}

newUser();
newUser("David", 15, "CO");

function newAdmin(name = "Victor", age = 20, country = "JP") {
    console.log(name, age, country);
}

newAdmin();
newAdmin("mini", 16, "mx");