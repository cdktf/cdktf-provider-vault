/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_oidc_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityOidcAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of Vault entity IDs.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_oidc_assignment#entity_ids IdentityOidcAssignment#entity_ids}
  */
  readonly entityIds?: string[];
  /**
  * A list of Vault group IDs.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_oidc_assignment#group_ids IdentityOidcAssignment#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_oidc_assignment#id IdentityOidcAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the assignment.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_oidc_assignment#name IdentityOidcAssignment#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_oidc_assignment#namespace IdentityOidcAssignment#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_oidc_assignment vault_identity_oidc_assignment}
*/
export class IdentityOidcAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_oidc_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_oidc_assignment vault_identity_oidc_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityOidcAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityOidcAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_oidc_assignment',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.15.2',
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
    this._entityIds = config.entityIds;
    this._groupIds = config.groupIds;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity_ids - computed: false, optional: true, required: false
  private _entityIds?: string[]; 
  public get entityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('entity_ids'));
  }
  public set entityIds(value: string[]) {
    this._entityIds = value;
  }
  public resetEntityIds() {
    this._entityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdsInput() {
    return this._entityIds;
  }

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._entityIds),
      group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
