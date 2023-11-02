// https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultTransitEncryptConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Transit secret backend the key belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#backend DataVaultTransitEncrypt#backend}
  */
  readonly backend: string;
  /**
  * Specifies the context for key derivation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#context DataVaultTransitEncrypt#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#id DataVaultTransitEncrypt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the encryption key to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#key DataVaultTransitEncrypt#key}
  */
  readonly key: string;
  /**
  * The version of the key to use for encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#key_version DataVaultTransitEncrypt#key_version}
  */
  readonly keyVersion?: number;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#namespace DataVaultTransitEncrypt#namespace}
  */
  readonly namespace?: string;
  /**
  * Map of strings read from Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#plaintext DataVaultTransitEncrypt#plaintext}
  */
  readonly plaintext: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt vault_transit_encrypt}
*/
export class DataVaultTransitEncrypt extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transit_encrypt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVaultTransitEncrypt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVaultTransitEncrypt to import
  * @param importFromId The id of the existing DataVaultTransitEncrypt that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVaultTransitEncrypt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_transit_encrypt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt vault_transit_encrypt} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultTransitEncryptConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultTransitEncryptConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transit_encrypt',
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
    this._context = config.context;
    this._id = config.id;
    this._key = config.key;
    this._keyVersion = config.keyVersion;
    this._namespace = config.namespace;
    this._plaintext = config.plaintext;
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

  // ciphertext - computed: true, optional: false, required: false
  public get ciphertext() {
    return this.getStringAttribute('ciphertext');
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_version - computed: false, optional: true, required: false
  private _keyVersion?: number; 
  public get keyVersion() {
    return this.getNumberAttribute('key_version');
  }
  public set keyVersion(value: number) {
    this._keyVersion = value;
  }
  public resetKeyVersion() {
    this._keyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionInput() {
    return this._keyVersion;
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

  // plaintext - computed: false, optional: false, required: true
  private _plaintext?: string; 
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      context: cdktf.stringToTerraform(this._context),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      key_version: cdktf.numberToTerraform(this._keyVersion),
      namespace: cdktf.stringToTerraform(this._namespace),
      plaintext: cdktf.stringToTerraform(this._plaintext),
    };
  }
}
