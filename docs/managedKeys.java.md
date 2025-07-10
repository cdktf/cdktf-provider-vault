# `managedKeys` Submodule <a name="`managedKeys` Submodule" id="@cdktf/provider-vault.managedKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKeys <a name="ManagedKeys" id="@cdktf/provider-vault.managedKeys.ManagedKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys vault_managed_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.managed_keys.ManagedKeys;

ManagedKeys.Builder.create(Construct scope, java.lang.String id)
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
//  .aws(IResolvable)
//  .aws(java.util.List<ManagedKeysAws>)
//  .azure(IResolvable)
//  .azure(java.util.List<ManagedKeysAzure>)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .pkcs(IResolvable)
//  .pkcs(java.util.List<ManagedKeysPkcs>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.aws">aws</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>></code> | aws block. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.azure">azure</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>></code> | azure block. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#id ManagedKeys#id}. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.pkcs">pkcs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>></code> | pkcs block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.aws"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#aws ManagedKeys#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.azure"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#azure ManagedKeys#azure}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#id ManagedKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#namespace ManagedKeys#namespace}

---

##### `pkcs`<sup>Optional</sup> <a name="pkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.pkcs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>>

pkcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#pkcs ManagedKeys#pkcs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.putPkcs">putPkcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetPkcs">resetPkcs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.managedKeys.ManagedKeys.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAws` <a name="putAws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAws"></a>

```java
public void putAws(IResolvable OR java.util.List<ManagedKeysAws> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAws.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>>

---

##### `putAzure` <a name="putAzure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAzure"></a>

```java
public void putAzure(IResolvable OR java.util.List<ManagedKeysAzure> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAzure.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>>

---

##### `putPkcs` <a name="putPkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putPkcs"></a>

```java
public void putPkcs(IResolvable OR java.util.List<ManagedKeysPkcs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putPkcs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>>

---

##### `resetAws` <a name="resetAws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetAws"></a>

```java
public void resetAws()
```

##### `resetAzure` <a name="resetAzure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetAzure"></a>

```java
public void resetAzure()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPkcs` <a name="resetPkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetPkcs"></a>

```java
public void resetPkcs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedKeys resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.managed_keys.ManagedKeys;

ManagedKeys.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.managed_keys.ManagedKeys;

ManagedKeys.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.managed_keys.ManagedKeys;

ManagedKeys.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.managed_keys.ManagedKeys;

ManagedKeys.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagedKeys.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ManagedKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagedKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagedKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ManagedKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList">ManagedKeysAwsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList">ManagedKeysAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcs">pkcs</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList">ManagedKeysPkcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.awsInput">awsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.azureInput">azureInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcsInput">pkcsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.aws"></a>

```java
public ManagedKeysAwsList getAws();
```

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList">ManagedKeysAwsList</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.azure"></a>

```java
public ManagedKeysAzureList getAzure();
```

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList">ManagedKeysAzureList</a>

---

##### `pkcs`<sup>Required</sup> <a name="pkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcs"></a>

```java
public ManagedKeysPkcsList getPkcs();
```

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList">ManagedKeysPkcsList</a>

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.awsInput"></a>

```java
public java.lang.Object getAwsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>>

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.azureInput"></a>

```java
public java.lang.Object getAzureInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pkcsInput`<sup>Optional</sup> <a name="pkcsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcsInput"></a>

```java
public java.lang.Object getPkcsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKeysAws <a name="ManagedKeysAws" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.managed_keys.ManagedKeysAws;

ManagedKeysAws.builder()
    .accessKey(java.lang.String)
    .keyBits(java.lang.String)
    .keyType(java.lang.String)
    .kmsKey(java.lang.String)
    .name(java.lang.String)
    .secretKey(java.lang.String)
//  .allowGenerateKey(java.lang.Boolean)
//  .allowGenerateKey(IResolvable)
//  .allowReplaceKey(java.lang.Boolean)
//  .allowReplaceKey(IResolvable)
//  .allowStoreKey(java.lang.Boolean)
//  .allowStoreKey(IResolvable)
//  .anyMount(java.lang.Boolean)
//  .anyMount(IResolvable)
//  .curve(java.lang.String)
//  .endpoint(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | The AWS access key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyBits">keyBits</a></code> | <code>java.lang.String</code> | The size in bits for an RSA key. This field is required when 'key_type' is 'RSA'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyType">keyType</a></code> | <code>java.lang.String</code> | The type of key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | An identifier for the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.name">name</a></code> | <code>java.lang.String</code> | A unique lowercase name that serves as identifying the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | The AWS secret key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowGenerateKey">allowGenerateKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowReplaceKey">allowReplaceKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowStoreKey">allowStoreKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.anyMount">anyMount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow usage from any mount point within the namespace if 'true'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.curve">curve</a></code> | <code>java.lang.String</code> | The curve to use for an ECDSA key. Used when key_type is 'ECDSA'. Required if 'allow_generate_key' is true. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Used to specify a custom AWS endpoint. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.region">region</a></code> | <code>java.lang.String</code> | The AWS region where the keys are stored (or will be stored). |

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

The AWS access key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#access_key ManagedKeys#access_key}

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyBits"></a>

```java
public java.lang.String getKeyBits();
```

- *Type:* java.lang.String

The size in bits for an RSA key. This field is required when 'key_type' is 'RSA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

The type of key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#key_type ManagedKeys#key_type}

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

An identifier for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#kms_key ManagedKeys#kms_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique lowercase name that serves as identifying the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#name ManagedKeys#name}

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

The AWS secret key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#secret_key ManagedKeys#secret_key}

---

##### `allowGenerateKey`<sup>Optional</sup> <a name="allowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowGenerateKey"></a>

```java
public java.lang.Object getAllowGenerateKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}

---

##### `allowReplaceKey`<sup>Optional</sup> <a name="allowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowReplaceKey"></a>

```java
public java.lang.Object getAllowReplaceKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}

---

##### `allowStoreKey`<sup>Optional</sup> <a name="allowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowStoreKey"></a>

```java
public java.lang.Object getAllowStoreKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}

---

##### `anyMount`<sup>Optional</sup> <a name="anyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.anyMount"></a>

```java
public java.lang.Object getAnyMount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow usage from any mount point within the namespace if 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}

---

##### `curve`<sup>Optional</sup> <a name="curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.curve"></a>

```java
public java.lang.String getCurve();
```

- *Type:* java.lang.String

The curve to use for an ECDSA key. Used when key_type is 'ECDSA'. Required if 'allow_generate_key' is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#curve ManagedKeys#curve}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Used to specify a custom AWS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#endpoint ManagedKeys#endpoint}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The AWS region where the keys are stored (or will be stored).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#region ManagedKeys#region}

---

### ManagedKeysAzure <a name="ManagedKeysAzure" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.managed_keys.ManagedKeysAzure;

ManagedKeysAzure.builder()
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .keyName(java.lang.String)
    .keyType(java.lang.String)
    .name(java.lang.String)
    .tenantId(java.lang.String)
    .vaultName(java.lang.String)
//  .allowGenerateKey(java.lang.Boolean)
//  .allowGenerateKey(IResolvable)
//  .allowReplaceKey(java.lang.Boolean)
//  .allowReplaceKey(IResolvable)
//  .allowStoreKey(java.lang.Boolean)
//  .allowStoreKey(IResolvable)
//  .anyMount(java.lang.Boolean)
//  .anyMount(IResolvable)
//  .environment(java.lang.String)
//  .keyBits(java.lang.String)
//  .resource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client id for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client secret for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyName">keyName</a></code> | <code>java.lang.String</code> | The Key Vault key to use for encryption and decryption. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyType">keyType</a></code> | <code>java.lang.String</code> | The type of key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.name">name</a></code> | <code>java.lang.String</code> | A unique lowercase name that serves as identifying the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The tenant id for the Azure Active Directory organization. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.vaultName">vaultName</a></code> | <code>java.lang.String</code> | The Key Vault vault to use the encryption keys for encryption and decryption. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowGenerateKey">allowGenerateKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowReplaceKey">allowReplaceKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowStoreKey">allowStoreKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.anyMount">anyMount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow usage from any mount point within the namespace if 'true'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.environment">environment</a></code> | <code>java.lang.String</code> | The Azure Cloud environment API endpoints to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyBits">keyBits</a></code> | <code>java.lang.String</code> | The size in bits for an RSA key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.resource">resource</a></code> | <code>java.lang.String</code> | The Azure Key Vault resource's DNS Suffix to connect to. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client id for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#client_id ManagedKeys#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The client secret for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#client_secret ManagedKeys#client_secret}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

The Key Vault key to use for encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#key_name ManagedKeys#key_name}

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

The type of key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#key_type ManagedKeys#key_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique lowercase name that serves as identifying the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#name ManagedKeys#name}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The tenant id for the Azure Active Directory organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#tenant_id ManagedKeys#tenant_id}

---

##### `vaultName`<sup>Required</sup> <a name="vaultName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.vaultName"></a>

```java
public java.lang.String getVaultName();
```

- *Type:* java.lang.String

The Key Vault vault to use the encryption keys for encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#vault_name ManagedKeys#vault_name}

---

##### `allowGenerateKey`<sup>Optional</sup> <a name="allowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowGenerateKey"></a>

```java
public java.lang.Object getAllowGenerateKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}

---

##### `allowReplaceKey`<sup>Optional</sup> <a name="allowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowReplaceKey"></a>

```java
public java.lang.Object getAllowReplaceKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}

---

##### `allowStoreKey`<sup>Optional</sup> <a name="allowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowStoreKey"></a>

```java
public java.lang.Object getAllowStoreKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}

---

##### `anyMount`<sup>Optional</sup> <a name="anyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.anyMount"></a>

```java
public java.lang.Object getAnyMount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow usage from any mount point within the namespace if 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The Azure Cloud environment API endpoints to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#environment ManagedKeys#environment}

---

##### `keyBits`<sup>Optional</sup> <a name="keyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyBits"></a>

```java
public java.lang.String getKeyBits();
```

- *Type:* java.lang.String

The size in bits for an RSA key.

This field is required when 'key_type' is 'RSA' or when 'allow_generate_key' is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

The Azure Key Vault resource's DNS Suffix to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#resource ManagedKeys#resource}

---

### ManagedKeysConfig <a name="ManagedKeysConfig" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.managed_keys.ManagedKeysConfig;

ManagedKeysConfig.builder()
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
//  .aws(IResolvable)
//  .aws(java.util.List<ManagedKeysAws>)
//  .azure(IResolvable)
//  .azure(java.util.List<ManagedKeysAzure>)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .pkcs(IResolvable)
//  .pkcs(java.util.List<ManagedKeysPkcs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.aws">aws</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>></code> | aws block. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.azure">azure</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>></code> | azure block. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#id ManagedKeys#id}. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.pkcs">pkcs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>></code> | pkcs block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.aws"></a>

```java
public java.lang.Object getAws();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#aws ManagedKeys#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.azure"></a>

```java
public java.lang.Object getAzure();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#azure ManagedKeys#azure}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#id ManagedKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#namespace ManagedKeys#namespace}

---

##### `pkcs`<sup>Optional</sup> <a name="pkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.pkcs"></a>

```java
public java.lang.Object getPkcs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>>

pkcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#pkcs ManagedKeys#pkcs}

---

### ManagedKeysPkcs <a name="ManagedKeysPkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.managed_keys.ManagedKeysPkcs;

ManagedKeysPkcs.builder()
    .keyId(java.lang.String)
    .keyLabel(java.lang.String)
    .library(java.lang.String)
    .mechanism(java.lang.String)
    .name(java.lang.String)
    .pin(java.lang.String)
//  .allowGenerateKey(java.lang.Boolean)
//  .allowGenerateKey(IResolvable)
//  .allowReplaceKey(java.lang.Boolean)
//  .allowReplaceKey(IResolvable)
//  .allowStoreKey(java.lang.Boolean)
//  .allowStoreKey(IResolvable)
//  .anyMount(java.lang.Boolean)
//  .anyMount(IResolvable)
//  .curve(java.lang.String)
//  .forceRwSession(java.lang.String)
//  .keyBits(java.lang.String)
//  .slot(java.lang.String)
//  .tokenLabel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyId">keyId</a></code> | <code>java.lang.String</code> | The id of a PKCS#11 key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyLabel">keyLabel</a></code> | <code>java.lang.String</code> | The label of the key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.library">library</a></code> | <code>java.lang.String</code> | The name of the kms_library stanza to use from Vault's config to lookup the local library path. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.mechanism">mechanism</a></code> | <code>java.lang.String</code> | The encryption/decryption mechanism to use, specified as a hexadecimal (prefixed by 0x) string. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.name">name</a></code> | <code>java.lang.String</code> | A unique lowercase name that serves as identifying the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.pin">pin</a></code> | <code>java.lang.String</code> | The PIN for login. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowGenerateKey">allowGenerateKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowReplaceKey">allowReplaceKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowStoreKey">allowStoreKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.anyMount">anyMount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow usage from any mount point within the namespace if 'true'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.curve">curve</a></code> | <code>java.lang.String</code> | Supplies the curve value when using the 'CKM_ECDSA' mechanism. Required if 'allow_generate_key' is true. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.forceRwSession">forceRwSession</a></code> | <code>java.lang.String</code> | Force all operations to open up a read-write session to the HSM. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyBits">keyBits</a></code> | <code>java.lang.String</code> | Supplies the size in bits of the key when using 'CKM_RSA_PKCS_PSS', 'CKM_RSA_PKCS_OAEP' or 'CKM_RSA_PKCS' as a value for 'mechanism'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.slot">slot</a></code> | <code>java.lang.String</code> | The slot number to use, specified as a string in a decimal format (e.g. '2305843009213693953'). |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.tokenLabel">tokenLabel</a></code> | <code>java.lang.String</code> | The slot token label to use. |

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

The id of a PKCS#11 key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#key_id ManagedKeys#key_id}

---

##### `keyLabel`<sup>Required</sup> <a name="keyLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyLabel"></a>

```java
public java.lang.String getKeyLabel();
```

- *Type:* java.lang.String

The label of the key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#key_label ManagedKeys#key_label}

---

##### `library`<sup>Required</sup> <a name="library" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.library"></a>

```java
public java.lang.String getLibrary();
```

- *Type:* java.lang.String

The name of the kms_library stanza to use from Vault's config to lookup the local library path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#library ManagedKeys#library}

---

##### `mechanism`<sup>Required</sup> <a name="mechanism" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.mechanism"></a>

```java
public java.lang.String getMechanism();
```

- *Type:* java.lang.String

The encryption/decryption mechanism to use, specified as a hexadecimal (prefixed by 0x) string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#mechanism ManagedKeys#mechanism}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique lowercase name that serves as identifying the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#name ManagedKeys#name}

---

##### `pin`<sup>Required</sup> <a name="pin" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.pin"></a>

```java
public java.lang.String getPin();
```

- *Type:* java.lang.String

The PIN for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#pin ManagedKeys#pin}

---

##### `allowGenerateKey`<sup>Optional</sup> <a name="allowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowGenerateKey"></a>

```java
public java.lang.Object getAllowGenerateKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}

---

##### `allowReplaceKey`<sup>Optional</sup> <a name="allowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowReplaceKey"></a>

```java
public java.lang.Object getAllowReplaceKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}

---

##### `allowStoreKey`<sup>Optional</sup> <a name="allowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowStoreKey"></a>

```java
public java.lang.Object getAllowStoreKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}

---

##### `anyMount`<sup>Optional</sup> <a name="anyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.anyMount"></a>

```java
public java.lang.Object getAnyMount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow usage from any mount point within the namespace if 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}

---

##### `curve`<sup>Optional</sup> <a name="curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.curve"></a>

```java
public java.lang.String getCurve();
```

- *Type:* java.lang.String

Supplies the curve value when using the 'CKM_ECDSA' mechanism. Required if 'allow_generate_key' is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#curve ManagedKeys#curve}

---

##### `forceRwSession`<sup>Optional</sup> <a name="forceRwSession" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.forceRwSession"></a>

```java
public java.lang.String getForceRwSession();
```

- *Type:* java.lang.String

Force all operations to open up a read-write session to the HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#force_rw_session ManagedKeys#force_rw_session}

---

##### `keyBits`<sup>Optional</sup> <a name="keyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyBits"></a>

```java
public java.lang.String getKeyBits();
```

- *Type:* java.lang.String

Supplies the size in bits of the key when using 'CKM_RSA_PKCS_PSS', 'CKM_RSA_PKCS_OAEP' or 'CKM_RSA_PKCS' as a value for 'mechanism'.

Required if 'allow_generate_key' is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}

---

##### `slot`<sup>Optional</sup> <a name="slot" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.slot"></a>

```java
public java.lang.String getSlot();
```

- *Type:* java.lang.String

The slot number to use, specified as a string in a decimal format (e.g. '2305843009213693953').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#slot ManagedKeys#slot}

---

##### `tokenLabel`<sup>Optional</sup> <a name="tokenLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.tokenLabel"></a>

```java
public java.lang.String getTokenLabel();
```

- *Type:* java.lang.String

The slot token label to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/managed_keys#token_label ManagedKeys#token_label}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKeysAwsList <a name="ManagedKeysAwsList" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.managed_keys.ManagedKeysAwsList;

new ManagedKeysAwsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.get"></a>

```java
public ManagedKeysAwsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>>

---


### ManagedKeysAwsOutputReference <a name="ManagedKeysAwsOutputReference" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.managed_keys.ManagedKeysAwsOutputReference;

new ManagedKeysAwsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowGenerateKey">resetAllowGenerateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowReplaceKey">resetAllowReplaceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowStoreKey">resetAllowStoreKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAnyMount">resetAnyMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetCurve">resetCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowGenerateKey` <a name="resetAllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowGenerateKey"></a>

```java
public void resetAllowGenerateKey()
```

##### `resetAllowReplaceKey` <a name="resetAllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowReplaceKey"></a>

```java
public void resetAllowReplaceKey()
```

##### `resetAllowStoreKey` <a name="resetAllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowStoreKey"></a>

```java
public void resetAllowStoreKey()
```

##### `resetAnyMount` <a name="resetAnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAnyMount"></a>

```java
public void resetAnyMount()
```

##### `resetCurve` <a name="resetCurve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetCurve"></a>

```java
public void resetCurve()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKeyInput">allowGenerateKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKeyInput">allowReplaceKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKeyInput">allowStoreKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMountInput">anyMountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curveInput">curveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBitsInput">keyBitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKeyInput">secretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKey">allowGenerateKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKey">allowReplaceKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKey">allowStoreKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMount">anyMount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curve">curve</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBits">keyBits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `allowGenerateKeyInput`<sup>Optional</sup> <a name="allowGenerateKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKeyInput"></a>

```java
public java.lang.Object getAllowGenerateKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowReplaceKeyInput`<sup>Optional</sup> <a name="allowReplaceKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKeyInput"></a>

```java
public java.lang.Object getAllowReplaceKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowStoreKeyInput`<sup>Optional</sup> <a name="allowStoreKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKeyInput"></a>

```java
public java.lang.Object getAllowStoreKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `anyMountInput`<sup>Optional</sup> <a name="anyMountInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMountInput"></a>

```java
public java.lang.Object getAnyMountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `curveInput`<sup>Optional</sup> <a name="curveInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curveInput"></a>

```java
public java.lang.String getCurveInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `keyBitsInput`<sup>Optional</sup> <a name="keyBitsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBitsInput"></a>

```java
public java.lang.String getKeyBitsInput();
```

- *Type:* java.lang.String

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKeyInput"></a>

```java
public java.lang.String getSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `allowGenerateKey`<sup>Required</sup> <a name="allowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKey"></a>

```java
public java.lang.Object getAllowGenerateKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowReplaceKey`<sup>Required</sup> <a name="allowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKey"></a>

```java
public java.lang.Object getAllowReplaceKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowStoreKey`<sup>Required</sup> <a name="allowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKey"></a>

```java
public java.lang.Object getAllowStoreKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `anyMount`<sup>Required</sup> <a name="anyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMount"></a>

```java
public java.lang.Object getAnyMount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `curve`<sup>Required</sup> <a name="curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curve"></a>

```java
public java.lang.String getCurve();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBits"></a>

```java
public java.lang.String getKeyBits();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>

---


### ManagedKeysAzureList <a name="ManagedKeysAzureList" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.managed_keys.ManagedKeysAzureList;

new ManagedKeysAzureList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.get"></a>

```java
public ManagedKeysAzureOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>>

---


### ManagedKeysAzureOutputReference <a name="ManagedKeysAzureOutputReference" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.managed_keys.ManagedKeysAzureOutputReference;

new ManagedKeysAzureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowGenerateKey">resetAllowGenerateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowReplaceKey">resetAllowReplaceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowStoreKey">resetAllowStoreKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAnyMount">resetAnyMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetKeyBits">resetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowGenerateKey` <a name="resetAllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowGenerateKey"></a>

```java
public void resetAllowGenerateKey()
```

##### `resetAllowReplaceKey` <a name="resetAllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowReplaceKey"></a>

```java
public void resetAllowReplaceKey()
```

##### `resetAllowStoreKey` <a name="resetAllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowStoreKey"></a>

```java
public void resetAllowStoreKey()
```

##### `resetAnyMount` <a name="resetAnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAnyMount"></a>

```java
public void resetAnyMount()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetKeyBits` <a name="resetKeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetKeyBits"></a>

```java
public void resetKeyBits()
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetResource"></a>

```java
public void resetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKeyInput">allowGenerateKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKeyInput">allowReplaceKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKeyInput">allowStoreKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMountInput">anyMountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBitsInput">keyBitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultNameInput">vaultNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKey">allowGenerateKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKey">allowReplaceKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKey">allowStoreKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMount">anyMount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBits">keyBits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultName">vaultName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `allowGenerateKeyInput`<sup>Optional</sup> <a name="allowGenerateKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKeyInput"></a>

```java
public java.lang.Object getAllowGenerateKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowReplaceKeyInput`<sup>Optional</sup> <a name="allowReplaceKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKeyInput"></a>

```java
public java.lang.Object getAllowReplaceKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowStoreKeyInput`<sup>Optional</sup> <a name="allowStoreKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKeyInput"></a>

```java
public java.lang.Object getAllowStoreKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `anyMountInput`<sup>Optional</sup> <a name="anyMountInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMountInput"></a>

```java
public java.lang.Object getAnyMountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `keyBitsInput`<sup>Optional</sup> <a name="keyBitsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBitsInput"></a>

```java
public java.lang.String getKeyBitsInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `vaultNameInput`<sup>Optional</sup> <a name="vaultNameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultNameInput"></a>

```java
public java.lang.String getVaultNameInput();
```

- *Type:* java.lang.String

---

##### `allowGenerateKey`<sup>Required</sup> <a name="allowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKey"></a>

```java
public java.lang.Object getAllowGenerateKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowReplaceKey`<sup>Required</sup> <a name="allowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKey"></a>

```java
public java.lang.Object getAllowReplaceKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowStoreKey`<sup>Required</sup> <a name="allowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKey"></a>

```java
public java.lang.Object getAllowStoreKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `anyMount`<sup>Required</sup> <a name="anyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMount"></a>

```java
public java.lang.Object getAnyMount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBits"></a>

```java
public java.lang.String getKeyBits();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `vaultName`<sup>Required</sup> <a name="vaultName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultName"></a>

```java
public java.lang.String getVaultName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>

---


### ManagedKeysPkcsList <a name="ManagedKeysPkcsList" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.managed_keys.ManagedKeysPkcsList;

new ManagedKeysPkcsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.get"></a>

```java
public ManagedKeysPkcsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>>

---


### ManagedKeysPkcsOutputReference <a name="ManagedKeysPkcsOutputReference" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.managed_keys.ManagedKeysPkcsOutputReference;

new ManagedKeysPkcsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowGenerateKey">resetAllowGenerateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowReplaceKey">resetAllowReplaceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowStoreKey">resetAllowStoreKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAnyMount">resetAnyMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetCurve">resetCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetForceRwSession">resetForceRwSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetKeyBits">resetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetSlot">resetSlot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetTokenLabel">resetTokenLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowGenerateKey` <a name="resetAllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowGenerateKey"></a>

```java
public void resetAllowGenerateKey()
```

##### `resetAllowReplaceKey` <a name="resetAllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowReplaceKey"></a>

```java
public void resetAllowReplaceKey()
```

##### `resetAllowStoreKey` <a name="resetAllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowStoreKey"></a>

```java
public void resetAllowStoreKey()
```

##### `resetAnyMount` <a name="resetAnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAnyMount"></a>

```java
public void resetAnyMount()
```

##### `resetCurve` <a name="resetCurve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetCurve"></a>

```java
public void resetCurve()
```

##### `resetForceRwSession` <a name="resetForceRwSession" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetForceRwSession"></a>

```java
public void resetForceRwSession()
```

##### `resetKeyBits` <a name="resetKeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetKeyBits"></a>

```java
public void resetKeyBits()
```

##### `resetSlot` <a name="resetSlot" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetSlot"></a>

```java
public void resetSlot()
```

##### `resetTokenLabel` <a name="resetTokenLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetTokenLabel"></a>

```java
public void resetTokenLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKeyInput">allowGenerateKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKeyInput">allowReplaceKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKeyInput">allowStoreKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMountInput">anyMountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curveInput">curveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSessionInput">forceRwSessionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBitsInput">keyBitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabelInput">keyLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.libraryInput">libraryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanismInput">mechanismInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pinInput">pinInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slotInput">slotInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabelInput">tokenLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKey">allowGenerateKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKey">allowReplaceKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKey">allowStoreKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMount">anyMount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curve">curve</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSession">forceRwSession</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBits">keyBits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabel">keyLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.library">library</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanism">mechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pin">pin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slot">slot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabel">tokenLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `allowGenerateKeyInput`<sup>Optional</sup> <a name="allowGenerateKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKeyInput"></a>

```java
public java.lang.Object getAllowGenerateKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowReplaceKeyInput`<sup>Optional</sup> <a name="allowReplaceKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKeyInput"></a>

```java
public java.lang.Object getAllowReplaceKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowStoreKeyInput`<sup>Optional</sup> <a name="allowStoreKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKeyInput"></a>

```java
public java.lang.Object getAllowStoreKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `anyMountInput`<sup>Optional</sup> <a name="anyMountInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMountInput"></a>

```java
public java.lang.Object getAnyMountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `curveInput`<sup>Optional</sup> <a name="curveInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curveInput"></a>

```java
public java.lang.String getCurveInput();
```

- *Type:* java.lang.String

---

##### `forceRwSessionInput`<sup>Optional</sup> <a name="forceRwSessionInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSessionInput"></a>

```java
public java.lang.String getForceRwSessionInput();
```

- *Type:* java.lang.String

---

##### `keyBitsInput`<sup>Optional</sup> <a name="keyBitsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBitsInput"></a>

```java
public java.lang.String getKeyBitsInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyLabelInput`<sup>Optional</sup> <a name="keyLabelInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabelInput"></a>

```java
public java.lang.String getKeyLabelInput();
```

- *Type:* java.lang.String

---

##### `libraryInput`<sup>Optional</sup> <a name="libraryInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.libraryInput"></a>

```java
public java.lang.String getLibraryInput();
```

- *Type:* java.lang.String

---

##### `mechanismInput`<sup>Optional</sup> <a name="mechanismInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanismInput"></a>

```java
public java.lang.String getMechanismInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pinInput`<sup>Optional</sup> <a name="pinInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pinInput"></a>

```java
public java.lang.String getPinInput();
```

- *Type:* java.lang.String

---

##### `slotInput`<sup>Optional</sup> <a name="slotInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slotInput"></a>

```java
public java.lang.String getSlotInput();
```

- *Type:* java.lang.String

---

##### `tokenLabelInput`<sup>Optional</sup> <a name="tokenLabelInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabelInput"></a>

```java
public java.lang.String getTokenLabelInput();
```

- *Type:* java.lang.String

---

##### `allowGenerateKey`<sup>Required</sup> <a name="allowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKey"></a>

```java
public java.lang.Object getAllowGenerateKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowReplaceKey`<sup>Required</sup> <a name="allowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKey"></a>

```java
public java.lang.Object getAllowReplaceKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowStoreKey`<sup>Required</sup> <a name="allowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKey"></a>

```java
public java.lang.Object getAllowStoreKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `anyMount`<sup>Required</sup> <a name="anyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMount"></a>

```java
public java.lang.Object getAnyMount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `curve`<sup>Required</sup> <a name="curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curve"></a>

```java
public java.lang.String getCurve();
```

- *Type:* java.lang.String

---

##### `forceRwSession`<sup>Required</sup> <a name="forceRwSession" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSession"></a>

```java
public java.lang.String getForceRwSession();
```

- *Type:* java.lang.String

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBits"></a>

```java
public java.lang.String getKeyBits();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `keyLabel`<sup>Required</sup> <a name="keyLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabel"></a>

```java
public java.lang.String getKeyLabel();
```

- *Type:* java.lang.String

---

##### `library`<sup>Required</sup> <a name="library" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.library"></a>

```java
public java.lang.String getLibrary();
```

- *Type:* java.lang.String

---

##### `mechanism`<sup>Required</sup> <a name="mechanism" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanism"></a>

```java
public java.lang.String getMechanism();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pin`<sup>Required</sup> <a name="pin" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pin"></a>

```java
public java.lang.String getPin();
```

- *Type:* java.lang.String

---

##### `slot`<sup>Required</sup> <a name="slot" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slot"></a>

```java
public java.lang.String getSlot();
```

- *Type:* java.lang.String

---

##### `tokenLabel`<sup>Required</sup> <a name="tokenLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabel"></a>

```java
public java.lang.String getTokenLabel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>

---



