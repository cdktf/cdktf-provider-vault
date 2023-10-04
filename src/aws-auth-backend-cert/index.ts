// https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsAuthBackendCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Base64 encoded AWS Public key required to verify PKCS7 signature of the EC2 instance metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_cert#aws_public_cert AwsAuthBackendCert#aws_public_cert}
  */
  readonly awsPublicCert: string;
  /**
  * Unique name of the auth backend to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_cert#backend AwsAuthBackendCert#backend}
  */
  readonly backend?: string;
  /**
  * Name of the certificate to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_cert#cert_name AwsAuthBackendCert#cert_name}
  */
  readonly certName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_cert#id AwsAuthBackendCert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_cert#namespace AwsAuthBackendCert#namespace}
  */
  readonly namespace?: string;
  /**
  * The type of document that can be verified using the certificate. Must be either "pkcs7" or "identity".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_cert#type AwsAuthBackendCert#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_cert vault_aws_auth_backend_cert}
*/
export class AwsAuthBackendCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_aws_auth_backend_cert";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_cert vault_aws_auth_backend_cert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAuthBackendCertConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAuthBackendCertConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_aws_auth_backend_cert',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.20.1',
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
    this._awsPublicCert = config.awsPublicCert;
    this._backend = config.backend;
    this._certName = config.certName;
    this._id = config.id;
    this._namespace = config.namespace;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_public_cert - computed: false, optional: false, required: true
  private _awsPublicCert?: string; 
  public get awsPublicCert() {
    return this.getStringAttribute('aws_public_cert');
  }
  public set awsPublicCert(value: string) {
    this._awsPublicCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPublicCertInput() {
    return this._awsPublicCert;
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

  // cert_name - computed: false, optional: false, required: true
  private _certName?: string; 
  public get certName() {
    return this.getStringAttribute('cert_name');
  }
  public set certName(value: string) {
    this._certName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certNameInput() {
    return this._certName;
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
      aws_public_cert: cdktf.stringToTerraform(this._awsPublicCert),
      backend: cdktf.stringToTerraform(this._backend),
      cert_name: cdktf.stringToTerraform(this._certName),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
