// https://www.terraform.io/docs/providers/vault/r/token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name of the token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#display_name Token#display_name}
  */
  readonly displayName?: string;
  /**
  * The explicit max TTL of the token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#explicit_max_ttl Token#explicit_max_ttl}
  */
  readonly explicitMaxTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#id Token#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metadata to be associated with the token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#metadata Token#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#namespace Token#namespace}
  */
  readonly namespace?: string;
  /**
  * Flag to disable the default policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#no_default_policy Token#no_default_policy}
  */
  readonly noDefaultPolicy?: boolean | cdktf.IResolvable;
  /**
  * Flag to create a token without parent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#no_parent Token#no_parent}
  */
  readonly noParent?: boolean | cdktf.IResolvable;
  /**
  * The number of allowed uses of the token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#num_uses Token#num_uses}
  */
  readonly numUses?: number;
  /**
  * The period of the token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#period Token#period}
  */
  readonly period?: string;
  /**
  * List of policies.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#policies Token#policies}
  */
  readonly policies?: string[];
  /**
  * The renew increment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#renew_increment Token#renew_increment}
  */
  readonly renewIncrement?: number;
  /**
  * The minimum lease to renew token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#renew_min_lease Token#renew_min_lease}
  */
  readonly renewMinLease?: number;
  /**
  * Flag to allow the token to be renewed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#renewable Token#renewable}
  */
  readonly renewable?: boolean | cdktf.IResolvable;
  /**
  * The token role name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#role_name Token#role_name}
  */
  readonly roleName?: string;
  /**
  * The TTL period of the token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#ttl Token#ttl}
  */
  readonly ttl?: string;
  /**
  * The TTL period of the wrapped token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/token#wrapping_ttl Token#wrapping_ttl}
  */
  readonly wrappingTtl?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/token vault_token}
*/
export class Token extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/token vault_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TokenConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TokenConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_token',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.9.0',
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
    this._displayName = config.displayName;
    this._explicitMaxTtl = config.explicitMaxTtl;
    this._id = config.id;
    this._metadata = config.metadata;
    this._namespace = config.namespace;
    this._noDefaultPolicy = config.noDefaultPolicy;
    this._noParent = config.noParent;
    this._numUses = config.numUses;
    this._period = config.period;
    this._policies = config.policies;
    this._renewIncrement = config.renewIncrement;
    this._renewMinLease = config.renewMinLease;
    this._renewable = config.renewable;
    this._roleName = config.roleName;
    this._ttl = config.ttl;
    this._wrappingTtl = config.wrappingTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // explicit_max_ttl - computed: false, optional: true, required: false
  private _explicitMaxTtl?: string; 
  public get explicitMaxTtl() {
    return this.getStringAttribute('explicit_max_ttl');
  }
  public set explicitMaxTtl(value: string) {
    this._explicitMaxTtl = value;
  }
  public resetExplicitMaxTtl() {
    this._explicitMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitMaxTtlInput() {
    return this._explicitMaxTtl;
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

  // lease_duration - computed: true, optional: false, required: false
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }

  // lease_started - computed: true, optional: false, required: false
  public get leaseStarted() {
    return this.getStringAttribute('lease_started');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // no_default_policy - computed: false, optional: true, required: false
  private _noDefaultPolicy?: boolean | cdktf.IResolvable; 
  public get noDefaultPolicy() {
    return this.getBooleanAttribute('no_default_policy');
  }
  public set noDefaultPolicy(value: boolean | cdktf.IResolvable) {
    this._noDefaultPolicy = value;
  }
  public resetNoDefaultPolicy() {
    this._noDefaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDefaultPolicyInput() {
    return this._noDefaultPolicy;
  }

  // no_parent - computed: true, optional: true, required: false
  private _noParent?: boolean | cdktf.IResolvable; 
  public get noParent() {
    return this.getBooleanAttribute('no_parent');
  }
  public set noParent(value: boolean | cdktf.IResolvable) {
    this._noParent = value;
  }
  public resetNoParent() {
    this._noParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noParentInput() {
    return this._noParent;
  }

  // num_uses - computed: true, optional: true, required: false
  private _numUses?: number; 
  public get numUses() {
    return this.getNumberAttribute('num_uses');
  }
  public set numUses(value: number) {
    this._numUses = value;
  }
  public resetNumUses() {
    this._numUses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numUsesInput() {
    return this._numUses;
  }

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // renew_increment - computed: false, optional: true, required: false
  private _renewIncrement?: number; 
  public get renewIncrement() {
    return this.getNumberAttribute('renew_increment');
  }
  public set renewIncrement(value: number) {
    this._renewIncrement = value;
  }
  public resetRenewIncrement() {
    this._renewIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewIncrementInput() {
    return this._renewIncrement;
  }

  // renew_min_lease - computed: false, optional: true, required: false
  private _renewMinLease?: number; 
  public get renewMinLease() {
    return this.getNumberAttribute('renew_min_lease');
  }
  public set renewMinLease(value: number) {
    this._renewMinLease = value;
  }
  public resetRenewMinLease() {
    this._renewMinLease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewMinLeaseInput() {
    return this._renewMinLease;
  }

  // renewable - computed: true, optional: true, required: false
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

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // wrapped_token - computed: true, optional: false, required: false
  public get wrappedToken() {
    return this.getStringAttribute('wrapped_token');
  }

  // wrapping_accessor - computed: true, optional: false, required: false
  public get wrappingAccessor() {
    return this.getStringAttribute('wrapping_accessor');
  }

  // wrapping_ttl - computed: false, optional: true, required: false
  private _wrappingTtl?: string; 
  public get wrappingTtl() {
    return this.getStringAttribute('wrapping_ttl');
  }
  public set wrappingTtl(value: string) {
    this._wrappingTtl = value;
  }
  public resetWrappingTtl() {
    this._wrappingTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappingTtlInput() {
    return this._wrappingTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      explicit_max_ttl: cdktf.stringToTerraform(this._explicitMaxTtl),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      namespace: cdktf.stringToTerraform(this._namespace),
      no_default_policy: cdktf.booleanToTerraform(this._noDefaultPolicy),
      no_parent: cdktf.booleanToTerraform(this._noParent),
      num_uses: cdktf.numberToTerraform(this._numUses),
      period: cdktf.stringToTerraform(this._period),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      renew_increment: cdktf.numberToTerraform(this._renewIncrement),
      renew_min_lease: cdktf.numberToTerraform(this._renewMinLease),
      renewable: cdktf.booleanToTerraform(this._renewable),
      role_name: cdktf.stringToTerraform(this._roleName),
      ttl: cdktf.stringToTerraform(this._ttl),
      wrapping_ttl: cdktf.stringToTerraform(this._wrappingTtl),
    };
  }
}
