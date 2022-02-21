import axios from "axios";

const PROVIDED_SERVICES_API_BASE_URL = "http://localhost:8080/api/v1/products";

class ProductService{

    getProducts(){
        return axios.get(PROVIDED_SERVICES_API_BASE_URL);
    }

    getProductsById(productId){
        return axios.get(PROVIDED_SERVICES_API_BASE_URL + '/' + productId);
    }

    createProduct(product){
        return axios.post(PROVIDED_SERVICES_API_BASE_URL, product);
    }

    updateProduct(productId, product){
        return axios.put(PROVIDED_SERVICES_API_BASE_URL + '/' + productId, product);
    }

    deleteProduct(productId){
        return axios.delete(PROVIDED_SERVICES_API_BASE_URL + '/' + productId);
    }
}


export default new ProductService();