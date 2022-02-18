import ApiClient from "./ApiClient";
import ProductsApi from "./api/ProductsApi";
import NotificationsApi from "./api/NotificationsApi";
import LinksApi from "./api/LinksApi";
import LicensesApi from "./api/LicensesApi";
import CheckoutLogsApi from "./api/CheckoutLogsApi";

class Whop {
  constructor(authToken) {
    this.apiClient = new ApiClient();
    this.apiClient.authentications["Bearer"]["accessToken"] = authToken;
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
    initial_price,
    license_type,
    stock,
    title,
    billing_period,
    cancel_action,
    expiration_days,
    transferable,
    currency,
    custom_trial_period,
    price
  ) {
    var client = new ProductsApi(this.apiClient);
    var opts = {
      createProductRequest: {
        initial_price: initial_price,
        license_type: license_type,
        stock: stock,
        title: title,
        billing_period: billing_period,
        cancel_action: cancel_action,
        expiration_days: expiration_days,
        transferable: transferable,
        currency: currency,
        custom_trial_period: custom_trial_period,
        price: price,
      },
    };
    return client.createProduct(opts);
  }
  // Product Creation Confirmation
  confirmProduct(
    cancel_action,
    currency,
    expiration_days,
    license_type,
    title,
    transferable,
    billing_period,
    custom_trial_period,
    initial_price,
    price,
    stock
  ) {
    var client = new ProductsApi(this.apiClient);
    var opts = {
      confirmProductRequest: {
        cancel_action: cancel_action,
        currency: currency,
        expiration_days: expiration_days,
        license_type: license_type,
        title: title,
        transferable: transferable,
        billing_period: billing_period,
        custom_trial_period: custom_trial_period,
        initial_price: initial_price,
        price: price,
        stock: stock,
      },
    };
    return client.confirmProduct(opts);
  }
  // Send a push notification
  sendPushNotification(body, link, title) {
    var client = new NotificationsApi(this.apiClient);
    var opts = {
      sendPushNotificationRequest: {
        body: body,
        link: link,
        title: title,
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
  createLink(password, product_id, stock, discord_ids) {
    var client = new LinksApi(this.apiClient);
    var opts = {
      createLinkRequest: {
        password: password,
        product_id: product_id,
        stock: stock,
        discord_ids: discord_ids,
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
  resetLicenseByKey(key, metadata) {
    var client = new LicensesApi(this.apiClient);
    var opts = {
      resetLicenseByKeyRequest: {
        metadata: metadata,
      },
    };
    return client.resetLicenseByKey(key, opts);
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
  banLicenseByKey(key, metadata) {
    var client = new LicensesApi(this.apiClient);
    var opts = {
      banLicenseByKeyRequest: {
        metadata: metadata,
      },
    };
    return client.banLicenseByKey(key, opts);
  }
  // Fetch Checkout Logs
  getCheckoutLogs() {
    var client = new CheckoutLogsApi(this.apiClient);
    return client.getCheckoutLogs();
  }
  // Add Checkout Log
  createCheckoutLog(
    size,
    status,
    website,
    image_url,
    key,
    price,
    product_name
  ) {
    var client = new CheckoutLogsApi(this.apiClient);
    var opts = {
      createCheckoutLogRequest: {
        size: size,
        status: status,
        website: website,
        image_url: image_url,
        key: key,
        price: price,
        product_name: product_name,
      },
    };
    return client.createCheckoutLog(opts);
  }
}
export default Whop;
