export default ErrorResponse;
/**
 * The ErrorResponse model module.
 * @module model/ErrorResponse
 * @version 1.0.10
 */
declare class ErrorResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorResponse} obj Optional instance to populate.
     * @return {module:model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    success: any;
    message: any;
    errors: any;
}
//# sourceMappingURL=ErrorResponse.d.ts.map