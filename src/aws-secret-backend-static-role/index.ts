/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_secret_backend_static_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsSecretBackendStaticRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path where the AWS secrets backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_secret_backend_static_role#backend AwsSecretBackendStaticRole#backend}
  */
  readonly backend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_secret_backend_static_role#id AwsSecretBackendStaticRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_secret_backend_static_role#name AwsSecretBackendStaticRole#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_secret_backend_static_role#namespace AwsSecretBackendStaticRole#namespace}
  */
  readonly namespace?: string;
  /**
  * How often Vault should rotate the password of the user entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_secret_backend_static_role#rotation_period AwsSecretBackendStaticRole#rotation_period}
  */
  readonly rotationPeriod: number;
  /**
  * The username of the existing AWS IAM user to manage password rotation for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_secret_backend_static_role#username AwsSecretBackendStaticRole#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_secret_backend_static_role vault_aws_secret_backend_static_role}
*/
export class AwsSecretBackendStaticRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_aws_secret_backend_static_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_secret_backend_static_role vault_aws_secret_backend_static_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSecretBackendStaticRoleConfig
  */
  public constructor(scope: Construct, id: string, config: AwsSecretBackendStaticRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_aws_secret_backend_static_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.18.0',
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
    this._backend = config.backend;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._rotationPeriod = config.rotationPeriod;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: false, optional: true, required: false
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
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

  // rotation_period - computed: false, optional: false, required: true
  private _rotationPeriod?: number; 
  public get rotationPeriod() {
    return this.getNumberAttribute('rotation_period');
  }
  public set rotationPeriod(value: number) {
    this._rotationPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      rotation_period: cdktf.numberToTerraform(this._rotationPeriod),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
