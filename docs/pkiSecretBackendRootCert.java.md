# `pkiSecretBackendRootCert` Submodule <a name="`pkiSecretBackendRootCert` Submodule" id="@cdktf/provider-vault.pkiSecretBackendRootCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendRootCert <a name="PkiSecretBackendRootCert" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert vault_pki_secret_backend_root_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_root_cert.PkiSecretBackendRootCert;

PkiSecretBackendRootCert.Builder.create(Construct scope, java.lang.String id)
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
    .commonName(java.lang.String)
    .type(java.lang.String)
//  .altNames(java.util.List<java.lang.String>)
//  .country(java.lang.String)
//  .excludeCnFromSans(java.lang.Boolean)
//  .excludeCnFromSans(IResolvable)
//  .excludedDnsDomains(java.util.List<java.lang.String>)
//  .excludedEmailAddresses(java.util.List<java.lang.String>)
//  .excludedIpRanges(java.util.List<java.lang.String>)
//  .excludedUriDomains(java.util.List<java.lang.String>)
//  .format(java.lang.String)
//  .id(java.lang.String)
//  .ipSans(java.util.List<java.lang.String>)
//  .issuerName(java.lang.String)
//  .keyBits(java.lang.Number)
//  .keyName(java.lang.String)
//  .keyRef(java.lang.String)
//  .keyType(java.lang.String)
//  .locality(java.lang.String)
//  .managedKeyId(java.lang.String)
//  .managedKeyName(java.lang.String)
//  .maxPathLength(java.lang.Number)
//  .namespace(java.lang.String)
//  .notAfter(java.lang.String)
//  .organization(java.lang.String)
//  .otherSans(java.util.List<java.lang.String>)
//  .ou(java.lang.String)
//  .permittedDnsDomains(java.util.List<java.lang.String>)
//  .permittedEmailAddresses(java.util.List<java.lang.String>)
//  .permittedIpRanges(java.util.List<java.lang.String>)
//  .permittedUriDomains(java.util.List<java.lang.String>)
//  .postalCode(java.lang.String)
//  .privateKeyFormat(java.lang.String)
//  .province(java.lang.String)
//  .signatureBits(java.lang.Number)
//  .streetAddress(java.lang.String)
//  .ttl(java.lang.String)
//  .uriSans(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.commonName">commonName</a></code> | <code>java.lang.String</code> | CN of root to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Type of root to create. Must be either "existing", "exported", "internal" or "kms". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.altNames">altNames</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.country">country</a></code> | <code>java.lang.String</code> | The country. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludeCnFromSans">excludeCnFromSans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedDnsDomains">excludedDnsDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedEmailAddresses">excludedEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of email addresses for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedIpRanges">excludedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | List of IP ranges for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedUriDomains">excludedUriDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of URI domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.format">format</a></code> | <code>java.lang.String</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#id PkiSecretBackendRootCert#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.ipSans">ipSans</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.issuerName">issuerName</a></code> | <code>java.lang.String</code> | Provides a name to the specified issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyBits">keyBits</a></code> | <code>java.lang.Number</code> | The number of bits to use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyName">keyName</a></code> | <code>java.lang.String</code> | When a new key is created with this request, optionally specifies the name for this. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyRef">keyRef</a></code> | <code>java.lang.String</code> | Specifies the key to use for generating this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyType">keyType</a></code> | <code>java.lang.String</code> | The desired key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.locality">locality</a></code> | <code>java.lang.String</code> | The locality. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.managedKeyId">managedKeyId</a></code> | <code>java.lang.String</code> | The ID of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.managedKeyName">managedKeyName</a></code> | <code>java.lang.String</code> | The name of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.maxPathLength">maxPathLength</a></code> | <code>java.lang.Number</code> | The maximum path length to encode in the generated certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.notAfter">notAfter</a></code> | <code>java.lang.String</code> | Set the Not After field of the certificate with specified date value. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The organization. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.otherSans">otherSans</a></code> | <code>java.util.List<java.lang.String></code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.ou">ou</a></code> | <code>java.lang.String</code> | The organization unit. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedDnsDomains">permittedDnsDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedEmailAddresses">permittedEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of email addresses for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedIpRanges">permittedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | List of IP ranges for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedUriDomains">permittedUriDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of URI domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.postalCode">postalCode</a></code> | <code>java.lang.String</code> | The postal code. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.privateKeyFormat">privateKeyFormat</a></code> | <code>java.lang.String</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.province">province</a></code> | <code>java.lang.String</code> | The province. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.signatureBits">signatureBits</a></code> | <code>java.lang.Number</code> | The number of bits to use in the signature algorithm. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | The street address. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.uriSans">uriSans</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative URIs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#backend PkiSecretBackendRootCert#backend}

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.commonName"></a>

- *Type:* java.lang.String

CN of root to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#common_name PkiSecretBackendRootCert#common_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Type of root to create. Must be either "existing", "exported", "internal" or "kms".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#type PkiSecretBackendRootCert#type}

---

##### `altNames`<sup>Optional</sup> <a name="altNames" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.altNames"></a>

- *Type:* java.util.List<java.lang.String>

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#alt_names PkiSecretBackendRootCert#alt_names}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.country"></a>

- *Type:* java.lang.String

The country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#country PkiSecretBackendRootCert#country}

---

##### `excludeCnFromSans`<sup>Optional</sup> <a name="excludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludeCnFromSans"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#exclude_cn_from_sans PkiSecretBackendRootCert#exclude_cn_from_sans}

---

##### `excludedDnsDomains`<sup>Optional</sup> <a name="excludedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedDnsDomains"></a>

- *Type:* java.util.List<java.lang.String>

List of domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#excluded_dns_domains PkiSecretBackendRootCert#excluded_dns_domains}

---

##### `excludedEmailAddresses`<sup>Optional</sup> <a name="excludedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedEmailAddresses"></a>

- *Type:* java.util.List<java.lang.String>

List of email addresses for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#excluded_email_addresses PkiSecretBackendRootCert#excluded_email_addresses}

---

##### `excludedIpRanges`<sup>Optional</sup> <a name="excludedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedIpRanges"></a>

- *Type:* java.util.List<java.lang.String>

List of IP ranges for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#excluded_ip_ranges PkiSecretBackendRootCert#excluded_ip_ranges}

---

##### `excludedUriDomains`<sup>Optional</sup> <a name="excludedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedUriDomains"></a>

- *Type:* java.util.List<java.lang.String>

List of URI domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#excluded_uri_domains PkiSecretBackendRootCert#excluded_uri_domains}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.format"></a>

- *Type:* java.lang.String

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#format PkiSecretBackendRootCert#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#id PkiSecretBackendRootCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipSans`<sup>Optional</sup> <a name="ipSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.ipSans"></a>

- *Type:* java.util.List<java.lang.String>

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#ip_sans PkiSecretBackendRootCert#ip_sans}

---

##### `issuerName`<sup>Optional</sup> <a name="issuerName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.issuerName"></a>

- *Type:* java.lang.String

Provides a name to the specified issuer.

The name must be unique across all issuers and not be the reserved value 'default'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#issuer_name PkiSecretBackendRootCert#issuer_name}

---

##### `keyBits`<sup>Optional</sup> <a name="keyBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyBits"></a>

- *Type:* java.lang.Number

The number of bits to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#key_bits PkiSecretBackendRootCert#key_bits}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyName"></a>

- *Type:* java.lang.String

When a new key is created with this request, optionally specifies the name for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#key_name PkiSecretBackendRootCert#key_name}

---

##### `keyRef`<sup>Optional</sup> <a name="keyRef" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyRef"></a>

- *Type:* java.lang.String

Specifies the key to use for generating this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#key_ref PkiSecretBackendRootCert#key_ref}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyType"></a>

- *Type:* java.lang.String

The desired key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#key_type PkiSecretBackendRootCert#key_type}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.locality"></a>

- *Type:* java.lang.String

The locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#locality PkiSecretBackendRootCert#locality}

---

##### `managedKeyId`<sup>Optional</sup> <a name="managedKeyId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.managedKeyId"></a>

- *Type:* java.lang.String

The ID of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#managed_key_id PkiSecretBackendRootCert#managed_key_id}

---

##### `managedKeyName`<sup>Optional</sup> <a name="managedKeyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.managedKeyName"></a>

- *Type:* java.lang.String

The name of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#managed_key_name PkiSecretBackendRootCert#managed_key_name}

---

##### `maxPathLength`<sup>Optional</sup> <a name="maxPathLength" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.maxPathLength"></a>

- *Type:* java.lang.Number

The maximum path length to encode in the generated certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#max_path_length PkiSecretBackendRootCert#max_path_length}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#namespace PkiSecretBackendRootCert#namespace}

---

##### `notAfter`<sup>Optional</sup> <a name="notAfter" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.notAfter"></a>

- *Type:* java.lang.String

Set the Not After field of the certificate with specified date value.

The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ. Supports the Y10K end date for IEEE 802.1AR-2018 standard devices, 9999-12-31T23:59:59Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#not_after PkiSecretBackendRootCert#not_after}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#organization PkiSecretBackendRootCert#organization}

---

##### `otherSans`<sup>Optional</sup> <a name="otherSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.otherSans"></a>

- *Type:* java.util.List<java.lang.String>

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#other_sans PkiSecretBackendRootCert#other_sans}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.ou"></a>

- *Type:* java.lang.String

The organization unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#ou PkiSecretBackendRootCert#ou}

---

##### `permittedDnsDomains`<sup>Optional</sup> <a name="permittedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedDnsDomains"></a>

- *Type:* java.util.List<java.lang.String>

List of domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#permitted_dns_domains PkiSecretBackendRootCert#permitted_dns_domains}

---

##### `permittedEmailAddresses`<sup>Optional</sup> <a name="permittedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedEmailAddresses"></a>

- *Type:* java.util.List<java.lang.String>

List of email addresses for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#permitted_email_addresses PkiSecretBackendRootCert#permitted_email_addresses}

---

##### `permittedIpRanges`<sup>Optional</sup> <a name="permittedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedIpRanges"></a>

- *Type:* java.util.List<java.lang.String>

List of IP ranges for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#permitted_ip_ranges PkiSecretBackendRootCert#permitted_ip_ranges}

---

##### `permittedUriDomains`<sup>Optional</sup> <a name="permittedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedUriDomains"></a>

- *Type:* java.util.List<java.lang.String>

List of URI domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#permitted_uri_domains PkiSecretBackendRootCert#permitted_uri_domains}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.postalCode"></a>

- *Type:* java.lang.String

The postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#postal_code PkiSecretBackendRootCert#postal_code}

---

##### `privateKeyFormat`<sup>Optional</sup> <a name="privateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.privateKeyFormat"></a>

- *Type:* java.lang.String

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#private_key_format PkiSecretBackendRootCert#private_key_format}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.province"></a>

- *Type:* java.lang.String

The province.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#province PkiSecretBackendRootCert#province}

---

##### `signatureBits`<sup>Optional</sup> <a name="signatureBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.signatureBits"></a>

- *Type:* java.lang.Number

The number of bits to use in the signature algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#signature_bits PkiSecretBackendRootCert#signature_bits}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.streetAddress"></a>

- *Type:* java.lang.String

The street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#street_address PkiSecretBackendRootCert#street_address}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#ttl PkiSecretBackendRootCert#ttl}

---

##### `uriSans`<sup>Optional</sup> <a name="uriSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.uriSans"></a>

- *Type:* java.util.List<java.lang.String>

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#uri_sans PkiSecretBackendRootCert#uri_sans}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetAltNames">resetAltNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludeCnFromSans">resetExcludeCnFromSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedDnsDomains">resetExcludedDnsDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedEmailAddresses">resetExcludedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedIpRanges">resetExcludedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedUriDomains">resetExcludedUriDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIpSans">resetIpSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIssuerName">resetIssuerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyBits">resetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyRef">resetKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyId">resetManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyName">resetManagedKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetMaxPathLength">resetMaxPathLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNotAfter">resetNotAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOtherSans">resetOtherSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOu">resetOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedDnsDomains">resetPermittedDnsDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedEmailAddresses">resetPermittedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedIpRanges">resetPermittedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedUriDomains">resetPermittedUriDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPrivateKeyFormat">resetPrivateKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetSignatureBits">resetSignatureBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetUriSans">resetUriSans</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAltNames` <a name="resetAltNames" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetAltNames"></a>

```java
public void resetAltNames()
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetExcludeCnFromSans` <a name="resetExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludeCnFromSans"></a>

```java
public void resetExcludeCnFromSans()
```

##### `resetExcludedDnsDomains` <a name="resetExcludedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedDnsDomains"></a>

```java
public void resetExcludedDnsDomains()
```

##### `resetExcludedEmailAddresses` <a name="resetExcludedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedEmailAddresses"></a>

```java
public void resetExcludedEmailAddresses()
```

##### `resetExcludedIpRanges` <a name="resetExcludedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedIpRanges"></a>

```java
public void resetExcludedIpRanges()
```

##### `resetExcludedUriDomains` <a name="resetExcludedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedUriDomains"></a>

```java
public void resetExcludedUriDomains()
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetId"></a>

```java
public void resetId()
```

##### `resetIpSans` <a name="resetIpSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIpSans"></a>

```java
public void resetIpSans()
```

##### `resetIssuerName` <a name="resetIssuerName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIssuerName"></a>

```java
public void resetIssuerName()
```

##### `resetKeyBits` <a name="resetKeyBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyBits"></a>

```java
public void resetKeyBits()
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyName"></a>

```java
public void resetKeyName()
```

##### `resetKeyRef` <a name="resetKeyRef" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyRef"></a>

```java
public void resetKeyRef()
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyType"></a>

```java
public void resetKeyType()
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetManagedKeyId` <a name="resetManagedKeyId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyId"></a>

```java
public void resetManagedKeyId()
```

##### `resetManagedKeyName` <a name="resetManagedKeyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyName"></a>

```java
public void resetManagedKeyName()
```

##### `resetMaxPathLength` <a name="resetMaxPathLength" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetMaxPathLength"></a>

```java
public void resetMaxPathLength()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNotAfter` <a name="resetNotAfter" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNotAfter"></a>

```java
public void resetNotAfter()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetOtherSans` <a name="resetOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOtherSans"></a>

```java
public void resetOtherSans()
```

##### `resetOu` <a name="resetOu" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOu"></a>

```java
public void resetOu()
```

##### `resetPermittedDnsDomains` <a name="resetPermittedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedDnsDomains"></a>

```java
public void resetPermittedDnsDomains()
```

##### `resetPermittedEmailAddresses` <a name="resetPermittedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedEmailAddresses"></a>

```java
public void resetPermittedEmailAddresses()
```

##### `resetPermittedIpRanges` <a name="resetPermittedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedIpRanges"></a>

```java
public void resetPermittedIpRanges()
```

##### `resetPermittedUriDomains` <a name="resetPermittedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedUriDomains"></a>

```java
public void resetPermittedUriDomains()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetPrivateKeyFormat` <a name="resetPrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPrivateKeyFormat"></a>

```java
public void resetPrivateKeyFormat()
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetProvince"></a>

```java
public void resetProvince()
```

##### `resetSignatureBits` <a name="resetSignatureBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetSignatureBits"></a>

```java
public void resetSignatureBits()
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetStreetAddress"></a>

```java
public void resetStreetAddress()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetUriSans` <a name="resetUriSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetUriSans"></a>

```java
public void resetUriSans()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendRootCert resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_root_cert.PkiSecretBackendRootCert;

PkiSecretBackendRootCert.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_root_cert.PkiSecretBackendRootCert;

PkiSecretBackendRootCert.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_root_cert.PkiSecretBackendRootCert;

PkiSecretBackendRootCert.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_root_cert.PkiSecretBackendRootCert;

PkiSecretBackendRootCert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiSecretBackendRootCert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PkiSecretBackendRootCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiSecretBackendRootCert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiSecretBackendRootCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendRootCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerId">issuerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuingCa">issuingCa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNamesInput">altNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSansInput">excludeCnFromSansInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomainsInput">excludedDnsDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddressesInput">excludedEmailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRangesInput">excludedIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomainsInput">excludedUriDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSansInput">ipSansInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerNameInput">issuerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBitsInput">keyBitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRefInput">keyRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.localityInput">localityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyIdInput">managedKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyNameInput">managedKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLengthInput">maxPathLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfterInput">notAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSansInput">otherSansInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ouInput">ouInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomainsInput">permittedDnsDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddressesInput">permittedEmailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRangesInput">permittedIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomainsInput">permittedUriDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormatInput">privateKeyFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provinceInput">provinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBitsInput">signatureBitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddressInput">streetAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSansInput">uriSansInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNames">altNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSans">excludeCnFromSans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomains">excludedDnsDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddresses">excludedEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRanges">excludedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomains">excludedUriDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSans">ipSans</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerName">issuerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBits">keyBits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRef">keyRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.locality">locality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyId">managedKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyName">managedKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLength">maxPathLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfter">notAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSans">otherSans</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ou">ou</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomains">permittedDnsDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddresses">permittedEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRanges">permittedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomains">permittedUriDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormat">privateKeyFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBits">signatureBits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSans">uriSans</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `issuerId`<sup>Required</sup> <a name="issuerId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerId"></a>

```java
public java.lang.String getIssuerId();
```

- *Type:* java.lang.String

---

##### `issuingCa`<sup>Required</sup> <a name="issuingCa" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuingCa"></a>

```java
public java.lang.String getIssuingCa();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `altNamesInput`<sup>Optional</sup> <a name="altNamesInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNamesInput"></a>

```java
public java.util.List<java.lang.String> getAltNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `excludeCnFromSansInput`<sup>Optional</sup> <a name="excludeCnFromSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSansInput"></a>

```java
public java.lang.Object getExcludeCnFromSansInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludedDnsDomainsInput`<sup>Optional</sup> <a name="excludedDnsDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomainsInput"></a>

```java
public java.util.List<java.lang.String> getExcludedDnsDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedEmailAddressesInput`<sup>Optional</sup> <a name="excludedEmailAddressesInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedIpRangesInput`<sup>Optional</sup> <a name="excludedIpRangesInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedUriDomainsInput`<sup>Optional</sup> <a name="excludedUriDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomainsInput"></a>

```java
public java.util.List<java.lang.String> getExcludedUriDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipSansInput`<sup>Optional</sup> <a name="ipSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSansInput"></a>

```java
public java.util.List<java.lang.String> getIpSansInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerNameInput`<sup>Optional</sup> <a name="issuerNameInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerNameInput"></a>

```java
public java.lang.String getIssuerNameInput();
```

- *Type:* java.lang.String

---

##### `keyBitsInput`<sup>Optional</sup> <a name="keyBitsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBitsInput"></a>

```java
public java.lang.Number getKeyBitsInput();
```

- *Type:* java.lang.Number

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `keyRefInput`<sup>Optional</sup> <a name="keyRefInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRefInput"></a>

```java
public java.lang.String getKeyRefInput();
```

- *Type:* java.lang.String

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.localityInput"></a>

```java
public java.lang.String getLocalityInput();
```

- *Type:* java.lang.String

---

##### `managedKeyIdInput`<sup>Optional</sup> <a name="managedKeyIdInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyIdInput"></a>

```java
public java.lang.String getManagedKeyIdInput();
```

- *Type:* java.lang.String

---

##### `managedKeyNameInput`<sup>Optional</sup> <a name="managedKeyNameInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyNameInput"></a>

```java
public java.lang.String getManagedKeyNameInput();
```

- *Type:* java.lang.String

---

##### `maxPathLengthInput`<sup>Optional</sup> <a name="maxPathLengthInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLengthInput"></a>

```java
public java.lang.Number getMaxPathLengthInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `notAfterInput`<sup>Optional</sup> <a name="notAfterInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfterInput"></a>

```java
public java.lang.String getNotAfterInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `otherSansInput`<sup>Optional</sup> <a name="otherSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSansInput"></a>

```java
public java.util.List<java.lang.String> getOtherSansInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ouInput`<sup>Optional</sup> <a name="ouInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ouInput"></a>

```java
public java.lang.String getOuInput();
```

- *Type:* java.lang.String

---

##### `permittedDnsDomainsInput`<sup>Optional</sup> <a name="permittedDnsDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomainsInput"></a>

```java
public java.util.List<java.lang.String> getPermittedDnsDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedEmailAddressesInput`<sup>Optional</sup> <a name="permittedEmailAddressesInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getPermittedEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedIpRangesInput`<sup>Optional</sup> <a name="permittedIpRangesInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getPermittedIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedUriDomainsInput`<sup>Optional</sup> <a name="permittedUriDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomainsInput"></a>

```java
public java.util.List<java.lang.String> getPermittedUriDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `privateKeyFormatInput`<sup>Optional</sup> <a name="privateKeyFormatInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormatInput"></a>

```java
public java.lang.String getPrivateKeyFormatInput();
```

- *Type:* java.lang.String

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provinceInput"></a>

```java
public java.lang.String getProvinceInput();
```

- *Type:* java.lang.String

---

##### `signatureBitsInput`<sup>Optional</sup> <a name="signatureBitsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBitsInput"></a>

```java
public java.lang.Number getSignatureBitsInput();
```

- *Type:* java.lang.Number

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddressInput"></a>

```java
public java.lang.String getStreetAddressInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uriSansInput`<sup>Optional</sup> <a name="uriSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSansInput"></a>

```java
public java.util.List<java.lang.String> getUriSansInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `altNames`<sup>Required</sup> <a name="altNames" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNames"></a>

```java
public java.util.List<java.lang.String> getAltNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `excludeCnFromSans`<sup>Required</sup> <a name="excludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSans"></a>

```java
public java.lang.Object getExcludeCnFromSans();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludedDnsDomains`<sup>Required</sup> <a name="excludedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomains"></a>

```java
public java.util.List<java.lang.String> getExcludedDnsDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedEmailAddresses`<sup>Required</sup> <a name="excludedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getExcludedEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedIpRanges`<sup>Required</sup> <a name="excludedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRanges"></a>

```java
public java.util.List<java.lang.String> getExcludedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedUriDomains`<sup>Required</sup> <a name="excludedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomains"></a>

```java
public java.util.List<java.lang.String> getExcludedUriDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipSans`<sup>Required</sup> <a name="ipSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSans"></a>

```java
public java.util.List<java.lang.String> getIpSans();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerName`<sup>Required</sup> <a name="issuerName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerName"></a>

```java
public java.lang.String getIssuerName();
```

- *Type:* java.lang.String

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBits"></a>

```java
public java.lang.Number getKeyBits();
```

- *Type:* java.lang.Number

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `keyRef`<sup>Required</sup> <a name="keyRef" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRef"></a>

```java
public java.lang.String getKeyRef();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

---

##### `managedKeyId`<sup>Required</sup> <a name="managedKeyId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyId"></a>

```java
public java.lang.String getManagedKeyId();
```

- *Type:* java.lang.String

---

##### `managedKeyName`<sup>Required</sup> <a name="managedKeyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyName"></a>

```java
public java.lang.String getManagedKeyName();
```

- *Type:* java.lang.String

---

##### `maxPathLength`<sup>Required</sup> <a name="maxPathLength" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLength"></a>

```java
public java.lang.Number getMaxPathLength();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfter"></a>

```java
public java.lang.String getNotAfter();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `otherSans`<sup>Required</sup> <a name="otherSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSans"></a>

```java
public java.util.List<java.lang.String> getOtherSans();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ou`<sup>Required</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ou"></a>

```java
public java.lang.String getOu();
```

- *Type:* java.lang.String

---

##### `permittedDnsDomains`<sup>Required</sup> <a name="permittedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomains"></a>

```java
public java.util.List<java.lang.String> getPermittedDnsDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedEmailAddresses`<sup>Required</sup> <a name="permittedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getPermittedEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedIpRanges`<sup>Required</sup> <a name="permittedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRanges"></a>

```java
public java.util.List<java.lang.String> getPermittedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedUriDomains`<sup>Required</sup> <a name="permittedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomains"></a>

```java
public java.util.List<java.lang.String> getPermittedUriDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `privateKeyFormat`<sup>Required</sup> <a name="privateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormat"></a>

```java
public java.lang.String getPrivateKeyFormat();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `signatureBits`<sup>Required</sup> <a name="signatureBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBits"></a>

```java
public java.lang.Number getSignatureBits();
```

- *Type:* java.lang.Number

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uriSans`<sup>Required</sup> <a name="uriSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSans"></a>

```java
public java.util.List<java.lang.String> getUriSans();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendRootCertConfig <a name="PkiSecretBackendRootCertConfig" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_root_cert.PkiSecretBackendRootCertConfig;

PkiSecretBackendRootCertConfig.builder()
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
    .commonName(java.lang.String)
    .type(java.lang.String)
//  .altNames(java.util.List<java.lang.String>)
//  .country(java.lang.String)
//  .excludeCnFromSans(java.lang.Boolean)
//  .excludeCnFromSans(IResolvable)
//  .excludedDnsDomains(java.util.List<java.lang.String>)
//  .excludedEmailAddresses(java.util.List<java.lang.String>)
//  .excludedIpRanges(java.util.List<java.lang.String>)
//  .excludedUriDomains(java.util.List<java.lang.String>)
//  .format(java.lang.String)
//  .id(java.lang.String)
//  .ipSans(java.util.List<java.lang.String>)
//  .issuerName(java.lang.String)
//  .keyBits(java.lang.Number)
//  .keyName(java.lang.String)
//  .keyRef(java.lang.String)
//  .keyType(java.lang.String)
//  .locality(java.lang.String)
//  .managedKeyId(java.lang.String)
//  .managedKeyName(java.lang.String)
//  .maxPathLength(java.lang.Number)
//  .namespace(java.lang.String)
//  .notAfter(java.lang.String)
//  .organization(java.lang.String)
//  .otherSans(java.util.List<java.lang.String>)
//  .ou(java.lang.String)
//  .permittedDnsDomains(java.util.List<java.lang.String>)
//  .permittedEmailAddresses(java.util.List<java.lang.String>)
//  .permittedIpRanges(java.util.List<java.lang.String>)
//  .permittedUriDomains(java.util.List<java.lang.String>)
//  .postalCode(java.lang.String)
//  .privateKeyFormat(java.lang.String)
//  .province(java.lang.String)
//  .signatureBits(java.lang.Number)
//  .streetAddress(java.lang.String)
//  .ttl(java.lang.String)
//  .uriSans(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.commonName">commonName</a></code> | <code>java.lang.String</code> | CN of root to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of root to create. Must be either "existing", "exported", "internal" or "kms". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.altNames">altNames</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.country">country</a></code> | <code>java.lang.String</code> | The country. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludeCnFromSans">excludeCnFromSans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedDnsDomains">excludedDnsDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedEmailAddresses">excludedEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of email addresses for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedIpRanges">excludedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | List of IP ranges for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedUriDomains">excludedUriDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of URI domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.format">format</a></code> | <code>java.lang.String</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#id PkiSecretBackendRootCert#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ipSans">ipSans</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.issuerName">issuerName</a></code> | <code>java.lang.String</code> | Provides a name to the specified issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyBits">keyBits</a></code> | <code>java.lang.Number</code> | The number of bits to use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | When a new key is created with this request, optionally specifies the name for this. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyRef">keyRef</a></code> | <code>java.lang.String</code> | Specifies the key to use for generating this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyType">keyType</a></code> | <code>java.lang.String</code> | The desired key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.locality">locality</a></code> | <code>java.lang.String</code> | The locality. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyId">managedKeyId</a></code> | <code>java.lang.String</code> | The ID of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyName">managedKeyName</a></code> | <code>java.lang.String</code> | The name of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.maxPathLength">maxPathLength</a></code> | <code>java.lang.Number</code> | The maximum path length to encode in the generated certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.notAfter">notAfter</a></code> | <code>java.lang.String</code> | Set the Not After field of the certificate with specified date value. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The organization. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.otherSans">otherSans</a></code> | <code>java.util.List<java.lang.String></code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ou">ou</a></code> | <code>java.lang.String</code> | The organization unit. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedDnsDomains">permittedDnsDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedEmailAddresses">permittedEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of email addresses for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedIpRanges">permittedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | List of IP ranges for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedUriDomains">permittedUriDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of URI domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | The postal code. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.privateKeyFormat">privateKeyFormat</a></code> | <code>java.lang.String</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.province">province</a></code> | <code>java.lang.String</code> | The province. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.signatureBits">signatureBits</a></code> | <code>java.lang.Number</code> | The number of bits to use in the signature algorithm. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | The street address. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.uriSans">uriSans</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative URIs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#backend PkiSecretBackendRootCert#backend}

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

CN of root to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#common_name PkiSecretBackendRootCert#common_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of root to create. Must be either "existing", "exported", "internal" or "kms".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#type PkiSecretBackendRootCert#type}

---

##### `altNames`<sup>Optional</sup> <a name="altNames" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.altNames"></a>

```java
public java.util.List<java.lang.String> getAltNames();
```

- *Type:* java.util.List<java.lang.String>

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#alt_names PkiSecretBackendRootCert#alt_names}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

The country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#country PkiSecretBackendRootCert#country}

---

##### `excludeCnFromSans`<sup>Optional</sup> <a name="excludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludeCnFromSans"></a>

```java
public java.lang.Object getExcludeCnFromSans();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#exclude_cn_from_sans PkiSecretBackendRootCert#exclude_cn_from_sans}

---

##### `excludedDnsDomains`<sup>Optional</sup> <a name="excludedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedDnsDomains"></a>

```java
public java.util.List<java.lang.String> getExcludedDnsDomains();
```

- *Type:* java.util.List<java.lang.String>

List of domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#excluded_dns_domains PkiSecretBackendRootCert#excluded_dns_domains}

---

##### `excludedEmailAddresses`<sup>Optional</sup> <a name="excludedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getExcludedEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

List of email addresses for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#excluded_email_addresses PkiSecretBackendRootCert#excluded_email_addresses}

---

##### `excludedIpRanges`<sup>Optional</sup> <a name="excludedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedIpRanges"></a>

```java
public java.util.List<java.lang.String> getExcludedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

List of IP ranges for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#excluded_ip_ranges PkiSecretBackendRootCert#excluded_ip_ranges}

---

##### `excludedUriDomains`<sup>Optional</sup> <a name="excludedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedUriDomains"></a>

```java
public java.util.List<java.lang.String> getExcludedUriDomains();
```

- *Type:* java.util.List<java.lang.String>

List of URI domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#excluded_uri_domains PkiSecretBackendRootCert#excluded_uri_domains}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#format PkiSecretBackendRootCert#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#id PkiSecretBackendRootCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipSans`<sup>Optional</sup> <a name="ipSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ipSans"></a>

```java
public java.util.List<java.lang.String> getIpSans();
```

- *Type:* java.util.List<java.lang.String>

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#ip_sans PkiSecretBackendRootCert#ip_sans}

---

##### `issuerName`<sup>Optional</sup> <a name="issuerName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.issuerName"></a>

```java
public java.lang.String getIssuerName();
```

- *Type:* java.lang.String

Provides a name to the specified issuer.

The name must be unique across all issuers and not be the reserved value 'default'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#issuer_name PkiSecretBackendRootCert#issuer_name}

---

##### `keyBits`<sup>Optional</sup> <a name="keyBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyBits"></a>

```java
public java.lang.Number getKeyBits();
```

- *Type:* java.lang.Number

The number of bits to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#key_bits PkiSecretBackendRootCert#key_bits}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

When a new key is created with this request, optionally specifies the name for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#key_name PkiSecretBackendRootCert#key_name}

---

##### `keyRef`<sup>Optional</sup> <a name="keyRef" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyRef"></a>

```java
public java.lang.String getKeyRef();
```

- *Type:* java.lang.String

Specifies the key to use for generating this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#key_ref PkiSecretBackendRootCert#key_ref}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

The desired key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#key_type PkiSecretBackendRootCert#key_type}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

The locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#locality PkiSecretBackendRootCert#locality}

---

##### `managedKeyId`<sup>Optional</sup> <a name="managedKeyId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyId"></a>

```java
public java.lang.String getManagedKeyId();
```

- *Type:* java.lang.String

The ID of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#managed_key_id PkiSecretBackendRootCert#managed_key_id}

---

##### `managedKeyName`<sup>Optional</sup> <a name="managedKeyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyName"></a>

```java
public java.lang.String getManagedKeyName();
```

- *Type:* java.lang.String

The name of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#managed_key_name PkiSecretBackendRootCert#managed_key_name}

---

##### `maxPathLength`<sup>Optional</sup> <a name="maxPathLength" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.maxPathLength"></a>

```java
public java.lang.Number getMaxPathLength();
```

- *Type:* java.lang.Number

The maximum path length to encode in the generated certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#max_path_length PkiSecretBackendRootCert#max_path_length}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#namespace PkiSecretBackendRootCert#namespace}

---

##### `notAfter`<sup>Optional</sup> <a name="notAfter" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.notAfter"></a>

```java
public java.lang.String getNotAfter();
```

- *Type:* java.lang.String

Set the Not After field of the certificate with specified date value.

The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ. Supports the Y10K end date for IEEE 802.1AR-2018 standard devices, 9999-12-31T23:59:59Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#not_after PkiSecretBackendRootCert#not_after}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#organization PkiSecretBackendRootCert#organization}

---

##### `otherSans`<sup>Optional</sup> <a name="otherSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.otherSans"></a>

```java
public java.util.List<java.lang.String> getOtherSans();
```

- *Type:* java.util.List<java.lang.String>

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#other_sans PkiSecretBackendRootCert#other_sans}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ou"></a>

```java
public java.lang.String getOu();
```

- *Type:* java.lang.String

The organization unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#ou PkiSecretBackendRootCert#ou}

---

##### `permittedDnsDomains`<sup>Optional</sup> <a name="permittedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedDnsDomains"></a>

```java
public java.util.List<java.lang.String> getPermittedDnsDomains();
```

- *Type:* java.util.List<java.lang.String>

List of domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#permitted_dns_domains PkiSecretBackendRootCert#permitted_dns_domains}

---

##### `permittedEmailAddresses`<sup>Optional</sup> <a name="permittedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getPermittedEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

List of email addresses for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#permitted_email_addresses PkiSecretBackendRootCert#permitted_email_addresses}

---

##### `permittedIpRanges`<sup>Optional</sup> <a name="permittedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedIpRanges"></a>

```java
public java.util.List<java.lang.String> getPermittedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

List of IP ranges for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#permitted_ip_ranges PkiSecretBackendRootCert#permitted_ip_ranges}

---

##### `permittedUriDomains`<sup>Optional</sup> <a name="permittedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedUriDomains"></a>

```java
public java.util.List<java.lang.String> getPermittedUriDomains();
```

- *Type:* java.util.List<java.lang.String>

List of URI domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#permitted_uri_domains PkiSecretBackendRootCert#permitted_uri_domains}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

The postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#postal_code PkiSecretBackendRootCert#postal_code}

---

##### `privateKeyFormat`<sup>Optional</sup> <a name="privateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.privateKeyFormat"></a>

```java
public java.lang.String getPrivateKeyFormat();
```

- *Type:* java.lang.String

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#private_key_format PkiSecretBackendRootCert#private_key_format}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

The province.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#province PkiSecretBackendRootCert#province}

---

##### `signatureBits`<sup>Optional</sup> <a name="signatureBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.signatureBits"></a>

```java
public java.lang.Number getSignatureBits();
```

- *Type:* java.lang.Number

The number of bits to use in the signature algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#signature_bits PkiSecretBackendRootCert#signature_bits}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

The street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#street_address PkiSecretBackendRootCert#street_address}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#ttl PkiSecretBackendRootCert#ttl}

---

##### `uriSans`<sup>Optional</sup> <a name="uriSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.uriSans"></a>

```java
public java.util.List<java.lang.String> getUriSans();
```

- *Type:* java.util.List<java.lang.String>

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_root_cert#uri_sans PkiSecretBackendRootCert#uri_sans}

---



