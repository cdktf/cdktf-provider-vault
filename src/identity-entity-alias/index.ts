/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityEntityAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the entity to which this is an alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias#canonical_id IdentityEntityAlias#canonical_id}
  */
  readonly canonicalId: string;
  /**
  * Custom metadata to be associated with this alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias#custom_metadata IdentityEntityAlias#custom_metadata}
  */
  readonly customMetadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias#id IdentityEntityAlias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mount accessor to which this alias belongs toMount accessor to which this alias belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias#mount_accessor IdentityEntityAlias#mount_accessor}
  */
  readonly mountAccessor: string;
  /**
  * Name of the entity alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias#name IdentityEntityAlias#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias#namespace IdentityEntityAlias#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias vault_identity_entity_alias}
*/
export class IdentityEntityAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_entity_alias";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_entity_alias vault_identity_entity_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityEntityAliasConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityEntityAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_entity_alias',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.21.0',
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
    this._customMetadata = config.customMetadata;
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

  // custom_metadata - computed: false, optional: true, required: false
  private _customMetadata?: { [key: string]: string }; 
  public get customMetadata() {
    return this.getStringMapAttribute('custom_metadata');
  }
  public set customMetadata(value: { [key: string]: string }) {
    this._customMetadata = value;
  }
  public resetCustomMetadata() {
    this._customMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataInput() {
    return this._customMetadata;
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
      custom_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._customMetadata),
      id: cdktf.stringToTerraform(this._id),
      mount_accessor: cdktf.stringToTerraform(this._mountAccessor),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
