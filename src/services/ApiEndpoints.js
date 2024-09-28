const authUrl = import.meta.env.VITE_FIREBASE_AUTH_URL;
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const dbUrl = import.meta.env.VITE_FIREBASE_DB_URL;


const ApiEndpoints = {
    login: ()=>(`${authUrl}/accounts:signInWithPassword?key=${apiKey}`),
    addProduct: ()=>(`${dbUrl}/products.json`),
    getProducts: ()=>(`${dbUrl}/products.json`),
}

export default ApiEndpoints;