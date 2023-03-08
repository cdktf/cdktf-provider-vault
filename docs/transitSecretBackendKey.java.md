# `transitSecretBackendKey` Submodule <a name="`transitSecretBackendKey` Submodule" id="@cdktf/provider-vault.transitSecretBackendKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransitSecretBackendKey <a name="TransitSecretBackendKey" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key vault_transit_secret_backend_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.transit_secret_backend_key.TransitSecretBackendKey;

TransitSecretBackendKey.Builder.create(Construct scope, java.lang.String id)
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
    .backend(java.lang.String)
    .name(java.lang.String)
//  .allowPlaintextBackup(java.lang.Boolean)
//  .allowPlaintextBackup(IResolvable)
//  .autoRotateInterval(java.lang.Number)
//  .autoRotatePeriod(java.lang.Number)
//  .convergentEncryption(java.lang.Boolean)
//  .convergentEncryption(IResolvable)
//  .deletionAllowed(java.lang.Boolean)
//  .deletionAllowed(IResolvable)
//  .derived(java.lang.Boolean)
//  .derived(IResolvable)
//  .exportable(java.lang.Boolean)
//  .exportable(IResolvable)
//  .id(java.lang.String)
//  .minDecryptionVersion(java.lang.Number)
//  .minEncryptionVersion(java.lang.Number)
//  .namespace(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The Transit secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the encryption key to create. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.allowPlaintextBackup">allowPlaintextBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.autoRotateInterval">autoRotateInterval</a></code> | <code>java.lang.Number</code> | Amount of time the key should live before being automatically rotated. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.autoRotatePeriod">autoRotatePeriod</a></code> | <code>java.lang.Number</code> | Amount of time the key should live before being automatically rotated. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.convergentEncryption">convergentEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.derived">derived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if key derivation is to be used. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.exportable">exportable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables keys to be exportable. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#id TransitSecretBackendKey#id}. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.minDecryptionVersion">minDecryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.minEncryptionVersion">minEncryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Specifies the type of key to create. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The Transit secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#backend TransitSecretBackendKey#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the encryption key to create.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#name TransitSecretBackendKey#name}

---

##### `allowPlaintextBackup`<sup>Optional</sup> <a name="allowPlaintextBackup" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.allowPlaintextBackup"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#allow_plaintext_backup TransitSecretBackendKey#allow_plaintext_backup}

---

##### `autoRotateInterval`<sup>Optional</sup> <a name="autoRotateInterval" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.autoRotateInterval"></a>

- *Type:* java.lang.Number

Amount of time the key should live before being automatically rotated.

A value of 0 disables automatic rotation for the key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#auto_rotate_interval TransitSecretBackendKey#auto_rotate_interval}

---

##### `autoRotatePeriod`<sup>Optional</sup> <a name="autoRotatePeriod" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.autoRotatePeriod"></a>

- *Type:* java.lang.Number

Amount of time the key should live before being automatically rotated.

A value of 0 disables automatic rotation for the key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#auto_rotate_period TransitSecretBackendKey#auto_rotate_period}

---

##### `convergentEncryption`<sup>Optional</sup> <a name="convergentEncryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.convergentEncryption"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext.

This requires derived to be set to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#convergent_encryption TransitSecretBackendKey#convergent_encryption}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.deletionAllowed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#deletion_allowed TransitSecretBackendKey#deletion_allowed}

---

##### `derived`<sup>Optional</sup> <a name="derived" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.derived"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if key derivation is to be used.

If enabled, all encrypt/decrypt requests to this key must provide a context which is used for key derivation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#derived TransitSecretBackendKey#derived}

---

##### `exportable`<sup>Optional</sup> <a name="exportable" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.exportable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables keys to be exportable.

This allows for all the valid keys in the key ring to be exported. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#exportable TransitSecretBackendKey#exportable}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#id TransitSecretBackendKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minDecryptionVersion`<sup>Optional</sup> <a name="minDecryptionVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.minDecryptionVersion"></a>

- *Type:* java.lang.Number

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#min_decryption_version TransitSecretBackendKey#min_decryption_version}

---

##### `minEncryptionVersion`<sup>Optional</sup> <a name="minEncryptionVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.minEncryptionVersion"></a>

- *Type:* java.lang.Number

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#min_encryption_version TransitSecretBackendKey#min_encryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#namespace TransitSecretBackendKey#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Specifies the type of key to create.

The currently-supported types are: aes128-gcm96, aes256-gcm96, chacha20-poly1305, ed25519, ecdsa-p256, ecdsa-p384, ecdsa-p521, rsa-2048, rsa-3072, rsa-4096

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#type TransitSecretBackendKey#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAllowPlaintextBackup">resetAllowPlaintextBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAutoRotateInterval">resetAutoRotateInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAutoRotatePeriod">resetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetConvergentEncryption">resetConvergentEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDeletionAllowed">resetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDerived">resetDerived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetExportable">resetExportable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinDecryptionVersion">resetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinEncryptionVersion">resetMinEncryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAllowPlaintextBackup` <a name="resetAllowPlaintextBackup" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAllowPlaintextBackup"></a>

```java
public void resetAllowPlaintextBackup()
```

##### `resetAutoRotateInterval` <a name="resetAutoRotateInterval" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAutoRotateInterval"></a>

```java
public void resetAutoRotateInterval()
```

##### `resetAutoRotatePeriod` <a name="resetAutoRotatePeriod" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAutoRotatePeriod"></a>

```java
public void resetAutoRotatePeriod()
```

##### `resetConvergentEncryption` <a name="resetConvergentEncryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetConvergentEncryption"></a>

```java
public void resetConvergentEncryption()
```

##### `resetDeletionAllowed` <a name="resetDeletionAllowed" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDeletionAllowed"></a>

```java
public void resetDeletionAllowed()
```

##### `resetDerived` <a name="resetDerived" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDerived"></a>

```java
public void resetDerived()
```

##### `resetExportable` <a name="resetExportable" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetExportable"></a>

```java
public void resetExportable()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetId"></a>

```java
public void resetId()
```

##### `resetMinDecryptionVersion` <a name="resetMinDecryptionVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinDecryptionVersion"></a>

```java
public void resetMinDecryptionVersion()
```

##### `resetMinEncryptionVersion` <a name="resetMinEncryptionVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinEncryptionVersion"></a>

```java
public void resetMinEncryptionVersion()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.transit_secret_backend_key.TransitSecretBackendKey;

TransitSecretBackendKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.transit_secret_backend_key.TransitSecretBackendKey;

TransitSecretBackendKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.transit_secret_backend_key.TransitSecretBackendKey;

TransitSecretBackendKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keys">keys</a></code> | <code>com.hashicorp.cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.latestVersion">latestVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minAvailableVersion">minAvailableVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDecryption">supportsDecryption</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDerivation">supportsDerivation</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsEncryption">supportsEncryption</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsSigning">supportsSigning</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackupInput">allowPlaintextBackupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotateIntervalInput">autoRotateIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriodInput">autoRotatePeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryptionInput">convergentEncryptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowedInput">deletionAllowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derivedInput">derivedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportableInput">exportableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersionInput">minDecryptionVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersionInput">minEncryptionVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackup">allowPlaintextBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotateInterval">autoRotateInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryption">convergentEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derived">derived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportable">exportable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersion">minEncryptionVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keys"></a>

```java
public StringMapList getKeys();
```

- *Type:* com.hashicorp.cdktf.StringMapList

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.latestVersion"></a>

```java
public java.lang.Number getLatestVersion();
```

- *Type:* java.lang.Number

---

##### `minAvailableVersion`<sup>Required</sup> <a name="minAvailableVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minAvailableVersion"></a>

```java
public java.lang.Number getMinAvailableVersion();
```

- *Type:* java.lang.Number

---

##### `supportsDecryption`<sup>Required</sup> <a name="supportsDecryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDecryption"></a>

```java
public IResolvable getSupportsDecryption();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `supportsDerivation`<sup>Required</sup> <a name="supportsDerivation" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDerivation"></a>

```java
public IResolvable getSupportsDerivation();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `supportsEncryption`<sup>Required</sup> <a name="supportsEncryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsEncryption"></a>

```java
public IResolvable getSupportsEncryption();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `supportsSigning`<sup>Required</sup> <a name="supportsSigning" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsSigning"></a>

```java
public IResolvable getSupportsSigning();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `allowPlaintextBackupInput`<sup>Optional</sup> <a name="allowPlaintextBackupInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackupInput"></a>

```java
public java.lang.Object getAllowPlaintextBackupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoRotateIntervalInput`<sup>Optional</sup> <a name="autoRotateIntervalInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotateIntervalInput"></a>

```java
public java.lang.Number getAutoRotateIntervalInput();
```

- *Type:* java.lang.Number

---

##### `autoRotatePeriodInput`<sup>Optional</sup> <a name="autoRotatePeriodInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriodInput"></a>

```java
public java.lang.Number getAutoRotatePeriodInput();
```

- *Type:* java.lang.Number

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `convergentEncryptionInput`<sup>Optional</sup> <a name="convergentEncryptionInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryptionInput"></a>

```java
public java.lang.Object getConvergentEncryptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deletionAllowedInput`<sup>Optional</sup> <a name="deletionAllowedInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowedInput"></a>

```java
public java.lang.Object getDeletionAllowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `derivedInput`<sup>Optional</sup> <a name="derivedInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derivedInput"></a>

```java
public java.lang.Object getDerivedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exportableInput`<sup>Optional</sup> <a name="exportableInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportableInput"></a>

```java
public java.lang.Object getExportableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `minDecryptionVersionInput`<sup>Optional</sup> <a name="minDecryptionVersionInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersionInput"></a>

```java
public java.lang.Number getMinDecryptionVersionInput();
```

- *Type:* java.lang.Number

---

##### `minEncryptionVersionInput`<sup>Optional</sup> <a name="minEncryptionVersionInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersionInput"></a>

```java
public java.lang.Number getMinEncryptionVersionInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `allowPlaintextBackup`<sup>Required</sup> <a name="allowPlaintextBackup" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackup"></a>

```java
public java.lang.Object getAllowPlaintextBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoRotateInterval`<sup>Required</sup> <a name="autoRotateInterval" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotateInterval"></a>

```java
public java.lang.Number getAutoRotateInterval();
```

- *Type:* java.lang.Number

---

##### `autoRotatePeriod`<sup>Required</sup> <a name="autoRotatePeriod" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriod"></a>

```java
public java.lang.Number getAutoRotatePeriod();
```

- *Type:* java.lang.Number

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `convergentEncryption`<sup>Required</sup> <a name="convergentEncryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryption"></a>

```java
public java.lang.Object getConvergentEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deletionAllowed`<sup>Required</sup> <a name="deletionAllowed" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowed"></a>

```java
public java.lang.Object getDeletionAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `derived`<sup>Required</sup> <a name="derived" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derived"></a>

```java
public java.lang.Object getDerived();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportable"></a>

```java
public java.lang.Object getExportable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `minDecryptionVersion`<sup>Required</sup> <a name="minDecryptionVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersion"></a>

```java
public java.lang.Number getMinDecryptionVersion();
```

- *Type:* java.lang.Number

---

##### `minEncryptionVersion`<sup>Required</sup> <a name="minEncryptionVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersion"></a>

```java
public java.lang.Number getMinEncryptionVersion();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransitSecretBackendKeyConfig <a name="TransitSecretBackendKeyConfig" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.transit_secret_backend_key.TransitSecretBackendKeyConfig;

TransitSecretBackendKeyConfig.builder()
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
    .backend(java.lang.String)
    .name(java.lang.String)
//  .allowPlaintextBackup(java.lang.Boolean)
//  .allowPlaintextBackup(IResolvable)
//  .autoRotateInterval(java.lang.Number)
//  .autoRotatePeriod(java.lang.Number)
//  .convergentEncryption(java.lang.Boolean)
//  .convergentEncryption(IResolvable)
//  .deletionAllowed(java.lang.Boolean)
//  .deletionAllowed(IResolvable)
//  .derived(java.lang.Boolean)
//  .derived(IResolvable)
//  .exportable(java.lang.Boolean)
//  .exportable(IResolvable)
//  .id(java.lang.String)
//  .minDecryptionVersion(java.lang.Number)
//  .minEncryptionVersion(java.lang.Number)
//  .namespace(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The Transit secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the encryption key to create. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.allowPlaintextBackup">allowPlaintextBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.autoRotateInterval">autoRotateInterval</a></code> | <code>java.lang.Number</code> | Amount of time the key should live before being automatically rotated. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>java.lang.Number</code> | Amount of time the key should live before being automatically rotated. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.convergentEncryption">convergentEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.derived">derived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if key derivation is to be used. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.exportable">exportable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables keys to be exportable. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#id TransitSecretBackendKey#id}. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minEncryptionVersion">minEncryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.type">type</a></code> | <code>java.lang.String</code> | Specifies the type of key to create. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The Transit secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#backend TransitSecretBackendKey#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the encryption key to create.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#name TransitSecretBackendKey#name}

---

##### `allowPlaintextBackup`<sup>Optional</sup> <a name="allowPlaintextBackup" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.allowPlaintextBackup"></a>

```java
public java.lang.Object getAllowPlaintextBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#allow_plaintext_backup TransitSecretBackendKey#allow_plaintext_backup}

---

##### `autoRotateInterval`<sup>Optional</sup> <a name="autoRotateInterval" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.autoRotateInterval"></a>

```java
public java.lang.Number getAutoRotateInterval();
```

- *Type:* java.lang.Number

Amount of time the key should live before being automatically rotated.

A value of 0 disables automatic rotation for the key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#auto_rotate_interval TransitSecretBackendKey#auto_rotate_interval}

---

##### `autoRotatePeriod`<sup>Optional</sup> <a name="autoRotatePeriod" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.autoRotatePeriod"></a>

```java
public java.lang.Number getAutoRotatePeriod();
```

- *Type:* java.lang.Number

Amount of time the key should live before being automatically rotated.

A value of 0 disables automatic rotation for the key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#auto_rotate_period TransitSecretBackendKey#auto_rotate_period}

---

##### `convergentEncryption`<sup>Optional</sup> <a name="convergentEncryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.convergentEncryption"></a>

```java
public java.lang.Object getConvergentEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext.

This requires derived to be set to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#convergent_encryption TransitSecretBackendKey#convergent_encryption}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.deletionAllowed"></a>

```java
public java.lang.Object getDeletionAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#deletion_allowed TransitSecretBackendKey#deletion_allowed}

---

##### `derived`<sup>Optional</sup> <a name="derived" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.derived"></a>

```java
public java.lang.Object getDerived();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if key derivation is to be used.

If enabled, all encrypt/decrypt requests to this key must provide a context which is used for key derivation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#derived TransitSecretBackendKey#derived}

---

##### `exportable`<sup>Optional</sup> <a name="exportable" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.exportable"></a>

```java
public java.lang.Object getExportable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables keys to be exportable.

This allows for all the valid keys in the key ring to be exported. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#exportable TransitSecretBackendKey#exportable}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#id TransitSecretBackendKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minDecryptionVersion`<sup>Optional</sup> <a name="minDecryptionVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minDecryptionVersion"></a>

```java
public java.lang.Number getMinDecryptionVersion();
```

- *Type:* java.lang.Number

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#min_decryption_version TransitSecretBackendKey#min_decryption_version}

---

##### `minEncryptionVersion`<sup>Optional</sup> <a name="minEncryptionVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minEncryptionVersion"></a>

```java
public java.lang.Number getMinEncryptionVersion();
```

- *Type:* java.lang.Number

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#min_encryption_version TransitSecretBackendKey#min_encryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#namespace TransitSecretBackendKey#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies the type of key to create.

The currently-supported types are: aes128-gcm96, aes256-gcm96, chacha20-poly1305, ed25519, ecdsa-p256, ecdsa-p384, ecdsa-p521, rsa-2048, rsa-3072, rsa-4096

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transit_secret_backend_key#type TransitSecretBackendKey#type}

---


