const posts = [
    {title:'Post 1',body:'This is post 1'}
];

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                const lastSeen = new Date().getTime();
                console.log(`User last activity time:${lastSeen}`)
                resolve(lastSeen);
        },1000)
    })
}



function getPosts(){
    return new Promise((resolve,reject)=>{
        posts.forEach((post)=>{
            console.log(`${post.title} is created.`);
            resolve()
        })
    })
}




const convertToAsync = async () =>{
    const posts = [
        {title:'Post 1',body:'This is post 1'}
    ];
    const createPost = (post)=>{
        return new Promise((resolve,reject)=>{
                posts.push(post);
                resolve()
        })
    }

    const deletePost = ()=>{
        return new Promise((resolve,reject)=>{
            posts.pop();
            resolve()
        })
    }


    createPost({title:'Post 2',body:'This is post 2'})
    createPost({title:'Post 3',body:'This is post 3'})


    let [createpost,deletepost] = await Promise.all([createPost,deletePost]);
    console.log(`${createpost},${deletepost}`)

    return createPost;

}

convertToAsync().then((a)=>console.log(a))