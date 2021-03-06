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

import ApiClient from '../ApiClient';

/**
 * The ValidateLicenseByKeyRequest model module.
 * @module model/ValidateLicenseByKeyRequest
 * @version 1.0.10
 */
class ValidateLicenseByKeyRequest {
    /**
     * Constructs a new <code>ValidateLicenseByKeyRequest</code>.
     * @alias module:model/ValidateLicenseByKeyRequest
     */
    constructor() { 
        
        ValidateLicenseByKeyRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValidateLicenseByKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidateLicenseByKeyRequest} obj Optional instance to populate.
     * @return {module:model/ValidateLicenseByKeyRequest} The populated <code>ValidateLicenseByKeyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidateLicenseByKeyRequest();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} metadata
 */
ValidateLicenseByKeyRequest.prototype['metadata'] = undefined;






export default ValidateLicenseByKeyRequest;

