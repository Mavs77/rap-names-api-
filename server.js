const express = require('express')
const app = express()
const PORT = 8000
const rappers = {
'21 savage':{
    'age':29, 
    'birthName':'Shéyaa Bin Abraham-Joseph', 
    'birthLocation': 'London, England', 
},
'snoop dogg':{
    'age':52, 
    'birthName':'Calvin Cordozar Broadus Jr.', 
    'birthLocation': 'Long Beach, CA', 
}, 
'unknown':{
    'age':404, 
    'birthName':'unknown', 
    'birthLocation': 'unknown', 
}
}

//get is a method that comes with express. Structured like an event listener
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const rapperName = req.params.name.toLowerCase();
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    } else {
        res.json(rappers['unknown'])
    }
    ; 
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})