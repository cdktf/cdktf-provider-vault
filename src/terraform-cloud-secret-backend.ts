// https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TerraformCloudSecretBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the address of the Terraform Cloud instance, provided as "host:port" like "127.0.0.1:8500".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_backend#address TerraformCloudSecretBackend#address}
  */
  readonly address?: string;
  /**
  * Unique name of the Vault Terraform Cloud mount to configure
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_backend#backend TerraformCloudSecretBackend#backend}
  */
  readonly backend?: string;
  /**
  * Specifies the base path for the Terraform Cloud or Enterprise API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_backend#base_path TerraformCloudSecretBackend#base_path}
  */
  readonly basePath?: string;
  /**
  * Default lease duration for secrets in seconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_backend#default_lease_ttl_seconds TerraformCloudSecretBackend#default_lease_ttl_seconds}
  */
  readonly defaultLeaseTtlSeconds?: number;
  /**
  * Human-friendly description of the mount for the backend.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_backend#description TerraformCloudSecretBackend#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_backend#id TerraformCloudSecretBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum possible lease duration for secrets in seconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_backend#max_lease_ttl_seconds TerraformCloudSecretBackend#max_lease_ttl_seconds}
  */
  readonly maxLeaseTtlSeconds?: number;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_backend#namespace TerraformCloudSecretBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the Terraform Cloud access token to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_backend#token TerraformCloudSecretBackend#token}
  */
  readonly token?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_backend vault_terraform_cloud_secret_backend}
*/
export class TerraformCloudSecretBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_terraform_cloud_secret_backend";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/terraform_cloud_secret_backend vault_terraform_cloud_secret_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TerraformCloudSecretBackendConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TerraformCloudSecretBackendConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_terraform_cloud_secret_backend',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.8.0',
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
    this._address = config.address;
    this._backend = config.backend;
    this._basePath = config.basePath;
    this._defaultLeaseTtlSeconds = config.defaultLeaseTtlSeconds;
    this._description = config.description;
    this._id = config.id;
    this._maxLeaseTtlSeconds = config.maxLeaseTtlSeconds;
    this._namespace = config.namespace;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

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

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // default_lease_ttl_seconds - computed: false, optional: true, required: false
  private _defaultLeaseTtlSeconds?: number; 
  public get defaultLeaseTtlSeconds() {
    return this.getNumberAttribute('default_lease_ttl_seconds');
  }
  public set defaultLeaseTtlSeconds(value: number) {
    this._defaultLeaseTtlSeconds = value;
  }
  public resetDefaultLeaseTtlSeconds() {
    this._defaultLeaseTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLeaseTtlSecondsInput() {
    return this._defaultLeaseTtlSeconds;
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

  // max_lease_ttl_seconds - computed: false, optional: true, required: false
  private _maxLeaseTtlSeconds?: number; 
  public get maxLeaseTtlSeconds() {
    return this.getNumberAttribute('max_lease_ttl_seconds');
  }
  public set maxLeaseTtlSeconds(value: number) {
    this._maxLeaseTtlSeconds = value;
  }
  public resetMaxLeaseTtlSeconds() {
    this._maxLeaseTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLeaseTtlSecondsInput() {
    return this._maxLeaseTtlSeconds;
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

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      backend: cdktf.stringToTerraform(this._backend),
      base_path: cdktf.stringToTerraform(this._basePath),
      default_lease_ttl_seconds: cdktf.numberToTerraform(this._defaultLeaseTtlSeconds),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      max_lease_ttl_seconds: cdktf.numberToTerraform(this._maxLeaseTtlSeconds),
      namespace: cdktf.stringToTerraform(this._namespace),
      token: cdktf.stringToTerraform(this._token),
    };
  }
}
