/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_oidc_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityOidcKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Signing algorithm to use. Signing algorithm to use. Allowed values are: RS256 (default), RS384, RS512, ES256, ES384, ES512, EdDSA.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_oidc_key#algorithm IdentityOidcKey#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Array of role client ids allowed to use this key for signing. If empty, no roles are allowed. If "*", all roles are allowed.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_oidc_key#allowed_client_ids IdentityOidcKey#allowed_client_ids}
  */
  readonly allowedClientIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_oidc_key#id IdentityOidcKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the key.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_oidc_key#name IdentityOidcKey#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_oidc_key#namespace IdentityOidcKey#namespace}
  */
  readonly namespace?: string;
  /**
  * How often to generate a new signing key in number of seconds
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_oidc_key#rotation_period IdentityOidcKey#rotation_period}
  */
  readonly rotationPeriod?: number;
  /**
  * Controls how long the public portion of a signing key will be available for verification after being rotated in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_oidc_key#verification_ttl IdentityOidcKey#verification_ttl}
  */
  readonly verificationTtl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_oidc_key vault_identity_oidc_key}
*/
export class IdentityOidcKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_oidc_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_oidc_key vault_identity_oidc_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityOidcKeyConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityOidcKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_oidc_key',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.16.0',
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
    this._algorithm = config.algorithm;
    this._allowedClientIds = config.allowedClientIds;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._rotationPeriod = config.rotationPeriod;
    this._verificationTtl = config.verificationTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // allowed_client_ids - computed: true, optional: true, required: false
  private _allowedClientIds?: string[]; 
  public get allowedClientIds() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_client_ids'));
  }
  public set allowedClientIds(value: string[]) {
    this._allowedClientIds = value;
  }
  public resetAllowedClientIds() {
    this._allowedClientIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientIdsInput() {
    return this._allowedClientIds;
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

  // rotation_period - computed: false, optional: true, required: false
  private _rotationPeriod?: number; 
  public get rotationPeriod() {
    return this.getNumberAttribute('rotation_period');
  }
  public set rotationPeriod(value: number) {
    this._rotationPeriod = value;
  }
  public resetRotationPeriod() {
    this._rotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }

  // verification_ttl - computed: false, optional: true, required: false
  private _verificationTtl?: number; 
  public get verificationTtl() {
    return this.getNumberAttribute('verification_ttl');
  }
  public set verificationTtl(value: number) {
    this._verificationTtl = value;
  }
  public resetVerificationTtl() {
    this._verificationTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationTtlInput() {
    return this._verificationTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      allowed_client_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedClientIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      rotation_period: cdktf.numberToTerraform(this._rotationPeriod),
      verification_ttl: cdktf.numberToTerraform(this._verificationTtl),
    };
  }
}
