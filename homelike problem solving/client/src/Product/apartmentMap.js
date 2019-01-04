import React, {Component}from 'react'
import {MapWithAGoCode} from '../utils/googleMap'

    class ApartmentMap extends Component {

        render () { 

            const location = this.props.location;


            return (
            <div className="apartment_map_container">
                    <MapWithAGoCode
           googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzZODMGtUsSH4MH9rnjFQEuoc85BU6Ddw&v=3.exp&libraries=geometry,drawing,places"
           loadingElement={<div style={{ height: `100%` }} />}
           containerElement={<div style={{ height: `450px` }} />}
           mapElement={<div style={{ height: `100%` }} />}
           location ={location}
         />
                </div>
            )

        }

     
}

export default ApartmentMap