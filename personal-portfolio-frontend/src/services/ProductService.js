import axios from "axios";

const PROVIDED_SERVICES_API_BASE_URL = "http://localhost:8080/api/v1/";

class ProductService{

    getProducts(){
        return axios.get(PROVIDED_SERVICES_API_BASE_URL  + '/products');
    }

    getProductsById(productId){
        return axios.get(PROVIDED_SERVICES_API_BASE_URL + '/view-product/' + productId);
    }

    createProduct(product){
        return axios.post(PROVIDED_SERVICES_API_BASE_URL + '/add-product' + product);
    }

    updateProduct(productId, product){
        return axios.put(PROVIDED_SERVICES_API_BASE_URL + '/products/' + productId);
    }

    deleteProduct(productId){
        return axios.delete(PROVIDED_SERVICES_API_BASE_URL + '/delete-product/' + productId);
    }
}


export default new ProductService();