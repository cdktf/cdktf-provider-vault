# `vault_mfa_duo`

Refer to the Terraform Registory for docs: [`vault_mfa_duo`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo).

# `mfaDuo` Submodule <a name="`mfaDuo` Submodule" id="@cdktf/provider-vault.mfaDuo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaDuo <a name="MfaDuo" id="@cdktf/provider-vault.mfaDuo.MfaDuo"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo vault_mfa_duo}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.mfa_duo.MfaDuo;

MfaDuo.Builder.create(Construct scope, java.lang.String id)
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
    .apiHostname(java.lang.String)
    .integrationKey(java.lang.String)
    .mountAccessor(java.lang.String)
    .name(java.lang.String)
    .secretKey(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .pushInfo(java.lang.String)
//  .usernameFormat(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.apiHostname">apiHostname</a></code> | <code>java.lang.String</code> | API hostname for Duo. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.integrationKey">integrationKey</a></code> | <code>java.lang.String</code> | Integration key for Duo. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.mountAccessor">mountAccessor</a></code> | <code>java.lang.String</code> | The mount to tie this method to for use in automatic mappings. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the MFA method. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.secretKey">secretKey</a></code> | <code>java.lang.String</code> | Secret key for Duo. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#id MfaDuo#id}. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.pushInfo">pushInfo</a></code> | <code>java.lang.String</code> | Push information for Duo. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.usernameFormat">usernameFormat</a></code> | <code>java.lang.String</code> | A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiHostname`<sup>Required</sup> <a name="apiHostname" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.apiHostname"></a>

- *Type:* java.lang.String

API hostname for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#api_hostname MfaDuo#api_hostname}

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.integrationKey"></a>

- *Type:* java.lang.String

Integration key for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#integration_key MfaDuo#integration_key}

---

##### `mountAccessor`<sup>Required</sup> <a name="mountAccessor" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.mountAccessor"></a>

- *Type:* java.lang.String

The mount to tie this method to for use in automatic mappings.

The mapping will use the Name field of Aliases associated with this mount as the username in the mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#mount_accessor MfaDuo#mount_accessor}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the MFA method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#name MfaDuo#name}

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.secretKey"></a>

- *Type:* java.lang.String

Secret key for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#secret_key MfaDuo#secret_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#id MfaDuo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#namespace MfaDuo#namespace}

---

##### `pushInfo`<sup>Optional</sup> <a name="pushInfo" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.pushInfo"></a>

- *Type:* java.lang.String

Push information for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#push_info MfaDuo#push_info}

---

##### `usernameFormat`<sup>Optional</sup> <a name="usernameFormat" id="@cdktf/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.usernameFormat"></a>

- *Type:* java.lang.String

A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#username_format MfaDuo#username_format}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.resetPushInfo">resetPushInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.resetUsernameFormat">resetUsernameFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.mfaDuo.MfaDuo.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.mfaDuo.MfaDuo.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.mfaDuo.MfaDuo.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.mfaDuo.MfaDuo.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.mfaDuo.MfaDuo.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.mfaDuo.MfaDuo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.mfaDuo.MfaDuo.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.mfaDuo.MfaDuo.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.mfaDuo.MfaDuo.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaDuo.MfaDuo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.mfaDuo.MfaDuo.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.mfaDuo.MfaDuo.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPushInfo` <a name="resetPushInfo" id="@cdktf/provider-vault.mfaDuo.MfaDuo.resetPushInfo"></a>

```java
public void resetPushInfo()
```

##### `resetUsernameFormat` <a name="resetUsernameFormat" id="@cdktf/provider-vault.mfaDuo.MfaDuo.resetUsernameFormat"></a>

```java
public void resetUsernameFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.mfaDuo.MfaDuo.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.mfa_duo.MfaDuo;

MfaDuo.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaDuo.MfaDuo.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.mfaDuo.MfaDuo.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.mfa_duo.MfaDuo;

MfaDuo.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaDuo.MfaDuo.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.mfaDuo.MfaDuo.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.mfa_duo.MfaDuo;

MfaDuo.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaDuo.MfaDuo.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.apiHostnameInput">apiHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.integrationKeyInput">integrationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.mountAccessorInput">mountAccessorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.pushInfoInput">pushInfoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.secretKeyInput">secretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.usernameFormatInput">usernameFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.apiHostname">apiHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.integrationKey">integrationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.mountAccessor">mountAccessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.pushInfo">pushInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.usernameFormat">usernameFormat</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiHostnameInput`<sup>Optional</sup> <a name="apiHostnameInput" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.apiHostnameInput"></a>

```java
public java.lang.String getApiHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationKeyInput`<sup>Optional</sup> <a name="integrationKeyInput" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.integrationKeyInput"></a>

```java
public java.lang.String getIntegrationKeyInput();
```

- *Type:* java.lang.String

---

##### `mountAccessorInput`<sup>Optional</sup> <a name="mountAccessorInput" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.mountAccessorInput"></a>

```java
public java.lang.String getMountAccessorInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pushInfoInput`<sup>Optional</sup> <a name="pushInfoInput" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.pushInfoInput"></a>

```java
public java.lang.String getPushInfoInput();
```

- *Type:* java.lang.String

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.secretKeyInput"></a>

```java
public java.lang.String getSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `usernameFormatInput`<sup>Optional</sup> <a name="usernameFormatInput" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.usernameFormatInput"></a>

```java
public java.lang.String getUsernameFormatInput();
```

- *Type:* java.lang.String

---

##### `apiHostname`<sup>Required</sup> <a name="apiHostname" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.apiHostname"></a>

```java
public java.lang.String getApiHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.integrationKey"></a>

```java
public java.lang.String getIntegrationKey();
```

- *Type:* java.lang.String

---

##### `mountAccessor`<sup>Required</sup> <a name="mountAccessor" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.mountAccessor"></a>

```java
public java.lang.String getMountAccessor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `pushInfo`<sup>Required</sup> <a name="pushInfo" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.pushInfo"></a>

```java
public java.lang.String getPushInfo();
```

- *Type:* java.lang.String

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

---

##### `usernameFormat`<sup>Required</sup> <a name="usernameFormat" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.usernameFormat"></a>

```java
public java.lang.String getUsernameFormat();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuo.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.mfaDuo.MfaDuo.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MfaDuoConfig <a name="MfaDuoConfig" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.mfa_duo.MfaDuoConfig;

MfaDuoConfig.builder()
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
    .apiHostname(java.lang.String)
    .integrationKey(java.lang.String)
    .mountAccessor(java.lang.String)
    .name(java.lang.String)
    .secretKey(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .pushInfo(java.lang.String)
//  .usernameFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.apiHostname">apiHostname</a></code> | <code>java.lang.String</code> | API hostname for Duo. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.integrationKey">integrationKey</a></code> | <code>java.lang.String</code> | Integration key for Duo. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.mountAccessor">mountAccessor</a></code> | <code>java.lang.String</code> | The mount to tie this method to for use in automatic mappings. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the MFA method. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | Secret key for Duo. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#id MfaDuo#id}. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.pushInfo">pushInfo</a></code> | <code>java.lang.String</code> | Push information for Duo. |
| <code><a href="#@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.usernameFormat">usernameFormat</a></code> | <code>java.lang.String</code> | A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiHostname`<sup>Required</sup> <a name="apiHostname" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.apiHostname"></a>

```java
public java.lang.String getApiHostname();
```

- *Type:* java.lang.String

API hostname for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#api_hostname MfaDuo#api_hostname}

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.integrationKey"></a>

```java
public java.lang.String getIntegrationKey();
```

- *Type:* java.lang.String

Integration key for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#integration_key MfaDuo#integration_key}

---

##### `mountAccessor`<sup>Required</sup> <a name="mountAccessor" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.mountAccessor"></a>

```java
public java.lang.String getMountAccessor();
```

- *Type:* java.lang.String

The mount to tie this method to for use in automatic mappings.

The mapping will use the Name field of Aliases associated with this mount as the username in the mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#mount_accessor MfaDuo#mount_accessor}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the MFA method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#name MfaDuo#name}

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

Secret key for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#secret_key MfaDuo#secret_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#id MfaDuo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#namespace MfaDuo#namespace}

---

##### `pushInfo`<sup>Optional</sup> <a name="pushInfo" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.pushInfo"></a>

```java
public java.lang.String getPushInfo();
```

- *Type:* java.lang.String

Push information for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#push_info MfaDuo#push_info}

---

##### `usernameFormat`<sup>Optional</sup> <a name="usernameFormat" id="@cdktf/provider-vault.mfaDuo.MfaDuoConfig.property.usernameFormat"></a>

```java
public java.lang.String getUsernameFormat();
```

- *Type:* java.lang.String

A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/mfa_duo#username_format MfaDuo#username_format}

---



