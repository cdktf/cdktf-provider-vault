# `data_vault_raft_autopilot_state`

Refer to the Terraform Registory for docs: [`data_vault_raft_autopilot_state`](https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/raft_autopilot_state).

# `dataVaultRaftAutopilotState` Submodule <a name="`dataVaultRaftAutopilotState` Submodule" id="@cdktf/provider-vault.dataVaultRaftAutopilotState"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultRaftAutopilotState <a name="DataVaultRaftAutopilotState" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/raft_autopilot_state vault_raft_autopilot_state}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_raft_autopilot_state.DataVaultRaftAutopilotState;

DataVaultRaftAutopilotState.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/raft_autopilot_state#id DataVaultRaftAutopilotState#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/raft_autopilot_state#id DataVaultRaftAutopilotState#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/raft_autopilot_state#namespace DataVaultRaftAutopilotState#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_raft_autopilot_state.DataVaultRaftAutopilotState;

DataVaultRaftAutopilotState.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_raft_autopilot_state.DataVaultRaftAutopilotState;

DataVaultRaftAutopilotState.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_raft_autopilot_state.DataVaultRaftAutopilotState;

DataVaultRaftAutopilotState.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.failureTolerance">failureTolerance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.healthy">healthy</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.leader">leader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.optimisticFailureTolerance">optimisticFailureTolerance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZones">redundancyZones</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZonesJson">redundancyZonesJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.servers">servers</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.serversJson">serversJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfo">upgradeInfo</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfoJson">upgradeInfoJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.voters">voters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `failureTolerance`<sup>Required</sup> <a name="failureTolerance" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.failureTolerance"></a>

```java
public java.lang.Number getFailureTolerance();
```

- *Type:* java.lang.Number

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.healthy"></a>

```java
public IResolvable getHealthy();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `leader`<sup>Required</sup> <a name="leader" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.leader"></a>

```java
public java.lang.String getLeader();
```

- *Type:* java.lang.String

---

##### `optimisticFailureTolerance`<sup>Required</sup> <a name="optimisticFailureTolerance" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.optimisticFailureTolerance"></a>

```java
public java.lang.Number getOptimisticFailureTolerance();
```

- *Type:* java.lang.Number

---

##### `redundancyZones`<sup>Required</sup> <a name="redundancyZones" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZones"></a>

```java
public StringMap getRedundancyZones();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `redundancyZonesJson`<sup>Required</sup> <a name="redundancyZonesJson" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZonesJson"></a>

```java
public java.lang.String getRedundancyZonesJson();
```

- *Type:* java.lang.String

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.servers"></a>

```java
public StringMap getServers();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `serversJson`<sup>Required</sup> <a name="serversJson" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.serversJson"></a>

```java
public java.lang.String getServersJson();
```

- *Type:* java.lang.String

---

##### `upgradeInfo`<sup>Required</sup> <a name="upgradeInfo" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfo"></a>

```java
public StringMap getUpgradeInfo();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `upgradeInfoJson`<sup>Required</sup> <a name="upgradeInfoJson" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfoJson"></a>

```java
public java.lang.String getUpgradeInfoJson();
```

- *Type:* java.lang.String

---

##### `voters`<sup>Required</sup> <a name="voters" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.voters"></a>

```java
public java.util.List<java.lang.String> getVoters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultRaftAutopilotStateConfig <a name="DataVaultRaftAutopilotStateConfig" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_raft_autopilot_state.DataVaultRaftAutopilotStateConfig;

DataVaultRaftAutopilotStateConfig.builder()
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
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/raft_autopilot_state#id DataVaultRaftAutopilotState#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/raft_autopilot_state#id DataVaultRaftAutopilotState#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/raft_autopilot_state#namespace DataVaultRaftAutopilotState#namespace}

---



