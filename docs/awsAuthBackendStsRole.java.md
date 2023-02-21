# `awsAuthBackendStsRole` Submodule <a name="`awsAuthBackendStsRole` Submodule" id="@cdktf/provider-vault.awsAuthBackendStsRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendStsRole <a name="AwsAuthBackendStsRole" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_sts_role vault_aws_auth_backend_sts_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_sts_role.AwsAuthBackendStsRole;

AwsAuthBackendStsRole.Builder.create(Construct scope, java.lang.String id)
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
    .accountId(java.lang.String)
    .stsRole(java.lang.String)
//  .backend(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | AWS account ID to be associated with STS role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.stsRole">stsRole</a></code> | <code>java.lang.String</code> | AWS ARN for STS role to be assumed when interacting with the account specified. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_sts_role#id AwsAuthBackendStsRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

AWS account ID to be associated with STS role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_sts_role#account_id AwsAuthBackendStsRole#account_id}

---

##### `stsRole`<sup>Required</sup> <a name="stsRole" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.stsRole"></a>

- *Type:* java.lang.String

AWS ARN for STS role to be assumed when interacting with the account specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_sts_role#sts_role AwsAuthBackendStsRole#sts_role}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_sts_role#backend AwsAuthBackendStsRole#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_sts_role#id AwsAuthBackendStsRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_sts_role#namespace AwsAuthBackendStsRole#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_sts_role.AwsAuthBackendStsRole;

AwsAuthBackendStsRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_sts_role.AwsAuthBackendStsRole;

AwsAuthBackendStsRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_sts_role.AwsAuthBackendStsRole;

AwsAuthBackendStsRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.stsRoleInput">stsRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.stsRole">stsRole</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `stsRoleInput`<sup>Optional</sup> <a name="stsRoleInput" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.stsRoleInput"></a>

```java
public java.lang.String getStsRoleInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `stsRole`<sup>Required</sup> <a name="stsRole" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.stsRole"></a>

```java
public java.lang.String getStsRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendStsRoleConfig <a name="AwsAuthBackendStsRoleConfig" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_sts_role.AwsAuthBackendStsRoleConfig;

AwsAuthBackendStsRoleConfig.builder()
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
    .accountId(java.lang.String)
    .stsRole(java.lang.String)
//  .backend(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | AWS account ID to be associated with STS role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.stsRole">stsRole</a></code> | <code>java.lang.String</code> | AWS ARN for STS role to be assumed when interacting with the account specified. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_sts_role#id AwsAuthBackendStsRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

AWS account ID to be associated with STS role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_sts_role#account_id AwsAuthBackendStsRole#account_id}

---

##### `stsRole`<sup>Required</sup> <a name="stsRole" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.stsRole"></a>

```java
public java.lang.String getStsRole();
```

- *Type:* java.lang.String

AWS ARN for STS role to be assumed when interacting with the account specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_sts_role#sts_role AwsAuthBackendStsRole#sts_role}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_sts_role#backend AwsAuthBackendStsRole#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_sts_role#id AwsAuthBackendStsRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendStsRole.AwsAuthBackendStsRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_sts_role#namespace AwsAuthBackendStsRole#namespace}

---



