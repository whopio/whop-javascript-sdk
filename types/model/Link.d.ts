export default Link;
/**
 * The Link model module.
 * @module model/Link
 * @version 1.0.10
 */
declare class Link {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>Link</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Link} obj Optional instance to populate.
     * @return {module:model/Link} The populated <code>Link</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    id: any;
    product_id: any;
    password: any;
    stock: any;
    created_at: any;
    discord_ids: any;
    hidden: any;
}
//# sourceMappingURL=Link.d.ts.map