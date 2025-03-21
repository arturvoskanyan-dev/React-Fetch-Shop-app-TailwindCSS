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
        <div>
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
                        // <section key={d.id}>
                        //     <div className="flex justify-evenly p-6">
                        //         <div>
                        //             <img src={d.images[0]} className='w-[400px]' />
                        //         </div>
                        //             <table className='flex flex-col gap-8 max-w-1/2 border-1 border-gray-300'>
                        //                 <tbody>
                        //                     <tr className='bg-gray-300'>
                        //                         <td>Description:</td>
                        //                         <td>{d.description}</td>
                        //                     </tr>
                        //                     <tr >
                        //                         <td>Price:</td>
                        //                         <td>{d.price}</td>
                        //                     </tr>
                        //                     <tr className='bg-gray-300'>
                        //                         <td >Rating:</td>
                        //                         <td>{d.rating}</td>
                        //                     </tr>
                        //                     <tr>
                        //                         <td >Category:</td>
                        //                         <td>{d.category}</td>
                        //                     </tr>
                        //                     <tr className='bg-gray-300'>
                        //                         <td >Stock:</td>
                        //                         <td>{d.stock}</td>
                        //                     </tr>
                        //                     <tr>
                        //                         <td>Brand:</td>
                        //                         <td>{d.brand}</td>
                        //                     </tr>
                        //                     <tr className='bg-gray-300'>
                        //                         <td>Width:</td>
                        //                         <td>{d.dimensions.width}</td>
                        //                     </tr>
                        //                     <tr>
                        //                         <td>Height:</td>
                        //                         <td>{d.dimensions.height}</td>
                        //                     </tr>
                        //                     <tr className='bg-gray-300'>
                        //                         <td>Depth:</td>
                        //                         <td>{d.dimensions.depth}</td>
                        //                     </tr>
                        //                     <tr>
                        //                         <td>WarrantyInformation:</td>
                        //                         <td>{d.warrantyInformation}</td>
                        //                     </tr>
                        //                     <tr className='bg-gray-300'>
                        //                         <td>ShippingInformation:</td>
                        //                         <td>{d.shippingInformation}</td>
                        //                     </tr>
                        //                     <tr>
                        //                         <td>ReturnPolicy:</td>
                        //                         <td>{d.returnPolicy}</td>
                        //                     </tr>
                        //                     <tr className='bg-gray-300'>
                        //                         <td>CreatedAt:</td>
                        //                         <td>{d.meta.createdAt}</td>
                        //                     </tr>
                        //                     <tr>
                        //                         <td>UpdatedAt:</td>
                        //                         <td>{d.meta.updatedAt}</td>
                        //                     </tr>
                        //                     <tr className='bg-gray-300'>
                        //                         <td>Barcode:</td>
                        //                         <td>{d.meta.barcode}</td>
                        //                     </tr>
                        //                 </tbody>
                        //             </table>
                        //         </div>
                        // </section>
                    )
                })
            }
        </div>
    )
}

export default Product
