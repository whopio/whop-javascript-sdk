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
 * The LicenseTwitter model module.
 * @module model/LicenseTwitter
 * @version 1.0.10
 */
class LicenseTwitter {
    /**
     * Constructs a new <code>LicenseTwitter</code>.
     * @alias module:model/LicenseTwitter
     */
    constructor() { 
        
        LicenseTwitter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LicenseTwitter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseTwitter} obj Optional instance to populate.
     * @return {module:model/LicenseTwitter} The populated <code>LicenseTwitter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LicenseTwitter();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('twitter_profile_pic')) {
                obj['twitter_profile_pic'] = ApiClient.convertToType(data['twitter_profile_pic'], 'String');
            }
            if (data.hasOwnProperty('followers')) {
                obj['followers'] = ApiClient.convertToType(data['followers'], 'Number');
            }
            if (data.hasOwnProperty('following')) {
                obj['following'] = ApiClient.convertToType(data['following'], 'Number');
            }
            if (data.hasOwnProperty('twitter_account_id')) {
                obj['twitter_account_id'] = ApiClient.convertToType(data['twitter_account_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
LicenseTwitter.prototype['username'] = undefined;

/**
 * @member {String} twitter_profile_pic
 */
LicenseTwitter.prototype['twitter_profile_pic'] = undefined;

/**
 * @member {Number} followers
 */
LicenseTwitter.prototype['followers'] = undefined;

/**
 * @member {Number} following
 */
LicenseTwitter.prototype['following'] = undefined;

/**
 * @member {String} twitter_account_id
 */
LicenseTwitter.prototype['twitter_account_id'] = undefined;






export default LicenseTwitter;

