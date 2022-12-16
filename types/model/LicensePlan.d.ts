export default LicensePlan;
/**
 * The LicensePlan model module.
 * @module model/LicensePlan
 * @version 1.0.10
 */
declare class LicensePlan {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>LicensePlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicensePlan} obj Optional instance to populate.
     * @return {module:model/LicensePlan} The populated <code>LicensePlan</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    id: any;
    title: any;
    initial_price: any;
    renewal_price: any;
    billing_period: any;
    license_type: any;
}
declare namespace LicensePlan {
    namespace LicenseTypeEnum {
        const one_time: string;
        const renewal: string;
    }
}
//# sourceMappingURL=LicensePlan.d.ts.map