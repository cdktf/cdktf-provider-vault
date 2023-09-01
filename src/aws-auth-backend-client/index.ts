/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsAuthBackendClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS Access key with permissions to query AWS APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_client#access_key AwsAuthBackendClient#access_key}
  */
  readonly accessKey?: string;
  /**
  * Unique name of the auth backend to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_client#backend AwsAuthBackendClient#backend}
  */
  readonly backend?: string;
  /**
  * URL to override the default generated endpoint for making AWS EC2 API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_client#ec2_endpoint AwsAuthBackendClient#ec2_endpoint}
  */
  readonly ec2Endpoint?: string;
  /**
  * URL to override the default generated endpoint for making AWS IAM API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_client#iam_endpoint AwsAuthBackendClient#iam_endpoint}
  */
  readonly iamEndpoint?: string;
  /**
  * The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_client#iam_server_id_header_value AwsAuthBackendClient#iam_server_id_header_value}
  */
  readonly iamServerIdHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_client#namespace AwsAuthBackendClient#namespace}
  */
  readonly namespace?: string;
  /**
  * AWS Secret key with permissions to query AWS APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_client#secret_key AwsAuthBackendClient#secret_key}
  */
  readonly secretKey?: string;
  /**
  * URL to override the default generated endpoint for making AWS STS API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_client#sts_endpoint AwsAuthBackendClient#sts_endpoint}
  */
  readonly stsEndpoint?: string;
  /**
  * Region to override the default region for making AWS STS API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_client#sts_region AwsAuthBackendClient#sts_region}
  */
  readonly stsRegion?: string;
  /**
  * If set, will override sts_region and use the region from the client request's header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_client#use_sts_region_from_client AwsAuthBackendClient#use_sts_region_from_client}
  */
  readonly useStsRegionFromClient?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_client vault_aws_auth_backend_client}
*/
export class AwsAuthBackendClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_aws_auth_backend_client";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_client vault_aws_auth_backend_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAuthBackendClientConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsAuthBackendClientConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_aws_auth_backend_client',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.20.0',
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
    this._accessKey = config.accessKey;
    this._backend = config.backend;
    this._ec2Endpoint = config.ec2Endpoint;
    this._iamEndpoint = config.iamEndpoint;
    this._iamServerIdHeaderValue = config.iamServerIdHeaderValue;
    this._id = config.id;
    this._namespace = config.namespace;
    this._secretKey = config.secretKey;
    this._stsEndpoint = config.stsEndpoint;
    this._stsRegion = config.stsRegion;
    this._useStsRegionFromClient = config.useStsRegionFromClient;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
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

  // ec2_endpoint - computed: false, optional: true, required: false
  private _ec2Endpoint?: string; 
  public get ec2Endpoint() {
    return this.getStringAttribute('ec2_endpoint');
  }
  public set ec2Endpoint(value: string) {
    this._ec2Endpoint = value;
  }
  public resetEc2Endpoint() {
    this._ec2Endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2EndpointInput() {
    return this._ec2Endpoint;
  }

  // iam_endpoint - computed: false, optional: true, required: false
  private _iamEndpoint?: string; 
  public get iamEndpoint() {
    return this.getStringAttribute('iam_endpoint');
  }
  public set iamEndpoint(value: string) {
    this._iamEndpoint = value;
  }
  public resetIamEndpoint() {
    this._iamEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamEndpointInput() {
    return this._iamEndpoint;
  }

  // iam_server_id_header_value - computed: false, optional: true, required: false
  private _iamServerIdHeaderValue?: string; 
  public get iamServerIdHeaderValue() {
    return this.getStringAttribute('iam_server_id_header_value');
  }
  public set iamServerIdHeaderValue(value: string) {
    this._iamServerIdHeaderValue = value;
  }
  public resetIamServerIdHeaderValue() {
    this._iamServerIdHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamServerIdHeaderValueInput() {
    return this._iamServerIdHeaderValue;
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

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // sts_endpoint - computed: false, optional: true, required: false
  private _stsEndpoint?: string; 
  public get stsEndpoint() {
    return this.getStringAttribute('sts_endpoint');
  }
  public set stsEndpoint(value: string) {
    this._stsEndpoint = value;
  }
  public resetStsEndpoint() {
    this._stsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsEndpointInput() {
    return this._stsEndpoint;
  }

  // sts_region - computed: false, optional: true, required: false
  private _stsRegion?: string; 
  public get stsRegion() {
    return this.getStringAttribute('sts_region');
  }
  public set stsRegion(value: string) {
    this._stsRegion = value;
  }
  public resetStsRegion() {
    this._stsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsRegionInput() {
    return this._stsRegion;
  }

  // use_sts_region_from_client - computed: true, optional: true, required: false
  private _useStsRegionFromClient?: boolean | cdktf.IResolvable; 
  public get useStsRegionFromClient() {
    return this.getBooleanAttribute('use_sts_region_from_client');
  }
  public set useStsRegionFromClient(value: boolean | cdktf.IResolvable) {
    this._useStsRegionFromClient = value;
  }
  public resetUseStsRegionFromClient() {
    this._useStsRegionFromClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStsRegionFromClientInput() {
    return this._useStsRegionFromClient;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      backend: cdktf.stringToTerraform(this._backend),
      ec2_endpoint: cdktf.stringToTerraform(this._ec2Endpoint),
      iam_endpoint: cdktf.stringToTerraform(this._iamEndpoint),
      iam_server_id_header_value: cdktf.stringToTerraform(this._iamServerIdHeaderValue),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      sts_endpoint: cdktf.stringToTerraform(this._stsEndpoint),
      sts_region: cdktf.stringToTerraform(this._stsRegion),
      use_sts_region_from_client: cdktf.booleanToTerraform(this._useStsRegionFromClient),
    };
  }
}
