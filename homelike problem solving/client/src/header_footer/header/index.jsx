import React, {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


class Header extends Component {

     state = {
          page:[
                {
                     name:'Home',
                     linkTo:'/',
                     public:true
                },
                {
                     name:'Guitars',
                     linkTo:'/shop',
                     public:true
                }
          ],
          user:[
                {
                     name:'My Cart',
                     linkTo:'/user/cart',
                     public:false
                },
                {
                     name:'Log in',
                     linkTo:'/register_login',
                     public:true
                },
                {
                     name:'Log Out',
                     linkTo:'/user/logout',
                     public:false
                },
          ]
           
     }






    


     render () {
          return (
               <header>
                   <div className="bck_b_light">
                   <div className="container">
                    <div className="left">
                     <div className="logo">
                     Homelike
                     </div>
                    </div>
                    <div className="right">
                    <div className="top">
                
                    </div>
                    <div className="bottom">
                 
                    </div>
                    </div>
                   </div>
                   </div>

               </header>
          )
     }
}

function mapStateToProps(state) {
      return {
            user:state.user
      }
}

export default connect(mapStateToProps)(withRouter((Header)));