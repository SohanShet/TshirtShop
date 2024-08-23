
"use client";
import * as React from "react"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import products from "../../../../public/products"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselProducts() {
  const [products, setProducts] = useState([])
  const router = useRouter();

  // const handleSeeButtonClick = (id) => {
  //   router.push(`/dashboard/${id}`);
  // };

  useEffect(() => {
    fetch('/db.json')  
      .then(response => response.json())
      .then(data => setProducts(data.products))
  }, [])

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {products.slice(0, 9).map((product, index) => (
          <CarouselItem key={product.id}>
            <div className="p-1 items-center">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {/* <span className="text-4xl font-semibold">{product.sku}</span>  */}
                  <img 
                    src={`products/${product.sku}_1.jpg`} 
                    alt={product.title}                   
                  />
                </CardContent>
                  <p className="flex justify-center font-serif">{product.title}</p>
                  <Link href={`/dashboard/${product.id}`}>
            
              <Button  >See</Button>
            
          </Link>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
