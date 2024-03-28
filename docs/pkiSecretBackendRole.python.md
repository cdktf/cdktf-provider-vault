# `pkiSecretBackendRole` Submodule <a name="`pkiSecretBackendRole` Submodule" id="@cdktf/provider-vault.pkiSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendRole <a name="PkiSecretBackendRole" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role vault_pki_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_role

pkiSecretBackendRole.PkiSecretBackendRole(
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
  name: str,
  allow_any_name: typing.Union[bool, IResolvable] = None,
  allow_bare_domains: typing.Union[bool, IResolvable] = None,
  allowed_domains: typing.List[str] = None,
  allowed_domains_template: typing.Union[bool, IResolvable] = None,
  allowed_other_sans: typing.List[str] = None,
  allowed_serial_numbers: typing.List[str] = None,
  allowed_uri_sans: typing.List[str] = None,
  allowed_uri_sans_template: typing.Union[bool, IResolvable] = None,
  allowed_user_ids: typing.List[str] = None,
  allow_glob_domains: typing.Union[bool, IResolvable] = None,
  allow_ip_sans: typing.Union[bool, IResolvable] = None,
  allow_localhost: typing.Union[bool, IResolvable] = None,
  allow_subdomains: typing.Union[bool, IResolvable] = None,
  allow_wildcard_certificates: typing.Union[bool, IResolvable] = None,
  basic_constraints_valid_for_non_ca: typing.Union[bool, IResolvable] = None,
  client_flag: typing.Union[bool, IResolvable] = None,
  code_signing_flag: typing.Union[bool, IResolvable] = None,
  country: typing.List[str] = None,
  email_protection_flag: typing.Union[bool, IResolvable] = None,
  enforce_hostnames: typing.Union[bool, IResolvable] = None,
  ext_key_usage: typing.List[str] = None,
  ext_key_usage_oids: typing.List[str] = None,
  generate_lease: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issuer_ref: str = None,
  key_bits: typing.Union[int, float] = None,
  key_type: str = None,
  key_usage: typing.List[str] = None,
  locality: typing.List[str] = None,
  max_ttl: str = None,
  namespace: str = None,
  no_store: typing.Union[bool, IResolvable] = None,
  not_before_duration: str = None,
  organization: typing.List[str] = None,
  ou: typing.List[str] = None,
  policy_identifier: typing.Union[IResolvable, typing.List[PkiSecretBackendRolePolicyIdentifier]] = None,
  policy_identifiers: typing.List[str] = None,
  postal_code: typing.List[str] = None,
  province: typing.List[str] = None,
  require_cn: typing.Union[bool, IResolvable] = None,
  server_flag: typing.Union[bool, IResolvable] = None,
  street_address: typing.List[str] = None,
  ttl: str = None,
  use_csr_common_name: typing.Union[bool, IResolvable] = None,
  use_csr_sans: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowAnyName">allow_any_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow any name. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowBareDomains">allow_bare_domains</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow certificates matching the actual domain. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedDomains">allowed_domains</a></code> | <code>typing.List[str]</code> | The domains of the role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedDomainsTemplate">allowed_domains_template</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedOtherSans">allowed_other_sans</a></code> | <code>typing.List[str]</code> | Defines allowed custom SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedSerialNumbers">allowed_serial_numbers</a></code> | <code>typing.List[str]</code> | Defines allowed Subject serial numbers. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedUriSans">allowed_uri_sans</a></code> | <code>typing.List[str]</code> | Defines allowed URI SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedUriSansTemplate">allowed_uri_sans_template</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedUserIds">allowed_user_ids</a></code> | <code>typing.List[str]</code> | The allowed User ID's. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowGlobDomains">allow_glob_domains</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow names containing glob patterns. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowIpSans">allow_ip_sans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow IP SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowLocalhost">allow_localhost</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow certificates for localhost. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowSubdomains">allow_subdomains</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow certificates matching subdomains. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowWildcardCertificates">allow_wildcard_certificates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow wildcard certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.basicConstraintsValidForNonCa">basic_constraints_valid_for_non_ca</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to mark basic constraints valid when issuing non-CA certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.clientFlag">client_flag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify certificates for client use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.codeSigningFlag">code_signing_flag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify certificates for code signing use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.country">country</a></code> | <code>typing.List[str]</code> | The country of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.emailProtectionFlag">email_protection_flag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify certificates for email protection use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.enforceHostnames">enforce_hostnames</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow only valid host names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.extKeyUsage">ext_key_usage</a></code> | <code>typing.List[str]</code> | Specify the allowed extended key usage constraint on issued certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.extKeyUsageOids">ext_key_usage_oids</a></code> | <code>typing.List[str]</code> | A list of extended key usage OIDs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.generateLease">generate_lease</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to generate leases with certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#id PkiSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.issuerRef">issuer_ref</a></code> | <code>str</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.keyBits">key_bits</a></code> | <code>typing.Union[int, float]</code> | The number of bits of generated keys. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.keyType">key_type</a></code> | <code>str</code> | The generated key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.keyUsage">key_usage</a></code> | <code>typing.List[str]</code> | Specify the allowed key usage constraint on issued certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.locality">locality</a></code> | <code>typing.List[str]</code> | The locality of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>str</code> | The maximum TTL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.noStore">no_store</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to not store certificates in the storage backend. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.notBeforeDuration">not_before_duration</a></code> | <code>str</code> | Specifies the duration by which to backdate the NotBefore property. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.organization">organization</a></code> | <code>typing.List[str]</code> | The organization of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.ou">ou</a></code> | <code>typing.List[str]</code> | The organization unit of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.policyIdentifier">policy_identifier</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>]]</code> | policy_identifier block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.policyIdentifiers">policy_identifiers</a></code> | <code>typing.List[str]</code> | Specify the list of allowed policies OIDs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.postalCode">postal_code</a></code> | <code>typing.List[str]</code> | The postal code of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.province">province</a></code> | <code>typing.List[str]</code> | The province of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.requireCn">require_cn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to force CN usage. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.serverFlag">server_flag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify certificates for server use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.streetAddress">street_address</a></code> | <code>typing.List[str]</code> | The street address of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | The TTL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.useCsrCommonName">use_csr_common_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to use the CN in the CSR. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.useCsrSans">use_csr_sans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to use the SANs in the CSR. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* str

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#backend PkiSecretBackendRole#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* str

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#name PkiSecretBackendRole#name}

---

##### `allow_any_name`<sup>Optional</sup> <a name="allow_any_name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowAnyName"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow any name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allow_any_name PkiSecretBackendRole#allow_any_name}

---

##### `allow_bare_domains`<sup>Optional</sup> <a name="allow_bare_domains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowBareDomains"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow certificates matching the actual domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allow_bare_domains PkiSecretBackendRole#allow_bare_domains}

---

##### `allowed_domains`<sup>Optional</sup> <a name="allowed_domains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedDomains"></a>

- *Type:* typing.List[str]

The domains of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allowed_domains PkiSecretBackendRole#allowed_domains}

---

##### `allowed_domains_template`<sup>Optional</sup> <a name="allowed_domains_template" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedDomainsTemplate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allowed_domains_template PkiSecretBackendRole#allowed_domains_template}

---

##### `allowed_other_sans`<sup>Optional</sup> <a name="allowed_other_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedOtherSans"></a>

- *Type:* typing.List[str]

Defines allowed custom SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allowed_other_sans PkiSecretBackendRole#allowed_other_sans}

---

##### `allowed_serial_numbers`<sup>Optional</sup> <a name="allowed_serial_numbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedSerialNumbers"></a>

- *Type:* typing.List[str]

Defines allowed Subject serial numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allowed_serial_numbers PkiSecretBackendRole#allowed_serial_numbers}

---

##### `allowed_uri_sans`<sup>Optional</sup> <a name="allowed_uri_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedUriSans"></a>

- *Type:* typing.List[str]

Defines allowed URI SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allowed_uri_sans PkiSecretBackendRole#allowed_uri_sans}

---

##### `allowed_uri_sans_template`<sup>Optional</sup> <a name="allowed_uri_sans_template" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedUriSansTemplate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allowed_uri_sans_template PkiSecretBackendRole#allowed_uri_sans_template}

---

##### `allowed_user_ids`<sup>Optional</sup> <a name="allowed_user_ids" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedUserIds"></a>

- *Type:* typing.List[str]

The allowed User ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allowed_user_ids PkiSecretBackendRole#allowed_user_ids}

---

##### `allow_glob_domains`<sup>Optional</sup> <a name="allow_glob_domains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowGlobDomains"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow names containing glob patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allow_glob_domains PkiSecretBackendRole#allow_glob_domains}

---

##### `allow_ip_sans`<sup>Optional</sup> <a name="allow_ip_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowIpSans"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow IP SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allow_ip_sans PkiSecretBackendRole#allow_ip_sans}

---

##### `allow_localhost`<sup>Optional</sup> <a name="allow_localhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowLocalhost"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow certificates for localhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allow_localhost PkiSecretBackendRole#allow_localhost}

---

##### `allow_subdomains`<sup>Optional</sup> <a name="allow_subdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowSubdomains"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow certificates matching subdomains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allow_subdomains PkiSecretBackendRole#allow_subdomains}

---

##### `allow_wildcard_certificates`<sup>Optional</sup> <a name="allow_wildcard_certificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowWildcardCertificates"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow wildcard certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allow_wildcard_certificates PkiSecretBackendRole#allow_wildcard_certificates}

---

##### `basic_constraints_valid_for_non_ca`<sup>Optional</sup> <a name="basic_constraints_valid_for_non_ca" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.basicConstraintsValidForNonCa"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to mark basic constraints valid when issuing non-CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#basic_constraints_valid_for_non_ca PkiSecretBackendRole#basic_constraints_valid_for_non_ca}

---

##### `client_flag`<sup>Optional</sup> <a name="client_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.clientFlag"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify certificates for client use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#client_flag PkiSecretBackendRole#client_flag}

---

##### `code_signing_flag`<sup>Optional</sup> <a name="code_signing_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.codeSigningFlag"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify certificates for code signing use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#code_signing_flag PkiSecretBackendRole#code_signing_flag}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.country"></a>

- *Type:* typing.List[str]

The country of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#country PkiSecretBackendRole#country}

---

##### `email_protection_flag`<sup>Optional</sup> <a name="email_protection_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.emailProtectionFlag"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify certificates for email protection use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#email_protection_flag PkiSecretBackendRole#email_protection_flag}

---

##### `enforce_hostnames`<sup>Optional</sup> <a name="enforce_hostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.enforceHostnames"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow only valid host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#enforce_hostnames PkiSecretBackendRole#enforce_hostnames}

---

##### `ext_key_usage`<sup>Optional</sup> <a name="ext_key_usage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.extKeyUsage"></a>

- *Type:* typing.List[str]

Specify the allowed extended key usage constraint on issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#ext_key_usage PkiSecretBackendRole#ext_key_usage}

---

##### `ext_key_usage_oids`<sup>Optional</sup> <a name="ext_key_usage_oids" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.extKeyUsageOids"></a>

- *Type:* typing.List[str]

A list of extended key usage OIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#ext_key_usage_oids PkiSecretBackendRole#ext_key_usage_oids}

---

##### `generate_lease`<sup>Optional</sup> <a name="generate_lease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.generateLease"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to generate leases with certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#generate_lease PkiSecretBackendRole#generate_lease}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#id PkiSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_ref`<sup>Optional</sup> <a name="issuer_ref" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.issuerRef"></a>

- *Type:* str

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#issuer_ref PkiSecretBackendRole#issuer_ref}

---

##### `key_bits`<sup>Optional</sup> <a name="key_bits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.keyBits"></a>

- *Type:* typing.Union[int, float]

The number of bits of generated keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#key_bits PkiSecretBackendRole#key_bits}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.keyType"></a>

- *Type:* str

The generated key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#key_type PkiSecretBackendRole#key_type}

---

##### `key_usage`<sup>Optional</sup> <a name="key_usage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.keyUsage"></a>

- *Type:* typing.List[str]

Specify the allowed key usage constraint on issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#key_usage PkiSecretBackendRole#key_usage}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.locality"></a>

- *Type:* typing.List[str]

The locality of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#locality PkiSecretBackendRole#locality}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.maxTtl"></a>

- *Type:* str

The maximum TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#max_ttl PkiSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#namespace PkiSecretBackendRole#namespace}

---

##### `no_store`<sup>Optional</sup> <a name="no_store" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.noStore"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to not store certificates in the storage backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#no_store PkiSecretBackendRole#no_store}

---

##### `not_before_duration`<sup>Optional</sup> <a name="not_before_duration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.notBeforeDuration"></a>

- *Type:* str

Specifies the duration by which to backdate the NotBefore property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#not_before_duration PkiSecretBackendRole#not_before_duration}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.organization"></a>

- *Type:* typing.List[str]

The organization of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#organization PkiSecretBackendRole#organization}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.ou"></a>

- *Type:* typing.List[str]

The organization unit of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#ou PkiSecretBackendRole#ou}

---

##### `policy_identifier`<sup>Optional</sup> <a name="policy_identifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.policyIdentifier"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>]]

policy_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#policy_identifier PkiSecretBackendRole#policy_identifier}

---

##### `policy_identifiers`<sup>Optional</sup> <a name="policy_identifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.policyIdentifiers"></a>

- *Type:* typing.List[str]

Specify the list of allowed policies OIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#policy_identifiers PkiSecretBackendRole#policy_identifiers}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.postalCode"></a>

- *Type:* typing.List[str]

The postal code of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#postal_code PkiSecretBackendRole#postal_code}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.province"></a>

- *Type:* typing.List[str]

The province of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#province PkiSecretBackendRole#province}

---

##### `require_cn`<sup>Optional</sup> <a name="require_cn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.requireCn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to force CN usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#require_cn PkiSecretBackendRole#require_cn}

---

##### `server_flag`<sup>Optional</sup> <a name="server_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.serverFlag"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify certificates for server use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#server_flag PkiSecretBackendRole#server_flag}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.streetAddress"></a>

- *Type:* typing.List[str]

The street address of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#street_address PkiSecretBackendRole#street_address}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.ttl"></a>

- *Type:* str

The TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#ttl PkiSecretBackendRole#ttl}

---

##### `use_csr_common_name`<sup>Optional</sup> <a name="use_csr_common_name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.useCsrCommonName"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to use the CN in the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#use_csr_common_name PkiSecretBackendRole#use_csr_common_name}

---

##### `use_csr_sans`<sup>Optional</sup> <a name="use_csr_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.useCsrSans"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to use the SANs in the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#use_csr_sans PkiSecretBackendRole#use_csr_sans}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.putPolicyIdentifier">put_policy_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowAnyName">reset_allow_any_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowBareDomains">reset_allow_bare_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomains">reset_allowed_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomainsTemplate">reset_allowed_domains_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedOtherSans">reset_allowed_other_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedSerialNumbers">reset_allowed_serial_numbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSans">reset_allowed_uri_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSansTemplate">reset_allowed_uri_sans_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUserIds">reset_allowed_user_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowGlobDomains">reset_allow_glob_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowIpSans">reset_allow_ip_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowLocalhost">reset_allow_localhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowSubdomains">reset_allow_subdomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowWildcardCertificates">reset_allow_wildcard_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetBasicConstraintsValidForNonCa">reset_basic_constraints_valid_for_non_ca</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetClientFlag">reset_client_flag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCodeSigningFlag">reset_code_signing_flag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEmailProtectionFlag">reset_email_protection_flag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEnforceHostnames">reset_enforce_hostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetExtKeyUsage">reset_ext_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetExtKeyUsageOids">reset_ext_key_usage_oids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetGenerateLease">reset_generate_lease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetIssuerRef">reset_issuer_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyBits">reset_key_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyType">reset_key_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyUsage">reset_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNoStore">reset_no_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNotBeforeDuration">reset_not_before_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOu">reset_ou</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifier">reset_policy_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifiers">reset_policy_identifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetProvince">reset_province</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetRequireCn">reset_require_cn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetServerFlag">reset_server_flag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetStreetAddress">reset_street_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrCommonName">reset_use_csr_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrSans">reset_use_csr_sans</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_policy_identifier` <a name="put_policy_identifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.putPolicyIdentifier"></a>

```python
def put_policy_identifier(
  value: typing.Union[IResolvable, typing.List[PkiSecretBackendRolePolicyIdentifier]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.putPolicyIdentifier.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>]]

---

##### `reset_allow_any_name` <a name="reset_allow_any_name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowAnyName"></a>

```python
def reset_allow_any_name() -> None
```

##### `reset_allow_bare_domains` <a name="reset_allow_bare_domains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowBareDomains"></a>

```python
def reset_allow_bare_domains() -> None
```

##### `reset_allowed_domains` <a name="reset_allowed_domains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomains"></a>

```python
def reset_allowed_domains() -> None
```

##### `reset_allowed_domains_template` <a name="reset_allowed_domains_template" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomainsTemplate"></a>

```python
def reset_allowed_domains_template() -> None
```

##### `reset_allowed_other_sans` <a name="reset_allowed_other_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedOtherSans"></a>

```python
def reset_allowed_other_sans() -> None
```

##### `reset_allowed_serial_numbers` <a name="reset_allowed_serial_numbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedSerialNumbers"></a>

```python
def reset_allowed_serial_numbers() -> None
```

##### `reset_allowed_uri_sans` <a name="reset_allowed_uri_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSans"></a>

```python
def reset_allowed_uri_sans() -> None
```

##### `reset_allowed_uri_sans_template` <a name="reset_allowed_uri_sans_template" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSansTemplate"></a>

```python
def reset_allowed_uri_sans_template() -> None
```

##### `reset_allowed_user_ids` <a name="reset_allowed_user_ids" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUserIds"></a>

```python
def reset_allowed_user_ids() -> None
```

##### `reset_allow_glob_domains` <a name="reset_allow_glob_domains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowGlobDomains"></a>

```python
def reset_allow_glob_domains() -> None
```

##### `reset_allow_ip_sans` <a name="reset_allow_ip_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowIpSans"></a>

```python
def reset_allow_ip_sans() -> None
```

##### `reset_allow_localhost` <a name="reset_allow_localhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowLocalhost"></a>

```python
def reset_allow_localhost() -> None
```

##### `reset_allow_subdomains` <a name="reset_allow_subdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowSubdomains"></a>

```python
def reset_allow_subdomains() -> None
```

##### `reset_allow_wildcard_certificates` <a name="reset_allow_wildcard_certificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowWildcardCertificates"></a>

```python
def reset_allow_wildcard_certificates() -> None
```

##### `reset_basic_constraints_valid_for_non_ca` <a name="reset_basic_constraints_valid_for_non_ca" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetBasicConstraintsValidForNonCa"></a>

```python
def reset_basic_constraints_valid_for_non_ca() -> None
```

##### `reset_client_flag` <a name="reset_client_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetClientFlag"></a>

```python
def reset_client_flag() -> None
```

##### `reset_code_signing_flag` <a name="reset_code_signing_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCodeSigningFlag"></a>

```python
def reset_code_signing_flag() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_email_protection_flag` <a name="reset_email_protection_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEmailProtectionFlag"></a>

```python
def reset_email_protection_flag() -> None
```

##### `reset_enforce_hostnames` <a name="reset_enforce_hostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEnforceHostnames"></a>

```python
def reset_enforce_hostnames() -> None
```

##### `reset_ext_key_usage` <a name="reset_ext_key_usage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetExtKeyUsage"></a>

```python
def reset_ext_key_usage() -> None
```

##### `reset_ext_key_usage_oids` <a name="reset_ext_key_usage_oids" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetExtKeyUsageOids"></a>

```python
def reset_ext_key_usage_oids() -> None
```

##### `reset_generate_lease` <a name="reset_generate_lease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetGenerateLease"></a>

```python
def reset_generate_lease() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issuer_ref` <a name="reset_issuer_ref" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetIssuerRef"></a>

```python
def reset_issuer_ref() -> None
```

##### `reset_key_bits` <a name="reset_key_bits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyBits"></a>

```python
def reset_key_bits() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyType"></a>

```python
def reset_key_type() -> None
```

##### `reset_key_usage` <a name="reset_key_usage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyUsage"></a>

```python
def reset_key_usage() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_no_store` <a name="reset_no_store" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNoStore"></a>

```python
def reset_no_store() -> None
```

##### `reset_not_before_duration` <a name="reset_not_before_duration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNotBeforeDuration"></a>

```python
def reset_not_before_duration() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_ou` <a name="reset_ou" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOu"></a>

```python
def reset_ou() -> None
```

##### `reset_policy_identifier` <a name="reset_policy_identifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifier"></a>

```python
def reset_policy_identifier() -> None
```

##### `reset_policy_identifiers` <a name="reset_policy_identifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifiers"></a>

```python
def reset_policy_identifiers() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_province` <a name="reset_province" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetProvince"></a>

```python
def reset_province() -> None
```

##### `reset_require_cn` <a name="reset_require_cn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetRequireCn"></a>

```python
def reset_require_cn() -> None
```

##### `reset_server_flag` <a name="reset_server_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetServerFlag"></a>

```python
def reset_server_flag() -> None
```

##### `reset_street_address` <a name="reset_street_address" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetStreetAddress"></a>

```python
def reset_street_address() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_use_csr_common_name` <a name="reset_use_csr_common_name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrCommonName"></a>

```python
def reset_use_csr_common_name() -> None
```

##### `reset_use_csr_sans` <a name="reset_use_csr_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrSans"></a>

```python
def reset_use_csr_sans() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PkiSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_role

pkiSecretBackendRole.PkiSecretBackendRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_role

pkiSecretBackendRole.PkiSecretBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_role

pkiSecretBackendRole.PkiSecretBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_role

pkiSecretBackendRole.PkiSecretBackendRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PkiSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiSecretBackendRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifier">policy_identifier</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList">PkiSecretBackendRolePolicyIdentifierList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyNameInput">allow_any_name_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomainsInput">allow_bare_domains_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsInput">allowed_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplateInput">allowed_domains_template_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSansInput">allowed_other_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbersInput">allowed_serial_numbers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansInput">allowed_uri_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplateInput">allowed_uri_sans_template_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIdsInput">allowed_user_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomainsInput">allow_glob_domains_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSansInput">allow_ip_sans_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhostInput">allow_localhost_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomainsInput">allow_subdomains_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificatesInput">allow_wildcard_certificates_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCaInput">basic_constraints_valid_for_non_ca_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlagInput">client_flag_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlagInput">code_signing_flag_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.countryInput">country_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlagInput">email_protection_flag_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnamesInput">enforce_hostnames_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageInput">ext_key_usage_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageOidsInput">ext_key_usage_oids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLeaseInput">generate_lease_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRefInput">issuer_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBitsInput">key_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsageInput">key_usage_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.localityInput">locality_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtlInput">max_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStoreInput">no_store_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDurationInput">not_before_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organizationInput">organization_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ouInput">ou_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifierInput">policy_identifier_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiersInput">policy_identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCodeInput">postal_code_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provinceInput">province_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCnInput">require_cn_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlagInput">server_flag_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddressInput">street_address_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonNameInput">use_csr_common_name_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSansInput">use_csr_sans_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyName">allow_any_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomains">allow_bare_domains</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomains">allowed_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplate">allowed_domains_template</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSans">allowed_other_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbers">allowed_serial_numbers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSans">allowed_uri_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplate">allowed_uri_sans_template</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIds">allowed_user_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomains">allow_glob_domains</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSans">allow_ip_sans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhost">allow_localhost</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomains">allow_subdomains</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificates">allow_wildcard_certificates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCa">basic_constraints_valid_for_non_ca</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlag">client_flag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlag">code_signing_flag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.country">country</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlag">email_protection_flag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnames">enforce_hostnames</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsage">ext_key_usage</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageOids">ext_key_usage_oids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLease">generate_lease</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRef">issuer_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBits">key_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsage">key_usage</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.locality">locality</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtl">max_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStore">no_store</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDuration">not_before_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organization">organization</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ou">ou</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiers">policy_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCode">postal_code</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.province">province</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCn">require_cn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlag">server_flag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddress">street_address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonName">use_csr_common_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSans">use_csr_sans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_identifier`<sup>Required</sup> <a name="policy_identifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifier"></a>

```python
policy_identifier: PkiSecretBackendRolePolicyIdentifierList
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList">PkiSecretBackendRolePolicyIdentifierList</a>

---

##### `allow_any_name_input`<sup>Optional</sup> <a name="allow_any_name_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyNameInput"></a>

```python
allow_any_name_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_bare_domains_input`<sup>Optional</sup> <a name="allow_bare_domains_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomainsInput"></a>

```python
allow_bare_domains_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_domains_input`<sup>Optional</sup> <a name="allowed_domains_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsInput"></a>

```python
allowed_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_domains_template_input`<sup>Optional</sup> <a name="allowed_domains_template_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplateInput"></a>

```python
allowed_domains_template_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_other_sans_input`<sup>Optional</sup> <a name="allowed_other_sans_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSansInput"></a>

```python
allowed_other_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_serial_numbers_input`<sup>Optional</sup> <a name="allowed_serial_numbers_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbersInput"></a>

```python
allowed_serial_numbers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_uri_sans_input`<sup>Optional</sup> <a name="allowed_uri_sans_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansInput"></a>

```python
allowed_uri_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_uri_sans_template_input`<sup>Optional</sup> <a name="allowed_uri_sans_template_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplateInput"></a>

```python
allowed_uri_sans_template_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_user_ids_input`<sup>Optional</sup> <a name="allowed_user_ids_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIdsInput"></a>

```python
allowed_user_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_glob_domains_input`<sup>Optional</sup> <a name="allow_glob_domains_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomainsInput"></a>

```python
allow_glob_domains_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_ip_sans_input`<sup>Optional</sup> <a name="allow_ip_sans_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSansInput"></a>

```python
allow_ip_sans_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_localhost_input`<sup>Optional</sup> <a name="allow_localhost_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhostInput"></a>

```python
allow_localhost_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_subdomains_input`<sup>Optional</sup> <a name="allow_subdomains_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomainsInput"></a>

```python
allow_subdomains_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_wildcard_certificates_input`<sup>Optional</sup> <a name="allow_wildcard_certificates_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificatesInput"></a>

```python
allow_wildcard_certificates_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `basic_constraints_valid_for_non_ca_input`<sup>Optional</sup> <a name="basic_constraints_valid_for_non_ca_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCaInput"></a>

```python
basic_constraints_valid_for_non_ca_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_flag_input`<sup>Optional</sup> <a name="client_flag_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlagInput"></a>

```python
client_flag_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `code_signing_flag_input`<sup>Optional</sup> <a name="code_signing_flag_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlagInput"></a>

```python
code_signing_flag_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.countryInput"></a>

```python
country_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_protection_flag_input`<sup>Optional</sup> <a name="email_protection_flag_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlagInput"></a>

```python
email_protection_flag_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforce_hostnames_input`<sup>Optional</sup> <a name="enforce_hostnames_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnamesInput"></a>

```python
enforce_hostnames_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ext_key_usage_input`<sup>Optional</sup> <a name="ext_key_usage_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageInput"></a>

```python
ext_key_usage_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ext_key_usage_oids_input`<sup>Optional</sup> <a name="ext_key_usage_oids_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageOidsInput"></a>

```python
ext_key_usage_oids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `generate_lease_input`<sup>Optional</sup> <a name="generate_lease_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLeaseInput"></a>

```python
generate_lease_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_ref_input`<sup>Optional</sup> <a name="issuer_ref_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRefInput"></a>

```python
issuer_ref_input: str
```

- *Type:* str

---

##### `key_bits_input`<sup>Optional</sup> <a name="key_bits_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBitsInput"></a>

```python
key_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `key_usage_input`<sup>Optional</sup> <a name="key_usage_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsageInput"></a>

```python
key_usage_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.localityInput"></a>

```python
locality_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtlInput"></a>

```python
max_ttl_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `no_store_input`<sup>Optional</sup> <a name="no_store_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStoreInput"></a>

```python
no_store_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `not_before_duration_input`<sup>Optional</sup> <a name="not_before_duration_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDurationInput"></a>

```python
not_before_duration_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organizationInput"></a>

```python
organization_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ou_input`<sup>Optional</sup> <a name="ou_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ouInput"></a>

```python
ou_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_identifier_input`<sup>Optional</sup> <a name="policy_identifier_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifierInput"></a>

```python
policy_identifier_input: typing.Union[IResolvable, typing.List[PkiSecretBackendRolePolicyIdentifier]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>]]

---

##### `policy_identifiers_input`<sup>Optional</sup> <a name="policy_identifiers_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiersInput"></a>

```python
policy_identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCodeInput"></a>

```python
postal_code_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `province_input`<sup>Optional</sup> <a name="province_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provinceInput"></a>

```python
province_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_cn_input`<sup>Optional</sup> <a name="require_cn_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCnInput"></a>

```python
require_cn_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_flag_input`<sup>Optional</sup> <a name="server_flag_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlagInput"></a>

```python
server_flag_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `street_address_input`<sup>Optional</sup> <a name="street_address_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddressInput"></a>

```python
street_address_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `use_csr_common_name_input`<sup>Optional</sup> <a name="use_csr_common_name_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonNameInput"></a>

```python
use_csr_common_name_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_csr_sans_input`<sup>Optional</sup> <a name="use_csr_sans_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSansInput"></a>

```python
use_csr_sans_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_any_name`<sup>Required</sup> <a name="allow_any_name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyName"></a>

```python
allow_any_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_bare_domains`<sup>Required</sup> <a name="allow_bare_domains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomains"></a>

```python
allow_bare_domains: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_domains`<sup>Required</sup> <a name="allowed_domains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomains"></a>

```python
allowed_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_domains_template`<sup>Required</sup> <a name="allowed_domains_template" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplate"></a>

```python
allowed_domains_template: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_other_sans`<sup>Required</sup> <a name="allowed_other_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSans"></a>

```python
allowed_other_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_serial_numbers`<sup>Required</sup> <a name="allowed_serial_numbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbers"></a>

```python
allowed_serial_numbers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_uri_sans`<sup>Required</sup> <a name="allowed_uri_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSans"></a>

```python
allowed_uri_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_uri_sans_template`<sup>Required</sup> <a name="allowed_uri_sans_template" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplate"></a>

```python
allowed_uri_sans_template: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_user_ids`<sup>Required</sup> <a name="allowed_user_ids" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIds"></a>

```python
allowed_user_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_glob_domains`<sup>Required</sup> <a name="allow_glob_domains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomains"></a>

```python
allow_glob_domains: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_ip_sans`<sup>Required</sup> <a name="allow_ip_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSans"></a>

```python
allow_ip_sans: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_localhost`<sup>Required</sup> <a name="allow_localhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhost"></a>

```python
allow_localhost: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_subdomains`<sup>Required</sup> <a name="allow_subdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomains"></a>

```python
allow_subdomains: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_wildcard_certificates`<sup>Required</sup> <a name="allow_wildcard_certificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificates"></a>

```python
allow_wildcard_certificates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `basic_constraints_valid_for_non_ca`<sup>Required</sup> <a name="basic_constraints_valid_for_non_ca" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCa"></a>

```python
basic_constraints_valid_for_non_ca: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_flag`<sup>Required</sup> <a name="client_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlag"></a>

```python
client_flag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `code_signing_flag`<sup>Required</sup> <a name="code_signing_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlag"></a>

```python
code_signing_flag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.country"></a>

```python
country: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_protection_flag`<sup>Required</sup> <a name="email_protection_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlag"></a>

```python
email_protection_flag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforce_hostnames`<sup>Required</sup> <a name="enforce_hostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnames"></a>

```python
enforce_hostnames: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ext_key_usage`<sup>Required</sup> <a name="ext_key_usage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsage"></a>

```python
ext_key_usage: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ext_key_usage_oids`<sup>Required</sup> <a name="ext_key_usage_oids" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageOids"></a>

```python
ext_key_usage_oids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `generate_lease`<sup>Required</sup> <a name="generate_lease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLease"></a>

```python
generate_lease: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer_ref`<sup>Required</sup> <a name="issuer_ref" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRef"></a>

```python
issuer_ref: str
```

- *Type:* str

---

##### `key_bits`<sup>Required</sup> <a name="key_bits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBits"></a>

```python
key_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsage"></a>

```python
key_usage: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.locality"></a>

```python
locality: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtl"></a>

```python
max_ttl: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `no_store`<sup>Required</sup> <a name="no_store" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStore"></a>

```python
no_store: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `not_before_duration`<sup>Required</sup> <a name="not_before_duration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDuration"></a>

```python
not_before_duration: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organization"></a>

```python
organization: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ou`<sup>Required</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ou"></a>

```python
ou: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_identifiers`<sup>Required</sup> <a name="policy_identifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiers"></a>

```python
policy_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCode"></a>

```python
postal_code: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.province"></a>

```python
province: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_cn`<sup>Required</sup> <a name="require_cn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCn"></a>

```python
require_cn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_flag`<sup>Required</sup> <a name="server_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlag"></a>

```python
server_flag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddress"></a>

```python
street_address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `use_csr_common_name`<sup>Required</sup> <a name="use_csr_common_name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonName"></a>

```python
use_csr_common_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_csr_sans`<sup>Required</sup> <a name="use_csr_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSans"></a>

```python
use_csr_sans: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendRoleConfig <a name="PkiSecretBackendRoleConfig" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_role

pkiSecretBackendRole.PkiSecretBackendRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  name: str,
  allow_any_name: typing.Union[bool, IResolvable] = None,
  allow_bare_domains: typing.Union[bool, IResolvable] = None,
  allowed_domains: typing.List[str] = None,
  allowed_domains_template: typing.Union[bool, IResolvable] = None,
  allowed_other_sans: typing.List[str] = None,
  allowed_serial_numbers: typing.List[str] = None,
  allowed_uri_sans: typing.List[str] = None,
  allowed_uri_sans_template: typing.Union[bool, IResolvable] = None,
  allowed_user_ids: typing.List[str] = None,
  allow_glob_domains: typing.Union[bool, IResolvable] = None,
  allow_ip_sans: typing.Union[bool, IResolvable] = None,
  allow_localhost: typing.Union[bool, IResolvable] = None,
  allow_subdomains: typing.Union[bool, IResolvable] = None,
  allow_wildcard_certificates: typing.Union[bool, IResolvable] = None,
  basic_constraints_valid_for_non_ca: typing.Union[bool, IResolvable] = None,
  client_flag: typing.Union[bool, IResolvable] = None,
  code_signing_flag: typing.Union[bool, IResolvable] = None,
  country: typing.List[str] = None,
  email_protection_flag: typing.Union[bool, IResolvable] = None,
  enforce_hostnames: typing.Union[bool, IResolvable] = None,
  ext_key_usage: typing.List[str] = None,
  ext_key_usage_oids: typing.List[str] = None,
  generate_lease: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issuer_ref: str = None,
  key_bits: typing.Union[int, float] = None,
  key_type: str = None,
  key_usage: typing.List[str] = None,
  locality: typing.List[str] = None,
  max_ttl: str = None,
  namespace: str = None,
  no_store: typing.Union[bool, IResolvable] = None,
  not_before_duration: str = None,
  organization: typing.List[str] = None,
  ou: typing.List[str] = None,
  policy_identifier: typing.Union[IResolvable, typing.List[PkiSecretBackendRolePolicyIdentifier]] = None,
  policy_identifiers: typing.List[str] = None,
  postal_code: typing.List[str] = None,
  province: typing.List[str] = None,
  require_cn: typing.Union[bool, IResolvable] = None,
  server_flag: typing.Union[bool, IResolvable] = None,
  street_address: typing.List[str] = None,
  ttl: str = None,
  use_csr_common_name: typing.Union[bool, IResolvable] = None,
  use_csr_sans: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.backend">backend</a></code> | <code>str</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.name">name</a></code> | <code>str</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowAnyName">allow_any_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow any name. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowBareDomains">allow_bare_domains</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow certificates matching the actual domain. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomains">allowed_domains</a></code> | <code>typing.List[str]</code> | The domains of the role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomainsTemplate">allowed_domains_template</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedOtherSans">allowed_other_sans</a></code> | <code>typing.List[str]</code> | Defines allowed custom SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedSerialNumbers">allowed_serial_numbers</a></code> | <code>typing.List[str]</code> | Defines allowed Subject serial numbers. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSans">allowed_uri_sans</a></code> | <code>typing.List[str]</code> | Defines allowed URI SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSansTemplate">allowed_uri_sans_template</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUserIds">allowed_user_ids</a></code> | <code>typing.List[str]</code> | The allowed User ID's. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowGlobDomains">allow_glob_domains</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow names containing glob patterns. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowIpSans">allow_ip_sans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow IP SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowLocalhost">allow_localhost</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow certificates for localhost. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowSubdomains">allow_subdomains</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow certificates matching subdomains. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowWildcardCertificates">allow_wildcard_certificates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow wildcard certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.basicConstraintsValidForNonCa">basic_constraints_valid_for_non_ca</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to mark basic constraints valid when issuing non-CA certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.clientFlag">client_flag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify certificates for client use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.codeSigningFlag">code_signing_flag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify certificates for code signing use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.country">country</a></code> | <code>typing.List[str]</code> | The country of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.emailProtectionFlag">email_protection_flag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify certificates for email protection use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.enforceHostnames">enforce_hostnames</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow only valid host names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsage">ext_key_usage</a></code> | <code>typing.List[str]</code> | Specify the allowed extended key usage constraint on issued certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsageOids">ext_key_usage_oids</a></code> | <code>typing.List[str]</code> | A list of extended key usage OIDs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.generateLease">generate_lease</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to generate leases with certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#id PkiSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.issuerRef">issuer_ref</a></code> | <code>str</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyBits">key_bits</a></code> | <code>typing.Union[int, float]</code> | The number of bits of generated keys. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyType">key_type</a></code> | <code>str</code> | The generated key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyUsage">key_usage</a></code> | <code>typing.List[str]</code> | Specify the allowed key usage constraint on issued certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.locality">locality</a></code> | <code>typing.List[str]</code> | The locality of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.maxTtl">max_ttl</a></code> | <code>str</code> | The maximum TTL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.noStore">no_store</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to not store certificates in the storage backend. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.notBeforeDuration">not_before_duration</a></code> | <code>str</code> | Specifies the duration by which to backdate the NotBefore property. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.organization">organization</a></code> | <code>typing.List[str]</code> | The organization of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ou">ou</a></code> | <code>typing.List[str]</code> | The organization unit of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifier">policy_identifier</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>]]</code> | policy_identifier block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifiers">policy_identifiers</a></code> | <code>typing.List[str]</code> | Specify the list of allowed policies OIDs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.postalCode">postal_code</a></code> | <code>typing.List[str]</code> | The postal code of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.province">province</a></code> | <code>typing.List[str]</code> | The province of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.requireCn">require_cn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to force CN usage. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.serverFlag">server_flag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify certificates for server use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.streetAddress">street_address</a></code> | <code>typing.List[str]</code> | The street address of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ttl">ttl</a></code> | <code>str</code> | The TTL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrCommonName">use_csr_common_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to use the CN in the CSR. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrSans">use_csr_sans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to use the SANs in the CSR. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#backend PkiSecretBackendRole#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#name PkiSecretBackendRole#name}

---

##### `allow_any_name`<sup>Optional</sup> <a name="allow_any_name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowAnyName"></a>

```python
allow_any_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow any name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allow_any_name PkiSecretBackendRole#allow_any_name}

---

##### `allow_bare_domains`<sup>Optional</sup> <a name="allow_bare_domains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowBareDomains"></a>

```python
allow_bare_domains: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow certificates matching the actual domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allow_bare_domains PkiSecretBackendRole#allow_bare_domains}

---

##### `allowed_domains`<sup>Optional</sup> <a name="allowed_domains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomains"></a>

```python
allowed_domains: typing.List[str]
```

- *Type:* typing.List[str]

The domains of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allowed_domains PkiSecretBackendRole#allowed_domains}

---

##### `allowed_domains_template`<sup>Optional</sup> <a name="allowed_domains_template" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomainsTemplate"></a>

```python
allowed_domains_template: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allowed_domains_template PkiSecretBackendRole#allowed_domains_template}

---

##### `allowed_other_sans`<sup>Optional</sup> <a name="allowed_other_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedOtherSans"></a>

```python
allowed_other_sans: typing.List[str]
```

- *Type:* typing.List[str]

Defines allowed custom SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allowed_other_sans PkiSecretBackendRole#allowed_other_sans}

---

##### `allowed_serial_numbers`<sup>Optional</sup> <a name="allowed_serial_numbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedSerialNumbers"></a>

```python
allowed_serial_numbers: typing.List[str]
```

- *Type:* typing.List[str]

Defines allowed Subject serial numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allowed_serial_numbers PkiSecretBackendRole#allowed_serial_numbers}

---

##### `allowed_uri_sans`<sup>Optional</sup> <a name="allowed_uri_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSans"></a>

```python
allowed_uri_sans: typing.List[str]
```

- *Type:* typing.List[str]

Defines allowed URI SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allowed_uri_sans PkiSecretBackendRole#allowed_uri_sans}

---

##### `allowed_uri_sans_template`<sup>Optional</sup> <a name="allowed_uri_sans_template" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSansTemplate"></a>

```python
allowed_uri_sans_template: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allowed_uri_sans_template PkiSecretBackendRole#allowed_uri_sans_template}

---

##### `allowed_user_ids`<sup>Optional</sup> <a name="allowed_user_ids" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUserIds"></a>

```python
allowed_user_ids: typing.List[str]
```

- *Type:* typing.List[str]

The allowed User ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allowed_user_ids PkiSecretBackendRole#allowed_user_ids}

---

##### `allow_glob_domains`<sup>Optional</sup> <a name="allow_glob_domains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowGlobDomains"></a>

```python
allow_glob_domains: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow names containing glob patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allow_glob_domains PkiSecretBackendRole#allow_glob_domains}

---

##### `allow_ip_sans`<sup>Optional</sup> <a name="allow_ip_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowIpSans"></a>

```python
allow_ip_sans: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow IP SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allow_ip_sans PkiSecretBackendRole#allow_ip_sans}

---

##### `allow_localhost`<sup>Optional</sup> <a name="allow_localhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowLocalhost"></a>

```python
allow_localhost: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow certificates for localhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allow_localhost PkiSecretBackendRole#allow_localhost}

---

##### `allow_subdomains`<sup>Optional</sup> <a name="allow_subdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowSubdomains"></a>

```python
allow_subdomains: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow certificates matching subdomains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allow_subdomains PkiSecretBackendRole#allow_subdomains}

---

##### `allow_wildcard_certificates`<sup>Optional</sup> <a name="allow_wildcard_certificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowWildcardCertificates"></a>

```python
allow_wildcard_certificates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow wildcard certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#allow_wildcard_certificates PkiSecretBackendRole#allow_wildcard_certificates}

---

##### `basic_constraints_valid_for_non_ca`<sup>Optional</sup> <a name="basic_constraints_valid_for_non_ca" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.basicConstraintsValidForNonCa"></a>

```python
basic_constraints_valid_for_non_ca: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to mark basic constraints valid when issuing non-CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#basic_constraints_valid_for_non_ca PkiSecretBackendRole#basic_constraints_valid_for_non_ca}

---

##### `client_flag`<sup>Optional</sup> <a name="client_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.clientFlag"></a>

```python
client_flag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify certificates for client use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#client_flag PkiSecretBackendRole#client_flag}

---

##### `code_signing_flag`<sup>Optional</sup> <a name="code_signing_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.codeSigningFlag"></a>

```python
code_signing_flag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify certificates for code signing use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#code_signing_flag PkiSecretBackendRole#code_signing_flag}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.country"></a>

```python
country: typing.List[str]
```

- *Type:* typing.List[str]

The country of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#country PkiSecretBackendRole#country}

---

##### `email_protection_flag`<sup>Optional</sup> <a name="email_protection_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.emailProtectionFlag"></a>

```python
email_protection_flag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify certificates for email protection use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#email_protection_flag PkiSecretBackendRole#email_protection_flag}

---

##### `enforce_hostnames`<sup>Optional</sup> <a name="enforce_hostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.enforceHostnames"></a>

```python
enforce_hostnames: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow only valid host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#enforce_hostnames PkiSecretBackendRole#enforce_hostnames}

---

##### `ext_key_usage`<sup>Optional</sup> <a name="ext_key_usage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsage"></a>

```python
ext_key_usage: typing.List[str]
```

- *Type:* typing.List[str]

Specify the allowed extended key usage constraint on issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#ext_key_usage PkiSecretBackendRole#ext_key_usage}

---

##### `ext_key_usage_oids`<sup>Optional</sup> <a name="ext_key_usage_oids" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsageOids"></a>

```python
ext_key_usage_oids: typing.List[str]
```

- *Type:* typing.List[str]

A list of extended key usage OIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#ext_key_usage_oids PkiSecretBackendRole#ext_key_usage_oids}

---

##### `generate_lease`<sup>Optional</sup> <a name="generate_lease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.generateLease"></a>

```python
generate_lease: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to generate leases with certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#generate_lease PkiSecretBackendRole#generate_lease}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#id PkiSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_ref`<sup>Optional</sup> <a name="issuer_ref" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.issuerRef"></a>

```python
issuer_ref: str
```

- *Type:* str

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#issuer_ref PkiSecretBackendRole#issuer_ref}

---

##### `key_bits`<sup>Optional</sup> <a name="key_bits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyBits"></a>

```python
key_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of bits of generated keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#key_bits PkiSecretBackendRole#key_bits}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

The generated key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#key_type PkiSecretBackendRole#key_type}

---

##### `key_usage`<sup>Optional</sup> <a name="key_usage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyUsage"></a>

```python
key_usage: typing.List[str]
```

- *Type:* typing.List[str]

Specify the allowed key usage constraint on issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#key_usage PkiSecretBackendRole#key_usage}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.locality"></a>

```python
locality: typing.List[str]
```

- *Type:* typing.List[str]

The locality of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#locality PkiSecretBackendRole#locality}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.maxTtl"></a>

```python
max_ttl: str
```

- *Type:* str

The maximum TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#max_ttl PkiSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#namespace PkiSecretBackendRole#namespace}

---

##### `no_store`<sup>Optional</sup> <a name="no_store" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.noStore"></a>

```python
no_store: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to not store certificates in the storage backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#no_store PkiSecretBackendRole#no_store}

---

##### `not_before_duration`<sup>Optional</sup> <a name="not_before_duration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.notBeforeDuration"></a>

```python
not_before_duration: str
```

- *Type:* str

Specifies the duration by which to backdate the NotBefore property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#not_before_duration PkiSecretBackendRole#not_before_duration}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.organization"></a>

```python
organization: typing.List[str]
```

- *Type:* typing.List[str]

The organization of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#organization PkiSecretBackendRole#organization}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ou"></a>

```python
ou: typing.List[str]
```

- *Type:* typing.List[str]

The organization unit of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#ou PkiSecretBackendRole#ou}

---

##### `policy_identifier`<sup>Optional</sup> <a name="policy_identifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifier"></a>

```python
policy_identifier: typing.Union[IResolvable, typing.List[PkiSecretBackendRolePolicyIdentifier]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>]]

policy_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#policy_identifier PkiSecretBackendRole#policy_identifier}

---

##### `policy_identifiers`<sup>Optional</sup> <a name="policy_identifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifiers"></a>

```python
policy_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

Specify the list of allowed policies OIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#policy_identifiers PkiSecretBackendRole#policy_identifiers}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.postalCode"></a>

```python
postal_code: typing.List[str]
```

- *Type:* typing.List[str]

The postal code of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#postal_code PkiSecretBackendRole#postal_code}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.province"></a>

```python
province: typing.List[str]
```

- *Type:* typing.List[str]

The province of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#province PkiSecretBackendRole#province}

---

##### `require_cn`<sup>Optional</sup> <a name="require_cn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.requireCn"></a>

```python
require_cn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to force CN usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#require_cn PkiSecretBackendRole#require_cn}

---

##### `server_flag`<sup>Optional</sup> <a name="server_flag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.serverFlag"></a>

```python
server_flag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify certificates for server use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#server_flag PkiSecretBackendRole#server_flag}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.streetAddress"></a>

```python
street_address: typing.List[str]
```

- *Type:* typing.List[str]

The street address of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#street_address PkiSecretBackendRole#street_address}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

The TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#ttl PkiSecretBackendRole#ttl}

---

##### `use_csr_common_name`<sup>Optional</sup> <a name="use_csr_common_name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrCommonName"></a>

```python
use_csr_common_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to use the CN in the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#use_csr_common_name PkiSecretBackendRole#use_csr_common_name}

---

##### `use_csr_sans`<sup>Optional</sup> <a name="use_csr_sans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrSans"></a>

```python
use_csr_sans: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to use the SANs in the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#use_csr_sans PkiSecretBackendRole#use_csr_sans}

---

### PkiSecretBackendRolePolicyIdentifier <a name="PkiSecretBackendRolePolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_role

pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier(
  oid: str,
  cps: str = None,
  notice: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.oid">oid</a></code> | <code>str</code> | OID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.cps">cps</a></code> | <code>str</code> | Optional CPS URL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.notice">notice</a></code> | <code>str</code> | Optional notice. |

---

##### `oid`<sup>Required</sup> <a name="oid" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.oid"></a>

```python
oid: str
```

- *Type:* str

OID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#oid PkiSecretBackendRole#oid}

---

##### `cps`<sup>Optional</sup> <a name="cps" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.cps"></a>

```python
cps: str
```

- *Type:* str

Optional CPS URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#cps PkiSecretBackendRole#cps}

---

##### `notice`<sup>Optional</sup> <a name="notice" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.notice"></a>

```python
notice: str
```

- *Type:* str

Optional notice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/pki_secret_backend_role#notice PkiSecretBackendRole#notice}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendRolePolicyIdentifierList <a name="PkiSecretBackendRolePolicyIdentifierList" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_role

pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PkiSecretBackendRolePolicyIdentifierOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PkiSecretBackendRolePolicyIdentifier]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>]]

---


### PkiSecretBackendRolePolicyIdentifierOutputReference <a name="PkiSecretBackendRolePolicyIdentifierOutputReference" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_role

pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetCps">reset_cps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetNotice">reset_notice</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cps` <a name="reset_cps" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetCps"></a>

```python
def reset_cps() -> None
```

##### `reset_notice` <a name="reset_notice" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetNotice"></a>

```python
def reset_notice() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cpsInput">cps_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.noticeInput">notice_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oidInput">oid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cps">cps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.notice">notice</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oid">oid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cps_input`<sup>Optional</sup> <a name="cps_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cpsInput"></a>

```python
cps_input: str
```

- *Type:* str

---

##### `notice_input`<sup>Optional</sup> <a name="notice_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.noticeInput"></a>

```python
notice_input: str
```

- *Type:* str

---

##### `oid_input`<sup>Optional</sup> <a name="oid_input" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oidInput"></a>

```python
oid_input: str
```

- *Type:* str

---

##### `cps`<sup>Required</sup> <a name="cps" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cps"></a>

```python
cps: str
```

- *Type:* str

---

##### `notice`<sup>Required</sup> <a name="notice" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.notice"></a>

```python
notice: str
```

- *Type:* str

---

##### `oid`<sup>Required</sup> <a name="oid" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oid"></a>

```python
oid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PkiSecretBackendRolePolicyIdentifier]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>]

---



