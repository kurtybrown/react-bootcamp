import { MyAwesomeComp } from "./MyAwesomeComp";
import ItemCounter from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {productName: 'Nintendo', quantity: 1},
  {productName: 'PlayStation', quantity: 7},
  {productName: 'Xbox', quantity: 4},
]

export function FirstStepsApp () {

  return (
    <>
    <h1>Carrito de compras</h1>

    {itemsInCart.map( ({ productName, quantity }) => (
      <ItemCounter key={productName} name={productName} quantity={quantity} />
     ))}
    {/* <ItemCounter firstName="Nintendo" quantity={10} />
    <ItemCounter firstName="PlayStation" quantity={8} />
    <ItemCounter firstName="Xbox" quantity={7} /> */}

    {/* <MyAwesomeComp>
    </MyAwesomeComp> */}
    </>
  )
}
