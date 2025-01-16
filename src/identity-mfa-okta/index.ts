// https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/identity_mfa_okta
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityMfaOktaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Okta API token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/identity_mfa_okta#api_token IdentityMfaOkta#api_token}
  */
  readonly apiToken: string;
  /**
  * The base domain to use for API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/identity_mfa_okta#base_url IdentityMfaOkta#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/identity_mfa_okta#id IdentityMfaOkta#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/identity_mfa_okta#namespace IdentityMfaOkta#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the organization to be used in the Okta API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/identity_mfa_okta#org_name IdentityMfaOkta#org_name}
  */
  readonly orgName: string;
  /**
  * Only match the primary email for the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/identity_mfa_okta#primary_email IdentityMfaOkta#primary_email}
  */
  readonly primaryEmail?: boolean | cdktf.IResolvable;
  /**
  * A template string for mapping Identity names to MFA methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/identity_mfa_okta#username_format IdentityMfaOkta#username_format}
  */
  readonly usernameFormat?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/identity_mfa_okta vault_identity_mfa_okta}
*/
export class IdentityMfaOkta extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_mfa_okta";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityMfaOkta resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityMfaOkta to import
  * @param importFromId The id of the existing IdentityMfaOkta that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/identity_mfa_okta#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityMfaOkta to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_identity_mfa_okta", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/identity_mfa_okta vault_identity_mfa_okta} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityMfaOktaConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityMfaOktaConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_mfa_okta',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.6.0',
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
    this._apiToken = config.apiToken;
    this._baseUrl = config.baseUrl;
    this._id = config.id;
    this._namespace = config.namespace;
    this._orgName = config.orgName;
    this._primaryEmail = config.primaryEmail;
    this._usernameFormat = config.usernameFormat;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
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

  // org_name - computed: false, optional: false, required: true
  private _orgName?: string; 
  public get orgName() {
    return this.getStringAttribute('org_name');
  }
  public set orgName(value: string) {
    this._orgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNameInput() {
    return this._orgName;
  }

  // primary_email - computed: false, optional: true, required: false
  private _primaryEmail?: boolean | cdktf.IResolvable; 
  public get primaryEmail() {
    return this.getBooleanAttribute('primary_email');
  }
  public set primaryEmail(value: boolean | cdktf.IResolvable) {
    this._primaryEmail = value;
  }
  public resetPrimaryEmail() {
    this._primaryEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEmailInput() {
    return this._primaryEmail;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
      api_token: cdktf.stringToTerraform(this._apiToken),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      org_name: cdktf.stringToTerraform(this._orgName),
      primary_email: cdktf.booleanToTerraform(this._primaryEmail),
      username_format: cdktf.stringToTerraform(this._usernameFormat),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      org_name: {
        value: cdktf.stringToHclTerraform(this._orgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_email: {
        value: cdktf.booleanToHclTerraform(this._primaryEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
