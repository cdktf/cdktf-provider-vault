/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/azure_access_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultAzureAccessCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Azure Secret Backend to read credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/azure_access_credentials#backend DataVaultAzureAccessCredentials#backend}
  */
  readonly backend: string;
  /**
  * The Azure environment to use during credential validation.
  * Defaults to the environment configured in the Vault backend.
  * Some possible values: AzurePublicCloud, AzureUSGovernmentCloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/azure_access_credentials#environment DataVaultAzureAccessCredentials#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/azure_access_credentials#id DataVaultAzureAccessCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If 'validate_creds' is true, the number of seconds after which to give up validating credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/azure_access_credentials#max_cred_validation_seconds DataVaultAzureAccessCredentials#max_cred_validation_seconds}
  */
  readonly maxCredValidationSeconds?: number;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/azure_access_credentials#namespace DataVaultAzureAccessCredentials#namespace}
  */
  readonly namespace?: string;
  /**
  * If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/azure_access_credentials#num_seconds_between_tests DataVaultAzureAccessCredentials#num_seconds_between_tests}
  */
  readonly numSecondsBetweenTests?: number;
  /**
  * If 'validate_creds' is true, the number of sequential successes required to validate generated credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/azure_access_credentials#num_sequential_successes DataVaultAzureAccessCredentials#num_sequential_successes}
  */
  readonly numSequentialSuccesses?: number;
  /**
  * Azure Secret Role to read credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/azure_access_credentials#role DataVaultAzureAccessCredentials#role}
  */
  readonly role: string;
  /**
  * The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/azure_access_credentials#subscription_id DataVaultAzureAccessCredentials#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/azure_access_credentials#tenant_id DataVaultAzureAccessCredentials#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Whether generated credentials should be validated before being returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/azure_access_credentials#validate_creds DataVaultAzureAccessCredentials#validate_creds}
  */
  readonly validateCreds?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/azure_access_credentials vault_azure_access_credentials}
*/
export class DataVaultAzureAccessCredentials extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_azure_access_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVaultAzureAccessCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVaultAzureAccessCredentials to import
  * @param importFromId The id of the existing DataVaultAzureAccessCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/azure_access_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVaultAzureAccessCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_azure_access_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/azure_access_credentials vault_azure_access_credentials} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultAzureAccessCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultAzureAccessCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_azure_access_credentials',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.24.0',
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
    this._environment = config.environment;
    this._id = config.id;
    this._maxCredValidationSeconds = config.maxCredValidationSeconds;
    this._namespace = config.namespace;
    this._numSecondsBetweenTests = config.numSecondsBetweenTests;
    this._numSequentialSuccesses = config.numSequentialSuccesses;
    this._role = config.role;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
    this._validateCreds = config.validateCreds;
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

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
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

  // lease_duration - computed: true, optional: false, required: false
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }

  // lease_id - computed: true, optional: false, required: false
  public get leaseId() {
    return this.getStringAttribute('lease_id');
  }

  // lease_renewable - computed: true, optional: false, required: false
  public get leaseRenewable() {
    return this.getBooleanAttribute('lease_renewable');
  }

  // lease_start_time - computed: true, optional: false, required: false
  public get leaseStartTime() {
    return this.getStringAttribute('lease_start_time');
  }

  // max_cred_validation_seconds - computed: false, optional: true, required: false
  private _maxCredValidationSeconds?: number; 
  public get maxCredValidationSeconds() {
    return this.getNumberAttribute('max_cred_validation_seconds');
  }
  public set maxCredValidationSeconds(value: number) {
    this._maxCredValidationSeconds = value;
  }
  public resetMaxCredValidationSeconds() {
    this._maxCredValidationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCredValidationSecondsInput() {
    return this._maxCredValidationSeconds;
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

  // num_seconds_between_tests - computed: false, optional: true, required: false
  private _numSecondsBetweenTests?: number; 
  public get numSecondsBetweenTests() {
    return this.getNumberAttribute('num_seconds_between_tests');
  }
  public set numSecondsBetweenTests(value: number) {
    this._numSecondsBetweenTests = value;
  }
  public resetNumSecondsBetweenTests() {
    this._numSecondsBetweenTests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSecondsBetweenTestsInput() {
    return this._numSecondsBetweenTests;
  }

  // num_sequential_successes - computed: false, optional: true, required: false
  private _numSequentialSuccesses?: number; 
  public get numSequentialSuccesses() {
    return this.getNumberAttribute('num_sequential_successes');
  }
  public set numSequentialSuccesses(value: number) {
    this._numSequentialSuccesses = value;
  }
  public resetNumSequentialSuccesses() {
    this._numSequentialSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSequentialSuccessesInput() {
    return this._numSequentialSuccesses;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // validate_creds - computed: false, optional: true, required: false
  private _validateCreds?: boolean | cdktf.IResolvable; 
  public get validateCreds() {
    return this.getBooleanAttribute('validate_creds');
  }
  public set validateCreds(value: boolean | cdktf.IResolvable) {
    this._validateCreds = value;
  }
  public resetValidateCreds() {
    this._validateCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateCredsInput() {
    return this._validateCreds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      max_cred_validation_seconds: cdktf.numberToTerraform(this._maxCredValidationSeconds),
      namespace: cdktf.stringToTerraform(this._namespace),
      num_seconds_between_tests: cdktf.numberToTerraform(this._numSecondsBetweenTests),
      num_sequential_successes: cdktf.numberToTerraform(this._numSequentialSuccesses),
      role: cdktf.stringToTerraform(this._role),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      validate_creds: cdktf.booleanToTerraform(this._validateCreds),
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
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      max_cred_validation_seconds: {
        value: cdktf.numberToHclTerraform(this._maxCredValidationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_seconds_between_tests: {
        value: cdktf.numberToHclTerraform(this._numSecondsBetweenTests),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_sequential_successes: {
        value: cdktf.numberToHclTerraform(this._numSequentialSuccesses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_creds: {
        value: cdktf.booleanToHclTerraform(this._validateCreds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
