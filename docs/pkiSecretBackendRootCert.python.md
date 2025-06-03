# `pkiSecretBackendRootCert` Submodule <a name="`pkiSecretBackendRootCert` Submodule" id="@cdktf/provider-vault.pkiSecretBackendRootCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendRootCert <a name="PkiSecretBackendRootCert" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert vault_pki_secret_backend_root_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_root_cert

pkiSecretBackendRootCert.PkiSecretBackendRootCert(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  common_name: str,
  type: str,
  alt_names: typing.List[str] = None,
  country: str = None,
  exclude_cn_from_sans: typing.Union[bool, IResolvable] = None,
  excluded_dns_domains: typing.List[str] = None,
  excluded_email_addresses: typing.List[str] = None,
  excluded_ip_ranges: typing.List[str] = None,
  excluded_uri_domains: typing.List[str] = None,
  format: str = None,
  id: str = None,
  ip_sans: typing.List[str] = None,
  issuer_name: str = None,
  key_bits: typing.Union[int, float] = None,
  key_name: str = None,
  key_ref: str = None,
  key_type: str = None,
  locality: str = None,
  managed_key_id: str = None,
  managed_key_name: str = None,
  max_path_length: typing.Union[int, float] = None,
  namespace: str = None,
  not_after: str = None,
  organization: str = None,
  other_sans: typing.List[str] = None,
  ou: str = None,
  permitted_dns_domains: typing.List[str] = None,
  permitted_email_addresses: typing.List[str] = None,
  permitted_ip_ranges: typing.List[str] = None,
  permitted_uri_domains: typing.List[str] = None,
  postal_code: str = None,
  private_key_format: str = None,
  province: str = None,
  signature_bits: typing.Union[int, float] = None,
  street_address: str = None,
  ttl: str = None,
  uri_sans: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.commonName">common_name</a></code> | <code>str</code> | CN of root to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.type">type</a></code> | <code>str</code> | Type of root to create. Must be either "existing", "exported", "internal" or "kms". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.altNames">alt_names</a></code> | <code>typing.List[str]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.country">country</a></code> | <code>str</code> | The country. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludeCnFromSans">exclude_cn_from_sans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedDnsDomains">excluded_dns_domains</a></code> | <code>typing.List[str]</code> | List of domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedEmailAddresses">excluded_email_addresses</a></code> | <code>typing.List[str]</code> | List of email addresses for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedIpRanges">excluded_ip_ranges</a></code> | <code>typing.List[str]</code> | List of IP ranges for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedUriDomains">excluded_uri_domains</a></code> | <code>typing.List[str]</code> | List of URI domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.format">format</a></code> | <code>str</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#id PkiSecretBackendRootCert#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.ipSans">ip_sans</a></code> | <code>typing.List[str]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.issuerName">issuer_name</a></code> | <code>str</code> | Provides a name to the specified issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyBits">key_bits</a></code> | <code>typing.Union[int, float]</code> | The number of bits to use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | When a new key is created with this request, optionally specifies the name for this. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyRef">key_ref</a></code> | <code>str</code> | Specifies the key to use for generating this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyType">key_type</a></code> | <code>str</code> | The desired key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.locality">locality</a></code> | <code>str</code> | The locality. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.managedKeyId">managed_key_id</a></code> | <code>str</code> | The ID of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.managedKeyName">managed_key_name</a></code> | <code>str</code> | The name of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.maxPathLength">max_path_length</a></code> | <code>typing.Union[int, float]</code> | The maximum path length to encode in the generated certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.notAfter">not_after</a></code> | <code>str</code> | Set the Not After field of the certificate with specified date value. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The organization. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.otherSans">other_sans</a></code> | <code>typing.List[str]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.ou">ou</a></code> | <code>str</code> | The organization unit. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedDnsDomains">permitted_dns_domains</a></code> | <code>typing.List[str]</code> | List of domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedEmailAddresses">permitted_email_addresses</a></code> | <code>typing.List[str]</code> | List of email addresses for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedIpRanges">permitted_ip_ranges</a></code> | <code>typing.List[str]</code> | List of IP ranges for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedUriDomains">permitted_uri_domains</a></code> | <code>typing.List[str]</code> | List of URI domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.postalCode">postal_code</a></code> | <code>str</code> | The postal code. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.privateKeyFormat">private_key_format</a></code> | <code>str</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.province">province</a></code> | <code>str</code> | The province. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.signatureBits">signature_bits</a></code> | <code>typing.Union[int, float]</code> | The number of bits to use in the signature algorithm. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.streetAddress">street_address</a></code> | <code>str</code> | The street address. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.uriSans">uri_sans</a></code> | <code>typing.List[str]</code> | List of alternative URIs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.backend"></a>

- *Type:* str

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#backend PkiSecretBackendRootCert#backend}

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.commonName"></a>

- *Type:* str

CN of root to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#common_name PkiSecretBackendRootCert#common_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.type"></a>

- *Type:* str

Type of root to create. Must be either "existing", "exported", "internal" or "kms".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#type PkiSecretBackendRootCert#type}

---

##### `alt_names`<sup>Optional</sup> <a name="alt_names" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.altNames"></a>

- *Type:* typing.List[str]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#alt_names PkiSecretBackendRootCert#alt_names}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.country"></a>

- *Type:* str

The country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#country PkiSecretBackendRootCert#country}

---

##### `exclude_cn_from_sans`<sup>Optional</sup> <a name="exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludeCnFromSans"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#exclude_cn_from_sans PkiSecretBackendRootCert#exclude_cn_from_sans}

---

##### `excluded_dns_domains`<sup>Optional</sup> <a name="excluded_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedDnsDomains"></a>

- *Type:* typing.List[str]

List of domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#excluded_dns_domains PkiSecretBackendRootCert#excluded_dns_domains}

---

##### `excluded_email_addresses`<sup>Optional</sup> <a name="excluded_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedEmailAddresses"></a>

- *Type:* typing.List[str]

List of email addresses for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#excluded_email_addresses PkiSecretBackendRootCert#excluded_email_addresses}

---

##### `excluded_ip_ranges`<sup>Optional</sup> <a name="excluded_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedIpRanges"></a>

- *Type:* typing.List[str]

List of IP ranges for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#excluded_ip_ranges PkiSecretBackendRootCert#excluded_ip_ranges}

---

##### `excluded_uri_domains`<sup>Optional</sup> <a name="excluded_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.excludedUriDomains"></a>

- *Type:* typing.List[str]

List of URI domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#excluded_uri_domains PkiSecretBackendRootCert#excluded_uri_domains}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.format"></a>

- *Type:* str

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#format PkiSecretBackendRootCert#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#id PkiSecretBackendRootCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_sans`<sup>Optional</sup> <a name="ip_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.ipSans"></a>

- *Type:* typing.List[str]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#ip_sans PkiSecretBackendRootCert#ip_sans}

---

##### `issuer_name`<sup>Optional</sup> <a name="issuer_name" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.issuerName"></a>

- *Type:* str

Provides a name to the specified issuer.

The name must be unique across all issuers and not be the reserved value 'default'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#issuer_name PkiSecretBackendRootCert#issuer_name}

---

##### `key_bits`<sup>Optional</sup> <a name="key_bits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyBits"></a>

- *Type:* typing.Union[int, float]

The number of bits to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#key_bits PkiSecretBackendRootCert#key_bits}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyName"></a>

- *Type:* str

When a new key is created with this request, optionally specifies the name for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#key_name PkiSecretBackendRootCert#key_name}

---

##### `key_ref`<sup>Optional</sup> <a name="key_ref" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyRef"></a>

- *Type:* str

Specifies the key to use for generating this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#key_ref PkiSecretBackendRootCert#key_ref}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.keyType"></a>

- *Type:* str

The desired key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#key_type PkiSecretBackendRootCert#key_type}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.locality"></a>

- *Type:* str

The locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#locality PkiSecretBackendRootCert#locality}

---

##### `managed_key_id`<sup>Optional</sup> <a name="managed_key_id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.managedKeyId"></a>

- *Type:* str

The ID of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#managed_key_id PkiSecretBackendRootCert#managed_key_id}

---

##### `managed_key_name`<sup>Optional</sup> <a name="managed_key_name" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.managedKeyName"></a>

- *Type:* str

The name of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#managed_key_name PkiSecretBackendRootCert#managed_key_name}

---

##### `max_path_length`<sup>Optional</sup> <a name="max_path_length" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.maxPathLength"></a>

- *Type:* typing.Union[int, float]

The maximum path length to encode in the generated certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#max_path_length PkiSecretBackendRootCert#max_path_length}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#namespace PkiSecretBackendRootCert#namespace}

---

##### `not_after`<sup>Optional</sup> <a name="not_after" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.notAfter"></a>

- *Type:* str

Set the Not After field of the certificate with specified date value.

The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ. Supports the Y10K end date for IEEE 802.1AR-2018 standard devices, 9999-12-31T23:59:59Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#not_after PkiSecretBackendRootCert#not_after}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.organization"></a>

- *Type:* str

The organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#organization PkiSecretBackendRootCert#organization}

---

##### `other_sans`<sup>Optional</sup> <a name="other_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.otherSans"></a>

- *Type:* typing.List[str]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#other_sans PkiSecretBackendRootCert#other_sans}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.ou"></a>

- *Type:* str

The organization unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#ou PkiSecretBackendRootCert#ou}

---

##### `permitted_dns_domains`<sup>Optional</sup> <a name="permitted_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedDnsDomains"></a>

- *Type:* typing.List[str]

List of domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#permitted_dns_domains PkiSecretBackendRootCert#permitted_dns_domains}

---

##### `permitted_email_addresses`<sup>Optional</sup> <a name="permitted_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedEmailAddresses"></a>

- *Type:* typing.List[str]

List of email addresses for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#permitted_email_addresses PkiSecretBackendRootCert#permitted_email_addresses}

---

##### `permitted_ip_ranges`<sup>Optional</sup> <a name="permitted_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedIpRanges"></a>

- *Type:* typing.List[str]

List of IP ranges for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#permitted_ip_ranges PkiSecretBackendRootCert#permitted_ip_ranges}

---

##### `permitted_uri_domains`<sup>Optional</sup> <a name="permitted_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.permittedUriDomains"></a>

- *Type:* typing.List[str]

List of URI domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#permitted_uri_domains PkiSecretBackendRootCert#permitted_uri_domains}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.postalCode"></a>

- *Type:* str

The postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#postal_code PkiSecretBackendRootCert#postal_code}

---

##### `private_key_format`<sup>Optional</sup> <a name="private_key_format" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.privateKeyFormat"></a>

- *Type:* str

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#private_key_format PkiSecretBackendRootCert#private_key_format}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.province"></a>

- *Type:* str

The province.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#province PkiSecretBackendRootCert#province}

---

##### `signature_bits`<sup>Optional</sup> <a name="signature_bits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.signatureBits"></a>

- *Type:* typing.Union[int, float]

The number of bits to use in the signature algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#signature_bits PkiSecretBackendRootCert#signature_bits}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.streetAddress"></a>

- *Type:* str

The street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#street_address PkiSecretBackendRootCert#street_address}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.ttl"></a>

- *Type:* str

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#ttl PkiSecretBackendRootCert#ttl}

---

##### `uri_sans`<sup>Optional</sup> <a name="uri_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.uriSans"></a>

- *Type:* typing.List[str]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#uri_sans PkiSecretBackendRootCert#uri_sans}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetAltNames">reset_alt_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludeCnFromSans">reset_exclude_cn_from_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedDnsDomains">reset_excluded_dns_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedEmailAddresses">reset_excluded_email_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedIpRanges">reset_excluded_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedUriDomains">reset_excluded_uri_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIpSans">reset_ip_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIssuerName">reset_issuer_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyBits">reset_key_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyRef">reset_key_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyType">reset_key_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyId">reset_managed_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyName">reset_managed_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetMaxPathLength">reset_max_path_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNotAfter">reset_not_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOtherSans">reset_other_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOu">reset_ou</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedDnsDomains">reset_permitted_dns_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedEmailAddresses">reset_permitted_email_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedIpRanges">reset_permitted_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedUriDomains">reset_permitted_uri_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPrivateKeyFormat">reset_private_key_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetProvince">reset_province</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetSignatureBits">reset_signature_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetStreetAddress">reset_street_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetUriSans">reset_uri_sans</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_alt_names` <a name="reset_alt_names" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetAltNames"></a>

```python
def reset_alt_names() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_exclude_cn_from_sans` <a name="reset_exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludeCnFromSans"></a>

```python
def reset_exclude_cn_from_sans() -> None
```

##### `reset_excluded_dns_domains` <a name="reset_excluded_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedDnsDomains"></a>

```python
def reset_excluded_dns_domains() -> None
```

##### `reset_excluded_email_addresses` <a name="reset_excluded_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedEmailAddresses"></a>

```python
def reset_excluded_email_addresses() -> None
```

##### `reset_excluded_ip_ranges` <a name="reset_excluded_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedIpRanges"></a>

```python
def reset_excluded_ip_ranges() -> None
```

##### `reset_excluded_uri_domains` <a name="reset_excluded_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedUriDomains"></a>

```python
def reset_excluded_uri_domains() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_sans` <a name="reset_ip_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIpSans"></a>

```python
def reset_ip_sans() -> None
```

##### `reset_issuer_name` <a name="reset_issuer_name" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIssuerName"></a>

```python
def reset_issuer_name() -> None
```

##### `reset_key_bits` <a name="reset_key_bits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyBits"></a>

```python
def reset_key_bits() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_key_ref` <a name="reset_key_ref" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyRef"></a>

```python
def reset_key_ref() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyType"></a>

```python
def reset_key_type() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_managed_key_id` <a name="reset_managed_key_id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyId"></a>

```python
def reset_managed_key_id() -> None
```

##### `reset_managed_key_name` <a name="reset_managed_key_name" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyName"></a>

```python
def reset_managed_key_name() -> None
```

##### `reset_max_path_length` <a name="reset_max_path_length" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetMaxPathLength"></a>

```python
def reset_max_path_length() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_not_after` <a name="reset_not_after" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNotAfter"></a>

```python
def reset_not_after() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_other_sans` <a name="reset_other_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOtherSans"></a>

```python
def reset_other_sans() -> None
```

##### `reset_ou` <a name="reset_ou" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOu"></a>

```python
def reset_ou() -> None
```

##### `reset_permitted_dns_domains` <a name="reset_permitted_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedDnsDomains"></a>

```python
def reset_permitted_dns_domains() -> None
```

##### `reset_permitted_email_addresses` <a name="reset_permitted_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedEmailAddresses"></a>

```python
def reset_permitted_email_addresses() -> None
```

##### `reset_permitted_ip_ranges` <a name="reset_permitted_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedIpRanges"></a>

```python
def reset_permitted_ip_ranges() -> None
```

##### `reset_permitted_uri_domains` <a name="reset_permitted_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedUriDomains"></a>

```python
def reset_permitted_uri_domains() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_private_key_format` <a name="reset_private_key_format" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPrivateKeyFormat"></a>

```python
def reset_private_key_format() -> None
```

##### `reset_province` <a name="reset_province" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetProvince"></a>

```python
def reset_province() -> None
```

##### `reset_signature_bits` <a name="reset_signature_bits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetSignatureBits"></a>

```python
def reset_signature_bits() -> None
```

##### `reset_street_address` <a name="reset_street_address" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetStreetAddress"></a>

```python
def reset_street_address() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_uri_sans` <a name="reset_uri_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetUriSans"></a>

```python
def reset_uri_sans() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PkiSecretBackendRootCert resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_root_cert

pkiSecretBackendRootCert.PkiSecretBackendRootCert.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_root_cert

pkiSecretBackendRootCert.PkiSecretBackendRootCert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_root_cert

pkiSecretBackendRootCert.PkiSecretBackendRootCert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_root_cert

pkiSecretBackendRootCert.PkiSecretBackendRootCert.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PkiSecretBackendRootCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiSecretBackendRootCert to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiSecretBackendRootCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendRootCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerId">issuer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuingCa">issuing_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNamesInput">alt_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSansInput">exclude_cn_from_sans_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomainsInput">excluded_dns_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddressesInput">excluded_email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRangesInput">excluded_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomainsInput">excluded_uri_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSansInput">ip_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerNameInput">issuer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBitsInput">key_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRefInput">key_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyIdInput">managed_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyNameInput">managed_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLengthInput">max_path_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfterInput">not_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSansInput">other_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ouInput">ou_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomainsInput">permitted_dns_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddressesInput">permitted_email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRangesInput">permitted_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomainsInput">permitted_uri_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormatInput">private_key_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provinceInput">province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBitsInput">signature_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddressInput">street_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSansInput">uri_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNames">alt_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSans">exclude_cn_from_sans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomains">excluded_dns_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddresses">excluded_email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRanges">excluded_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomains">excluded_uri_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSans">ip_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerName">issuer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBits">key_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRef">key_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyId">managed_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyName">managed_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLength">max_path_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfter">not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSans">other_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ou">ou</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomains">permitted_dns_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddresses">permitted_email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRanges">permitted_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomains">permitted_uri_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormat">private_key_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBits">signature_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddress">street_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSans">uri_sans</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `issuer_id`<sup>Required</sup> <a name="issuer_id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerId"></a>

```python
issuer_id: str
```

- *Type:* str

---

##### `issuing_ca`<sup>Required</sup> <a name="issuing_ca" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuingCa"></a>

```python
issuing_ca: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `alt_names_input`<sup>Optional</sup> <a name="alt_names_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNamesInput"></a>

```python
alt_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `exclude_cn_from_sans_input`<sup>Optional</sup> <a name="exclude_cn_from_sans_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSansInput"></a>

```python
exclude_cn_from_sans_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `excluded_dns_domains_input`<sup>Optional</sup> <a name="excluded_dns_domains_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomainsInput"></a>

```python
excluded_dns_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_email_addresses_input`<sup>Optional</sup> <a name="excluded_email_addresses_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddressesInput"></a>

```python
excluded_email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_ip_ranges_input`<sup>Optional</sup> <a name="excluded_ip_ranges_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRangesInput"></a>

```python
excluded_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_uri_domains_input`<sup>Optional</sup> <a name="excluded_uri_domains_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomainsInput"></a>

```python
excluded_uri_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_sans_input`<sup>Optional</sup> <a name="ip_sans_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSansInput"></a>

```python
ip_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_name_input`<sup>Optional</sup> <a name="issuer_name_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerNameInput"></a>

```python
issuer_name_input: str
```

- *Type:* str

---

##### `key_bits_input`<sup>Optional</sup> <a name="key_bits_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBitsInput"></a>

```python
key_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `key_ref_input`<sup>Optional</sup> <a name="key_ref_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRefInput"></a>

```python
key_ref_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `managed_key_id_input`<sup>Optional</sup> <a name="managed_key_id_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyIdInput"></a>

```python
managed_key_id_input: str
```

- *Type:* str

---

##### `managed_key_name_input`<sup>Optional</sup> <a name="managed_key_name_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyNameInput"></a>

```python
managed_key_name_input: str
```

- *Type:* str

---

##### `max_path_length_input`<sup>Optional</sup> <a name="max_path_length_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLengthInput"></a>

```python
max_path_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `not_after_input`<sup>Optional</sup> <a name="not_after_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfterInput"></a>

```python
not_after_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `other_sans_input`<sup>Optional</sup> <a name="other_sans_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSansInput"></a>

```python
other_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ou_input`<sup>Optional</sup> <a name="ou_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ouInput"></a>

```python
ou_input: str
```

- *Type:* str

---

##### `permitted_dns_domains_input`<sup>Optional</sup> <a name="permitted_dns_domains_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomainsInput"></a>

```python
permitted_dns_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permitted_email_addresses_input`<sup>Optional</sup> <a name="permitted_email_addresses_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddressesInput"></a>

```python
permitted_email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permitted_ip_ranges_input`<sup>Optional</sup> <a name="permitted_ip_ranges_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRangesInput"></a>

```python
permitted_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permitted_uri_domains_input`<sup>Optional</sup> <a name="permitted_uri_domains_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomainsInput"></a>

```python
permitted_uri_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `private_key_format_input`<sup>Optional</sup> <a name="private_key_format_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormatInput"></a>

```python
private_key_format_input: str
```

- *Type:* str

---

##### `province_input`<sup>Optional</sup> <a name="province_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provinceInput"></a>

```python
province_input: str
```

- *Type:* str

---

##### `signature_bits_input`<sup>Optional</sup> <a name="signature_bits_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBitsInput"></a>

```python
signature_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `street_address_input`<sup>Optional</sup> <a name="street_address_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddressInput"></a>

```python
street_address_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uri_sans_input`<sup>Optional</sup> <a name="uri_sans_input" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSansInput"></a>

```python
uri_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alt_names`<sup>Required</sup> <a name="alt_names" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNames"></a>

```python
alt_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `exclude_cn_from_sans`<sup>Required</sup> <a name="exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSans"></a>

```python
exclude_cn_from_sans: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `excluded_dns_domains`<sup>Required</sup> <a name="excluded_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomains"></a>

```python
excluded_dns_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_email_addresses`<sup>Required</sup> <a name="excluded_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddresses"></a>

```python
excluded_email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_ip_ranges`<sup>Required</sup> <a name="excluded_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRanges"></a>

```python
excluded_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_uri_domains`<sup>Required</sup> <a name="excluded_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomains"></a>

```python
excluded_uri_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_sans`<sup>Required</sup> <a name="ip_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSans"></a>

```python
ip_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_name`<sup>Required</sup> <a name="issuer_name" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerName"></a>

```python
issuer_name: str
```

- *Type:* str

---

##### `key_bits`<sup>Required</sup> <a name="key_bits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBits"></a>

```python
key_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `key_ref`<sup>Required</sup> <a name="key_ref" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRef"></a>

```python
key_ref: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `managed_key_id`<sup>Required</sup> <a name="managed_key_id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyId"></a>

```python
managed_key_id: str
```

- *Type:* str

---

##### `managed_key_name`<sup>Required</sup> <a name="managed_key_name" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyName"></a>

```python
managed_key_name: str
```

- *Type:* str

---

##### `max_path_length`<sup>Required</sup> <a name="max_path_length" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLength"></a>

```python
max_path_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `not_after`<sup>Required</sup> <a name="not_after" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfter"></a>

```python
not_after: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `other_sans`<sup>Required</sup> <a name="other_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSans"></a>

```python
other_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ou`<sup>Required</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ou"></a>

```python
ou: str
```

- *Type:* str

---

##### `permitted_dns_domains`<sup>Required</sup> <a name="permitted_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomains"></a>

```python
permitted_dns_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permitted_email_addresses`<sup>Required</sup> <a name="permitted_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddresses"></a>

```python
permitted_email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permitted_ip_ranges`<sup>Required</sup> <a name="permitted_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRanges"></a>

```python
permitted_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permitted_uri_domains`<sup>Required</sup> <a name="permitted_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomains"></a>

```python
permitted_uri_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `private_key_format`<sup>Required</sup> <a name="private_key_format" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormat"></a>

```python
private_key_format: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `signature_bits`<sup>Required</sup> <a name="signature_bits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBits"></a>

```python
signature_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri_sans`<sup>Required</sup> <a name="uri_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSans"></a>

```python
uri_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendRootCertConfig <a name="PkiSecretBackendRootCertConfig" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_root_cert

pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  common_name: str,
  type: str,
  alt_names: typing.List[str] = None,
  country: str = None,
  exclude_cn_from_sans: typing.Union[bool, IResolvable] = None,
  excluded_dns_domains: typing.List[str] = None,
  excluded_email_addresses: typing.List[str] = None,
  excluded_ip_ranges: typing.List[str] = None,
  excluded_uri_domains: typing.List[str] = None,
  format: str = None,
  id: str = None,
  ip_sans: typing.List[str] = None,
  issuer_name: str = None,
  key_bits: typing.Union[int, float] = None,
  key_name: str = None,
  key_ref: str = None,
  key_type: str = None,
  locality: str = None,
  managed_key_id: str = None,
  managed_key_name: str = None,
  max_path_length: typing.Union[int, float] = None,
  namespace: str = None,
  not_after: str = None,
  organization: str = None,
  other_sans: typing.List[str] = None,
  ou: str = None,
  permitted_dns_domains: typing.List[str] = None,
  permitted_email_addresses: typing.List[str] = None,
  permitted_ip_ranges: typing.List[str] = None,
  permitted_uri_domains: typing.List[str] = None,
  postal_code: str = None,
  private_key_format: str = None,
  province: str = None,
  signature_bits: typing.Union[int, float] = None,
  street_address: str = None,
  ttl: str = None,
  uri_sans: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.backend">backend</a></code> | <code>str</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.commonName">common_name</a></code> | <code>str</code> | CN of root to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.type">type</a></code> | <code>str</code> | Type of root to create. Must be either "existing", "exported", "internal" or "kms". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.altNames">alt_names</a></code> | <code>typing.List[str]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.country">country</a></code> | <code>str</code> | The country. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludeCnFromSans">exclude_cn_from_sans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedDnsDomains">excluded_dns_domains</a></code> | <code>typing.List[str]</code> | List of domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedEmailAddresses">excluded_email_addresses</a></code> | <code>typing.List[str]</code> | List of email addresses for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedIpRanges">excluded_ip_ranges</a></code> | <code>typing.List[str]</code> | List of IP ranges for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedUriDomains">excluded_uri_domains</a></code> | <code>typing.List[str]</code> | List of URI domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.format">format</a></code> | <code>str</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#id PkiSecretBackendRootCert#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ipSans">ip_sans</a></code> | <code>typing.List[str]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.issuerName">issuer_name</a></code> | <code>str</code> | Provides a name to the specified issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyBits">key_bits</a></code> | <code>typing.Union[int, float]</code> | The number of bits to use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyName">key_name</a></code> | <code>str</code> | When a new key is created with this request, optionally specifies the name for this. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyRef">key_ref</a></code> | <code>str</code> | Specifies the key to use for generating this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyType">key_type</a></code> | <code>str</code> | The desired key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.locality">locality</a></code> | <code>str</code> | The locality. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyId">managed_key_id</a></code> | <code>str</code> | The ID of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyName">managed_key_name</a></code> | <code>str</code> | The name of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.maxPathLength">max_path_length</a></code> | <code>typing.Union[int, float]</code> | The maximum path length to encode in the generated certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.notAfter">not_after</a></code> | <code>str</code> | Set the Not After field of the certificate with specified date value. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.organization">organization</a></code> | <code>str</code> | The organization. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.otherSans">other_sans</a></code> | <code>typing.List[str]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ou">ou</a></code> | <code>str</code> | The organization unit. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedDnsDomains">permitted_dns_domains</a></code> | <code>typing.List[str]</code> | List of domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedEmailAddresses">permitted_email_addresses</a></code> | <code>typing.List[str]</code> | List of email addresses for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedIpRanges">permitted_ip_ranges</a></code> | <code>typing.List[str]</code> | List of IP ranges for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedUriDomains">permitted_uri_domains</a></code> | <code>typing.List[str]</code> | List of URI domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.postalCode">postal_code</a></code> | <code>str</code> | The postal code. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.privateKeyFormat">private_key_format</a></code> | <code>str</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.province">province</a></code> | <code>str</code> | The province. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.signatureBits">signature_bits</a></code> | <code>typing.Union[int, float]</code> | The number of bits to use in the signature algorithm. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.streetAddress">street_address</a></code> | <code>str</code> | The street address. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ttl">ttl</a></code> | <code>str</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.uriSans">uri_sans</a></code> | <code>typing.List[str]</code> | List of alternative URIs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#backend PkiSecretBackendRootCert#backend}

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

CN of root to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#common_name PkiSecretBackendRootCert#common_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of root to create. Must be either "existing", "exported", "internal" or "kms".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#type PkiSecretBackendRootCert#type}

---

##### `alt_names`<sup>Optional</sup> <a name="alt_names" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.altNames"></a>

```python
alt_names: typing.List[str]
```

- *Type:* typing.List[str]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#alt_names PkiSecretBackendRootCert#alt_names}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.country"></a>

```python
country: str
```

- *Type:* str

The country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#country PkiSecretBackendRootCert#country}

---

##### `exclude_cn_from_sans`<sup>Optional</sup> <a name="exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludeCnFromSans"></a>

```python
exclude_cn_from_sans: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#exclude_cn_from_sans PkiSecretBackendRootCert#exclude_cn_from_sans}

---

##### `excluded_dns_domains`<sup>Optional</sup> <a name="excluded_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedDnsDomains"></a>

```python
excluded_dns_domains: typing.List[str]
```

- *Type:* typing.List[str]

List of domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#excluded_dns_domains PkiSecretBackendRootCert#excluded_dns_domains}

---

##### `excluded_email_addresses`<sup>Optional</sup> <a name="excluded_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedEmailAddresses"></a>

```python
excluded_email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

List of email addresses for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#excluded_email_addresses PkiSecretBackendRootCert#excluded_email_addresses}

---

##### `excluded_ip_ranges`<sup>Optional</sup> <a name="excluded_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedIpRanges"></a>

```python
excluded_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

List of IP ranges for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#excluded_ip_ranges PkiSecretBackendRootCert#excluded_ip_ranges}

---

##### `excluded_uri_domains`<sup>Optional</sup> <a name="excluded_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedUriDomains"></a>

```python
excluded_uri_domains: typing.List[str]
```

- *Type:* typing.List[str]

List of URI domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#excluded_uri_domains PkiSecretBackendRootCert#excluded_uri_domains}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.format"></a>

```python
format: str
```

- *Type:* str

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#format PkiSecretBackendRootCert#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#id PkiSecretBackendRootCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_sans`<sup>Optional</sup> <a name="ip_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ipSans"></a>

```python
ip_sans: typing.List[str]
```

- *Type:* typing.List[str]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#ip_sans PkiSecretBackendRootCert#ip_sans}

---

##### `issuer_name`<sup>Optional</sup> <a name="issuer_name" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.issuerName"></a>

```python
issuer_name: str
```

- *Type:* str

Provides a name to the specified issuer.

The name must be unique across all issuers and not be the reserved value 'default'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#issuer_name PkiSecretBackendRootCert#issuer_name}

---

##### `key_bits`<sup>Optional</sup> <a name="key_bits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyBits"></a>

```python
key_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of bits to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#key_bits PkiSecretBackendRootCert#key_bits}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

When a new key is created with this request, optionally specifies the name for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#key_name PkiSecretBackendRootCert#key_name}

---

##### `key_ref`<sup>Optional</sup> <a name="key_ref" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyRef"></a>

```python
key_ref: str
```

- *Type:* str

Specifies the key to use for generating this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#key_ref PkiSecretBackendRootCert#key_ref}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

The desired key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#key_type PkiSecretBackendRootCert#key_type}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.locality"></a>

```python
locality: str
```

- *Type:* str

The locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#locality PkiSecretBackendRootCert#locality}

---

##### `managed_key_id`<sup>Optional</sup> <a name="managed_key_id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyId"></a>

```python
managed_key_id: str
```

- *Type:* str

The ID of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#managed_key_id PkiSecretBackendRootCert#managed_key_id}

---

##### `managed_key_name`<sup>Optional</sup> <a name="managed_key_name" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyName"></a>

```python
managed_key_name: str
```

- *Type:* str

The name of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#managed_key_name PkiSecretBackendRootCert#managed_key_name}

---

##### `max_path_length`<sup>Optional</sup> <a name="max_path_length" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.maxPathLength"></a>

```python
max_path_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum path length to encode in the generated certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#max_path_length PkiSecretBackendRootCert#max_path_length}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#namespace PkiSecretBackendRootCert#namespace}

---

##### `not_after`<sup>Optional</sup> <a name="not_after" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.notAfter"></a>

```python
not_after: str
```

- *Type:* str

Set the Not After field of the certificate with specified date value.

The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ. Supports the Y10K end date for IEEE 802.1AR-2018 standard devices, 9999-12-31T23:59:59Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#not_after PkiSecretBackendRootCert#not_after}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#organization PkiSecretBackendRootCert#organization}

---

##### `other_sans`<sup>Optional</sup> <a name="other_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.otherSans"></a>

```python
other_sans: typing.List[str]
```

- *Type:* typing.List[str]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#other_sans PkiSecretBackendRootCert#other_sans}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ou"></a>

```python
ou: str
```

- *Type:* str

The organization unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#ou PkiSecretBackendRootCert#ou}

---

##### `permitted_dns_domains`<sup>Optional</sup> <a name="permitted_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedDnsDomains"></a>

```python
permitted_dns_domains: typing.List[str]
```

- *Type:* typing.List[str]

List of domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#permitted_dns_domains PkiSecretBackendRootCert#permitted_dns_domains}

---

##### `permitted_email_addresses`<sup>Optional</sup> <a name="permitted_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedEmailAddresses"></a>

```python
permitted_email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

List of email addresses for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#permitted_email_addresses PkiSecretBackendRootCert#permitted_email_addresses}

---

##### `permitted_ip_ranges`<sup>Optional</sup> <a name="permitted_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedIpRanges"></a>

```python
permitted_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

List of IP ranges for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#permitted_ip_ranges PkiSecretBackendRootCert#permitted_ip_ranges}

---

##### `permitted_uri_domains`<sup>Optional</sup> <a name="permitted_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedUriDomains"></a>

```python
permitted_uri_domains: typing.List[str]
```

- *Type:* typing.List[str]

List of URI domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#permitted_uri_domains PkiSecretBackendRootCert#permitted_uri_domains}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

The postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#postal_code PkiSecretBackendRootCert#postal_code}

---

##### `private_key_format`<sup>Optional</sup> <a name="private_key_format" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.privateKeyFormat"></a>

```python
private_key_format: str
```

- *Type:* str

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#private_key_format PkiSecretBackendRootCert#private_key_format}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.province"></a>

```python
province: str
```

- *Type:* str

The province.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#province PkiSecretBackendRootCert#province}

---

##### `signature_bits`<sup>Optional</sup> <a name="signature_bits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.signatureBits"></a>

```python
signature_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of bits to use in the signature algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#signature_bits PkiSecretBackendRootCert#signature_bits}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

The street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#street_address PkiSecretBackendRootCert#street_address}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#ttl PkiSecretBackendRootCert#ttl}

---

##### `uri_sans`<sup>Optional</sup> <a name="uri_sans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.uriSans"></a>

```python
uri_sans: typing.List[str]
```

- *Type:* typing.List[str]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_root_cert#uri_sans PkiSecretBackendRootCert#uri_sans}

---



