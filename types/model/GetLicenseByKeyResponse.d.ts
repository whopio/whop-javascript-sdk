export default GetLicenseByKeyResponse;
/**
 * The GetLicenseByKeyResponse model module.
 * @module model/GetLicenseByKeyResponse
 * @version 1.0.10
 */
declare class GetLicenseByKeyResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>GetLicenseByKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLicenseByKeyResponse} obj Optional instance to populate.
     * @return {module:model/GetLicenseByKeyResponse} The populated <code>GetLicenseByKeyResponse</code> instance.
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
declare namespace GetLicenseByKeyResponse {
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
//# sourceMappingURL=GetLicenseByKeyResponse.d.ts.map