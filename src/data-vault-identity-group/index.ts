/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultIdentityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#alias_id DataVaultIdentityGroup#alias_id}
  */
  readonly aliasId?: string;
  /**
  * Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#alias_mount_accessor DataVaultIdentityGroup#alias_mount_accessor}
  */
  readonly aliasMountAccessor?: string;
  /**
  * Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#alias_name DataVaultIdentityGroup#alias_name}
  */
  readonly aliasName?: string;
  /**
  * ID of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#group_id DataVaultIdentityGroup#group_id}
  */
  readonly groupId?: string;
  /**
  * Name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#group_name DataVaultIdentityGroup#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#id DataVaultIdentityGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#namespace DataVaultIdentityGroup#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group vault_identity_group}
*/
export class DataVaultIdentityGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVaultIdentityGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVaultIdentityGroup to import
  * @param importFromId The id of the existing DataVaultIdentityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVaultIdentityGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_identity_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_group vault_identity_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultIdentityGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVaultIdentityGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_group',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.23.0',
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
    this._aliasId = config.aliasId;
    this._aliasMountAccessor = config.aliasMountAccessor;
    this._aliasName = config.aliasName;
    this._groupId = config.groupId;
    this._groupName = config.groupName;
    this._id = config.id;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_canonical_id - computed: true, optional: false, required: false
  public get aliasCanonicalId() {
    return this.getStringAttribute('alias_canonical_id');
  }

  // alias_creation_time - computed: true, optional: false, required: false
  public get aliasCreationTime() {
    return this.getStringAttribute('alias_creation_time');
  }

  // alias_id - computed: true, optional: true, required: false
  private _aliasId?: string; 
  public get aliasId() {
    return this.getStringAttribute('alias_id');
  }
  public set aliasId(value: string) {
    this._aliasId = value;
  }
  public resetAliasId() {
    this._aliasId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasIdInput() {
    return this._aliasId;
  }

  // alias_last_update_time - computed: true, optional: false, required: false
  public get aliasLastUpdateTime() {
    return this.getStringAttribute('alias_last_update_time');
  }

  // alias_merged_from_canonical_ids - computed: true, optional: false, required: false
  public get aliasMergedFromCanonicalIds() {
    return cdktf.Fn.tolist(this.getListAttribute('alias_merged_from_canonical_ids'));
  }

  // alias_metadata - computed: true, optional: false, required: false
  private _aliasMetadata = new cdktf.StringMap(this, "alias_metadata");
  public get aliasMetadata() {
    return this._aliasMetadata;
  }

  // alias_mount_accessor - computed: true, optional: true, required: false
  private _aliasMountAccessor?: string; 
  public get aliasMountAccessor() {
    return this.getStringAttribute('alias_mount_accessor');
  }
  public set aliasMountAccessor(value: string) {
    this._aliasMountAccessor = value;
  }
  public resetAliasMountAccessor() {
    this._aliasMountAccessor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasMountAccessorInput() {
    return this._aliasMountAccessor;
  }

  // alias_mount_path - computed: true, optional: false, required: false
  public get aliasMountPath() {
    return this.getStringAttribute('alias_mount_path');
  }

  // alias_mount_type - computed: true, optional: false, required: false
  public get aliasMountType() {
    return this.getStringAttribute('alias_mount_type');
  }

  // alias_name - computed: true, optional: true, required: false
  private _aliasName?: string; 
  public get aliasName() {
    return this.getStringAttribute('alias_name');
  }
  public set aliasName(value: string) {
    this._aliasName = value;
  }
  public resetAliasName() {
    this._aliasName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasNameInput() {
    return this._aliasName;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // data_json - computed: true, optional: false, required: false
  public get dataJson() {
    return this.getStringAttribute('data_json');
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // member_entity_ids - computed: true, optional: false, required: false
  public get memberEntityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('member_entity_ids'));
  }

  // member_group_ids - computed: true, optional: false, required: false
  public get memberGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('member_group_ids'));
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // modify_index - computed: true, optional: false, required: false
  public get modifyIndex() {
    return this.getNumberAttribute('modify_index');
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

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // parent_group_ids - computed: true, optional: false, required: false
  public get parentGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('parent_group_ids'));
  }

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_id: cdktf.stringToTerraform(this._aliasId),
      alias_mount_accessor: cdktf.stringToTerraform(this._aliasMountAccessor),
      alias_name: cdktf.stringToTerraform(this._aliasName),
      group_id: cdktf.stringToTerraform(this._groupId),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias_id: {
        value: cdktf.stringToHclTerraform(this._aliasId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias_mount_accessor: {
        value: cdktf.stringToHclTerraform(this._aliasMountAccessor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias_name: {
        value: cdktf.stringToHclTerraform(this._aliasName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
