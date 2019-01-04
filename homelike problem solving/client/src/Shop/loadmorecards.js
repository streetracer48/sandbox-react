import React from 'react'
import CardBlockShop from '../utils/cardBlockShop'

const LoadMore = (props) => {
     return (
        
         <div>
              <div>
                  <CardBlockShop
                   grid={props.grid}
                   list= {props.apartments}
                  />
              </div>
              {props.size> 0 && props.size >= props.limit?
              <div className="load_more_container">
              <span onClick= {() => props.loadMore()}>
                  LoadMore
              </span>

              </div>
              :null
            }
       
          
         </div>
          
        

     );

};

export default LoadMore