/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsAuthBackendIdentityWhitelistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique name of the auth backend to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#backend AwsAuthBackendIdentityWhitelist#backend}
  */
  readonly backend?: string;
  /**
  * If true, disables the periodic tidying of the identiy whitelist entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#disable_periodic_tidy AwsAuthBackendIdentityWhitelist#disable_periodic_tidy}
  */
  readonly disablePeriodicTidy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#id AwsAuthBackendIdentityWhitelist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#namespace AwsAuthBackendIdentityWhitelist#namespace}
  */
  readonly namespace?: string;
  /**
  * The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#safety_buffer AwsAuthBackendIdentityWhitelist#safety_buffer}
  */
  readonly safetyBuffer?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist vault_aws_auth_backend_identity_whitelist}
*/
export class AwsAuthBackendIdentityWhitelist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_aws_auth_backend_identity_whitelist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsAuthBackendIdentityWhitelist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAuthBackendIdentityWhitelist to import
  * @param importFromId The id of the existing AwsAuthBackendIdentityWhitelist that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAuthBackendIdentityWhitelist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_aws_auth_backend_identity_whitelist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist vault_aws_auth_backend_identity_whitelist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAuthBackendIdentityWhitelistConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsAuthBackendIdentityWhitelistConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_aws_auth_backend_identity_whitelist',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.4.0',
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
    this._backend = config.backend;
    this._disablePeriodicTidy = config.disablePeriodicTidy;
    this._id = config.id;
    this._namespace = config.namespace;
    this._safetyBuffer = config.safetyBuffer;
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

  // disable_periodic_tidy - computed: false, optional: true, required: false
  private _disablePeriodicTidy?: boolean | cdktf.IResolvable; 
  public get disablePeriodicTidy() {
    return this.getBooleanAttribute('disable_periodic_tidy');
  }
  public set disablePeriodicTidy(value: boolean | cdktf.IResolvable) {
    this._disablePeriodicTidy = value;
  }
  public resetDisablePeriodicTidy() {
    this._disablePeriodicTidy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePeriodicTidyInput() {
    return this._disablePeriodicTidy;
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

  // safety_buffer - computed: false, optional: true, required: false
  private _safetyBuffer?: number; 
  public get safetyBuffer() {
    return this.getNumberAttribute('safety_buffer');
  }
  public set safetyBuffer(value: number) {
    this._safetyBuffer = value;
  }
  public resetSafetyBuffer() {
    this._safetyBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safetyBufferInput() {
    return this._safetyBuffer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      disable_periodic_tidy: cdktf.booleanToTerraform(this._disablePeriodicTidy),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      safety_buffer: cdktf.numberToTerraform(this._safetyBuffer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_periodic_tidy: {
        value: cdktf.booleanToHclTerraform(this._disablePeriodicTidy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      safety_buffer: {
        value: cdktf.numberToHclTerraform(this._safetyBuffer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
