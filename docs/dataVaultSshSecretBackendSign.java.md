# `dataVaultSshSecretBackendSign` Submodule <a name="`dataVaultSshSecretBackendSign` Submodule" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultSshSecretBackendSign <a name="DataVaultSshSecretBackendSign" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign vault_ssh_secret_backend_sign}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_ssh_secret_backend_sign.DataVaultSshSecretBackendSign;

DataVaultSshSecretBackendSign.Builder.create(Construct scope, java.lang.String id)
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
    .path(java.lang.String)
    .publicKey(java.lang.String)
//  .certType(java.lang.String)
//  .criticalOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .extensions(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .keyId(java.lang.String)
//  .namespace(java.lang.String)
//  .ttl(java.lang.String)
//  .validPrincipals(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the role to sign. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Full path where SSH backend is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.publicKey">publicKey</a></code> | <code>java.lang.String</code> | Specifies the SSH public key that should be signed. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.certType">certType</a></code> | <code>java.lang.String</code> | Specifies the type of certificate to be created; either "user" or "host". |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.criticalOptions">criticalOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies a map of the critical options that the certificate should be signed for. Defaults to none. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.extensions">extensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies a map of the extensions that the certificate should be signed for. Defaults to none. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#id DataVaultSshSecretBackendSign#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.keyId">keyId</a></code> | <code>java.lang.String</code> | Specifies the key id that the created certificate should have. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | Specifies the Requested Time To Live. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.validPrincipals">validPrincipals</a></code> | <code>java.lang.String</code> | Specifies valid principals, either usernames or hostnames, that the certificate should be signed for. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the name of the role to sign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#name DataVaultSshSecretBackendSign#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Full path where SSH backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#path DataVaultSshSecretBackendSign#path}

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.publicKey"></a>

- *Type:* java.lang.String

Specifies the SSH public key that should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#public_key DataVaultSshSecretBackendSign#public_key}

---

##### `certType`<sup>Optional</sup> <a name="certType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.certType"></a>

- *Type:* java.lang.String

Specifies the type of certificate to be created; either "user" or "host".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#cert_type DataVaultSshSecretBackendSign#cert_type}

---

##### `criticalOptions`<sup>Optional</sup> <a name="criticalOptions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.criticalOptions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies a map of the critical options that the certificate should be signed for. Defaults to none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#critical_options DataVaultSshSecretBackendSign#critical_options}

---

##### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.extensions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies a map of the extensions that the certificate should be signed for. Defaults to none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#extensions DataVaultSshSecretBackendSign#extensions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#id DataVaultSshSecretBackendSign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.keyId"></a>

- *Type:* java.lang.String

Specifies the key id that the created certificate should have.

If not specified, the display name of the token will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#key_id DataVaultSshSecretBackendSign#key_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#namespace DataVaultSshSecretBackendSign#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

Specifies the Requested Time To Live.

Cannot be greater than the role's max_ttl value. If not provided, the role's ttl value will be used. Note that the role values default to system values if not explicitly set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#ttl DataVaultSshSecretBackendSign#ttl}

---

##### `validPrincipals`<sup>Optional</sup> <a name="validPrincipals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.validPrincipals"></a>

- *Type:* java.lang.String

Specifies valid principals, either usernames or hostnames, that the certificate should be signed for.

Required unless the role has specified allow_empty_principals or a value has been set for either the default_user or default_user_template role parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#valid_principals DataVaultSshSecretBackendSign#valid_principals}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCertType">resetCertType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCriticalOptions">resetCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetExtensions">resetExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetValidPrincipals">resetValidPrincipals</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCertType` <a name="resetCertType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCertType"></a>

```java
public void resetCertType()
```

##### `resetCriticalOptions` <a name="resetCriticalOptions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCriticalOptions"></a>

```java
public void resetCriticalOptions()
```

##### `resetExtensions` <a name="resetExtensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetExtensions"></a>

```java
public void resetExtensions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetId"></a>

```java
public void resetId()
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetKeyId"></a>

```java
public void resetKeyId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetValidPrincipals` <a name="resetValidPrincipals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetValidPrincipals"></a>

```java
public void resetValidPrincipals()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultSshSecretBackendSign resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_ssh_secret_backend_sign.DataVaultSshSecretBackendSign;

DataVaultSshSecretBackendSign.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_ssh_secret_backend_sign.DataVaultSshSecretBackendSign;

DataVaultSshSecretBackendSign.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_ssh_secret_backend_sign.DataVaultSshSecretBackendSign;

DataVaultSshSecretBackendSign.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_ssh_secret_backend_sign.DataVaultSshSecretBackendSign;

DataVaultSshSecretBackendSign.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultSshSecretBackendSign.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVaultSshSecretBackendSign resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultSshSecretBackendSign to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultSshSecretBackendSign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultSshSecretBackendSign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.signedKey">signedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certTypeInput">certTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptionsInput">criticalOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensionsInput">extensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKeyInput">publicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipalsInput">validPrincipalsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certType">certType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptions">criticalOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensions">extensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipals">validPrincipals</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `signedKey`<sup>Required</sup> <a name="signedKey" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.signedKey"></a>

```java
public java.lang.String getSignedKey();
```

- *Type:* java.lang.String

---

##### `certTypeInput`<sup>Optional</sup> <a name="certTypeInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certTypeInput"></a>

```java
public java.lang.String getCertTypeInput();
```

- *Type:* java.lang.String

---

##### `criticalOptionsInput`<sup>Optional</sup> <a name="criticalOptionsInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCriticalOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `extensionsInput`<sup>Optional</sup> <a name="extensionsInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKeyInput"></a>

```java
public java.lang.String getPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `validPrincipalsInput`<sup>Optional</sup> <a name="validPrincipalsInput" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipalsInput"></a>

```java
public java.lang.String getValidPrincipalsInput();
```

- *Type:* java.lang.String

---

##### `certType`<sup>Required</sup> <a name="certType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certType"></a>

```java
public java.lang.String getCertType();
```

- *Type:* java.lang.String

---

##### `criticalOptions`<sup>Required</sup> <a name="criticalOptions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCriticalOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `validPrincipals`<sup>Required</sup> <a name="validPrincipals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipals"></a>

```java
public java.lang.String getValidPrincipals();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultSshSecretBackendSignConfig <a name="DataVaultSshSecretBackendSignConfig" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_ssh_secret_backend_sign.DataVaultSshSecretBackendSignConfig;

DataVaultSshSecretBackendSignConfig.builder()
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
    .path(java.lang.String)
    .publicKey(java.lang.String)
//  .certType(java.lang.String)
//  .criticalOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .extensions(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .keyId(java.lang.String)
//  .namespace(java.lang.String)
//  .ttl(java.lang.String)
//  .validPrincipals(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the role to sign. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.path">path</a></code> | <code>java.lang.String</code> | Full path where SSH backend is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | Specifies the SSH public key that should be signed. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.certType">certType</a></code> | <code>java.lang.String</code> | Specifies the type of certificate to be created; either "user" or "host". |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.criticalOptions">criticalOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies a map of the critical options that the certificate should be signed for. Defaults to none. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.extensions">extensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies a map of the extensions that the certificate should be signed for. Defaults to none. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#id DataVaultSshSecretBackendSign#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | Specifies the key id that the created certificate should have. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Specifies the Requested Time To Live. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.validPrincipals">validPrincipals</a></code> | <code>java.lang.String</code> | Specifies valid principals, either usernames or hostnames, that the certificate should be signed for. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the role to sign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#name DataVaultSshSecretBackendSign#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Full path where SSH backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#path DataVaultSshSecretBackendSign#path}

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

Specifies the SSH public key that should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#public_key DataVaultSshSecretBackendSign#public_key}

---

##### `certType`<sup>Optional</sup> <a name="certType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.certType"></a>

```java
public java.lang.String getCertType();
```

- *Type:* java.lang.String

Specifies the type of certificate to be created; either "user" or "host".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#cert_type DataVaultSshSecretBackendSign#cert_type}

---

##### `criticalOptions`<sup>Optional</sup> <a name="criticalOptions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.criticalOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCriticalOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies a map of the critical options that the certificate should be signed for. Defaults to none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#critical_options DataVaultSshSecretBackendSign#critical_options}

---

##### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.extensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies a map of the extensions that the certificate should be signed for. Defaults to none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#extensions DataVaultSshSecretBackendSign#extensions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#id DataVaultSshSecretBackendSign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

Specifies the key id that the created certificate should have.

If not specified, the display name of the token will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#key_id DataVaultSshSecretBackendSign#key_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#namespace DataVaultSshSecretBackendSign#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Specifies the Requested Time To Live.

Cannot be greater than the role's max_ttl value. If not provided, the role's ttl value will be used. Note that the role values default to system values if not explicitly set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#ttl DataVaultSshSecretBackendSign#ttl}

---

##### `validPrincipals`<sup>Optional</sup> <a name="validPrincipals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.validPrincipals"></a>

```java
public java.lang.String getValidPrincipals();
```

- *Type:* java.lang.String

Specifies valid principals, either usernames or hostnames, that the certificate should be signed for.

Required unless the role has specified allow_empty_principals or a value has been set for either the default_user or default_user_template role parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/ssh_secret_backend_sign#valid_principals DataVaultSshSecretBackendSign#valid_principals}

---



