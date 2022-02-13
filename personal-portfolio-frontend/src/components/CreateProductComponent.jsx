import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            productName: '',
            productStatus: true,
            productDescription: "",
            productPrice: 0.00,
            productTimeline: 0
        }
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeProducStatusHandler = this.changeProducStatusHandler.bind(this);
        this.changeProductDescriptionHandler = this.changeProductDescriptionHandler.bind(this);
        this.changeProductPriceHandler = this.changeProductPriceHandler.bind(this);
        this.changeProductTimelineHandler = this.changeProductTimelineHandler.bind(this);
    }

    changeProductNameHandler = (event) => {
        this.setState({productName: event.target.event})
    }

    changeProducStatusHandler = (event) => {
        this.setState({productStatus: event.target.event})
    }

    changeProductDescriptionHandler = (event) => {
        this.setState({productDescription: event.target.event})
    }

    changeProductPriceHandler = (event) => {
        this.setState({productPrice: event.target.event})
    }

    changeProductTimelineHandler = (event) => {
        this.setState({productTimeline: event.target.event})
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            ProductService.getProductsById(this.state.id).then( (res) => {
                let product = res.data;
                this.setState({
                    productName : product.productName,
                    productStatus : product.productStatus,
                    productDescription : product.productDescription,
                    productPrice: product.productPrice,
                    productTimeline: product.productTimeline

                });
            })
        }
    }
    
    // Not saving
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {
            productName: this.state.productName,
            productStatus: this.state.productStatus,
            productNescription: this.state.productDescription,
            productPrice: this.state.productPrice,
            productTimeline: this.state.productTimeline
        };
        console.log('producct => ' + JSON.stringify(product));

        if(this.state.id === '_add'){
            ProductService.createProduct(product).then(res =>{
                this.props.history.push(`/products`)
            })
        } else{
            ProductService.updateProduct(product, this.state.id).then( res =>{
                this.props.history.push(`/products`)
            })
        }
    }

    cancel(){
        this.props.history.push(`/`)
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Product</h3>
        } else{
            return <h3 className="text-center">Update Product</h3>
        }
    }
    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Product Name" name="productName" className="form-control" 
                                                value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Status: </label>
                                            <input name="productStatus" className="form-control" 
                                                value={this.state.productStatus} onChange={this.changeProducStatusHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Description: </label>
                                            <input placeholder="Product Description" name="productDescritpion" className="form-control" 
                                                value={this.state.productDescription} onChange={this.changeProductDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Price: </label>
                                            <input placeholder="Product Price" name="productStatus" className="form-control" 
                                                value={this.state.productPrice} onChange={this.changeProductPriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Timeline: </label>
                                            <input name="productDescritpion" className="form-control" 
                                            value={this.state.productTimeline} onChange={this.changeProductTimelineHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                
            </div>
        );
    }
}

export default CreateProductComponent;