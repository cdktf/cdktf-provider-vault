// https://www.terraform.io/docs/providers/vault/r/identity_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Manage member entities externally through `vault_identity_group_member_entity_ids`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#external_member_entity_ids IdentityGroup#external_member_entity_ids}
  */
  readonly externalMemberEntityIds?: boolean | cdktf.IResolvable;
  /**
  * Manage member groups externally through `vault_identity_group_member_group_ids`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#external_member_group_ids IdentityGroup#external_member_group_ids}
  */
  readonly externalMemberGroupIds?: boolean | cdktf.IResolvable;
  /**
  * Manage policies externally through `vault_identity_group_policies`, allows using group ID in assigned policies.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#external_policies IdentityGroup#external_policies}
  */
  readonly externalPolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#id IdentityGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Entity IDs to be assigned as group members.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#member_entity_ids IdentityGroup#member_entity_ids}
  */
  readonly memberEntityIds?: string[];
  /**
  * Group IDs to be assigned as group members.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#member_group_ids IdentityGroup#member_group_ids}
  */
  readonly memberGroupIds?: string[];
  /**
  * Metadata to be associated with the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#metadata IdentityGroup#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Name of the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#name IdentityGroup#name}
  */
  readonly name?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#namespace IdentityGroup#namespace}
  */
  readonly namespace?: string;
  /**
  * Policies to be tied to the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#policies IdentityGroup#policies}
  */
  readonly policies?: string[];
  /**
  * Type of the group, internal or external. Defaults to internal.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group#type IdentityGroup#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/identity_group vault_identity_group}
*/
export class IdentityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/identity_group vault_identity_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IdentityGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_group',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.14.0',
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
    this._externalMemberEntityIds = config.externalMemberEntityIds;
    this._externalMemberGroupIds = config.externalMemberGroupIds;
    this._externalPolicies = config.externalPolicies;
    this._id = config.id;
    this._memberEntityIds = config.memberEntityIds;
    this._memberGroupIds = config.memberGroupIds;
    this._metadata = config.metadata;
    this._name = config.name;
    this._namespace = config.namespace;
    this._policies = config.policies;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_member_entity_ids - computed: false, optional: true, required: false
  private _externalMemberEntityIds?: boolean | cdktf.IResolvable; 
  public get externalMemberEntityIds() {
    return this.getBooleanAttribute('external_member_entity_ids');
  }
  public set externalMemberEntityIds(value: boolean | cdktf.IResolvable) {
    this._externalMemberEntityIds = value;
  }
  public resetExternalMemberEntityIds() {
    this._externalMemberEntityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalMemberEntityIdsInput() {
    return this._externalMemberEntityIds;
  }

  // external_member_group_ids - computed: false, optional: true, required: false
  private _externalMemberGroupIds?: boolean | cdktf.IResolvable; 
  public get externalMemberGroupIds() {
    return this.getBooleanAttribute('external_member_group_ids');
  }
  public set externalMemberGroupIds(value: boolean | cdktf.IResolvable) {
    this._externalMemberGroupIds = value;
  }
  public resetExternalMemberGroupIds() {
    this._externalMemberGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalMemberGroupIdsInput() {
    return this._externalMemberGroupIds;
  }

  // external_policies - computed: false, optional: true, required: false
  private _externalPolicies?: boolean | cdktf.IResolvable; 
  public get externalPolicies() {
    return this.getBooleanAttribute('external_policies');
  }
  public set externalPolicies(value: boolean | cdktf.IResolvable) {
    this._externalPolicies = value;
  }
  public resetExternalPolicies() {
    this._externalPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPoliciesInput() {
    return this._externalPolicies;
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

  // member_entity_ids - computed: false, optional: true, required: false
  private _memberEntityIds?: string[]; 
  public get memberEntityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('member_entity_ids'));
  }
  public set memberEntityIds(value: string[]) {
    this._memberEntityIds = value;
  }
  public resetMemberEntityIds() {
    this._memberEntityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberEntityIdsInput() {
    return this._memberEntityIds;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
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
      external_member_entity_ids: cdktf.booleanToTerraform(this._externalMemberEntityIds),
      external_member_group_ids: cdktf.booleanToTerraform(this._externalMemberGroupIds),
      external_policies: cdktf.booleanToTerraform(this._externalPolicies),
      id: cdktf.stringToTerraform(this._id),
      member_entity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberEntityIds),
      member_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberGroupIds),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
