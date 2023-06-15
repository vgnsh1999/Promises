console.log('person1: shows ticket');
console.log('person2: shows ticket');

//async function makes it beautiful this is just a sample
// const preMovie = async () => 'Hello';
// preMovie().then((a)=>console.log(a));

const preMovie = async () =>{
    const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
            setTimeout(()=> resolve('ticket'),3000);
    });

    const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'));

    const getButter = new Promise((resolve,reject)=>resolve('butter'));

    const getCoolDrinks = new Promise((resolve,reject)=>resolve('cool drinks'));

    let ticket = await promiseWifeBringingTickets;

    console.log(`wife: i got the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband:i got some ${popcorn}`)
    console.log('husband: we should go in');
    console.log('wife: i need butter on popcorn');

    let butter = await getButter;

    console.log(`husband:i got some ${butter} on popcorn`);
    console.log(`husband:anything else?`);
    console.log(`wife:lets go we are getting late`);
    console.log(`husband:thank you for the reminder *grins*`);
    console.log(`wife:Oops..we forgot to buy cool drinks!!!`);

    let coolDrinks = await getCoolDrinks;

    console.log(`husband:i got the ${coolDrinks} lets go...`);

    return ticket;
}

preMovie().then((a)=>console.log(`person3: shows ${a}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');