import axios from "axios";

const   INDEX_SERVICE_API_BASE_URL = "http://localhost:8080/api/v1/home";

class IndexService {

    getIndex(){
        return axios.get(INDEX_SERVICE_API_BASE_URL);
    }
   
}

export default IndexService;