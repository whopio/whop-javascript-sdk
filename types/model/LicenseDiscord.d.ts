export default LicenseDiscord;
/**
 * The LicenseDiscord model module.
 * @module model/LicenseDiscord
 * @version 1.0.10
 */
declare class LicenseDiscord {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>LicenseDiscord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseDiscord} obj Optional instance to populate.
     * @return {module:model/LicenseDiscord} The populated <code>LicenseDiscord</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    username: any;
    discord_account_id: any;
    image_url: any;
}
//# sourceMappingURL=LicenseDiscord.d.ts.map