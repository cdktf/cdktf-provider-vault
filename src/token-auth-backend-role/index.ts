// https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TokenAuthBackendRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of allowed entity aliases for this role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#allowed_entity_aliases TokenAuthBackendRole#allowed_entity_aliases}
  */
  readonly allowedEntityAliases?: string[];
  /**
  * List of allowed policies for given role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#allowed_policies TokenAuthBackendRole#allowed_policies}
  */
  readonly allowedPolicies?: string[];
  /**
  * Set of allowed policies with glob match for given role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#allowed_policies_glob TokenAuthBackendRole#allowed_policies_glob}
  */
  readonly allowedPoliciesGlob?: string[];
  /**
  * List of disallowed policies for given role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#disallowed_policies TokenAuthBackendRole#disallowed_policies}
  */
  readonly disallowedPolicies?: string[];
  /**
  * Set of disallowed policies with glob match for given role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#disallowed_policies_glob TokenAuthBackendRole#disallowed_policies_glob}
  */
  readonly disallowedPoliciesGlob?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#id TokenAuthBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#namespace TokenAuthBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * If true, tokens created against this policy will be orphan tokens.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#orphan TokenAuthBackendRole#orphan}
  */
  readonly orphan?: boolean | cdktf.IResolvable;
  /**
  * Tokens created against this role will have the given suffix as part of their path in addition to the role name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#path_suffix TokenAuthBackendRole#path_suffix}
  */
  readonly pathSuffix?: string;
  /**
  * Whether to disable the ability of the token to be renewed past its initial TTL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#renewable TokenAuthBackendRole#renewable}
  */
  readonly renewable?: boolean | cdktf.IResolvable;
  /**
  * Name of the role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#role_name TokenAuthBackendRole#role_name}
  */
  readonly roleName: string;
  /**
  * Specifies the blocks of IP addresses which are allowed to use the generated token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#token_bound_cidrs TokenAuthBackendRole#token_bound_cidrs}
  */
  readonly tokenBoundCidrs?: string[];
  /**
  * Generated Token's Explicit Maximum TTL in seconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#token_explicit_max_ttl TokenAuthBackendRole#token_explicit_max_ttl}
  */
  readonly tokenExplicitMaxTtl?: number;
  /**
  * The maximum lifetime of the generated token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#token_max_ttl TokenAuthBackendRole#token_max_ttl}
  */
  readonly tokenMaxTtl?: number;
  /**
  * If true, the 'default' policy will not automatically be added to generated tokens
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#token_no_default_policy TokenAuthBackendRole#token_no_default_policy}
  */
  readonly tokenNoDefaultPolicy?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of times a token may be used, a value of zero means unlimited
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#token_num_uses TokenAuthBackendRole#token_num_uses}
  */
  readonly tokenNumUses?: number;
  /**
  * Generated Token's Period
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#token_period TokenAuthBackendRole#token_period}
  */
  readonly tokenPeriod?: number;
  /**
  * Generated Token's Policies
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#token_policies TokenAuthBackendRole#token_policies}
  */
  readonly tokenPolicies?: string[];
  /**
  * The initial ttl of the token to generate in seconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#token_ttl TokenAuthBackendRole#token_ttl}
  */
  readonly tokenTtl?: number;
  /**
  * The type of token to generate, service or batch
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role#token_type TokenAuthBackendRole#token_type}
  */
  readonly tokenType?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role vault_token_auth_backend_role}
*/
export class TokenAuthBackendRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_token_auth_backend_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/token_auth_backend_role vault_token_auth_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TokenAuthBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: TokenAuthBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_token_auth_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.15.0',
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
    this._allowedEntityAliases = config.allowedEntityAliases;
    this._allowedPolicies = config.allowedPolicies;
    this._allowedPoliciesGlob = config.allowedPoliciesGlob;
    this._disallowedPolicies = config.disallowedPolicies;
    this._disallowedPoliciesGlob = config.disallowedPoliciesGlob;
    this._id = config.id;
    this._namespace = config.namespace;
    this._orphan = config.orphan;
    this._pathSuffix = config.pathSuffix;
    this._renewable = config.renewable;
    this._roleName = config.roleName;
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

  // allowed_entity_aliases - computed: false, optional: true, required: false
  private _allowedEntityAliases?: string[]; 
  public get allowedEntityAliases() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_entity_aliases'));
  }
  public set allowedEntityAliases(value: string[]) {
    this._allowedEntityAliases = value;
  }
  public resetAllowedEntityAliases() {
    this._allowedEntityAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedEntityAliasesInput() {
    return this._allowedEntityAliases;
  }

  // allowed_policies - computed: false, optional: true, required: false
  private _allowedPolicies?: string[]; 
  public get allowedPolicies() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_policies'));
  }
  public set allowedPolicies(value: string[]) {
    this._allowedPolicies = value;
  }
  public resetAllowedPolicies() {
    this._allowedPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPoliciesInput() {
    return this._allowedPolicies;
  }

  // allowed_policies_glob - computed: false, optional: true, required: false
  private _allowedPoliciesGlob?: string[]; 
  public get allowedPoliciesGlob() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_policies_glob'));
  }
  public set allowedPoliciesGlob(value: string[]) {
    this._allowedPoliciesGlob = value;
  }
  public resetAllowedPoliciesGlob() {
    this._allowedPoliciesGlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPoliciesGlobInput() {
    return this._allowedPoliciesGlob;
  }

  // disallowed_policies - computed: false, optional: true, required: false
  private _disallowedPolicies?: string[]; 
  public get disallowedPolicies() {
    return cdktf.Fn.tolist(this.getListAttribute('disallowed_policies'));
  }
  public set disallowedPolicies(value: string[]) {
    this._disallowedPolicies = value;
  }
  public resetDisallowedPolicies() {
    this._disallowedPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedPoliciesInput() {
    return this._disallowedPolicies;
  }

  // disallowed_policies_glob - computed: false, optional: true, required: false
  private _disallowedPoliciesGlob?: string[]; 
  public get disallowedPoliciesGlob() {
    return cdktf.Fn.tolist(this.getListAttribute('disallowed_policies_glob'));
  }
  public set disallowedPoliciesGlob(value: string[]) {
    this._disallowedPoliciesGlob = value;
  }
  public resetDisallowedPoliciesGlob() {
    this._disallowedPoliciesGlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedPoliciesGlobInput() {
    return this._disallowedPoliciesGlob;
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

  // orphan - computed: false, optional: true, required: false
  private _orphan?: boolean | cdktf.IResolvable; 
  public get orphan() {
    return this.getBooleanAttribute('orphan');
  }
  public set orphan(value: boolean | cdktf.IResolvable) {
    this._orphan = value;
  }
  public resetOrphan() {
    this._orphan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orphanInput() {
    return this._orphan;
  }

  // path_suffix - computed: false, optional: true, required: false
  private _pathSuffix?: string; 
  public get pathSuffix() {
    return this.getStringAttribute('path_suffix');
  }
  public set pathSuffix(value: string) {
    this._pathSuffix = value;
  }
  public resetPathSuffix() {
    this._pathSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathSuffixInput() {
    return this._pathSuffix;
  }

  // renewable - computed: false, optional: true, required: false
  private _renewable?: boolean | cdktf.IResolvable; 
  public get renewable() {
    return this.getBooleanAttribute('renewable');
  }
  public set renewable(value: boolean | cdktf.IResolvable) {
    this._renewable = value;
  }
  public resetRenewable() {
    this._renewable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewableInput() {
    return this._renewable;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
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
      allowed_entity_aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedEntityAliases),
      allowed_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedPolicies),
      allowed_policies_glob: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedPoliciesGlob),
      disallowed_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disallowedPolicies),
      disallowed_policies_glob: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disallowedPoliciesGlob),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      orphan: cdktf.booleanToTerraform(this._orphan),
      path_suffix: cdktf.stringToTerraform(this._pathSuffix),
      renewable: cdktf.booleanToTerraform(this._renewable),
      role_name: cdktf.stringToTerraform(this._roleName),
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
