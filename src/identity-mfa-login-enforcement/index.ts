// https://www.terraform.io/docs/providers/vault/r/identity_mfa_login_enforcement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityMfaLoginEnforcementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of auth method accessor IDs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_login_enforcement#auth_method_accessors IdentityMfaLoginEnforcement#auth_method_accessors}
  */
  readonly authMethodAccessors?: string[];
  /**
  * Set of auth method types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_login_enforcement#auth_method_types IdentityMfaLoginEnforcement#auth_method_types}
  */
  readonly authMethodTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_login_enforcement#id IdentityMfaLoginEnforcement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of identity entity IDs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_login_enforcement#identity_entity_ids IdentityMfaLoginEnforcement#identity_entity_ids}
  */
  readonly identityEntityIds?: string[];
  /**
  * Set of identity group IDs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_login_enforcement#identity_group_ids IdentityMfaLoginEnforcement#identity_group_ids}
  */
  readonly identityGroupIds?: string[];
  /**
  * Set of MFA method UUIDs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_login_enforcement#mfa_method_ids IdentityMfaLoginEnforcement#mfa_method_ids}
  */
  readonly mfaMethodIds: string[];
  /**
  * Login enforcement name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_login_enforcement#name IdentityMfaLoginEnforcement#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_login_enforcement#namespace IdentityMfaLoginEnforcement#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_login_enforcement vault_identity_mfa_login_enforcement}
*/
export class IdentityMfaLoginEnforcement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_mfa_login_enforcement";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_login_enforcement vault_identity_mfa_login_enforcement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityMfaLoginEnforcementConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityMfaLoginEnforcementConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_mfa_login_enforcement',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.12.0',
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
    this._authMethodAccessors = config.authMethodAccessors;
    this._authMethodTypes = config.authMethodTypes;
    this._id = config.id;
    this._identityEntityIds = config.identityEntityIds;
    this._identityGroupIds = config.identityGroupIds;
    this._mfaMethodIds = config.mfaMethodIds;
    this._name = config.name;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_method_accessors - computed: false, optional: true, required: false
  private _authMethodAccessors?: string[]; 
  public get authMethodAccessors() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_method_accessors'));
  }
  public set authMethodAccessors(value: string[]) {
    this._authMethodAccessors = value;
  }
  public resetAuthMethodAccessors() {
    this._authMethodAccessors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodAccessorsInput() {
    return this._authMethodAccessors;
  }

  // auth_method_types - computed: false, optional: true, required: false
  private _authMethodTypes?: string[]; 
  public get authMethodTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_method_types'));
  }
  public set authMethodTypes(value: string[]) {
    this._authMethodTypes = value;
  }
  public resetAuthMethodTypes() {
    this._authMethodTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodTypesInput() {
    return this._authMethodTypes;
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

  // identity_entity_ids - computed: false, optional: true, required: false
  private _identityEntityIds?: string[]; 
  public get identityEntityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_entity_ids'));
  }
  public set identityEntityIds(value: string[]) {
    this._identityEntityIds = value;
  }
  public resetIdentityEntityIds() {
    this._identityEntityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityEntityIdsInput() {
    return this._identityEntityIds;
  }

  // identity_group_ids - computed: false, optional: true, required: false
  private _identityGroupIds?: string[]; 
  public get identityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_group_ids'));
  }
  public set identityGroupIds(value: string[]) {
    this._identityGroupIds = value;
  }
  public resetIdentityGroupIds() {
    this._identityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityGroupIdsInput() {
    return this._identityGroupIds;
  }

  // mfa_method_ids - computed: false, optional: false, required: true
  private _mfaMethodIds?: string[]; 
  public get mfaMethodIds() {
    return cdktf.Fn.tolist(this.getListAttribute('mfa_method_ids'));
  }
  public set mfaMethodIds(value: string[]) {
    this._mfaMethodIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaMethodIdsInput() {
    return this._mfaMethodIds;
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

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // namespace_path - computed: true, optional: false, required: false
  public get namespacePath() {
    return this.getStringAttribute('namespace_path');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_method_accessors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authMethodAccessors),
      auth_method_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authMethodTypes),
      id: cdktf.stringToTerraform(this._id),
      identity_entity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._identityEntityIds),
      identity_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._identityGroupIds),
      mfa_method_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mfaMethodIds),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
