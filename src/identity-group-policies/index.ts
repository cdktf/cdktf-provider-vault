// https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityGroupPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Should the resource manage policies exclusively? Beware of race conditions when disabling exclusive management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_policies#exclusive IdentityGroupPolicies#exclusive}
  */
  readonly exclusive?: boolean | cdktf.IResolvable;
  /**
  * ID of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_policies#group_id IdentityGroupPolicies#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_policies#id IdentityGroupPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_policies#namespace IdentityGroupPolicies#namespace}
  */
  readonly namespace?: string;
  /**
  * Policies to be tied to the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_policies#policies IdentityGroupPolicies#policies}
  */
  readonly policies: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_policies vault_identity_group_policies}
*/
export class IdentityGroupPolicies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_group_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityGroupPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityGroupPolicies to import
  * @param importFromId The id of the existing IdentityGroupPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityGroupPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_identity_group_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_policies vault_identity_group_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityGroupPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityGroupPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_group_policies',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.1.0',
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
    this._exclusive = config.exclusive;
    this._groupId = config.groupId;
    this._id = config.id;
    this._namespace = config.namespace;
    this._policies = config.policies;
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

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
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

  // policies - computed: false, optional: false, required: true
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclusive: cdktf.booleanToTerraform(this._exclusive),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclusive: {
        value: cdktf.booleanToHclTerraform(this._exclusive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
