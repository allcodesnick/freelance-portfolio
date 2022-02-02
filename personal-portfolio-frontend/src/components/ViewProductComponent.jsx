import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class ViewProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
    }
    componentDidMount() {
        ProductService.getProductsById(this.state.id).then( res => {
            this.setState({product: res.data});
        })
    }
    
    
    render() {
        return (
            <div>
                <br /><br />
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>  Product Name: </label>
                            <div> { this.state.product.product_name }</div>
                        </div>
                        <div className = "row">
                            <label> Product Status: </label>
                            <div> { this.state.product.product_status }</div>
                        </div>
                        <div className = "row">
                            <label> Product Description: </label>
                            <div> { this.state.product.product_description }</div>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default ViewProductComponent;