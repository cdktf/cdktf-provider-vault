// https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_config_issuers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendConfigIssuersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Full path where PKI backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_config_issuers#backend PkiSecretBackendConfigIssuers#backend}
  */
  readonly backend: string;
  /**
  * Specifies the default issuer by ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_config_issuers#default PkiSecretBackendConfigIssuers#default}
  */
  readonly default?: string;
  /**
  * Specifies whether a root creation or an issuer import operation updates the default issuer to the newly added issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_config_issuers#default_follows_latest_issuer PkiSecretBackendConfigIssuers#default_follows_latest_issuer}
  */
  readonly defaultFollowsLatestIssuer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_config_issuers#id PkiSecretBackendConfigIssuers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_config_issuers#namespace PkiSecretBackendConfigIssuers#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_config_issuers vault_pki_secret_backend_config_issuers}
*/
export class PkiSecretBackendConfigIssuers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_config_issuers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiSecretBackendConfigIssuers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendConfigIssuers to import
  * @param importFromId The id of the existing PkiSecretBackendConfigIssuers that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_config_issuers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendConfigIssuers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_config_issuers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_config_issuers vault_pki_secret_backend_config_issuers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendConfigIssuersConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendConfigIssuersConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_config_issuers',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.21.0',
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
    this._backend = config.backend;
    this._default = config.default;
    this._defaultFollowsLatestIssuer = config.defaultFollowsLatestIssuer;
    this._id = config.id;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // default_follows_latest_issuer - computed: true, optional: true, required: false
  private _defaultFollowsLatestIssuer?: boolean | cdktf.IResolvable; 
  public get defaultFollowsLatestIssuer() {
    return this.getBooleanAttribute('default_follows_latest_issuer');
  }
  public set defaultFollowsLatestIssuer(value: boolean | cdktf.IResolvable) {
    this._defaultFollowsLatestIssuer = value;
  }
  public resetDefaultFollowsLatestIssuer() {
    this._defaultFollowsLatestIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFollowsLatestIssuerInput() {
    return this._defaultFollowsLatestIssuer;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      default: cdktf.stringToTerraform(this._default),
      default_follows_latest_issuer: cdktf.booleanToTerraform(this._defaultFollowsLatestIssuer),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
