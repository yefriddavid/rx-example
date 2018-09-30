const { Observable, Subject, ReplaySubject, from, of, range, interval } = require('rxjs')
const { map, filter, switchMap, mapTo } = require('rxjs/operators');

range(1, 10)
  .pipe(filter(x => x % 2 === 1), map(x => x + x))
  .subscribe(x => console.log(x))


const source = interval(1000)

const dd = source.pipe(switchMap((val) => {
  console.log("aca proceso")
  return of(val)
}))


dd.subscribe((val) => {
  console.log("aca me lleda el resultado")
  console.log(val)
})

//console.log(source)


//const subscribe = source.subscribe(val => console.log(val))
  /*const subscribe = source.switchMap((val => {
  Observable.map([1,2,3])
})


Subject.subscribe((val) => {
  console.log(val)
})*/

