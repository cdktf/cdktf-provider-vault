/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/identity_oidc_openid_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultIdentityOidcOpenidConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/identity_oidc_openid_config#id DataVaultIdentityOidcOpenidConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/identity_oidc_openid_config#name DataVaultIdentityOidcOpenidConfig#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/identity_oidc_openid_config#namespace DataVaultIdentityOidcOpenidConfig#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/identity_oidc_openid_config vault_identity_oidc_openid_config}
*/
export class DataVaultIdentityOidcOpenidConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_oidc_openid_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVaultIdentityOidcOpenidConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVaultIdentityOidcOpenidConfig to import
  * @param importFromId The id of the existing DataVaultIdentityOidcOpenidConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/identity_oidc_openid_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVaultIdentityOidcOpenidConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_identity_oidc_openid_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/identity_oidc_openid_config vault_identity_oidc_openid_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultIdentityOidcOpenidConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultIdentityOidcOpenidConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_oidc_openid_config',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.0.0',
        providerVersionConstraint: '~> 5.0'
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
    this._name = config.name;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // grant_types_supported - computed: true, optional: false, required: false
  public get grantTypesSupported() {
    return this.getListAttribute('grant_types_supported');
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

  // id_token_signing_alg_values_supported - computed: true, optional: false, required: false
  public get idTokenSigningAlgValuesSupported() {
    return this.getListAttribute('id_token_signing_alg_values_supported');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // jwks_uri - computed: true, optional: false, required: false
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
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

  // request_uri_parameter_supported - computed: true, optional: false, required: false
  public get requestUriParameterSupported() {
    return this.getBooleanAttribute('request_uri_parameter_supported');
  }

  // response_types_supported - computed: true, optional: false, required: false
  public get responseTypesSupported() {
    return this.getListAttribute('response_types_supported');
  }

  // scopes_supported - computed: true, optional: false, required: false
  public get scopesSupported() {
    return this.getListAttribute('scopes_supported');
  }

  // subject_types_supported - computed: true, optional: false, required: false
  public get subjectTypesSupported() {
    return this.getListAttribute('subject_types_supported');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }

  // token_endpoint_auth_methods_supported - computed: true, optional: false, required: false
  public get tokenEndpointAuthMethodsSupported() {
    return this.getListAttribute('token_endpoint_auth_methods_supported');
  }

  // userinfo_endpoint - computed: true, optional: false, required: false
  public get userinfoEndpoint() {
    return this.getStringAttribute('userinfo_endpoint');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
