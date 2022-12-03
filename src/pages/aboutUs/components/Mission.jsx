import React from 'react'
import Image from 'next/image'

export const Mission = () => {
  return (
    <div className='relative flex my-10 h-64'>
      <div className='absolute left-0 w-1/4 h-full'>
        <figure>
            <Image 
              src='/images/aboutUs/cocoPrueba.jpg' 
              layout="fill"
              objectFit="cover" />
        </figure>
      </div>
      <div className='texto-principal-color absolute grid place-content-center w-2/3 right-0'>
        <div className='titulo align-middle pb-6 mr-16 text-right'>
          <strong className='text-xl'>Nuestra Mision</strong>
        </div>
        <p className='texto-ejemplo text-right'>
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
    </div>
  )
}
