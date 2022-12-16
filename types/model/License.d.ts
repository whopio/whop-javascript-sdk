export default License;
/**
 * The License model module.
 * @module model/License
 * @version 1.0.10
 */
declare class License {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>License</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/License} obj Optional instance to populate.
     * @return {module:model/License} The populated <code>License</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    id: any;
    key: any;
    rental_key: any;
    rented: any;
    rental_end: any;
    valid: any;
    key_status: any;
    subscription_status: any;
    quantity: any;
    banned: any;
    metadata: any;
    next_renewal_date: any;
    renewal_period: any;
    created_at: any;
    discord: any;
    twitter: any;
    is_scammer: any;
    plan: any;
}
declare namespace License {
    namespace KeyStatusEnum {
        const pending: string;
        const approved: string;
        const listed: string;
        const removed: string;
        const sold: string;
        const terminated: string;
        const expired: string;
        const disabled: string;
    }
    namespace SubscriptionStatusEnum {
        const completed: string;
        const active: string;
        const trialing: string;
        const canceled: string;
    }
}
//# sourceMappingURL=License.d.ts.map