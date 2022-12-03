import React from 'react'
import Image from 'next/image'

export const Title = () => {
  return (
    <div className='2xl:container mx-auto h-96 overflow-y-hidden'>
      <h1 className='relative h-full m-0'>
        <figure className='m-0 '>
          <Image
            src='/images/aboutUs/cocoPrueba.jpg'
            layout='fill'
            objectFit='cover'
            alt=''
          />
        </figure>
        <div className='absolute w-full h-full flex items-center justify-center'>
          <p className='font-myFont font-bold text-5xl'>
            Acerca de Nosotros
          </p>
        </div>
      </h1>
    </div>
  )
}
