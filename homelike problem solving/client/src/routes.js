import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Layout from './HOC/Layout'
import Shop from './Shop/index'
import ApartmentDetail from './Product/index'


const Routes = () => {
      return (
            <div>
                <Layout>
                <Switch>

                    
                    <Route path="/" exact component={Shop} />
                    <Route path="/apartment_detail/:id" exact component={ApartmentDetail} />
                    {/* <Route path="/shop" exact component={Shop} /> */}

                </Switch>
                </Layout>

            </div>
      )
}

export default Routes