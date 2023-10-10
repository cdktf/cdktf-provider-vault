// https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/quota_rate_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuotaRateLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set, when a client reaches a rate limit threshold, the client will be prohibited from any further requests until after the 'block_interval' in seconds has elapsed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/quota_rate_limit#block_interval QuotaRateLimit#block_interval}
  */
  readonly blockInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/quota_rate_limit#id QuotaRateLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The duration in seconds to enforce rate limiting for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/quota_rate_limit#interval QuotaRateLimit#interval}
  */
  readonly interval?: number;
  /**
  * The name of the quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/quota_rate_limit#name QuotaRateLimit#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/quota_rate_limit#namespace QuotaRateLimit#namespace}
  */
  readonly namespace?: string;
  /**
  * Path of the mount or namespace to apply the quota. A blank path configures a global rate limit quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/quota_rate_limit#path QuotaRateLimit#path}
  */
  readonly path?: string;
  /**
  * The maximum number of requests at any given second to be allowed by the quota rule. The rate must be positive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/quota_rate_limit#rate QuotaRateLimit#rate}
  */
  readonly rate: number;
  /**
  * If set on a quota where path is set to an auth mount with a concept of roles (such as /auth/approle/), this will make the quota restrict login requests to that mount that are made with the specified role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/quota_rate_limit#role QuotaRateLimit#role}
  */
  readonly role?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/quota_rate_limit vault_quota_rate_limit}
*/
export class QuotaRateLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_quota_rate_limit";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/quota_rate_limit vault_quota_rate_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuotaRateLimitConfig
  */
  public constructor(scope: Construct, id: string, config: QuotaRateLimitConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_quota_rate_limit',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.21.0',
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
    this._blockInterval = config.blockInterval;
    this._id = config.id;
    this._interval = config.interval;
    this._name = config.name;
    this._namespace = config.namespace;
    this._path = config.path;
    this._rate = config.rate;
    this._role = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_interval - computed: false, optional: true, required: false
  private _blockInterval?: number; 
  public get blockInterval() {
    return this.getNumberAttribute('block_interval');
  }
  public set blockInterval(value: number) {
    this._blockInterval = value;
  }
  public resetBlockInterval() {
    this._blockInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIntervalInput() {
    return this._blockInterval;
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

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // rate - computed: false, optional: false, required: true
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_interval: cdktf.numberToTerraform(this._blockInterval),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      rate: cdktf.numberToTerraform(this._rate),
      role: cdktf.stringToTerraform(this._role),
    };
  }
}
