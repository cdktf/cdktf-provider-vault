# `pkiSecretBackendCrlConfig` Submodule <a name="`pkiSecretBackendCrlConfig` Submodule" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendCrlConfig <a name="PkiSecretBackendCrlConfig" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config vault_pki_secret_backend_crl_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_crl_config.PkiSecretBackendCrlConfig;

PkiSecretBackendCrlConfig.Builder.create(Construct scope, java.lang.String id)
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
//  .autoRebuild(java.lang.Boolean)
//  .autoRebuild(IResolvable)
//  .autoRebuildGracePeriod(java.lang.String)
//  .deltaRebuildInterval(java.lang.String)
//  .disable(java.lang.Boolean)
//  .disable(IResolvable)
//  .enableDelta(java.lang.Boolean)
//  .enableDelta(IResolvable)
//  .expiry(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .ocspDisable(java.lang.Boolean)
//  .ocspDisable(IResolvable)
//  .ocspExpiry(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.autoRebuild">autoRebuild</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables or disables periodic rebuilding of the CRL upon expiry. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.autoRebuildGracePeriod">autoRebuildGracePeriod</a></code> | <code>java.lang.String</code> | Grace period before CRL expiry to attempt rebuild of CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.deltaRebuildInterval">deltaRebuildInterval</a></code> | <code>java.lang.String</code> | Interval to check for new revocations on, to regenerate the delta CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.disable">disable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables or enables CRL building. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.enableDelta">enableDelta</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables or disables building of delta CRLs with up-to-date revocation information, augmenting the last complete CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.expiry">expiry</a></code> | <code>java.lang.String</code> | Specifies the time until expiration. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#id PkiSecretBackendCrlConfig#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.ocspDisable">ocspDisable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables or enables the OCSP responder in Vault. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.ocspExpiry">ocspExpiry</a></code> | <code>java.lang.String</code> | The amount of time an OCSP response can be cached for, useful for OCSP stapling refresh durations. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#backend PkiSecretBackendCrlConfig#backend}

---

##### `autoRebuild`<sup>Optional</sup> <a name="autoRebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.autoRebuild"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables or disables periodic rebuilding of the CRL upon expiry.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#auto_rebuild PkiSecretBackendCrlConfig#auto_rebuild}

---

##### `autoRebuildGracePeriod`<sup>Optional</sup> <a name="autoRebuildGracePeriod" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.autoRebuildGracePeriod"></a>

- *Type:* java.lang.String

Grace period before CRL expiry to attempt rebuild of CRL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#auto_rebuild_grace_period PkiSecretBackendCrlConfig#auto_rebuild_grace_period}

---

##### `deltaRebuildInterval`<sup>Optional</sup> <a name="deltaRebuildInterval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.deltaRebuildInterval"></a>

- *Type:* java.lang.String

Interval to check for new revocations on, to regenerate the delta CRL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#delta_rebuild_interval PkiSecretBackendCrlConfig#delta_rebuild_interval}

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.disable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables or enables CRL building.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#disable PkiSecretBackendCrlConfig#disable}

---

##### `enableDelta`<sup>Optional</sup> <a name="enableDelta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.enableDelta"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables or disables building of delta CRLs with up-to-date revocation information, augmenting the last complete CRL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#enable_delta PkiSecretBackendCrlConfig#enable_delta}

---

##### `expiry`<sup>Optional</sup> <a name="expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.expiry"></a>

- *Type:* java.lang.String

Specifies the time until expiration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#expiry PkiSecretBackendCrlConfig#expiry}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#id PkiSecretBackendCrlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#namespace PkiSecretBackendCrlConfig#namespace}

---

##### `ocspDisable`<sup>Optional</sup> <a name="ocspDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.ocspDisable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables or enables the OCSP responder in Vault.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#ocsp_disable PkiSecretBackendCrlConfig#ocsp_disable}

---

##### `ocspExpiry`<sup>Optional</sup> <a name="ocspExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.ocspExpiry"></a>

- *Type:* java.lang.String

The amount of time an OCSP response can be cached for, useful for OCSP stapling refresh durations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#ocsp_expiry PkiSecretBackendCrlConfig#ocsp_expiry}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuild">resetAutoRebuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuildGracePeriod">resetAutoRebuildGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDeltaRebuildInterval">resetDeltaRebuildInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDisable">resetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetEnableDelta">resetEnableDelta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetExpiry">resetExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspDisable">resetOcspDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspExpiry">resetOcspExpiry</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAutoRebuild` <a name="resetAutoRebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuild"></a>

```java
public void resetAutoRebuild()
```

##### `resetAutoRebuildGracePeriod` <a name="resetAutoRebuildGracePeriod" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuildGracePeriod"></a>

```java
public void resetAutoRebuildGracePeriod()
```

##### `resetDeltaRebuildInterval` <a name="resetDeltaRebuildInterval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDeltaRebuildInterval"></a>

```java
public void resetDeltaRebuildInterval()
```

##### `resetDisable` <a name="resetDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDisable"></a>

```java
public void resetDisable()
```

##### `resetEnableDelta` <a name="resetEnableDelta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetEnableDelta"></a>

```java
public void resetEnableDelta()
```

##### `resetExpiry` <a name="resetExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetExpiry"></a>

```java
public void resetExpiry()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOcspDisable` <a name="resetOcspDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspDisable"></a>

```java
public void resetOcspDisable()
```

##### `resetOcspExpiry` <a name="resetOcspExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspExpiry"></a>

```java
public void resetOcspExpiry()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_crl_config.PkiSecretBackendCrlConfig;

PkiSecretBackendCrlConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_crl_config.PkiSecretBackendCrlConfig;

PkiSecretBackendCrlConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_crl_config.PkiSecretBackendCrlConfig;

PkiSecretBackendCrlConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriodInput">autoRebuildGracePeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildInput">autoRebuildInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildIntervalInput">deltaRebuildIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disableInput">disableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDeltaInput">enableDeltaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiryInput">expiryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisableInput">ocspDisableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiryInput">ocspExpiryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuild">autoRebuild</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriod">autoRebuildGracePeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildInterval">deltaRebuildInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disable">disable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDelta">enableDelta</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiry">expiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisable">ocspDisable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiry">ocspExpiry</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoRebuildGracePeriodInput`<sup>Optional</sup> <a name="autoRebuildGracePeriodInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriodInput"></a>

```java
public java.lang.String getAutoRebuildGracePeriodInput();
```

- *Type:* java.lang.String

---

##### `autoRebuildInput`<sup>Optional</sup> <a name="autoRebuildInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildInput"></a>

```java
public java.lang.Object getAutoRebuildInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `deltaRebuildIntervalInput`<sup>Optional</sup> <a name="deltaRebuildIntervalInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildIntervalInput"></a>

```java
public java.lang.String getDeltaRebuildIntervalInput();
```

- *Type:* java.lang.String

---

##### `disableInput`<sup>Optional</sup> <a name="disableInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disableInput"></a>

```java
public java.lang.Object getDisableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDeltaInput`<sup>Optional</sup> <a name="enableDeltaInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDeltaInput"></a>

```java
public java.lang.Object getEnableDeltaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expiryInput`<sup>Optional</sup> <a name="expiryInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiryInput"></a>

```java
public java.lang.String getExpiryInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `ocspDisableInput`<sup>Optional</sup> <a name="ocspDisableInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisableInput"></a>

```java
public java.lang.Object getOcspDisableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspExpiryInput`<sup>Optional</sup> <a name="ocspExpiryInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiryInput"></a>

```java
public java.lang.String getOcspExpiryInput();
```

- *Type:* java.lang.String

---

##### `autoRebuild`<sup>Required</sup> <a name="autoRebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuild"></a>

```java
public java.lang.Object getAutoRebuild();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoRebuildGracePeriod`<sup>Required</sup> <a name="autoRebuildGracePeriod" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriod"></a>

```java
public java.lang.String getAutoRebuildGracePeriod();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `deltaRebuildInterval`<sup>Required</sup> <a name="deltaRebuildInterval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildInterval"></a>

```java
public java.lang.String getDeltaRebuildInterval();
```

- *Type:* java.lang.String

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disable"></a>

```java
public java.lang.Object getDisable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDelta`<sup>Required</sup> <a name="enableDelta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDelta"></a>

```java
public java.lang.Object getEnableDelta();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiry"></a>

```java
public java.lang.String getExpiry();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `ocspDisable`<sup>Required</sup> <a name="ocspDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisable"></a>

```java
public java.lang.Object getOcspDisable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspExpiry`<sup>Required</sup> <a name="ocspExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiry"></a>

```java
public java.lang.String getOcspExpiry();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendCrlConfigConfig <a name="PkiSecretBackendCrlConfigConfig" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_crl_config.PkiSecretBackendCrlConfigConfig;

PkiSecretBackendCrlConfigConfig.builder()
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
//  .autoRebuild(java.lang.Boolean)
//  .autoRebuild(IResolvable)
//  .autoRebuildGracePeriod(java.lang.String)
//  .deltaRebuildInterval(java.lang.String)
//  .disable(java.lang.Boolean)
//  .disable(IResolvable)
//  .enableDelta(java.lang.Boolean)
//  .enableDelta(IResolvable)
//  .expiry(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .ocspDisable(java.lang.Boolean)
//  .ocspDisable(IResolvable)
//  .ocspExpiry(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuild">autoRebuild</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables or disables periodic rebuilding of the CRL upon expiry. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuildGracePeriod">autoRebuildGracePeriod</a></code> | <code>java.lang.String</code> | Grace period before CRL expiry to attempt rebuild of CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.deltaRebuildInterval">deltaRebuildInterval</a></code> | <code>java.lang.String</code> | Interval to check for new revocations on, to regenerate the delta CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.disable">disable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables or enables CRL building. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.enableDelta">enableDelta</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables or disables building of delta CRLs with up-to-date revocation information, augmenting the last complete CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.expiry">expiry</a></code> | <code>java.lang.String</code> | Specifies the time until expiration. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#id PkiSecretBackendCrlConfig#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspDisable">ocspDisable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables or enables the OCSP responder in Vault. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspExpiry">ocspExpiry</a></code> | <code>java.lang.String</code> | The amount of time an OCSP response can be cached for, useful for OCSP stapling refresh durations. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#backend PkiSecretBackendCrlConfig#backend}

---

##### `autoRebuild`<sup>Optional</sup> <a name="autoRebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuild"></a>

```java
public java.lang.Object getAutoRebuild();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables or disables periodic rebuilding of the CRL upon expiry.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#auto_rebuild PkiSecretBackendCrlConfig#auto_rebuild}

---

##### `autoRebuildGracePeriod`<sup>Optional</sup> <a name="autoRebuildGracePeriod" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuildGracePeriod"></a>

```java
public java.lang.String getAutoRebuildGracePeriod();
```

- *Type:* java.lang.String

Grace period before CRL expiry to attempt rebuild of CRL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#auto_rebuild_grace_period PkiSecretBackendCrlConfig#auto_rebuild_grace_period}

---

##### `deltaRebuildInterval`<sup>Optional</sup> <a name="deltaRebuildInterval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.deltaRebuildInterval"></a>

```java
public java.lang.String getDeltaRebuildInterval();
```

- *Type:* java.lang.String

Interval to check for new revocations on, to regenerate the delta CRL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#delta_rebuild_interval PkiSecretBackendCrlConfig#delta_rebuild_interval}

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.disable"></a>

```java
public java.lang.Object getDisable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables or enables CRL building.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#disable PkiSecretBackendCrlConfig#disable}

---

##### `enableDelta`<sup>Optional</sup> <a name="enableDelta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.enableDelta"></a>

```java
public java.lang.Object getEnableDelta();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables or disables building of delta CRLs with up-to-date revocation information, augmenting the last complete CRL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#enable_delta PkiSecretBackendCrlConfig#enable_delta}

---

##### `expiry`<sup>Optional</sup> <a name="expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.expiry"></a>

```java
public java.lang.String getExpiry();
```

- *Type:* java.lang.String

Specifies the time until expiration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#expiry PkiSecretBackendCrlConfig#expiry}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#id PkiSecretBackendCrlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#namespace PkiSecretBackendCrlConfig#namespace}

---

##### `ocspDisable`<sup>Optional</sup> <a name="ocspDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspDisable"></a>

```java
public java.lang.Object getOcspDisable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables or enables the OCSP responder in Vault.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#ocsp_disable PkiSecretBackendCrlConfig#ocsp_disable}

---

##### `ocspExpiry`<sup>Optional</sup> <a name="ocspExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspExpiry"></a>

```java
public java.lang.String getOcspExpiry();
```

- *Type:* java.lang.String

The amount of time an OCSP response can be cached for, useful for OCSP stapling refresh durations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#ocsp_expiry PkiSecretBackendCrlConfig#ocsp_expiry}

---


