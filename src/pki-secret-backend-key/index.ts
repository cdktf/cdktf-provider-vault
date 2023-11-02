// https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Full path where PKI backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_key#backend PkiSecretBackendKey#backend}
  */
  readonly backend: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_key#id PkiSecretBackendKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the number of bits to use for the generated keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_key#key_bits PkiSecretBackendKey#key_bits}
  */
  readonly keyBits?: number;
  /**
  * When a new key is created with this request, optionally specifies the name for this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_key#key_name PkiSecretBackendKey#key_name}
  */
  readonly keyName?: string;
  /**
  * Specifies the desired key type; must be 'rsa', 'ed25519' or 'ec'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_key#key_type PkiSecretBackendKey#key_type}
  */
  readonly keyType?: string;
  /**
  * The managed key's UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_key#managed_key_id PkiSecretBackendKey#managed_key_id}
  */
  readonly managedKeyId?: string;
  /**
  * The managed key's configured name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_key#managed_key_name PkiSecretBackendKey#managed_key_name}
  */
  readonly managedKeyName?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_key#namespace PkiSecretBackendKey#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the type of the key to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_key#type PkiSecretBackendKey#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_key vault_pki_secret_backend_key}
*/
export class PkiSecretBackendKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiSecretBackendKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendKey to import
  * @param importFromId The id of the existing PkiSecretBackendKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_key vault_pki_secret_backend_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendKeyConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_key',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.22.0',
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
    this._keyBits = config.keyBits;
    this._keyName = config.keyName;
    this._keyType = config.keyType;
    this._managedKeyId = config.managedKeyId;
    this._managedKeyName = config.managedKeyName;
    this._namespace = config.namespace;
    this._type = config.type;
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

  // key_bits - computed: true, optional: true, required: false
  private _keyBits?: number; 
  public get keyBits() {
    return this.getNumberAttribute('key_bits');
  }
  public set keyBits(value: number) {
    this._keyBits = value;
  }
  public resetKeyBits() {
    this._keyBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyBitsInput() {
    return this._keyBits;
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // managed_key_id - computed: false, optional: true, required: false
  private _managedKeyId?: string; 
  public get managedKeyId() {
    return this.getStringAttribute('managed_key_id');
  }
  public set managedKeyId(value: string) {
    this._managedKeyId = value;
  }
  public resetManagedKeyId() {
    this._managedKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedKeyIdInput() {
    return this._managedKeyId;
  }

  // managed_key_name - computed: false, optional: true, required: false
  private _managedKeyName?: string; 
  public get managedKeyName() {
    return this.getStringAttribute('managed_key_name');
  }
  public set managedKeyName(value: string) {
    this._managedKeyName = value;
  }
  public resetManagedKeyName() {
    this._managedKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedKeyNameInput() {
    return this._managedKeyName;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      id: cdktf.stringToTerraform(this._id),
      key_bits: cdktf.numberToTerraform(this._keyBits),
      key_name: cdktf.stringToTerraform(this._keyName),
      key_type: cdktf.stringToTerraform(this._keyType),
      managed_key_id: cdktf.stringToTerraform(this._managedKeyId),
      managed_key_name: cdktf.stringToTerraform(this._managedKeyName),
      namespace: cdktf.stringToTerraform(this._namespace),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
