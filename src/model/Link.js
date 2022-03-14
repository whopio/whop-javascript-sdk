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
 * The Link model module.
 * @module model/Link
 * @version 1.0.10
 */
class Link {
    /**
     * Constructs a new <code>Link</code>.
     * @alias module:model/Link
     */
    constructor() { 
        
        Link.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Link</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Link} obj Optional instance to populate.
     * @return {module:model/Link} The populated <code>Link</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Link();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('stock')) {
                obj['stock'] = ApiClient.convertToType(data['stock'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('discord_ids')) {
                obj['discord_ids'] = ApiClient.convertToType(data['discord_ids'], 'String');
            }
            if (data.hasOwnProperty('hidden')) {
                obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Link.prototype['id'] = undefined;

/**
 * @member {Number} product_id
 */
Link.prototype['product_id'] = undefined;

/**
 * @member {String} password
 */
Link.prototype['password'] = undefined;

/**
 * @member {Number} stock
 */
Link.prototype['stock'] = undefined;

/**
 * @member {String} created_at
 */
Link.prototype['created_at'] = undefined;

/**
 * @member {String} discord_ids
 */
Link.prototype['discord_ids'] = undefined;

/**
 * @member {Boolean} hidden
 */
Link.prototype['hidden'] = undefined;






export default Link;

