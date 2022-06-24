// https://www.terraform.io/docs/providers/vault/r/transit_secret_cache_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransitSecretCacheConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Transit secret backend the resource belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_cache_config#backend TransitSecretCacheConfig#backend}
  */
  readonly backend: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_cache_config#id TransitSecretCacheConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_cache_config#namespace TransitSecretCacheConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * Number of cache entries. A size of 0 mean unlimited.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_cache_config#size TransitSecretCacheConfig#size}
  */
  readonly size: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_cache_config vault_transit_secret_cache_config}
*/
export class TransitSecretCacheConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transit_secret_cache_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_cache_config vault_transit_secret_cache_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransitSecretCacheConfigConfig
  */
  public constructor(scope: Construct, id: string, config: TransitSecretCacheConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transit_secret_cache_config',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.7.0',
        providerVersionConstraint: '~> 3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backend = config.backend;
    this._id = config.id;
    this._namespace = config.namespace;
    this._size = config.size;
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      size: cdktf.numberToTerraform(this._size),
    };
  }
}
