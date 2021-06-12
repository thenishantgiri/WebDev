const express = require('express')

//by calling express(), we get an instance of our server
//usually we write "const server = express()" or "const app = express()"
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1 style="color: lightcoral">Hello World</h1>')
})


//listen function starts our server on a certain port (network port)
//usually we use ports greater than 1024, 0-1024 ports are reserved for specific task
//when we are developing must try to use port greater than 1024

//the second argument is a callback function, which runs after our server has started
// to access this port: 0.0.0.0:4444 or 127.0.0.1:4444
app.listen(4444,()=>{
    console.log('server started on http://localhost:4444')
})