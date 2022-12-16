/**
* Products service.
* @module api/ProductsApi
* @version 1.0.10
*/
export default class ProductsApi {
    /**
    * Constructs a new ProductsApi.
    * @alias module:api/ProductsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Product Creation Confirmation
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfirmProductRequest} opts.confirmProductRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfirmProductResponse} and HTTP response
     */
    confirmProductWithHttpInfo(opts: {
        confirmProductRequest: any;
    }): Promise<any>;
    /**
     * Product Creation Confirmation
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfirmProductRequest} opts.confirmProductRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfirmProductResponse}
     */
    confirmProduct(opts: {
        confirmProductRequest: any;
    }): Promise<any>;
    /**
     * Create Product
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateProductRequest} opts.createProductRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateProductResponse} and HTTP response
     */
    createProductWithHttpInfo(opts: {
        createProductRequest: any;
    }): Promise<any>;
    /**
     * Create Product
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateProductRequest} opts.createProductRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateProductResponse}
     */
    createProduct(opts: {
        createProductRequest: any;
    }): Promise<any>;
    /**
     * Fetch Product
     * @param {Number} id ID of the product you wish to fetch.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProductByIdResponse} and HTTP response
     */
    getProductByIdWithHttpInfo(id: number): Promise<any>;
    /**
     * Fetch Product
     * @param {Number} id ID of the product you wish to fetch.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProductByIdResponse}
     */
    getProductById(id: number): Promise<any>;
    /**
     * Fetch All Products
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProductsResponse} and HTTP response
     */
    getProductsWithHttpInfo(): Promise<any>;
    /**
     * Fetch All Products
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProductsResponse}
     */
    getProducts(): Promise<any>;
}
//# sourceMappingURL=ProductsApi.d.ts.map