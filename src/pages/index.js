import React from 'react'
import {Headline, Calculator, ReceiverInfo} from '../components'
import {MainLayout} from '../layouts'

const Index = () => {
  return (
    <MainLayout>
      <div className="row">
        <div className="col-md-8">
          <Headline
            title="Asistente de cambios"
            subtitle="Bienvenido: Agente" />
        </div>
      </div>
      <div className="row">
      <div className="col-md-12">
          <Calculator rate={1} converterType='extended' />
        </div>
      </div>
    </MainLayout>
  )
}

export default Index
