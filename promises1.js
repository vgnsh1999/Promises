const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'},
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output = output + `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}

function createPost(post) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            } else {
                reject('Error something went wrong')
            }


        },2000);

    })
    
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        const lastSeen = new Date().getTime();
        resolve(lastSeen);
    })
}

Promise.all([updateLastUserActivityTime()]).then((values)=>{
    console.log(values)
})