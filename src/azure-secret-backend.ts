// https://www.terraform.io/docs/providers/vault/r/azure_secret_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureSecretBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_secret_backend#client_id AzureSecretBackend#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret for credentials to query the Azure APIs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_secret_backend#client_secret AzureSecretBackend#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Human-friendly description of the mount for the backend.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_secret_backend#description AzureSecretBackend#description}
  */
  readonly description?: string;
  /**
  * The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_secret_backend#environment AzureSecretBackend#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_secret_backend#id AzureSecretBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_secret_backend#namespace AzureSecretBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Path to mount the backend at.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_secret_backend#path AzureSecretBackend#path}
  */
  readonly path?: string;
  /**
  * The subscription id for the Azure Active Directory.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_secret_backend#subscription_id AzureSecretBackend#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * The tenant id for the Azure Active Directory organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_secret_backend#tenant_id AzureSecretBackend#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Use the Microsoft Graph API. Should be set to true on vault-1.10+
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_secret_backend#use_microsoft_graph_api AzureSecretBackend#use_microsoft_graph_api}
  */
  readonly useMicrosoftGraphApi?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/azure_secret_backend vault_azure_secret_backend}
*/
export class AzureSecretBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_azure_secret_backend";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/azure_secret_backend vault_azure_secret_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureSecretBackendConfig
  */
  public constructor(scope: Construct, id: string, config: AzureSecretBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_azure_secret_backend',
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
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._description = config.description;
    this._environment = config.environment;
    this._id = config.id;
    this._namespace = config.namespace;
    this._path = config.path;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
    this._useMicrosoftGraphApi = config.useMicrosoftGraphApi;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // use_microsoft_graph_api - computed: true, optional: true, required: false
  private _useMicrosoftGraphApi?: boolean | cdktf.IResolvable; 
  public get useMicrosoftGraphApi() {
    return this.getBooleanAttribute('use_microsoft_graph_api');
  }
  public set useMicrosoftGraphApi(value: boolean | cdktf.IResolvable) {
    this._useMicrosoftGraphApi = value;
  }
  public resetUseMicrosoftGraphApi() {
    this._useMicrosoftGraphApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMicrosoftGraphApiInput() {
    return this._useMicrosoftGraphApi;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_microsoft_graph_api: cdktf.booleanToTerraform(this._useMicrosoftGraphApi),
    };
  }
}
