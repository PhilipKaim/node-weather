console.log('starting app');

setTimeout(() => {
    console.log('inside callback');
    
}, 2000);

setTimeout(() => {
    console.log('no timeout callback');
    
}, 0);

console.log('finishing app');
