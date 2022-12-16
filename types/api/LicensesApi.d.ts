/**
* Licenses service.
* @module api/LicensesApi
* @version 1.0.10
*/
export default class LicensesApi {
    /**
    * Constructs a new LicensesApi.
    * @alias module:api/LicensesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Ban License
     * @param {String} key Key of the license you wish to ban.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BanLicenseByKeyResponse} and HTTP response
     */
    banLicenseByKeyWithHttpInfo(key: string): Promise<any>;
    /**
     * Ban License
     * @param {String} key Key of the license you wish to ban.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BanLicenseByKeyResponse}
     */
    banLicenseByKey(key: string): Promise<any>;
    /**
     * Fetch License
     * @param {String} key Key of the license you wish to fetch.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLicenseByKeyResponse} and HTTP response
     */
    getLicenseByKeyWithHttpInfo(key: string): Promise<any>;
    /**
     * Fetch License
     * @param {String} key Key of the license you wish to fetch.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLicenseByKeyResponse}
     */
    getLicenseByKey(key: string): Promise<any>;
    /**
     * Fetch All Licenses
     * @param {Object} opts Optional parameters
     * @param {String} opts.discordAccountId ID of the Discord account for which you want to fetch licenses.
     * @param {Number} opts.page Page number of license data to fetch.
     * @param {String} opts.start Start date of license creation. Date should be in the format YYYY-MM-DD.
     * @param {String} opts.end End date of license creation. Date should be in the format YYYY-MM-DD.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLicensesResponse} and HTTP response
     */
    getLicensesWithHttpInfo(opts: {
        discordAccountId: string;
        page: number;
        start: string;
        end: string;
    }): Promise<any>;
    /**
     * Fetch All Licenses
     * @param {Object} opts Optional parameters
     * @param {String} opts.discordAccountId ID of the Discord account for which you want to fetch licenses.
     * @param {Number} opts.page Page number of license data to fetch.
     * @param {String} opts.start Start date of license creation. Date should be in the format YYYY-MM-DD.
     * @param {String} opts.end End date of license creation. Date should be in the format YYYY-MM-DD.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLicensesResponse}
     */
    getLicenses(opts: {
        discordAccountId: string;
        page: number;
        start: string;
        end: string;
    }): Promise<any>;
    /**
     * Reset License
     * @param {String} key Key of the license you wish to reset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResetLicenseByKeyResponse} and HTTP response
     */
    resetLicenseByKeyWithHttpInfo(key: string): Promise<any>;
    /**
     * Reset License
     * @param {String} key Key of the license you wish to reset.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResetLicenseByKeyResponse}
     */
    resetLicenseByKey(key: string): Promise<any>;
    /**
     * Update License
     * @param {String} key Key of the license you wish to update.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateLicenseByKeyRequest} opts.updateLicenseByKeyRequest Details of license key metadata.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateLicenseByKeyResponse} and HTTP response
     */
    updateLicenseByKeyWithHttpInfo(key: string, opts: {
        updateLicenseByKeyRequest: any;
    }): Promise<any>;
    /**
     * Update License
     * @param {String} key Key of the license you wish to update.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateLicenseByKeyRequest} opts.updateLicenseByKeyRequest Details of license key metadata.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateLicenseByKeyResponse}
     */
    updateLicenseByKey(key: string, opts: {
        updateLicenseByKeyRequest: any;
    }): Promise<any>;
    /**
     * Validate Key
     * @param {String} key Key of the license you wish to validate.
     * @param {Object} opts Optional parameters
     * @param {module:model/ValidateLicenseByKeyRequest} opts.validateLicenseByKeyRequest Details of license key metadata.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ValidateLicenseByKeyResponse} and HTTP response
     */
    validateLicenseByKeyWithHttpInfo(key: string, opts: {
        validateLicenseByKeyRequest: any;
    }): Promise<any>;
    /**
     * Validate Key
     * @param {String} key Key of the license you wish to validate.
     * @param {Object} opts Optional parameters
     * @param {module:model/ValidateLicenseByKeyRequest} opts.validateLicenseByKeyRequest Details of license key metadata.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ValidateLicenseByKeyResponse}
     */
    validateLicenseByKey(key: string, opts: {
        validateLicenseByKeyRequest: any;
    }): Promise<any>;
}
//# sourceMappingURL=LicensesApi.d.ts.map