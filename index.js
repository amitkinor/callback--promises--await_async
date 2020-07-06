

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

