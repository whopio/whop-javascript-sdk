export default CreateProductRequest;
/**
 * The CreateProductRequest model module.
 * @module model/CreateProductRequest
 * @version 1.0.10
 */
declare class CreateProductRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>CreateProductRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProductRequest} obj Optional instance to populate.
     * @return {module:model/CreateProductRequest} The populated <code>CreateProductRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    cancel_action: any;
    title: any;
    expiration_days: any;
    currency: any;
    license_type: any;
    initial_price: any;
    price: any;
    billing_period: any;
    stock: any;
    transferable: any;
    custom_trial_period: any;
}
declare namespace CreateProductRequest {
    namespace CancelActionEnum {
        const kick_user: string;
        const remove_roles: string;
        const remove_all_roles: string;
        const no_action: string;
    }
    namespace LicenseTypeEnum {
        const one_time: string;
        const renewal: string;
    }
}
//# sourceMappingURL=CreateProductRequest.d.ts.map