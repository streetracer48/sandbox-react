import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import MyButton from './button'
import {connect} from 'react-redux'
 
class Card extends Component {
    renderCardImage(images){
        if(images.length > 0){
            return images[0].url
        } else {
            return '/images/image_not_availble.png'
        }
    }
 
     render () {
        const props = this.props;
          return(
              <div className={`card_item_wrapper ${props.grid}`}>
              
                <div className="image"
                 style={{
                      background:`url(${this.renderCardImage(props.images)}) no-repeat`
                 }}
                >
                </div>
                <div className="action_container">
                 <div className="tags">
                 <div className="brand">{props.brand.name}</div>
                 <div className="name">{props.name}</div>
                 <div className="name">${props.price}</div>
                 </div>
                </div>
                { props.grid ?
                        <div className="description">
                                    kshdjshdsdjshd
                        </div>
                        :null
                    }
                    
              <div className="actions">

              <div className="button_wrapp">
                            <MyButton
                                type="default"
                                altClass="card_link"
                                title="View Apartment"
                                linkTo={`/apartment_detail/${props._id}`}
                                addStyles={{
                                    margin: '10px 0 0 0'
                                }}
                            />
                        </div>
                        <div className="button_wrapp">
                            <MyButton
                                type="bag_link"
                              
                            />
                        </div>

              
              </div>
              </div>


          )
     }

}



export default connect() (withRouter(Card))