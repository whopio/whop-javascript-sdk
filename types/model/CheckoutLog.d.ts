export default CheckoutLog;
/**
 * The CheckoutLog model module.
 * @module model/CheckoutLog
 * @version 1.0.10
 */
declare class CheckoutLog {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>CheckoutLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckoutLog} obj Optional instance to populate.
     * @return {module:model/CheckoutLog} The populated <code>CheckoutLog</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    id: any;
    bot_id: any;
    seller_bot_id: any;
    user_id: any;
    key: any;
    product_name: any;
    website: any;
    size: any;
    image_url: any;
    price: any;
    created_at: any;
    updated_at: any;
    status: any;
}
declare namespace CheckoutLog {
    namespace StatusEnum {
        const success: string;
        const denied: string;
    }
}
//# sourceMappingURL=CheckoutLog.d.ts.map