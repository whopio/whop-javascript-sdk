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
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create Password Protected Link
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateLinkRequest} opts.createLinkRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateLinkResponse} and HTTP response
     */
    createLinkWithHttpInfo(opts: {
        createLinkRequest: any;
    }): Promise<any>;
    /**
     * Create Password Protected Link
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateLinkRequest} opts.createLinkRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateLinkResponse}
     */
    createLink(opts: {
        createLinkRequest: any;
    }): Promise<any>;
    /**
     * Fetch Links
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLinksResponse} and HTTP response
     */
    getLinksWithHttpInfo(): Promise<any>;
    /**
     * Fetch Links
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLinksResponse}
     */
    getLinks(): Promise<any>;
}
//# sourceMappingURL=LinksApi.d.ts.map