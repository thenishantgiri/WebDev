const express = require('express')

//by calling express(), we get an instance of our server
//usually we write "const server = express()" or "const app = express()"
const app = express()

//this is going to parse the body of the request if it is of url encoded format
app.use(express.urlencoded({extended: true}))

//if we send a get request on path: '/greet', then the callback function is supposed to run
//the callback function has two arguments, request and response
//response object is something that we can send back to the user
//request object is used to get information about the request that has come to the server
app.get('/', (req, res) => {
    res.send('<h1 style="color: lightcoral">Hello World</h1>')
})

app.get('/greet', (req, res) => {
    let person = 'Guest'
    if (req.query.person)
        person = req.query.person
    res.send(`<h1 style="color: lightblue">Good Morning ${person}</h1>`)
})



//Path parameter - ':' makes the 'city' part variable in nature
// path param 1
app.get('/:city/:greeting', (req, res) => {
    res.send(`<h2 style="color: darkcyan">${req.params.greeting} to ${req.params.city}!</h2>`)
})

//path param 2
app.get('/:person/:action', (req, res) => {
    res.send(`<h2 style="color: darkcyan">Thank You ${req.params.person} for ${req.params.action}!</h2>`)
})
// only the path param 1 will execute, if we run path param 1 and path param 2 at the same time
// localhost:4444/{x}/{y} : we'll never reach at 'path param 2'


//if we make a 'post' request : the request goes to the body of the request, instead of query of url (like get request)
app.post('/greet', (req, res) => {
    let person = 'Guest'
    console.log(req.body)
    if (req.body.person)
        person = req.body.person
    res.send(`<h1 style="color: lightblue">Good Evening ${person}</h1>`)
})



//to send a file
app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/files/form.html')
})

//listen function starts our server on a certain port (network port)
//usually we use ports greater than 1024, 0-1024 ports are reserved for specific task
//when we are developing must try to use port greater than 1024

//the second argument is a callback function, which runs after our server has started
// to access this port: 0.0.0.0:4444 or 127.0.0.1:4444
app.listen(4444, () => {
    console.log('server started on http://localhost:4444')
})