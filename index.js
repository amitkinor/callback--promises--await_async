

///////////////////////////////////////////////////////////
///                                                     ///
///   1.  callbacks   implementation  - callback hell   ///
///                                                     ///
///////////////////////////////////////////////////////////

console.log('Before');
getUser(1,(user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        getCommits(repos[0],(commits) => {
            console.log(commits);
        })
    })
});
console.log('After');

function getCommits(repo,callback){
    console.log('fetching commits');
    setTimeout(() => {
        callback('here are the commits');
    }, 2000);
}

function getRepositories(gitHubUsername, callback){
    console.log('fetching repos');
    setTimeout(()=> {
        callback(['repo1', 'repo2']);
    }, 2000);
}

function getUser(id,callback){
    setTimeout(() => {
        console.log('fetching user');
        callback({id:id,  gitHubUsername: 'amitkinor'})
    }, 2000);
}


//////////////////////////////////////////
///                                    ///
///   2.  Promise  implementation      ///
///                                    ///
//////////////////////////////////////////

console.log('Before (promise)');
getUser2(1)
.then(user => getRepositories2(user.gitHubUsername))
.then(repos => getCommits2(repos[0]))
.then(commits => console.log(commits))
.catch(err => console.log(new Error(err)));

console.log('After (promise)');

function getUser2(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fetching user (promise)');
            resolve({id:id,  gitHubUsername: 'amitkinor'});
        }, 2000);
    })    
}

function getRepositories2(gitHubUsername){
    console.log('fetching repos (promise)');
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    })       
}

function getCommits2(repo){
    console.log('fetching commits (promise)' );
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('here are the commits (promise)');
        }, 2000);
    })
}

///////////////////////////////////////////
///                                     ///
///   3.  Async Await  implementation   ///
///                                     ///
///////////////////////////////////////////

console.log('Before (await - async)');

async function displayCommits(){
    try{
        const user = await getUser3(1);
        const repos = await getRepositories3(user.gitHubUsername);
        const commits = await getCommits3(repos[0]);
        console.log(commits); 
    }
    catch{
        console.log(new Error('something when wrong (await - async)'));
    }
}

displayCommits();

console.log('After (await - async)');

function getUser3(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fetching user (await - async)');
            resolve({id:id,  gitHubUsername: 'amitkinor'});
        }, 2000);
    })    
}

function getRepositories3(gitHubUsername){
    console.log('fetching repos (await - async)');
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    })       
}

function getCommits3(repo){
    console.log('fetching commits (await - async)' );
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('here are the commits (await - async)');
        }, 2000);
    })
}