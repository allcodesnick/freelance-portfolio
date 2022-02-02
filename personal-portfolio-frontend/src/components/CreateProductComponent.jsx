import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            product_name: '',
            product_status: '',
            product_description: ''
        }
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeProducStatusHandler = this.changeProducStatusHandler.bind(this);
        this.changeProductDescriptionHandler = this.changeProductDescriptionHandler.bind(this);
    }

    changeProductNameHandler = (event) => {
        this.setState({product_name: event.target.event})
    }

    changeProducStatusHandler = (event) => {
        this.setState({product_status: event.target.event})
    }

    changeProductDescriptionHandler = (event) => {
        this.setState({product_description: event.target.event})
    }

    componentDidMount(){
        if(this.state.id === '/add-product'){
            return
        }else{
            ProductService.getProductsById(this.state.id).then( (res) => {
                let product = res.data;
                this.setState({
                    product_name : product.product_name,
                    product_status : product.product_status,
                    product_description : product.product_description

                });
            })
        }
    }
    
    // Not saving
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {
            product_name: this.state.product_name,
            product_status: this.state.product_status,
            product_description: this.state.product_description
        };
        console.log('porduct =>' + JSON.stringify(product))

        if(this.state.id === '/add-product'){
            ProductService.createProduct(product).then(res =>{
                this.props.history.push('products')
            })
        } else{
            ProductService.updateProduct(product, this.state.id).then( res =>{
                this.props.history.push('products')
            })
        }
    }

    cancel(){
        this.props.history.push(`/`)
    }

    //Title only shows "Update Product"
    getTitle(){
        if(this.state.id === '/add-product'){
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
                                                value={this.state.product_name} onChange={this.changeProductNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Status: </label>
                                            <input placeholder="Product status" name="productStatus" className="form-control" 
                                                value={this.state.product_status} onChange={this.changeProducStatusHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Description: </label>
                                            <input placeholder="Product Description" name="productDescritpion" className="form-control" 
                                                value={this.state.product_description} onChange={this.changeProductDescriptionHandler}/>
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