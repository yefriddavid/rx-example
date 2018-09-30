const services = require("./Services")
//const { interval, Observable } = require('rxjs')
const { Observable } = require('rxjs')

const { SaveMessage } = services()

//const BaseDriver = require("../Utils/BaseDriver")
//const { create } = require('rxjs/operators');

const Delivery = (message) => {


  hello = (e) => {
    console.log("the world is fantastic", e)
  }

  const delivery = Observable.create((observer) => {
    //setTimeout(function () {
    //console.log(SaveMessage)

    //consultar si el message ya tiene hilo


    SaveMessage.subscribe((val) => {
      observer.next({messagea: "el delivery termino!!", message})
    })

    //}, 1000)

  })
  return ({
    delivery
  })
}

module.exports = Delivery
