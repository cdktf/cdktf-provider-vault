// https://www.terraform.io/docs/providers/vault/d/transit_decrypt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultTransitDecryptConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Transit secret backend the key belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_decrypt#backend DataVaultTransitDecrypt#backend}
  */
  readonly backend: string;
  /**
  * Transit encrypted cipher text.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_decrypt#ciphertext DataVaultTransitDecrypt#ciphertext}
  */
  readonly ciphertext: string;
  /**
  * Specifies the context for key derivation
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_decrypt#context DataVaultTransitDecrypt#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_decrypt#id DataVaultTransitDecrypt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the decryption key to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_decrypt#key DataVaultTransitDecrypt#key}
  */
  readonly key: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_decrypt#namespace DataVaultTransitDecrypt#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/d/transit_decrypt vault_transit_decrypt}
*/
export class DataVaultTransitDecrypt extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transit_decrypt";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/d/transit_decrypt vault_transit_decrypt} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultTransitDecryptConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultTransitDecryptConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transit_decrypt',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.9.0',
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
    this._ciphertext = config.ciphertext;
    this._context = config.context;
    this._id = config.id;
    this._key = config.key;
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

  // ciphertext - computed: false, optional: false, required: true
  private _ciphertext?: string; 
  public get ciphertext() {
    return this.getStringAttribute('ciphertext');
  }
  public set ciphertext(value: string) {
    this._ciphertext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphertextInput() {
    return this._ciphertext;
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

  // plaintext - computed: true, optional: false, required: false
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      ciphertext: cdktf.stringToTerraform(this._ciphertext),
      context: cdktf.stringToTerraform(this._context),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
