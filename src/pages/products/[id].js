import React, { useContext } from 'react'
import Center from '../../../components/Center'
import Header from '../../../components/Header'
import { mongooseConnect } from '../../../lib/mongoose'
import Product from '../../../models/Product'
import ProductImages from '../../../components/ProductImages'
import CartIcon from '../../../icons/CartIcon'
import { CartContext } from '../../../components/CartContext'

const ProductsInfo = ({product}) => {

    const {addProducts} = useContext(CartContext)

    // console.log(product)
  return (
    <div>
        <Header />
        <Center>
            <div className='flex flex-col md:flex-row gap-7 mt-10 p-2 md:p-10'>
                
                    <div className='p-4  md:w-2/5 bg-white rounded-lg md:p-8 '>
                        <ProductImages images={product.images} />
                    </div>
                
                
                <div className=' md:w-3/5'>
                    <p className=' text-2xl font-bold py-8'>
                        {product.title}
                    </p>
                    <p className=' text-sm text-gray-600'>
                        {product.description}
                    </p>
                    <div className=' mt-5 flex gap-4 items-center'>
                        <p className=' font-semibold'>
                            {product.price}
                        </p>
                        <button className='btn-blue' onClick={()=> addProducts(product._id)}>
                            <CartIcon />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </Center>
    </div>
  )
}

export default ProductsInfo

export async function getServerSideProps(context){

    // console.log(context)
    await mongooseConnect()
    const {id} = context.query

    const product = await Product.findById(id)

    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    }
}