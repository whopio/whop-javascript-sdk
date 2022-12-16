/**
* Notifications service.
* @module api/NotificationsApi
* @version 1.0.10
*/
export default class NotificationsApi {
    /**
    * Constructs a new NotificationsApi.
    * @alias module:api/NotificationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Send a push notification
     * @param {Object} opts Optional parameters
     * @param {module:model/SendPushNotificationRequest} opts.sendPushNotificationRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendPushNotificationResponse} and HTTP response
     */
    sendPushNotificationWithHttpInfo(opts: {
        sendPushNotificationRequest: any;
    }): Promise<any>;
    /**
     * Send a push notification
     * @param {Object} opts Optional parameters
     * @param {module:model/SendPushNotificationRequest} opts.sendPushNotificationRequest Click the arrow to the right to see the full body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendPushNotificationResponse}
     */
    sendPushNotification(opts: {
        sendPushNotificationRequest: any;
    }): Promise<any>;
}
//# sourceMappingURL=NotificationsApi.d.ts.map