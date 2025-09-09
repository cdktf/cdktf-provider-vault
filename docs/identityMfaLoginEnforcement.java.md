# `identityMfaLoginEnforcement` Submodule <a name="`identityMfaLoginEnforcement` Submodule" id="@cdktf/provider-vault.identityMfaLoginEnforcement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaLoginEnforcement <a name="IdentityMfaLoginEnforcement" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement vault_identity_mfa_login_enforcement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_login_enforcement.IdentityMfaLoginEnforcement;

IdentityMfaLoginEnforcement.Builder.create(Construct scope, java.lang.String id)
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
    .mfaMethodIds(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .authMethodAccessors(java.util.List<java.lang.String>)
//  .authMethodTypes(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .identityEntityIds(java.util.List<java.lang.String>)
//  .identityGroupIds(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.mfaMethodIds">mfaMethodIds</a></code> | <code>java.util.List<java.lang.String></code> | Set of MFA method UUIDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Login enforcement name. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.authMethodAccessors">authMethodAccessors</a></code> | <code>java.util.List<java.lang.String></code> | Set of auth method accessor IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.authMethodTypes">authMethodTypes</a></code> | <code>java.util.List<java.lang.String></code> | Set of auth method types. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#id IdentityMfaLoginEnforcement#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.identityEntityIds">identityEntityIds</a></code> | <code>java.util.List<java.lang.String></code> | Set of identity entity IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.identityGroupIds">identityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Set of identity group IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mfaMethodIds`<sup>Required</sup> <a name="mfaMethodIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.mfaMethodIds"></a>

- *Type:* java.util.List<java.lang.String>

Set of MFA method UUIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#mfa_method_ids IdentityMfaLoginEnforcement#mfa_method_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Login enforcement name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#name IdentityMfaLoginEnforcement#name}

---

##### `authMethodAccessors`<sup>Optional</sup> <a name="authMethodAccessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.authMethodAccessors"></a>

- *Type:* java.util.List<java.lang.String>

Set of auth method accessor IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#auth_method_accessors IdentityMfaLoginEnforcement#auth_method_accessors}

---

##### `authMethodTypes`<sup>Optional</sup> <a name="authMethodTypes" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.authMethodTypes"></a>

- *Type:* java.util.List<java.lang.String>

Set of auth method types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#auth_method_types IdentityMfaLoginEnforcement#auth_method_types}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#id IdentityMfaLoginEnforcement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityEntityIds`<sup>Optional</sup> <a name="identityEntityIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.identityEntityIds"></a>

- *Type:* java.util.List<java.lang.String>

Set of identity entity IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#identity_entity_ids IdentityMfaLoginEnforcement#identity_entity_ids}

---

##### `identityGroupIds`<sup>Optional</sup> <a name="identityGroupIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.identityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Set of identity group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#identity_group_ids IdentityMfaLoginEnforcement#identity_group_ids}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#namespace IdentityMfaLoginEnforcement#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodAccessors">resetAuthMethodAccessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodTypes">resetAuthMethodTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityEntityIds">resetIdentityEntityIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityGroupIds">resetIdentityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAuthMethodAccessors` <a name="resetAuthMethodAccessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodAccessors"></a>

```java
public void resetAuthMethodAccessors()
```

##### `resetAuthMethodTypes` <a name="resetAuthMethodTypes" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodTypes"></a>

```java
public void resetAuthMethodTypes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityEntityIds` <a name="resetIdentityEntityIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityEntityIds"></a>

```java
public void resetIdentityEntityIds()
```

##### `resetIdentityGroupIds` <a name="resetIdentityGroupIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityGroupIds"></a>

```java
public void resetIdentityGroupIds()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityMfaLoginEnforcement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_login_enforcement.IdentityMfaLoginEnforcement;

IdentityMfaLoginEnforcement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_login_enforcement.IdentityMfaLoginEnforcement;

IdentityMfaLoginEnforcement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_login_enforcement.IdentityMfaLoginEnforcement;

IdentityMfaLoginEnforcement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_login_enforcement.IdentityMfaLoginEnforcement;

IdentityMfaLoginEnforcement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityMfaLoginEnforcement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityMfaLoginEnforcement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityMfaLoginEnforcement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityMfaLoginEnforcement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityMfaLoginEnforcement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespacePath">namespacePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessorsInput">authMethodAccessorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypesInput">authMethodTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIdsInput">identityEntityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIdsInput">identityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIdsInput">mfaMethodIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessors">authMethodAccessors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypes">authMethodTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIds">identityEntityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIds">identityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIds">mfaMethodIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespacePath"></a>

```java
public java.lang.String getNamespacePath();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `authMethodAccessorsInput`<sup>Optional</sup> <a name="authMethodAccessorsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessorsInput"></a>

```java
public java.util.List<java.lang.String> getAuthMethodAccessorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authMethodTypesInput`<sup>Optional</sup> <a name="authMethodTypesInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypesInput"></a>

```java
public java.util.List<java.lang.String> getAuthMethodTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityEntityIdsInput`<sup>Optional</sup> <a name="identityEntityIdsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityEntityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityGroupIdsInput`<sup>Optional</sup> <a name="identityGroupIdsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mfaMethodIdsInput`<sup>Optional</sup> <a name="mfaMethodIdsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIdsInput"></a>

```java
public java.util.List<java.lang.String> getMfaMethodIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `authMethodAccessors`<sup>Required</sup> <a name="authMethodAccessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessors"></a>

```java
public java.util.List<java.lang.String> getAuthMethodAccessors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authMethodTypes`<sup>Required</sup> <a name="authMethodTypes" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypes"></a>

```java
public java.util.List<java.lang.String> getAuthMethodTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityEntityIds`<sup>Required</sup> <a name="identityEntityIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityEntityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityGroupIds`<sup>Required</sup> <a name="identityGroupIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIds"></a>

```java
public java.util.List<java.lang.String> getIdentityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mfaMethodIds`<sup>Required</sup> <a name="mfaMethodIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIds"></a>

```java
public java.util.List<java.lang.String> getMfaMethodIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaLoginEnforcementConfig <a name="IdentityMfaLoginEnforcementConfig" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_login_enforcement.IdentityMfaLoginEnforcementConfig;

IdentityMfaLoginEnforcementConfig.builder()
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
    .mfaMethodIds(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .authMethodAccessors(java.util.List<java.lang.String>)
//  .authMethodTypes(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .identityEntityIds(java.util.List<java.lang.String>)
//  .identityGroupIds(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.mfaMethodIds">mfaMethodIds</a></code> | <code>java.util.List<java.lang.String></code> | Set of MFA method UUIDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.name">name</a></code> | <code>java.lang.String</code> | Login enforcement name. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodAccessors">authMethodAccessors</a></code> | <code>java.util.List<java.lang.String></code> | Set of auth method accessor IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodTypes">authMethodTypes</a></code> | <code>java.util.List<java.lang.String></code> | Set of auth method types. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#id IdentityMfaLoginEnforcement#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityEntityIds">identityEntityIds</a></code> | <code>java.util.List<java.lang.String></code> | Set of identity entity IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityGroupIds">identityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Set of identity group IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mfaMethodIds`<sup>Required</sup> <a name="mfaMethodIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.mfaMethodIds"></a>

```java
public java.util.List<java.lang.String> getMfaMethodIds();
```

- *Type:* java.util.List<java.lang.String>

Set of MFA method UUIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#mfa_method_ids IdentityMfaLoginEnforcement#mfa_method_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Login enforcement name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#name IdentityMfaLoginEnforcement#name}

---

##### `authMethodAccessors`<sup>Optional</sup> <a name="authMethodAccessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodAccessors"></a>

```java
public java.util.List<java.lang.String> getAuthMethodAccessors();
```

- *Type:* java.util.List<java.lang.String>

Set of auth method accessor IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#auth_method_accessors IdentityMfaLoginEnforcement#auth_method_accessors}

---

##### `authMethodTypes`<sup>Optional</sup> <a name="authMethodTypes" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodTypes"></a>

```java
public java.util.List<java.lang.String> getAuthMethodTypes();
```

- *Type:* java.util.List<java.lang.String>

Set of auth method types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#auth_method_types IdentityMfaLoginEnforcement#auth_method_types}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#id IdentityMfaLoginEnforcement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityEntityIds`<sup>Optional</sup> <a name="identityEntityIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityEntityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityEntityIds();
```

- *Type:* java.util.List<java.lang.String>

Set of identity entity IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#identity_entity_ids IdentityMfaLoginEnforcement#identity_entity_ids}

---

##### `identityGroupIds`<sup>Optional</sup> <a name="identityGroupIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityGroupIds"></a>

```java
public java.util.List<java.lang.String> getIdentityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Set of identity group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#identity_group_ids IdentityMfaLoginEnforcement#identity_group_ids}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_mfa_login_enforcement#namespace IdentityMfaLoginEnforcement#namespace}

---



