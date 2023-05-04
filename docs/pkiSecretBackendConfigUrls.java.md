# `vault_pki_secret_backend_config_urls`

Refer to the Terraform Registory for docs: [`vault_pki_secret_backend_config_urls`](https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls).

# `pkiSecretBackendConfigUrls` Submodule <a name="`pkiSecretBackendConfigUrls` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigUrls <a name="PkiSecretBackendConfigUrls" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls vault_pki_secret_backend_config_urls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_urls.PkiSecretBackendConfigUrls;

PkiSecretBackendConfigUrls.Builder.create(Construct scope, java.lang.String id)
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
    .backend(java.lang.String)
//  .crlDistributionPoints(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .issuingCertificates(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
//  .ocspServers(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.crlDistributionPoints">crlDistributionPoints</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the URL values for the CRL Distribution Points field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls#id PkiSecretBackendConfigUrls#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.issuingCertificates">issuingCertificates</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the URL values for the Issuing Certificate field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.ocspServers">ocspServers</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the URL values for the OCSP Servers field. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls#backend PkiSecretBackendConfigUrls#backend}

---

##### `crlDistributionPoints`<sup>Optional</sup> <a name="crlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.crlDistributionPoints"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the URL values for the CRL Distribution Points field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls#crl_distribution_points PkiSecretBackendConfigUrls#crl_distribution_points}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls#id PkiSecretBackendConfigUrls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuingCertificates`<sup>Optional</sup> <a name="issuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.issuingCertificates"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the URL values for the Issuing Certificate field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls#issuing_certificates PkiSecretBackendConfigUrls#issuing_certificates}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls#namespace PkiSecretBackendConfigUrls#namespace}

---

##### `ocspServers`<sup>Optional</sup> <a name="ocspServers" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.ocspServers"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the URL values for the OCSP Servers field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls#ocsp_servers PkiSecretBackendConfigUrls#ocsp_servers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetCrlDistributionPoints">resetCrlDistributionPoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetIssuingCertificates">resetIssuingCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetOcspServers">resetOcspServers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCrlDistributionPoints` <a name="resetCrlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetCrlDistributionPoints"></a>

```java
public void resetCrlDistributionPoints()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetId"></a>

```java
public void resetId()
```

##### `resetIssuingCertificates` <a name="resetIssuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetIssuingCertificates"></a>

```java
public void resetIssuingCertificates()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOcspServers` <a name="resetOcspServers" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetOcspServers"></a>

```java
public void resetOcspServers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_urls.PkiSecretBackendConfigUrls;

PkiSecretBackendConfigUrls.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_urls.PkiSecretBackendConfigUrls;

PkiSecretBackendConfigUrls.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_urls.PkiSecretBackendConfigUrls;

PkiSecretBackendConfigUrls.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.crlDistributionPointsInput">crlDistributionPointsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.issuingCertificatesInput">issuingCertificatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.ocspServersInput">ocspServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.crlDistributionPoints">crlDistributionPoints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.issuingCertificates">issuingCertificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.ocspServers">ocspServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `crlDistributionPointsInput`<sup>Optional</sup> <a name="crlDistributionPointsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.crlDistributionPointsInput"></a>

```java
public java.util.List<java.lang.String> getCrlDistributionPointsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuingCertificatesInput`<sup>Optional</sup> <a name="issuingCertificatesInput" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.issuingCertificatesInput"></a>

```java
public java.util.List<java.lang.String> getIssuingCertificatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `ocspServersInput`<sup>Optional</sup> <a name="ocspServersInput" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.ocspServersInput"></a>

```java
public java.util.List<java.lang.String> getOcspServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `crlDistributionPoints`<sup>Required</sup> <a name="crlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.crlDistributionPoints"></a>

```java
public java.util.List<java.lang.String> getCrlDistributionPoints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuingCertificates`<sup>Required</sup> <a name="issuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.issuingCertificates"></a>

```java
public java.util.List<java.lang.String> getIssuingCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `ocspServers`<sup>Required</sup> <a name="ocspServers" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.ocspServers"></a>

```java
public java.util.List<java.lang.String> getOcspServers();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigUrlsConfig <a name="PkiSecretBackendConfigUrlsConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_urls.PkiSecretBackendConfigUrlsConfig;

PkiSecretBackendConfigUrlsConfig.builder()
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
    .backend(java.lang.String)
//  .crlDistributionPoints(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .issuingCertificates(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
//  .ocspServers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.crlDistributionPoints">crlDistributionPoints</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the URL values for the CRL Distribution Points field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls#id PkiSecretBackendConfigUrls#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.issuingCertificates">issuingCertificates</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the URL values for the Issuing Certificate field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.ocspServers">ocspServers</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the URL values for the OCSP Servers field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls#backend PkiSecretBackendConfigUrls#backend}

---

##### `crlDistributionPoints`<sup>Optional</sup> <a name="crlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.crlDistributionPoints"></a>

```java
public java.util.List<java.lang.String> getCrlDistributionPoints();
```

- *Type:* java.util.List<java.lang.String>

Specifies the URL values for the CRL Distribution Points field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls#crl_distribution_points PkiSecretBackendConfigUrls#crl_distribution_points}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls#id PkiSecretBackendConfigUrls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuingCertificates`<sup>Optional</sup> <a name="issuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.issuingCertificates"></a>

```java
public java.util.List<java.lang.String> getIssuingCertificates();
```

- *Type:* java.util.List<java.lang.String>

Specifies the URL values for the Issuing Certificate field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls#issuing_certificates PkiSecretBackendConfigUrls#issuing_certificates}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls#namespace PkiSecretBackendConfigUrls#namespace}

---

##### `ocspServers`<sup>Optional</sup> <a name="ocspServers" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.ocspServers"></a>

```java
public java.util.List<java.lang.String> getOcspServers();
```

- *Type:* java.util.List<java.lang.String>

Specifies the URL values for the OCSP Servers field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/pki_secret_backend_config_urls#ocsp_servers PkiSecretBackendConfigUrls#ocsp_servers}

---



