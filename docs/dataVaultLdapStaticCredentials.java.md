# `dataVaultLdapStaticCredentials` Submodule <a name="`dataVaultLdapStaticCredentials` Submodule" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultLdapStaticCredentials <a name="DataVaultLdapStaticCredentials" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ldap_static_credentials vault_ldap_static_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_ldap_static_credentials.DataVaultLdapStaticCredentials;

DataVaultLdapStaticCredentials.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .roleName(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | LDAP Secret Backend to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ldap_static_credentials#id DataVaultLdapStaticCredentials#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

LDAP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ldap_static_credentials#mount DataVaultLdapStaticCredentials#mount}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ldap_static_credentials#role_name DataVaultLdapStaticCredentials#role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ldap_static_credentials#id DataVaultLdapStaticCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ldap_static_credentials#namespace DataVaultLdapStaticCredentials#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultLdapStaticCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_ldap_static_credentials.DataVaultLdapStaticCredentials;

DataVaultLdapStaticCredentials.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_ldap_static_credentials.DataVaultLdapStaticCredentials;

DataVaultLdapStaticCredentials.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_ldap_static_credentials.DataVaultLdapStaticCredentials;

DataVaultLdapStaticCredentials.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_ldap_static_credentials.DataVaultLdapStaticCredentials;

DataVaultLdapStaticCredentials.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultLdapStaticCredentials.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVaultLdapStaticCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultLdapStaticCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultLdapStaticCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ldap_static_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultLdapStaticCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dn">dn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastPassword">lastPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastVaultRotation">lastVaultRotation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dn"></a>

```java
public java.lang.String getDn();
```

- *Type:* java.lang.String

---

##### `lastPassword`<sup>Required</sup> <a name="lastPassword" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastPassword"></a>

```java
public java.lang.String getLastPassword();
```

- *Type:* java.lang.String

---

##### `lastVaultRotation`<sup>Required</sup> <a name="lastVaultRotation" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastVaultRotation"></a>

```java
public java.lang.String getLastVaultRotation();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.rotationPeriod"></a>

```java
public java.lang.Number getRotationPeriod();
```

- *Type:* java.lang.Number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultLdapStaticCredentialsConfig <a name="DataVaultLdapStaticCredentialsConfig" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_ldap_static_credentials.DataVaultLdapStaticCredentialsConfig;

DataVaultLdapStaticCredentialsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .roleName(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | LDAP Secret Backend to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ldap_static_credentials#id DataVaultLdapStaticCredentials#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

LDAP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ldap_static_credentials#mount DataVaultLdapStaticCredentials#mount}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ldap_static_credentials#role_name DataVaultLdapStaticCredentials#role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ldap_static_credentials#id DataVaultLdapStaticCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/ldap_static_credentials#namespace DataVaultLdapStaticCredentials#namespace}

---



