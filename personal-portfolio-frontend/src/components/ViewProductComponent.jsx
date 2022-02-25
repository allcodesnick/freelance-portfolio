import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class ViewProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
        this.return = this.return.bind(this);
    }
    componentDidMount() {
        ProductService.getProductsById(this.state.id).then( res => {
            this.setState({product: res.data});
        })
    }

    return(){
        this.props.history.push(`/services`)
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
                            <div> { this.state.product.productName }</div>
                        </div>
                        <div className = "row">
                            <label> Product Status: </label>
                            <div> { this.state.product.productStatus }</div>
                        </div>
                        <div className = "row">
                            <label> Product Description: </label>
                            <div> { this.state.product.productDescription }</div>
                        </div>
                        <div className = "row">
                            <label> Product Status: </label>
                            <div> ${ this.state.product.productPrice }</div>
                        </div>
                        <div className = "row">
                            <label> Product Description: </label>
                            <div> { this.state.product.productTimeline } Days</div>
                        </div>
                    </div>
                    <button className="btn btn-danger" onClick={this.return.bind(this)} style={{marginLeft: "10px", marginBottom:"10px"}}>Return</button>
                </div>
                
            </div>
        );
    }
}

export default ViewProductComponent;