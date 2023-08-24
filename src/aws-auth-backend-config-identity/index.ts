// https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_config_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsAuthBackendConfigIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique name of the auth backend to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_config_identity#backend AwsAuthBackendConfigIdentity#backend}
  */
  readonly backend?: string;
  /**
  * Configures how to generate the identity alias when using the ec2 auth method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_config_identity#ec2_alias AwsAuthBackendConfigIdentity#ec2_alias}
  */
  readonly ec2Alias?: string;
  /**
  * The metadata to include on the token returned by the login endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_config_identity#ec2_metadata AwsAuthBackendConfigIdentity#ec2_metadata}
  */
  readonly ec2Metadata?: string[];
  /**
  * How to generate the identity alias when using the iam auth method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_config_identity#iam_alias AwsAuthBackendConfigIdentity#iam_alias}
  */
  readonly iamAlias?: string;
  /**
  * The metadata to include on the token returned by the login endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_config_identity#iam_metadata AwsAuthBackendConfigIdentity#iam_metadata}
  */
  readonly iamMetadata?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_config_identity#id AwsAuthBackendConfigIdentity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_config_identity#namespace AwsAuthBackendConfigIdentity#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_config_identity vault_aws_auth_backend_config_identity}
*/
export class AwsAuthBackendConfigIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_aws_auth_backend_config_identity";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_config_identity vault_aws_auth_backend_config_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAuthBackendConfigIdentityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsAuthBackendConfigIdentityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_aws_auth_backend_config_identity',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.19.0',
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
    this._ec2Alias = config.ec2Alias;
    this._ec2Metadata = config.ec2Metadata;
    this._iamAlias = config.iamAlias;
    this._iamMetadata = config.iamMetadata;
    this._id = config.id;
    this._namespace = config.namespace;
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

  // ec2_alias - computed: false, optional: true, required: false
  private _ec2Alias?: string; 
  public get ec2Alias() {
    return this.getStringAttribute('ec2_alias');
  }
  public set ec2Alias(value: string) {
    this._ec2Alias = value;
  }
  public resetEc2Alias() {
    this._ec2Alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2AliasInput() {
    return this._ec2Alias;
  }

  // ec2_metadata - computed: false, optional: true, required: false
  private _ec2Metadata?: string[]; 
  public get ec2Metadata() {
    return cdktf.Fn.tolist(this.getListAttribute('ec2_metadata'));
  }
  public set ec2Metadata(value: string[]) {
    this._ec2Metadata = value;
  }
  public resetEc2Metadata() {
    this._ec2Metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2MetadataInput() {
    return this._ec2Metadata;
  }

  // iam_alias - computed: false, optional: true, required: false
  private _iamAlias?: string; 
  public get iamAlias() {
    return this.getStringAttribute('iam_alias');
  }
  public set iamAlias(value: string) {
    this._iamAlias = value;
  }
  public resetIamAlias() {
    this._iamAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamAliasInput() {
    return this._iamAlias;
  }

  // iam_metadata - computed: false, optional: true, required: false
  private _iamMetadata?: string[]; 
  public get iamMetadata() {
    return cdktf.Fn.tolist(this.getListAttribute('iam_metadata'));
  }
  public set iamMetadata(value: string[]) {
    this._iamMetadata = value;
  }
  public resetIamMetadata() {
    this._iamMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamMetadataInput() {
    return this._iamMetadata;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      ec2_alias: cdktf.stringToTerraform(this._ec2Alias),
      ec2_metadata: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ec2Metadata),
      iam_alias: cdktf.stringToTerraform(this._iamAlias),
      iam_metadata: cdktf.listMapper(cdktf.stringToTerraform, false)(this._iamMetadata),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
