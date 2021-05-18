const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=0169fd2eb969fc509c4b6567a8ab58ea&query=45,-75';

const request = http.request(url, (response) => {
    /* We can start this process by using response on, response.on()
     is a function and it allows us to register a event handler. */

    let data = '';

    response.on('data', (chunk) => {
        /* So chunk dot tostring to convert the buffer to a string. */
        data = data + chunk.toString();
    });
    /*
    Now, the other thing we're going to need to do in here is figure 
    out when we're done and we can do that using another call to response
    on here We are waiting for the end event. 
     
     When things are over, this callback function is going to run and 
     it doesn't get any arguments.
     */
    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});
request.on('error', (error) => {
    console.log('Error Desc: ', error);
});

request.end();