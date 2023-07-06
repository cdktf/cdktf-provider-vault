// https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/aws_access_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultAwsAccessCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS Secret Backend to read credentials from.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/aws_access_credentials#backend DataVaultAwsAccessCredentials#backend}
  */
  readonly backend: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/aws_access_credentials#id DataVaultAwsAccessCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/aws_access_credentials#namespace DataVaultAwsAccessCredentials#namespace}
  */
  readonly namespace?: string;
  /**
  * Region the read credentials belong to.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/aws_access_credentials#region DataVaultAwsAccessCredentials#region}
  */
  readonly region?: string;
  /**
  * AWS Secret Role to read credentials from.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/aws_access_credentials#role DataVaultAwsAccessCredentials#role}
  */
  readonly role: string;
  /**
  * ARN to use if multiple are available in the role. Required if the role has multiple ARNs.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/aws_access_credentials#role_arn DataVaultAwsAccessCredentials#role_arn}
  */
  readonly roleArn?: string;
  /**
  * User specified Time-To-Live for the STS token. Uses the Role defined default_sts_ttl when not specified
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/aws_access_credentials#ttl DataVaultAwsAccessCredentials#ttl}
  */
  readonly ttl?: string;
  /**
  * Type of credentials to read. Must be either 'creds' for Access Key and Secret Key, or 'sts' for STS.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/aws_access_credentials#type DataVaultAwsAccessCredentials#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/aws_access_credentials vault_aws_access_credentials}
*/
export class DataVaultAwsAccessCredentials extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_aws_access_credentials";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/aws_access_credentials vault_aws_access_credentials} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultAwsAccessCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultAwsAccessCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_aws_access_credentials',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.17.0',
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
    this._namespace = config.namespace;
    this._region = config.region;
    this._role = config.role;
    this._roleArn = config.roleArn;
    this._ttl = config.ttl;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // security_token - computed: true, optional: false, required: false
  public get securityToken() {
    return this.getStringAttribute('security_token');
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      region: cdktf.stringToTerraform(this._region),
      role: cdktf.stringToTerraform(this._role),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      ttl: cdktf.stringToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
