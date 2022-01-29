import React, { Component } from 'react';
import ProductService from  '../services/ProductService';

class ListProjectComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            services:[]
        }
        this.addService = this.addService.bind(this);
    }

    addService(){
        this.props.history.push('/add-service')
    }

    componentDidMount(){
        ProductService.getServices().then((res) => {
            this.setState({ services: res.data });
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Products</h1>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addService}>Add Service</button>
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
                                this.state.services.map(
                                    service => 
                                    <tr key = { service.id }>
                                        <td>{ service.product_name }</td>
                                        <td>{ service.product_status }</td>
                                        <td>{ service.product_description }</td>
                                        <td>{ service.product_price }</td>
                                        <td>{ service.product_timeline }</td>
                                    </tr>
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