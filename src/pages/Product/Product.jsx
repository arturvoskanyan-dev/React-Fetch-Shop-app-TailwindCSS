import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {ProductItem} from "../index"

const Product = () => {
    const [data, setData] = useState([])
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=1&skip=${+id - 1}&select`)
            .then(res => res.json())
            .then(res => setData(res.products));
    }, [])

    return (
        <div className='m-10'>
            {
                data.map((d) => {
                    return (
                        <ProductItem 
                            key={d.id}
                            images={d.images[0]}
                            description={d.description}
                            price={d.price}
                            rating={d.rating}
                            category={d.category}
                            stock={d.stock}
                            brand={d.brand}
                            dw={d.dimensions.width}
                            dh={d.dimensions.height}
                            dd={d.dimensions.depth}
                            warrantyInformation={d.warrantyInformation}
                            shippingInformation={d.shippingInformation}
                            policy={d.returnPolicy}
                            md={d.meta.createdAt}
                            mu={d.meta.updatedAt}
                            db={d.meta.barcode}
                        />
                    )
                })
            }
        </div>
    )
}

export default Product
