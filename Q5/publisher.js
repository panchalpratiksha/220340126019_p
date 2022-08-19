var fs = require('fs')
var mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker:1883/')

var dataFile

fs.readFile("./data.json", function(err, data) {
    if(err) {
        console.log("connection refused")
    }
    else {
        dataFile = data
    }
})


client.on("connect", function(res, err) {
    if(err) {
        console.log(err)
    } else {
        console.log("Successfully connected")
        function pub() {
            client.publish("test", dataFile)
            console.log("Published")
        }
        setInterval(pub, 5000)
    }
})