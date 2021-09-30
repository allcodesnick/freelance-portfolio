import React, { Component } from 'react';

class ListServicesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            services:[]
        }
    }
    
    render() {
        return (
            <div>
                <h1 className="text-center">Services List</h1>
                <div className="row">
                    <table className="table table-striped table bordered">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Service Description</th>
                                <th>Service Price</th>
                                <th>Expected duration</th>
                                <th>actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.services.map(
                                    service => 
                                    <tr key = { service.id }>
                                        <td>{ service.name }</td>
                                        <td>{ service.description }</td>
                                        <td>{ service.price }</td>
                                        <td>{ service.duration }</td>

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

export default ListServicesComponent;
