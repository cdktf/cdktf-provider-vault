/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/quota_rate_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuotaRateLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set, when a client reaches a rate limit threshold, the client will be prohibited from any further requests until after the 'block_interval' in seconds has elapsed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/quota_rate_limit#block_interval QuotaRateLimit#block_interval}
  */
  readonly blockInterval?: number;
  /**
  * Attribute used to group requests for rate limiting. Limits are enforced independently for each group. Valid group_by modes are: 1) "ip" that groups requests by their source IP address (group_by defaults to ip if unset); 2) "none" that groups all requests that match the rate limit quota rule together; 3) "entity_then_ip" that groups requests by their entity ID for authenticated requests that carry one, or by their IP for unauthenticated requests (or requests whose authentication is not connected to an entity); and 4) "entity_then_none" which also groups requests by their entity ID when available, but the rest is all grouped together (i.e. unauthenticated or with authentication not connected to an entity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/quota_rate_limit#group_by QuotaRateLimit#group_by}
  */
  readonly groupBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/quota_rate_limit#id QuotaRateLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If set to true on a quota where path is set to a namespace, the same quota will be cumulatively applied to all child namespace. The inheritable parameter cannot be set to true if the path does not specify a namespace. Only the quotas associated with the root namespace are inheritable by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/quota_rate_limit#inheritable QuotaRateLimit#inheritable}
  */
  readonly inheritable?: boolean | cdktf.IResolvable;
  /**
  * The duration in seconds to enforce rate limiting for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/quota_rate_limit#interval QuotaRateLimit#interval}
  */
  readonly interval?: number;
  /**
  * The name of the quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/quota_rate_limit#name QuotaRateLimit#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/quota_rate_limit#namespace QuotaRateLimit#namespace}
  */
  readonly namespace?: string;
  /**
  * Path of the mount or namespace to apply the quota. A blank path configures a global rate limit quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/quota_rate_limit#path QuotaRateLimit#path}
  */
  readonly path?: string;
  /**
  * The maximum number of requests at any given second to be allowed by the quota rule. The rate must be positive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/quota_rate_limit#rate QuotaRateLimit#rate}
  */
  readonly rate: number;
  /**
  * If set on a quota where path is set to an auth mount with a concept of roles (such as /auth/approle/), this will make the quota restrict login requests to that mount that are made with the specified role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/quota_rate_limit#role QuotaRateLimit#role}
  */
  readonly role?: string;
  /**
  * Only available when using the "entity_then_ip" or "entity_then_none" group_by modes. This is the rate limit applied to the requests that fall under the "ip" or "none" groupings, while the authenticated requests that contain an entity ID are subject to the "rate" field instead. Defaults to the same value as "rate".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/quota_rate_limit#secondary_rate QuotaRateLimit#secondary_rate}
  */
  readonly secondaryRate?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/quota_rate_limit vault_quota_rate_limit}
*/
export class QuotaRateLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_quota_rate_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuotaRateLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuotaRateLimit to import
  * @param importFromId The id of the existing QuotaRateLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/quota_rate_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuotaRateLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_quota_rate_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/quota_rate_limit vault_quota_rate_limit} Resource
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
        providerVersion: '5.4.0',
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
    this._blockInterval = config.blockInterval;
    this._groupBy = config.groupBy;
    this._id = config.id;
    this._inheritable = config.inheritable;
    this._interval = config.interval;
    this._name = config.name;
    this._namespace = config.namespace;
    this._path = config.path;
    this._rate = config.rate;
    this._role = config.role;
    this._secondaryRate = config.secondaryRate;
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

  // group_by - computed: true, optional: true, required: false
  private _groupBy?: string; 
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }
  public set groupBy(value: string) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // inheritable - computed: false, optional: true, required: false
  private _inheritable?: boolean | cdktf.IResolvable; 
  public get inheritable() {
    return this.getBooleanAttribute('inheritable');
  }
  public set inheritable(value: boolean | cdktf.IResolvable) {
    this._inheritable = value;
  }
  public resetInheritable() {
    this._inheritable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritableInput() {
    return this._inheritable;
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

  // secondary_rate - computed: true, optional: true, required: false
  private _secondaryRate?: number; 
  public get secondaryRate() {
    return this.getNumberAttribute('secondary_rate');
  }
  public set secondaryRate(value: number) {
    this._secondaryRate = value;
  }
  public resetSecondaryRate() {
    this._secondaryRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryRateInput() {
    return this._secondaryRate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_interval: cdktf.numberToTerraform(this._blockInterval),
      group_by: cdktf.stringToTerraform(this._groupBy),
      id: cdktf.stringToTerraform(this._id),
      inheritable: cdktf.booleanToTerraform(this._inheritable),
      interval: cdktf.numberToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      rate: cdktf.numberToTerraform(this._rate),
      role: cdktf.stringToTerraform(this._role),
      secondary_rate: cdktf.numberToTerraform(this._secondaryRate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_interval: {
        value: cdktf.numberToHclTerraform(this._blockInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_by: {
        value: cdktf.stringToHclTerraform(this._groupBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inheritable: {
        value: cdktf.booleanToHclTerraform(this._inheritable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate: {
        value: cdktf.numberToHclTerraform(this._rate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_rate: {
        value: cdktf.numberToHclTerraform(this._secondaryRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
