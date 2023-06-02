// https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpSecretImpersonatedAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path where the GCP secrets engine is mounted.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account#backend GcpSecretImpersonatedAccount#backend}
  */
  readonly backend: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account#id GcpSecretImpersonatedAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Impersonated Account to create
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account#impersonated_account GcpSecretImpersonatedAccount#impersonated_account}
  */
  readonly impersonatedAccount: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account#namespace GcpSecretImpersonatedAccount#namespace}
  */
  readonly namespace?: string;
  /**
  * Email of the GCP service account.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account#service_account_email GcpSecretImpersonatedAccount#service_account_email}
  */
  readonly serviceAccountEmail: string;
  /**
  * List of OAuth scopes to assign to `access_token` secrets generated under this impersonated account (`access_token` impersonated accounts only) 
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account#token_scopes GcpSecretImpersonatedAccount#token_scopes}
  */
  readonly tokenScopes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account vault_gcp_secret_impersonated_account}
*/
export class GcpSecretImpersonatedAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_gcp_secret_impersonated_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account vault_gcp_secret_impersonated_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpSecretImpersonatedAccountConfig
  */
  public constructor(scope: Construct, id: string, config: GcpSecretImpersonatedAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_gcp_secret_impersonated_account',
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
    this._backend = config.backend;
    this._id = config.id;
    this._impersonatedAccount = config.impersonatedAccount;
    this._namespace = config.namespace;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._tokenScopes = config.tokenScopes;
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

  // impersonated_account - computed: false, optional: false, required: true
  private _impersonatedAccount?: string; 
  public get impersonatedAccount() {
    return this.getStringAttribute('impersonated_account');
  }
  public set impersonatedAccount(value: string) {
    this._impersonatedAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonatedAccountInput() {
    return this._impersonatedAccount;
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

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // service_account_project - computed: true, optional: false, required: false
  public get serviceAccountProject() {
    return this.getStringAttribute('service_account_project');
  }

  // token_scopes - computed: false, optional: true, required: false
  private _tokenScopes?: string[]; 
  public get tokenScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('token_scopes'));
  }
  public set tokenScopes(value: string[]) {
    this._tokenScopes = value;
  }
  public resetTokenScopes() {
    this._tokenScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenScopesInput() {
    return this._tokenScopes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      id: cdktf.stringToTerraform(this._id),
      impersonated_account: cdktf.stringToTerraform(this._impersonatedAccount),
      namespace: cdktf.stringToTerraform(this._namespace),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      token_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenScopes),
    };
  }
}
