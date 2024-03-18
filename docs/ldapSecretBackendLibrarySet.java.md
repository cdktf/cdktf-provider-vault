# `ldapSecretBackendLibrarySet` Submodule <a name="`ldapSecretBackendLibrarySet` Submodule" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackendLibrarySet <a name="LdapSecretBackendLibrarySet" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set vault_ldap_secret_backend_library_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_library_set.LdapSecretBackendLibrarySet;

LdapSecretBackendLibrarySet.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .serviceAccountNames(java.util.List<java.lang.String>)
//  .disableCheckInEnforcement(java.lang.Boolean)
//  .disableCheckInEnforcement(IResolvable)
//  .id(java.lang.String)
//  .maxTtl(java.lang.Number)
//  .mount(java.lang.String)
//  .namespace(java.lang.String)
//  .ttl(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the set of service accounts. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.serviceAccountNames">serviceAccountNames</a></code> | <code>java.util.List<java.lang.String></code> | The names of all the service accounts that can be checked out from this set. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.disableCheckInEnforcement">disableCheckInEnforcement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable enforcing that service accounts must be checked in by the entity or client token that checked them out. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#id LdapSecretBackendLibrarySet#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | The maximum amount of time a check-out last with renewal before Vault automatically checks it back in. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | The maximum amount of time a single check-out lasts before Vault automatically checks it back in. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the set of service accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#name LdapSecretBackendLibrarySet#name}

---

##### `serviceAccountNames`<sup>Required</sup> <a name="serviceAccountNames" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.serviceAccountNames"></a>

- *Type:* java.util.List<java.lang.String>

The names of all the service accounts that can be checked out from this set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#service_account_names LdapSecretBackendLibrarySet#service_account_names}

---

##### `disableCheckInEnforcement`<sup>Optional</sup> <a name="disableCheckInEnforcement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.disableCheckInEnforcement"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable enforcing that service accounts must be checked in by the entity or client token that checked them out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#disable_check_in_enforcement LdapSecretBackendLibrarySet#disable_check_in_enforcement}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#id LdapSecretBackendLibrarySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.Number

The maximum amount of time a check-out last with renewal before Vault automatically checks it back in.

Defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#max_ttl LdapSecretBackendLibrarySet#max_ttl}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#mount LdapSecretBackendLibrarySet#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#namespace LdapSecretBackendLibrarySet#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

The maximum amount of time a single check-out lasts before Vault automatically checks it back in.

Defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#ttl LdapSecretBackendLibrarySet#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetDisableCheckInEnforcement">resetDisableCheckInEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMount">resetMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDisableCheckInEnforcement` <a name="resetDisableCheckInEnforcement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetDisableCheckInEnforcement"></a>

```java
public void resetDisableCheckInEnforcement()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetId"></a>

```java
public void resetId()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetMount` <a name="resetMount" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMount"></a>

```java
public void resetMount()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LdapSecretBackendLibrarySet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_library_set.LdapSecretBackendLibrarySet;

LdapSecretBackendLibrarySet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_library_set.LdapSecretBackendLibrarySet;

LdapSecretBackendLibrarySet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_library_set.LdapSecretBackendLibrarySet;

LdapSecretBackendLibrarySet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_library_set.LdapSecretBackendLibrarySet;

LdapSecretBackendLibrarySet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LdapSecretBackendLibrarySet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LdapSecretBackendLibrarySet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LdapSecretBackendLibrarySet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LdapSecretBackendLibrarySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LdapSecretBackendLibrarySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcementInput">disableCheckInEnforcementInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNamesInput">serviceAccountNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcement">disableCheckInEnforcement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNames">serviceAccountNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disableCheckInEnforcementInput`<sup>Optional</sup> <a name="disableCheckInEnforcementInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcementInput"></a>

```java
public java.lang.Object getDisableCheckInEnforcementInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtlInput"></a>

```java
public java.lang.Number getMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountNamesInput`<sup>Optional</sup> <a name="serviceAccountNamesInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNamesInput"></a>

```java
public java.util.List<java.lang.String> getServiceAccountNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `disableCheckInEnforcement`<sup>Required</sup> <a name="disableCheckInEnforcement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcement"></a>

```java
public java.lang.Object getDisableCheckInEnforcement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `serviceAccountNames`<sup>Required</sup> <a name="serviceAccountNames" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNames"></a>

```java
public java.util.List<java.lang.String> getServiceAccountNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendLibrarySetConfig <a name="LdapSecretBackendLibrarySetConfig" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend_library_set.LdapSecretBackendLibrarySetConfig;

LdapSecretBackendLibrarySetConfig.builder()
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
    .name(java.lang.String)
    .serviceAccountNames(java.util.List<java.lang.String>)
//  .disableCheckInEnforcement(java.lang.Boolean)
//  .disableCheckInEnforcement(IResolvable)
//  .id(java.lang.String)
//  .maxTtl(java.lang.Number)
//  .mount(java.lang.String)
//  .namespace(java.lang.String)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the set of service accounts. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.serviceAccountNames">serviceAccountNames</a></code> | <code>java.util.List<java.lang.String></code> | The names of all the service accounts that can be checked out from this set. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.disableCheckInEnforcement">disableCheckInEnforcement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable enforcing that service accounts must be checked in by the entity or client token that checked them out. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#id LdapSecretBackendLibrarySet#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | The maximum amount of time a check-out last with renewal before Vault automatically checks it back in. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | The maximum amount of time a single check-out lasts before Vault automatically checks it back in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the set of service accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#name LdapSecretBackendLibrarySet#name}

---

##### `serviceAccountNames`<sup>Required</sup> <a name="serviceAccountNames" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.serviceAccountNames"></a>

```java
public java.util.List<java.lang.String> getServiceAccountNames();
```

- *Type:* java.util.List<java.lang.String>

The names of all the service accounts that can be checked out from this set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#service_account_names LdapSecretBackendLibrarySet#service_account_names}

---

##### `disableCheckInEnforcement`<sup>Optional</sup> <a name="disableCheckInEnforcement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.disableCheckInEnforcement"></a>

```java
public java.lang.Object getDisableCheckInEnforcement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable enforcing that service accounts must be checked in by the entity or client token that checked them out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#disable_check_in_enforcement LdapSecretBackendLibrarySet#disable_check_in_enforcement}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#id LdapSecretBackendLibrarySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

The maximum amount of time a check-out last with renewal before Vault automatically checks it back in.

Defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#max_ttl LdapSecretBackendLibrarySet#max_ttl}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#mount LdapSecretBackendLibrarySet#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#namespace LdapSecretBackendLibrarySet#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

The maximum amount of time a single check-out lasts before Vault automatically checks it back in.

Defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/ldap_secret_backend_library_set#ttl LdapSecretBackendLibrarySet#ttl}

---



