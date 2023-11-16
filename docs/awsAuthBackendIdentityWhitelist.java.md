# `vault_aws_auth_backend_identity_whitelist`

Refer to the Terraform Registory for docs: [`vault_aws_auth_backend_identity_whitelist`](https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_identity_whitelist).

# `awsAuthBackendIdentityWhitelist` Submodule <a name="`awsAuthBackendIdentityWhitelist` Submodule" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendIdentityWhitelist <a name="AwsAuthBackendIdentityWhitelist" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_identity_whitelist vault_aws_auth_backend_identity_whitelist}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_identity_whitelist.AwsAuthBackendIdentityWhitelist;

AwsAuthBackendIdentityWhitelist.Builder.create(Construct scope, java.lang.String id)
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
//  .backend(java.lang.String)
//  .disablePeriodicTidy(java.lang.Boolean)
//  .disablePeriodicTidy(IResolvable)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .safetyBuffer(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.disablePeriodicTidy">disablePeriodicTidy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, disables the periodic tidying of the identiy whitelist entries. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_identity_whitelist#id AwsAuthBackendIdentityWhitelist#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.safetyBuffer">safetyBuffer</a></code> | <code>java.lang.Number</code> | The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_identity_whitelist#backend AwsAuthBackendIdentityWhitelist#backend}

---

##### `disablePeriodicTidy`<sup>Optional</sup> <a name="disablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.disablePeriodicTidy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, disables the periodic tidying of the identiy whitelist entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_identity_whitelist#disable_periodic_tidy AwsAuthBackendIdentityWhitelist#disable_periodic_tidy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_identity_whitelist#id AwsAuthBackendIdentityWhitelist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_identity_whitelist#namespace AwsAuthBackendIdentityWhitelist#namespace}

---

##### `safetyBuffer`<sup>Optional</sup> <a name="safetyBuffer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.safetyBuffer"></a>

- *Type:* java.lang.Number

The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_identity_whitelist#safety_buffer AwsAuthBackendIdentityWhitelist#safety_buffer}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetDisablePeriodicTidy">resetDisablePeriodicTidy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetSafetyBuffer">resetSafetyBuffer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetDisablePeriodicTidy` <a name="resetDisablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetDisablePeriodicTidy"></a>

```java
public void resetDisablePeriodicTidy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetSafetyBuffer` <a name="resetSafetyBuffer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetSafetyBuffer"></a>

```java
public void resetSafetyBuffer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AwsAuthBackendIdentityWhitelist resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_identity_whitelist.AwsAuthBackendIdentityWhitelist;

AwsAuthBackendIdentityWhitelist.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_identity_whitelist.AwsAuthBackendIdentityWhitelist;

AwsAuthBackendIdentityWhitelist.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_identity_whitelist.AwsAuthBackendIdentityWhitelist;

AwsAuthBackendIdentityWhitelist.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_identity_whitelist.AwsAuthBackendIdentityWhitelist;

AwsAuthBackendIdentityWhitelist.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AwsAuthBackendIdentityWhitelist.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AwsAuthBackendIdentityWhitelist resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AwsAuthBackendIdentityWhitelist to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AwsAuthBackendIdentityWhitelist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_identity_whitelist#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendIdentityWhitelist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidyInput">disablePeriodicTidyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBufferInput">safetyBufferInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidy">disablePeriodicTidy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBuffer">safetyBuffer</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `disablePeriodicTidyInput`<sup>Optional</sup> <a name="disablePeriodicTidyInput" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidyInput"></a>

```java
public java.lang.Object getDisablePeriodicTidyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `safetyBufferInput`<sup>Optional</sup> <a name="safetyBufferInput" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBufferInput"></a>

```java
public java.lang.Number getSafetyBufferInput();
```

- *Type:* java.lang.Number

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `disablePeriodicTidy`<sup>Required</sup> <a name="disablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidy"></a>

```java
public java.lang.Object getDisablePeriodicTidy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `safetyBuffer`<sup>Required</sup> <a name="safetyBuffer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBuffer"></a>

```java
public java.lang.Number getSafetyBuffer();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendIdentityWhitelistConfig <a name="AwsAuthBackendIdentityWhitelistConfig" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_identity_whitelist.AwsAuthBackendIdentityWhitelistConfig;

AwsAuthBackendIdentityWhitelistConfig.builder()
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
//  .backend(java.lang.String)
//  .disablePeriodicTidy(java.lang.Boolean)
//  .disablePeriodicTidy(IResolvable)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .safetyBuffer(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.disablePeriodicTidy">disablePeriodicTidy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, disables the periodic tidying of the identiy whitelist entries. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_identity_whitelist#id AwsAuthBackendIdentityWhitelist#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.safetyBuffer">safetyBuffer</a></code> | <code>java.lang.Number</code> | The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_identity_whitelist#backend AwsAuthBackendIdentityWhitelist#backend}

---

##### `disablePeriodicTidy`<sup>Optional</sup> <a name="disablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.disablePeriodicTidy"></a>

```java
public java.lang.Object getDisablePeriodicTidy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, disables the periodic tidying of the identiy whitelist entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_identity_whitelist#disable_periodic_tidy AwsAuthBackendIdentityWhitelist#disable_periodic_tidy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_identity_whitelist#id AwsAuthBackendIdentityWhitelist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_identity_whitelist#namespace AwsAuthBackendIdentityWhitelist#namespace}

---

##### `safetyBuffer`<sup>Optional</sup> <a name="safetyBuffer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.safetyBuffer"></a>

```java
public java.lang.Number getSafetyBuffer();
```

- *Type:* java.lang.Number

The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_identity_whitelist#safety_buffer AwsAuthBackendIdentityWhitelist#safety_buffer}

---



