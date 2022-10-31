// https://www.terraform.io/docs/providers/vault/r/identity_group_member_group_ids
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityGroupMemberGroupIdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, allows the resource to manage member group ids
exclusively. Beware of race conditions when disabling exclusive management
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_group_ids#exclusive IdentityGroupMemberGroupIds#exclusive}
  */
  readonly exclusive?: boolean | cdktf.IResolvable;
  /**
  * ID of the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_group_ids#group_id IdentityGroupMemberGroupIds#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_group_ids#id IdentityGroupMemberGroupIds#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Group IDs to be assigned as group members.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_group_ids#member_group_ids IdentityGroupMemberGroupIds#member_group_ids}
  */
  readonly memberGroupIds?: string[];
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_group_ids#namespace IdentityGroupMemberGroupIds#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_group_ids vault_identity_group_member_group_ids}
*/
export class IdentityGroupMemberGroupIds extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_group_member_group_ids";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_group_ids vault_identity_group_member_group_ids} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityGroupMemberGroupIdsConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityGroupMemberGroupIdsConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_group_member_group_ids',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.10.0',
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
    this._exclusive = config.exclusive;
    this._groupId = config.groupId;
    this._id = config.id;
    this._memberGroupIds = config.memberGroupIds;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclusive - computed: false, optional: true, required: false
  private _exclusive?: boolean | cdktf.IResolvable; 
  public get exclusive() {
    return this.getBooleanAttribute('exclusive');
  }
  public set exclusive(value: boolean | cdktf.IResolvable) {
    this._exclusive = value;
  }
  public resetExclusive() {
    this._exclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveInput() {
    return this._exclusive;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // member_group_ids - computed: false, optional: true, required: false
  private _memberGroupIds?: string[]; 
  public get memberGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('member_group_ids'));
  }
  public set memberGroupIds(value: string[]) {
    this._memberGroupIds = value;
  }
  public resetMemberGroupIds() {
    this._memberGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberGroupIdsInput() {
    return this._memberGroupIds;
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
      exclusive: cdktf.booleanToTerraform(this._exclusive),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      member_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberGroupIds),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}