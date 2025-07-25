/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kv_secret_subkeys_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultKvSecretSubkeysV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the deepest nesting level to provide in the output.If non-zero, keys that reside at the specified depth value will be artificially treated as leaves and will thus be 'null' even if further underlying sub-keys exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kv_secret_subkeys_v2#depth DataVaultKvSecretSubkeysV2#depth}
  */
  readonly depth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kv_secret_subkeys_v2#id DataVaultKvSecretSubkeysV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Path where KV-V2 engine is mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kv_secret_subkeys_v2#mount DataVaultKvSecretSubkeysV2#mount}
  */
  readonly mount: string;
  /**
  * Full name of the secret. For a nested secret, the name is the nested path excluding the mount and data prefix. For example, for a secret at 'kvv2/data/foo/bar/baz', the name is 'foo/bar/baz'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kv_secret_subkeys_v2#name DataVaultKvSecretSubkeysV2#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kv_secret_subkeys_v2#namespace DataVaultKvSecretSubkeysV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the version to return. If not set the latest version is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kv_secret_subkeys_v2#version DataVaultKvSecretSubkeysV2#version}
  */
  readonly version?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kv_secret_subkeys_v2 vault_kv_secret_subkeys_v2}
*/
export class DataVaultKvSecretSubkeysV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kv_secret_subkeys_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVaultKvSecretSubkeysV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVaultKvSecretSubkeysV2 to import
  * @param importFromId The id of the existing DataVaultKvSecretSubkeysV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kv_secret_subkeys_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVaultKvSecretSubkeysV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_kv_secret_subkeys_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kv_secret_subkeys_v2 vault_kv_secret_subkeys_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultKvSecretSubkeysV2Config
  */
  public constructor(scope: Construct, id: string, config: DataVaultKvSecretSubkeysV2Config) {
    super(scope, id, {
      terraformResourceType: 'vault_kv_secret_subkeys_v2',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.1.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._depth = config.depth;
    this._id = config.id;
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new cdktf.StringMap(this, "data");
  public get data() {
    return this._data;
  }

  // data_json - computed: true, optional: false, required: false
  public get dataJson() {
    return this.getStringAttribute('data_json');
  }

  // depth - computed: false, optional: true, required: false
  private _depth?: number; 
  public get depth() {
    return this.getNumberAttribute('depth');
  }
  public set depth(value: number) {
    this._depth = value;
  }
  public resetDepth() {
    this._depth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depthInput() {
    return this._depth;
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
      depth: cdktf.numberToTerraform(this._depth),
      id: cdktf.stringToTerraform(this._id),
      mount: cdktf.stringToTerraform(this._mount),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      version: cdktf.numberToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      depth: {
        value: cdktf.numberToHclTerraform(this._depth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount: {
        value: cdktf.stringToHclTerraform(this._mount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
