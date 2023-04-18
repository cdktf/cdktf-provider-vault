# `vault_identity_group_member_entity_ids`

Refer to the Terraform Registory for docs: [`vault_identity_group_member_entity_ids`](https://www.terraform.io/docs/providers/vault/r/identity_group_member_entity_ids).

# `identityGroupMemberEntityIds` Submodule <a name="`identityGroupMemberEntityIds` Submodule" id="@cdktf/provider-vault.identityGroupMemberEntityIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityGroupMemberEntityIds <a name="IdentityGroupMemberEntityIds" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_entity_ids vault_identity_group_member_entity_ids}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group_member_entity_ids.IdentityGroupMemberEntityIds;

IdentityGroupMemberEntityIds.Builder.create(Construct scope, java.lang.String id)
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
    .groupId(java.lang.String)
//  .exclusive(java.lang.Boolean)
//  .exclusive(IResolvable)
//  .id(java.lang.String)
//  .memberEntityIds(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.String</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.exclusive">exclusive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, allows the resource to manage member entity ids exclusively. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_entity_ids#id IdentityGroupMemberEntityIds#id}. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.memberEntityIds">memberEntityIds</a></code> | <code>java.util.List<java.lang.String></code> | Entity IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.groupId"></a>

- *Type:* java.lang.String

ID of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_entity_ids#group_id IdentityGroupMemberEntityIds#group_id}

---

##### `exclusive`<sup>Optional</sup> <a name="exclusive" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.exclusive"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, allows the resource to manage member entity ids exclusively.

Beware of race conditions when disabling exclusive management

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_entity_ids#exclusive IdentityGroupMemberEntityIds#exclusive}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_entity_ids#id IdentityGroupMemberEntityIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberEntityIds`<sup>Optional</sup> <a name="memberEntityIds" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.memberEntityIds"></a>

- *Type:* java.util.List<java.lang.String>

Entity IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_entity_ids#member_entity_ids IdentityGroupMemberEntityIds#member_entity_ids}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_entity_ids#namespace IdentityGroupMemberEntityIds#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetExclusive">resetExclusive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetMemberEntityIds">resetMemberEntityIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetExclusive` <a name="resetExclusive" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetExclusive"></a>

```java
public void resetExclusive()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetId"></a>

```java
public void resetId()
```

##### `resetMemberEntityIds` <a name="resetMemberEntityIds" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetMemberEntityIds"></a>

```java
public void resetMemberEntityIds()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group_member_entity_ids.IdentityGroupMemberEntityIds;

IdentityGroupMemberEntityIds.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group_member_entity_ids.IdentityGroupMemberEntityIds;

IdentityGroupMemberEntityIds.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group_member_entity_ids.IdentityGroupMemberEntityIds;

IdentityGroupMemberEntityIds.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusiveInput">exclusiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIdsInput">memberEntityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusive">exclusive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIds">memberEntityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `exclusiveInput`<sup>Optional</sup> <a name="exclusiveInput" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusiveInput"></a>

```java
public java.lang.Object getExclusiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberEntityIdsInput`<sup>Optional</sup> <a name="memberEntityIdsInput" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIdsInput"></a>

```java
public java.util.List<java.lang.String> getMemberEntityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `exclusive`<sup>Required</sup> <a name="exclusive" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusive"></a>

```java
public java.lang.Object getExclusive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `memberEntityIds`<sup>Required</sup> <a name="memberEntityIds" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIds"></a>

```java
public java.util.List<java.lang.String> getMemberEntityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityGroupMemberEntityIdsConfig <a name="IdentityGroupMemberEntityIdsConfig" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group_member_entity_ids.IdentityGroupMemberEntityIdsConfig;

IdentityGroupMemberEntityIdsConfig.builder()
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
    .groupId(java.lang.String)
//  .exclusive(java.lang.Boolean)
//  .exclusive(IResolvable)
//  .id(java.lang.String)
//  .memberEntityIds(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.groupId">groupId</a></code> | <code>java.lang.String</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.exclusive">exclusive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, allows the resource to manage member entity ids exclusively. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_entity_ids#id IdentityGroupMemberEntityIds#id}. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.memberEntityIds">memberEntityIds</a></code> | <code>java.util.List<java.lang.String></code> | Entity IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

ID of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_entity_ids#group_id IdentityGroupMemberEntityIds#group_id}

---

##### `exclusive`<sup>Optional</sup> <a name="exclusive" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.exclusive"></a>

```java
public java.lang.Object getExclusive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, allows the resource to manage member entity ids exclusively.

Beware of race conditions when disabling exclusive management

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_entity_ids#exclusive IdentityGroupMemberEntityIds#exclusive}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_entity_ids#id IdentityGroupMemberEntityIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberEntityIds`<sup>Optional</sup> <a name="memberEntityIds" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.memberEntityIds"></a>

```java
public java.util.List<java.lang.String> getMemberEntityIds();
```

- *Type:* java.util.List<java.lang.String>

Entity IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_entity_ids#member_entity_ids IdentityGroupMemberEntityIds#member_entity_ids}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_group_member_entity_ids#namespace IdentityGroupMemberEntityIds#namespace}

---



