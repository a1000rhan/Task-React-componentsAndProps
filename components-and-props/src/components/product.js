import React from 'react'
import Product from './productList'
import productList from '../Products'

export default function product() {
    const productFile=productList.map(prod=>(<div className="container">
        <img className="img" src={prod.image} />
     <div> <p className="font">{prod.name}</p>
        <p className="price">{prod.price} USD</p></div>
    </div>))
    return (
        <div>
           <div className="border"> {productFile}</div>
        </div>
    )
}
