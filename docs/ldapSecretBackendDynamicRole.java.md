# `ldapSecretBackendDynamicRole` Submodule <a name="`ldapSecretBackendDynamicRole` Submodule" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackendDynamicRole <a name="LdapSecretBackendDynamicRole" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role vault_ldap_secret_backend_dynamic_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_dynamic_role.LdapSecretBackendDynamicRole;

LdapSecretBackendDynamicRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .creationLdif(java.lang.String)
    .deletionLdif(java.lang.String)
    .roleName(java.lang.String)
//  .defaultTtl(java.lang.Number)
//  .id(java.lang.String)
//  .maxTtl(java.lang.Number)
//  .mount(java.lang.String)
//  .namespace(java.lang.String)
//  .rollbackLdif(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.creationLdif">creationLdif</a></code> | <code>java.lang.String</code> | A templatized LDIF string used to create a user account. May contain multiple entries. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.deletionLdif">deletionLdif</a></code> | <code>java.lang.String</code> | A templatized LDIF string used to delete the user account once its TTL has expired. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | Specifies the TTL for the leases associated with this role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#id LdapSecretBackendDynamicRole#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | Specifies the maximum TTL for the leases associated with this role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.rollbackLdif">rollbackLdif</a></code> | <code>java.lang.String</code> | A templatized LDIF string used to attempt to rollback any changes in the event that execution of the creation_ldif results in an error. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | A template used to generate a dynamic username. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationLdif`<sup>Required</sup> <a name="creationLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.creationLdif"></a>

- *Type:* java.lang.String

A templatized LDIF string used to create a user account. May contain multiple entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#creation_ldif LdapSecretBackendDynamicRole#creation_ldif}

---

##### `deletionLdif`<sup>Required</sup> <a name="deletionLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.deletionLdif"></a>

- *Type:* java.lang.String

A templatized LDIF string used to delete the user account once its TTL has expired.

This may contain multiple LDIF entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#deletion_ldif LdapSecretBackendDynamicRole#deletion_ldif}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#role_name LdapSecretBackendDynamicRole#role_name}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.defaultTtl"></a>

- *Type:* java.lang.Number

Specifies the TTL for the leases associated with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#default_ttl LdapSecretBackendDynamicRole#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#id LdapSecretBackendDynamicRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.Number

Specifies the maximum TTL for the leases associated with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#max_ttl LdapSecretBackendDynamicRole#max_ttl}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#mount LdapSecretBackendDynamicRole#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#namespace LdapSecretBackendDynamicRole#namespace}

---

##### `rollbackLdif`<sup>Optional</sup> <a name="rollbackLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.rollbackLdif"></a>

- *Type:* java.lang.String

A templatized LDIF string used to attempt to rollback any changes in the event that execution of the creation_ldif results in an error.

This may contain multiple LDIF entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#rollback_ldif LdapSecretBackendDynamicRole#rollback_ldif}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.usernameTemplate"></a>

- *Type:* java.lang.String

A template used to generate a dynamic username.

This will be used to fill in the .Username field within the creation_ldif string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#username_template LdapSecretBackendDynamicRole#username_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMount">resetMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetRollbackLdif">resetRollbackLdif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetDefaultTtl"></a>

```java
public void resetDefaultTtl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetId"></a>

```java
public void resetId()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetMount` <a name="resetMount" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMount"></a>

```java
public void resetMount()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRollbackLdif` <a name="resetRollbackLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetRollbackLdif"></a>

```java
public void resetRollbackLdif()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LdapSecretBackendDynamicRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_dynamic_role.LdapSecretBackendDynamicRole;

LdapSecretBackendDynamicRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_dynamic_role.LdapSecretBackendDynamicRole;

LdapSecretBackendDynamicRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_dynamic_role.LdapSecretBackendDynamicRole;

LdapSecretBackendDynamicRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_dynamic_role.LdapSecretBackendDynamicRole;

LdapSecretBackendDynamicRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LdapSecretBackendDynamicRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LdapSecretBackendDynamicRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LdapSecretBackendDynamicRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LdapSecretBackendDynamicRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LdapSecretBackendDynamicRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdifInput">creationLdifInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtlInput">defaultTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdifInput">deletionLdifInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdifInput">rollbackLdifInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdif">creationLdif</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdif">deletionLdif</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdif">rollbackLdif</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationLdifInput`<sup>Optional</sup> <a name="creationLdifInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdifInput"></a>

```java
public java.lang.String getCreationLdifInput();
```

- *Type:* java.lang.String

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtlInput"></a>

```java
public java.lang.Number getDefaultTtlInput();
```

- *Type:* java.lang.Number

---

##### `deletionLdifInput`<sup>Optional</sup> <a name="deletionLdifInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdifInput"></a>

```java
public java.lang.String getDeletionLdifInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtlInput"></a>

```java
public java.lang.Number getMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `rollbackLdifInput`<sup>Optional</sup> <a name="rollbackLdifInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdifInput"></a>

```java
public java.lang.String getRollbackLdifInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `creationLdif`<sup>Required</sup> <a name="creationLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdif"></a>

```java
public java.lang.String getCreationLdif();
```

- *Type:* java.lang.String

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

---

##### `deletionLdif`<sup>Required</sup> <a name="deletionLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdif"></a>

```java
public java.lang.String getDeletionLdif();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `rollbackLdif`<sup>Required</sup> <a name="rollbackLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdif"></a>

```java
public java.lang.String getRollbackLdif();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendDynamicRoleConfig <a name="LdapSecretBackendDynamicRoleConfig" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_dynamic_role.LdapSecretBackendDynamicRoleConfig;

LdapSecretBackendDynamicRoleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .creationLdif(java.lang.String)
    .deletionLdif(java.lang.String)
    .roleName(java.lang.String)
//  .defaultTtl(java.lang.Number)
//  .id(java.lang.String)
//  .maxTtl(java.lang.Number)
//  .mount(java.lang.String)
//  .namespace(java.lang.String)
//  .rollbackLdif(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.creationLdif">creationLdif</a></code> | <code>java.lang.String</code> | A templatized LDIF string used to create a user account. May contain multiple entries. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.deletionLdif">deletionLdif</a></code> | <code>java.lang.String</code> | A templatized LDIF string used to delete the user account once its TTL has expired. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | Specifies the TTL for the leases associated with this role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#id LdapSecretBackendDynamicRole#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | Specifies the maximum TTL for the leases associated with this role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.rollbackLdif">rollbackLdif</a></code> | <code>java.lang.String</code> | A templatized LDIF string used to attempt to rollback any changes in the event that execution of the creation_ldif results in an error. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | A template used to generate a dynamic username. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationLdif`<sup>Required</sup> <a name="creationLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.creationLdif"></a>

```java
public java.lang.String getCreationLdif();
```

- *Type:* java.lang.String

A templatized LDIF string used to create a user account. May contain multiple entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#creation_ldif LdapSecretBackendDynamicRole#creation_ldif}

---

##### `deletionLdif`<sup>Required</sup> <a name="deletionLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.deletionLdif"></a>

```java
public java.lang.String getDeletionLdif();
```

- *Type:* java.lang.String

A templatized LDIF string used to delete the user account once its TTL has expired.

This may contain multiple LDIF entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#deletion_ldif LdapSecretBackendDynamicRole#deletion_ldif}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#role_name LdapSecretBackendDynamicRole#role_name}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

Specifies the TTL for the leases associated with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#default_ttl LdapSecretBackendDynamicRole#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#id LdapSecretBackendDynamicRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

Specifies the maximum TTL for the leases associated with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#max_ttl LdapSecretBackendDynamicRole#max_ttl}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#mount LdapSecretBackendDynamicRole#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#namespace LdapSecretBackendDynamicRole#namespace}

---

##### `rollbackLdif`<sup>Optional</sup> <a name="rollbackLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.rollbackLdif"></a>

```java
public java.lang.String getRollbackLdif();
```

- *Type:* java.lang.String

A templatized LDIF string used to attempt to rollback any changes in the event that execution of the creation_ldif results in an error.

This may contain multiple LDIF entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#rollback_ldif LdapSecretBackendDynamicRole#rollback_ldif}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

A template used to generate a dynamic username.

This will be used to fill in the .Username field within the creation_ldif string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/ldap_secret_backend_dynamic_role#username_template LdapSecretBackendDynamicRole#username_template}

---



