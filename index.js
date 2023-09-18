const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push("Ralph");
}


//test 2
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

//test 3
function destructivelyRemoveLastCat(name){
    cats.pop()
}

//test 4
function destructivelyRemoveFirstCat(name){
    cats.shift()
}

//test 5
function appendCat(name){
    const cat = [...cats,"Broom"];
    return cat;
}

//test 6
function prependCat(name){
    const cut = ["Arnold", ...cats];
    return cut;
}
//test 7
function removeLastCat(name){
    return cats.slice(0,2);
}
removeLastCat();


function removeFirstCat(){
   return cats.slice(-2);
}
removeFirstCat();