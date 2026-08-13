import {useEffect, useState} from "react";

export function APITester() {

  interface Product{
    id : number;
    title : string;
  }

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
      getProductData()
  }, [])

  async function getProductData(){
      const response = await fetch('https://dummyjson.com/products')
      const json = await response.json();
      setProducts(json.products)
  }

  function deleteItem(id: number) {
      const updateProducts = products.filter(product => product.id !== id)
      setProducts(updateProducts)
  }

  return (<>
      <div>
        {
          products.map(p => (
              <div key={p.id}>
                <h1>{p.title}</h1>
                <p>{p.description}</p>
                <button onClick={() => {deleteItem(p.id)}}>Delete product</button>
              </div>
          ))
        }
      </div>
  </>);
}
