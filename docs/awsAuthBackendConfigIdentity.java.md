# `awsAuthBackendConfigIdentity` Submodule <a name="`awsAuthBackendConfigIdentity` Submodule" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendConfigIdentity <a name="AwsAuthBackendConfigIdentity" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity vault_aws_auth_backend_config_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_config_identity.AwsAuthBackendConfigIdentity;

AwsAuthBackendConfigIdentity.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .backend(java.lang.String)
//  .ec2Alias(java.lang.String)
//  .ec2Metadata(java.util.List<java.lang.String>)
//  .iamAlias(java.lang.String)
//  .iamMetadata(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.ec2Alias">ec2Alias</a></code> | <code>java.lang.String</code> | Configures how to generate the identity alias when using the ec2 auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.ec2Metadata">ec2Metadata</a></code> | <code>java.util.List<java.lang.String></code> | The metadata to include on the token returned by the login endpoint. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.iamAlias">iamAlias</a></code> | <code>java.lang.String</code> | How to generate the identity alias when using the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.iamMetadata">iamMetadata</a></code> | <code>java.util.List<java.lang.String></code> | The metadata to include on the token returned by the login endpoint. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#id AwsAuthBackendConfigIdentity#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#backend AwsAuthBackendConfigIdentity#backend}

---

##### `ec2Alias`<sup>Optional</sup> <a name="ec2Alias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.ec2Alias"></a>

- *Type:* java.lang.String

Configures how to generate the identity alias when using the ec2 auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#ec2_alias AwsAuthBackendConfigIdentity#ec2_alias}

---

##### `ec2Metadata`<sup>Optional</sup> <a name="ec2Metadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.ec2Metadata"></a>

- *Type:* java.util.List<java.lang.String>

The metadata to include on the token returned by the login endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#ec2_metadata AwsAuthBackendConfigIdentity#ec2_metadata}

---

##### `iamAlias`<sup>Optional</sup> <a name="iamAlias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.iamAlias"></a>

- *Type:* java.lang.String

How to generate the identity alias when using the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#iam_alias AwsAuthBackendConfigIdentity#iam_alias}

---

##### `iamMetadata`<sup>Optional</sup> <a name="iamMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.iamMetadata"></a>

- *Type:* java.util.List<java.lang.String>

The metadata to include on the token returned by the login endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#iam_metadata AwsAuthBackendConfigIdentity#iam_metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#id AwsAuthBackendConfigIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#namespace AwsAuthBackendConfigIdentity#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Alias">resetEc2Alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Metadata">resetEc2Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamAlias">resetIamAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamMetadata">resetIamMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetEc2Alias` <a name="resetEc2Alias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Alias"></a>

```java
public void resetEc2Alias()
```

##### `resetEc2Metadata` <a name="resetEc2Metadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Metadata"></a>

```java
public void resetEc2Metadata()
```

##### `resetIamAlias` <a name="resetIamAlias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamAlias"></a>

```java
public void resetIamAlias()
```

##### `resetIamMetadata` <a name="resetIamMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamMetadata"></a>

```java
public void resetIamMetadata()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AwsAuthBackendConfigIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_config_identity.AwsAuthBackendConfigIdentity;

AwsAuthBackendConfigIdentity.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_config_identity.AwsAuthBackendConfigIdentity;

AwsAuthBackendConfigIdentity.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_config_identity.AwsAuthBackendConfigIdentity;

AwsAuthBackendConfigIdentity.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_config_identity.AwsAuthBackendConfigIdentity;

AwsAuthBackendConfigIdentity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AwsAuthBackendConfigIdentity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AwsAuthBackendConfigIdentity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AwsAuthBackendConfigIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AwsAuthBackendConfigIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendConfigIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2AliasInput">ec2AliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2MetadataInput">ec2MetadataInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAliasInput">iamAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadataInput">iamMetadataInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Alias">ec2Alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Metadata">ec2Metadata</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAlias">iamAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadata">iamMetadata</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `ec2AliasInput`<sup>Optional</sup> <a name="ec2AliasInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2AliasInput"></a>

```java
public java.lang.String getEc2AliasInput();
```

- *Type:* java.lang.String

---

##### `ec2MetadataInput`<sup>Optional</sup> <a name="ec2MetadataInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2MetadataInput"></a>

```java
public java.util.List<java.lang.String> getEc2MetadataInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `iamAliasInput`<sup>Optional</sup> <a name="iamAliasInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAliasInput"></a>

```java
public java.lang.String getIamAliasInput();
```

- *Type:* java.lang.String

---

##### `iamMetadataInput`<sup>Optional</sup> <a name="iamMetadataInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadataInput"></a>

```java
public java.util.List<java.lang.String> getIamMetadataInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `ec2Alias`<sup>Required</sup> <a name="ec2Alias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Alias"></a>

```java
public java.lang.String getEc2Alias();
```

- *Type:* java.lang.String

---

##### `ec2Metadata`<sup>Required</sup> <a name="ec2Metadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Metadata"></a>

```java
public java.util.List<java.lang.String> getEc2Metadata();
```

- *Type:* java.util.List<java.lang.String>

---

##### `iamAlias`<sup>Required</sup> <a name="iamAlias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAlias"></a>

```java
public java.lang.String getIamAlias();
```

- *Type:* java.lang.String

---

##### `iamMetadata`<sup>Required</sup> <a name="iamMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadata"></a>

```java
public java.util.List<java.lang.String> getIamMetadata();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendConfigIdentityConfig <a name="AwsAuthBackendConfigIdentityConfig" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_config_identity.AwsAuthBackendConfigIdentityConfig;

AwsAuthBackendConfigIdentityConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .backend(java.lang.String)
//  .ec2Alias(java.lang.String)
//  .ec2Metadata(java.util.List<java.lang.String>)
//  .iamAlias(java.lang.String)
//  .iamMetadata(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Alias">ec2Alias</a></code> | <code>java.lang.String</code> | Configures how to generate the identity alias when using the ec2 auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Metadata">ec2Metadata</a></code> | <code>java.util.List<java.lang.String></code> | The metadata to include on the token returned by the login endpoint. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamAlias">iamAlias</a></code> | <code>java.lang.String</code> | How to generate the identity alias when using the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamMetadata">iamMetadata</a></code> | <code>java.util.List<java.lang.String></code> | The metadata to include on the token returned by the login endpoint. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#id AwsAuthBackendConfigIdentity#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#backend AwsAuthBackendConfigIdentity#backend}

---

##### `ec2Alias`<sup>Optional</sup> <a name="ec2Alias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Alias"></a>

```java
public java.lang.String getEc2Alias();
```

- *Type:* java.lang.String

Configures how to generate the identity alias when using the ec2 auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#ec2_alias AwsAuthBackendConfigIdentity#ec2_alias}

---

##### `ec2Metadata`<sup>Optional</sup> <a name="ec2Metadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Metadata"></a>

```java
public java.util.List<java.lang.String> getEc2Metadata();
```

- *Type:* java.util.List<java.lang.String>

The metadata to include on the token returned by the login endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#ec2_metadata AwsAuthBackendConfigIdentity#ec2_metadata}

---

##### `iamAlias`<sup>Optional</sup> <a name="iamAlias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamAlias"></a>

```java
public java.lang.String getIamAlias();
```

- *Type:* java.lang.String

How to generate the identity alias when using the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#iam_alias AwsAuthBackendConfigIdentity#iam_alias}

---

##### `iamMetadata`<sup>Optional</sup> <a name="iamMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamMetadata"></a>

```java
public java.util.List<java.lang.String> getIamMetadata();
```

- *Type:* java.util.List<java.lang.String>

The metadata to include on the token returned by the login endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#iam_metadata AwsAuthBackendConfigIdentity#iam_metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#id AwsAuthBackendConfigIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/aws_auth_backend_config_identity#namespace AwsAuthBackendConfigIdentity#namespace}

---



