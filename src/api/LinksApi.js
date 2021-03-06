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
import CreateLinkRequest from '../model/CreateLinkRequest';
import CreateLinkResponse from '../model/CreateLinkResponse';
import ErrorResponse from '../model/ErrorResponse';
import GetLinksResponse from '../model/GetLinksResponse';

/**
* Links service.
* @module api/LinksApi
* @version 1.0.10
*/
export default class LinksApi {

    /**
    * Constructs a new LinksApi. 
    * @alias module:api/LinksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Password Protected Link
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateLinkRequest} opts.createLinkRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateLinkResponse} and HTTP response
     */
    createLinkWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createLinkRequest'];

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
      let returnType = CreateLinkResponse;
      return this.apiClient.callApi(
        '/v1/links', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Password Protected Link
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateLinkRequest} opts.createLinkRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateLinkResponse}
     */
    createLink(opts) {
      return this.createLinkWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch Links
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLinksResponse} and HTTP response
     */
    getLinksWithHttpInfo() {
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
      let returnType = GetLinksResponse;
      return this.apiClient.callApi(
        '/v1/links', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch Links
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLinksResponse}
     */
    getLinks() {
      return this.getLinksWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
