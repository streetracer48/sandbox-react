import React, {Component} from 'react'
import PageTop from '../utils/pageTop';
import {connect} from 'react-redux';
import {getCitysList, getProductsWoodList, getApartmentsList} from '../actions/apartment_action'
import {frets, price} from '../utils/fixed_categories'
import CollapseCheckbox from '../utils/collapseCheckbox'
import CollapseRadioBox from '../utils/collapseRadio'
import LoadMoreCards from './loadmorecards'


class HomeApartmentsList extends Component {
    state = {
        grid:'',
        limit:6,
        skip:0,
        filters:{
            brand:[],
            frets:[],
            wood:[],
            price:[]
        }
    }

    componentDidMount () {
         this.props.dispatch(getCitysList());
         this.props.dispatch(getProductsWoodList());
         
         this.props.dispatch(getApartmentsList(
             this.state.skip,
             this.state.limit,
             this.state.filters
         ));
    }

    handlePrice =(value) => {
        const data = price;
        let array=[];
        for(let key in data) {
            if(data[key]._id === parseInt(value,10)){
                array = data[key].array
            }
        }
        return array;
    }

    handleFilters = (filters, category) => {
        const newFilters = {...this.state.filters}
        newFilters[category] = filters;
        if(category ==="price"){
           let priceValues =this.handlePrice(filters);
           newFilters[category] = priceValues
        }

        this.showFilteredResult(newFilters)
        this.setState({
            filters: newFilters
        })
   console.log(newFilters);
    }

    showFilteredResult = (filters) => {
        this.props.dispatch(getApartmentsList(
            0,
            this.state.limit,
            filters
        )).then(() => {
            this.setState({
                skip:0
            })

        })

    }


LoadMoreCards = () => {
    let skip = this.state.skip + this.state.limit;
    this.props.dispatch(getApartmentsList(
        skip,
        this.state.limit,
        this.state.filters,
        this.props.apartments.toBook,

    )).then(() => {
        this.setState({
            skip
        })
    })
}



      render () {
          const apartments = this.props.apartments;
 
          return (

            <div>
                <PageTop title="Browse Apartment"/>
          <div className="container">
            <div className="book_wrapper">
             <div className="left">
             <CollapseCheckbox
             initState={true}
             title="Citys"
             list = {apartments.getCitys}
             handleFilters={(filters) => this.handleFilters(filters,'brand')}
             />
             <CollapseCheckbox
             initState={false}
             title="size"
             list = {frets}
             handleFilters={(filters) => this.handleFilters(filters,'frets')}
             />
             <CollapseCheckbox
             initState={false}
             title="Woods"
             list = {apartments.getWoods}
             handleFilters={(filters) => this.handleFilters(filters,'wood')}
             />
             <CollapseRadioBox
             initState={true}
             title="Price"
             list = {price}
             handleFilters={(filters) => this.handleFilters(filters,'price')}
             />
             
             </div>
             <div className="right">
               <div className="book_options">
                 <div className="book_grids clear">
                 Grid

                 </div>

                 <div style={{clear:'both'}}>
                  <LoadMoreCards
                  grid={this.state.grid}
                  limit={this.state.limit}
                  apartments={apartments.toBook}
                  size = {apartments.toBookSize}
                  loadMore={() => this.LoadMoreCards()}
                  
                  /> 

                 </div>


               </div>



                            
                    </div>
            </div>
          </div>
            </div>

          )
      }
}

const mapToStateProps = (state) => {
     return {
          apartments:state.apartment
     }
}


export default connect(mapToStateProps) (HomeApartmentsList)

