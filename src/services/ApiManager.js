import ApiEndpoints from "./ApiEndpoints";
import ApiMethods from "./ApiMethods";

class ApiManager {
    static login = (body) => {
        const query = ApiEndpoints.login();
        return ApiMethods.postMethod(query, body);
    }
    static addProduct = (body) => {
        const query = ApiEndpoints.addProduct();
        return ApiMethods.postMethod(query, body);
    }
    static getProducts = () => {
        const query = ApiEndpoints.getProducts();
        return ApiMethods.getMethod(query);
    }
    static deleteProduct = (id) => {
        const query = ApiEndpoints.deleteProduct(id);
        return ApiMethods.deleteMethod(query);
    }
    static updateProduct = (id, body) => {
        const query = ApiEndpoints.updateProduct(id);
        return ApiMethods.putMethod(query, body);
    }
    static getOrders = () => {
        const query = ApiEndpoints.getOrders();
        return ApiMethods.getMethod(query);
    }
    static updateOrderStatus = (id, body) => {
        const query = ApiEndpoints.updateOrderStatus(id);
        return ApiMethods.putMethod(query, body);
    }
}

export default ApiManager;