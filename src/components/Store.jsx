import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";


const Store = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    const fetchedProducts = async() => {
      try {
        const response = await fetch('/products.json');
        if(!response.ok){
          throw new Error("Failed to fetch products data")
        }
        const data = await response.json();
        setProducts(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchedProducts();
  },[])
  return (
    <section className='bg-white py-8'>
        <h2 className='text-2xl font-semibold pl-6 pt-5'>Our Video Production Services</h2>
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {
            products.map((product) => {
              <div key={product.id} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                <a href="#">
                  <img src={product.image} alt="" className="hover:grow hover:shadow-lg" />
                </a>
                <div className="pt-3 flex items-center justify-between">
                  <p>{product.name}</p>
                  <FaRegHeart className="h-6 w-6 text-gray-500 hover:text-black"/>
                </div>
                <p className="pt-1 text-gray-900">{product.price}</p>
              </div>
            })
          }
        </div>
    </section>
  )
}

export default Store