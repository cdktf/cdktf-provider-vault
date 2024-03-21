// https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsAuthBackendRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, allows migration of the underlying instance where the client resides. Use with caution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#allow_instance_migration AwsAuthBackendRole#allow_instance_migration}
  */
  readonly allowInstanceMigration?: boolean | cdktf.IResolvable;
  /**
  * The auth type permitted for this role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#auth_type AwsAuthBackendRole#auth_type}
  */
  readonly authType?: string;
  /**
  * Unique name of the auth backend to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#backend AwsAuthBackendRole#backend}
  */
  readonly backend?: string;
  /**
  * Only EC2 instances with this account ID in their identity document will be permitted to log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#bound_account_ids AwsAuthBackendRole#bound_account_ids}
  */
  readonly boundAccountIds?: string[];
  /**
  * Only EC2 instances using this AMI ID will be permitted to log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#bound_ami_ids AwsAuthBackendRole#bound_ami_ids}
  */
  readonly boundAmiIds?: string[];
  /**
  * Only EC2 instances that match this instance ID will be permitted to log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#bound_ec2_instance_ids AwsAuthBackendRole#bound_ec2_instance_ids}
  */
  readonly boundEc2InstanceIds?: string[];
  /**
  * Only EC2 instances associated with an IAM instance profile ARN that matches this value will be permitted to log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#bound_iam_instance_profile_arns AwsAuthBackendRole#bound_iam_instance_profile_arns}
  */
  readonly boundIamInstanceProfileArns?: string[];
  /**
  * The IAM principal that must be authenticated using the iam auth method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#bound_iam_principal_arns AwsAuthBackendRole#bound_iam_principal_arns}
  */
  readonly boundIamPrincipalArns?: string[];
  /**
  * Only EC2 instances that match this IAM role ARN will be permitted to log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#bound_iam_role_arns AwsAuthBackendRole#bound_iam_role_arns}
  */
  readonly boundIamRoleArns?: string[];
  /**
  * Only EC2 instances in this region will be permitted to log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#bound_regions AwsAuthBackendRole#bound_regions}
  */
  readonly boundRegions?: string[];
  /**
  * Only EC2 instances associated with this subnet ID will be permitted to log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#bound_subnet_ids AwsAuthBackendRole#bound_subnet_ids}
  */
  readonly boundSubnetIds?: string[];
  /**
  * Only EC2 instances associated with this VPC ID will be permitted to log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#bound_vpc_ids AwsAuthBackendRole#bound_vpc_ids}
  */
  readonly boundVpcIds?: string[];
  /**
  * When true, only allows a single token to be granted per instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#disallow_reauthentication AwsAuthBackendRole#disallow_reauthentication}
  */
  readonly disallowReauthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#id AwsAuthBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The region to search for the inferred entities in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#inferred_aws_region AwsAuthBackendRole#inferred_aws_region}
  */
  readonly inferredAwsRegion?: string;
  /**
  * The type of inferencing Vault should do.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#inferred_entity_type AwsAuthBackendRole#inferred_entity_type}
  */
  readonly inferredEntityType?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#namespace AwsAuthBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Whether or not Vault should resolve the bound_iam_principal_arn to an AWS Unique ID. When true, deleting a principal and recreating it with the same name won't automatically grant the new principal the same roles in Vault that the old principal had.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#resolve_aws_unique_ids AwsAuthBackendRole#resolve_aws_unique_ids}
  */
  readonly resolveAwsUniqueIds?: boolean | cdktf.IResolvable;
  /**
  * Name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#role AwsAuthBackendRole#role}
  */
  readonly role: string;
  /**
  * The key of the tag on EC2 instance to use for role tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#role_tag AwsAuthBackendRole#role_tag}
  */
  readonly roleTag?: string;
  /**
  * Specifies the blocks of IP addresses which are allowed to use the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#token_bound_cidrs AwsAuthBackendRole#token_bound_cidrs}
  */
  readonly tokenBoundCidrs?: string[];
  /**
  * Generated Token's Explicit Maximum TTL in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#token_explicit_max_ttl AwsAuthBackendRole#token_explicit_max_ttl}
  */
  readonly tokenExplicitMaxTtl?: number;
  /**
  * The maximum lifetime of the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#token_max_ttl AwsAuthBackendRole#token_max_ttl}
  */
  readonly tokenMaxTtl?: number;
  /**
  * If true, the 'default' policy will not automatically be added to generated tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#token_no_default_policy AwsAuthBackendRole#token_no_default_policy}
  */
  readonly tokenNoDefaultPolicy?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of times a token may be used, a value of zero means unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#token_num_uses AwsAuthBackendRole#token_num_uses}
  */
  readonly tokenNumUses?: number;
  /**
  * Generated Token's Period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#token_period AwsAuthBackendRole#token_period}
  */
  readonly tokenPeriod?: number;
  /**
  * Generated Token's Policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#token_policies AwsAuthBackendRole#token_policies}
  */
  readonly tokenPolicies?: string[];
  /**
  * The initial ttl of the token to generate in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#token_ttl AwsAuthBackendRole#token_ttl}
  */
  readonly tokenTtl?: number;
  /**
  * The type of token to generate, service or batch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#token_type AwsAuthBackendRole#token_type}
  */
  readonly tokenType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role vault_aws_auth_backend_role}
*/
export class AwsAuthBackendRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_aws_auth_backend_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsAuthBackendRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAuthBackendRole to import
  * @param importFromId The id of the existing AwsAuthBackendRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAuthBackendRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_aws_auth_backend_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role vault_aws_auth_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAuthBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAuthBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_aws_auth_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.1.0',
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
    this._allowInstanceMigration = config.allowInstanceMigration;
    this._authType = config.authType;
    this._backend = config.backend;
    this._boundAccountIds = config.boundAccountIds;
    this._boundAmiIds = config.boundAmiIds;
    this._boundEc2InstanceIds = config.boundEc2InstanceIds;
    this._boundIamInstanceProfileArns = config.boundIamInstanceProfileArns;
    this._boundIamPrincipalArns = config.boundIamPrincipalArns;
    this._boundIamRoleArns = config.boundIamRoleArns;
    this._boundRegions = config.boundRegions;
    this._boundSubnetIds = config.boundSubnetIds;
    this._boundVpcIds = config.boundVpcIds;
    this._disallowReauthentication = config.disallowReauthentication;
    this._id = config.id;
    this._inferredAwsRegion = config.inferredAwsRegion;
    this._inferredEntityType = config.inferredEntityType;
    this._namespace = config.namespace;
    this._resolveAwsUniqueIds = config.resolveAwsUniqueIds;
    this._role = config.role;
    this._roleTag = config.roleTag;
    this._tokenBoundCidrs = config.tokenBoundCidrs;
    this._tokenExplicitMaxTtl = config.tokenExplicitMaxTtl;
    this._tokenMaxTtl = config.tokenMaxTtl;
    this._tokenNoDefaultPolicy = config.tokenNoDefaultPolicy;
    this._tokenNumUses = config.tokenNumUses;
    this._tokenPeriod = config.tokenPeriod;
    this._tokenPolicies = config.tokenPolicies;
    this._tokenTtl = config.tokenTtl;
    this._tokenType = config.tokenType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_instance_migration - computed: false, optional: true, required: false
  private _allowInstanceMigration?: boolean | cdktf.IResolvable; 
  public get allowInstanceMigration() {
    return this.getBooleanAttribute('allow_instance_migration');
  }
  public set allowInstanceMigration(value: boolean | cdktf.IResolvable) {
    this._allowInstanceMigration = value;
  }
  public resetAllowInstanceMigration() {
    this._allowInstanceMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInstanceMigrationInput() {
    return this._allowInstanceMigration;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
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

  // bound_account_ids - computed: false, optional: true, required: false
  private _boundAccountIds?: string[]; 
  public get boundAccountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_account_ids'));
  }
  public set boundAccountIds(value: string[]) {
    this._boundAccountIds = value;
  }
  public resetBoundAccountIds() {
    this._boundAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundAccountIdsInput() {
    return this._boundAccountIds;
  }

  // bound_ami_ids - computed: false, optional: true, required: false
  private _boundAmiIds?: string[]; 
  public get boundAmiIds() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_ami_ids'));
  }
  public set boundAmiIds(value: string[]) {
    this._boundAmiIds = value;
  }
  public resetBoundAmiIds() {
    this._boundAmiIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundAmiIdsInput() {
    return this._boundAmiIds;
  }

  // bound_ec2_instance_ids - computed: false, optional: true, required: false
  private _boundEc2InstanceIds?: string[]; 
  public get boundEc2InstanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_ec2_instance_ids'));
  }
  public set boundEc2InstanceIds(value: string[]) {
    this._boundEc2InstanceIds = value;
  }
  public resetBoundEc2InstanceIds() {
    this._boundEc2InstanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundEc2InstanceIdsInput() {
    return this._boundEc2InstanceIds;
  }

  // bound_iam_instance_profile_arns - computed: false, optional: true, required: false
  private _boundIamInstanceProfileArns?: string[]; 
  public get boundIamInstanceProfileArns() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_iam_instance_profile_arns'));
  }
  public set boundIamInstanceProfileArns(value: string[]) {
    this._boundIamInstanceProfileArns = value;
  }
  public resetBoundIamInstanceProfileArns() {
    this._boundIamInstanceProfileArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundIamInstanceProfileArnsInput() {
    return this._boundIamInstanceProfileArns;
  }

  // bound_iam_principal_arns - computed: false, optional: true, required: false
  private _boundIamPrincipalArns?: string[]; 
  public get boundIamPrincipalArns() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_iam_principal_arns'));
  }
  public set boundIamPrincipalArns(value: string[]) {
    this._boundIamPrincipalArns = value;
  }
  public resetBoundIamPrincipalArns() {
    this._boundIamPrincipalArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundIamPrincipalArnsInput() {
    return this._boundIamPrincipalArns;
  }

  // bound_iam_role_arns - computed: false, optional: true, required: false
  private _boundIamRoleArns?: string[]; 
  public get boundIamRoleArns() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_iam_role_arns'));
  }
  public set boundIamRoleArns(value: string[]) {
    this._boundIamRoleArns = value;
  }
  public resetBoundIamRoleArns() {
    this._boundIamRoleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundIamRoleArnsInput() {
    return this._boundIamRoleArns;
  }

  // bound_regions - computed: false, optional: true, required: false
  private _boundRegions?: string[]; 
  public get boundRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_regions'));
  }
  public set boundRegions(value: string[]) {
    this._boundRegions = value;
  }
  public resetBoundRegions() {
    this._boundRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundRegionsInput() {
    return this._boundRegions;
  }

  // bound_subnet_ids - computed: false, optional: true, required: false
  private _boundSubnetIds?: string[]; 
  public get boundSubnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_subnet_ids'));
  }
  public set boundSubnetIds(value: string[]) {
    this._boundSubnetIds = value;
  }
  public resetBoundSubnetIds() {
    this._boundSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundSubnetIdsInput() {
    return this._boundSubnetIds;
  }

  // bound_vpc_ids - computed: false, optional: true, required: false
  private _boundVpcIds?: string[]; 
  public get boundVpcIds() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_vpc_ids'));
  }
  public set boundVpcIds(value: string[]) {
    this._boundVpcIds = value;
  }
  public resetBoundVpcIds() {
    this._boundVpcIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundVpcIdsInput() {
    return this._boundVpcIds;
  }

  // disallow_reauthentication - computed: false, optional: true, required: false
  private _disallowReauthentication?: boolean | cdktf.IResolvable; 
  public get disallowReauthentication() {
    return this.getBooleanAttribute('disallow_reauthentication');
  }
  public set disallowReauthentication(value: boolean | cdktf.IResolvable) {
    this._disallowReauthentication = value;
  }
  public resetDisallowReauthentication() {
    this._disallowReauthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowReauthenticationInput() {
    return this._disallowReauthentication;
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

  // inferred_aws_region - computed: false, optional: true, required: false
  private _inferredAwsRegion?: string; 
  public get inferredAwsRegion() {
    return this.getStringAttribute('inferred_aws_region');
  }
  public set inferredAwsRegion(value: string) {
    this._inferredAwsRegion = value;
  }
  public resetInferredAwsRegion() {
    this._inferredAwsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferredAwsRegionInput() {
    return this._inferredAwsRegion;
  }

  // inferred_entity_type - computed: false, optional: true, required: false
  private _inferredEntityType?: string; 
  public get inferredEntityType() {
    return this.getStringAttribute('inferred_entity_type');
  }
  public set inferredEntityType(value: string) {
    this._inferredEntityType = value;
  }
  public resetInferredEntityType() {
    this._inferredEntityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferredEntityTypeInput() {
    return this._inferredEntityType;
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

  // resolve_aws_unique_ids - computed: false, optional: true, required: false
  private _resolveAwsUniqueIds?: boolean | cdktf.IResolvable; 
  public get resolveAwsUniqueIds() {
    return this.getBooleanAttribute('resolve_aws_unique_ids');
  }
  public set resolveAwsUniqueIds(value: boolean | cdktf.IResolvable) {
    this._resolveAwsUniqueIds = value;
  }
  public resetResolveAwsUniqueIds() {
    this._resolveAwsUniqueIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveAwsUniqueIdsInput() {
    return this._resolveAwsUniqueIds;
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

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // role_tag - computed: false, optional: true, required: false
  private _roleTag?: string; 
  public get roleTag() {
    return this.getStringAttribute('role_tag');
  }
  public set roleTag(value: string) {
    this._roleTag = value;
  }
  public resetRoleTag() {
    this._roleTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTagInput() {
    return this._roleTag;
  }

  // token_bound_cidrs - computed: false, optional: true, required: false
  private _tokenBoundCidrs?: string[]; 
  public get tokenBoundCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('token_bound_cidrs'));
  }
  public set tokenBoundCidrs(value: string[]) {
    this._tokenBoundCidrs = value;
  }
  public resetTokenBoundCidrs() {
    this._tokenBoundCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBoundCidrsInput() {
    return this._tokenBoundCidrs;
  }

  // token_explicit_max_ttl - computed: false, optional: true, required: false
  private _tokenExplicitMaxTtl?: number; 
  public get tokenExplicitMaxTtl() {
    return this.getNumberAttribute('token_explicit_max_ttl');
  }
  public set tokenExplicitMaxTtl(value: number) {
    this._tokenExplicitMaxTtl = value;
  }
  public resetTokenExplicitMaxTtl() {
    this._tokenExplicitMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExplicitMaxTtlInput() {
    return this._tokenExplicitMaxTtl;
  }

  // token_max_ttl - computed: false, optional: true, required: false
  private _tokenMaxTtl?: number; 
  public get tokenMaxTtl() {
    return this.getNumberAttribute('token_max_ttl');
  }
  public set tokenMaxTtl(value: number) {
    this._tokenMaxTtl = value;
  }
  public resetTokenMaxTtl() {
    this._tokenMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenMaxTtlInput() {
    return this._tokenMaxTtl;
  }

  // token_no_default_policy - computed: false, optional: true, required: false
  private _tokenNoDefaultPolicy?: boolean | cdktf.IResolvable; 
  public get tokenNoDefaultPolicy() {
    return this.getBooleanAttribute('token_no_default_policy');
  }
  public set tokenNoDefaultPolicy(value: boolean | cdktf.IResolvable) {
    this._tokenNoDefaultPolicy = value;
  }
  public resetTokenNoDefaultPolicy() {
    this._tokenNoDefaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNoDefaultPolicyInput() {
    return this._tokenNoDefaultPolicy;
  }

  // token_num_uses - computed: false, optional: true, required: false
  private _tokenNumUses?: number; 
  public get tokenNumUses() {
    return this.getNumberAttribute('token_num_uses');
  }
  public set tokenNumUses(value: number) {
    this._tokenNumUses = value;
  }
  public resetTokenNumUses() {
    this._tokenNumUses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNumUsesInput() {
    return this._tokenNumUses;
  }

  // token_period - computed: false, optional: true, required: false
  private _tokenPeriod?: number; 
  public get tokenPeriod() {
    return this.getNumberAttribute('token_period');
  }
  public set tokenPeriod(value: number) {
    this._tokenPeriod = value;
  }
  public resetTokenPeriod() {
    this._tokenPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPeriodInput() {
    return this._tokenPeriod;
  }

  // token_policies - computed: false, optional: true, required: false
  private _tokenPolicies?: string[]; 
  public get tokenPolicies() {
    return cdktf.Fn.tolist(this.getListAttribute('token_policies'));
  }
  public set tokenPolicies(value: string[]) {
    this._tokenPolicies = value;
  }
  public resetTokenPolicies() {
    this._tokenPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPoliciesInput() {
    return this._tokenPolicies;
  }

  // token_ttl - computed: false, optional: true, required: false
  private _tokenTtl?: number; 
  public get tokenTtl() {
    return this.getNumberAttribute('token_ttl');
  }
  public set tokenTtl(value: number) {
    this._tokenTtl = value;
  }
  public resetTokenTtl() {
    this._tokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTtlInput() {
    return this._tokenTtl;
  }

  // token_type - computed: false, optional: true, required: false
  private _tokenType?: string; 
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
  public set tokenType(value: string) {
    this._tokenType = value;
  }
  public resetTokenType() {
    this._tokenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTypeInput() {
    return this._tokenType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_instance_migration: cdktf.booleanToTerraform(this._allowInstanceMigration),
      auth_type: cdktf.stringToTerraform(this._authType),
      backend: cdktf.stringToTerraform(this._backend),
      bound_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundAccountIds),
      bound_ami_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundAmiIds),
      bound_ec2_instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundEc2InstanceIds),
      bound_iam_instance_profile_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundIamInstanceProfileArns),
      bound_iam_principal_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundIamPrincipalArns),
      bound_iam_role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundIamRoleArns),
      bound_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundRegions),
      bound_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundSubnetIds),
      bound_vpc_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundVpcIds),
      disallow_reauthentication: cdktf.booleanToTerraform(this._disallowReauthentication),
      id: cdktf.stringToTerraform(this._id),
      inferred_aws_region: cdktf.stringToTerraform(this._inferredAwsRegion),
      inferred_entity_type: cdktf.stringToTerraform(this._inferredEntityType),
      namespace: cdktf.stringToTerraform(this._namespace),
      resolve_aws_unique_ids: cdktf.booleanToTerraform(this._resolveAwsUniqueIds),
      role: cdktf.stringToTerraform(this._role),
      role_tag: cdktf.stringToTerraform(this._roleTag),
      token_bound_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenBoundCidrs),
      token_explicit_max_ttl: cdktf.numberToTerraform(this._tokenExplicitMaxTtl),
      token_max_ttl: cdktf.numberToTerraform(this._tokenMaxTtl),
      token_no_default_policy: cdktf.booleanToTerraform(this._tokenNoDefaultPolicy),
      token_num_uses: cdktf.numberToTerraform(this._tokenNumUses),
      token_period: cdktf.numberToTerraform(this._tokenPeriod),
      token_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenPolicies),
      token_ttl: cdktf.numberToTerraform(this._tokenTtl),
      token_type: cdktf.stringToTerraform(this._tokenType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_instance_migration: {
        value: cdktf.booleanToHclTerraform(this._allowInstanceMigration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bound_account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundAccountIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_ami_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundAmiIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_ec2_instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundEc2InstanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_iam_instance_profile_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundIamInstanceProfileArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_iam_principal_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundIamPrincipalArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_iam_role_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundIamRoleArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundRegions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundSubnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_vpc_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundVpcIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      disallow_reauthentication: {
        value: cdktf.booleanToHclTerraform(this._disallowReauthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inferred_aws_region: {
        value: cdktf.stringToHclTerraform(this._inferredAwsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inferred_entity_type: {
        value: cdktf.stringToHclTerraform(this._inferredEntityType),
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
      resolve_aws_unique_ids: {
        value: cdktf.booleanToHclTerraform(this._resolveAwsUniqueIds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_tag: {
        value: cdktf.stringToHclTerraform(this._roleTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_bound_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenBoundCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_explicit_max_ttl: {
        value: cdktf.numberToHclTerraform(this._tokenExplicitMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_max_ttl: {
        value: cdktf.numberToHclTerraform(this._tokenMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_no_default_policy: {
        value: cdktf.booleanToHclTerraform(this._tokenNoDefaultPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_num_uses: {
        value: cdktf.numberToHclTerraform(this._tokenNumUses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_period: {
        value: cdktf.numberToHclTerraform(this._tokenPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenPolicies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_ttl: {
        value: cdktf.numberToHclTerraform(this._tokenTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_type: {
        value: cdktf.stringToHclTerraform(this._tokenType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
