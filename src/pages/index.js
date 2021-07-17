import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import {Headline, Calculator, ReceiverInfo} from '../components'
import {MainLayout} from '../layouts'

const Index = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <MainLayout>
      <div className="row">
        <div className="col-md-8">
          <Headline
            title="Asistente de cambios"
            subtitle={isAuthenticated ? "Bienvenido: " + user.email : "you should login"} />
        </div>
      </div>
      <div className="row">
      <div className="col-md-6">
          <Calculator rate={1} converterType='extended' />
        </div>
      </div>
    </MainLayout>
  )
}

export default Index
