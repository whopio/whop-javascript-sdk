export default Whop;
declare class Whop {
    constructor({ bearer, clientID }?: {
        bearer?: any;
        clientID?: any;
    });
    apiClient: ApiClient;
    getProducts(): Promise<any>;
    getProductById(id: any): Promise<any>;
    createProduct(title: any, cancel_action: any, expiration_days: any, initial_price: any, license_type: any, stock: any, billing_period: any, currency: any, custom_trial_period: any, price: any, transferable: any): Promise<any>;
    confirmProduct(currency: any, stock: any, title: any, transferable: any, billing_period: any, cancel_action: any, initial_price: any, license_type: any, price: any, custom_trial_period: any, expiration_days: any): Promise<any>;
    sendPushNotification(link: any, title: any, body: any): Promise<any>;
    getLinks(): Promise<any>;
    createLink(discord_ids: any, password: any, product_id: any, stock: any): Promise<any>;
    validateLicenseByKey(key: any, metadata: any): Promise<any>;
    updateLicenseByKey(key: any, metadata: any): Promise<any>;
    resetLicenseByKey(key: any): Promise<any>;
    getLicenses(): Promise<any>;
    getLicenseByKey(key: any): Promise<any>;
    banLicenseByKey(key: any): Promise<any>;
    getCheckoutLogs(): Promise<any>;
    createCheckoutLog(website: any, image_url: any, key: any, price: any, product_name: any, size: any, status: any): Promise<any>;
}
import ApiClient from "./ApiClient";
//# sourceMappingURL=whop.d.ts.map