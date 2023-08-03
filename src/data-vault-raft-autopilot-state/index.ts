/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/raft_autopilot_state
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultRaftAutopilotStateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/raft_autopilot_state#id DataVaultRaftAutopilotState#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/raft_autopilot_state#namespace DataVaultRaftAutopilotState#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/raft_autopilot_state vault_raft_autopilot_state}
*/
export class DataVaultRaftAutopilotState extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_raft_autopilot_state";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/raft_autopilot_state vault_raft_autopilot_state} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultRaftAutopilotStateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVaultRaftAutopilotStateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_raft_autopilot_state',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.19.0',
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
    this._id = config.id;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // failure_tolerance - computed: true, optional: false, required: false
  public get failureTolerance() {
    return this.getNumberAttribute('failure_tolerance');
  }

  // healthy - computed: true, optional: false, required: false
  public get healthy() {
    return this.getBooleanAttribute('healthy');
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

  // leader - computed: true, optional: false, required: false
  public get leader() {
    return this.getStringAttribute('leader');
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

  // optimistic_failure_tolerance - computed: true, optional: false, required: false
  public get optimisticFailureTolerance() {
    return this.getNumberAttribute('optimistic_failure_tolerance');
  }

  // redundancy_zones - computed: true, optional: false, required: false
  private _redundancyZones = new cdktf.StringMap(this, "redundancy_zones");
  public get redundancyZones() {
    return this._redundancyZones;
  }

  // redundancy_zones_json - computed: true, optional: false, required: false
  public get redundancyZonesJson() {
    return this.getStringAttribute('redundancy_zones_json');
  }

  // servers - computed: true, optional: false, required: false
  private _servers = new cdktf.StringMap(this, "servers");
  public get servers() {
    return this._servers;
  }

  // servers_json - computed: true, optional: false, required: false
  public get serversJson() {
    return this.getStringAttribute('servers_json');
  }

  // upgrade_info - computed: true, optional: false, required: false
  private _upgradeInfo = new cdktf.StringMap(this, "upgrade_info");
  public get upgradeInfo() {
    return this._upgradeInfo;
  }

  // upgrade_info_json - computed: true, optional: false, required: false
  public get upgradeInfoJson() {
    return this.getStringAttribute('upgrade_info_json');
  }

  // voters - computed: true, optional: false, required: false
  public get voters() {
    return this.getListAttribute('voters');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
