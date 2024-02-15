# `pkiSecretBackendIssuer` Submodule <a name="`pkiSecretBackendIssuer` Submodule" id="@cdktf/provider-vault.pkiSecretBackendIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendIssuer <a name="PkiSecretBackendIssuer" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer vault_pki_secret_backend_issuer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_issuer.PkiSecretBackendIssuer;

PkiSecretBackendIssuer.Builder.create(Construct scope, java.lang.String id)
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
    .issuerRef(java.lang.String)
//  .crlDistributionPoints(java.util.List<java.lang.String>)
//  .enableAiaUrlTemplating(java.lang.Boolean)
//  .enableAiaUrlTemplating(IResolvable)
//  .id(java.lang.String)
//  .issuerName(java.lang.String)
//  .issuingCertificates(java.util.List<java.lang.String>)
//  .leafNotAfterBehavior(java.lang.String)
//  .manualChain(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
//  .ocspServers(java.util.List<java.lang.String>)
//  .revocationSignatureAlgorithm(java.lang.String)
//  .usage(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.issuerRef">issuerRef</a></code> | <code>java.lang.String</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.crlDistributionPoints">crlDistributionPoints</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the URL values for the CRL Distribution Points field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.enableAiaUrlTemplating">enableAiaUrlTemplating</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies that the AIA URL values should be templated. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#id PkiSecretBackendIssuer#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.issuerName">issuerName</a></code> | <code>java.lang.String</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.issuingCertificates">issuingCertificates</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the URL values for the Issuing Certificate field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.leafNotAfterBehavior">leafNotAfterBehavior</a></code> | <code>java.lang.String</code> | Behavior of a leaf's 'NotAfter' field during issuance. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.manualChain">manualChain</a></code> | <code>java.util.List<java.lang.String></code> | Chain of issuer references to build this issuer's computed CAChain field from, when non-empty. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.ocspServers">ocspServers</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the URL values for the OCSP Servers field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.revocationSignatureAlgorithm">revocationSignatureAlgorithm</a></code> | <code>java.lang.String</code> | Which signature algorithm to use when building CRLs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.usage">usage</a></code> | <code>java.lang.String</code> | Comma-separated list of allowed usages for this issuer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#backend PkiSecretBackendIssuer#backend}

---

##### `issuerRef`<sup>Required</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.issuerRef"></a>

- *Type:* java.lang.String

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#issuer_ref PkiSecretBackendIssuer#issuer_ref}

---

##### `crlDistributionPoints`<sup>Optional</sup> <a name="crlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.crlDistributionPoints"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the URL values for the CRL Distribution Points field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#crl_distribution_points PkiSecretBackendIssuer#crl_distribution_points}

---

##### `enableAiaUrlTemplating`<sup>Optional</sup> <a name="enableAiaUrlTemplating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.enableAiaUrlTemplating"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies that the AIA URL values should be templated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#enable_aia_url_templating PkiSecretBackendIssuer#enable_aia_url_templating}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#id PkiSecretBackendIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerName`<sup>Optional</sup> <a name="issuerName" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.issuerName"></a>

- *Type:* java.lang.String

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#issuer_name PkiSecretBackendIssuer#issuer_name}

---

##### `issuingCertificates`<sup>Optional</sup> <a name="issuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.issuingCertificates"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the URL values for the Issuing Certificate field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#issuing_certificates PkiSecretBackendIssuer#issuing_certificates}

---

##### `leafNotAfterBehavior`<sup>Optional</sup> <a name="leafNotAfterBehavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.leafNotAfterBehavior"></a>

- *Type:* java.lang.String

Behavior of a leaf's 'NotAfter' field during issuance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#leaf_not_after_behavior PkiSecretBackendIssuer#leaf_not_after_behavior}

---

##### `manualChain`<sup>Optional</sup> <a name="manualChain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.manualChain"></a>

- *Type:* java.util.List<java.lang.String>

Chain of issuer references to build this issuer's computed CAChain field from, when non-empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#manual_chain PkiSecretBackendIssuer#manual_chain}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#namespace PkiSecretBackendIssuer#namespace}

---

##### `ocspServers`<sup>Optional</sup> <a name="ocspServers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.ocspServers"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the URL values for the OCSP Servers field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#ocsp_servers PkiSecretBackendIssuer#ocsp_servers}

---

##### `revocationSignatureAlgorithm`<sup>Optional</sup> <a name="revocationSignatureAlgorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.revocationSignatureAlgorithm"></a>

- *Type:* java.lang.String

Which signature algorithm to use when building CRLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#revocation_signature_algorithm PkiSecretBackendIssuer#revocation_signature_algorithm}

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.usage"></a>

- *Type:* java.lang.String

Comma-separated list of allowed usages for this issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#usage PkiSecretBackendIssuer#usage}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetCrlDistributionPoints">resetCrlDistributionPoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetEnableAiaUrlTemplating">resetEnableAiaUrlTemplating</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuerName">resetIssuerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuingCertificates">resetIssuingCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetLeafNotAfterBehavior">resetLeafNotAfterBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetManualChain">resetManualChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOcspServers">resetOcspServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetRevocationSignatureAlgorithm">resetRevocationSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetUsage">resetUsage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCrlDistributionPoints` <a name="resetCrlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetCrlDistributionPoints"></a>

```java
public void resetCrlDistributionPoints()
```

##### `resetEnableAiaUrlTemplating` <a name="resetEnableAiaUrlTemplating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetEnableAiaUrlTemplating"></a>

```java
public void resetEnableAiaUrlTemplating()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetId"></a>

```java
public void resetId()
```

##### `resetIssuerName` <a name="resetIssuerName" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuerName"></a>

```java
public void resetIssuerName()
```

##### `resetIssuingCertificates` <a name="resetIssuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuingCertificates"></a>

```java
public void resetIssuingCertificates()
```

##### `resetLeafNotAfterBehavior` <a name="resetLeafNotAfterBehavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetLeafNotAfterBehavior"></a>

```java
public void resetLeafNotAfterBehavior()
```

##### `resetManualChain` <a name="resetManualChain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetManualChain"></a>

```java
public void resetManualChain()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOcspServers` <a name="resetOcspServers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOcspServers"></a>

```java
public void resetOcspServers()
```

##### `resetRevocationSignatureAlgorithm` <a name="resetRevocationSignatureAlgorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetRevocationSignatureAlgorithm"></a>

```java
public void resetRevocationSignatureAlgorithm()
```

##### `resetUsage` <a name="resetUsage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetUsage"></a>

```java
public void resetUsage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_issuer.PkiSecretBackendIssuer;

PkiSecretBackendIssuer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_issuer.PkiSecretBackendIssuer;

PkiSecretBackendIssuer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_issuer.PkiSecretBackendIssuer;

PkiSecretBackendIssuer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_issuer.PkiSecretBackendIssuer;

PkiSecretBackendIssuer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiSecretBackendIssuer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiSecretBackendIssuer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiSecretBackendIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerId">issuerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPointsInput">crlDistributionPointsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplatingInput">enableAiaUrlTemplatingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerNameInput">issuerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRefInput">issuerRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificatesInput">issuingCertificatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehaviorInput">leafNotAfterBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChainInput">manualChainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServersInput">ocspServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithmInput">revocationSignatureAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usageInput">usageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPoints">crlDistributionPoints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplating">enableAiaUrlTemplating</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerName">issuerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRef">issuerRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificates">issuingCertificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehavior">leafNotAfterBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChain">manualChain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServers">ocspServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithm">revocationSignatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usage">usage</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `issuerId`<sup>Required</sup> <a name="issuerId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerId"></a>

```java
public java.lang.String getIssuerId();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `crlDistributionPointsInput`<sup>Optional</sup> <a name="crlDistributionPointsInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPointsInput"></a>

```java
public java.util.List<java.lang.String> getCrlDistributionPointsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableAiaUrlTemplatingInput`<sup>Optional</sup> <a name="enableAiaUrlTemplatingInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplatingInput"></a>

```java
public java.lang.Object getEnableAiaUrlTemplatingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerNameInput`<sup>Optional</sup> <a name="issuerNameInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerNameInput"></a>

```java
public java.lang.String getIssuerNameInput();
```

- *Type:* java.lang.String

---

##### `issuerRefInput`<sup>Optional</sup> <a name="issuerRefInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRefInput"></a>

```java
public java.lang.String getIssuerRefInput();
```

- *Type:* java.lang.String

---

##### `issuingCertificatesInput`<sup>Optional</sup> <a name="issuingCertificatesInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificatesInput"></a>

```java
public java.util.List<java.lang.String> getIssuingCertificatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `leafNotAfterBehaviorInput`<sup>Optional</sup> <a name="leafNotAfterBehaviorInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehaviorInput"></a>

```java
public java.lang.String getLeafNotAfterBehaviorInput();
```

- *Type:* java.lang.String

---

##### `manualChainInput`<sup>Optional</sup> <a name="manualChainInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChainInput"></a>

```java
public java.util.List<java.lang.String> getManualChainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `ocspServersInput`<sup>Optional</sup> <a name="ocspServersInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServersInput"></a>

```java
public java.util.List<java.lang.String> getOcspServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `revocationSignatureAlgorithmInput`<sup>Optional</sup> <a name="revocationSignatureAlgorithmInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithmInput"></a>

```java
public java.lang.String getRevocationSignatureAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `usageInput`<sup>Optional</sup> <a name="usageInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usageInput"></a>

```java
public java.lang.String getUsageInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `crlDistributionPoints`<sup>Required</sup> <a name="crlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPoints"></a>

```java
public java.util.List<java.lang.String> getCrlDistributionPoints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableAiaUrlTemplating`<sup>Required</sup> <a name="enableAiaUrlTemplating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplating"></a>

```java
public java.lang.Object getEnableAiaUrlTemplating();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuerName`<sup>Required</sup> <a name="issuerName" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerName"></a>

```java
public java.lang.String getIssuerName();
```

- *Type:* java.lang.String

---

##### `issuerRef`<sup>Required</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRef"></a>

```java
public java.lang.String getIssuerRef();
```

- *Type:* java.lang.String

---

##### `issuingCertificates`<sup>Required</sup> <a name="issuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificates"></a>

```java
public java.util.List<java.lang.String> getIssuingCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `leafNotAfterBehavior`<sup>Required</sup> <a name="leafNotAfterBehavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehavior"></a>

```java
public java.lang.String getLeafNotAfterBehavior();
```

- *Type:* java.lang.String

---

##### `manualChain`<sup>Required</sup> <a name="manualChain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChain"></a>

```java
public java.util.List<java.lang.String> getManualChain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `ocspServers`<sup>Required</sup> <a name="ocspServers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServers"></a>

```java
public java.util.List<java.lang.String> getOcspServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `revocationSignatureAlgorithm`<sup>Required</sup> <a name="revocationSignatureAlgorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithm"></a>

```java
public java.lang.String getRevocationSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usage"></a>

```java
public java.lang.String getUsage();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendIssuerConfig <a name="PkiSecretBackendIssuerConfig" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_issuer.PkiSecretBackendIssuerConfig;

PkiSecretBackendIssuerConfig.builder()
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
    .issuerRef(java.lang.String)
//  .crlDistributionPoints(java.util.List<java.lang.String>)
//  .enableAiaUrlTemplating(java.lang.Boolean)
//  .enableAiaUrlTemplating(IResolvable)
//  .id(java.lang.String)
//  .issuerName(java.lang.String)
//  .issuingCertificates(java.util.List<java.lang.String>)
//  .leafNotAfterBehavior(java.lang.String)
//  .manualChain(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
//  .ocspServers(java.util.List<java.lang.String>)
//  .revocationSignatureAlgorithm(java.lang.String)
//  .usage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerRef">issuerRef</a></code> | <code>java.lang.String</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.crlDistributionPoints">crlDistributionPoints</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the URL values for the CRL Distribution Points field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.enableAiaUrlTemplating">enableAiaUrlTemplating</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies that the AIA URL values should be templated. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#id PkiSecretBackendIssuer#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerName">issuerName</a></code> | <code>java.lang.String</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuingCertificates">issuingCertificates</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the URL values for the Issuing Certificate field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.leafNotAfterBehavior">leafNotAfterBehavior</a></code> | <code>java.lang.String</code> | Behavior of a leaf's 'NotAfter' field during issuance. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.manualChain">manualChain</a></code> | <code>java.util.List<java.lang.String></code> | Chain of issuer references to build this issuer's computed CAChain field from, when non-empty. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.ocspServers">ocspServers</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the URL values for the OCSP Servers field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.revocationSignatureAlgorithm">revocationSignatureAlgorithm</a></code> | <code>java.lang.String</code> | Which signature algorithm to use when building CRLs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.usage">usage</a></code> | <code>java.lang.String</code> | Comma-separated list of allowed usages for this issuer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#backend PkiSecretBackendIssuer#backend}

---

##### `issuerRef`<sup>Required</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerRef"></a>

```java
public java.lang.String getIssuerRef();
```

- *Type:* java.lang.String

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#issuer_ref PkiSecretBackendIssuer#issuer_ref}

---

##### `crlDistributionPoints`<sup>Optional</sup> <a name="crlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.crlDistributionPoints"></a>

```java
public java.util.List<java.lang.String> getCrlDistributionPoints();
```

- *Type:* java.util.List<java.lang.String>

Specifies the URL values for the CRL Distribution Points field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#crl_distribution_points PkiSecretBackendIssuer#crl_distribution_points}

---

##### `enableAiaUrlTemplating`<sup>Optional</sup> <a name="enableAiaUrlTemplating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.enableAiaUrlTemplating"></a>

```java
public java.lang.Object getEnableAiaUrlTemplating();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies that the AIA URL values should be templated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#enable_aia_url_templating PkiSecretBackendIssuer#enable_aia_url_templating}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#id PkiSecretBackendIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerName`<sup>Optional</sup> <a name="issuerName" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerName"></a>

```java
public java.lang.String getIssuerName();
```

- *Type:* java.lang.String

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#issuer_name PkiSecretBackendIssuer#issuer_name}

---

##### `issuingCertificates`<sup>Optional</sup> <a name="issuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuingCertificates"></a>

```java
public java.util.List<java.lang.String> getIssuingCertificates();
```

- *Type:* java.util.List<java.lang.String>

Specifies the URL values for the Issuing Certificate field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#issuing_certificates PkiSecretBackendIssuer#issuing_certificates}

---

##### `leafNotAfterBehavior`<sup>Optional</sup> <a name="leafNotAfterBehavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.leafNotAfterBehavior"></a>

```java
public java.lang.String getLeafNotAfterBehavior();
```

- *Type:* java.lang.String

Behavior of a leaf's 'NotAfter' field during issuance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#leaf_not_after_behavior PkiSecretBackendIssuer#leaf_not_after_behavior}

---

##### `manualChain`<sup>Optional</sup> <a name="manualChain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.manualChain"></a>

```java
public java.util.List<java.lang.String> getManualChain();
```

- *Type:* java.util.List<java.lang.String>

Chain of issuer references to build this issuer's computed CAChain field from, when non-empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#manual_chain PkiSecretBackendIssuer#manual_chain}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#namespace PkiSecretBackendIssuer#namespace}

---

##### `ocspServers`<sup>Optional</sup> <a name="ocspServers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.ocspServers"></a>

```java
public java.util.List<java.lang.String> getOcspServers();
```

- *Type:* java.util.List<java.lang.String>

Specifies the URL values for the OCSP Servers field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#ocsp_servers PkiSecretBackendIssuer#ocsp_servers}

---

##### `revocationSignatureAlgorithm`<sup>Optional</sup> <a name="revocationSignatureAlgorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.revocationSignatureAlgorithm"></a>

```java
public java.lang.String getRevocationSignatureAlgorithm();
```

- *Type:* java.lang.String

Which signature algorithm to use when building CRLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#revocation_signature_algorithm PkiSecretBackendIssuer#revocation_signature_algorithm}

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.usage"></a>

```java
public java.lang.String getUsage();
```

- *Type:* java.lang.String

Comma-separated list of allowed usages for this issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_issuer#usage PkiSecretBackendIssuer#usage}

---



