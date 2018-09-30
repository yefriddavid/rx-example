const request = require('request')
const { Observable, interval } = require('rxjs')
const rxRequest = require('universal-rx-request')
//const { Observable } = require('rxjs/Observable')
//const 'rxjs/add/observable/of'

rxRequest.importRxExtensions();


const fetchContent = function(url) {
    return Observable.create(function (observer) {
        request(url, function (error, response, body) {
            if (error) { observer.onError(); }
            else { observer.onNext({response: response, body: body }); }
            observer.onCompleted();
        })
    });
}

const Services = () => {

  const channels = [
    {
			id: 1,
			enabled: false,
			type: "Facebook"
    },
    {
			id: 2,
			enabled: true,
			type: "Facebook"
    }
  ]

    const Channels = rxRequest({ method: 'get', url: 'https://api.ipify.org?format=json' })
  //.mapToAction({ type: 'get_my_ip' })
    .map(() => {
      //throw new Error('too high!')
      return channels
      return new Error("sssss")
    })

  const SaveMessage = rxRequest({ method: 'get', url: 'https://api.ipify.org?format=json' })
    .map(() => {
      return channels
    })
  //.mergeMapOnSucceedRequest(result => Observable.of({ ip: result.data.body.ip }))

	const Channelsa = () => {
    //console.log(interval)

    /*rxRequest({ method: 'get', url: 'https://api.ipify.org?format=json' })
      .mapToAction({ type: 'get_my_ip' })
      .mergeMapOnSucceedRequest(result => Observable.of({ ip: result.data.body.ip }))*/
    //.subscribe(console.log, console.error)

    /*interval(1000)
    .map(function() { return 'https://www.reddit.com/r/javascript.json' })
    .flatMap(fetchContent)
    .map(() => {

    })
      .subscribe();*/
    /*request('http://www.google.com', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      //console.log('body:', body); // Print the HTML for the Google homepage.
    })*/
    //return channels
		return false
	}

	return ({
    Channels,
    SaveMessage
	})

}


module.exports = Services
/*
 * Este componente sera el encargado de enviar la data al api crear los mensajes, si ya existe un mensaje previo lo consulta
 *
 *
 *
 *
 *
*/
