import React from 'react'
import { SEO } from '../../components'
import { Culture } from './components/Culture'
import { History } from './components/History'
import { Mission } from './components/Mission'
import { Title } from './components/Title'
import { UNI } from './components/UNI'
import { Vision } from './components/Vision'

export const AboutUs = () => {
  return (
    <div>
    <SEO pageTitle="Acerca de Nosotros - CCAM" pageDescription="Informacion acerca del CCAM"></SEO>
        <Title/>
        <History/>
        <Mission/>
        <Vision/>
        <Culture/>
        <UNI/>
    </div>
  )
}
