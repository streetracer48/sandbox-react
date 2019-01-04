import React, {Component} from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

class Footer extends Component {
     render () {
          return (
               <footer>
                   <div className="bck_b_dark">
                   <div className="container">
                    <div className="logo">
                    Waves
                    </div>
                    <div className="wrapper">
                     <div className="left">
                     <h2>Contact Information</h2>
                     <div className="business_nfo">
                     <div className="tag">
                       <FontAwesomeIcon
                       icon={faCompass}
                       className="icon"
                       />
                       <div className="nfo">
                       <div>Anowar Tower</div>
                       <div>House 34 uttara dhaka</div>
                       </div>
                       
                     </div>
                     <div className="tag">
                       <FontAwesomeIcon
                       icon={faPhone}
                       className="icon"
                       />
                       <div className="nfo">
                       <div>Phone</div>
                       <div>345343245432</div>
                       </div>
                       
                     </div>
                     <div className="tag">
                       <FontAwesomeIcon
                       icon={faClock}
                       className="icon"
                       />
                       <div className="nfo">
                       <div>Working Hours</div>
                       <div>Mon-sun /9am -8am</div>
                       </div>
                       
                     </div>
                     <div className="tag">
                       <FontAwesomeIcon
                       icon={faEnvelope}
                       className="icon"
                       />
                       <div className="nfo">
                       <div>Email</div>
                       <div>info@gmail.com</div>
                       </div>
                       
                     </div>
                     </div>
                     </div>
                     <div className="left">
                     <h2>
                         be the first to know
                     </h2>
                      <div>
                          <div>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum excepturi, vel nam possimus asperiores dolorum.
                          </div>
                      </div>

                     </div>
                    </div>
                   </div>
                   </div>
               </footer>
          )
     }
}

export default Footer