# `identityEntity` Submodule <a name="`identityEntity` Submodule" id="@cdktf/provider-vault.identityEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityEntity <a name="IdentityEntity" id="@cdktf/provider-vault.identityEntity.IdentityEntity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity vault_identity_entity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_entity.IdentityEntity;

IdentityEntity.Builder.create(Construct scope, java.lang.String id)
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
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .externalPolicies(java.lang.Boolean)
//  .externalPolicies(IResolvable)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the entity is disabled. Disabled entities' associated tokens cannot be used, but are not revoked. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.externalPolicies">externalPolicies</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Manage policies externally through `vault_identity_entity_policies`. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#id IdentityEntity#id}. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata to be associated with the entity. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the entity. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | Policies to be tied to the entity. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the entity is disabled. Disabled entities' associated tokens cannot be used, but are not revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#disabled IdentityEntity#disabled}

---

##### `externalPolicies`<sup>Optional</sup> <a name="externalPolicies" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.externalPolicies"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Manage policies externally through `vault_identity_entity_policies`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#external_policies IdentityEntity#external_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#id IdentityEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata to be associated with the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#metadata IdentityEntity#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#name IdentityEntity#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#namespace IdentityEntity#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.identityEntity.IdentityEntity.Initializer.parameter.policies"></a>

- *Type:* java.util.List<java.lang.String>

Policies to be tied to the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#policies IdentityEntity#policies}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.resetExternalPolicies">resetExternalPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.resetPolicies">resetPolicies</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityEntity.IdentityEntity.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityEntity.IdentityEntity.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityEntity.IdentityEntity.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityEntity.IdentityEntity.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityEntity.IdentityEntity.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityEntity.IdentityEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityEntity.IdentityEntity.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.identityEntity.IdentityEntity.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityEntity.IdentityEntity.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityEntity.IdentityEntity.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.identityEntity.IdentityEntity.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityEntity.IdentityEntity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.identityEntity.IdentityEntity.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.identityEntity.IdentityEntity.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityEntity.IdentityEntity.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityEntity.IdentityEntity.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityEntity.IdentityEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.identityEntity.IdentityEntity.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityEntity.IdentityEntity.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.identityEntity.IdentityEntity.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityEntity.IdentityEntity.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityEntity.IdentityEntity.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.identityEntity.IdentityEntity.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityEntity.IdentityEntity.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-vault.identityEntity.IdentityEntity.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetExternalPolicies` <a name="resetExternalPolicies" id="@cdktf/provider-vault.identityEntity.IdentityEntity.resetExternalPolicies"></a>

```java
public void resetExternalPolicies()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityEntity.IdentityEntity.resetId"></a>

```java
public void resetId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-vault.identityEntity.IdentityEntity.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-vault.identityEntity.IdentityEntity.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityEntity.IdentityEntity.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-vault.identityEntity.IdentityEntity.resetPolicies"></a>

```java
public void resetPolicies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityEntity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityEntity.IdentityEntity.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_entity.IdentityEntity;

IdentityEntity.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityEntity.IdentityEntity.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityEntity.IdentityEntity.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_entity.IdentityEntity;

IdentityEntity.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityEntity.IdentityEntity.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityEntity.IdentityEntity.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_entity.IdentityEntity;

IdentityEntity.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityEntity.IdentityEntity.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.identityEntity.IdentityEntity.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_entity.IdentityEntity;

IdentityEntity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityEntity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityEntity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityEntity.IdentityEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.identityEntity.IdentityEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityEntity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.identityEntity.IdentityEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityEntity.IdentityEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.externalPoliciesInput">externalPoliciesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.policiesInput">policiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.externalPolicies">externalPolicies</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalPoliciesInput`<sup>Optional</sup> <a name="externalPoliciesInput" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.externalPoliciesInput"></a>

```java
public java.lang.Object getExternalPoliciesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.policiesInput"></a>

```java
public java.util.List<java.lang.String> getPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalPolicies`<sup>Required</sup> <a name="externalPolicies" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.externalPolicies"></a>

```java
public java.lang.Object getExternalPolicies();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntity.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityEntity.IdentityEntity.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityEntityConfig <a name="IdentityEntityConfig" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_entity.IdentityEntityConfig;

IdentityEntityConfig.builder()
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
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .externalPolicies(java.lang.Boolean)
//  .externalPolicies(IResolvable)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the entity is disabled. Disabled entities' associated tokens cannot be used, but are not revoked. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.externalPolicies">externalPolicies</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Manage policies externally through `vault_identity_entity_policies`. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#id IdentityEntity#id}. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata to be associated with the entity. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the entity. |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | Policies to be tied to the entity. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the entity is disabled. Disabled entities' associated tokens cannot be used, but are not revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#disabled IdentityEntity#disabled}

---

##### `externalPolicies`<sup>Optional</sup> <a name="externalPolicies" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.externalPolicies"></a>

```java
public java.lang.Object getExternalPolicies();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Manage policies externally through `vault_identity_entity_policies`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#external_policies IdentityEntity#external_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#id IdentityEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata to be associated with the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#metadata IdentityEntity#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#name IdentityEntity#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#namespace IdentityEntity#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.identityEntity.IdentityEntityConfig.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

Policies to be tied to the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_entity#policies IdentityEntity#policies}

---



