

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ItemPage = () => {
  const router = useRouter();
  const { id } = router.query; 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      
      fetch('/db.json')
        .then((res) => res.json())
        .then((data) => {
          const foundProduct = data.products.find((prod) => prod.id === parseInt(id));
          setProduct(foundProduct);
        });
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Available Sizes: {product.availableSizes.join(', ')}</p>
      <p>{product.isFreeShipping ? 'Free Shipping Available' : 'No Free Shipping'}</p>
    </div>
  );
};

export default ItemPage;

