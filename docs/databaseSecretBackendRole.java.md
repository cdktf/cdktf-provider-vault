# `databaseSecretBackendRole` Submodule <a name="`databaseSecretBackendRole` Submodule" id="@cdktf/provider-vault.databaseSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSecretBackendRole <a name="DatabaseSecretBackendRole" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role vault_database_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_role.DatabaseSecretBackendRole;

DatabaseSecretBackendRole.Builder.create(Construct scope, java.lang.String id)
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
    .creationStatements(java.util.List<java.lang.String>)
    .dbName(java.lang.String)
    .name(java.lang.String)
//  .credentialConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .credentialType(java.lang.String)
//  .defaultTtl(java.lang.Number)
//  .id(java.lang.String)
//  .maxTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .renewStatements(java.util.List<java.lang.String>)
//  .revocationStatements(java.util.List<java.lang.String>)
//  .rollbackStatements(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The path of the Database Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.creationStatements">creationStatements</a></code> | <code>java.util.List<java.lang.String></code> | Database statements to execute to create and configure a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.dbName">dbName</a></code> | <code>java.lang.String</code> | Database connection to use for this role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.credentialConfig">credentialConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies the configuration for the given credential_type. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.credentialType">credentialType</a></code> | <code>java.lang.String</code> | Specifies the type of credential that will be generated for the role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | Default TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#id DatabaseSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | Maximum TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.renewStatements">renewStatements</a></code> | <code>java.util.List<java.lang.String></code> | Database statements to execute to renew a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.revocationStatements">revocationStatements</a></code> | <code>java.util.List<java.lang.String></code> | Database statements to execute to revoke a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.rollbackStatements">rollbackStatements</a></code> | <code>java.util.List<java.lang.String></code> | Database statements to execute to rollback a create operation in the event of an error. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The path of the Database Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#backend DatabaseSecretBackendRole#backend}

---

##### `creationStatements`<sup>Required</sup> <a name="creationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.creationStatements"></a>

- *Type:* java.util.List<java.lang.String>

Database statements to execute to create and configure a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#creation_statements DatabaseSecretBackendRole#creation_statements}

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.dbName"></a>

- *Type:* java.lang.String

Database connection to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#db_name DatabaseSecretBackendRole#db_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#name DatabaseSecretBackendRole#name}

---

##### `credentialConfig`<sup>Optional</sup> <a name="credentialConfig" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.credentialConfig"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies the configuration for the given credential_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#credential_config DatabaseSecretBackendRole#credential_config}

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.credentialType"></a>

- *Type:* java.lang.String

Specifies the type of credential that will be generated for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#credential_type DatabaseSecretBackendRole#credential_type}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.defaultTtl"></a>

- *Type:* java.lang.Number

Default TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#default_ttl DatabaseSecretBackendRole#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#id DatabaseSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.Number

Maximum TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#max_ttl DatabaseSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#namespace DatabaseSecretBackendRole#namespace}

---

##### `renewStatements`<sup>Optional</sup> <a name="renewStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.renewStatements"></a>

- *Type:* java.util.List<java.lang.String>

Database statements to execute to renew a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#renew_statements DatabaseSecretBackendRole#renew_statements}

---

##### `revocationStatements`<sup>Optional</sup> <a name="revocationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.revocationStatements"></a>

- *Type:* java.util.List<java.lang.String>

Database statements to execute to revoke a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#revocation_statements DatabaseSecretBackendRole#revocation_statements}

---

##### `rollbackStatements`<sup>Optional</sup> <a name="rollbackStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.rollbackStatements"></a>

- *Type:* java.util.List<java.lang.String>

Database statements to execute to rollback a create operation in the event of an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#rollback_statements DatabaseSecretBackendRole#rollback_statements}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialConfig">resetCredentialConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialType">resetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRenewStatements">resetRenewStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRevocationStatements">resetRevocationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRollbackStatements">resetRollbackStatements</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCredentialConfig` <a name="resetCredentialConfig" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialConfig"></a>

```java
public void resetCredentialConfig()
```

##### `resetCredentialType` <a name="resetCredentialType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialType"></a>

```java
public void resetCredentialType()
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetDefaultTtl"></a>

```java
public void resetDefaultTtl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRenewStatements` <a name="resetRenewStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRenewStatements"></a>

```java
public void resetRenewStatements()
```

##### `resetRevocationStatements` <a name="resetRevocationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRevocationStatements"></a>

```java
public void resetRevocationStatements()
```

##### `resetRollbackStatements` <a name="resetRollbackStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRollbackStatements"></a>

```java
public void resetRollbackStatements()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_role.DatabaseSecretBackendRole;

DatabaseSecretBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_role.DatabaseSecretBackendRole;

DatabaseSecretBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_role.DatabaseSecretBackendRole;

DatabaseSecretBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_role.DatabaseSecretBackendRole;

DatabaseSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatementsInput">creationStatementsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfigInput">credentialConfigInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtlInput">defaultTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatementsInput">renewStatementsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatementsInput">revocationStatementsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatementsInput">rollbackStatementsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatements">creationStatements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfig">credentialConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatements">renewStatements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatements">revocationStatements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatements">rollbackStatements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `creationStatementsInput`<sup>Optional</sup> <a name="creationStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatementsInput"></a>

```java
public java.util.List<java.lang.String> getCreationStatementsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `credentialConfigInput`<sup>Optional</sup> <a name="credentialConfigInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfigInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCredentialConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtlInput"></a>

```java
public java.lang.Number getDefaultTtlInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtlInput"></a>

```java
public java.lang.Number getMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `renewStatementsInput`<sup>Optional</sup> <a name="renewStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatementsInput"></a>

```java
public java.util.List<java.lang.String> getRenewStatementsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `revocationStatementsInput`<sup>Optional</sup> <a name="revocationStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatementsInput"></a>

```java
public java.util.List<java.lang.String> getRevocationStatementsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rollbackStatementsInput`<sup>Optional</sup> <a name="rollbackStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatementsInput"></a>

```java
public java.util.List<java.lang.String> getRollbackStatementsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `creationStatements`<sup>Required</sup> <a name="creationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatements"></a>

```java
public java.util.List<java.lang.String> getCreationStatements();
```

- *Type:* java.util.List<java.lang.String>

---

##### `credentialConfig`<sup>Required</sup> <a name="credentialConfig" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCredentialConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `renewStatements`<sup>Required</sup> <a name="renewStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatements"></a>

```java
public java.util.List<java.lang.String> getRenewStatements();
```

- *Type:* java.util.List<java.lang.String>

---

##### `revocationStatements`<sup>Required</sup> <a name="revocationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatements"></a>

```java
public java.util.List<java.lang.String> getRevocationStatements();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rollbackStatements`<sup>Required</sup> <a name="rollbackStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatements"></a>

```java
public java.util.List<java.lang.String> getRollbackStatements();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSecretBackendRoleConfig <a name="DatabaseSecretBackendRoleConfig" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_role.DatabaseSecretBackendRoleConfig;

DatabaseSecretBackendRoleConfig.builder()
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
    .creationStatements(java.util.List<java.lang.String>)
    .dbName(java.lang.String)
    .name(java.lang.String)
//  .credentialConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .credentialType(java.lang.String)
//  .defaultTtl(java.lang.Number)
//  .id(java.lang.String)
//  .maxTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .renewStatements(java.util.List<java.lang.String>)
//  .revocationStatements(java.util.List<java.lang.String>)
//  .rollbackStatements(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The path of the Database Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.creationStatements">creationStatements</a></code> | <code>java.util.List<java.lang.String></code> | Database statements to execute to create and configure a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dbName">dbName</a></code> | <code>java.lang.String</code> | Database connection to use for this role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialConfig">credentialConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies the configuration for the given credential_type. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | Specifies the type of credential that will be generated for the role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | Default TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#id DatabaseSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | Maximum TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.renewStatements">renewStatements</a></code> | <code>java.util.List<java.lang.String></code> | Database statements to execute to renew a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.revocationStatements">revocationStatements</a></code> | <code>java.util.List<java.lang.String></code> | Database statements to execute to revoke a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.rollbackStatements">rollbackStatements</a></code> | <code>java.util.List<java.lang.String></code> | Database statements to execute to rollback a create operation in the event of an error. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The path of the Database Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#backend DatabaseSecretBackendRole#backend}

---

##### `creationStatements`<sup>Required</sup> <a name="creationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.creationStatements"></a>

```java
public java.util.List<java.lang.String> getCreationStatements();
```

- *Type:* java.util.List<java.lang.String>

Database statements to execute to create and configure a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#creation_statements DatabaseSecretBackendRole#creation_statements}

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

Database connection to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#db_name DatabaseSecretBackendRole#db_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#name DatabaseSecretBackendRole#name}

---

##### `credentialConfig`<sup>Optional</sup> <a name="credentialConfig" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCredentialConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies the configuration for the given credential_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#credential_config DatabaseSecretBackendRole#credential_config}

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

Specifies the type of credential that will be generated for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#credential_type DatabaseSecretBackendRole#credential_type}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

Default TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#default_ttl DatabaseSecretBackendRole#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#id DatabaseSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

Maximum TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#max_ttl DatabaseSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#namespace DatabaseSecretBackendRole#namespace}

---

##### `renewStatements`<sup>Optional</sup> <a name="renewStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.renewStatements"></a>

```java
public java.util.List<java.lang.String> getRenewStatements();
```

- *Type:* java.util.List<java.lang.String>

Database statements to execute to renew a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#renew_statements DatabaseSecretBackendRole#renew_statements}

---

##### `revocationStatements`<sup>Optional</sup> <a name="revocationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.revocationStatements"></a>

```java
public java.util.List<java.lang.String> getRevocationStatements();
```

- *Type:* java.util.List<java.lang.String>

Database statements to execute to revoke a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#revocation_statements DatabaseSecretBackendRole#revocation_statements}

---

##### `rollbackStatements`<sup>Optional</sup> <a name="rollbackStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.rollbackStatements"></a>

```java
public java.util.List<java.lang.String> getRollbackStatements();
```

- *Type:* java.util.List<java.lang.String>

Database statements to execute to rollback a create operation in the event of an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/database_secret_backend_role#rollback_statements DatabaseSecretBackendRole#rollback_statements}

---



