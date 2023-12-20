/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/raft_autopilot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RaftAutopilotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to remove dead server nodes periodically or when a new server joins. This requires that min-quorum is also set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/raft_autopilot#cleanup_dead_servers RaftAutopilot#cleanup_dead_servers}
  */
  readonly cleanupDeadServers?: boolean | cdktf.IResolvable;
  /**
  * Limit the amount of time a server can go without leader contact before being considered failed. This only takes effect when cleanup_dead_servers is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/raft_autopilot#dead_server_last_contact_threshold RaftAutopilot#dead_server_last_contact_threshold}
  */
  readonly deadServerLastContactThreshold?: string;
  /**
  * Disables automatically upgrading Vault using autopilot. (Enterprise-only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/raft_autopilot#disable_upgrade_migration RaftAutopilot#disable_upgrade_migration}
  */
  readonly disableUpgradeMigration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/raft_autopilot#id RaftAutopilot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Limit the amount of time a server can go without leader contact before being considered unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/raft_autopilot#last_contact_threshold RaftAutopilot#last_contact_threshold}
  */
  readonly lastContactThreshold?: string;
  /**
  * Maximum number of log entries in the Raft log that a server can be behind its leader before being considered unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/raft_autopilot#max_trailing_logs RaftAutopilot#max_trailing_logs}
  */
  readonly maxTrailingLogs?: number;
  /**
  * Minimum number of servers allowed in a cluster before autopilot can prune dead servers. This should at least be 3. Applicable only for voting nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/raft_autopilot#min_quorum RaftAutopilot#min_quorum}
  */
  readonly minQuorum?: number;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/raft_autopilot#namespace RaftAutopilot#namespace}
  */
  readonly namespace?: string;
  /**
  * Minimum amount of time a server must be stable in the 'healthy' state before being added to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/raft_autopilot#server_stabilization_time RaftAutopilot#server_stabilization_time}
  */
  readonly serverStabilizationTime?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/raft_autopilot vault_raft_autopilot}
*/
export class RaftAutopilot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_raft_autopilot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RaftAutopilot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RaftAutopilot to import
  * @param importFromId The id of the existing RaftAutopilot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/raft_autopilot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RaftAutopilot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_raft_autopilot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/raft_autopilot vault_raft_autopilot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RaftAutopilotConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RaftAutopilotConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_raft_autopilot',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.23.0',
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
    this._cleanupDeadServers = config.cleanupDeadServers;
    this._deadServerLastContactThreshold = config.deadServerLastContactThreshold;
    this._disableUpgradeMigration = config.disableUpgradeMigration;
    this._id = config.id;
    this._lastContactThreshold = config.lastContactThreshold;
    this._maxTrailingLogs = config.maxTrailingLogs;
    this._minQuorum = config.minQuorum;
    this._namespace = config.namespace;
    this._serverStabilizationTime = config.serverStabilizationTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cleanup_dead_servers - computed: false, optional: true, required: false
  private _cleanupDeadServers?: boolean | cdktf.IResolvable; 
  public get cleanupDeadServers() {
    return this.getBooleanAttribute('cleanup_dead_servers');
  }
  public set cleanupDeadServers(value: boolean | cdktf.IResolvable) {
    this._cleanupDeadServers = value;
  }
  public resetCleanupDeadServers() {
    this._cleanupDeadServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupDeadServersInput() {
    return this._cleanupDeadServers;
  }

  // dead_server_last_contact_threshold - computed: false, optional: true, required: false
  private _deadServerLastContactThreshold?: string; 
  public get deadServerLastContactThreshold() {
    return this.getStringAttribute('dead_server_last_contact_threshold');
  }
  public set deadServerLastContactThreshold(value: string) {
    this._deadServerLastContactThreshold = value;
  }
  public resetDeadServerLastContactThreshold() {
    this._deadServerLastContactThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadServerLastContactThresholdInput() {
    return this._deadServerLastContactThreshold;
  }

  // disable_upgrade_migration - computed: false, optional: true, required: false
  private _disableUpgradeMigration?: boolean | cdktf.IResolvable; 
  public get disableUpgradeMigration() {
    return this.getBooleanAttribute('disable_upgrade_migration');
  }
  public set disableUpgradeMigration(value: boolean | cdktf.IResolvable) {
    this._disableUpgradeMigration = value;
  }
  public resetDisableUpgradeMigration() {
    this._disableUpgradeMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUpgradeMigrationInput() {
    return this._disableUpgradeMigration;
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

  // last_contact_threshold - computed: false, optional: true, required: false
  private _lastContactThreshold?: string; 
  public get lastContactThreshold() {
    return this.getStringAttribute('last_contact_threshold');
  }
  public set lastContactThreshold(value: string) {
    this._lastContactThreshold = value;
  }
  public resetLastContactThreshold() {
    this._lastContactThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastContactThresholdInput() {
    return this._lastContactThreshold;
  }

  // max_trailing_logs - computed: false, optional: true, required: false
  private _maxTrailingLogs?: number; 
  public get maxTrailingLogs() {
    return this.getNumberAttribute('max_trailing_logs');
  }
  public set maxTrailingLogs(value: number) {
    this._maxTrailingLogs = value;
  }
  public resetMaxTrailingLogs() {
    this._maxTrailingLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTrailingLogsInput() {
    return this._maxTrailingLogs;
  }

  // min_quorum - computed: false, optional: true, required: false
  private _minQuorum?: number; 
  public get minQuorum() {
    return this.getNumberAttribute('min_quorum');
  }
  public set minQuorum(value: number) {
    this._minQuorum = value;
  }
  public resetMinQuorum() {
    this._minQuorum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minQuorumInput() {
    return this._minQuorum;
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

  // server_stabilization_time - computed: false, optional: true, required: false
  private _serverStabilizationTime?: string; 
  public get serverStabilizationTime() {
    return this.getStringAttribute('server_stabilization_time');
  }
  public set serverStabilizationTime(value: string) {
    this._serverStabilizationTime = value;
  }
  public resetServerStabilizationTime() {
    this._serverStabilizationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverStabilizationTimeInput() {
    return this._serverStabilizationTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cleanup_dead_servers: cdktf.booleanToTerraform(this._cleanupDeadServers),
      dead_server_last_contact_threshold: cdktf.stringToTerraform(this._deadServerLastContactThreshold),
      disable_upgrade_migration: cdktf.booleanToTerraform(this._disableUpgradeMigration),
      id: cdktf.stringToTerraform(this._id),
      last_contact_threshold: cdktf.stringToTerraform(this._lastContactThreshold),
      max_trailing_logs: cdktf.numberToTerraform(this._maxTrailingLogs),
      min_quorum: cdktf.numberToTerraform(this._minQuorum),
      namespace: cdktf.stringToTerraform(this._namespace),
      server_stabilization_time: cdktf.stringToTerraform(this._serverStabilizationTime),
    };
  }
}
