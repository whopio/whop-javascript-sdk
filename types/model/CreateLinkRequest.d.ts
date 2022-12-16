export default CreateLinkRequest;
/**
 * The CreateLinkRequest model module.
 * @module model/CreateLinkRequest
 * @version 1.0.10
 */
declare class CreateLinkRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>CreateLinkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLinkRequest} obj Optional instance to populate.
     * @return {module:model/CreateLinkRequest} The populated <code>CreateLinkRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    product_id: any;
    password: any;
    stock: any;
    discord_ids: any;
}
//# sourceMappingURL=CreateLinkRequest.d.ts.map