# `pkiSecretBackendConfigScep` Submodule <a name="`pkiSecretBackendConfigScep` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigScep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigScep <a name="PkiSecretBackendConfigScep" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep vault_pki_secret_backend_config_scep}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_scep.PkiSecretBackendConfigScep;

PkiSecretBackendConfigScep.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
//  .allowedDigestAlgorithms(java.util.List<java.lang.String>)
//  .allowedEncryptionAlgorithms(java.util.List<java.lang.String>)
//  .authenticators(PkiSecretBackendConfigScepAuthenticators)
//  .defaultPathPolicy(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .externalValidation(IResolvable|java.util.List<PkiSecretBackendConfigScepExternalValidation>)
//  .id(java.lang.String)
//  .logLevel(java.lang.String)
//  .namespace(java.lang.String)
//  .restrictCaChainToIssuer(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.allowedDigestAlgorithms">allowedDigestAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed digest algorithms for SCEP requests. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.allowedEncryptionAlgorithms">allowedEncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed encryption algorithms for SCEP requests. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.defaultPathPolicy">defaultPathPolicy</a></code> | <code>java.lang.String</code> | Specifies the behavior for requests using the default SCEP label. Can be sign-verbatim or a role given by role:<role_name>. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether SCEP is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.externalValidation">externalValidation</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>></code> | external_validation block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#id PkiSecretBackendConfigScep#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.logLevel">logLevel</a></code> | <code>java.lang.String</code> | The level of logging verbosity, affects only SCEP logs on this mount. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.restrictCaChainToIssuer">restrictCaChainToIssuer</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, only return the issuer CA, otherwise the entire CA certificate chain will be returned if available from the PKI mount. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#backend PkiSecretBackendConfigScep#backend}

---

##### `allowedDigestAlgorithms`<sup>Optional</sup> <a name="allowedDigestAlgorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.allowedDigestAlgorithms"></a>

- *Type:* java.util.List<java.lang.String>

List of allowed digest algorithms for SCEP requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#allowed_digest_algorithms PkiSecretBackendConfigScep#allowed_digest_algorithms}

---

##### `allowedEncryptionAlgorithms`<sup>Optional</sup> <a name="allowedEncryptionAlgorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.allowedEncryptionAlgorithms"></a>

- *Type:* java.util.List<java.lang.String>

List of allowed encryption algorithms for SCEP requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#allowed_encryption_algorithms PkiSecretBackendConfigScep#allowed_encryption_algorithms}

---

##### `authenticators`<sup>Optional</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.authenticators"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#authenticators PkiSecretBackendConfigScep#authenticators}

---

##### `defaultPathPolicy`<sup>Optional</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.defaultPathPolicy"></a>

- *Type:* java.lang.String

Specifies the behavior for requests using the default SCEP label. Can be sign-verbatim or a role given by role:<role_name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#default_path_policy PkiSecretBackendConfigScep#default_path_policy}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether SCEP is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#enabled PkiSecretBackendConfigScep#enabled}

---

##### `externalValidation`<sup>Optional</sup> <a name="externalValidation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.externalValidation"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>>

external_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#external_validation PkiSecretBackendConfigScep#external_validation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#id PkiSecretBackendConfigScep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.logLevel"></a>

- *Type:* java.lang.String

The level of logging verbosity, affects only SCEP logs on this mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#log_level PkiSecretBackendConfigScep#log_level}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#namespace PkiSecretBackendConfigScep#namespace}

---

##### `restrictCaChainToIssuer`<sup>Optional</sup> <a name="restrictCaChainToIssuer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.restrictCaChainToIssuer"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, only return the issuer CA, otherwise the entire CA certificate chain will be returned if available from the PKI mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#restrict_ca_chain_to_issuer PkiSecretBackendConfigScep#restrict_ca_chain_to_issuer}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putAuthenticators">putAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putExternalValidation">putExternalValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAllowedDigestAlgorithms">resetAllowedDigestAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAllowedEncryptionAlgorithms">resetAllowedEncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAuthenticators">resetAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetDefaultPathPolicy">resetDefaultPathPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetExternalValidation">resetExternalValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetRestrictCaChainToIssuer">resetRestrictCaChainToIssuer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticators` <a name="putAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putAuthenticators"></a>

```java
public void putAuthenticators(PkiSecretBackendConfigScepAuthenticators value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putAuthenticators.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a>

---

##### `putExternalValidation` <a name="putExternalValidation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putExternalValidation"></a>

```java
public void putExternalValidation(IResolvable|java.util.List<PkiSecretBackendConfigScepExternalValidation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putExternalValidation.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>>

---

##### `resetAllowedDigestAlgorithms` <a name="resetAllowedDigestAlgorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAllowedDigestAlgorithms"></a>

```java
public void resetAllowedDigestAlgorithms()
```

##### `resetAllowedEncryptionAlgorithms` <a name="resetAllowedEncryptionAlgorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAllowedEncryptionAlgorithms"></a>

```java
public void resetAllowedEncryptionAlgorithms()
```

##### `resetAuthenticators` <a name="resetAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAuthenticators"></a>

```java
public void resetAuthenticators()
```

##### `resetDefaultPathPolicy` <a name="resetDefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetDefaultPathPolicy"></a>

```java
public void resetDefaultPathPolicy()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetExternalValidation` <a name="resetExternalValidation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetExternalValidation"></a>

```java
public void resetExternalValidation()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetId"></a>

```java
public void resetId()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRestrictCaChainToIssuer` <a name="resetRestrictCaChainToIssuer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetRestrictCaChainToIssuer"></a>

```java
public void resetRestrictCaChainToIssuer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigScep resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_scep.PkiSecretBackendConfigScep;

PkiSecretBackendConfigScep.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_scep.PkiSecretBackendConfigScep;

PkiSecretBackendConfigScep.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_scep.PkiSecretBackendConfigScep;

PkiSecretBackendConfigScep.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_scep.PkiSecretBackendConfigScep;

PkiSecretBackendConfigScep.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiSecretBackendConfigScep.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PkiSecretBackendConfigScep resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiSecretBackendConfigScep to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiSecretBackendConfigScep that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigScep to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference">PkiSecretBackendConfigScepAuthenticatorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.externalValidation">externalValidation</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList">PkiSecretBackendConfigScepExternalValidationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.lastUpdated">lastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedDigestAlgorithmsInput">allowedDigestAlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedEncryptionAlgorithmsInput">allowedEncryptionAlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.authenticatorsInput">authenticatorsInput</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.defaultPathPolicyInput">defaultPathPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.externalValidationInput">externalValidationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.restrictCaChainToIssuerInput">restrictCaChainToIssuerInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedDigestAlgorithms">allowedDigestAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedEncryptionAlgorithms">allowedEncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.defaultPathPolicy">defaultPathPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.restrictCaChainToIssuer">restrictCaChainToIssuer</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticators`<sup>Required</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.authenticators"></a>

```java
public PkiSecretBackendConfigScepAuthenticatorsOutputReference getAuthenticators();
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference">PkiSecretBackendConfigScepAuthenticatorsOutputReference</a>

---

##### `externalValidation`<sup>Required</sup> <a name="externalValidation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.externalValidation"></a>

```java
public PkiSecretBackendConfigScepExternalValidationList getExternalValidation();
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList">PkiSecretBackendConfigScepExternalValidationList</a>

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.lastUpdated"></a>

```java
public java.lang.String getLastUpdated();
```

- *Type:* java.lang.String

---

##### `allowedDigestAlgorithmsInput`<sup>Optional</sup> <a name="allowedDigestAlgorithmsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedDigestAlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedDigestAlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedEncryptionAlgorithmsInput`<sup>Optional</sup> <a name="allowedEncryptionAlgorithmsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedEncryptionAlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedEncryptionAlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticatorsInput`<sup>Optional</sup> <a name="authenticatorsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.authenticatorsInput"></a>

```java
public PkiSecretBackendConfigScepAuthenticators getAuthenticatorsInput();
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `defaultPathPolicyInput`<sup>Optional</sup> <a name="defaultPathPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.defaultPathPolicyInput"></a>

```java
public java.lang.String getDefaultPathPolicyInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `externalValidationInput`<sup>Optional</sup> <a name="externalValidationInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.externalValidationInput"></a>

```java
public IResolvable|java.util.List<PkiSecretBackendConfigScepExternalValidation> getExternalValidationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `restrictCaChainToIssuerInput`<sup>Optional</sup> <a name="restrictCaChainToIssuerInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.restrictCaChainToIssuerInput"></a>

```java
public java.lang.Boolean|IResolvable getRestrictCaChainToIssuerInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `allowedDigestAlgorithms`<sup>Required</sup> <a name="allowedDigestAlgorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedDigestAlgorithms"></a>

```java
public java.util.List<java.lang.String> getAllowedDigestAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedEncryptionAlgorithms`<sup>Required</sup> <a name="allowedEncryptionAlgorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedEncryptionAlgorithms"></a>

```java
public java.util.List<java.lang.String> getAllowedEncryptionAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `defaultPathPolicy`<sup>Required</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.defaultPathPolicy"></a>

```java
public java.lang.String getDefaultPathPolicy();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `restrictCaChainToIssuer`<sup>Required</sup> <a name="restrictCaChainToIssuer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.restrictCaChainToIssuer"></a>

```java
public java.lang.Boolean|IResolvable getRestrictCaChainToIssuer();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigScepAuthenticators <a name="PkiSecretBackendConfigScepAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_scep.PkiSecretBackendConfigScepAuthenticators;

PkiSecretBackendConfigScepAuthenticators.builder()
//  .cert(java.util.Map<java.lang.String, java.lang.String>)
//  .scep(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators.property.cert">cert</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The accessor and cert_role properties for cert auth backends. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators.property.scep">scep</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The accessor property for SCEP auth backends. |

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators.property.cert"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCert();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The accessor and cert_role properties for cert auth backends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#cert PkiSecretBackendConfigScep#cert}

---

##### `scep`<sup>Optional</sup> <a name="scep" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators.property.scep"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScep();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The accessor property for SCEP auth backends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#scep PkiSecretBackendConfigScep#scep}

---

### PkiSecretBackendConfigScepConfig <a name="PkiSecretBackendConfigScepConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_scep.PkiSecretBackendConfigScepConfig;

PkiSecretBackendConfigScepConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
//  .allowedDigestAlgorithms(java.util.List<java.lang.String>)
//  .allowedEncryptionAlgorithms(java.util.List<java.lang.String>)
//  .authenticators(PkiSecretBackendConfigScepAuthenticators)
//  .defaultPathPolicy(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .externalValidation(IResolvable|java.util.List<PkiSecretBackendConfigScepExternalValidation>)
//  .id(java.lang.String)
//  .logLevel(java.lang.String)
//  .namespace(java.lang.String)
//  .restrictCaChainToIssuer(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.allowedDigestAlgorithms">allowedDigestAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed digest algorithms for SCEP requests. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.allowedEncryptionAlgorithms">allowedEncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed encryption algorithms for SCEP requests. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.defaultPathPolicy">defaultPathPolicy</a></code> | <code>java.lang.String</code> | Specifies the behavior for requests using the default SCEP label. Can be sign-verbatim or a role given by role:<role_name>. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether SCEP is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.externalValidation">externalValidation</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>></code> | external_validation block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#id PkiSecretBackendConfigScep#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | The level of logging verbosity, affects only SCEP logs on this mount. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.restrictCaChainToIssuer">restrictCaChainToIssuer</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, only return the issuer CA, otherwise the entire CA certificate chain will be returned if available from the PKI mount. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#backend PkiSecretBackendConfigScep#backend}

---

##### `allowedDigestAlgorithms`<sup>Optional</sup> <a name="allowedDigestAlgorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.allowedDigestAlgorithms"></a>

```java
public java.util.List<java.lang.String> getAllowedDigestAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

List of allowed digest algorithms for SCEP requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#allowed_digest_algorithms PkiSecretBackendConfigScep#allowed_digest_algorithms}

---

##### `allowedEncryptionAlgorithms`<sup>Optional</sup> <a name="allowedEncryptionAlgorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.allowedEncryptionAlgorithms"></a>

```java
public java.util.List<java.lang.String> getAllowedEncryptionAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

List of allowed encryption algorithms for SCEP requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#allowed_encryption_algorithms PkiSecretBackendConfigScep#allowed_encryption_algorithms}

---

##### `authenticators`<sup>Optional</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.authenticators"></a>

```java
public PkiSecretBackendConfigScepAuthenticators getAuthenticators();
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#authenticators PkiSecretBackendConfigScep#authenticators}

---

##### `defaultPathPolicy`<sup>Optional</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.defaultPathPolicy"></a>

```java
public java.lang.String getDefaultPathPolicy();
```

- *Type:* java.lang.String

Specifies the behavior for requests using the default SCEP label. Can be sign-verbatim or a role given by role:<role_name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#default_path_policy PkiSecretBackendConfigScep#default_path_policy}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether SCEP is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#enabled PkiSecretBackendConfigScep#enabled}

---

##### `externalValidation`<sup>Optional</sup> <a name="externalValidation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.externalValidation"></a>

```java
public IResolvable|java.util.List<PkiSecretBackendConfigScepExternalValidation> getExternalValidation();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>>

external_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#external_validation PkiSecretBackendConfigScep#external_validation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#id PkiSecretBackendConfigScep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

The level of logging verbosity, affects only SCEP logs on this mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#log_level PkiSecretBackendConfigScep#log_level}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#namespace PkiSecretBackendConfigScep#namespace}

---

##### `restrictCaChainToIssuer`<sup>Optional</sup> <a name="restrictCaChainToIssuer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.restrictCaChainToIssuer"></a>

```java
public java.lang.Boolean|IResolvable getRestrictCaChainToIssuer();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, only return the issuer CA, otherwise the entire CA certificate chain will be returned if available from the PKI mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#restrict_ca_chain_to_issuer PkiSecretBackendConfigScep#restrict_ca_chain_to_issuer}

---

### PkiSecretBackendConfigScepExternalValidation <a name="PkiSecretBackendConfigScepExternalValidation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_scep.PkiSecretBackendConfigScepExternalValidation;

PkiSecretBackendConfigScepExternalValidation.builder()
//  .intune(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation.property.intune">intune</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The credentials to enable Microsoft Intune validation of SCEP requests. |

---

##### `intune`<sup>Optional</sup> <a name="intune" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation.property.intune"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIntune();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The credentials to enable Microsoft Intune validation of SCEP requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#intune PkiSecretBackendConfigScep#intune}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendConfigScepAuthenticatorsOutputReference <a name="PkiSecretBackendConfigScepAuthenticatorsOutputReference" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_scep.PkiSecretBackendConfigScepAuthenticatorsOutputReference;

new PkiSecretBackendConfigScepAuthenticatorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resetCert">resetCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resetScep">resetScep</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCert` <a name="resetCert" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resetCert"></a>

```java
public void resetCert()
```

##### `resetScep` <a name="resetScep" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resetScep"></a>

```java
public void resetScep()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.certInput">certInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scepInput">scepInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.cert">cert</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scep">scep</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.certInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCertInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `scepInput`<sup>Optional</sup> <a name="scepInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scepInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScepInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.cert"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCert();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `scep`<sup>Required</sup> <a name="scep" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scep"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScep();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.internalValue"></a>

```java
public PkiSecretBackendConfigScepAuthenticators getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a>

---


### PkiSecretBackendConfigScepExternalValidationList <a name="PkiSecretBackendConfigScepExternalValidationList" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_scep.PkiSecretBackendConfigScepExternalValidationList;

new PkiSecretBackendConfigScepExternalValidationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.get"></a>

```java
public PkiSecretBackendConfigScepExternalValidationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PkiSecretBackendConfigScepExternalValidation> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>>

---


### PkiSecretBackendConfigScepExternalValidationOutputReference <a name="PkiSecretBackendConfigScepExternalValidationOutputReference" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_scep.PkiSecretBackendConfigScepExternalValidationOutputReference;

new PkiSecretBackendConfigScepExternalValidationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.resetIntune">resetIntune</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntune` <a name="resetIntune" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.resetIntune"></a>

```java
public void resetIntune()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.intuneInput">intuneInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.intune">intune</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intuneInput`<sup>Optional</sup> <a name="intuneInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.intuneInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIntuneInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `intune`<sup>Required</sup> <a name="intune" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.intune"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIntune();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.internalValue"></a>

```java
public IResolvable|PkiSecretBackendConfigScepExternalValidation getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>

---



