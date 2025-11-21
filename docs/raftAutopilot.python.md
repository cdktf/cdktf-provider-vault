# `raftAutopilot` Submodule <a name="`raftAutopilot` Submodule" id="@cdktf/provider-vault.raftAutopilot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RaftAutopilot <a name="RaftAutopilot" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot vault_raft_autopilot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import raft_autopilot

raftAutopilot.RaftAutopilot(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cleanup_dead_servers: bool | IResolvable = None,
  dead_server_last_contact_threshold: str = None,
  disable_upgrade_migration: bool | IResolvable = None,
  id: str = None,
  last_contact_threshold: str = None,
  max_trailing_logs: typing.Union[int, float] = None,
  min_quorum: typing.Union[int, float] = None,
  namespace: str = None,
  server_stabilization_time: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.cleanupDeadServers">cleanup_dead_servers</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies whether to remove dead server nodes periodically or when a new server joins. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.deadServerLastContactThreshold">dead_server_last_contact_threshold</a></code> | <code>str</code> | Limit the amount of time a server can go without leader contact before being considered failed. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.disableUpgradeMigration">disable_upgrade_migration</a></code> | <code>bool \| cdktf.IResolvable</code> | Disables automatically upgrading Vault using autopilot. (Enterprise-only). |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#id RaftAutopilot#id}. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.lastContactThreshold">last_contact_threshold</a></code> | <code>str</code> | Limit the amount of time a server can go without leader contact before being considered unhealthy. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.maxTrailingLogs">max_trailing_logs</a></code> | <code>typing.Union[int, float]</code> | Maximum number of log entries in the Raft log that a server can be behind its leader before being considered unhealthy. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.minQuorum">min_quorum</a></code> | <code>typing.Union[int, float]</code> | Minimum number of servers allowed in a cluster before autopilot can prune dead servers. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.serverStabilizationTime">server_stabilization_time</a></code> | <code>str</code> | Minimum amount of time a server must be stable in the 'healthy' state before being added to the cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cleanup_dead_servers`<sup>Optional</sup> <a name="cleanup_dead_servers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.cleanupDeadServers"></a>

- *Type:* bool | cdktf.IResolvable

Specifies whether to remove dead server nodes periodically or when a new server joins.

This requires that min-quorum is also set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#cleanup_dead_servers RaftAutopilot#cleanup_dead_servers}

---

##### `dead_server_last_contact_threshold`<sup>Optional</sup> <a name="dead_server_last_contact_threshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.deadServerLastContactThreshold"></a>

- *Type:* str

Limit the amount of time a server can go without leader contact before being considered failed.

This only takes effect when cleanup_dead_servers is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#dead_server_last_contact_threshold RaftAutopilot#dead_server_last_contact_threshold}

---

##### `disable_upgrade_migration`<sup>Optional</sup> <a name="disable_upgrade_migration" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.disableUpgradeMigration"></a>

- *Type:* bool | cdktf.IResolvable

Disables automatically upgrading Vault using autopilot. (Enterprise-only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#disable_upgrade_migration RaftAutopilot#disable_upgrade_migration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#id RaftAutopilot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_contact_threshold`<sup>Optional</sup> <a name="last_contact_threshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.lastContactThreshold"></a>

- *Type:* str

Limit the amount of time a server can go without leader contact before being considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#last_contact_threshold RaftAutopilot#last_contact_threshold}

---

##### `max_trailing_logs`<sup>Optional</sup> <a name="max_trailing_logs" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.maxTrailingLogs"></a>

- *Type:* typing.Union[int, float]

Maximum number of log entries in the Raft log that a server can be behind its leader before being considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#max_trailing_logs RaftAutopilot#max_trailing_logs}

---

##### `min_quorum`<sup>Optional</sup> <a name="min_quorum" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.minQuorum"></a>

- *Type:* typing.Union[int, float]

Minimum number of servers allowed in a cluster before autopilot can prune dead servers.

This should at least be 3. Applicable only for voting nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#min_quorum RaftAutopilot#min_quorum}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#namespace RaftAutopilot#namespace}

---

##### `server_stabilization_time`<sup>Optional</sup> <a name="server_stabilization_time" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.serverStabilizationTime"></a>

- *Type:* str

Minimum amount of time a server must be stable in the 'healthy' state before being added to the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#server_stabilization_time RaftAutopilot#server_stabilization_time}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetCleanupDeadServers">reset_cleanup_dead_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDeadServerLastContactThreshold">reset_dead_server_last_contact_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDisableUpgradeMigration">reset_disable_upgrade_migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetLastContactThreshold">reset_last_contact_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMaxTrailingLogs">reset_max_trailing_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMinQuorum">reset_min_quorum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetServerStabilizationTime">reset_server_stabilization_time</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_cleanup_dead_servers` <a name="reset_cleanup_dead_servers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetCleanupDeadServers"></a>

```python
def reset_cleanup_dead_servers() -> None
```

##### `reset_dead_server_last_contact_threshold` <a name="reset_dead_server_last_contact_threshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDeadServerLastContactThreshold"></a>

```python
def reset_dead_server_last_contact_threshold() -> None
```

##### `reset_disable_upgrade_migration` <a name="reset_disable_upgrade_migration" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDisableUpgradeMigration"></a>

```python
def reset_disable_upgrade_migration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_last_contact_threshold` <a name="reset_last_contact_threshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetLastContactThreshold"></a>

```python
def reset_last_contact_threshold() -> None
```

##### `reset_max_trailing_logs` <a name="reset_max_trailing_logs" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMaxTrailingLogs"></a>

```python
def reset_max_trailing_logs() -> None
```

##### `reset_min_quorum` <a name="reset_min_quorum" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMinQuorum"></a>

```python
def reset_min_quorum() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_server_stabilization_time` <a name="reset_server_stabilization_time" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetServerStabilizationTime"></a>

```python
def reset_server_stabilization_time() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RaftAutopilot resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import raft_autopilot

raftAutopilot.RaftAutopilot.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import raft_autopilot

raftAutopilot.RaftAutopilot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import raft_autopilot

raftAutopilot.RaftAutopilot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import raft_autopilot

raftAutopilot.RaftAutopilot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RaftAutopilot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RaftAutopilot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RaftAutopilot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RaftAutopilot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServersInput">cleanup_dead_servers_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThresholdInput">dead_server_last_contact_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigrationInput">disable_upgrade_migration_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThresholdInput">last_contact_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogsInput">max_trailing_logs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorumInput">min_quorum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTimeInput">server_stabilization_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServers">cleanup_dead_servers</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThreshold">dead_server_last_contact_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigration">disable_upgrade_migration</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThreshold">last_contact_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogs">max_trailing_logs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorum">min_quorum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTime">server_stabilization_time</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cleanup_dead_servers_input`<sup>Optional</sup> <a name="cleanup_dead_servers_input" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServersInput"></a>

```python
cleanup_dead_servers_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `dead_server_last_contact_threshold_input`<sup>Optional</sup> <a name="dead_server_last_contact_threshold_input" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThresholdInput"></a>

```python
dead_server_last_contact_threshold_input: str
```

- *Type:* str

---

##### `disable_upgrade_migration_input`<sup>Optional</sup> <a name="disable_upgrade_migration_input" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigrationInput"></a>

```python
disable_upgrade_migration_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `last_contact_threshold_input`<sup>Optional</sup> <a name="last_contact_threshold_input" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThresholdInput"></a>

```python
last_contact_threshold_input: str
```

- *Type:* str

---

##### `max_trailing_logs_input`<sup>Optional</sup> <a name="max_trailing_logs_input" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogsInput"></a>

```python
max_trailing_logs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_quorum_input`<sup>Optional</sup> <a name="min_quorum_input" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorumInput"></a>

```python
min_quorum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `server_stabilization_time_input`<sup>Optional</sup> <a name="server_stabilization_time_input" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTimeInput"></a>

```python
server_stabilization_time_input: str
```

- *Type:* str

---

##### `cleanup_dead_servers`<sup>Required</sup> <a name="cleanup_dead_servers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServers"></a>

```python
cleanup_dead_servers: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `dead_server_last_contact_threshold`<sup>Required</sup> <a name="dead_server_last_contact_threshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThreshold"></a>

```python
dead_server_last_contact_threshold: str
```

- *Type:* str

---

##### `disable_upgrade_migration`<sup>Required</sup> <a name="disable_upgrade_migration" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigration"></a>

```python
disable_upgrade_migration: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_contact_threshold`<sup>Required</sup> <a name="last_contact_threshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThreshold"></a>

```python
last_contact_threshold: str
```

- *Type:* str

---

##### `max_trailing_logs`<sup>Required</sup> <a name="max_trailing_logs" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogs"></a>

```python
max_trailing_logs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_quorum`<sup>Required</sup> <a name="min_quorum" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorum"></a>

```python
min_quorum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `server_stabilization_time`<sup>Required</sup> <a name="server_stabilization_time" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTime"></a>

```python
server_stabilization_time: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RaftAutopilotConfig <a name="RaftAutopilotConfig" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import raft_autopilot

raftAutopilot.RaftAutopilotConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cleanup_dead_servers: bool | IResolvable = None,
  dead_server_last_contact_threshold: str = None,
  disable_upgrade_migration: bool | IResolvable = None,
  id: str = None,
  last_contact_threshold: str = None,
  max_trailing_logs: typing.Union[int, float] = None,
  min_quorum: typing.Union[int, float] = None,
  namespace: str = None,
  server_stabilization_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.cleanupDeadServers">cleanup_dead_servers</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies whether to remove dead server nodes periodically or when a new server joins. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.deadServerLastContactThreshold">dead_server_last_contact_threshold</a></code> | <code>str</code> | Limit the amount of time a server can go without leader contact before being considered failed. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.disableUpgradeMigration">disable_upgrade_migration</a></code> | <code>bool \| cdktf.IResolvable</code> | Disables automatically upgrading Vault using autopilot. (Enterprise-only). |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#id RaftAutopilot#id}. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lastContactThreshold">last_contact_threshold</a></code> | <code>str</code> | Limit the amount of time a server can go without leader contact before being considered unhealthy. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.maxTrailingLogs">max_trailing_logs</a></code> | <code>typing.Union[int, float]</code> | Maximum number of log entries in the Raft log that a server can be behind its leader before being considered unhealthy. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.minQuorum">min_quorum</a></code> | <code>typing.Union[int, float]</code> | Minimum number of servers allowed in a cluster before autopilot can prune dead servers. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.serverStabilizationTime">server_stabilization_time</a></code> | <code>str</code> | Minimum amount of time a server must be stable in the 'healthy' state before being added to the cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cleanup_dead_servers`<sup>Optional</sup> <a name="cleanup_dead_servers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.cleanupDeadServers"></a>

```python
cleanup_dead_servers: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Specifies whether to remove dead server nodes periodically or when a new server joins.

This requires that min-quorum is also set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#cleanup_dead_servers RaftAutopilot#cleanup_dead_servers}

---

##### `dead_server_last_contact_threshold`<sup>Optional</sup> <a name="dead_server_last_contact_threshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.deadServerLastContactThreshold"></a>

```python
dead_server_last_contact_threshold: str
```

- *Type:* str

Limit the amount of time a server can go without leader contact before being considered failed.

This only takes effect when cleanup_dead_servers is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#dead_server_last_contact_threshold RaftAutopilot#dead_server_last_contact_threshold}

---

##### `disable_upgrade_migration`<sup>Optional</sup> <a name="disable_upgrade_migration" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.disableUpgradeMigration"></a>

```python
disable_upgrade_migration: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Disables automatically upgrading Vault using autopilot. (Enterprise-only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#disable_upgrade_migration RaftAutopilot#disable_upgrade_migration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#id RaftAutopilot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_contact_threshold`<sup>Optional</sup> <a name="last_contact_threshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lastContactThreshold"></a>

```python
last_contact_threshold: str
```

- *Type:* str

Limit the amount of time a server can go without leader contact before being considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#last_contact_threshold RaftAutopilot#last_contact_threshold}

---

##### `max_trailing_logs`<sup>Optional</sup> <a name="max_trailing_logs" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.maxTrailingLogs"></a>

```python
max_trailing_logs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of log entries in the Raft log that a server can be behind its leader before being considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#max_trailing_logs RaftAutopilot#max_trailing_logs}

---

##### `min_quorum`<sup>Optional</sup> <a name="min_quorum" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.minQuorum"></a>

```python
min_quorum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of servers allowed in a cluster before autopilot can prune dead servers.

This should at least be 3. Applicable only for voting nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#min_quorum RaftAutopilot#min_quorum}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#namespace RaftAutopilot#namespace}

---

##### `server_stabilization_time`<sup>Optional</sup> <a name="server_stabilization_time" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.serverStabilizationTime"></a>

```python
server_stabilization_time: str
```

- *Type:* str

Minimum amount of time a server must be stable in the 'healthy' state before being added to the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/raft_autopilot#server_stabilization_time RaftAutopilot#server_stabilization_time}

---



