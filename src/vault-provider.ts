// https://www.terraform.io/docs/providers/vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultProviderConfig {
  /**
  * If true, adds the value of the `address` argument to the Terraform process environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#add_address_to_env VaultProvider#add_address_to_env}
  */
  readonly addAddressToEnv?: string;
  /**
  * URL of the root of the target Vault server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#address VaultProvider#address}
  */
  readonly address: string;
  /**
  * Path to directory containing CA certificate files to validate the server's certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#ca_cert_dir VaultProvider#ca_cert_dir}
  */
  readonly caCertDir?: string;
  /**
  * Path to a CA certificate file to validate the server's certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#ca_cert_file VaultProvider#ca_cert_file}
  */
  readonly caCertFile?: string;
  /**
  * Maximum TTL for secret leases requested by this provider.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#max_lease_ttl_seconds VaultProvider#max_lease_ttl_seconds}
  */
  readonly maxLeaseTtlSeconds?: number;
  /**
  * Maximum number of retries when a 5xx error code is encountered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#max_retries VaultProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Maximum number of retries for Client Controlled Consistency related operations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#max_retries_ccc VaultProvider#max_retries_ccc}
  */
  readonly maxRetriesCcc?: number;
  /**
  * The namespace to use. Available only for Vault Enterprise.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Set this to true to prevent the creation of ephemeral child token used by this provider.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#skip_child_token VaultProvider#skip_child_token}
  */
  readonly skipChildToken?: boolean | cdktf.IResolvable;
  /**
  * Set this to true only if the target Vault server is an insecure development instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#skip_tls_verify VaultProvider#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Name to use as the SNI host when connecting via TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#tls_server_name VaultProvider#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * Token to use to authenticate to Vault.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#token VaultProvider#token}
  */
  readonly token?: string;
  /**
  * Token name to use for creating the Vault child token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#token_name VaultProvider#token_name}
  */
  readonly tokenName?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#alias VaultProvider#alias}
  */
  readonly alias?: string;
  /**
  * auth_login block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#auth_login VaultProvider#auth_login}
  */
  readonly authLogin?: VaultProviderAuthLogin[] | cdktf.IResolvable;
  /**
  * client_auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#client_auth VaultProvider#client_auth}
  */
  readonly clientAuth?: VaultProviderClientAuth[] | cdktf.IResolvable;
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#headers VaultProvider#headers}
  */
  readonly headers?: VaultProviderHeaders[] | cdktf.IResolvable;
}
export interface VaultProviderAuthLogin {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#method VaultProvider#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#parameters VaultProvider#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#path VaultProvider#path}
  */
  readonly path: string;
}

export function vaultProviderAuthLoginToTerraform(struct?: VaultProviderAuthLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface VaultProviderClientAuth {
  /**
  * Path to a file containing the client certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#cert_file VaultProvider#cert_file}
  */
  readonly certFile?: string;
  /**
  * Path to a file containing the private key that the certificate was issued for.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#key_file VaultProvider#key_file}
  */
  readonly keyFile?: string;
}

export function vaultProviderClientAuthToTerraform(struct?: VaultProviderClientAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}

export interface VaultProviderHeaders {
  /**
  * The header name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#name VaultProvider#name}
  */
  readonly name: string;
  /**
  * The header value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#value VaultProvider#value}
  */
  readonly value: string;
}

export function vaultProviderHeadersToTerraform(struct?: VaultProviderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/vault vault}
*/
export class VaultProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultProviderConfig
  */
  public constructor(scope: Construct, id: string, config: VaultProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'vault',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.8.1',
        providerVersionConstraint: '~> 3.7'
      },
      terraformProviderSource: 'hashicorp/vault'
    });
    this._addAddressToEnv = config.addAddressToEnv;
    this._address = config.address;
    this._caCertDir = config.caCertDir;
    this._caCertFile = config.caCertFile;
    this._maxLeaseTtlSeconds = config.maxLeaseTtlSeconds;
    this._maxRetries = config.maxRetries;
    this._maxRetriesCcc = config.maxRetriesCcc;
    this._namespace = config.namespace;
    this._skipChildToken = config.skipChildToken;
    this._skipTlsVerify = config.skipTlsVerify;
    this._tlsServerName = config.tlsServerName;
    this._token = config.token;
    this._tokenName = config.tokenName;
    this._alias = config.alias;
    this._authLogin = config.authLogin;
    this._clientAuth = config.clientAuth;
    this._headers = config.headers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_address_to_env - computed: false, optional: true, required: false
  private _addAddressToEnv?: string; 
  public get addAddressToEnv() {
    return this._addAddressToEnv;
  }
  public set addAddressToEnv(value: string | undefined) {
    this._addAddressToEnv = value;
  }
  public resetAddAddressToEnv() {
    this._addAddressToEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addAddressToEnvInput() {
    return this._addAddressToEnv;
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this._address;
  }
  public set address(value: string | undefined) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // ca_cert_dir - computed: false, optional: true, required: false
  private _caCertDir?: string; 
  public get caCertDir() {
    return this._caCertDir;
  }
  public set caCertDir(value: string | undefined) {
    this._caCertDir = value;
  }
  public resetCaCertDir() {
    this._caCertDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertDirInput() {
    return this._caCertDir;
  }

  // ca_cert_file - computed: false, optional: true, required: false
  private _caCertFile?: string; 
  public get caCertFile() {
    return this._caCertFile;
  }
  public set caCertFile(value: string | undefined) {
    this._caCertFile = value;
  }
  public resetCaCertFile() {
    this._caCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertFileInput() {
    return this._caCertFile;
  }

  // max_lease_ttl_seconds - computed: false, optional: true, required: false
  private _maxLeaseTtlSeconds?: number; 
  public get maxLeaseTtlSeconds() {
    return this._maxLeaseTtlSeconds;
  }
  public set maxLeaseTtlSeconds(value: number | undefined) {
    this._maxLeaseTtlSeconds = value;
  }
  public resetMaxLeaseTtlSeconds() {
    this._maxLeaseTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLeaseTtlSecondsInput() {
    return this._maxLeaseTtlSeconds;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // max_retries_ccc - computed: false, optional: true, required: false
  private _maxRetriesCcc?: number; 
  public get maxRetriesCcc() {
    return this._maxRetriesCcc;
  }
  public set maxRetriesCcc(value: number | undefined) {
    this._maxRetriesCcc = value;
  }
  public resetMaxRetriesCcc() {
    this._maxRetriesCcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesCccInput() {
    return this._maxRetriesCcc;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // skip_child_token - computed: false, optional: true, required: false
  private _skipChildToken?: boolean | cdktf.IResolvable; 
  public get skipChildToken() {
    return this._skipChildToken;
  }
  public set skipChildToken(value: boolean | cdktf.IResolvable | undefined) {
    this._skipChildToken = value;
  }
  public resetSkipChildToken() {
    this._skipChildToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipChildTokenInput() {
    return this._skipChildToken;
  }

  // skip_tls_verify - computed: false, optional: true, required: false
  private _skipTlsVerify?: boolean | cdktf.IResolvable; 
  public get skipTlsVerify() {
    return this._skipTlsVerify;
  }
  public set skipTlsVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._skipTlsVerify = value;
  }
  public resetSkipTlsVerify() {
    this._skipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTlsVerifyInput() {
    return this._skipTlsVerify;
  }

  // tls_server_name - computed: false, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this._tlsServerName;
  }
  public set tlsServerName(value: string | undefined) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // token_name - computed: false, optional: true, required: false
  private _tokenName?: string; 
  public get tokenName() {
    return this._tokenName;
  }
  public set tokenName(value: string | undefined) {
    this._tokenName = value;
  }
  public resetTokenName() {
    this._tokenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameInput() {
    return this._tokenName;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // auth_login - computed: false, optional: true, required: false
  private _authLogin?: VaultProviderAuthLogin[] | cdktf.IResolvable; 
  public get authLogin() {
    return this._authLogin;
  }
  public set authLogin(value: VaultProviderAuthLogin[] | cdktf.IResolvable | undefined) {
    this._authLogin = value;
  }
  public resetAuthLogin() {
    this._authLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginInput() {
    return this._authLogin;
  }

  // client_auth - computed: false, optional: true, required: false
  private _clientAuth?: VaultProviderClientAuth[] | cdktf.IResolvable; 
  public get clientAuth() {
    return this._clientAuth;
  }
  public set clientAuth(value: VaultProviderClientAuth[] | cdktf.IResolvable | undefined) {
    this._clientAuth = value;
  }
  public resetClientAuth() {
    this._clientAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: VaultProviderHeaders[] | cdktf.IResolvable; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: VaultProviderHeaders[] | cdktf.IResolvable | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_address_to_env: cdktf.stringToTerraform(this._addAddressToEnv),
      address: cdktf.stringToTerraform(this._address),
      ca_cert_dir: cdktf.stringToTerraform(this._caCertDir),
      ca_cert_file: cdktf.stringToTerraform(this._caCertFile),
      max_lease_ttl_seconds: cdktf.numberToTerraform(this._maxLeaseTtlSeconds),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      max_retries_ccc: cdktf.numberToTerraform(this._maxRetriesCcc),
      namespace: cdktf.stringToTerraform(this._namespace),
      skip_child_token: cdktf.booleanToTerraform(this._skipChildToken),
      skip_tls_verify: cdktf.booleanToTerraform(this._skipTlsVerify),
      tls_server_name: cdktf.stringToTerraform(this._tlsServerName),
      token: cdktf.stringToTerraform(this._token),
      token_name: cdktf.stringToTerraform(this._tokenName),
      alias: cdktf.stringToTerraform(this._alias),
      auth_login: cdktf.listMapper(vaultProviderAuthLoginToTerraform, true)(this._authLogin),
      client_auth: cdktf.listMapper(vaultProviderClientAuthToTerraform, true)(this._clientAuth),
      headers: cdktf.listMapper(vaultProviderHeadersToTerraform, true)(this._headers),
    };
  }
}
