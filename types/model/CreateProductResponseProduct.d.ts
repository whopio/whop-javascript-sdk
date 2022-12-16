export default CreateProductResponseProduct;
/**
 * The CreateProductResponseProduct model module.
 * @module model/CreateProductResponseProduct
 * @version 1.0.10
 */
declare class CreateProductResponseProduct {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>CreateProductResponseProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProductResponseProduct} obj Optional instance to populate.
     * @return {module:model/CreateProductResponseProduct} The populated <code>CreateProductResponseProduct</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    id: any;
    title: any;
    initial_price: any;
    renewal_price: any;
    billing_period: any;
    license_type: any;
}
declare namespace CreateProductResponseProduct {
    namespace LicenseTypeEnum {
        const one_time: string;
        const renewal: string;
    }
}
//# sourceMappingURL=CreateProductResponseProduct.d.ts.map