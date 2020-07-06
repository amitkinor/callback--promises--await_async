const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Asynco op 1');
        resolve(1);
        //reject(new Error('p1 has problems'));
    }, 2000);
});

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Asynco op 2');
        resolve(2);
        //reject(new Error('p2 has problems'));
    }, 2000);
});

Promise.race([p1,p2])
    .then(result => console.log(result))
    .catch(err => console.log(err));