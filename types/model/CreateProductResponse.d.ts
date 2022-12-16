export default CreateProductResponse;
/**
 * The CreateProductResponse model module.
 * @module model/CreateProductResponse
 * @version 1.0.10
 */
declare class CreateProductResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>CreateProductResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProductResponse} obj Optional instance to populate.
     * @return {module:model/CreateProductResponse} The populated <code>CreateProductResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    success: any;
    formatted: any;
    product: any;
}
//# sourceMappingURL=CreateProductResponse.d.ts.map