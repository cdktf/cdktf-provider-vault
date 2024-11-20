// https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsSecretBackendRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path of the AWS Secret Backend the role belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#backend AwsSecretBackendRole#backend}
  */
  readonly backend: string;
  /**
  * Role credential type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#credential_type AwsSecretBackendRole#credential_type}
  */
  readonly credentialType: string;
  /**
  * The default TTL in seconds for STS credentials. When a TTL is not specified when STS credentials are requested, and a default TTL is specified on the role, then this default TTL will be used. Valid only when credential_type is one of assumed_role or federation_token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#default_sts_ttl AwsSecretBackendRole#default_sts_ttl}
  */
  readonly defaultStsTtl?: number;
  /**
  * External ID to set for assume role creds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#external_id AwsSecretBackendRole#external_id}
  */
  readonly externalId?: string;
  /**
  * A list of IAM group names. IAM users generated against this vault role will be added to these IAM Groups. For a credential type of assumed_role or federation_token, the policies sent to the corresponding AWS call (sts:AssumeRole or sts:GetFederation) will be the policies from each group in iam_groups combined with the policy_document and policy_arns parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#iam_groups AwsSecretBackendRole#iam_groups}
  */
  readonly iamGroups?: string[];
  /**
  * A map of strings representing key/value pairs used as tags for any IAM user created by this role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#iam_tags AwsSecretBackendRole#iam_tags}
  */
  readonly iamTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#id AwsSecretBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The max allowed TTL in seconds for STS credentials (credentials TTL are capped to max_sts_ttl). Valid only when credential_type is one of assumed_role or federation_token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#max_sts_ttl AwsSecretBackendRole#max_sts_ttl}
  */
  readonly maxStsTtl?: number;
  /**
  * Unique name for the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#name AwsSecretBackendRole#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#namespace AwsSecretBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * The ARN of the AWS Permissions Boundary to attach to IAM users created in the role. Valid only when credential_type is iam_user. If not specified, then no permissions boundary policy will be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#permissions_boundary_arn AwsSecretBackendRole#permissions_boundary_arn}
  */
  readonly permissionsBoundaryArn?: string;
  /**
  * ARN for an existing IAM policy the role should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#policy_arns AwsSecretBackendRole#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * IAM policy the role should use in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#policy_document AwsSecretBackendRole#policy_document}
  */
  readonly policyDocument?: string;
  /**
  * ARNs of AWS roles allowed to be assumed. Only valid when credential_type is 'assumed_role'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#role_arns AwsSecretBackendRole#role_arns}
  */
  readonly roleArns?: string[];
  /**
  * Session tags to be set for assume role creds created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#session_tags AwsSecretBackendRole#session_tags}
  */
  readonly sessionTags?: { [key: string]: string };
  /**
  * The path for the user name. Valid only when credential_type is iam_user. Default is /
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#user_path AwsSecretBackendRole#user_path}
  */
  readonly userPath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role vault_aws_secret_backend_role}
*/
export class AwsSecretBackendRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_aws_secret_backend_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsSecretBackendRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSecretBackendRole to import
  * @param importFromId The id of the existing AwsSecretBackendRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSecretBackendRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_aws_secret_backend_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_secret_backend_role vault_aws_secret_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSecretBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: AwsSecretBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_aws_secret_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.5.0',
        providerVersionConstraint: '~> 4.0'
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
    this._credentialType = config.credentialType;
    this._defaultStsTtl = config.defaultStsTtl;
    this._externalId = config.externalId;
    this._iamGroups = config.iamGroups;
    this._iamTags = config.iamTags;
    this._id = config.id;
    this._maxStsTtl = config.maxStsTtl;
    this._name = config.name;
    this._namespace = config.namespace;
    this._permissionsBoundaryArn = config.permissionsBoundaryArn;
    this._policyArns = config.policyArns;
    this._policyDocument = config.policyDocument;
    this._roleArns = config.roleArns;
    this._sessionTags = config.sessionTags;
    this._userPath = config.userPath;
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

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // default_sts_ttl - computed: true, optional: true, required: false
  private _defaultStsTtl?: number; 
  public get defaultStsTtl() {
    return this.getNumberAttribute('default_sts_ttl');
  }
  public set defaultStsTtl(value: number) {
    this._defaultStsTtl = value;
  }
  public resetDefaultStsTtl() {
    this._defaultStsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStsTtlInput() {
    return this._defaultStsTtl;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // iam_groups - computed: false, optional: true, required: false
  private _iamGroups?: string[]; 
  public get iamGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('iam_groups'));
  }
  public set iamGroups(value: string[]) {
    this._iamGroups = value;
  }
  public resetIamGroups() {
    this._iamGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamGroupsInput() {
    return this._iamGroups;
  }

  // iam_tags - computed: false, optional: true, required: false
  private _iamTags?: { [key: string]: string }; 
  public get iamTags() {
    return this.getStringMapAttribute('iam_tags');
  }
  public set iamTags(value: { [key: string]: string }) {
    this._iamTags = value;
  }
  public resetIamTags() {
    this._iamTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamTagsInput() {
    return this._iamTags;
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

  // max_sts_ttl - computed: true, optional: true, required: false
  private _maxStsTtl?: number; 
  public get maxStsTtl() {
    return this.getNumberAttribute('max_sts_ttl');
  }
  public set maxStsTtl(value: number) {
    this._maxStsTtl = value;
  }
  public resetMaxStsTtl() {
    this._maxStsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStsTtlInput() {
    return this._maxStsTtl;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // permissions_boundary_arn - computed: false, optional: true, required: false
  private _permissionsBoundaryArn?: string; 
  public get permissionsBoundaryArn() {
    return this.getStringAttribute('permissions_boundary_arn');
  }
  public set permissionsBoundaryArn(value: string) {
    this._permissionsBoundaryArn = value;
  }
  public resetPermissionsBoundaryArn() {
    this._permissionsBoundaryArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsBoundaryArnInput() {
    return this._permissionsBoundaryArn;
  }

  // policy_arns - computed: false, optional: true, required: false
  private _policyArns?: string[]; 
  public get policyArns() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_arns'));
  }
  public set policyArns(value: string[]) {
    this._policyArns = value;
  }
  public resetPolicyArns() {
    this._policyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnsInput() {
    return this._policyArns;
  }

  // policy_document - computed: false, optional: true, required: false
  private _policyDocument?: string; 
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  public resetPolicyDocument() {
    this._policyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument;
  }

  // role_arns - computed: false, optional: true, required: false
  private _roleArns?: string[]; 
  public get roleArns() {
    return cdktf.Fn.tolist(this.getListAttribute('role_arns'));
  }
  public set roleArns(value: string[]) {
    this._roleArns = value;
  }
  public resetRoleArns() {
    this._roleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnsInput() {
    return this._roleArns;
  }

  // session_tags - computed: false, optional: true, required: false
  private _sessionTags?: { [key: string]: string }; 
  public get sessionTags() {
    return this.getStringMapAttribute('session_tags');
  }
  public set sessionTags(value: { [key: string]: string }) {
    this._sessionTags = value;
  }
  public resetSessionTags() {
    this._sessionTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTagsInput() {
    return this._sessionTags;
  }

  // user_path - computed: false, optional: true, required: false
  private _userPath?: string; 
  public get userPath() {
    return this.getStringAttribute('user_path');
  }
  public set userPath(value: string) {
    this._userPath = value;
  }
  public resetUserPath() {
    this._userPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPathInput() {
    return this._userPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      credential_type: cdktf.stringToTerraform(this._credentialType),
      default_sts_ttl: cdktf.numberToTerraform(this._defaultStsTtl),
      external_id: cdktf.stringToTerraform(this._externalId),
      iam_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._iamGroups),
      iam_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._iamTags),
      id: cdktf.stringToTerraform(this._id),
      max_sts_ttl: cdktf.numberToTerraform(this._maxStsTtl),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      permissions_boundary_arn: cdktf.stringToTerraform(this._permissionsBoundaryArn),
      policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyArns),
      policy_document: cdktf.stringToTerraform(this._policyDocument),
      role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleArns),
      session_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._sessionTags),
      user_path: cdktf.stringToTerraform(this._userPath),
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
      credential_type: {
        value: cdktf.stringToHclTerraform(this._credentialType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_sts_ttl: {
        value: cdktf.numberToHclTerraform(this._defaultStsTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._iamGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      iam_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._iamTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_sts_ttl: {
        value: cdktf.numberToHclTerraform(this._maxStsTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions_boundary_arn: {
        value: cdktf.stringToHclTerraform(this._permissionsBoundaryArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      policy_document: {
        value: cdktf.stringToHclTerraform(this._policyDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      session_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sessionTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_path: {
        value: cdktf.stringToHclTerraform(this._userPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
