# `identityGroupMemberGroupIds` Submodule <a name="`identityGroupMemberGroupIds` Submodule" id="@cdktf/provider-vault.identityGroupMemberGroupIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityGroupMemberGroupIds <a name="IdentityGroupMemberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_member_group_ids vault_identity_group_member_group_ids}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group_member_group_ids.IdentityGroupMemberGroupIds;

IdentityGroupMemberGroupIds.Builder.create(Construct scope, java.lang.String id)
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
    .groupId(java.lang.String)
//  .exclusive(java.lang.Boolean)
//  .exclusive(IResolvable)
//  .id(java.lang.String)
//  .memberGroupIds(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.String</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.exclusive">exclusive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, allows the resource to manage member group ids exclusively. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_member_group_ids#id IdentityGroupMemberGroupIds#id}. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.memberGroupIds">memberGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Group IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.groupId"></a>

- *Type:* java.lang.String

ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_member_group_ids#group_id IdentityGroupMemberGroupIds#group_id}

---

##### `exclusive`<sup>Optional</sup> <a name="exclusive" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.exclusive"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, allows the resource to manage member group ids exclusively.

Beware of race conditions when disabling exclusive management

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_member_group_ids#exclusive IdentityGroupMemberGroupIds#exclusive}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_member_group_ids#id IdentityGroupMemberGroupIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberGroupIds`<sup>Optional</sup> <a name="memberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.memberGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Group IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_member_group_ids#member_group_ids IdentityGroupMemberGroupIds#member_group_ids}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_member_group_ids#namespace IdentityGroupMemberGroupIds#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetExclusive">resetExclusive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetMemberGroupIds">resetMemberGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetExclusive` <a name="resetExclusive" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetExclusive"></a>

```java
public void resetExclusive()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetId"></a>

```java
public void resetId()
```

##### `resetMemberGroupIds` <a name="resetMemberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetMemberGroupIds"></a>

```java
public void resetMemberGroupIds()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityGroupMemberGroupIds resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group_member_group_ids.IdentityGroupMemberGroupIds;

IdentityGroupMemberGroupIds.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group_member_group_ids.IdentityGroupMemberGroupIds;

IdentityGroupMemberGroupIds.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group_member_group_ids.IdentityGroupMemberGroupIds;

IdentityGroupMemberGroupIds.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group_member_group_ids.IdentityGroupMemberGroupIds;

IdentityGroupMemberGroupIds.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityGroupMemberGroupIds.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityGroupMemberGroupIds resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityGroupMemberGroupIds to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityGroupMemberGroupIds that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_member_group_ids#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityGroupMemberGroupIds to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusiveInput">exclusiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIdsInput">memberGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusive">exclusive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIds">memberGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exclusiveInput`<sup>Optional</sup> <a name="exclusiveInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusiveInput"></a>

```java
public java.lang.Object getExclusiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberGroupIdsInput`<sup>Optional</sup> <a name="memberGroupIdsInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getMemberGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `exclusive`<sup>Required</sup> <a name="exclusive" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusive"></a>

```java
public java.lang.Object getExclusive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `memberGroupIds`<sup>Required</sup> <a name="memberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIds"></a>

```java
public java.util.List<java.lang.String> getMemberGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityGroupMemberGroupIdsConfig <a name="IdentityGroupMemberGroupIdsConfig" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group_member_group_ids.IdentityGroupMemberGroupIdsConfig;

IdentityGroupMemberGroupIdsConfig.builder()
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
    .groupId(java.lang.String)
//  .exclusive(java.lang.Boolean)
//  .exclusive(IResolvable)
//  .id(java.lang.String)
//  .memberGroupIds(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.groupId">groupId</a></code> | <code>java.lang.String</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.exclusive">exclusive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, allows the resource to manage member group ids exclusively. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_member_group_ids#id IdentityGroupMemberGroupIds#id}. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.memberGroupIds">memberGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Group IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_member_group_ids#group_id IdentityGroupMemberGroupIds#group_id}

---

##### `exclusive`<sup>Optional</sup> <a name="exclusive" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.exclusive"></a>

```java
public java.lang.Object getExclusive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, allows the resource to manage member group ids exclusively.

Beware of race conditions when disabling exclusive management

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_member_group_ids#exclusive IdentityGroupMemberGroupIds#exclusive}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_member_group_ids#id IdentityGroupMemberGroupIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberGroupIds`<sup>Optional</sup> <a name="memberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.memberGroupIds"></a>

```java
public java.util.List<java.lang.String> getMemberGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Group IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_member_group_ids#member_group_ids IdentityGroupMemberGroupIds#member_group_ids}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group_member_group_ids#namespace IdentityGroupMemberGroupIds#namespace}

---



