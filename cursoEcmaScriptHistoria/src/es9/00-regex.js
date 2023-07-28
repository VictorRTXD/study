//regex = regular expresions
//son patrones de búsqueda y manipulación de cadenas de caracteres

const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("2023-24-07")
console.table(matchers)

const newRegex = /(\d{3})-(\d{3})-(\d{4})/;
const matchers2 = newRegex.exec("378-159-2058");
console.table(matchers2)