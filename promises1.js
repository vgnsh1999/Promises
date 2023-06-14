const posts = [
    {title:'Post 1',body:'This is post 1'}
];

//1.I want you to create one function called updateLastUserActivityTime which returns a promise.
function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                const lastSeen = new Date().getTime();
                console.log(`User last activity time:${lastSeen}`)
                resolve(lastSeen);
        },1000)
    })
}

//2.Every time the user creates a post, the user's lastActivity time should get called (should execute in 1 second)
function createPost(post){
    return new Promise((resolve,reject)=>{
            posts.push(post);
            resolve()
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

function deletePost(){
    return new Promise((resolve,reject)=>{
        posts.pop();
        resolve()
    })
}

createPost({title:'Post 2',body:'This is post 2'})
createPost({title:'Post 3',body:'This is post 3'})



//3&4.When both the promises resolve (createPost and updateLastUserActivityTime ),I want you to console log all the posts created and lastActivityTime of the user. 
Promise.all([getPosts(),updateLastUserActivityTime()])

//5. Once both the above promises are resolved , I want you to delete the last post by calling the deletion promise. Once successfully deleted, I want you to log the new set of Posts of the user.
Promise.all([deletePost(),getPosts()])
