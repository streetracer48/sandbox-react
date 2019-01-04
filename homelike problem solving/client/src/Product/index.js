import React, {Component} from 'react'
import ApartmentInfo from './apartmentMap'
import AprtmentDetImg from './apartmentDetImg'
import PageTop from '../utils/pageTop'
import Loading from '../utils/loading'
import {connect} from 'react-redux'
import {getApartmentsDetails, clearApartmentDetail} from '../actions/apartment_action'

class ApartmentDetail extends Component {

   
    state = {
        address : {
            city:'Dhaka',
            street:'Nukunja #2'
         }
    }
    componentDidMount() { 
        const id = this.props.match.params.id
        console.log(id)
        this.props.dispatch(getApartmentsDetails(id)).then(res => {
            if(!this.props.apartment.apartmentDetail) { 
                this.props.history.push('/')
            }
        })
    }

    componentWillMount() {
        this.props.dispatch(clearApartmentDetail())
    }

  

    render () {
       
        return (
            <div>
                <PageTop
                title="Apartment Detail"
                />

                 <div className="container">
                 
                   {this.props.apartment.apartmentDetail ? 
                    <div className="apartment_detail_wrapper">
                      <div className="left">
                       <div style={{width:'500px'}}>
                       <AprtmentDetImg
                       detail={this.props.apartment.apartmentDetail}
                        />
                       </div>
                      </div>

                      <div className="right">
                        <ApartmentInfo
                      location={this.state.address}
                        />
                      </div>


                    </div>
                   
                   :<Loading/>
                   }
                 </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {

    return { 
         apartment:state.apartment
    }

}

export default connect(mapStateToProps) (ApartmentDetail)