
import type { GiphyRandomResponse, Gif } from "../data/giphy.response";

const API_KEY='DygewA0YMIdkAsX9VyXGuzVstnMQ8R2j'

// const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);


const createImageInsideDOM = (url:string) => {
      const gifElement = document.createElement('img')
      gifElement.src = url
      document.body.append(gifElement)
}

const getGiftUrl = async (): Promise<string> => {

  const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`)

  const {data}: GiphyRandomResponse = await response.json()

  return data.images.original.url
}

getGiftUrl().then(createImageInsideDOM);


// myRequest
// // .then(response => response.json()) //así es más legible 
// // .then(data => console.log(data))
//   .then(response => {
//     console.log(response);
//     // response.json().then((data: GiphyRandomResponse) => {
//     //   console.log(data);
//     //   const imgUrl = data.data.images.original.url
//     //   const gifElement = document.createElement('img')
//     //   gifElement.src = imgUrl
//     //   document.body.append(gifElement)
//     // })
//     response.json().then(({data}: GiphyRandomResponse) => { // al meter data entre llaves desestruralizamos data.data
//       const gifUrl = data.images.original.url
//       createImageInsideDOM(gifUrl)
//     })
//   })
//   .catch((error) => {
//     throw new Error(`Fallo en la conexión: ${error} `);
    
//   })
//   .finally(()=> {
//     console.log('Conectado');
    
//   })
