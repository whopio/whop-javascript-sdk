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
 * The CreateCheckoutLogRequest model module.
 * @module model/CreateCheckoutLogRequest
 * @version 1.0.10
 */
class CreateCheckoutLogRequest {
    /**
     * Constructs a new <code>CreateCheckoutLogRequest</code>.
     * @alias module:model/CreateCheckoutLogRequest
     */
    constructor() { 
        
        CreateCheckoutLogRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateCheckoutLogRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCheckoutLogRequest} obj Optional instance to populate.
     * @return {module:model/CreateCheckoutLogRequest} The populated <code>CreateCheckoutLogRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCheckoutLogRequest();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('product_name')) {
                obj['product_name'] = ApiClient.convertToType(data['product_name'], 'String');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('image_url')) {
                obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The license key.
 * @member {String} key
 */
CreateCheckoutLogRequest.prototype['key'] = undefined;

/**
 * The name of the product.
 * @member {String} product_name
 */
CreateCheckoutLogRequest.prototype['product_name'] = undefined;

/**
 * The website associated with the product.
 * @member {String} website
 */
CreateCheckoutLogRequest.prototype['website'] = undefined;

/**
 * The size of the product.
 * @member {Number} size
 */
CreateCheckoutLogRequest.prototype['size'] = undefined;

/**
 * An image URL of the product
 * @member {String} image_url
 */
CreateCheckoutLogRequest.prototype['image_url'] = undefined;

/**
 * The price of the product.
 * @member {Number} price
 */
CreateCheckoutLogRequest.prototype['price'] = undefined;

/**
 * The status of the checkout log. Can be: success or denied.
 * @member {module:model/CreateCheckoutLogRequest.StatusEnum} status
 */
CreateCheckoutLogRequest.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CreateCheckoutLogRequest['StatusEnum'] = {

    /**
     * value: "success"
     * @const
     */
    "success": "success",

    /**
     * value: "denied"
     * @const
     */
    "denied": "denied"
};



export default CreateCheckoutLogRequest;

