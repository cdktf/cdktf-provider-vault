# `vault_database_secret_backend_static_role`

Refer to the Terraform Registory for docs: [`vault_database_secret_backend_static_role`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role).

# `databaseSecretBackendStaticRole` Submodule <a name="`databaseSecretBackendStaticRole` Submodule" id="@cdktf/provider-vault.databaseSecretBackendStaticRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSecretBackendStaticRole <a name="DatabaseSecretBackendStaticRole" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role vault_database_secret_backend_static_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_static_role.DatabaseSecretBackendStaticRole;

DatabaseSecretBackendStaticRole.Builder.create(Construct scope, java.lang.String id)
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
    .backend(java.lang.String)
    .dbName(java.lang.String)
    .name(java.lang.String)
    .username(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .rotationPeriod(java.lang.Number)
//  .rotationSchedule(java.lang.String)
//  .rotationStatements(java.util.List<java.lang.String>)
//  .rotationWindow(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The path of the Database Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.dbName">dbName</a></code> | <code>java.lang.String</code> | Database connection to use for this role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name for the static role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The database username that this role corresponds to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#id DatabaseSecretBackendStaticRole#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | The amount of time Vault should wait before rotating the password, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | A cron-style string that will define the schedule on which rotations should occur. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.rotationStatements">rotationStatements</a></code> | <code>java.util.List<java.lang.String></code> | Database statements to execute to rotate the password for the configured database user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | The amount of time in seconds in which the rotations are allowed to occur starting from a given rotation_schedule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The path of the Database Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#backend DatabaseSecretBackendStaticRole#backend}

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.dbName"></a>

- *Type:* java.lang.String

Database connection to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#db_name DatabaseSecretBackendStaticRole#db_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name for the static role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#name DatabaseSecretBackendStaticRole#name}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The database username that this role corresponds to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#username DatabaseSecretBackendStaticRole#username}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#id DatabaseSecretBackendStaticRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#namespace DatabaseSecretBackendStaticRole#namespace}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.rotationPeriod"></a>

- *Type:* java.lang.Number

The amount of time Vault should wait before rotating the password, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#rotation_period DatabaseSecretBackendStaticRole#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.rotationSchedule"></a>

- *Type:* java.lang.String

A cron-style string that will define the schedule on which rotations should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#rotation_schedule DatabaseSecretBackendStaticRole#rotation_schedule}

---

##### `rotationStatements`<sup>Optional</sup> <a name="rotationStatements" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.rotationStatements"></a>

- *Type:* java.util.List<java.lang.String>

Database statements to execute to rotate the password for the configured database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#rotation_statements DatabaseSecretBackendStaticRole#rotation_statements}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.rotationWindow"></a>

- *Type:* java.lang.Number

The amount of time in seconds in which the rotations are allowed to occur starting from a given rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#rotation_window DatabaseSecretBackendStaticRole#rotation_window}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationSchedule">resetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationStatements">resetRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationWindow">resetRotationWindow</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationPeriod"></a>

```java
public void resetRotationPeriod()
```

##### `resetRotationSchedule` <a name="resetRotationSchedule" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationSchedule"></a>

```java
public void resetRotationSchedule()
```

##### `resetRotationStatements` <a name="resetRotationStatements" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationStatements"></a>

```java
public void resetRotationStatements()
```

##### `resetRotationWindow` <a name="resetRotationWindow" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationWindow"></a>

```java
public void resetRotationWindow()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseSecretBackendStaticRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_static_role.DatabaseSecretBackendStaticRole;

DatabaseSecretBackendStaticRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_static_role.DatabaseSecretBackendStaticRole;

DatabaseSecretBackendStaticRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_static_role.DatabaseSecretBackendStaticRole;

DatabaseSecretBackendStaticRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_static_role.DatabaseSecretBackendStaticRole;

DatabaseSecretBackendStaticRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseSecretBackendStaticRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseSecretBackendStaticRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseSecretBackendStaticRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseSecretBackendStaticRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseSecretBackendStaticRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationScheduleInput">rotationScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationStatementsInput">rotationStatementsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationWindowInput">rotationWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationStatements">rotationStatements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationPeriodInput"></a>

```java
public java.lang.Number getRotationPeriodInput();
```

- *Type:* java.lang.Number

---

##### `rotationScheduleInput`<sup>Optional</sup> <a name="rotationScheduleInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationScheduleInput"></a>

```java
public java.lang.String getRotationScheduleInput();
```

- *Type:* java.lang.String

---

##### `rotationStatementsInput`<sup>Optional</sup> <a name="rotationStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationStatementsInput"></a>

```java
public java.util.List<java.lang.String> getRotationStatementsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rotationWindowInput`<sup>Optional</sup> <a name="rotationWindowInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationWindowInput"></a>

```java
public java.lang.Number getRotationWindowInput();
```

- *Type:* java.lang.Number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationPeriod"></a>

```java
public java.lang.Number getRotationPeriod();
```

- *Type:* java.lang.Number

---

##### `rotationSchedule`<sup>Required</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationSchedule"></a>

```java
public java.lang.String getRotationSchedule();
```

- *Type:* java.lang.String

---

##### `rotationStatements`<sup>Required</sup> <a name="rotationStatements" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationStatements"></a>

```java
public java.util.List<java.lang.String> getRotationStatements();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rotationWindow`<sup>Required</sup> <a name="rotationWindow" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationWindow"></a>

```java
public java.lang.Number getRotationWindow();
```

- *Type:* java.lang.Number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSecretBackendStaticRoleConfig <a name="DatabaseSecretBackendStaticRoleConfig" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_static_role.DatabaseSecretBackendStaticRoleConfig;

DatabaseSecretBackendStaticRoleConfig.builder()
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
    .backend(java.lang.String)
    .dbName(java.lang.String)
    .name(java.lang.String)
    .username(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .rotationPeriod(java.lang.Number)
//  .rotationSchedule(java.lang.String)
//  .rotationStatements(java.util.List<java.lang.String>)
//  .rotationWindow(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The path of the Database Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.dbName">dbName</a></code> | <code>java.lang.String</code> | Database connection to use for this role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name for the static role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.username">username</a></code> | <code>java.lang.String</code> | The database username that this role corresponds to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#id DatabaseSecretBackendStaticRole#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | The amount of time Vault should wait before rotating the password, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | A cron-style string that will define the schedule on which rotations should occur. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationStatements">rotationStatements</a></code> | <code>java.util.List<java.lang.String></code> | Database statements to execute to rotate the password for the configured database user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | The amount of time in seconds in which the rotations are allowed to occur starting from a given rotation_schedule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The path of the Database Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#backend DatabaseSecretBackendStaticRole#backend}

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

Database connection to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#db_name DatabaseSecretBackendStaticRole#db_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name for the static role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#name DatabaseSecretBackendStaticRole#name}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The database username that this role corresponds to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#username DatabaseSecretBackendStaticRole#username}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#id DatabaseSecretBackendStaticRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#namespace DatabaseSecretBackendStaticRole#namespace}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationPeriod"></a>

```java
public java.lang.Number getRotationPeriod();
```

- *Type:* java.lang.Number

The amount of time Vault should wait before rotating the password, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#rotation_period DatabaseSecretBackendStaticRole#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationSchedule"></a>

```java
public java.lang.String getRotationSchedule();
```

- *Type:* java.lang.String

A cron-style string that will define the schedule on which rotations should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#rotation_schedule DatabaseSecretBackendStaticRole#rotation_schedule}

---

##### `rotationStatements`<sup>Optional</sup> <a name="rotationStatements" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationStatements"></a>

```java
public java.util.List<java.lang.String> getRotationStatements();
```

- *Type:* java.util.List<java.lang.String>

Database statements to execute to rotate the password for the configured database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#rotation_statements DatabaseSecretBackendStaticRole#rotation_statements}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationWindow"></a>

```java
public java.lang.Number getRotationWindow();
```

- *Type:* java.lang.Number

The amount of time in seconds in which the rotations are allowed to occur starting from a given rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_static_role#rotation_window DatabaseSecretBackendStaticRole#rotation_window}

---



