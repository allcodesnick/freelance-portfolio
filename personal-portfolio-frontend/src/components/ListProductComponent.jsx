import React, { Component } from 'react';
import ProductService from  '../services/ProductService';

class ListProjectComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            product:[]
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.viewProduct = this.viewProduct.bind(this);
    }

    addProduct(){
        this.props.history.push(`/add-products`)
    }

    viewProduct(id){
        this.props.history.push(`/products/${id}`);
    }

    editProduct(id){
        this.props.history.push(`/update-poducts/${id}`);
    }

    deleteProduct(id){
        ProductService.deleteProduct(id).then( res =>{
            this.setState({product: this.state.product.filter(product => product.id !== id)})
        })
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ product: res.data });
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Products</h1>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addProduct}>Add Product</button>
                </div>
                <div className="row">
                    <table className="table table-striped table bordered">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Status</th>
                                <th>Product Description</th>
                                <th>Product Price</th>
                                <th>Product Timeline</th>
                                <th>actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.product.map(
                                    product => 
                                    {
                                            return <tr key={product.id}>
                                                <td>{product.product_name}</td>
                                                <td>{product.product_status}</td>
                                                <td>{product.product_description}</td>
                                                <td>{product.product_price}</td>
                                                <td>{product.product_timeline}</td>
                                                <td>
                                                    <button onClick={ () => this.editProduct(product.id)} className = "btn btn-info">Update</button>
                                                    <button onClick={ () => this.deleteProduct(product.id)} className = "btn btn-danger">Delete</button>
                                                    <button onClick={ () => this.viewProduct(product.id)} className = "btn btn-danger">View</button>
                                                </td>
                                            </tr>;
                                        }
                                )
                            }
                        </tbody>
                    </table>    
                </div>

            </div>
        );
    }
}

export default ListProjectComponent;