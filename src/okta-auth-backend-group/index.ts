// https://www.terraform.io/docs/providers/vault/r/okta_auth_backend_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OktaAuthBackendGroupAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Okta group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend_group#group_name OktaAuthBackendGroupA#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend_group#id OktaAuthBackendGroupA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend_group#namespace OktaAuthBackendGroupA#namespace}
  */
  readonly namespace?: string;
  /**
  * Path to the Okta auth backend
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend_group#path OktaAuthBackendGroupA#path}
  */
  readonly path: string;
  /**
  * Policies to associate with this group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend_group#policies OktaAuthBackendGroupA#policies}
  */
  readonly policies?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend_group vault_okta_auth_backend_group}
*/
export class OktaAuthBackendGroupA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_okta_auth_backend_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend_group vault_okta_auth_backend_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OktaAuthBackendGroupAConfig
  */
  public constructor(scope: Construct, id: string, config: OktaAuthBackendGroupAConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_okta_auth_backend_group',
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
    this._groupName = config.groupName;
    this._id = config.id;
    this._namespace = config.namespace;
    this._path = config.path;
    this._policies = config.policies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
    };
  }
}
