// funcao não parametriada

const n1=10;
const n2=5;

function Soma(){
    return n1+n2;
}

console.log(Soma());

//funcao parametrizada

function Soma2(n3=0,n4=0){
    return n3+n4;

}

console.log(Soma2());

// funcao anonima

const f=function(v1,v2){
    return v1-v2;
}

console.log(f(25,26));

// vetores 
// let mulheres=["Amanda", "Clara", "Bianca"]

// console.log(mulheres);

// mulheres.map((el)=>{
//     console.log(el)
// })

//funcao cosntrutor anonima
const f1=new Function("v3","v4", "return v3*v4")
console.log(f1(5,9));

// sem arrow function
const soma1=function(v5,v6){
    return v5/v6;
}

console.log(soma1(30,6));

// arrow function
const soma3=(v7,v8)=>{
    return v7*v8
}
console.log(soma3(7,8));
