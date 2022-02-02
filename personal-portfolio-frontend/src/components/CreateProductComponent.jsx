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
    }
    componentDidMount(){
        if(this.state.id === '_add'){
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

    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {
            product_name: this.state.product_name,
            product_status: this.state.product_status,
            product_description: this.state.product_description
        };
        console.log('porduct =>' + JSON.stringify(product))

        if(this.state.id === '_add'){
            ProductService.createProduct(product).then(res =>{
                this.props.history.push('products')
            })
        } else{
            ProductService.updateProduct(product, this.state.id).then( res =>{
                this.props.history.push('products')
            })
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default CreateProductComponent;