// https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityOidcProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The client IDs that are permitted to use the provider. If empty, no clients are allowed. If "*", all clients are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#allowed_client_ids IdentityOidcProvider#allowed_client_ids}
  */
  readonly allowedClientIds?: string[];
  /**
  * Set to true if the issuer endpoint uses HTTPS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#https_enabled IdentityOidcProvider#https_enabled}
  */
  readonly httpsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#id IdentityOidcProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The host for the issuer. Can be either host or host:port.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#issuer_host IdentityOidcProvider#issuer_host}
  */
  readonly issuerHost?: string;
  /**
  * The name of the provider.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#name IdentityOidcProvider#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#namespace IdentityOidcProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * The scopes available for requesting on the provider.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#scopes_supported IdentityOidcProvider#scopes_supported}
  */
  readonly scopesSupported?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider vault_identity_oidc_provider}
*/
export class IdentityOidcProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_oidc_provider";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider vault_identity_oidc_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityOidcProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityOidcProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_oidc_provider',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.8.2',
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
    this._allowedClientIds = config.allowedClientIds;
    this._httpsEnabled = config.httpsEnabled;
    this._id = config.id;
    this._issuerHost = config.issuerHost;
    this._name = config.name;
    this._namespace = config.namespace;
    this._scopesSupported = config.scopesSupported;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_client_ids - computed: false, optional: true, required: false
  private _allowedClientIds?: string[]; 
  public get allowedClientIds() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_client_ids'));
  }
  public set allowedClientIds(value: string[]) {
    this._allowedClientIds = value;
  }
  public resetAllowedClientIds() {
    this._allowedClientIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientIdsInput() {
    return this._allowedClientIds;
  }

  // https_enabled - computed: false, optional: true, required: false
  private _httpsEnabled?: boolean | cdktf.IResolvable; 
  public get httpsEnabled() {
    return this.getBooleanAttribute('https_enabled');
  }
  public set httpsEnabled(value: boolean | cdktf.IResolvable) {
    this._httpsEnabled = value;
  }
  public resetHttpsEnabled() {
    this._httpsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsEnabledInput() {
    return this._httpsEnabled;
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

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // issuer_host - computed: false, optional: true, required: false
  private _issuerHost?: string; 
  public get issuerHost() {
    return this.getStringAttribute('issuer_host');
  }
  public set issuerHost(value: string) {
    this._issuerHost = value;
  }
  public resetIssuerHost() {
    this._issuerHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerHostInput() {
    return this._issuerHost;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // scopes_supported - computed: false, optional: true, required: false
  private _scopesSupported?: string[]; 
  public get scopesSupported() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes_supported'));
  }
  public set scopesSupported(value: string[]) {
    this._scopesSupported = value;
  }
  public resetScopesSupported() {
    this._scopesSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesSupportedInput() {
    return this._scopesSupported;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_client_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedClientIds),
      https_enabled: cdktf.booleanToTerraform(this._httpsEnabled),
      id: cdktf.stringToTerraform(this._id),
      issuer_host: cdktf.stringToTerraform(this._issuerHost),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      scopes_supported: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopesSupported),
    };
  }
}
