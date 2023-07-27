// https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_sts_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsAuthBackendStsRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS account ID to be associated with STS role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_sts_role#account_id AwsAuthBackendStsRole#account_id}
  */
  readonly accountId: string;
  /**
  * Unique name of the auth backend to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_sts_role#backend AwsAuthBackendStsRole#backend}
  */
  readonly backend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_sts_role#id AwsAuthBackendStsRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_sts_role#namespace AwsAuthBackendStsRole#namespace}
  */
  readonly namespace?: string;
  /**
  * AWS ARN for STS role to be assumed when interacting with the account specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_sts_role#sts_role AwsAuthBackendStsRole#sts_role}
  */
  readonly stsRole: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_sts_role vault_aws_auth_backend_sts_role}
*/
export class AwsAuthBackendStsRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_aws_auth_backend_sts_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_sts_role vault_aws_auth_backend_sts_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAuthBackendStsRoleConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAuthBackendStsRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_aws_auth_backend_sts_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.18.0',
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
    this._accountId = config.accountId;
    this._backend = config.backend;
    this._id = config.id;
    this._namespace = config.namespace;
    this._stsRole = config.stsRole;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // sts_role - computed: false, optional: false, required: true
  private _stsRole?: string; 
  public get stsRole() {
    return this.getStringAttribute('sts_role');
  }
  public set stsRole(value: string) {
    this._stsRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stsRoleInput() {
    return this._stsRole;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      backend: cdktf.stringToTerraform(this._backend),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      sts_role: cdktf.stringToTerraform(this._stsRole),
    };
  }
}
