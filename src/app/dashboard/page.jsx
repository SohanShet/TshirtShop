import React from 'react'
import { CarouselProducts } from '@/components/userComponents/carousel/CarouselProducts'
export default function page() {
  return (
    <>
    <div className="flex min-h-screen flex-col items-center justify-between p-10 bg-slate-300">
    <div class="flex justify-center items-center" >
        <h6 className="text-4xl font-semibold">Our Selections</h6>
    </div>
    <div class="flex justify-center items-center" >
        <CarouselProducts></CarouselProducts>
    </div>
    </div>
    </>
  )
}
