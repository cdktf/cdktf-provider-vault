# `dataVaultIdentityGroup` Submodule <a name="`dataVaultIdentityGroup` Submodule" id="@cdktf/provider-vault.dataVaultIdentityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultIdentityGroup <a name="DataVaultIdentityGroup" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group vault_identity_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_group.DataVaultIdentityGroup;

DataVaultIdentityGroup.Builder.create(Construct scope, java.lang.String id)
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
//  .groupId(java.lang.String)
//  .groupName(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.aliasId">aliasId</a></code> | <code>java.lang.String</code> | ID of the alias. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.aliasMountAccessor">aliasMountAccessor</a></code> | <code>java.lang.String</code> | Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.aliasName">aliasName</a></code> | <code>java.lang.String</code> | Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.String</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.groupName">groupName</a></code> | <code>java.lang.String</code> | Name of the group. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#id DataVaultIdentityGroup#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aliasId`<sup>Optional</sup> <a name="aliasId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.aliasId"></a>

- *Type:* java.lang.String

ID of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#alias_id DataVaultIdentityGroup#alias_id}

---

##### `aliasMountAccessor`<sup>Optional</sup> <a name="aliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.aliasMountAccessor"></a>

- *Type:* java.lang.String

Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#alias_mount_accessor DataVaultIdentityGroup#alias_mount_accessor}

---

##### `aliasName`<sup>Optional</sup> <a name="aliasName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.aliasName"></a>

- *Type:* java.lang.String

Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#alias_name DataVaultIdentityGroup#alias_name}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.groupId"></a>

- *Type:* java.lang.String

ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#group_id DataVaultIdentityGroup#group_id}

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.groupName"></a>

- *Type:* java.lang.String

Name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#group_name DataVaultIdentityGroup#group_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#id DataVaultIdentityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#namespace DataVaultIdentityGroup#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasId">resetAliasId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasMountAccessor">resetAliasMountAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasName">resetAliasName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAliasId` <a name="resetAliasId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasId"></a>

```java
public void resetAliasId()
```

##### `resetAliasMountAccessor` <a name="resetAliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasMountAccessor"></a>

```java
public void resetAliasMountAccessor()
```

##### `resetAliasName` <a name="resetAliasName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasName"></a>

```java
public void resetAliasName()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetGroupName` <a name="resetGroupName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupName"></a>

```java
public void resetGroupName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultIdentityGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_group.DataVaultIdentityGroup;

DataVaultIdentityGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_group.DataVaultIdentityGroup;

DataVaultIdentityGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_group.DataVaultIdentityGroup;

DataVaultIdentityGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_group.DataVaultIdentityGroup;

DataVaultIdentityGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultIdentityGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVaultIdentityGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultIdentityGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultIdentityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultIdentityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCanonicalId">aliasCanonicalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCreationTime">aliasCreationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasLastUpdateTime">aliasLastUpdateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMergedFromCanonicalIds">aliasMergedFromCanonicalIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMetadata">aliasMetadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountPath">aliasMountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountType">aliasMountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dataJson">dataJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lastUpdateTime">lastUpdateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberEntityIds">memberEntityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberGroupIds">memberGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.modifyIndex">modifyIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.parentGroupIds">parentGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasIdInput">aliasIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessorInput">aliasMountAccessorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasNameInput">aliasNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasId">aliasId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessor">aliasMountAccessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasName">aliasName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `aliasCanonicalId`<sup>Required</sup> <a name="aliasCanonicalId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCanonicalId"></a>

```java
public java.lang.String getAliasCanonicalId();
```

- *Type:* java.lang.String

---

##### `aliasCreationTime`<sup>Required</sup> <a name="aliasCreationTime" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCreationTime"></a>

```java
public java.lang.String getAliasCreationTime();
```

- *Type:* java.lang.String

---

##### `aliasLastUpdateTime`<sup>Required</sup> <a name="aliasLastUpdateTime" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasLastUpdateTime"></a>

```java
public java.lang.String getAliasLastUpdateTime();
```

- *Type:* java.lang.String

---

##### `aliasMergedFromCanonicalIds`<sup>Required</sup> <a name="aliasMergedFromCanonicalIds" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMergedFromCanonicalIds"></a>

```java
public java.util.List<java.lang.String> getAliasMergedFromCanonicalIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `aliasMetadata`<sup>Required</sup> <a name="aliasMetadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMetadata"></a>

```java
public StringMap getAliasMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `aliasMountPath`<sup>Required</sup> <a name="aliasMountPath" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountPath"></a>

```java
public java.lang.String getAliasMountPath();
```

- *Type:* java.lang.String

---

##### `aliasMountType`<sup>Required</sup> <a name="aliasMountType" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountType"></a>

```java
public java.lang.String getAliasMountType();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dataJson"></a>

```java
public java.lang.String getDataJson();
```

- *Type:* java.lang.String

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lastUpdateTime"></a>

```java
public java.lang.String getLastUpdateTime();
```

- *Type:* java.lang.String

---

##### `memberEntityIds`<sup>Required</sup> <a name="memberEntityIds" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberEntityIds"></a>

```java
public java.util.List<java.lang.String> getMemberEntityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `memberGroupIds`<sup>Required</sup> <a name="memberGroupIds" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberGroupIds"></a>

```java
public java.util.List<java.lang.String> getMemberGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `modifyIndex`<sup>Required</sup> <a name="modifyIndex" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.modifyIndex"></a>

```java
public java.lang.Number getModifyIndex();
```

- *Type:* java.lang.Number

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `parentGroupIds`<sup>Required</sup> <a name="parentGroupIds" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.parentGroupIds"></a>

```java
public java.util.List<java.lang.String> getParentGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `aliasIdInput`<sup>Optional</sup> <a name="aliasIdInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasIdInput"></a>

```java
public java.lang.String getAliasIdInput();
```

- *Type:* java.lang.String

---

##### `aliasMountAccessorInput`<sup>Optional</sup> <a name="aliasMountAccessorInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessorInput"></a>

```java
public java.lang.String getAliasMountAccessorInput();
```

- *Type:* java.lang.String

---

##### `aliasNameInput`<sup>Optional</sup> <a name="aliasNameInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasNameInput"></a>

```java
public java.lang.String getAliasNameInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `aliasId`<sup>Required</sup> <a name="aliasId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasId"></a>

```java
public java.lang.String getAliasId();
```

- *Type:* java.lang.String

---

##### `aliasMountAccessor`<sup>Required</sup> <a name="aliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessor"></a>

```java
public java.lang.String getAliasMountAccessor();
```

- *Type:* java.lang.String

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasName"></a>

```java
public java.lang.String getAliasName();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultIdentityGroupConfig <a name="DataVaultIdentityGroupConfig" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_group.DataVaultIdentityGroupConfig;

DataVaultIdentityGroupConfig.builder()
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
//  .groupId(java.lang.String)
//  .groupName(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasId">aliasId</a></code> | <code>java.lang.String</code> | ID of the alias. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasMountAccessor">aliasMountAccessor</a></code> | <code>java.lang.String</code> | Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasName">aliasName</a></code> | <code>java.lang.String</code> | Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupId">groupId</a></code> | <code>java.lang.String</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupName">groupName</a></code> | <code>java.lang.String</code> | Name of the group. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#id DataVaultIdentityGroup#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aliasId`<sup>Optional</sup> <a name="aliasId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasId"></a>

```java
public java.lang.String getAliasId();
```

- *Type:* java.lang.String

ID of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#alias_id DataVaultIdentityGroup#alias_id}

---

##### `aliasMountAccessor`<sup>Optional</sup> <a name="aliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasMountAccessor"></a>

```java
public java.lang.String getAliasMountAccessor();
```

- *Type:* java.lang.String

Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#alias_mount_accessor DataVaultIdentityGroup#alias_mount_accessor}

---

##### `aliasName`<sup>Optional</sup> <a name="aliasName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasName"></a>

```java
public java.lang.String getAliasName();
```

- *Type:* java.lang.String

Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#alias_name DataVaultIdentityGroup#alias_name}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#group_id DataVaultIdentityGroup#group_id}

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

Name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#group_name DataVaultIdentityGroup#group_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#id DataVaultIdentityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/data-sources/identity_group#namespace DataVaultIdentityGroup#namespace}

---



