import React, {Component} from 'react'
import ImageLightBox from '../utils/ImageLightBox'

class ApartmentDetlaiImg extends Component {

    state = {
        lightbox:false,
        imagePos:0,
        lightboxImages:[]
    }

    componentDidMount() {
        if(this.props.detail.images.length>0) {
            let lightboxImages = [];

            this.props.detail.images.forEach(item => { 
                lightboxImages.push(item.url)
            })

            this.setState({ 
                lightboxImages
            })
        }
    }

    renderCardImage = (images) => {
     if(images.length>0) {
         return images[0].url
      }
      
      else { 
        return `/images/image_not_availble.png`   
      }
    }

    handleLightBox = (pos) => {
        if(this.state.lightboxImages.length>0) {
            this.setState ( {
                lightbox:true,
                imagePos:pos
            })
        }

    }

    showThumbs = () => (
        this.state.lightboxImages.map((item, i) =>( 
            
            i>0 ?
             <div
             key={i}
             onClick={() => this.handleLightBox(i)}
             className="thumb"
             style={{ background:`url(${item}) no-repeat`}} 
             > 

             </div>

            :null

        ))

    )

    handleLightBoxClose = () => {
        this.setState ({
            lightbox:false

        })
    }



    render () {
        const {detail} = this.props
        return (
            <div className="apartment_image_container">
            
              <div className="main_pic">
               <div 
               style={{background:`url(${this.renderCardImage(detail.images)})`}}
               onClick={() => this.handleLightBox(0)}
               >

               </div>
              </div>
              <div className="main_thumbs">
              {this.showThumbs(detail)}
              </div>
               {
                   this.state.lightbox? 
                   <ImageLightBox
                   id={detail.id}
                   images={this.state.lightboxImages}
                   open={this.state.open}
                   pos={this.state.imagePos}
                   onclose={()=> this.handleLightBoxClose() }
                   /> 
                   :null
               }
            </div>

        )
    }




}

export default ApartmentDetlaiImg


