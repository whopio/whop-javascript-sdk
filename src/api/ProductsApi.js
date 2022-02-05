/**
 * Whop API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.10
 * Contact: support@whop.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ConfirmProductRequest from '../model/ConfirmProductRequest';
import ConfirmProductResponse from '../model/ConfirmProductResponse';
import CreateProductRequest from '../model/CreateProductRequest';
import CreateProductResponse from '../model/CreateProductResponse';
import ErrorResponse from '../model/ErrorResponse';
import GetProductByIdResponse from '../model/GetProductByIdResponse';
import GetProductsResponse from '../model/GetProductsResponse';

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
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Product Creation Confirmation
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfirmProductRequest} opts.confirmProductRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfirmProductResponse} and HTTP response
     */
    confirmProductWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['confirmProductRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ConfirmProductResponse;
      return this.apiClient.callApi(
        '/v1/confirm_product', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Product Creation Confirmation
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfirmProductRequest} opts.confirmProductRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfirmProductResponse}
     */
    confirmProduct(opts) {
      return this.confirmProductWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create Product
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateProductRequest} opts.createProductRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateProductResponse} and HTTP response
     */
    createProductWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createProductRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateProductResponse;
      return this.apiClient.callApi(
        '/v1/products', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Product
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateProductRequest} opts.createProductRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateProductResponse}
     */
    createProduct(opts) {
      return this.createProductWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch Product
     * @param {Number} id ID of the product you wish to fetch.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProductByIdResponse} and HTTP response
     */
    getProductByIdWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetProductByIdResponse;
      return this.apiClient.callApi(
        '/v1/products/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch Product
     * @param {Number} id ID of the product you wish to fetch.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProductByIdResponse}
     */
    getProductById(id) {
      return this.getProductByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch All Products
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProductsResponse} and HTTP response
     */
    getProductsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetProductsResponse;
      return this.apiClient.callApi(
        '/v1/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch All Products
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProductsResponse}
     */
    getProducts() {
      return this.getProductsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}