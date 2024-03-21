# `ldapSecretBackendStaticRole` Submodule <a name="`ldapSecretBackendStaticRole` Submodule" id="@cdktf/provider-vault.ldapSecretBackendStaticRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackendStaticRole <a name="LdapSecretBackendStaticRole" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role vault_ldap_secret_backend_static_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_static_role.LdapSecretBackendStaticRole;

LdapSecretBackendStaticRole.Builder.create(Construct scope, java.lang.String id)
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
    .roleName(java.lang.String)
    .rotationPeriod(java.lang.Number)
    .username(java.lang.String)
//  .dn(java.lang.String)
//  .id(java.lang.String)
//  .mount(java.lang.String)
//  .namespace(java.lang.String)
//  .skipImportRotation(java.lang.Boolean)
//  .skipImportRotation(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | How often Vault should rotate the password of the user entry. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The username of the existing LDAP entry to manage password rotation for. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.dn">dn</a></code> | <code>java.lang.String</code> | Distinguished name (DN) of the existing LDAP entry to manage password rotation for. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#id LdapSecretBackendStaticRole#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.skipImportRotation">skipImportRotation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip rotation of the password on import. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#role_name LdapSecretBackendStaticRole#role_name}

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.rotationPeriod"></a>

- *Type:* java.lang.Number

How often Vault should rotate the password of the user entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#rotation_period LdapSecretBackendStaticRole#rotation_period}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The username of the existing LDAP entry to manage password rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#username LdapSecretBackendStaticRole#username}

---

##### `dn`<sup>Optional</sup> <a name="dn" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.dn"></a>

- *Type:* java.lang.String

Distinguished name (DN) of the existing LDAP entry to manage password rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#dn LdapSecretBackendStaticRole#dn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#id LdapSecretBackendStaticRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#mount LdapSecretBackendStaticRole#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#namespace LdapSecretBackendStaticRole#namespace}

---

##### `skipImportRotation`<sup>Optional</sup> <a name="skipImportRotation" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.skipImportRotation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip rotation of the password on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#skip_import_rotation LdapSecretBackendStaticRole#skip_import_rotation}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetDn">resetDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetMount">resetMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetSkipImportRotation">resetSkipImportRotation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDn` <a name="resetDn" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetDn"></a>

```java
public void resetDn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetId"></a>

```java
public void resetId()
```

##### `resetMount` <a name="resetMount" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetMount"></a>

```java
public void resetMount()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetSkipImportRotation` <a name="resetSkipImportRotation" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetSkipImportRotation"></a>

```java
public void resetSkipImportRotation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LdapSecretBackendStaticRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_static_role.LdapSecretBackendStaticRole;

LdapSecretBackendStaticRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_static_role.LdapSecretBackendStaticRole;

LdapSecretBackendStaticRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_static_role.LdapSecretBackendStaticRole;

LdapSecretBackendStaticRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_static_role.LdapSecretBackendStaticRole;

LdapSecretBackendStaticRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LdapSecretBackendStaticRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LdapSecretBackendStaticRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LdapSecretBackendStaticRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LdapSecretBackendStaticRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LdapSecretBackendStaticRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dnInput">dnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.skipImportRotationInput">skipImportRotationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dn">dn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.skipImportRotation">skipImportRotation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnInput`<sup>Optional</sup> <a name="dnInput" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dnInput"></a>

```java
public java.lang.String getDnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriodInput"></a>

```java
public java.lang.Number getRotationPeriodInput();
```

- *Type:* java.lang.Number

---

##### `skipImportRotationInput`<sup>Optional</sup> <a name="skipImportRotationInput" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.skipImportRotationInput"></a>

```java
public java.lang.Object getSkipImportRotationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dn"></a>

```java
public java.lang.String getDn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriod"></a>

```java
public java.lang.Number getRotationPeriod();
```

- *Type:* java.lang.Number

---

##### `skipImportRotation`<sup>Required</sup> <a name="skipImportRotation" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.skipImportRotation"></a>

```java
public java.lang.Object getSkipImportRotation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendStaticRoleConfig <a name="LdapSecretBackendStaticRoleConfig" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_static_role.LdapSecretBackendStaticRoleConfig;

LdapSecretBackendStaticRoleConfig.builder()
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
    .roleName(java.lang.String)
    .rotationPeriod(java.lang.Number)
    .username(java.lang.String)
//  .dn(java.lang.String)
//  .id(java.lang.String)
//  .mount(java.lang.String)
//  .namespace(java.lang.String)
//  .skipImportRotation(java.lang.Boolean)
//  .skipImportRotation(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | How often Vault should rotate the password of the user entry. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.username">username</a></code> | <code>java.lang.String</code> | The username of the existing LDAP entry to manage password rotation for. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dn">dn</a></code> | <code>java.lang.String</code> | Distinguished name (DN) of the existing LDAP entry to manage password rotation for. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#id LdapSecretBackendStaticRole#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.skipImportRotation">skipImportRotation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip rotation of the password on import. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#role_name LdapSecretBackendStaticRole#role_name}

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationPeriod"></a>

```java
public java.lang.Number getRotationPeriod();
```

- *Type:* java.lang.Number

How often Vault should rotate the password of the user entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#rotation_period LdapSecretBackendStaticRole#rotation_period}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username of the existing LDAP entry to manage password rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#username LdapSecretBackendStaticRole#username}

---

##### `dn`<sup>Optional</sup> <a name="dn" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dn"></a>

```java
public java.lang.String getDn();
```

- *Type:* java.lang.String

Distinguished name (DN) of the existing LDAP entry to manage password rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#dn LdapSecretBackendStaticRole#dn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#id LdapSecretBackendStaticRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#mount LdapSecretBackendStaticRole#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#namespace LdapSecretBackendStaticRole#namespace}

---

##### `skipImportRotation`<sup>Optional</sup> <a name="skipImportRotation" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.skipImportRotation"></a>

```java
public java.lang.Object getSkipImportRotation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip rotation of the password on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#skip_import_rotation LdapSecretBackendStaticRole#skip_import_rotation}

---



