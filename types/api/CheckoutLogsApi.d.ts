/**
* CheckoutLogs service.
* @module api/CheckoutLogsApi
* @version 1.0.10
*/
export default class CheckoutLogsApi {
    /**
    * Constructs a new CheckoutLogsApi.
    * @alias module:api/CheckoutLogsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Add Checkout Log
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCheckoutLogRequest} opts.createCheckoutLogRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateCheckoutLogResponse} and HTTP response
     */
    createCheckoutLogWithHttpInfo(opts: {
        createCheckoutLogRequest: any;
    }): Promise<any>;
    /**
     * Add Checkout Log
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCheckoutLogRequest} opts.createCheckoutLogRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateCheckoutLogResponse}
     */
    createCheckoutLog(opts: {
        createCheckoutLogRequest: any;
    }): Promise<any>;
    /**
     * Fetch Checkout Logs
     * @param {Object} opts Optional parameters
     * @param {String} opts.key Key for which you want to fetch checkout logs.
     * @param {module:model/String} opts.status Status of checkout logs to filter by.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetCheckoutLogsResponse} and HTTP response
     */
    getCheckoutLogsWithHttpInfo(opts: {
        key: string;
        status: any;
    }): Promise<any>;
    /**
     * Fetch Checkout Logs
     * @param {Object} opts Optional parameters
     * @param {String} opts.key Key for which you want to fetch checkout logs.
     * @param {module:model/String} opts.status Status of checkout logs to filter by.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetCheckoutLogsResponse}
     */
    getCheckoutLogs(opts: {
        key: string;
        status: any;
    }): Promise<any>;
}
//# sourceMappingURL=CheckoutLogsApi.d.ts.map