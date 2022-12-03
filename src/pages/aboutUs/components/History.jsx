import React from 'react'
import Image from 'next/image'

export const History = () => {
  return (
    <div className='relative flex my-10 h-64'>
      <div className='texto-principal-color absolute grid place-content-center w-2/3'>
        <div className='titulo align-middle pb-6 ml-16'>
          <strong className='text-xl'>Nuestra Historia</strong>
        </div>
        <p className='texto-ejemplo'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Curabitur sagittis elit sed lacus aliquet malesuada. 
          Fusce aliquet tincidunt ligula at sagittis. 
          Pellentesque a congue dui, sed faucibus ligula. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce aliquet tincidunt ligula at sagittis. 
          Pellentesque a congue dui, sed faucibus ligula. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='absolute right-0 w-1/4 h-full'>
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
