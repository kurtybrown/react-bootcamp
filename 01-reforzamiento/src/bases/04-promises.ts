

const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
    // reject('No hay dinero')
  }, 2000);
})

myPromise.then( money => {
  console.log(`Tengo mi dinero: ${money}`);
}).catch(reason => {
  console.warn(reason)
}).finally(() => {
  console.log('Pase lo que pase, sigo con mi vida');
})