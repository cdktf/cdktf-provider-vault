# `dataVaultIdentityOidcOpenidConfig` Submodule <a name="`dataVaultIdentityOidcOpenidConfig` Submodule" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultIdentityOidcOpenidConfig <a name="DataVaultIdentityOidcOpenidConfig" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/identity_oidc_openid_config vault_identity_oidc_openid_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_oidc_openid_config.DataVaultIdentityOidcOpenidConfig;

DataVaultIdentityOidcOpenidConfig.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the provider. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/identity_oidc_openid_config#id DataVaultIdentityOidcOpenidConfig#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/identity_oidc_openid_config#name DataVaultIdentityOidcOpenidConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/identity_oidc_openid_config#id DataVaultIdentityOidcOpenidConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/identity_oidc_openid_config#namespace DataVaultIdentityOidcOpenidConfig#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultIdentityOidcOpenidConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_oidc_openid_config.DataVaultIdentityOidcOpenidConfig;

DataVaultIdentityOidcOpenidConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_oidc_openid_config.DataVaultIdentityOidcOpenidConfig;

DataVaultIdentityOidcOpenidConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_oidc_openid_config.DataVaultIdentityOidcOpenidConfig;

DataVaultIdentityOidcOpenidConfig.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_oidc_openid_config.DataVaultIdentityOidcOpenidConfig;

DataVaultIdentityOidcOpenidConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultIdentityOidcOpenidConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVaultIdentityOidcOpenidConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultIdentityOidcOpenidConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultIdentityOidcOpenidConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/identity_oidc_openid_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultIdentityOidcOpenidConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.grantTypesSupported">grantTypesSupported</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idTokenSigningAlgValuesSupported">idTokenSigningAlgValuesSupported</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.requestUriParameterSupported">requestUriParameterSupported</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.responseTypesSupported">responseTypesSupported</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.scopesSupported">scopesSupported</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.subjectTypesSupported">subjectTypesSupported</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpointAuthMethodsSupported">tokenEndpointAuthMethodsSupported</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.userinfoEndpoint">userinfoEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `grantTypesSupported`<sup>Required</sup> <a name="grantTypesSupported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.grantTypesSupported"></a>

```java
public java.util.List<java.lang.String> getGrantTypesSupported();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idTokenSigningAlgValuesSupported`<sup>Required</sup> <a name="idTokenSigningAlgValuesSupported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idTokenSigningAlgValuesSupported"></a>

```java
public java.util.List<java.lang.String> getIdTokenSigningAlgValuesSupported();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

---

##### `requestUriParameterSupported`<sup>Required</sup> <a name="requestUriParameterSupported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.requestUriParameterSupported"></a>

```java
public IResolvable getRequestUriParameterSupported();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `responseTypesSupported`<sup>Required</sup> <a name="responseTypesSupported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.responseTypesSupported"></a>

```java
public java.util.List<java.lang.String> getResponseTypesSupported();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopesSupported`<sup>Required</sup> <a name="scopesSupported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.scopesSupported"></a>

```java
public java.util.List<java.lang.String> getScopesSupported();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subjectTypesSupported`<sup>Required</sup> <a name="subjectTypesSupported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.subjectTypesSupported"></a>

```java
public java.util.List<java.lang.String> getSubjectTypesSupported();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `tokenEndpointAuthMethodsSupported`<sup>Required</sup> <a name="tokenEndpointAuthMethodsSupported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpointAuthMethodsSupported"></a>

```java
public java.util.List<java.lang.String> getTokenEndpointAuthMethodsSupported();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userinfoEndpoint`<sup>Required</sup> <a name="userinfoEndpoint" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.userinfoEndpoint"></a>

```java
public java.lang.String getUserinfoEndpoint();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultIdentityOidcOpenidConfigConfig <a name="DataVaultIdentityOidcOpenidConfigConfig" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_identity_oidc_openid_config.DataVaultIdentityOidcOpenidConfigConfig;

DataVaultIdentityOidcOpenidConfigConfig.builder()
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the provider. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/identity_oidc_openid_config#id DataVaultIdentityOidcOpenidConfig#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/identity_oidc_openid_config#name DataVaultIdentityOidcOpenidConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/identity_oidc_openid_config#id DataVaultIdentityOidcOpenidConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/identity_oidc_openid_config#namespace DataVaultIdentityOidcOpenidConfig#namespace}

---



