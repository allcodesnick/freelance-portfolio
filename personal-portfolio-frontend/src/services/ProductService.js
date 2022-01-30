import axios from "axios";

const PROVIDED_SERVICES_API_BASE_URL = "http://localhost:8080/api/v1/";

class ProductService{

    getProducts(){
        return axios.get(PROVIDED_SERVICES_API_BASE_URL  + '/products');
    }
}


export default new ProductService();