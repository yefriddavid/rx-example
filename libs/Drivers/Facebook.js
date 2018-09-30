//console.log("facebook")

const { interval, Observable } = require('rxjs')
const BaseDriver = require("../Utils/BaseDriver")
const { create } = require('rxjs/operators');

class Facebooka extends BaseDriver {

	constructora(){
		console.log("hola mundo soy el driver de facebook")
	}

}


const Facebook = (opts) => {
  //const instance = interval(1000)
  const instance = Observable.create((observer) => {
    //obs.next({sss:"Sss"})
    setTimeout(function () {
      //observer.next(200);
      observer.next({message: "hola!!"})
    }, 6000)

  })
  //console.log(opts)


  //instance.pipe(takeWhile(() => true))
  //console.log(instance)
    /*instance.map((val) => {

    //return opts
    return val

  })*/
  //.takeUntil(this.destroy$)


  return ({
    instance,
    //stop: () => instance.unsubscribe()
  })
}

module.exports = Facebook
