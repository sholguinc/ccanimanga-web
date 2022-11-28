import React from 'react'
import Image from 'next/image'

export const History = () => {
  return (
    <div className='flex container-2xl bg-gray-500 py-2 h-64'>
      <div className='texto-principal-color grid place-content-center w-2/3'>
        <div className='titulo align-middle ml-24 pb-6'>
          <strong className='text-xl'>Titulo de ejemplo</strong>
        </div>
        <div className='texto-ejemplo mx-16'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Curabitur sagittis elit sed lacus aliquet malesuada. 
          Fusce aliquet tincidunt ligula at sagittis. 
          Pellentesque a congue dui, sed faucibus ligula. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce aliquet tincidunt ligula at sagittis. 
          Pellentesque a congue dui, sed faucibus ligula. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className='relative m-0 w-1/3'>
        <figure>
            <Image 
              src='/images/aboutUs/cocoPrueba.jpg' 
              layout="fill"
              objectFit="cover" />
        </figure>
      </div>
    </div>
  )
}
