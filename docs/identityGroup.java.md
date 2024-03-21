# `identityGroup` Submodule <a name="`identityGroup` Submodule" id="@cdktf/provider-vault.identityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityGroup <a name="IdentityGroup" id="@cdktf/provider-vault.identityGroup.IdentityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group vault_identity_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group.IdentityGroup;

IdentityGroup.Builder.create(Construct scope, java.lang.String id)
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
//  .externalMemberEntityIds(java.lang.Boolean)
//  .externalMemberEntityIds(IResolvable)
//  .externalMemberGroupIds(java.lang.Boolean)
//  .externalMemberGroupIds(IResolvable)
//  .externalPolicies(java.lang.Boolean)
//  .externalPolicies(IResolvable)
//  .id(java.lang.String)
//  .memberEntityIds(java.util.List<java.lang.String>)
//  .memberGroupIds(java.util.List<java.lang.String>)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.externalMemberEntityIds">externalMemberEntityIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Manage member entities externally through `vault_identity_group_member_entity_ids`. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.externalMemberGroupIds">externalMemberGroupIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Manage member groups externally through `vault_identity_group_member_group_ids`. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.externalPolicies">externalPolicies</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Manage policies externally through `vault_identity_group_policies`, allows using group ID in assigned policies. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#id IdentityGroup#id}. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.memberEntityIds">memberEntityIds</a></code> | <code>java.util.List<java.lang.String></code> | Entity IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.memberGroupIds">memberGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Group IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata to be associated with the group. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the group. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | Policies to be tied to the group. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Type of the group, internal or external. Defaults to internal. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `externalMemberEntityIds`<sup>Optional</sup> <a name="externalMemberEntityIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.externalMemberEntityIds"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Manage member entities externally through `vault_identity_group_member_entity_ids`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#external_member_entity_ids IdentityGroup#external_member_entity_ids}

---

##### `externalMemberGroupIds`<sup>Optional</sup> <a name="externalMemberGroupIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.externalMemberGroupIds"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Manage member groups externally through `vault_identity_group_member_group_ids`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#external_member_group_ids IdentityGroup#external_member_group_ids}

---

##### `externalPolicies`<sup>Optional</sup> <a name="externalPolicies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.externalPolicies"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Manage policies externally through `vault_identity_group_policies`, allows using group ID in assigned policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#external_policies IdentityGroup#external_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#id IdentityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberEntityIds`<sup>Optional</sup> <a name="memberEntityIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.memberEntityIds"></a>

- *Type:* java.util.List<java.lang.String>

Entity IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#member_entity_ids IdentityGroup#member_entity_ids}

---

##### `memberGroupIds`<sup>Optional</sup> <a name="memberGroupIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.memberGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Group IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#member_group_ids IdentityGroup#member_group_ids}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata to be associated with the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#metadata IdentityGroup#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#name IdentityGroup#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#namespace IdentityGroup#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.policies"></a>

- *Type:* java.util.List<java.lang.String>

Policies to be tied to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#policies IdentityGroup#policies}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Type of the group, internal or external. Defaults to internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#type IdentityGroup#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalMemberEntityIds">resetExternalMemberEntityIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalMemberGroupIds">resetExternalMemberGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalPolicies">resetExternalPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetMemberEntityIds">resetMemberEntityIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetMemberGroupIds">resetMemberGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityGroup.IdentityGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityGroup.IdentityGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityGroup.IdentityGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityGroup.IdentityGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityGroup.IdentityGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityGroup.IdentityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.identityGroup.IdentityGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityGroup.IdentityGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityGroup.IdentityGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.identityGroup.IdentityGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityGroup.IdentityGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.identityGroup.IdentityGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.identityGroup.IdentityGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroup.IdentityGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.identityGroup.IdentityGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.identityGroup.IdentityGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityGroup.IdentityGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityGroup.IdentityGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.identityGroup.IdentityGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetExternalMemberEntityIds` <a name="resetExternalMemberEntityIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalMemberEntityIds"></a>

```java
public void resetExternalMemberEntityIds()
```

##### `resetExternalMemberGroupIds` <a name="resetExternalMemberGroupIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalMemberGroupIds"></a>

```java
public void resetExternalMemberGroupIds()
```

##### `resetExternalPolicies` <a name="resetExternalPolicies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalPolicies"></a>

```java
public void resetExternalPolicies()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetId"></a>

```java
public void resetId()
```

##### `resetMemberEntityIds` <a name="resetMemberEntityIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetMemberEntityIds"></a>

```java
public void resetMemberEntityIds()
```

##### `resetMemberGroupIds` <a name="resetMemberGroupIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetMemberGroupIds"></a>

```java
public void resetMemberGroupIds()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetPolicies"></a>

```java
public void resetPolicies()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group.IdentityGroup;

IdentityGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group.IdentityGroup;

IdentityGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group.IdentityGroup;

IdentityGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.identityGroup.IdentityGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group.IdentityGroup;

IdentityGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityGroup.IdentityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.identityGroup.IdentityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.identityGroup.IdentityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroup.IdentityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberEntityIdsInput">externalMemberEntityIdsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberGroupIdsInput">externalMemberGroupIdsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalPoliciesInput">externalPoliciesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberEntityIdsInput">memberEntityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberGroupIdsInput">memberGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.policiesInput">policiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberEntityIds">externalMemberEntityIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberGroupIds">externalMemberGroupIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalPolicies">externalPolicies</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberEntityIds">memberEntityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberGroupIds">memberGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `externalMemberEntityIdsInput`<sup>Optional</sup> <a name="externalMemberEntityIdsInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberEntityIdsInput"></a>

```java
public java.lang.Object getExternalMemberEntityIdsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalMemberGroupIdsInput`<sup>Optional</sup> <a name="externalMemberGroupIdsInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberGroupIdsInput"></a>

```java
public java.lang.Object getExternalMemberGroupIdsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalPoliciesInput`<sup>Optional</sup> <a name="externalPoliciesInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalPoliciesInput"></a>

```java
public java.lang.Object getExternalPoliciesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberEntityIdsInput`<sup>Optional</sup> <a name="memberEntityIdsInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberEntityIdsInput"></a>

```java
public java.util.List<java.lang.String> getMemberEntityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `memberGroupIdsInput`<sup>Optional</sup> <a name="memberGroupIdsInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getMemberGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.policiesInput"></a>

```java
public java.util.List<java.lang.String> getPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `externalMemberEntityIds`<sup>Required</sup> <a name="externalMemberEntityIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberEntityIds"></a>

```java
public java.lang.Object getExternalMemberEntityIds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalMemberGroupIds`<sup>Required</sup> <a name="externalMemberGroupIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberGroupIds"></a>

```java
public java.lang.Object getExternalMemberGroupIds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalPolicies`<sup>Required</sup> <a name="externalPolicies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalPolicies"></a>

```java
public java.lang.Object getExternalPolicies();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `memberEntityIds`<sup>Required</sup> <a name="memberEntityIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberEntityIds"></a>

```java
public java.util.List<java.lang.String> getMemberEntityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `memberGroupIds`<sup>Required</sup> <a name="memberGroupIds" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberGroupIds"></a>

```java
public java.util.List<java.lang.String> getMemberGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityGroupConfig <a name="IdentityGroupConfig" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_group.IdentityGroupConfig;

IdentityGroupConfig.builder()
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
//  .externalMemberEntityIds(java.lang.Boolean)
//  .externalMemberEntityIds(IResolvable)
//  .externalMemberGroupIds(java.lang.Boolean)
//  .externalMemberGroupIds(IResolvable)
//  .externalPolicies(java.lang.Boolean)
//  .externalPolicies(IResolvable)
//  .id(java.lang.String)
//  .memberEntityIds(java.util.List<java.lang.String>)
//  .memberGroupIds(java.util.List<java.lang.String>)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalMemberEntityIds">externalMemberEntityIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Manage member entities externally through `vault_identity_group_member_entity_ids`. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalMemberGroupIds">externalMemberGroupIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Manage member groups externally through `vault_identity_group_member_group_ids`. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalPolicies">externalPolicies</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Manage policies externally through `vault_identity_group_policies`, allows using group ID in assigned policies. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#id IdentityGroup#id}. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.memberEntityIds">memberEntityIds</a></code> | <code>java.util.List<java.lang.String></code> | Entity IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.memberGroupIds">memberGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Group IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata to be associated with the group. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the group. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | Policies to be tied to the group. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of the group, internal or external. Defaults to internal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `externalMemberEntityIds`<sup>Optional</sup> <a name="externalMemberEntityIds" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalMemberEntityIds"></a>

```java
public java.lang.Object getExternalMemberEntityIds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Manage member entities externally through `vault_identity_group_member_entity_ids`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#external_member_entity_ids IdentityGroup#external_member_entity_ids}

---

##### `externalMemberGroupIds`<sup>Optional</sup> <a name="externalMemberGroupIds" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalMemberGroupIds"></a>

```java
public java.lang.Object getExternalMemberGroupIds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Manage member groups externally through `vault_identity_group_member_group_ids`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#external_member_group_ids IdentityGroup#external_member_group_ids}

---

##### `externalPolicies`<sup>Optional</sup> <a name="externalPolicies" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalPolicies"></a>

```java
public java.lang.Object getExternalPolicies();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Manage policies externally through `vault_identity_group_policies`, allows using group ID in assigned policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#external_policies IdentityGroup#external_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#id IdentityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberEntityIds`<sup>Optional</sup> <a name="memberEntityIds" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.memberEntityIds"></a>

```java
public java.util.List<java.lang.String> getMemberEntityIds();
```

- *Type:* java.util.List<java.lang.String>

Entity IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#member_entity_ids IdentityGroup#member_entity_ids}

---

##### `memberGroupIds`<sup>Optional</sup> <a name="memberGroupIds" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.memberGroupIds"></a>

```java
public java.util.List<java.lang.String> getMemberGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Group IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#member_group_ids IdentityGroup#member_group_ids}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata to be associated with the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#metadata IdentityGroup#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#name IdentityGroup#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#namespace IdentityGroup#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

Policies to be tied to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#policies IdentityGroup#policies}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the group, internal or external. Defaults to internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/identity_group#type IdentityGroup#type}

---



