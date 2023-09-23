import Layout from "../../Components/Layout"
import React from 'react'
import {useState,useEffect} from 'react'
import Card from '../../Components/Card'
import ProductDetail from "../../Components/ProductDetail"

function Product (){
    const [items, setItems] = useState(null)
  useEffect(() => {
    
    fetch('https://kaoxdc.pythonanywhere.com/api/modular/')
   
    .then(response => response.json())
    
    .then(data => console.log(setItems(data)) )
    
  }, [])
  
  return (
    <>
      <Layout>
        <h1 className='text-xl underline'>Products</h1>
        <br/>

        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
                items?.map(item => (
                    <Card key={item.id} data = {item}/>
                ))
            }

        </div>
        <ProductDetail/>
      </Layout>
    </>
  )
}

export default Product