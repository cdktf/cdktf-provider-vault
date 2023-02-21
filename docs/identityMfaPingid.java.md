# `identityMfaPingid` Submodule <a name="`identityMfaPingid` Submodule" id="@cdktf/provider-vault.identityMfaPingid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaPingid <a name="IdentityMfaPingid" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_pingid vault_identity_mfa_pingid}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_pingid.IdentityMfaPingid;

IdentityMfaPingid.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .settingsFileBase64(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .usernameFormat(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.settingsFileBase64">settingsFileBase64</a></code> | <code>java.lang.String</code> | A base64-encoded third-party settings contents as retrieved from PingID's configuration page. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_pingid#id IdentityMfaPingid#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.usernameFormat">usernameFormat</a></code> | <code>java.lang.String</code> | A template string for mapping Identity names to MFA methods. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `settingsFileBase64`<sup>Required</sup> <a name="settingsFileBase64" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.settingsFileBase64"></a>

- *Type:* java.lang.String

A base64-encoded third-party settings contents as retrieved from PingID's configuration page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_pingid#settings_file_base64 IdentityMfaPingid#settings_file_base64}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_pingid#id IdentityMfaPingid#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_pingid#namespace IdentityMfaPingid#namespace}

---

##### `usernameFormat`<sup>Optional</sup> <a name="usernameFormat" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.usernameFormat"></a>

- *Type:* java.lang.String

A template string for mapping Identity names to MFA methods.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_pingid#username_format IdentityMfaPingid#username_format}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetUsernameFormat">resetUsernameFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetUsernameFormat` <a name="resetUsernameFormat" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.resetUsernameFormat"></a>

```java
public void resetUsernameFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_pingid.IdentityMfaPingid;

IdentityMfaPingid.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_pingid.IdentityMfaPingid;

IdentityMfaPingid.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_pingid.IdentityMfaPingid;

IdentityMfaPingid.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.adminUrl">adminUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.authenticatorUrl">authenticatorUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.idpUrl">idpUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.methodId">methodId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.mountAccessor">mountAccessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespacePath">namespacePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.orgAlias">orgAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.useSignature">useSignature</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.settingsFileBase64Input">settingsFileBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.usernameFormatInput">usernameFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.settingsFileBase64">settingsFileBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.usernameFormat">usernameFormat</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminUrl`<sup>Required</sup> <a name="adminUrl" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.adminUrl"></a>

```java
public java.lang.String getAdminUrl();
```

- *Type:* java.lang.String

---

##### `authenticatorUrl`<sup>Required</sup> <a name="authenticatorUrl" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.authenticatorUrl"></a>

```java
public java.lang.String getAuthenticatorUrl();
```

- *Type:* java.lang.String

---

##### `idpUrl`<sup>Required</sup> <a name="idpUrl" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.idpUrl"></a>

```java
public java.lang.String getIdpUrl();
```

- *Type:* java.lang.String

---

##### `methodId`<sup>Required</sup> <a name="methodId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.methodId"></a>

```java
public java.lang.String getMethodId();
```

- *Type:* java.lang.String

---

##### `mountAccessor`<sup>Required</sup> <a name="mountAccessor" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.mountAccessor"></a>

```java
public java.lang.String getMountAccessor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespacePath"></a>

```java
public java.lang.String getNamespacePath();
```

- *Type:* java.lang.String

---

##### `orgAlias`<sup>Required</sup> <a name="orgAlias" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.orgAlias"></a>

```java
public java.lang.String getOrgAlias();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `useSignature`<sup>Required</sup> <a name="useSignature" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.useSignature"></a>

```java
public IResolvable getUseSignature();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `settingsFileBase64Input`<sup>Optional</sup> <a name="settingsFileBase64Input" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.settingsFileBase64Input"></a>

```java
public java.lang.String getSettingsFileBase64Input();
```

- *Type:* java.lang.String

---

##### `usernameFormatInput`<sup>Optional</sup> <a name="usernameFormatInput" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.usernameFormatInput"></a>

```java
public java.lang.String getUsernameFormatInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `settingsFileBase64`<sup>Required</sup> <a name="settingsFileBase64" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.settingsFileBase64"></a>

```java
public java.lang.String getSettingsFileBase64();
```

- *Type:* java.lang.String

---

##### `usernameFormat`<sup>Required</sup> <a name="usernameFormat" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.usernameFormat"></a>

```java
public java.lang.String getUsernameFormat();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingid.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaPingidConfig <a name="IdentityMfaPingidConfig" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_pingid.IdentityMfaPingidConfig;

IdentityMfaPingidConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .settingsFileBase64(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .usernameFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.settingsFileBase64">settingsFileBase64</a></code> | <code>java.lang.String</code> | A base64-encoded third-party settings contents as retrieved from PingID's configuration page. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_pingid#id IdentityMfaPingid#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.usernameFormat">usernameFormat</a></code> | <code>java.lang.String</code> | A template string for mapping Identity names to MFA methods. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `settingsFileBase64`<sup>Required</sup> <a name="settingsFileBase64" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.settingsFileBase64"></a>

```java
public java.lang.String getSettingsFileBase64();
```

- *Type:* java.lang.String

A base64-encoded third-party settings contents as retrieved from PingID's configuration page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_pingid#settings_file_base64 IdentityMfaPingid#settings_file_base64}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_pingid#id IdentityMfaPingid#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_pingid#namespace IdentityMfaPingid#namespace}

---

##### `usernameFormat`<sup>Optional</sup> <a name="usernameFormat" id="@cdktf/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.usernameFormat"></a>

```java
public java.lang.String getUsernameFormat();
```

- *Type:* java.lang.String

A template string for mapping Identity names to MFA methods.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_mfa_pingid#username_format IdentityMfaPingid#username_format}

---



