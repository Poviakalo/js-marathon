// setTimeout(function() {
//     console.log(0);
// });
// console.log(1);
// const q = new Promise((resolve, reject) => {
//     console.log(2);
//     // resolve();
//     setTimeout(()=>{resolve()});
// }); 
// console.log(3);
// q.then(() => {
//     console.log(4);
// });
// console.log(5);

// let pokemons = [];

// console.log(q);
// q.then(responce => {
//     console.log(responce);
//     return responce.json();
// }).then(data => pokemons = data
//     // {console.log(data);}
// );
// console.log(pokemons);

async function getPokemons () {
    const responce = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
    const body = await responce.json();
    console.log(body);
    return body;
}
getPokemons();


// function getWord(str) {
//     let arr = str.split(' ');
//     let res = '';
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) { 
//         console.log(res);       
//         if(arr.length[i] < res.length ) {
//             res = arr[i];
//         } else {
//             res = arr[i];
//         }
//     }
//     return res;
// }