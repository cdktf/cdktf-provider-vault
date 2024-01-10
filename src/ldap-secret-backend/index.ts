// https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapSecretBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of managed key registry entry names that the mount in question is allowed to access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#allowed_managed_keys LdapSecretBackend#allowed_managed_keys}
  */
  readonly allowedManagedKeys?: string[];
  /**
  * Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#audit_non_hmac_request_keys LdapSecretBackend#audit_non_hmac_request_keys}
  */
  readonly auditNonHmacRequestKeys?: string[];
  /**
  * Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#audit_non_hmac_response_keys LdapSecretBackend#audit_non_hmac_response_keys}
  */
  readonly auditNonHmacResponseKeys?: string[];
  /**
  * Distinguished name of object to bind when performing user and group search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#binddn LdapSecretBackend#binddn}
  */
  readonly binddn: string;
  /**
  * LDAP password for searching for the user DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#bindpass LdapSecretBackend#bindpass}
  */
  readonly bindpass: string;
  /**
  * CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#certificate LdapSecretBackend#certificate}
  */
  readonly certificate?: string;
  /**
  * Client certificate to provide to the LDAP server, must be x509 PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#client_tls_cert LdapSecretBackend#client_tls_cert}
  */
  readonly clientTlsCert?: string;
  /**
  * Client certificate key to provide to the LDAP server, must be x509 PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#client_tls_key LdapSecretBackend#client_tls_key}
  */
  readonly clientTlsKey?: string;
  /**
  * Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#connection_timeout LdapSecretBackend#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Default lease duration for tokens and secrets in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#default_lease_ttl_seconds LdapSecretBackend#default_lease_ttl_seconds}
  */
  readonly defaultLeaseTtlSeconds?: number;
  /**
  * Human-friendly description of the mount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#description LdapSecretBackend#description}
  */
  readonly description?: string;
  /**
  * If set, opts out of mount migration on path updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#disable_remount LdapSecretBackend#disable_remount}
  */
  readonly disableRemount?: boolean | cdktf.IResolvable;
  /**
  * Enable the secrets engine to access Vault's external entropy source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#external_entropy_access LdapSecretBackend#external_entropy_access}
  */
  readonly externalEntropyAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#insecure_tls LdapSecretBackend#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * The desired length of passwords that Vault generates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#length LdapSecretBackend#length}
  */
  readonly length?: number;
  /**
  * Local mount flag that can be explicitly set to true to enforce local mount in HA environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#local LdapSecretBackend#local}
  */
  readonly local?: boolean | cdktf.IResolvable;
  /**
  * Maximum possible lease duration for tokens and secrets in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#max_lease_ttl_seconds LdapSecretBackend#max_lease_ttl_seconds}
  */
  readonly maxLeaseTtlSeconds?: number;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#namespace LdapSecretBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies mount type specific options that are passed to the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#options LdapSecretBackend#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Name of the password policy to use to generate passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#password_policy LdapSecretBackend#password_policy}
  */
  readonly passwordPolicy?: string;
  /**
  * The path where the LDAP secrets backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#path LdapSecretBackend#path}
  */
  readonly path?: string;
  /**
  * Timeout, in seconds, for the connection when making requests against the server before returning back an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#request_timeout LdapSecretBackend#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#schema LdapSecretBackend#schema}
  */
  readonly schema?: string;
  /**
  * Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#seal_wrap LdapSecretBackend#seal_wrap}
  */
  readonly sealWrap?: boolean | cdktf.IResolvable;
  /**
  * Issue a StartTLS command after establishing unencrypted connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#starttls LdapSecretBackend#starttls}
  */
  readonly starttls?: boolean | cdktf.IResolvable;
  /**
  * Enables userPrincipalDomain login with [username]@UPNDomain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#upndomain LdapSecretBackend#upndomain}
  */
  readonly upndomain?: string;
  /**
  * LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#url LdapSecretBackend#url}
  */
  readonly url?: string;
  /**
  * Attribute used for users (default: cn)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#userattr LdapSecretBackend#userattr}
  */
  readonly userattr?: string;
  /**
  * LDAP domain to use for users (eg: ou=People,dc=example,dc=org)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#userdn LdapSecretBackend#userdn}
  */
  readonly userdn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend vault_ldap_secret_backend}
*/
export class LdapSecretBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_ldap_secret_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapSecretBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapSecretBackend to import
  * @param importFromId The id of the existing LdapSecretBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapSecretBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_ldap_secret_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ldap_secret_backend vault_ldap_secret_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapSecretBackendConfig
  */
  public constructor(scope: Construct, id: string, config: LdapSecretBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_ldap_secret_backend',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.23.0',
        providerVersionConstraint: '~> 3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedManagedKeys = config.allowedManagedKeys;
    this._auditNonHmacRequestKeys = config.auditNonHmacRequestKeys;
    this._auditNonHmacResponseKeys = config.auditNonHmacResponseKeys;
    this._binddn = config.binddn;
    this._bindpass = config.bindpass;
    this._certificate = config.certificate;
    this._clientTlsCert = config.clientTlsCert;
    this._clientTlsKey = config.clientTlsKey;
    this._connectionTimeout = config.connectionTimeout;
    this._defaultLeaseTtlSeconds = config.defaultLeaseTtlSeconds;
    this._description = config.description;
    this._disableRemount = config.disableRemount;
    this._externalEntropyAccess = config.externalEntropyAccess;
    this._id = config.id;
    this._insecureTls = config.insecureTls;
    this._length = config.length;
    this._local = config.local;
    this._maxLeaseTtlSeconds = config.maxLeaseTtlSeconds;
    this._namespace = config.namespace;
    this._options = config.options;
    this._passwordPolicy = config.passwordPolicy;
    this._path = config.path;
    this._requestTimeout = config.requestTimeout;
    this._schema = config.schema;
    this._sealWrap = config.sealWrap;
    this._starttls = config.starttls;
    this._upndomain = config.upndomain;
    this._url = config.url;
    this._userattr = config.userattr;
    this._userdn = config.userdn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor - computed: true, optional: false, required: false
  public get accessor() {
    return this.getStringAttribute('accessor');
  }

  // allowed_managed_keys - computed: false, optional: true, required: false
  private _allowedManagedKeys?: string[]; 
  public get allowedManagedKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_managed_keys'));
  }
  public set allowedManagedKeys(value: string[]) {
    this._allowedManagedKeys = value;
  }
  public resetAllowedManagedKeys() {
    this._allowedManagedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedManagedKeysInput() {
    return this._allowedManagedKeys;
  }

  // audit_non_hmac_request_keys - computed: true, optional: true, required: false
  private _auditNonHmacRequestKeys?: string[]; 
  public get auditNonHmacRequestKeys() {
    return this.getListAttribute('audit_non_hmac_request_keys');
  }
  public set auditNonHmacRequestKeys(value: string[]) {
    this._auditNonHmacRequestKeys = value;
  }
  public resetAuditNonHmacRequestKeys() {
    this._auditNonHmacRequestKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditNonHmacRequestKeysInput() {
    return this._auditNonHmacRequestKeys;
  }

  // audit_non_hmac_response_keys - computed: true, optional: true, required: false
  private _auditNonHmacResponseKeys?: string[]; 
  public get auditNonHmacResponseKeys() {
    return this.getListAttribute('audit_non_hmac_response_keys');
  }
  public set auditNonHmacResponseKeys(value: string[]) {
    this._auditNonHmacResponseKeys = value;
  }
  public resetAuditNonHmacResponseKeys() {
    this._auditNonHmacResponseKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditNonHmacResponseKeysInput() {
    return this._auditNonHmacResponseKeys;
  }

  // binddn - computed: false, optional: false, required: true
  private _binddn?: string; 
  public get binddn() {
    return this.getStringAttribute('binddn');
  }
  public set binddn(value: string) {
    this._binddn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get binddnInput() {
    return this._binddn;
  }

  // bindpass - computed: false, optional: false, required: true
  private _bindpass?: string; 
  public get bindpass() {
    return this.getStringAttribute('bindpass');
  }
  public set bindpass(value: string) {
    this._bindpass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindpassInput() {
    return this._bindpass;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // client_tls_cert - computed: false, optional: true, required: false
  private _clientTlsCert?: string; 
  public get clientTlsCert() {
    return this.getStringAttribute('client_tls_cert');
  }
  public set clientTlsCert(value: string) {
    this._clientTlsCert = value;
  }
  public resetClientTlsCert() {
    this._clientTlsCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsCertInput() {
    return this._clientTlsCert;
  }

  // client_tls_key - computed: false, optional: true, required: false
  private _clientTlsKey?: string; 
  public get clientTlsKey() {
    return this.getStringAttribute('client_tls_key');
  }
  public set clientTlsKey(value: string) {
    this._clientTlsKey = value;
  }
  public resetClientTlsKey() {
    this._clientTlsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsKeyInput() {
    return this._clientTlsKey;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // default_lease_ttl_seconds - computed: true, optional: true, required: false
  private _defaultLeaseTtlSeconds?: number; 
  public get defaultLeaseTtlSeconds() {
    return this.getNumberAttribute('default_lease_ttl_seconds');
  }
  public set defaultLeaseTtlSeconds(value: number) {
    this._defaultLeaseTtlSeconds = value;
  }
  public resetDefaultLeaseTtlSeconds() {
    this._defaultLeaseTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLeaseTtlSecondsInput() {
    return this._defaultLeaseTtlSeconds;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_remount - computed: false, optional: true, required: false
  private _disableRemount?: boolean | cdktf.IResolvable; 
  public get disableRemount() {
    return this.getBooleanAttribute('disable_remount');
  }
  public set disableRemount(value: boolean | cdktf.IResolvable) {
    this._disableRemount = value;
  }
  public resetDisableRemount() {
    this._disableRemount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRemountInput() {
    return this._disableRemount;
  }

  // external_entropy_access - computed: false, optional: true, required: false
  private _externalEntropyAccess?: boolean | cdktf.IResolvable; 
  public get externalEntropyAccess() {
    return this.getBooleanAttribute('external_entropy_access');
  }
  public set externalEntropyAccess(value: boolean | cdktf.IResolvable) {
    this._externalEntropyAccess = value;
  }
  public resetExternalEntropyAccess() {
    this._externalEntropyAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEntropyAccessInput() {
    return this._externalEntropyAccess;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // insecure_tls - computed: false, optional: true, required: false
  private _insecureTls?: boolean | cdktf.IResolvable; 
  public get insecureTls() {
    return this.getBooleanAttribute('insecure_tls');
  }
  public set insecureTls(value: boolean | cdktf.IResolvable) {
    this._insecureTls = value;
  }
  public resetInsecureTls() {
    this._insecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // local - computed: false, optional: true, required: false
  private _local?: boolean | cdktf.IResolvable; 
  public get local() {
    return this.getBooleanAttribute('local');
  }
  public set local(value: boolean | cdktf.IResolvable) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // max_lease_ttl_seconds - computed: true, optional: true, required: false
  private _maxLeaseTtlSeconds?: number; 
  public get maxLeaseTtlSeconds() {
    return this.getNumberAttribute('max_lease_ttl_seconds');
  }
  public set maxLeaseTtlSeconds(value: number) {
    this._maxLeaseTtlSeconds = value;
  }
  public resetMaxLeaseTtlSeconds() {
    this._maxLeaseTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLeaseTtlSecondsInput() {
    return this._maxLeaseTtlSeconds;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy?: string; 
  public get passwordPolicy() {
    return this.getStringAttribute('password_policy');
  }
  public set passwordPolicy(value: string) {
    this._passwordPolicy = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // request_timeout - computed: true, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // seal_wrap - computed: true, optional: true, required: false
  private _sealWrap?: boolean | cdktf.IResolvable; 
  public get sealWrap() {
    return this.getBooleanAttribute('seal_wrap');
  }
  public set sealWrap(value: boolean | cdktf.IResolvable) {
    this._sealWrap = value;
  }
  public resetSealWrap() {
    this._sealWrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sealWrapInput() {
    return this._sealWrap;
  }

  // starttls - computed: true, optional: true, required: false
  private _starttls?: boolean | cdktf.IResolvable; 
  public get starttls() {
    return this.getBooleanAttribute('starttls');
  }
  public set starttls(value: boolean | cdktf.IResolvable) {
    this._starttls = value;
  }
  public resetStarttls() {
    this._starttls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttlsInput() {
    return this._starttls;
  }

  // upndomain - computed: true, optional: true, required: false
  private _upndomain?: string; 
  public get upndomain() {
    return this.getStringAttribute('upndomain');
  }
  public set upndomain(value: string) {
    this._upndomain = value;
  }
  public resetUpndomain() {
    this._upndomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upndomainInput() {
    return this._upndomain;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // userattr - computed: true, optional: true, required: false
  private _userattr?: string; 
  public get userattr() {
    return this.getStringAttribute('userattr');
  }
  public set userattr(value: string) {
    this._userattr = value;
  }
  public resetUserattr() {
    this._userattr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userattrInput() {
    return this._userattr;
  }

  // userdn - computed: false, optional: true, required: false
  private _userdn?: string; 
  public get userdn() {
    return this.getStringAttribute('userdn');
  }
  public set userdn(value: string) {
    this._userdn = value;
  }
  public resetUserdn() {
    this._userdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdnInput() {
    return this._userdn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_managed_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedManagedKeys),
      audit_non_hmac_request_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditNonHmacRequestKeys),
      audit_non_hmac_response_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditNonHmacResponseKeys),
      binddn: cdktf.stringToTerraform(this._binddn),
      bindpass: cdktf.stringToTerraform(this._bindpass),
      certificate: cdktf.stringToTerraform(this._certificate),
      client_tls_cert: cdktf.stringToTerraform(this._clientTlsCert),
      client_tls_key: cdktf.stringToTerraform(this._clientTlsKey),
      connection_timeout: cdktf.numberToTerraform(this._connectionTimeout),
      default_lease_ttl_seconds: cdktf.numberToTerraform(this._defaultLeaseTtlSeconds),
      description: cdktf.stringToTerraform(this._description),
      disable_remount: cdktf.booleanToTerraform(this._disableRemount),
      external_entropy_access: cdktf.booleanToTerraform(this._externalEntropyAccess),
      id: cdktf.stringToTerraform(this._id),
      insecure_tls: cdktf.booleanToTerraform(this._insecureTls),
      length: cdktf.numberToTerraform(this._length),
      local: cdktf.booleanToTerraform(this._local),
      max_lease_ttl_seconds: cdktf.numberToTerraform(this._maxLeaseTtlSeconds),
      namespace: cdktf.stringToTerraform(this._namespace),
      options: cdktf.hashMapper(cdktf.stringToTerraform)(this._options),
      password_policy: cdktf.stringToTerraform(this._passwordPolicy),
      path: cdktf.stringToTerraform(this._path),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      schema: cdktf.stringToTerraform(this._schema),
      seal_wrap: cdktf.booleanToTerraform(this._sealWrap),
      starttls: cdktf.booleanToTerraform(this._starttls),
      upndomain: cdktf.stringToTerraform(this._upndomain),
      url: cdktf.stringToTerraform(this._url),
      userattr: cdktf.stringToTerraform(this._userattr),
      userdn: cdktf.stringToTerraform(this._userdn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_managed_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedManagedKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      audit_non_hmac_request_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditNonHmacRequestKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      audit_non_hmac_response_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditNonHmacResponseKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      binddn: {
        value: cdktf.stringToHclTerraform(this._binddn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bindpass: {
        value: cdktf.stringToHclTerraform(this._bindpass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_tls_cert: {
        value: cdktf.stringToHclTerraform(this._clientTlsCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_tls_key: {
        value: cdktf.stringToHclTerraform(this._clientTlsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_timeout: {
        value: cdktf.numberToHclTerraform(this._connectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_lease_ttl_seconds: {
        value: cdktf.numberToHclTerraform(this._defaultLeaseTtlSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_remount: {
        value: cdktf.booleanToHclTerraform(this._disableRemount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_entropy_access: {
        value: cdktf.booleanToHclTerraform(this._externalEntropyAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_tls: {
        value: cdktf.booleanToHclTerraform(this._insecureTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      length: {
        value: cdktf.numberToHclTerraform(this._length),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local: {
        value: cdktf.booleanToHclTerraform(this._local),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_lease_ttl_seconds: {
        value: cdktf.numberToHclTerraform(this._maxLeaseTtlSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._options),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      password_policy: {
        value: cdktf.stringToHclTerraform(this._passwordPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_timeout: {
        value: cdktf.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seal_wrap: {
        value: cdktf.booleanToHclTerraform(this._sealWrap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      starttls: {
        value: cdktf.booleanToHclTerraform(this._starttls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upndomain: {
        value: cdktf.stringToHclTerraform(this._upndomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userattr: {
        value: cdktf.stringToHclTerraform(this._userattr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userdn: {
        value: cdktf.stringToHclTerraform(this._userdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
