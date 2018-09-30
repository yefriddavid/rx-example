//const Rx = require('rxjs')

const LoadEnstances = require("./libs/Bundle/LoadEnstances")

const instances = LoadEnstances()
const { Start, Daemon } = instances

Daemon.subscribe((val) => {
  //console.log(val)
})


//Start()



