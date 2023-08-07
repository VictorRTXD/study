function* memes(meme) {
    for (const iterator of meme) {
        yield iterator;
    }
}

let miMeme = memes(["mini", "perro caliente", "no lo descargo por que ya lo tengo", 
"cierro los ojos y no veo nada"]);

console.log(miMeme.next());
console.log(miMeme.next());
console.log(miMeme.next());

let array = ["mini", "perro caliente", "no lo descargo por que ya lo tengo", 
"cierro los ojos y no veo nada"];

array.forEach(element => {
    console.log(element);
});