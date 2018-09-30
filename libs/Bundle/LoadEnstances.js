const services = require("./Services")
const Delivery = require("./Delivery")
const drivers = require("../Drivers/CombineDrivers")
const { Facebook } = drivers
const { Channels } = services()

const { Observable, Subject, ReplaySubject, from, of, range, interval } = require('rxjs')
const { map, filter, switchMap, takeUntil } = require('rxjs/operators');


const LoadInstances = () => {
	const instances = new Map()
	const ids = new Map()
  const getInstance = id => instances.get(id)
  const getId = instance => ids.get(instance)
  let currentChannels = []
  const source = interval(4000) //cada 10 segundos parametrizable

	const removeIntance = _id => {
    const instance = getInstance(_id)
		ids.delete(instance)
		instances.delete(_id)
	}

	const setIntance = (instance, _id) => {
		instances.set(_id, instance)
		ids.set(instance, _id)
	}

  const refreshInstances = channels => {
    const updateChannels = channels.filter(item => !currentChannels.includes(item))
    const removeChannels = currentChannels.filter(item => !channels.includes(item))

    updateChannels.map((channel, index) => {
      const { instance } = drivers[channel.type](channel)
      const newInstance = instance.subscribe((message) => {
        console.log("delivery comienza aca", message)
        const { delivery } = Delivery(message)
        delivery.subscribe((val) => {
          console.log("el delivery entrego al api")
        })

        //const delivery = new Delivery(message)
      })
      setIntance(newInstance, `${channel.type}_${channel.id}`)
    })
    removeChannels.map((channel, index) => {
      const instance = getInstance(`${channel.type}_${channel.id}`)
      instance.unsubscribe()
      removeIntance(`${channel.type}_${channel.id}`)
    })
    currentChannels = channels
	}

  //cargamos las instancias iniciales
  Channels.subscribe((channels) => {
    refreshInstances(channels)
  })

  const Daemon = source.do(() => {
    //console.log("sss")
  }).map((intervalId) => {
    Channels.subscribe((channels) => {
      refreshInstances([channels[1]])
    }, () => {
      //console.log("error")
    })
    return intervalId
  })

	return ({
    Daemon
	})
}





module.exports = LoadInstances
