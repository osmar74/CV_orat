let numeros = [1020,3340, 7046,2250,102];

let numeros_grandes = numeros.filter((value)=>{
    return (value>1000);
});
console.log(numeros_grandes);