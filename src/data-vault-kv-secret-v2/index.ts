// https://www.terraform.io/docs/providers/vault/d/kv_secret_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultKvSecretV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/kv_secret_v2#id DataVaultKvSecretV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Path where KV-V2 engine is mounted
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/kv_secret_v2#mount DataVaultKvSecretV2#mount}
  */
  readonly mount: string;
  /**
  * Full name of the secret. For a nested secret, the name is the nested path excluding the mount and data prefix. For example, for a secret at 'kvv2/data/foo/bar/baz', the name is 'foo/bar/baz'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/kv_secret_v2#name DataVaultKvSecretV2#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/kv_secret_v2#namespace DataVaultKvSecretV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Version of the secret to retrieve
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/kv_secret_v2#version DataVaultKvSecretV2#version}
  */
  readonly version?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/d/kv_secret_v2 vault_kv_secret_v2}
*/
export class DataVaultKvSecretV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kv_secret_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/d/kv_secret_v2 vault_kv_secret_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultKvSecretV2Config
  */
  public constructor(scope: Construct, id: string, config: DataVaultKvSecretV2Config) {
    super(scope, id, {
      terraformResourceType: 'vault_kv_secret_v2',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.9.1',
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
    this._id = config.id;
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // custom_metadata - computed: true, optional: false, required: false
  private _customMetadata = new cdktf.StringMap(this, "custom_metadata");
  public get customMetadata() {
    return this._customMetadata;
  }

  // data - computed: true, optional: false, required: false
  private _data = new cdktf.StringMap(this, "data");
  public get data() {
    return this._data;
  }

  // data_json - computed: true, optional: false, required: false
  public get dataJson() {
    return this.getStringAttribute('data_json');
  }

  // deletion_time - computed: true, optional: false, required: false
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }

  // destroyed - computed: true, optional: false, required: false
  public get destroyed() {
    return this.getBooleanAttribute('destroyed');
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

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mount: cdktf.stringToTerraform(this._mount),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      version: cdktf.numberToTerraform(this._version),
    };
  }
}
