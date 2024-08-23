// "use client";
// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const ItemPage = () => {
//   const {ItemDetails} = useParams(); 
//    const id = ItemDetails;
//   console.log(ItemDetails);
//   const [product, setProduct] = useState(null);

//   useEffect(() => { 
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch('/db.json');
//         const data = await response.json();
//         const foundProduct = data.products.find(
//           (prod) => prod.id === parseInt(id, 10)
//         );
//         setProduct(foundProduct);
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//       }
//     };
//       fetchProduct();   
//   }, [id]);

//   if(!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       <p>Available Sizes: {product.availableSizes.join(', ')}</p>
//       <p>{product.isFreeShipping ? 'Free Shipping Available' : 'No Free Shipping'}</p>
//     </div>
//   );
// };

// export default ItemPage;


"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ItemPage = () => {
  const { ItemDetails } = useParams();
  const id = ItemDetails;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/db.json');
        const data = await response.json();
        const foundProduct = data.products.find(
          (prod) => prod.id === parseInt(id, 10)
        );
        setProduct(foundProduct);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-10 bg-slate-300'>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Price</Label>
              <p>${product.price}</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="availableSizes">Available Sizes</Label>
              <Select>
                <SelectTrigger id="availableSizes">
                  <SelectValue placeholder={product.availableSizes.join(', ')} />
                </SelectTrigger>
                <SelectContent position="popper">
                  {product.availableSizes.map((size) => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="shipping">Shipping</Label>
              <p>{product.isFreeShipping ? 'Free Shipping Available' : 'No Free Shipping'} </p>
            </div>
          </div>
        </form>
       
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Buy Now</Button>
      </CardFooter>
    </Card>
    </div>
  );
};

export default ItemPage;
