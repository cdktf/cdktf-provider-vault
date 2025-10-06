# `pkiSecretBackendRootSignIntermediate` Submodule <a name="`pkiSecretBackendRootSignIntermediate` Submodule" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendRootSignIntermediate <a name="PkiSecretBackendRootSignIntermediate" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate vault_pki_secret_backend_root_sign_intermediate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_root_sign_intermediate

pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backend: str,
  common_name: str,
  csr: str,
  alt_names: typing.List[str] = None,
  country: str = None,
  exclude_cn_from_sans: bool | IResolvable = None,
  excluded_dns_domains: typing.List[str] = None,
  excluded_email_addresses: typing.List[str] = None,
  excluded_ip_ranges: typing.List[str] = None,
  excluded_uri_domains: typing.List[str] = None,
  format: str = None,
  id: str = None,
  ip_sans: typing.List[str] = None,
  issuer_ref: str = None,
  key_usage: typing.List[str] = None,
  locality: str = None,
  max_path_length: typing.Union[int, float] = None,
  namespace: str = None,
  not_after: str = None,
  not_before_duration: str = None,
  organization: str = None,
  other_sans: typing.List[str] = None,
  ou: str = None,
  permitted_dns_domains: typing.List[str] = None,
  permitted_email_addresses: typing.List[str] = None,
  permitted_ip_ranges: typing.List[str] = None,
  permitted_uri_domains: typing.List[str] = None,
  postal_code: str = None,
  province: str = None,
  revoke: bool | IResolvable = None,
  signature_bits: typing.Union[int, float] = None,
  skid: str = None,
  street_address: str = None,
  ttl: str = None,
  uri_sans: typing.List[str] = None,
  use_csr_values: bool | IResolvable = None,
  use_pss: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.commonName">common_name</a></code> | <code>str</code> | CN of intermediate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.csr">csr</a></code> | <code>str</code> | The CSR. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.altNames">alt_names</a></code> | <code>typing.List[str]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.country">country</a></code> | <code>str</code> | The country. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.excludeCnFromSans">exclude_cn_from_sans</a></code> | <code>bool \| cdktf.IResolvable</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.excludedDnsDomains">excluded_dns_domains</a></code> | <code>typing.List[str]</code> | List of domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.excludedEmailAddresses">excluded_email_addresses</a></code> | <code>typing.List[str]</code> | List of email addresses for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.excludedIpRanges">excluded_ip_ranges</a></code> | <code>typing.List[str]</code> | List of IP ranges for which certificates are NOT allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.excludedUriDomains">excluded_uri_domains</a></code> | <code>typing.List[str]</code> | List of URI domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.format">format</a></code> | <code>str</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#id PkiSecretBackendRootSignIntermediate#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.ipSans">ip_sans</a></code> | <code>typing.List[str]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.issuerRef">issuer_ref</a></code> | <code>str</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.keyUsage">key_usage</a></code> | <code>typing.List[str]</code> | Specify the key usages to be added to the existing set of key usages ("CRL", "CertSign") on the generated certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.locality">locality</a></code> | <code>str</code> | The locality. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.maxPathLength">max_path_length</a></code> | <code>typing.Union[int, float]</code> | The maximum path length to encode in the generated certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.notAfter">not_after</a></code> | <code>str</code> | Set the Not After field of the certificate with specified date value. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.notBeforeDuration">not_before_duration</a></code> | <code>str</code> | Specifies the duration by which to backdate the NotBefore property. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The organization. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.otherSans">other_sans</a></code> | <code>typing.List[str]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.ou">ou</a></code> | <code>str</code> | The organization unit. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.permittedDnsDomains">permitted_dns_domains</a></code> | <code>typing.List[str]</code> | List of domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.permittedEmailAddresses">permitted_email_addresses</a></code> | <code>typing.List[str]</code> | List of email addresses for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.permittedIpRanges">permitted_ip_ranges</a></code> | <code>typing.List[str]</code> | List of IP ranges for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.permittedUriDomains">permitted_uri_domains</a></code> | <code>typing.List[str]</code> | List of URI domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.postalCode">postal_code</a></code> | <code>str</code> | The postal code. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.province">province</a></code> | <code>str</code> | The province. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.revoke">revoke</a></code> | <code>bool \| cdktf.IResolvable</code> | Revoke the certificate upon resource destruction. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.signatureBits">signature_bits</a></code> | <code>typing.Union[int, float]</code> | The number of bits to use in the signature algorithm. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.skid">skid</a></code> | <code>str</code> | Value for the Subject Key Identifier field   (RFC 5280 Section 4.2.1.2). Specified as a string in hex format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.streetAddress">street_address</a></code> | <code>str</code> | The street address. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.uriSans">uri_sans</a></code> | <code>typing.List[str]</code> | List of alternative URIs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.useCsrValues">use_csr_values</a></code> | <code>bool \| cdktf.IResolvable</code> | Preserve CSR values. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.usePss">use_pss</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies whether or not to use PSS signatures   over PKCS#1v1.5 signatures when a RSA-type issuer is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.backend"></a>

- *Type:* str

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#backend PkiSecretBackendRootSignIntermediate#backend}

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.commonName"></a>

- *Type:* str

CN of intermediate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#common_name PkiSecretBackendRootSignIntermediate#common_name}

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.csr"></a>

- *Type:* str

The CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#csr PkiSecretBackendRootSignIntermediate#csr}

---

##### `alt_names`<sup>Optional</sup> <a name="alt_names" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.altNames"></a>

- *Type:* typing.List[str]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#alt_names PkiSecretBackendRootSignIntermediate#alt_names}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.country"></a>

- *Type:* str

The country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#country PkiSecretBackendRootSignIntermediate#country}

---

##### `exclude_cn_from_sans`<sup>Optional</sup> <a name="exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.excludeCnFromSans"></a>

- *Type:* bool | cdktf.IResolvable

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#exclude_cn_from_sans PkiSecretBackendRootSignIntermediate#exclude_cn_from_sans}

---

##### `excluded_dns_domains`<sup>Optional</sup> <a name="excluded_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.excludedDnsDomains"></a>

- *Type:* typing.List[str]

List of domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_dns_domains PkiSecretBackendRootSignIntermediate#excluded_dns_domains}

---

##### `excluded_email_addresses`<sup>Optional</sup> <a name="excluded_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.excludedEmailAddresses"></a>

- *Type:* typing.List[str]

List of email addresses for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_email_addresses PkiSecretBackendRootSignIntermediate#excluded_email_addresses}

---

##### `excluded_ip_ranges`<sup>Optional</sup> <a name="excluded_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.excludedIpRanges"></a>

- *Type:* typing.List[str]

List of IP ranges for which certificates are NOT allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_ip_ranges PkiSecretBackendRootSignIntermediate#excluded_ip_ranges}

---

##### `excluded_uri_domains`<sup>Optional</sup> <a name="excluded_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.excludedUriDomains"></a>

- *Type:* typing.List[str]

List of URI domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_uri_domains PkiSecretBackendRootSignIntermediate#excluded_uri_domains}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.format"></a>

- *Type:* str

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#format PkiSecretBackendRootSignIntermediate#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#id PkiSecretBackendRootSignIntermediate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_sans`<sup>Optional</sup> <a name="ip_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.ipSans"></a>

- *Type:* typing.List[str]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#ip_sans PkiSecretBackendRootSignIntermediate#ip_sans}

---

##### `issuer_ref`<sup>Optional</sup> <a name="issuer_ref" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.issuerRef"></a>

- *Type:* str

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#issuer_ref PkiSecretBackendRootSignIntermediate#issuer_ref}

---

##### `key_usage`<sup>Optional</sup> <a name="key_usage" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.keyUsage"></a>

- *Type:* typing.List[str]

Specify the key usages to be added to the existing set of key usages ("CRL", "CertSign") on the generated certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#key_usage PkiSecretBackendRootSignIntermediate#key_usage}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.locality"></a>

- *Type:* str

The locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#locality PkiSecretBackendRootSignIntermediate#locality}

---

##### `max_path_length`<sup>Optional</sup> <a name="max_path_length" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.maxPathLength"></a>

- *Type:* typing.Union[int, float]

The maximum path length to encode in the generated certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#max_path_length PkiSecretBackendRootSignIntermediate#max_path_length}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#namespace PkiSecretBackendRootSignIntermediate#namespace}

---

##### `not_after`<sup>Optional</sup> <a name="not_after" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.notAfter"></a>

- *Type:* str

Set the Not After field of the certificate with specified date value.

The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ. Supports the Y10K end date for IEEE 802.1AR-2018 standard devices, 9999-12-31T23:59:59Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#not_after PkiSecretBackendRootSignIntermediate#not_after}

---

##### `not_before_duration`<sup>Optional</sup> <a name="not_before_duration" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.notBeforeDuration"></a>

- *Type:* str

Specifies the duration by which to backdate the NotBefore property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#not_before_duration PkiSecretBackendRootSignIntermediate#not_before_duration}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.organization"></a>

- *Type:* str

The organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#organization PkiSecretBackendRootSignIntermediate#organization}

---

##### `other_sans`<sup>Optional</sup> <a name="other_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.otherSans"></a>

- *Type:* typing.List[str]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#other_sans PkiSecretBackendRootSignIntermediate#other_sans}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.ou"></a>

- *Type:* str

The organization unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#ou PkiSecretBackendRootSignIntermediate#ou}

---

##### `permitted_dns_domains`<sup>Optional</sup> <a name="permitted_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.permittedDnsDomains"></a>

- *Type:* typing.List[str]

List of domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_dns_domains PkiSecretBackendRootSignIntermediate#permitted_dns_domains}

---

##### `permitted_email_addresses`<sup>Optional</sup> <a name="permitted_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.permittedEmailAddresses"></a>

- *Type:* typing.List[str]

List of email addresses for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_email_addresses PkiSecretBackendRootSignIntermediate#permitted_email_addresses}

---

##### `permitted_ip_ranges`<sup>Optional</sup> <a name="permitted_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.permittedIpRanges"></a>

- *Type:* typing.List[str]

List of IP ranges for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_ip_ranges PkiSecretBackendRootSignIntermediate#permitted_ip_ranges}

---

##### `permitted_uri_domains`<sup>Optional</sup> <a name="permitted_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.permittedUriDomains"></a>

- *Type:* typing.List[str]

List of URI domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_uri_domains PkiSecretBackendRootSignIntermediate#permitted_uri_domains}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.postalCode"></a>

- *Type:* str

The postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#postal_code PkiSecretBackendRootSignIntermediate#postal_code}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.province"></a>

- *Type:* str

The province.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#province PkiSecretBackendRootSignIntermediate#province}

---

##### `revoke`<sup>Optional</sup> <a name="revoke" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.revoke"></a>

- *Type:* bool | cdktf.IResolvable

Revoke the certificate upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#revoke PkiSecretBackendRootSignIntermediate#revoke}

---

##### `signature_bits`<sup>Optional</sup> <a name="signature_bits" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.signatureBits"></a>

- *Type:* typing.Union[int, float]

The number of bits to use in the signature algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#signature_bits PkiSecretBackendRootSignIntermediate#signature_bits}

---

##### `skid`<sup>Optional</sup> <a name="skid" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.skid"></a>

- *Type:* str

Value for the Subject Key Identifier field   (RFC 5280 Section 4.2.1.2). Specified as a string in hex format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#skid PkiSecretBackendRootSignIntermediate#skid}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.streetAddress"></a>

- *Type:* str

The street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#street_address PkiSecretBackendRootSignIntermediate#street_address}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.ttl"></a>

- *Type:* str

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#ttl PkiSecretBackendRootSignIntermediate#ttl}

---

##### `uri_sans`<sup>Optional</sup> <a name="uri_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.uriSans"></a>

- *Type:* typing.List[str]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#uri_sans PkiSecretBackendRootSignIntermediate#uri_sans}

---

##### `use_csr_values`<sup>Optional</sup> <a name="use_csr_values" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.useCsrValues"></a>

- *Type:* bool | cdktf.IResolvable

Preserve CSR values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#use_csr_values PkiSecretBackendRootSignIntermediate#use_csr_values}

---

##### `use_pss`<sup>Optional</sup> <a name="use_pss" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.usePss"></a>

- *Type:* bool | cdktf.IResolvable

Specifies whether or not to use PSS signatures   over PKCS#1v1.5 signatures when a RSA-type issuer is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#use_pss PkiSecretBackendRootSignIntermediate#use_pss}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetAltNames">reset_alt_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludeCnFromSans">reset_exclude_cn_from_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedDnsDomains">reset_excluded_dns_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedEmailAddresses">reset_excluded_email_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedIpRanges">reset_excluded_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedUriDomains">reset_excluded_uri_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetIpSans">reset_ip_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetIssuerRef">reset_issuer_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetKeyUsage">reset_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetMaxPathLength">reset_max_path_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetNotAfter">reset_not_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetNotBeforeDuration">reset_not_before_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOtherSans">reset_other_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOu">reset_ou</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedDnsDomains">reset_permitted_dns_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedEmailAddresses">reset_permitted_email_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedIpRanges">reset_permitted_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedUriDomains">reset_permitted_uri_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetProvince">reset_province</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetRevoke">reset_revoke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetSignatureBits">reset_signature_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetSkid">reset_skid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetStreetAddress">reset_street_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetUriSans">reset_uri_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetUseCsrValues">reset_use_csr_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetUsePss">reset_use_pss</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_alt_names` <a name="reset_alt_names" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetAltNames"></a>

```python
def reset_alt_names() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_exclude_cn_from_sans` <a name="reset_exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludeCnFromSans"></a>

```python
def reset_exclude_cn_from_sans() -> None
```

##### `reset_excluded_dns_domains` <a name="reset_excluded_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedDnsDomains"></a>

```python
def reset_excluded_dns_domains() -> None
```

##### `reset_excluded_email_addresses` <a name="reset_excluded_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedEmailAddresses"></a>

```python
def reset_excluded_email_addresses() -> None
```

##### `reset_excluded_ip_ranges` <a name="reset_excluded_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedIpRanges"></a>

```python
def reset_excluded_ip_ranges() -> None
```

##### `reset_excluded_uri_domains` <a name="reset_excluded_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedUriDomains"></a>

```python
def reset_excluded_uri_domains() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_sans` <a name="reset_ip_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetIpSans"></a>

```python
def reset_ip_sans() -> None
```

##### `reset_issuer_ref` <a name="reset_issuer_ref" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetIssuerRef"></a>

```python
def reset_issuer_ref() -> None
```

##### `reset_key_usage` <a name="reset_key_usage" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetKeyUsage"></a>

```python
def reset_key_usage() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_max_path_length` <a name="reset_max_path_length" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetMaxPathLength"></a>

```python
def reset_max_path_length() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_not_after` <a name="reset_not_after" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetNotAfter"></a>

```python
def reset_not_after() -> None
```

##### `reset_not_before_duration` <a name="reset_not_before_duration" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetNotBeforeDuration"></a>

```python
def reset_not_before_duration() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_other_sans` <a name="reset_other_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOtherSans"></a>

```python
def reset_other_sans() -> None
```

##### `reset_ou` <a name="reset_ou" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOu"></a>

```python
def reset_ou() -> None
```

##### `reset_permitted_dns_domains` <a name="reset_permitted_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedDnsDomains"></a>

```python
def reset_permitted_dns_domains() -> None
```

##### `reset_permitted_email_addresses` <a name="reset_permitted_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedEmailAddresses"></a>

```python
def reset_permitted_email_addresses() -> None
```

##### `reset_permitted_ip_ranges` <a name="reset_permitted_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedIpRanges"></a>

```python
def reset_permitted_ip_ranges() -> None
```

##### `reset_permitted_uri_domains` <a name="reset_permitted_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedUriDomains"></a>

```python
def reset_permitted_uri_domains() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_province` <a name="reset_province" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetProvince"></a>

```python
def reset_province() -> None
```

##### `reset_revoke` <a name="reset_revoke" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetRevoke"></a>

```python
def reset_revoke() -> None
```

##### `reset_signature_bits` <a name="reset_signature_bits" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetSignatureBits"></a>

```python
def reset_signature_bits() -> None
```

##### `reset_skid` <a name="reset_skid" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetSkid"></a>

```python
def reset_skid() -> None
```

##### `reset_street_address` <a name="reset_street_address" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetStreetAddress"></a>

```python
def reset_street_address() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_uri_sans` <a name="reset_uri_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetUriSans"></a>

```python
def reset_uri_sans() -> None
```

##### `reset_use_csr_values` <a name="reset_use_csr_values" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetUseCsrValues"></a>

```python
def reset_use_csr_values() -> None
```

##### `reset_use_pss` <a name="reset_use_pss" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetUsePss"></a>

```python
def reset_use_pss() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PkiSecretBackendRootSignIntermediate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_root_sign_intermediate

pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_root_sign_intermediate

pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_root_sign_intermediate

pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_root_sign_intermediate

pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PkiSecretBackendRootSignIntermediate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiSecretBackendRootSignIntermediate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiSecretBackendRootSignIntermediate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendRootSignIntermediate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.caChain">ca_chain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.certificateBundle">certificate_bundle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.issuingCa">issuing_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.altNamesInput">alt_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.csrInput">csr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludeCnFromSansInput">exclude_cn_from_sans_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedDnsDomainsInput">excluded_dns_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedEmailAddressesInput">excluded_email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedIpRangesInput">excluded_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedUriDomainsInput">excluded_uri_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ipSansInput">ip_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.issuerRefInput">issuer_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.keyUsageInput">key_usage_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.maxPathLengthInput">max_path_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notAfterInput">not_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notBeforeDurationInput">not_before_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.otherSansInput">other_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ouInput">ou_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedDnsDomainsInput">permitted_dns_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedEmailAddressesInput">permitted_email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedIpRangesInput">permitted_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedUriDomainsInput">permitted_uri_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.provinceInput">province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.revokeInput">revoke_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.signatureBitsInput">signature_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.skidInput">skid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.streetAddressInput">street_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.uriSansInput">uri_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.useCsrValuesInput">use_csr_values_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.usePssInput">use_pss_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.altNames">alt_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.csr">csr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludeCnFromSans">exclude_cn_from_sans</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedDnsDomains">excluded_dns_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedEmailAddresses">excluded_email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedIpRanges">excluded_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedUriDomains">excluded_uri_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ipSans">ip_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.issuerRef">issuer_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.keyUsage">key_usage</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.maxPathLength">max_path_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notAfter">not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notBeforeDuration">not_before_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.otherSans">other_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ou">ou</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedDnsDomains">permitted_dns_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedEmailAddresses">permitted_email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedIpRanges">permitted_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedUriDomains">permitted_uri_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.revoke">revoke</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.signatureBits">signature_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.skid">skid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.streetAddress">street_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.uriSans">uri_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.useCsrValues">use_csr_values</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.usePss">use_pss</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `ca_chain`<sup>Required</sup> <a name="ca_chain" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.caChain"></a>

```python
ca_chain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `certificate_bundle`<sup>Required</sup> <a name="certificate_bundle" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.certificateBundle"></a>

```python
certificate_bundle: str
```

- *Type:* str

---

##### `issuing_ca`<sup>Required</sup> <a name="issuing_ca" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.issuingCa"></a>

```python
issuing_ca: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `alt_names_input`<sup>Optional</sup> <a name="alt_names_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.altNamesInput"></a>

```python
alt_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `csr_input`<sup>Optional</sup> <a name="csr_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.csrInput"></a>

```python
csr_input: str
```

- *Type:* str

---

##### `exclude_cn_from_sans_input`<sup>Optional</sup> <a name="exclude_cn_from_sans_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludeCnFromSansInput"></a>

```python
exclude_cn_from_sans_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `excluded_dns_domains_input`<sup>Optional</sup> <a name="excluded_dns_domains_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedDnsDomainsInput"></a>

```python
excluded_dns_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_email_addresses_input`<sup>Optional</sup> <a name="excluded_email_addresses_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedEmailAddressesInput"></a>

```python
excluded_email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_ip_ranges_input`<sup>Optional</sup> <a name="excluded_ip_ranges_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedIpRangesInput"></a>

```python
excluded_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_uri_domains_input`<sup>Optional</sup> <a name="excluded_uri_domains_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedUriDomainsInput"></a>

```python
excluded_uri_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_sans_input`<sup>Optional</sup> <a name="ip_sans_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ipSansInput"></a>

```python
ip_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_ref_input`<sup>Optional</sup> <a name="issuer_ref_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.issuerRefInput"></a>

```python
issuer_ref_input: str
```

- *Type:* str

---

##### `key_usage_input`<sup>Optional</sup> <a name="key_usage_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.keyUsageInput"></a>

```python
key_usage_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `max_path_length_input`<sup>Optional</sup> <a name="max_path_length_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.maxPathLengthInput"></a>

```python
max_path_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `not_after_input`<sup>Optional</sup> <a name="not_after_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notAfterInput"></a>

```python
not_after_input: str
```

- *Type:* str

---

##### `not_before_duration_input`<sup>Optional</sup> <a name="not_before_duration_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notBeforeDurationInput"></a>

```python
not_before_duration_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `other_sans_input`<sup>Optional</sup> <a name="other_sans_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.otherSansInput"></a>

```python
other_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ou_input`<sup>Optional</sup> <a name="ou_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ouInput"></a>

```python
ou_input: str
```

- *Type:* str

---

##### `permitted_dns_domains_input`<sup>Optional</sup> <a name="permitted_dns_domains_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedDnsDomainsInput"></a>

```python
permitted_dns_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permitted_email_addresses_input`<sup>Optional</sup> <a name="permitted_email_addresses_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedEmailAddressesInput"></a>

```python
permitted_email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permitted_ip_ranges_input`<sup>Optional</sup> <a name="permitted_ip_ranges_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedIpRangesInput"></a>

```python
permitted_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permitted_uri_domains_input`<sup>Optional</sup> <a name="permitted_uri_domains_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedUriDomainsInput"></a>

```python
permitted_uri_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `province_input`<sup>Optional</sup> <a name="province_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.provinceInput"></a>

```python
province_input: str
```

- *Type:* str

---

##### `revoke_input`<sup>Optional</sup> <a name="revoke_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.revokeInput"></a>

```python
revoke_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `signature_bits_input`<sup>Optional</sup> <a name="signature_bits_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.signatureBitsInput"></a>

```python
signature_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skid_input`<sup>Optional</sup> <a name="skid_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.skidInput"></a>

```python
skid_input: str
```

- *Type:* str

---

##### `street_address_input`<sup>Optional</sup> <a name="street_address_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.streetAddressInput"></a>

```python
street_address_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `uri_sans_input`<sup>Optional</sup> <a name="uri_sans_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.uriSansInput"></a>

```python
uri_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_csr_values_input`<sup>Optional</sup> <a name="use_csr_values_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.useCsrValuesInput"></a>

```python
use_csr_values_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `use_pss_input`<sup>Optional</sup> <a name="use_pss_input" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.usePssInput"></a>

```python
use_pss_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `alt_names`<sup>Required</sup> <a name="alt_names" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.altNames"></a>

```python
alt_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.csr"></a>

```python
csr: str
```

- *Type:* str

---

##### `exclude_cn_from_sans`<sup>Required</sup> <a name="exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludeCnFromSans"></a>

```python
exclude_cn_from_sans: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `excluded_dns_domains`<sup>Required</sup> <a name="excluded_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedDnsDomains"></a>

```python
excluded_dns_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_email_addresses`<sup>Required</sup> <a name="excluded_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedEmailAddresses"></a>

```python
excluded_email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_ip_ranges`<sup>Required</sup> <a name="excluded_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedIpRanges"></a>

```python
excluded_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_uri_domains`<sup>Required</sup> <a name="excluded_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedUriDomains"></a>

```python
excluded_uri_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_sans`<sup>Required</sup> <a name="ip_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ipSans"></a>

```python
ip_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_ref`<sup>Required</sup> <a name="issuer_ref" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.issuerRef"></a>

```python
issuer_ref: str
```

- *Type:* str

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.keyUsage"></a>

```python
key_usage: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `max_path_length`<sup>Required</sup> <a name="max_path_length" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.maxPathLength"></a>

```python
max_path_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `not_after`<sup>Required</sup> <a name="not_after" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notAfter"></a>

```python
not_after: str
```

- *Type:* str

---

##### `not_before_duration`<sup>Required</sup> <a name="not_before_duration" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notBeforeDuration"></a>

```python
not_before_duration: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `other_sans`<sup>Required</sup> <a name="other_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.otherSans"></a>

```python
other_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ou`<sup>Required</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ou"></a>

```python
ou: str
```

- *Type:* str

---

##### `permitted_dns_domains`<sup>Required</sup> <a name="permitted_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedDnsDomains"></a>

```python
permitted_dns_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permitted_email_addresses`<sup>Required</sup> <a name="permitted_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedEmailAddresses"></a>

```python
permitted_email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permitted_ip_ranges`<sup>Required</sup> <a name="permitted_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedIpRanges"></a>

```python
permitted_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permitted_uri_domains`<sup>Required</sup> <a name="permitted_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedUriDomains"></a>

```python
permitted_uri_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `revoke`<sup>Required</sup> <a name="revoke" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.revoke"></a>

```python
revoke: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `signature_bits`<sup>Required</sup> <a name="signature_bits" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.signatureBits"></a>

```python
signature_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skid`<sup>Required</sup> <a name="skid" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.skid"></a>

```python
skid: str
```

- *Type:* str

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `uri_sans`<sup>Required</sup> <a name="uri_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.uriSans"></a>

```python
uri_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_csr_values`<sup>Required</sup> <a name="use_csr_values" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.useCsrValues"></a>

```python
use_csr_values: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `use_pss`<sup>Required</sup> <a name="use_pss" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.usePss"></a>

```python
use_pss: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendRootSignIntermediateConfig <a name="PkiSecretBackendRootSignIntermediateConfig" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_root_sign_intermediate

pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backend: str,
  common_name: str,
  csr: str,
  alt_names: typing.List[str] = None,
  country: str = None,
  exclude_cn_from_sans: bool | IResolvable = None,
  excluded_dns_domains: typing.List[str] = None,
  excluded_email_addresses: typing.List[str] = None,
  excluded_ip_ranges: typing.List[str] = None,
  excluded_uri_domains: typing.List[str] = None,
  format: str = None,
  id: str = None,
  ip_sans: typing.List[str] = None,
  issuer_ref: str = None,
  key_usage: typing.List[str] = None,
  locality: str = None,
  max_path_length: typing.Union[int, float] = None,
  namespace: str = None,
  not_after: str = None,
  not_before_duration: str = None,
  organization: str = None,
  other_sans: typing.List[str] = None,
  ou: str = None,
  permitted_dns_domains: typing.List[str] = None,
  permitted_email_addresses: typing.List[str] = None,
  permitted_ip_ranges: typing.List[str] = None,
  permitted_uri_domains: typing.List[str] = None,
  postal_code: str = None,
  province: str = None,
  revoke: bool | IResolvable = None,
  signature_bits: typing.Union[int, float] = None,
  skid: str = None,
  street_address: str = None,
  ttl: str = None,
  uri_sans: typing.List[str] = None,
  use_csr_values: bool | IResolvable = None,
  use_pss: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.backend">backend</a></code> | <code>str</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.commonName">common_name</a></code> | <code>str</code> | CN of intermediate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.csr">csr</a></code> | <code>str</code> | The CSR. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.altNames">alt_names</a></code> | <code>typing.List[str]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.country">country</a></code> | <code>str</code> | The country. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludeCnFromSans">exclude_cn_from_sans</a></code> | <code>bool \| cdktf.IResolvable</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedDnsDomains">excluded_dns_domains</a></code> | <code>typing.List[str]</code> | List of domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedEmailAddresses">excluded_email_addresses</a></code> | <code>typing.List[str]</code> | List of email addresses for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedIpRanges">excluded_ip_ranges</a></code> | <code>typing.List[str]</code> | List of IP ranges for which certificates are NOT allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedUriDomains">excluded_uri_domains</a></code> | <code>typing.List[str]</code> | List of URI domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.format">format</a></code> | <code>str</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#id PkiSecretBackendRootSignIntermediate#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.ipSans">ip_sans</a></code> | <code>typing.List[str]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.issuerRef">issuer_ref</a></code> | <code>str</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.keyUsage">key_usage</a></code> | <code>typing.List[str]</code> | Specify the key usages to be added to the existing set of key usages ("CRL", "CertSign") on the generated certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.locality">locality</a></code> | <code>str</code> | The locality. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.maxPathLength">max_path_length</a></code> | <code>typing.Union[int, float]</code> | The maximum path length to encode in the generated certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.notAfter">not_after</a></code> | <code>str</code> | Set the Not After field of the certificate with specified date value. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.notBeforeDuration">not_before_duration</a></code> | <code>str</code> | Specifies the duration by which to backdate the NotBefore property. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.organization">organization</a></code> | <code>str</code> | The organization. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.otherSans">other_sans</a></code> | <code>typing.List[str]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.ou">ou</a></code> | <code>str</code> | The organization unit. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedDnsDomains">permitted_dns_domains</a></code> | <code>typing.List[str]</code> | List of domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedEmailAddresses">permitted_email_addresses</a></code> | <code>typing.List[str]</code> | List of email addresses for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedIpRanges">permitted_ip_ranges</a></code> | <code>typing.List[str]</code> | List of IP ranges for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedUriDomains">permitted_uri_domains</a></code> | <code>typing.List[str]</code> | List of URI domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.postalCode">postal_code</a></code> | <code>str</code> | The postal code. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.province">province</a></code> | <code>str</code> | The province. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.revoke">revoke</a></code> | <code>bool \| cdktf.IResolvable</code> | Revoke the certificate upon resource destruction. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.signatureBits">signature_bits</a></code> | <code>typing.Union[int, float]</code> | The number of bits to use in the signature algorithm. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.skid">skid</a></code> | <code>str</code> | Value for the Subject Key Identifier field   (RFC 5280 Section 4.2.1.2). Specified as a string in hex format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.streetAddress">street_address</a></code> | <code>str</code> | The street address. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.ttl">ttl</a></code> | <code>str</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.uriSans">uri_sans</a></code> | <code>typing.List[str]</code> | List of alternative URIs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.useCsrValues">use_csr_values</a></code> | <code>bool \| cdktf.IResolvable</code> | Preserve CSR values. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.usePss">use_pss</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies whether or not to use PSS signatures   over PKCS#1v1.5 signatures when a RSA-type issuer is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#backend PkiSecretBackendRootSignIntermediate#backend}

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

CN of intermediate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#common_name PkiSecretBackendRootSignIntermediate#common_name}

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.csr"></a>

```python
csr: str
```

- *Type:* str

The CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#csr PkiSecretBackendRootSignIntermediate#csr}

---

##### `alt_names`<sup>Optional</sup> <a name="alt_names" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.altNames"></a>

```python
alt_names: typing.List[str]
```

- *Type:* typing.List[str]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#alt_names PkiSecretBackendRootSignIntermediate#alt_names}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.country"></a>

```python
country: str
```

- *Type:* str

The country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#country PkiSecretBackendRootSignIntermediate#country}

---

##### `exclude_cn_from_sans`<sup>Optional</sup> <a name="exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludeCnFromSans"></a>

```python
exclude_cn_from_sans: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#exclude_cn_from_sans PkiSecretBackendRootSignIntermediate#exclude_cn_from_sans}

---

##### `excluded_dns_domains`<sup>Optional</sup> <a name="excluded_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedDnsDomains"></a>

```python
excluded_dns_domains: typing.List[str]
```

- *Type:* typing.List[str]

List of domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_dns_domains PkiSecretBackendRootSignIntermediate#excluded_dns_domains}

---

##### `excluded_email_addresses`<sup>Optional</sup> <a name="excluded_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedEmailAddresses"></a>

```python
excluded_email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

List of email addresses for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_email_addresses PkiSecretBackendRootSignIntermediate#excluded_email_addresses}

---

##### `excluded_ip_ranges`<sup>Optional</sup> <a name="excluded_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedIpRanges"></a>

```python
excluded_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

List of IP ranges for which certificates are NOT allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_ip_ranges PkiSecretBackendRootSignIntermediate#excluded_ip_ranges}

---

##### `excluded_uri_domains`<sup>Optional</sup> <a name="excluded_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedUriDomains"></a>

```python
excluded_uri_domains: typing.List[str]
```

- *Type:* typing.List[str]

List of URI domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_uri_domains PkiSecretBackendRootSignIntermediate#excluded_uri_domains}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.format"></a>

```python
format: str
```

- *Type:* str

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#format PkiSecretBackendRootSignIntermediate#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#id PkiSecretBackendRootSignIntermediate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_sans`<sup>Optional</sup> <a name="ip_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.ipSans"></a>

```python
ip_sans: typing.List[str]
```

- *Type:* typing.List[str]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#ip_sans PkiSecretBackendRootSignIntermediate#ip_sans}

---

##### `issuer_ref`<sup>Optional</sup> <a name="issuer_ref" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.issuerRef"></a>

```python
issuer_ref: str
```

- *Type:* str

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#issuer_ref PkiSecretBackendRootSignIntermediate#issuer_ref}

---

##### `key_usage`<sup>Optional</sup> <a name="key_usage" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.keyUsage"></a>

```python
key_usage: typing.List[str]
```

- *Type:* typing.List[str]

Specify the key usages to be added to the existing set of key usages ("CRL", "CertSign") on the generated certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#key_usage PkiSecretBackendRootSignIntermediate#key_usage}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.locality"></a>

```python
locality: str
```

- *Type:* str

The locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#locality PkiSecretBackendRootSignIntermediate#locality}

---

##### `max_path_length`<sup>Optional</sup> <a name="max_path_length" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.maxPathLength"></a>

```python
max_path_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum path length to encode in the generated certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#max_path_length PkiSecretBackendRootSignIntermediate#max_path_length}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#namespace PkiSecretBackendRootSignIntermediate#namespace}

---

##### `not_after`<sup>Optional</sup> <a name="not_after" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.notAfter"></a>

```python
not_after: str
```

- *Type:* str

Set the Not After field of the certificate with specified date value.

The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ. Supports the Y10K end date for IEEE 802.1AR-2018 standard devices, 9999-12-31T23:59:59Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#not_after PkiSecretBackendRootSignIntermediate#not_after}

---

##### `not_before_duration`<sup>Optional</sup> <a name="not_before_duration" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.notBeforeDuration"></a>

```python
not_before_duration: str
```

- *Type:* str

Specifies the duration by which to backdate the NotBefore property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#not_before_duration PkiSecretBackendRootSignIntermediate#not_before_duration}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#organization PkiSecretBackendRootSignIntermediate#organization}

---

##### `other_sans`<sup>Optional</sup> <a name="other_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.otherSans"></a>

```python
other_sans: typing.List[str]
```

- *Type:* typing.List[str]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#other_sans PkiSecretBackendRootSignIntermediate#other_sans}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.ou"></a>

```python
ou: str
```

- *Type:* str

The organization unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#ou PkiSecretBackendRootSignIntermediate#ou}

---

##### `permitted_dns_domains`<sup>Optional</sup> <a name="permitted_dns_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedDnsDomains"></a>

```python
permitted_dns_domains: typing.List[str]
```

- *Type:* typing.List[str]

List of domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_dns_domains PkiSecretBackendRootSignIntermediate#permitted_dns_domains}

---

##### `permitted_email_addresses`<sup>Optional</sup> <a name="permitted_email_addresses" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedEmailAddresses"></a>

```python
permitted_email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

List of email addresses for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_email_addresses PkiSecretBackendRootSignIntermediate#permitted_email_addresses}

---

##### `permitted_ip_ranges`<sup>Optional</sup> <a name="permitted_ip_ranges" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedIpRanges"></a>

```python
permitted_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

List of IP ranges for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_ip_ranges PkiSecretBackendRootSignIntermediate#permitted_ip_ranges}

---

##### `permitted_uri_domains`<sup>Optional</sup> <a name="permitted_uri_domains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedUriDomains"></a>

```python
permitted_uri_domains: typing.List[str]
```

- *Type:* typing.List[str]

List of URI domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_uri_domains PkiSecretBackendRootSignIntermediate#permitted_uri_domains}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

The postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#postal_code PkiSecretBackendRootSignIntermediate#postal_code}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.province"></a>

```python
province: str
```

- *Type:* str

The province.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#province PkiSecretBackendRootSignIntermediate#province}

---

##### `revoke`<sup>Optional</sup> <a name="revoke" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.revoke"></a>

```python
revoke: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Revoke the certificate upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#revoke PkiSecretBackendRootSignIntermediate#revoke}

---

##### `signature_bits`<sup>Optional</sup> <a name="signature_bits" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.signatureBits"></a>

```python
signature_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of bits to use in the signature algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#signature_bits PkiSecretBackendRootSignIntermediate#signature_bits}

---

##### `skid`<sup>Optional</sup> <a name="skid" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.skid"></a>

```python
skid: str
```

- *Type:* str

Value for the Subject Key Identifier field   (RFC 5280 Section 4.2.1.2). Specified as a string in hex format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#skid PkiSecretBackendRootSignIntermediate#skid}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

The street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#street_address PkiSecretBackendRootSignIntermediate#street_address}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#ttl PkiSecretBackendRootSignIntermediate#ttl}

---

##### `uri_sans`<sup>Optional</sup> <a name="uri_sans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.uriSans"></a>

```python
uri_sans: typing.List[str]
```

- *Type:* typing.List[str]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#uri_sans PkiSecretBackendRootSignIntermediate#uri_sans}

---

##### `use_csr_values`<sup>Optional</sup> <a name="use_csr_values" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.useCsrValues"></a>

```python
use_csr_values: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Preserve CSR values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#use_csr_values PkiSecretBackendRootSignIntermediate#use_csr_values}

---

##### `use_pss`<sup>Optional</sup> <a name="use_pss" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.usePss"></a>

```python
use_pss: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Specifies whether or not to use PSS signatures   over PKCS#1v1.5 signatures when a RSA-type issuer is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_root_sign_intermediate#use_pss PkiSecretBackendRootSignIntermediate#use_pss}

---



