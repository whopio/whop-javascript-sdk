export default GetCheckoutLogsResponse;
/**
 * The GetCheckoutLogsResponse model module.
 * @module model/GetCheckoutLogsResponse
 * @version 1.0.10
 */
declare class GetCheckoutLogsResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>GetCheckoutLogsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCheckoutLogsResponse} obj Optional instance to populate.
     * @return {module:model/GetCheckoutLogsResponse} The populated <code>GetCheckoutLogsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    checkouts: any;
    total: any;
}
//# sourceMappingURL=GetCheckoutLogsResponse.d.ts.map