import React , {useContext} from 'react'
import {ShopContext} from '../Context/ShopContext.js';
import {useParams} from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum.js';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.js';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.js';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.js';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product?.find((e)=> e.id === Number(productId));
  console.log(product)
  return (
   <>
    <div>
      
      <Breadcrum category={product?.category} name={product?.name}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts category={product?.category}/>
    </div>
   </>
  )
}

export default Product