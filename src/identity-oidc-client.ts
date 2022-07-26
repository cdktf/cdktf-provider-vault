// https://www.terraform.io/docs/providers/vault/r/identity_oidc_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityOidcClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * The time-to-live for access tokens obtained by the client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#access_token_ttl IdentityOidcClient#access_token_ttl}
  */
  readonly accessTokenTtl?: number;
  /**
  * A list of assignment resources associated with the client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#assignments IdentityOidcClient#assignments}
  */
  readonly assignments?: string[];
  /**
  * The client type based on its ability to maintain confidentiality of credentials.Defaults to 'confidential'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#client_type IdentityOidcClient#client_type}
  */
  readonly clientType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#id IdentityOidcClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The time-to-live for ID tokens obtained by the client. The value should be less than the verification_ttl on the key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#id_token_ttl IdentityOidcClient#id_token_ttl}
  */
  readonly idTokenTtl?: number;
  /**
  * A reference to a named key resource in Vault. This cannot be modified after creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#key IdentityOidcClient#key}
  */
  readonly key?: string;
  /**
  * The name of the client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#name IdentityOidcClient#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#namespace IdentityOidcClient#namespace}
  */
  readonly namespace?: string;
  /**
  * Redirection URI values used by the client. One of these values must exactly match the redirect_uri parameter value used in each authentication request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#redirect_uris IdentityOidcClient#redirect_uris}
  */
  readonly redirectUris?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client vault_identity_oidc_client}
*/
export class IdentityOidcClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_oidc_client";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client vault_identity_oidc_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityOidcClientConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityOidcClientConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_oidc_client',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.7.0',
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
    this._accessTokenTtl = config.accessTokenTtl;
    this._assignments = config.assignments;
    this._clientType = config.clientType;
    this._id = config.id;
    this._idTokenTtl = config.idTokenTtl;
    this._key = config.key;
    this._name = config.name;
    this._namespace = config.namespace;
    this._redirectUris = config.redirectUris;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_ttl - computed: true, optional: true, required: false
  private _accessTokenTtl?: number; 
  public get accessTokenTtl() {
    return this.getNumberAttribute('access_token_ttl');
  }
  public set accessTokenTtl(value: number) {
    this._accessTokenTtl = value;
  }
  public resetAccessTokenTtl() {
    this._accessTokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenTtlInput() {
    return this._accessTokenTtl;
  }

  // assignments - computed: false, optional: true, required: false
  private _assignments?: string[]; 
  public get assignments() {
    return cdktf.Fn.tolist(this.getListAttribute('assignments'));
  }
  public set assignments(value: string[]) {
    this._assignments = value;
  }
  public resetAssignments() {
    this._assignments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentsInput() {
    return this._assignments;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_type - computed: true, optional: true, required: false
  private _clientType?: string; 
  public get clientType() {
    return this.getStringAttribute('client_type');
  }
  public set clientType(value: string) {
    this._clientType = value;
  }
  public resetClientType() {
    this._clientType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTypeInput() {
    return this._clientType;
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

  // id_token_ttl - computed: true, optional: true, required: false
  private _idTokenTtl?: number; 
  public get idTokenTtl() {
    return this.getNumberAttribute('id_token_ttl');
  }
  public set idTokenTtl(value: number) {
    this._idTokenTtl = value;
  }
  public resetIdTokenTtl() {
    this._idTokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenTtlInput() {
    return this._idTokenTtl;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uris'));
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
      assignments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assignments),
      client_type: cdktf.stringToTerraform(this._clientType),
      id: cdktf.stringToTerraform(this._id),
      id_token_ttl: cdktf.numberToTerraform(this._idTokenTtl),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirectUris),
    };
  }
}
