export default GetProductByIdResponse;
/**
 * The GetProductByIdResponse model module.
 * @module model/GetProductByIdResponse
 * @version 1.0.10
 */
declare class GetProductByIdResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>GetProductByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductByIdResponse} obj Optional instance to populate.
     * @return {module:model/GetProductByIdResponse} The populated <code>GetProductByIdResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    id: any;
    title: any;
    license_type: any;
    initial_price: any;
    recurring_price: any;
    billing_period: any;
    discord_role: any;
    stock: any;
    test: any;
}
declare namespace GetProductByIdResponse {
    namespace LicenseTypeEnum {
        const one_time: string;
        const renewal: string;
    }
}
//# sourceMappingURL=GetProductByIdResponse.d.ts.map