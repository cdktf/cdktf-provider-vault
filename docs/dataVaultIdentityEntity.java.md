# `data_vault_identity_entity`

Refer to the Terraform Registory for docs: [`data_vault_identity_entity`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity).

# `dataVaultIdentityEntity` Submodule <a name="`dataVaultIdentityEntity` Submodule" id="@cdktf/provider-vault.dataVaultIdentityEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultIdentityEntity <a name="DataVaultIdentityEntity" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity vault_identity_entity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_entity.DataVaultIdentityEntity;

DataVaultIdentityEntity.Builder.create(Construct scope, java.lang.String id)
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
//  .aliasId(java.lang.String)
//  .aliasMountAccessor(java.lang.String)
//  .aliasName(java.lang.String)
//  .entityId(java.lang.String)
//  .entityName(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.aliasId">aliasId</a></code> | <code>java.lang.String</code> | ID of the alias. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.aliasMountAccessor">aliasMountAccessor</a></code> | <code>java.lang.String</code> | Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.aliasName">aliasName</a></code> | <code>java.lang.String</code> | Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.entityId">entityId</a></code> | <code>java.lang.String</code> | ID of the entity. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.entityName">entityName</a></code> | <code>java.lang.String</code> | Name of the entity. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#id DataVaultIdentityEntity#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aliasId`<sup>Optional</sup> <a name="aliasId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.aliasId"></a>

- *Type:* java.lang.String

ID of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#alias_id DataVaultIdentityEntity#alias_id}

---

##### `aliasMountAccessor`<sup>Optional</sup> <a name="aliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.aliasMountAccessor"></a>

- *Type:* java.lang.String

Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#alias_mount_accessor DataVaultIdentityEntity#alias_mount_accessor}

---

##### `aliasName`<sup>Optional</sup> <a name="aliasName" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.aliasName"></a>

- *Type:* java.lang.String

Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#alias_name DataVaultIdentityEntity#alias_name}

---

##### `entityId`<sup>Optional</sup> <a name="entityId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.entityId"></a>

- *Type:* java.lang.String

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#entity_id DataVaultIdentityEntity#entity_id}

---

##### `entityName`<sup>Optional</sup> <a name="entityName" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.entityName"></a>

- *Type:* java.lang.String

Name of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#entity_name DataVaultIdentityEntity#entity_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#id DataVaultIdentityEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#namespace DataVaultIdentityEntity#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasId">resetAliasId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasMountAccessor">resetAliasMountAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasName">resetAliasName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityId">resetEntityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityName">resetEntityName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAliasId` <a name="resetAliasId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasId"></a>

```java
public void resetAliasId()
```

##### `resetAliasMountAccessor` <a name="resetAliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasMountAccessor"></a>

```java
public void resetAliasMountAccessor()
```

##### `resetAliasName` <a name="resetAliasName" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasName"></a>

```java
public void resetAliasName()
```

##### `resetEntityId` <a name="resetEntityId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityId"></a>

```java
public void resetEntityId()
```

##### `resetEntityName` <a name="resetEntityName" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityName"></a>

```java
public void resetEntityName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_entity.DataVaultIdentityEntity;

DataVaultIdentityEntity.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_entity.DataVaultIdentityEntity;

DataVaultIdentityEntity.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_entity.DataVaultIdentityEntity;

DataVaultIdentityEntity.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliases">aliases</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList">DataVaultIdentityEntityAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dataJson">dataJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.directGroupIds">directGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.disabled">disabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.groupIds">groupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.inheritedGroupIds">inheritedGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lastUpdateTime">lastUpdateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.mergedEntityIds">mergedEntityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasIdInput">aliasIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessorInput">aliasMountAccessorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasNameInput">aliasNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityIdInput">entityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityNameInput">entityNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasId">aliasId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessor">aliasMountAccessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasName">aliasName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityName">entityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliases"></a>

```java
public DataVaultIdentityEntityAliasesList getAliases();
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList">DataVaultIdentityEntityAliasesList</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dataJson"></a>

```java
public java.lang.String getDataJson();
```

- *Type:* java.lang.String

---

##### `directGroupIds`<sup>Required</sup> <a name="directGroupIds" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.directGroupIds"></a>

```java
public java.util.List<java.lang.String> getDirectGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.disabled"></a>

```java
public IResolvable getDisabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `groupIds`<sup>Required</sup> <a name="groupIds" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.groupIds"></a>

```java
public java.util.List<java.lang.String> getGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inheritedGroupIds`<sup>Required</sup> <a name="inheritedGroupIds" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.inheritedGroupIds"></a>

```java
public java.util.List<java.lang.String> getInheritedGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lastUpdateTime"></a>

```java
public java.lang.String getLastUpdateTime();
```

- *Type:* java.lang.String

---

##### `mergedEntityIds`<sup>Required</sup> <a name="mergedEntityIds" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.mergedEntityIds"></a>

```java
public java.util.List<java.lang.String> getMergedEntityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `aliasIdInput`<sup>Optional</sup> <a name="aliasIdInput" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasIdInput"></a>

```java
public java.lang.String getAliasIdInput();
```

- *Type:* java.lang.String

---

##### `aliasMountAccessorInput`<sup>Optional</sup> <a name="aliasMountAccessorInput" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessorInput"></a>

```java
public java.lang.String getAliasMountAccessorInput();
```

- *Type:* java.lang.String

---

##### `aliasNameInput`<sup>Optional</sup> <a name="aliasNameInput" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasNameInput"></a>

```java
public java.lang.String getAliasNameInput();
```

- *Type:* java.lang.String

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityIdInput"></a>

```java
public java.lang.String getEntityIdInput();
```

- *Type:* java.lang.String

---

##### `entityNameInput`<sup>Optional</sup> <a name="entityNameInput" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityNameInput"></a>

```java
public java.lang.String getEntityNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `aliasId`<sup>Required</sup> <a name="aliasId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasId"></a>

```java
public java.lang.String getAliasId();
```

- *Type:* java.lang.String

---

##### `aliasMountAccessor`<sup>Required</sup> <a name="aliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessor"></a>

```java
public java.lang.String getAliasMountAccessor();
```

- *Type:* java.lang.String

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasName"></a>

```java
public java.lang.String getAliasName();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityName"></a>

```java
public java.lang.String getEntityName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultIdentityEntityAliases <a name="DataVaultIdentityEntityAliases" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_entity.DataVaultIdentityEntityAliases;

DataVaultIdentityEntityAliases.builder()
    .build();
```


### DataVaultIdentityEntityConfig <a name="DataVaultIdentityEntityConfig" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_entity.DataVaultIdentityEntityConfig;

DataVaultIdentityEntityConfig.builder()
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
//  .aliasId(java.lang.String)
//  .aliasMountAccessor(java.lang.String)
//  .aliasName(java.lang.String)
//  .entityId(java.lang.String)
//  .entityName(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasId">aliasId</a></code> | <code>java.lang.String</code> | ID of the alias. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasMountAccessor">aliasMountAccessor</a></code> | <code>java.lang.String</code> | Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasName">aliasName</a></code> | <code>java.lang.String</code> | Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityId">entityId</a></code> | <code>java.lang.String</code> | ID of the entity. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityName">entityName</a></code> | <code>java.lang.String</code> | Name of the entity. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#id DataVaultIdentityEntity#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aliasId`<sup>Optional</sup> <a name="aliasId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasId"></a>

```java
public java.lang.String getAliasId();
```

- *Type:* java.lang.String

ID of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#alias_id DataVaultIdentityEntity#alias_id}

---

##### `aliasMountAccessor`<sup>Optional</sup> <a name="aliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasMountAccessor"></a>

```java
public java.lang.String getAliasMountAccessor();
```

- *Type:* java.lang.String

Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#alias_mount_accessor DataVaultIdentityEntity#alias_mount_accessor}

---

##### `aliasName`<sup>Optional</sup> <a name="aliasName" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasName"></a>

```java
public java.lang.String getAliasName();
```

- *Type:* java.lang.String

Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#alias_name DataVaultIdentityEntity#alias_name}

---

##### `entityId`<sup>Optional</sup> <a name="entityId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#entity_id DataVaultIdentityEntity#entity_id}

---

##### `entityName`<sup>Optional</sup> <a name="entityName" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityName"></a>

```java
public java.lang.String getEntityName();
```

- *Type:* java.lang.String

Name of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#entity_name DataVaultIdentityEntity#entity_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#id DataVaultIdentityEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/identity_entity#namespace DataVaultIdentityEntity#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVaultIdentityEntityAliasesList <a name="DataVaultIdentityEntityAliasesList" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_entity.DataVaultIdentityEntityAliasesList;

new DataVaultIdentityEntityAliasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.get"></a>

```java
public DataVaultIdentityEntityAliasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataVaultIdentityEntityAliasesOutputReference <a name="DataVaultIdentityEntityAliasesOutputReference" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_entity.DataVaultIdentityEntityAliasesOutputReference;

new DataVaultIdentityEntityAliasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.canonicalId">canonicalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.lastUpdateTime">lastUpdateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mergedFromCanonicalIds">mergedFromCanonicalIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountAccessor">mountAccessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountType">mountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases">DataVaultIdentityEntityAliases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `canonicalId`<sup>Required</sup> <a name="canonicalId" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.canonicalId"></a>

```java
public java.lang.String getCanonicalId();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.lastUpdateTime"></a>

```java
public java.lang.String getLastUpdateTime();
```

- *Type:* java.lang.String

---

##### `mergedFromCanonicalIds`<sup>Required</sup> <a name="mergedFromCanonicalIds" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mergedFromCanonicalIds"></a>

```java
public java.util.List<java.lang.String> getMergedFromCanonicalIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `mountAccessor`<sup>Required</sup> <a name="mountAccessor" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountAccessor"></a>

```java
public java.lang.String getMountAccessor();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `mountType`<sup>Required</sup> <a name="mountType" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountType"></a>

```java
public java.lang.String getMountType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.internalValue"></a>

```java
public DataVaultIdentityEntityAliases getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases">DataVaultIdentityEntityAliases</a>

---



