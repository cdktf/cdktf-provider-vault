// https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureAuthBackendConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique name of the auth backend to configure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#backend AzureAuthBackendConfig#backend}
  */
  readonly backend?: string;
  /**
  * The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#client_id AzureAuthBackendConfig#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret for credentials to query the Azure APIs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#client_secret AzureAuthBackendConfig#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#environment AzureAuthBackendConfig#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#id AzureAuthBackendConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#namespace AzureAuthBackendConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * The configured URL for the application registered in Azure Active Directory.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#resource AzureAuthBackendConfig#resource}
  */
  readonly resource: string;
  /**
  * The tenant id for the Azure Active Directory organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config#tenant_id AzureAuthBackendConfig#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config vault_azure_auth_backend_config}
*/
export class AzureAuthBackendConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_azure_auth_backend_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_config vault_azure_auth_backend_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureAuthBackendConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AzureAuthBackendConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_azure_auth_backend_config',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.11.0',
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
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._environment = config.environment;
    this._id = config.id;
    this._namespace = config.namespace;
    this._resource = config.resource;
    this._tenantId = config.tenantId;
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

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      resource: cdktf.stringToTerraform(this._resource),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }
}
