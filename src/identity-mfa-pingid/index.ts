/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_pingid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityMfaPingidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_pingid#id IdentityMfaPingid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_pingid#namespace IdentityMfaPingid#namespace}
  */
  readonly namespace?: string;
  /**
  * A base64-encoded third-party settings contents as retrieved from PingID's configuration page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_pingid#settings_file_base64 IdentityMfaPingid#settings_file_base64}
  */
  readonly settingsFileBase64: string;
  /**
  * A template string for mapping Identity names to MFA methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_pingid#username_format IdentityMfaPingid#username_format}
  */
  readonly usernameFormat?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_pingid vault_identity_mfa_pingid}
*/
export class IdentityMfaPingid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_mfa_pingid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityMfaPingid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityMfaPingid to import
  * @param importFromId The id of the existing IdentityMfaPingid that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_pingid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityMfaPingid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_identity_mfa_pingid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_pingid vault_identity_mfa_pingid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityMfaPingidConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityMfaPingidConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_mfa_pingid',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.25.0',
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
    this._id = config.id;
    this._namespace = config.namespace;
    this._settingsFileBase64 = config.settingsFileBase64;
    this._usernameFormat = config.usernameFormat;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_url - computed: true, optional: false, required: false
  public get adminUrl() {
    return this.getStringAttribute('admin_url');
  }

  // authenticator_url - computed: true, optional: false, required: false
  public get authenticatorUrl() {
    return this.getStringAttribute('authenticator_url');
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

  // idp_url - computed: true, optional: false, required: false
  public get idpUrl() {
    return this.getStringAttribute('idp_url');
  }

  // method_id - computed: true, optional: false, required: false
  public get methodId() {
    return this.getStringAttribute('method_id');
  }

  // mount_accessor - computed: true, optional: false, required: false
  public get mountAccessor() {
    return this.getStringAttribute('mount_accessor');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // namespace_path - computed: true, optional: false, required: false
  public get namespacePath() {
    return this.getStringAttribute('namespace_path');
  }

  // org_alias - computed: true, optional: false, required: false
  public get orgAlias() {
    return this.getStringAttribute('org_alias');
  }

  // settings_file_base64 - computed: false, optional: false, required: true
  private _settingsFileBase64?: string; 
  public get settingsFileBase64() {
    return this.getStringAttribute('settings_file_base64');
  }
  public set settingsFileBase64(value: string) {
    this._settingsFileBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsFileBase64Input() {
    return this._settingsFileBase64;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_signature - computed: true, optional: false, required: false
  public get useSignature() {
    return this.getBooleanAttribute('use_signature');
  }

  // username_format - computed: false, optional: true, required: false
  private _usernameFormat?: string; 
  public get usernameFormat() {
    return this.getStringAttribute('username_format');
  }
  public set usernameFormat(value: string) {
    this._usernameFormat = value;
  }
  public resetUsernameFormat() {
    this._usernameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFormatInput() {
    return this._usernameFormat;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      settings_file_base64: cdktf.stringToTerraform(this._settingsFileBase64),
      username_format: cdktf.stringToTerraform(this._usernameFormat),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      settings_file_base64: {
        value: cdktf.stringToHclTerraform(this._settingsFileBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_format: {
        value: cdktf.stringToHclTerraform(this._usernameFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
