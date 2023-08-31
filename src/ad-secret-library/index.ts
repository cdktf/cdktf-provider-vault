/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ad_secret_library
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdSecretLibraryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The mount path for the AD backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ad_secret_library#backend AdSecretLibrary#backend}
  */
  readonly backend: string;
  /**
  * Disable enforcing that service accounts must be checked in by the entity or client token that checked them out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ad_secret_library#disable_check_in_enforcement AdSecretLibrary#disable_check_in_enforcement}
  */
  readonly disableCheckInEnforcement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ad_secret_library#id AdSecretLibrary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum amount of time, in seconds, a check-out last with renewal before Vault automatically checks it back in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ad_secret_library#max_ttl AdSecretLibrary#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * The name of the set of service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ad_secret_library#name AdSecretLibrary#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ad_secret_library#namespace AdSecretLibrary#namespace}
  */
  readonly namespace?: string;
  /**
  * The names of all the service accounts that can be checked out from this set. These service accounts must already exist in Active Directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ad_secret_library#service_account_names AdSecretLibrary#service_account_names}
  */
  readonly serviceAccountNames: string[];
  /**
  * The amount of time, in seconds, a single check-out lasts before Vault automatically checks it back in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ad_secret_library#ttl AdSecretLibrary#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ad_secret_library vault_ad_secret_library}
*/
export class AdSecretLibrary extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_ad_secret_library";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ad_secret_library vault_ad_secret_library} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdSecretLibraryConfig
  */
  public constructor(scope: Construct, id: string, config: AdSecretLibraryConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_ad_secret_library',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.20.0',
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
    this._disableCheckInEnforcement = config.disableCheckInEnforcement;
    this._id = config.id;
    this._maxTtl = config.maxTtl;
    this._name = config.name;
    this._namespace = config.namespace;
    this._serviceAccountNames = config.serviceAccountNames;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // disable_check_in_enforcement - computed: false, optional: true, required: false
  private _disableCheckInEnforcement?: boolean | cdktf.IResolvable; 
  public get disableCheckInEnforcement() {
    return this.getBooleanAttribute('disable_check_in_enforcement');
  }
  public set disableCheckInEnforcement(value: boolean | cdktf.IResolvable) {
    this._disableCheckInEnforcement = value;
  }
  public resetDisableCheckInEnforcement() {
    this._disableCheckInEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCheckInEnforcementInput() {
    return this._disableCheckInEnforcement;
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

  // max_ttl - computed: true, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
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

  // service_account_names - computed: false, optional: false, required: true
  private _serviceAccountNames?: string[]; 
  public get serviceAccountNames() {
    return this.getListAttribute('service_account_names');
  }
  public set serviceAccountNames(value: string[]) {
    this._serviceAccountNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNamesInput() {
    return this._serviceAccountNames;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      disable_check_in_enforcement: cdktf.booleanToTerraform(this._disableCheckInEnforcement),
      id: cdktf.stringToTerraform(this._id),
      max_ttl: cdktf.numberToTerraform(this._maxTtl),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      service_account_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceAccountNames),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }
}
