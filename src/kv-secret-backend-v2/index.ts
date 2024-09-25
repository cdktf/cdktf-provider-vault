/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/kv_secret_backend_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KvSecretBackendV2Config extends cdktf.TerraformMetaArguments {
  /**
  * If true, all keys will require the cas parameter to be set on all write requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/kv_secret_backend_v2#cas_required KvSecretBackendV2#cas_required}
  */
  readonly casRequired?: boolean | cdktf.IResolvable;
  /**
  * If set, specifies the length of time before a version is deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/kv_secret_backend_v2#delete_version_after KvSecretBackendV2#delete_version_after}
  */
  readonly deleteVersionAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/kv_secret_backend_v2#id KvSecretBackendV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The number of versions to keep per key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/kv_secret_backend_v2#max_versions KvSecretBackendV2#max_versions}
  */
  readonly maxVersions?: number;
  /**
  * Path where KV-V2 engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/kv_secret_backend_v2#mount KvSecretBackendV2#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/kv_secret_backend_v2#namespace KvSecretBackendV2#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/kv_secret_backend_v2 vault_kv_secret_backend_v2}
*/
export class KvSecretBackendV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kv_secret_backend_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KvSecretBackendV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KvSecretBackendV2 to import
  * @param importFromId The id of the existing KvSecretBackendV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/kv_secret_backend_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KvSecretBackendV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_kv_secret_backend_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/kv_secret_backend_v2 vault_kv_secret_backend_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KvSecretBackendV2Config
  */
  public constructor(scope: Construct, id: string, config: KvSecretBackendV2Config) {
    super(scope, id, {
      terraformResourceType: 'vault_kv_secret_backend_v2',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.4.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._casRequired = config.casRequired;
    this._deleteVersionAfter = config.deleteVersionAfter;
    this._id = config.id;
    this._maxVersions = config.maxVersions;
    this._mount = config.mount;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cas_required - computed: true, optional: true, required: false
  private _casRequired?: boolean | cdktf.IResolvable; 
  public get casRequired() {
    return this.getBooleanAttribute('cas_required');
  }
  public set casRequired(value: boolean | cdktf.IResolvable) {
    this._casRequired = value;
  }
  public resetCasRequired() {
    this._casRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casRequiredInput() {
    return this._casRequired;
  }

  // delete_version_after - computed: false, optional: true, required: false
  private _deleteVersionAfter?: number; 
  public get deleteVersionAfter() {
    return this.getNumberAttribute('delete_version_after');
  }
  public set deleteVersionAfter(value: number) {
    this._deleteVersionAfter = value;
  }
  public resetDeleteVersionAfter() {
    this._deleteVersionAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVersionAfterInput() {
    return this._deleteVersionAfter;
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

  // max_versions - computed: true, optional: true, required: false
  private _maxVersions?: number; 
  public get maxVersions() {
    return this.getNumberAttribute('max_versions');
  }
  public set maxVersions(value: number) {
    this._maxVersions = value;
  }
  public resetMaxVersions() {
    this._maxVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionsInput() {
    return this._maxVersions;
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
      cas_required: cdktf.booleanToTerraform(this._casRequired),
      delete_version_after: cdktf.numberToTerraform(this._deleteVersionAfter),
      id: cdktf.stringToTerraform(this._id),
      max_versions: cdktf.numberToTerraform(this._maxVersions),
      mount: cdktf.stringToTerraform(this._mount),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cas_required: {
        value: cdktf.booleanToHclTerraform(this._casRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_version_after: {
        value: cdktf.numberToHclTerraform(this._deleteVersionAfter),
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
      max_versions: {
        value: cdktf.numberToHclTerraform(this._maxVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mount: {
        value: cdktf.stringToHclTerraform(this._mount),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
