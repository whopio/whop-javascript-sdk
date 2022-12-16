export default Metadata;
/**
 * The Metadata model module.
 * @module model/Metadata
 * @version 1.0.10
 */
declare class Metadata {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>Metadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Metadata} obj Optional instance to populate.
     * @return {module:model/Metadata} The populated <code>Metadata</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    hwid: any;
    hardwareName: any;
}
//# sourceMappingURL=Metadata.d.ts.map