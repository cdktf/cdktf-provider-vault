# `raftAutopilot` Submodule <a name="`raftAutopilot` Submodule" id="@cdktf/provider-vault.raftAutopilot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RaftAutopilot <a name="RaftAutopilot" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot vault_raft_autopilot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.raft_autopilot.RaftAutopilot;

RaftAutopilot.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .cleanupDeadServers(java.lang.Boolean)
//  .cleanupDeadServers(IResolvable)
//  .deadServerLastContactThreshold(java.lang.String)
//  .disableUpgradeMigration(java.lang.Boolean)
//  .disableUpgradeMigration(IResolvable)
//  .id(java.lang.String)
//  .lastContactThreshold(java.lang.String)
//  .maxTrailingLogs(java.lang.Number)
//  .minQuorum(java.lang.Number)
//  .namespace(java.lang.String)
//  .serverStabilizationTime(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.cleanupDeadServers">cleanupDeadServers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to remove dead server nodes periodically or when a new server joins. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.deadServerLastContactThreshold">deadServerLastContactThreshold</a></code> | <code>java.lang.String</code> | Limit the amount of time a server can go without leader contact before being considered failed. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.disableUpgradeMigration">disableUpgradeMigration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables automatically upgrading Vault using autopilot. (Enterprise-only). |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#id RaftAutopilot#id}. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.lastContactThreshold">lastContactThreshold</a></code> | <code>java.lang.String</code> | Limit the amount of time a server can go without leader contact before being considered unhealthy. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.maxTrailingLogs">maxTrailingLogs</a></code> | <code>java.lang.Number</code> | Maximum number of log entries in the Raft log that a server can be behind its leader before being considered unhealthy. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.minQuorum">minQuorum</a></code> | <code>java.lang.Number</code> | Minimum number of servers allowed in a cluster before autopilot can prune dead servers. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.serverStabilizationTime">serverStabilizationTime</a></code> | <code>java.lang.String</code> | Minimum amount of time a server must be stable in the 'healthy' state before being added to the cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cleanupDeadServers`<sup>Optional</sup> <a name="cleanupDeadServers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.cleanupDeadServers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to remove dead server nodes periodically or when a new server joins.

This requires that min-quorum is also set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#cleanup_dead_servers RaftAutopilot#cleanup_dead_servers}

---

##### `deadServerLastContactThreshold`<sup>Optional</sup> <a name="deadServerLastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.deadServerLastContactThreshold"></a>

- *Type:* java.lang.String

Limit the amount of time a server can go without leader contact before being considered failed.

This only takes effect when cleanup_dead_servers is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#dead_server_last_contact_threshold RaftAutopilot#dead_server_last_contact_threshold}

---

##### `disableUpgradeMigration`<sup>Optional</sup> <a name="disableUpgradeMigration" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.disableUpgradeMigration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables automatically upgrading Vault using autopilot. (Enterprise-only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#disable_upgrade_migration RaftAutopilot#disable_upgrade_migration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#id RaftAutopilot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastContactThreshold`<sup>Optional</sup> <a name="lastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.lastContactThreshold"></a>

- *Type:* java.lang.String

Limit the amount of time a server can go without leader contact before being considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#last_contact_threshold RaftAutopilot#last_contact_threshold}

---

##### `maxTrailingLogs`<sup>Optional</sup> <a name="maxTrailingLogs" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.maxTrailingLogs"></a>

- *Type:* java.lang.Number

Maximum number of log entries in the Raft log that a server can be behind its leader before being considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#max_trailing_logs RaftAutopilot#max_trailing_logs}

---

##### `minQuorum`<sup>Optional</sup> <a name="minQuorum" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.minQuorum"></a>

- *Type:* java.lang.Number

Minimum number of servers allowed in a cluster before autopilot can prune dead servers.

This should at least be 3. Applicable only for voting nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#min_quorum RaftAutopilot#min_quorum}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#namespace RaftAutopilot#namespace}

---

##### `serverStabilizationTime`<sup>Optional</sup> <a name="serverStabilizationTime" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.serverStabilizationTime"></a>

- *Type:* java.lang.String

Minimum amount of time a server must be stable in the 'healthy' state before being added to the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#server_stabilization_time RaftAutopilot#server_stabilization_time}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetCleanupDeadServers">resetCleanupDeadServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDeadServerLastContactThreshold">resetDeadServerLastContactThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDisableUpgradeMigration">resetDisableUpgradeMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetLastContactThreshold">resetLastContactThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMaxTrailingLogs">resetMaxTrailingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMinQuorum">resetMinQuorum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetServerStabilizationTime">resetServerStabilizationTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCleanupDeadServers` <a name="resetCleanupDeadServers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetCleanupDeadServers"></a>

```java
public void resetCleanupDeadServers()
```

##### `resetDeadServerLastContactThreshold` <a name="resetDeadServerLastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDeadServerLastContactThreshold"></a>

```java
public void resetDeadServerLastContactThreshold()
```

##### `resetDisableUpgradeMigration` <a name="resetDisableUpgradeMigration" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDisableUpgradeMigration"></a>

```java
public void resetDisableUpgradeMigration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetId"></a>

```java
public void resetId()
```

##### `resetLastContactThreshold` <a name="resetLastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetLastContactThreshold"></a>

```java
public void resetLastContactThreshold()
```

##### `resetMaxTrailingLogs` <a name="resetMaxTrailingLogs" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMaxTrailingLogs"></a>

```java
public void resetMaxTrailingLogs()
```

##### `resetMinQuorum` <a name="resetMinQuorum" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMinQuorum"></a>

```java
public void resetMinQuorum()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetServerStabilizationTime` <a name="resetServerStabilizationTime" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetServerStabilizationTime"></a>

```java
public void resetServerStabilizationTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RaftAutopilot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.raft_autopilot.RaftAutopilot;

RaftAutopilot.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.raft_autopilot.RaftAutopilot;

RaftAutopilot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.raft_autopilot.RaftAutopilot;

RaftAutopilot.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.raft_autopilot.RaftAutopilot;

RaftAutopilot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RaftAutopilot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RaftAutopilot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RaftAutopilot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RaftAutopilot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RaftAutopilot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServersInput">cleanupDeadServersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThresholdInput">deadServerLastContactThresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigrationInput">disableUpgradeMigrationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThresholdInput">lastContactThresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogsInput">maxTrailingLogsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorumInput">minQuorumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTimeInput">serverStabilizationTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServers">cleanupDeadServers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThreshold">deadServerLastContactThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigration">disableUpgradeMigration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThreshold">lastContactThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogs">maxTrailingLogs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorum">minQuorum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTime">serverStabilizationTime</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cleanupDeadServersInput`<sup>Optional</sup> <a name="cleanupDeadServersInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServersInput"></a>

```java
public java.lang.Object getCleanupDeadServersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deadServerLastContactThresholdInput`<sup>Optional</sup> <a name="deadServerLastContactThresholdInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThresholdInput"></a>

```java
public java.lang.String getDeadServerLastContactThresholdInput();
```

- *Type:* java.lang.String

---

##### `disableUpgradeMigrationInput`<sup>Optional</sup> <a name="disableUpgradeMigrationInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigrationInput"></a>

```java
public java.lang.Object getDisableUpgradeMigrationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lastContactThresholdInput`<sup>Optional</sup> <a name="lastContactThresholdInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThresholdInput"></a>

```java
public java.lang.String getLastContactThresholdInput();
```

- *Type:* java.lang.String

---

##### `maxTrailingLogsInput`<sup>Optional</sup> <a name="maxTrailingLogsInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogsInput"></a>

```java
public java.lang.Number getMaxTrailingLogsInput();
```

- *Type:* java.lang.Number

---

##### `minQuorumInput`<sup>Optional</sup> <a name="minQuorumInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorumInput"></a>

```java
public java.lang.Number getMinQuorumInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `serverStabilizationTimeInput`<sup>Optional</sup> <a name="serverStabilizationTimeInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTimeInput"></a>

```java
public java.lang.String getServerStabilizationTimeInput();
```

- *Type:* java.lang.String

---

##### `cleanupDeadServers`<sup>Required</sup> <a name="cleanupDeadServers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServers"></a>

```java
public java.lang.Object getCleanupDeadServers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deadServerLastContactThreshold`<sup>Required</sup> <a name="deadServerLastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThreshold"></a>

```java
public java.lang.String getDeadServerLastContactThreshold();
```

- *Type:* java.lang.String

---

##### `disableUpgradeMigration`<sup>Required</sup> <a name="disableUpgradeMigration" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigration"></a>

```java
public java.lang.Object getDisableUpgradeMigration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastContactThreshold`<sup>Required</sup> <a name="lastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThreshold"></a>

```java
public java.lang.String getLastContactThreshold();
```

- *Type:* java.lang.String

---

##### `maxTrailingLogs`<sup>Required</sup> <a name="maxTrailingLogs" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogs"></a>

```java
public java.lang.Number getMaxTrailingLogs();
```

- *Type:* java.lang.Number

---

##### `minQuorum`<sup>Required</sup> <a name="minQuorum" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorum"></a>

```java
public java.lang.Number getMinQuorum();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `serverStabilizationTime`<sup>Required</sup> <a name="serverStabilizationTime" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTime"></a>

```java
public java.lang.String getServerStabilizationTime();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RaftAutopilotConfig <a name="RaftAutopilotConfig" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.raft_autopilot.RaftAutopilotConfig;

RaftAutopilotConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .cleanupDeadServers(java.lang.Boolean)
//  .cleanupDeadServers(IResolvable)
//  .deadServerLastContactThreshold(java.lang.String)
//  .disableUpgradeMigration(java.lang.Boolean)
//  .disableUpgradeMigration(IResolvable)
//  .id(java.lang.String)
//  .lastContactThreshold(java.lang.String)
//  .maxTrailingLogs(java.lang.Number)
//  .minQuorum(java.lang.Number)
//  .namespace(java.lang.String)
//  .serverStabilizationTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.cleanupDeadServers">cleanupDeadServers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to remove dead server nodes periodically or when a new server joins. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.deadServerLastContactThreshold">deadServerLastContactThreshold</a></code> | <code>java.lang.String</code> | Limit the amount of time a server can go without leader contact before being considered failed. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.disableUpgradeMigration">disableUpgradeMigration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables automatically upgrading Vault using autopilot. (Enterprise-only). |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#id RaftAutopilot#id}. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lastContactThreshold">lastContactThreshold</a></code> | <code>java.lang.String</code> | Limit the amount of time a server can go without leader contact before being considered unhealthy. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.maxTrailingLogs">maxTrailingLogs</a></code> | <code>java.lang.Number</code> | Maximum number of log entries in the Raft log that a server can be behind its leader before being considered unhealthy. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.minQuorum">minQuorum</a></code> | <code>java.lang.Number</code> | Minimum number of servers allowed in a cluster before autopilot can prune dead servers. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.serverStabilizationTime">serverStabilizationTime</a></code> | <code>java.lang.String</code> | Minimum amount of time a server must be stable in the 'healthy' state before being added to the cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cleanupDeadServers`<sup>Optional</sup> <a name="cleanupDeadServers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.cleanupDeadServers"></a>

```java
public java.lang.Object getCleanupDeadServers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to remove dead server nodes periodically or when a new server joins.

This requires that min-quorum is also set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#cleanup_dead_servers RaftAutopilot#cleanup_dead_servers}

---

##### `deadServerLastContactThreshold`<sup>Optional</sup> <a name="deadServerLastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.deadServerLastContactThreshold"></a>

```java
public java.lang.String getDeadServerLastContactThreshold();
```

- *Type:* java.lang.String

Limit the amount of time a server can go without leader contact before being considered failed.

This only takes effect when cleanup_dead_servers is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#dead_server_last_contact_threshold RaftAutopilot#dead_server_last_contact_threshold}

---

##### `disableUpgradeMigration`<sup>Optional</sup> <a name="disableUpgradeMigration" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.disableUpgradeMigration"></a>

```java
public java.lang.Object getDisableUpgradeMigration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables automatically upgrading Vault using autopilot. (Enterprise-only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#disable_upgrade_migration RaftAutopilot#disable_upgrade_migration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#id RaftAutopilot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastContactThreshold`<sup>Optional</sup> <a name="lastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lastContactThreshold"></a>

```java
public java.lang.String getLastContactThreshold();
```

- *Type:* java.lang.String

Limit the amount of time a server can go without leader contact before being considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#last_contact_threshold RaftAutopilot#last_contact_threshold}

---

##### `maxTrailingLogs`<sup>Optional</sup> <a name="maxTrailingLogs" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.maxTrailingLogs"></a>

```java
public java.lang.Number getMaxTrailingLogs();
```

- *Type:* java.lang.Number

Maximum number of log entries in the Raft log that a server can be behind its leader before being considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#max_trailing_logs RaftAutopilot#max_trailing_logs}

---

##### `minQuorum`<sup>Optional</sup> <a name="minQuorum" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.minQuorum"></a>

```java
public java.lang.Number getMinQuorum();
```

- *Type:* java.lang.Number

Minimum number of servers allowed in a cluster before autopilot can prune dead servers.

This should at least be 3. Applicable only for voting nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#min_quorum RaftAutopilot#min_quorum}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#namespace RaftAutopilot#namespace}

---

##### `serverStabilizationTime`<sup>Optional</sup> <a name="serverStabilizationTime" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.serverStabilizationTime"></a>

```java
public java.lang.String getServerStabilizationTime();
```

- *Type:* java.lang.String

Minimum amount of time a server must be stable in the 'healthy' state before being added to the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/raft_autopilot#server_stabilization_time RaftAutopilot#server_stabilization_time}

---



