export default CreateCheckoutLogRequest;
/**
 * The CreateCheckoutLogRequest model module.
 * @module model/CreateCheckoutLogRequest
 * @version 1.0.10
 */
declare class CreateCheckoutLogRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>CreateCheckoutLogRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCheckoutLogRequest} obj Optional instance to populate.
     * @return {module:model/CreateCheckoutLogRequest} The populated <code>CreateCheckoutLogRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    key: any;
    product_name: any;
    website: any;
    size: any;
    image_url: any;
    price: any;
    status: any;
}
declare namespace CreateCheckoutLogRequest {
    namespace StatusEnum {
        const success: string;
        const denied: string;
    }
}
//# sourceMappingURL=CreateCheckoutLogRequest.d.ts.map