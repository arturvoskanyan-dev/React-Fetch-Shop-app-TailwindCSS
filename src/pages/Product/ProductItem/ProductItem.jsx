const ProductItem = ({ id, images, description, price, rating, category, stock, brand, 
    dw, dh, dd, warrantyInformation, shippingInformation, policy, md, mu, db, onBasket}) => {
    return (
        <section>
            <div className="flex justify-evenly py-24">
                <div>
                    <img src={images} className='w-[400px]' />
                </div>
                <table className='flex flex-col gap-8 max-w-1/2 border-1 border-gray-300'>
                    <tbody>
                        <tr className='bg-gray-300'>
                            <td>Description:</td>
                            <td>{description}</td>
                        </tr>
                        <tr >
                            <td>Price:</td>
                            <td>{parseFloat(price)}</td>
                        </tr>
                        <tr className='bg-gray-300'>
                            <td >Rating:</td>
                            <td>{rating}</td>
                        </tr>
                        <tr>
                            <td >Category:</td>
                            <td>{category}</td>
                        </tr>
                        <tr className='bg-gray-300'>
                            <td >Stock:</td>
                            <td>{stock}</td>
                        </tr>
                        <tr>
                            <td>Brand:</td>
                            <td>{brand}</td>
                        </tr>
                        <tr className='bg-gray-300'>
                            <td>Width:</td>
                            <td>{dw}</td>
                        </tr>
                        <tr>
                            <td>Height:</td>
                            <td>{dh}</td>
                        </tr>
                        <tr className='bg-gray-300'>
                            <td>Depth:</td>
                            <td>{dd}</td>
                        </tr>
                        <tr>
                            <td>WarrantyInformation:</td>
                            <td>{warrantyInformation}</td>
                        </tr>
                        <tr className='bg-gray-300'>
                            <td>ShippingInformation:</td>
                            <td>{shippingInformation}</td>
                        </tr>
                        <tr>
                            <td>ReturnPolicy:</td>
                            <td>{policy}</td>
                        </tr>
                        <tr className='bg-gray-300'>
                            <td>CreatedAt:</td>
                            <td>{md}</td>
                        </tr>
                        <tr>
                            <td>UpdatedAt:</td>
                            <td>{mu}</td>
                        </tr>
                        <tr className='bg-gray-300'>
                            <td>Barcode:</td>
                            <td>{db}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='text-center'>
                <button className='bg-[#1ABCFE] text-white rounded-[12px] p-2 w-[120px] cursor-pointer transition-colors hover:bg-blue-500' 
                onClick={() => onBasket(id)}>
                    Buy
                </button>
            </div>
        </section>
    )
}

export default ProductItem
