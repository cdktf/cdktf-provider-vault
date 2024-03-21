# `dataVaultApproleAuthBackendRoleId` Submodule <a name="`dataVaultApproleAuthBackendRoleId` Submodule" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultApproleAuthBackendRoleId <a name="DataVaultApproleAuthBackendRoleId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id vault_approle_auth_backend_role_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_approle_auth_backend_role_id.DataVaultApproleAuthBackendRoleId;

DataVaultApproleAuthBackendRoleId.Builder.create(Construct scope, java.lang.String id)
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
    .roleName(java.lang.String)
//  .backend(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#id DataVaultApproleAuthBackendRoleId#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#role_name DataVaultApproleAuthBackendRoleId#role_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#backend DataVaultApproleAuthBackendRoleId#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#id DataVaultApproleAuthBackendRoleId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#namespace DataVaultApproleAuthBackendRoleId#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultApproleAuthBackendRoleId resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_approle_auth_backend_role_id.DataVaultApproleAuthBackendRoleId;

DataVaultApproleAuthBackendRoleId.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_approle_auth_backend_role_id.DataVaultApproleAuthBackendRoleId;

DataVaultApproleAuthBackendRoleId.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_approle_auth_backend_role_id.DataVaultApproleAuthBackendRoleId;

DataVaultApproleAuthBackendRoleId.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_approle_auth_backend_role_id.DataVaultApproleAuthBackendRoleId;

DataVaultApproleAuthBackendRoleId.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultApproleAuthBackendRoleId.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVaultApproleAuthBackendRoleId resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultApproleAuthBackendRoleId to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultApproleAuthBackendRoleId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultApproleAuthBackendRoleId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultApproleAuthBackendRoleIdConfig <a name="DataVaultApproleAuthBackendRoleIdConfig" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_approle_auth_backend_role_id.DataVaultApproleAuthBackendRoleIdConfig;

DataVaultApproleAuthBackendRoleIdConfig.builder()
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
    .roleName(java.lang.String)
//  .backend(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#id DataVaultApproleAuthBackendRoleId#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#role_name DataVaultApproleAuthBackendRoleId#role_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#backend DataVaultApproleAuthBackendRoleId#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#id DataVaultApproleAuthBackendRoleId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/data-sources/approle_auth_backend_role_id#namespace DataVaultApproleAuthBackendRoleId#namespace}

---



