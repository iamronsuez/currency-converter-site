import React from 'react'
import {Headline, Calculator} from '../components'
import {MainLayout} from '../layouts'

const Index = () => {
  return (
    <MainLayout>
      <div className="row">
        <div className="col-md-8">
          <Headline
            title="Cambio Facil"
            subtitle="Envia tus pesos chilenos al antiguo imperio Romano sin confusión con la ayuda de esta herramienta de conversión de unidades. " />
        </div>
        <div className="col-md-4">
          <Calculator rate={1} converterType='extended' />
        </div>
      </div>
    </MainLayout>
  )
}

export default Index
