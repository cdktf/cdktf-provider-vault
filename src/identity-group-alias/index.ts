// https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/identity_group_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityGroupAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the group to which this is an alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/identity_group_alias#canonical_id IdentityGroupAlias#canonical_id}
  */
  readonly canonicalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/identity_group_alias#id IdentityGroupAlias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mount accessor to which this alias belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/identity_group_alias#mount_accessor IdentityGroupAlias#mount_accessor}
  */
  readonly mountAccessor: string;
  /**
  * Name of the group alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/identity_group_alias#name IdentityGroupAlias#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/identity_group_alias#namespace IdentityGroupAlias#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/identity_group_alias vault_identity_group_alias}
*/
export class IdentityGroupAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_group_alias";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/identity_group_alias vault_identity_group_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityGroupAliasConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityGroupAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_group_alias',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.20.1',
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
    this._canonicalId = config.canonicalId;
    this._id = config.id;
    this._mountAccessor = config.mountAccessor;
    this._name = config.name;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canonical_id - computed: false, optional: false, required: true
  private _canonicalId?: string; 
  public get canonicalId() {
    return this.getStringAttribute('canonical_id');
  }
  public set canonicalId(value: string) {
    this._canonicalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalIdInput() {
    return this._canonicalId;
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

  // mount_accessor - computed: false, optional: false, required: true
  private _mountAccessor?: string; 
  public get mountAccessor() {
    return this.getStringAttribute('mount_accessor');
  }
  public set mountAccessor(value: string) {
    this._mountAccessor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountAccessorInput() {
    return this._mountAccessor;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      canonical_id: cdktf.stringToTerraform(this._canonicalId),
      id: cdktf.stringToTerraform(this._id),
      mount_accessor: cdktf.stringToTerraform(this._mountAccessor),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
