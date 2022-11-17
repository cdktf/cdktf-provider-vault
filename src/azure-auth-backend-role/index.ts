// https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureAuthBackendRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique name of the auth backend to configure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#backend AzureAuthBackendRole#backend}
  */
  readonly backend?: string;
  /**
  * The list of group ids that login is restricted to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#bound_group_ids AzureAuthBackendRole#bound_group_ids}
  */
  readonly boundGroupIds?: string[];
  /**
  * The list of locations that login is restricted to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#bound_locations AzureAuthBackendRole#bound_locations}
  */
  readonly boundLocations?: string[];
  /**
  * The list of resource groups that login is restricted to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#bound_resource_groups AzureAuthBackendRole#bound_resource_groups}
  */
  readonly boundResourceGroups?: string[];
  /**
  * The list of scale set names that the login is restricted to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#bound_scale_sets AzureAuthBackendRole#bound_scale_sets}
  */
  readonly boundScaleSets?: string[];
  /**
  * The list of Service Principal IDs that login is restricted to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#bound_service_principal_ids AzureAuthBackendRole#bound_service_principal_ids}
  */
  readonly boundServicePrincipalIds?: string[];
  /**
  * The list of subscription IDs that login is restricted to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#bound_subscription_ids AzureAuthBackendRole#bound_subscription_ids}
  */
  readonly boundSubscriptionIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#id AzureAuthBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#namespace AzureAuthBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#role AzureAuthBackendRole#role}
  */
  readonly role: string;
  /**
  * Specifies the blocks of IP addresses which are allowed to use the generated token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#token_bound_cidrs AzureAuthBackendRole#token_bound_cidrs}
  */
  readonly tokenBoundCidrs?: string[];
  /**
  * Generated Token's Explicit Maximum TTL in seconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#token_explicit_max_ttl AzureAuthBackendRole#token_explicit_max_ttl}
  */
  readonly tokenExplicitMaxTtl?: number;
  /**
  * The maximum lifetime of the generated token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#token_max_ttl AzureAuthBackendRole#token_max_ttl}
  */
  readonly tokenMaxTtl?: number;
  /**
  * If true, the 'default' policy will not automatically be added to generated tokens
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#token_no_default_policy AzureAuthBackendRole#token_no_default_policy}
  */
  readonly tokenNoDefaultPolicy?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of times a token may be used, a value of zero means unlimited
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#token_num_uses AzureAuthBackendRole#token_num_uses}
  */
  readonly tokenNumUses?: number;
  /**
  * Generated Token's Period
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#token_period AzureAuthBackendRole#token_period}
  */
  readonly tokenPeriod?: number;
  /**
  * Generated Token's Policies
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#token_policies AzureAuthBackendRole#token_policies}
  */
  readonly tokenPolicies?: string[];
  /**
  * The initial ttl of the token to generate in seconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#token_ttl AzureAuthBackendRole#token_ttl}
  */
  readonly tokenTtl?: number;
  /**
  * The type of token to generate, service or batch
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role#token_type AzureAuthBackendRole#token_type}
  */
  readonly tokenType?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role vault_azure_auth_backend_role}
*/
export class AzureAuthBackendRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_azure_auth_backend_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/azure_auth_backend_role vault_azure_auth_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureAuthBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: AzureAuthBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_azure_auth_backend_role',
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
    this._boundGroupIds = config.boundGroupIds;
    this._boundLocations = config.boundLocations;
    this._boundResourceGroups = config.boundResourceGroups;
    this._boundScaleSets = config.boundScaleSets;
    this._boundServicePrincipalIds = config.boundServicePrincipalIds;
    this._boundSubscriptionIds = config.boundSubscriptionIds;
    this._id = config.id;
    this._namespace = config.namespace;
    this._role = config.role;
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

  // bound_group_ids - computed: false, optional: true, required: false
  private _boundGroupIds?: string[]; 
  public get boundGroupIds() {
    return this.getListAttribute('bound_group_ids');
  }
  public set boundGroupIds(value: string[]) {
    this._boundGroupIds = value;
  }
  public resetBoundGroupIds() {
    this._boundGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundGroupIdsInput() {
    return this._boundGroupIds;
  }

  // bound_locations - computed: false, optional: true, required: false
  private _boundLocations?: string[]; 
  public get boundLocations() {
    return this.getListAttribute('bound_locations');
  }
  public set boundLocations(value: string[]) {
    this._boundLocations = value;
  }
  public resetBoundLocations() {
    this._boundLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundLocationsInput() {
    return this._boundLocations;
  }

  // bound_resource_groups - computed: false, optional: true, required: false
  private _boundResourceGroups?: string[]; 
  public get boundResourceGroups() {
    return this.getListAttribute('bound_resource_groups');
  }
  public set boundResourceGroups(value: string[]) {
    this._boundResourceGroups = value;
  }
  public resetBoundResourceGroups() {
    this._boundResourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundResourceGroupsInput() {
    return this._boundResourceGroups;
  }

  // bound_scale_sets - computed: false, optional: true, required: false
  private _boundScaleSets?: string[]; 
  public get boundScaleSets() {
    return this.getListAttribute('bound_scale_sets');
  }
  public set boundScaleSets(value: string[]) {
    this._boundScaleSets = value;
  }
  public resetBoundScaleSets() {
    this._boundScaleSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundScaleSetsInput() {
    return this._boundScaleSets;
  }

  // bound_service_principal_ids - computed: false, optional: true, required: false
  private _boundServicePrincipalIds?: string[]; 
  public get boundServicePrincipalIds() {
    return this.getListAttribute('bound_service_principal_ids');
  }
  public set boundServicePrincipalIds(value: string[]) {
    this._boundServicePrincipalIds = value;
  }
  public resetBoundServicePrincipalIds() {
    this._boundServicePrincipalIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundServicePrincipalIdsInput() {
    return this._boundServicePrincipalIds;
  }

  // bound_subscription_ids - computed: false, optional: true, required: false
  private _boundSubscriptionIds?: string[]; 
  public get boundSubscriptionIds() {
    return this.getListAttribute('bound_subscription_ids');
  }
  public set boundSubscriptionIds(value: string[]) {
    this._boundSubscriptionIds = value;
  }
  public resetBoundSubscriptionIds() {
    this._boundSubscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundSubscriptionIdsInput() {
    return this._boundSubscriptionIds;
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
      backend: cdktf.stringToTerraform(this._backend),
      bound_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundGroupIds),
      bound_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundLocations),
      bound_resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundResourceGroups),
      bound_scale_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundScaleSets),
      bound_service_principal_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundServicePrincipalIds),
      bound_subscription_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundSubscriptionIds),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      role: cdktf.stringToTerraform(this._role),
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
}
