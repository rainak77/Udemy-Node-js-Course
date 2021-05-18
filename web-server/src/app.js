const path = require('path');

const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.static(path.join(publicDirPath)));


app.get('', (req, res) => {
    res.render('index');
});

/**When someone tries to get something at a specific route, we set that up 
 using a method on app.It is app dot Get this, lets us configure what the 
 server should do when someone tries to get the resource at a specific route*/
// app.get('', (req, res) => {
//     res.send('<h1>hello node js</h1>');
// });

/* And it also takes in a function.Now the function is where we describe 
what we want to do when someone visits this particular route. */
// app.get('/help', (req, res) => {
//     res.send({
//         name: 'arif',
//         roll: '119'
//     });
// });

/*Now, this function gets called with two very important arguments.
The first is an object containing information about the incoming 
request to the server.This is commonly called REQUEST, which is short for 
req.You'll see this used throughout the documentation.The other 
argument is the response. So this contains a bunch of methods allowing us 
to customize what we're going to send back to the requester. */

// app.get('/about', (req, res) => {
//     res.send('<h1>About page node js</h1>');
// });
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'it is raining',
        location: 'helsinki'
    });
});

/*Now the other optional argument we can pass to the listen method is a 
callback function, which just runs when the server is up and running. */
app.listen(3000, () => {
    console.log('server is up on port 3000');
});