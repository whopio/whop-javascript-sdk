export default SendPushNotificationRequest;
/**
 * The SendPushNotificationRequest model module.
 * @module model/SendPushNotificationRequest
 * @version 1.0.10
 */
declare class SendPushNotificationRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>SendPushNotificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendPushNotificationRequest} obj Optional instance to populate.
     * @return {module:model/SendPushNotificationRequest} The populated <code>SendPushNotificationRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    title: any;
    link: any;
    body: any;
}
//# sourceMappingURL=SendPushNotificationRequest.d.ts.map