// https://www.terraform.io/docs/providers/vault/r/egp_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EgpPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enforcement level of Sentinel policy. Can be one of: 'advisory', 'soft-mandatory' or 'hard-mandatory'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/egp_policy#enforcement_level EgpPolicy#enforcement_level}
  */
  readonly enforcementLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/egp_policy#id EgpPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/egp_policy#name EgpPolicy#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/egp_policy#namespace EgpPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * List of paths to which the policy will be applied
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/egp_policy#paths EgpPolicy#paths}
  */
  readonly paths: string[];
  /**
  * The policy document
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/egp_policy#policy EgpPolicy#policy}
  */
  readonly policy: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/egp_policy vault_egp_policy}
*/
export class EgpPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_egp_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/egp_policy vault_egp_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EgpPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EgpPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_egp_policy',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.9.0',
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
    this._enforcementLevel = config.enforcementLevel;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._paths = config.paths;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enforcement_level - computed: false, optional: false, required: true
  private _enforcementLevel?: string; 
  public get enforcementLevel() {
    return this.getStringAttribute('enforcement_level');
  }
  public set enforcementLevel(value: string) {
    this._enforcementLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementLevelInput() {
    return this._enforcementLevel;
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

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enforcement_level: cdktf.stringToTerraform(this._enforcementLevel),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._paths),
      policy: cdktf.stringToTerraform(this._policy),
    };
  }
}
