import ApiClient from "./ApiClient";
import ProductsApi from "./api/ProductsApi";
import NotificationsApi from "./api/NotificationsApi";
import LinksApi from "./api/LinksApi";
import LicensesApi from "./api/LicensesApi";
import CheckoutLogsApi from "./api/CheckoutLogsApi";

class Whop {
  constructor({ bearer = undefined, clientID = undefined } = {}) {
    this.apiClient = new ApiClient();
    if (bearer !== undefined) {
      this.apiClient.authentications["Bearer"]["accessToken"] = bearer;
    }
    if (clientID !== undefined) {
      this.apiClient.authentications["ClientID"]["apiKey"] = clientID;
    }
  }

  // Fetch All Products
  getProducts() {
    var client = new ProductsApi(this.apiClient);
    return client.getProducts();
  }
  // Fetch Product
  getProductById(id) {
    var client = new ProductsApi(this.apiClient);
    return client.getProductById(id);
  }
  // Create Product
  createProduct(
    title,
    cancel_action,
    expiration_days,
    initial_price,
    license_type,
    stock,
    billing_period,
    currency,
    custom_trial_period,
    price,
    transferable
  ) {
    var client = new ProductsApi(this.apiClient);
    var opts = {
      createProductRequest: {
        title: title,
        cancel_action: cancel_action,
        expiration_days: expiration_days,
        initial_price: initial_price,
        license_type: license_type,
        stock: stock,
        billing_period: billing_period,
        currency: currency,
        custom_trial_period: custom_trial_period,
        price: price,
        transferable: transferable,
      },
    };
    return client.createProduct(opts);
  }
  // Product Creation Confirmation
  confirmProduct(
    currency,
    stock,
    title,
    transferable,
    billing_period,
    cancel_action,
    initial_price,
    license_type,
    price,
    custom_trial_period,
    expiration_days
  ) {
    var client = new ProductsApi(this.apiClient);
    var opts = {
      confirmProductRequest: {
        currency: currency,
        stock: stock,
        title: title,
        transferable: transferable,
        billing_period: billing_period,
        cancel_action: cancel_action,
        initial_price: initial_price,
        license_type: license_type,
        price: price,
        custom_trial_period: custom_trial_period,
        expiration_days: expiration_days,
      },
    };
    return client.confirmProduct(opts);
  }
  // Send a push notification
  sendPushNotification(link, title, body) {
    var client = new NotificationsApi(this.apiClient);
    var opts = {
      sendPushNotificationRequest: {
        link: link,
        title: title,
        body: body,
      },
    };
    return client.sendPushNotification(opts);
  }
  // Fetch Links
  getLinks() {
    var client = new LinksApi(this.apiClient);
    return client.getLinks();
  }
  // Create Password Protected Link
  createLink(discord_ids, password, product_id, stock) {
    var client = new LinksApi(this.apiClient);
    var opts = {
      createLinkRequest: {
        discord_ids: discord_ids,
        password: password,
        product_id: product_id,
        stock: stock,
      },
    };
    return client.createLink(opts);
  }
  // Validate Key
  validateLicenseByKey(key, metadata) {
    var client = new LicensesApi(this.apiClient);
    var opts = {
      validateLicenseByKeyRequest: {
        metadata: metadata,
      },
    };
    return client.validateLicenseByKey(key, opts);
  }
  // Update License
  updateLicenseByKey(key, metadata) {
    var client = new LicensesApi(this.apiClient);
    var opts = {
      updateLicenseByKeyRequest: {
        metadata: metadata,
      },
    };
    return client.updateLicenseByKey(key, opts);
  }
  // Reset License
  resetLicenseByKey(key) {
    var client = new LicensesApi(this.apiClient);
    return client.resetLicenseByKey(key);
  }
  // Fetch All Licenses
  getLicenses() {
    var client = new LicensesApi(this.apiClient);
    return client.getLicenses();
  }
  // Fetch License
  getLicenseByKey(key) {
    var client = new LicensesApi(this.apiClient);
    return client.getLicenseByKey(key);
  }
  // Ban License
  banLicenseByKey(key) {
    var client = new LicensesApi(this.apiClient);
    return client.banLicenseByKey(key);
  }
  // Fetch Checkout Logs
  getCheckoutLogs() {
    var client = new CheckoutLogsApi(this.apiClient);
    return client.getCheckoutLogs();
  }
  // Add Checkout Log
  createCheckoutLog(
    website,
    image_url,
    key,
    price,
    product_name,
    size,
    status
  ) {
    var client = new CheckoutLogsApi(this.apiClient);
    var opts = {
      createCheckoutLogRequest: {
        website: website,
        image_url: image_url,
        key: key,
        price: price,
        product_name: product_name,
        size: size,
        status: status,
      },
    };
    return client.createCheckoutLog(opts);
  }
}
export default Whop;
