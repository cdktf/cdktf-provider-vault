/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApproleAuthBackendRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique name of the auth backend to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#backend ApproleAuthBackendRole#backend}
  */
  readonly backend?: string;
  /**
  * Whether or not to require secret_id to be present when logging in using this AppRole.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#bind_secret_id ApproleAuthBackendRole#bind_secret_id}
  */
  readonly bindSecretId?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#id ApproleAuthBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#namespace ApproleAuthBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * The RoleID of the role. Autogenerated if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#role_id ApproleAuthBackendRole#role_id}
  */
  readonly roleId?: string;
  /**
  * Name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#role_name ApproleAuthBackendRole#role_name}
  */
  readonly roleName: string;
  /**
  * List of CIDR blocks that can log in using the AppRole.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#secret_id_bound_cidrs ApproleAuthBackendRole#secret_id_bound_cidrs}
  */
  readonly secretIdBoundCidrs?: string[];
  /**
  * Number of times which a particular SecretID can be used to fetch a token from this AppRole, after which the SecretID will expire. Leaving this unset or setting it to 0 will allow unlimited uses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#secret_id_num_uses ApproleAuthBackendRole#secret_id_num_uses}
  */
  readonly secretIdNumUses?: number;
  /**
  * Number of seconds a SecretID remains valid for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#secret_id_ttl ApproleAuthBackendRole#secret_id_ttl}
  */
  readonly secretIdTtl?: number;
  /**
  * Specifies the blocks of IP addresses which are allowed to use the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#token_bound_cidrs ApproleAuthBackendRole#token_bound_cidrs}
  */
  readonly tokenBoundCidrs?: string[];
  /**
  * Generated Token's Explicit Maximum TTL in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#token_explicit_max_ttl ApproleAuthBackendRole#token_explicit_max_ttl}
  */
  readonly tokenExplicitMaxTtl?: number;
  /**
  * The maximum lifetime of the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#token_max_ttl ApproleAuthBackendRole#token_max_ttl}
  */
  readonly tokenMaxTtl?: number;
  /**
  * If true, the 'default' policy will not automatically be added to generated tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#token_no_default_policy ApproleAuthBackendRole#token_no_default_policy}
  */
  readonly tokenNoDefaultPolicy?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of times a token may be used, a value of zero means unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#token_num_uses ApproleAuthBackendRole#token_num_uses}
  */
  readonly tokenNumUses?: number;
  /**
  * Generated Token's Period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#token_period ApproleAuthBackendRole#token_period}
  */
  readonly tokenPeriod?: number;
  /**
  * Generated Token's Policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#token_policies ApproleAuthBackendRole#token_policies}
  */
  readonly tokenPolicies?: string[];
  /**
  * The initial ttl of the token to generate in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#token_ttl ApproleAuthBackendRole#token_ttl}
  */
  readonly tokenTtl?: number;
  /**
  * The type of token to generate, service or batch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#token_type ApproleAuthBackendRole#token_type}
  */
  readonly tokenType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role vault_approle_auth_backend_role}
*/
export class ApproleAuthBackendRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_approle_auth_backend_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApproleAuthBackendRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApproleAuthBackendRole to import
  * @param importFromId The id of the existing ApproleAuthBackendRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApproleAuthBackendRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_approle_auth_backend_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role vault_approle_auth_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApproleAuthBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: ApproleAuthBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_approle_auth_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.1.0',
        providerVersionConstraint: '~> 5.0'
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
    this._bindSecretId = config.bindSecretId;
    this._id = config.id;
    this._namespace = config.namespace;
    this._roleId = config.roleId;
    this._roleName = config.roleName;
    this._secretIdBoundCidrs = config.secretIdBoundCidrs;
    this._secretIdNumUses = config.secretIdNumUses;
    this._secretIdTtl = config.secretIdTtl;
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

  // bind_secret_id - computed: false, optional: true, required: false
  private _bindSecretId?: boolean | cdktf.IResolvable; 
  public get bindSecretId() {
    return this.getBooleanAttribute('bind_secret_id');
  }
  public set bindSecretId(value: boolean | cdktf.IResolvable) {
    this._bindSecretId = value;
  }
  public resetBindSecretId() {
    this._bindSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindSecretIdInput() {
    return this._bindSecretId;
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

  // role_id - computed: true, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
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

  // secret_id_bound_cidrs - computed: false, optional: true, required: false
  private _secretIdBoundCidrs?: string[]; 
  public get secretIdBoundCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('secret_id_bound_cidrs'));
  }
  public set secretIdBoundCidrs(value: string[]) {
    this._secretIdBoundCidrs = value;
  }
  public resetSecretIdBoundCidrs() {
    this._secretIdBoundCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdBoundCidrsInput() {
    return this._secretIdBoundCidrs;
  }

  // secret_id_num_uses - computed: false, optional: true, required: false
  private _secretIdNumUses?: number; 
  public get secretIdNumUses() {
    return this.getNumberAttribute('secret_id_num_uses');
  }
  public set secretIdNumUses(value: number) {
    this._secretIdNumUses = value;
  }
  public resetSecretIdNumUses() {
    this._secretIdNumUses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdNumUsesInput() {
    return this._secretIdNumUses;
  }

  // secret_id_ttl - computed: false, optional: true, required: false
  private _secretIdTtl?: number; 
  public get secretIdTtl() {
    return this.getNumberAttribute('secret_id_ttl');
  }
  public set secretIdTtl(value: number) {
    this._secretIdTtl = value;
  }
  public resetSecretIdTtl() {
    this._secretIdTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdTtlInput() {
    return this._secretIdTtl;
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
      bind_secret_id: cdktf.booleanToTerraform(this._bindSecretId),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      role_id: cdktf.stringToTerraform(this._roleId),
      role_name: cdktf.stringToTerraform(this._roleName),
      secret_id_bound_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secretIdBoundCidrs),
      secret_id_num_uses: cdktf.numberToTerraform(this._secretIdNumUses),
      secret_id_ttl: cdktf.numberToTerraform(this._secretIdTtl),
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
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_secret_id: {
        value: cdktf.booleanToHclTerraform(this._bindSecretId),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_id_bound_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secretIdBoundCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secret_id_num_uses: {
        value: cdktf.numberToHclTerraform(this._secretIdNumUses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_id_ttl: {
        value: cdktf.numberToHclTerraform(this._secretIdTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
