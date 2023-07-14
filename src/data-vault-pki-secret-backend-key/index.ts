// https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/pki_secret_backend_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultPkiSecretBackendKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Full path where PKI backend is mounted.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/pki_secret_backend_key#backend DataVaultPkiSecretBackendKey#backend}
  */
  readonly backend: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/pki_secret_backend_key#id DataVaultPkiSecretBackendKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Reference to an existing key.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/pki_secret_backend_key#key_ref DataVaultPkiSecretBackendKey#key_ref}
  */
  readonly keyRef: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/pki_secret_backend_key#namespace DataVaultPkiSecretBackendKey#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/pki_secret_backend_key vault_pki_secret_backend_key}
*/
export class DataVaultPkiSecretBackendKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/pki_secret_backend_key vault_pki_secret_backend_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultPkiSecretBackendKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultPkiSecretBackendKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_key',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.18.0',
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
    this._id = config.id;
    this._keyRef = config.keyRef;
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

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // key_ref - computed: false, optional: false, required: true
  private _keyRef?: string; 
  public get keyRef() {
    return this.getStringAttribute('key_ref');
  }
  public set keyRef(value: string) {
    this._keyRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRefInput() {
    return this._keyRef;
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
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
      id: cdktf.stringToTerraform(this._id),
      key_ref: cdktf.stringToTerraform(this._keyRef),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
