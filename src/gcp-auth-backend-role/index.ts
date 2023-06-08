/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpAuthBackendRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#add_group_aliases GcpAuthBackendRole#add_group_aliases}
  */
  readonly addGroupAliases?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#allow_gce_inference GcpAuthBackendRole#allow_gce_inference}
  */
  readonly allowGceInference?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#backend GcpAuthBackendRole#backend}
  */
  readonly backend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#bound_instance_groups GcpAuthBackendRole#bound_instance_groups}
  */
  readonly boundInstanceGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#bound_labels GcpAuthBackendRole#bound_labels}
  */
  readonly boundLabels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#bound_projects GcpAuthBackendRole#bound_projects}
  */
  readonly boundProjects?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#bound_regions GcpAuthBackendRole#bound_regions}
  */
  readonly boundRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#bound_service_accounts GcpAuthBackendRole#bound_service_accounts}
  */
  readonly boundServiceAccounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#bound_zones GcpAuthBackendRole#bound_zones}
  */
  readonly boundZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#id GcpAuthBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#max_jwt_exp GcpAuthBackendRole#max_jwt_exp}
  */
  readonly maxJwtExp?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#namespace GcpAuthBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#role GcpAuthBackendRole#role}
  */
  readonly role: string;
  /**
  * Specifies the blocks of IP addresses which are allowed to use the generated token
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#token_bound_cidrs GcpAuthBackendRole#token_bound_cidrs}
  */
  readonly tokenBoundCidrs?: string[];
  /**
  * Generated Token's Explicit Maximum TTL in seconds
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#token_explicit_max_ttl GcpAuthBackendRole#token_explicit_max_ttl}
  */
  readonly tokenExplicitMaxTtl?: number;
  /**
  * The maximum lifetime of the generated token
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#token_max_ttl GcpAuthBackendRole#token_max_ttl}
  */
  readonly tokenMaxTtl?: number;
  /**
  * If true, the 'default' policy will not automatically be added to generated tokens
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#token_no_default_policy GcpAuthBackendRole#token_no_default_policy}
  */
  readonly tokenNoDefaultPolicy?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of times a token may be used, a value of zero means unlimited
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#token_num_uses GcpAuthBackendRole#token_num_uses}
  */
  readonly tokenNumUses?: number;
  /**
  * Generated Token's Period
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#token_period GcpAuthBackendRole#token_period}
  */
  readonly tokenPeriod?: number;
  /**
  * Generated Token's Policies
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#token_policies GcpAuthBackendRole#token_policies}
  */
  readonly tokenPolicies?: string[];
  /**
  * The initial ttl of the token to generate in seconds
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#token_ttl GcpAuthBackendRole#token_ttl}
  */
  readonly tokenTtl?: number;
  /**
  * The type of token to generate, service or batch
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#token_type GcpAuthBackendRole#token_type}
  */
  readonly tokenType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role#type GcpAuthBackendRole#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role vault_gcp_auth_backend_role}
*/
export class GcpAuthBackendRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_gcp_auth_backend_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_auth_backend_role vault_gcp_auth_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpAuthBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: GcpAuthBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_gcp_auth_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.16.0',
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
    this._addGroupAliases = config.addGroupAliases;
    this._allowGceInference = config.allowGceInference;
    this._backend = config.backend;
    this._boundInstanceGroups = config.boundInstanceGroups;
    this._boundLabels = config.boundLabels;
    this._boundProjects = config.boundProjects;
    this._boundRegions = config.boundRegions;
    this._boundServiceAccounts = config.boundServiceAccounts;
    this._boundZones = config.boundZones;
    this._id = config.id;
    this._maxJwtExp = config.maxJwtExp;
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
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_group_aliases - computed: true, optional: true, required: false
  private _addGroupAliases?: boolean | cdktf.IResolvable; 
  public get addGroupAliases() {
    return this.getBooleanAttribute('add_group_aliases');
  }
  public set addGroupAliases(value: boolean | cdktf.IResolvable) {
    this._addGroupAliases = value;
  }
  public resetAddGroupAliases() {
    this._addGroupAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addGroupAliasesInput() {
    return this._addGroupAliases;
  }

  // allow_gce_inference - computed: true, optional: true, required: false
  private _allowGceInference?: boolean | cdktf.IResolvable; 
  public get allowGceInference() {
    return this.getBooleanAttribute('allow_gce_inference');
  }
  public set allowGceInference(value: boolean | cdktf.IResolvable) {
    this._allowGceInference = value;
  }
  public resetAllowGceInference() {
    this._allowGceInference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGceInferenceInput() {
    return this._allowGceInference;
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

  // bound_instance_groups - computed: true, optional: true, required: false
  private _boundInstanceGroups?: string[]; 
  public get boundInstanceGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_instance_groups'));
  }
  public set boundInstanceGroups(value: string[]) {
    this._boundInstanceGroups = value;
  }
  public resetBoundInstanceGroups() {
    this._boundInstanceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundInstanceGroupsInput() {
    return this._boundInstanceGroups;
  }

  // bound_labels - computed: true, optional: true, required: false
  private _boundLabels?: string[]; 
  public get boundLabels() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_labels'));
  }
  public set boundLabels(value: string[]) {
    this._boundLabels = value;
  }
  public resetBoundLabels() {
    this._boundLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundLabelsInput() {
    return this._boundLabels;
  }

  // bound_projects - computed: false, optional: true, required: false
  private _boundProjects?: string[]; 
  public get boundProjects() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_projects'));
  }
  public set boundProjects(value: string[]) {
    this._boundProjects = value;
  }
  public resetBoundProjects() {
    this._boundProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundProjectsInput() {
    return this._boundProjects;
  }

  // bound_regions - computed: true, optional: true, required: false
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

  // bound_service_accounts - computed: true, optional: true, required: false
  private _boundServiceAccounts?: string[]; 
  public get boundServiceAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_service_accounts'));
  }
  public set boundServiceAccounts(value: string[]) {
    this._boundServiceAccounts = value;
  }
  public resetBoundServiceAccounts() {
    this._boundServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundServiceAccountsInput() {
    return this._boundServiceAccounts;
  }

  // bound_zones - computed: true, optional: true, required: false
  private _boundZones?: string[]; 
  public get boundZones() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_zones'));
  }
  public set boundZones(value: string[]) {
    this._boundZones = value;
  }
  public resetBoundZones() {
    this._boundZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundZonesInput() {
    return this._boundZones;
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

  // max_jwt_exp - computed: true, optional: true, required: false
  private _maxJwtExp?: string; 
  public get maxJwtExp() {
    return this.getStringAttribute('max_jwt_exp');
  }
  public set maxJwtExp(value: string) {
    this._maxJwtExp = value;
  }
  public resetMaxJwtExp() {
    this._maxJwtExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxJwtExpInput() {
    return this._maxJwtExp;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
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
      add_group_aliases: cdktf.booleanToTerraform(this._addGroupAliases),
      allow_gce_inference: cdktf.booleanToTerraform(this._allowGceInference),
      backend: cdktf.stringToTerraform(this._backend),
      bound_instance_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundInstanceGroups),
      bound_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundLabels),
      bound_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundProjects),
      bound_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundRegions),
      bound_service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundServiceAccounts),
      bound_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundZones),
      id: cdktf.stringToTerraform(this._id),
      max_jwt_exp: cdktf.stringToTerraform(this._maxJwtExp),
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
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
