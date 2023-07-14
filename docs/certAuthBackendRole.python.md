# `vault_cert_auth_backend_role`

Refer to the Terraform Registory for docs: [`vault_cert_auth_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role).

# `certAuthBackendRole` Submodule <a name="`certAuthBackendRole` Submodule" id="@cdktf/provider-vault.certAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertAuthBackendRole <a name="CertAuthBackendRole" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role vault_cert_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import cert_auth_backend_role

certAuthBackendRole.CertAuthBackendRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate: str,
  name: str,
  allowed_common_names: typing.List[str] = None,
  allowed_dns_sans: typing.List[str] = None,
  allowed_email_sans: typing.List[str] = None,
  allowed_names: typing.List[str] = None,
  allowed_organizational_units: typing.List[str] = None,
  allowed_organization_units: typing.List[str] = None,
  allowed_uri_sans: typing.List[str] = None,
  backend: str = None,
  display_name: str = None,
  id: str = None,
  namespace: str = None,
  required_extensions: typing.List[str] = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: typing.Union[bool, IResolvable] = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#certificate CertAuthBackendRole#certificate}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#name CertAuthBackendRole#name}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedCommonNames">allowed_common_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_common_names CertAuthBackendRole#allowed_common_names}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedDnsSans">allowed_dns_sans</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_dns_sans CertAuthBackendRole#allowed_dns_sans}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedEmailSans">allowed_email_sans</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_email_sans CertAuthBackendRole#allowed_email_sans}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedNames">allowed_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_names CertAuthBackendRole#allowed_names}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedOrganizationalUnits">allowed_organizational_units</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_organizational_units CertAuthBackendRole#allowed_organizational_units}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedOrganizationUnits">allowed_organization_units</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_organization_units CertAuthBackendRole#allowed_organization_units}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedUriSans">allowed_uri_sans</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_uri_sans CertAuthBackendRole#allowed_uri_sans}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#backend CertAuthBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#display_name CertAuthBackendRole#display_name}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#id CertAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.requiredExtensions">required_extensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#required_extensions CertAuthBackendRole#required_extensions}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.certificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#certificate CertAuthBackendRole#certificate}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#name CertAuthBackendRole#name}.

---

##### `allowed_common_names`<sup>Optional</sup> <a name="allowed_common_names" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedCommonNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_common_names CertAuthBackendRole#allowed_common_names}.

---

##### `allowed_dns_sans`<sup>Optional</sup> <a name="allowed_dns_sans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedDnsSans"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_dns_sans CertAuthBackendRole#allowed_dns_sans}.

---

##### `allowed_email_sans`<sup>Optional</sup> <a name="allowed_email_sans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedEmailSans"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_email_sans CertAuthBackendRole#allowed_email_sans}.

---

##### `allowed_names`<sup>Optional</sup> <a name="allowed_names" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_names CertAuthBackendRole#allowed_names}.

---

##### `allowed_organizational_units`<sup>Optional</sup> <a name="allowed_organizational_units" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedOrganizationalUnits"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_organizational_units CertAuthBackendRole#allowed_organizational_units}.

---

##### `allowed_organization_units`<sup>Optional</sup> <a name="allowed_organization_units" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedOrganizationUnits"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_organization_units CertAuthBackendRole#allowed_organization_units}.

---

##### `allowed_uri_sans`<sup>Optional</sup> <a name="allowed_uri_sans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedUriSans"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_uri_sans CertAuthBackendRole#allowed_uri_sans}.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.backend"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#backend CertAuthBackendRole#backend}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#display_name CertAuthBackendRole#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#id CertAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#namespace CertAuthBackendRole#namespace}

---

##### `required_extensions`<sup>Optional</sup> <a name="required_extensions" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.requiredExtensions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#required_extensions CertAuthBackendRole#required_extensions}.

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_bound_cidrs CertAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_explicit_max_ttl CertAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_max_ttl CertAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_no_default_policy CertAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_num_uses CertAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_period CertAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_policies CertAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_ttl CertAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_type CertAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedCommonNames">reset_allowed_common_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedDnsSans">reset_allowed_dns_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedEmailSans">reset_allowed_email_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedNames">reset_allowed_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedOrganizationalUnits">reset_allowed_organizational_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedOrganizationUnits">reset_allowed_organization_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedUriSans">reset_allowed_uri_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetRequiredExtensions">reset_required_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenBoundCidrs">reset_token_bound_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenExplicitMaxTtl">reset_token_explicit_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenMaxTtl">reset_token_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenNoDefaultPolicy">reset_token_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenNumUses">reset_token_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenPeriod">reset_token_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenPolicies">reset_token_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenTtl">reset_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenType">reset_token_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_allowed_common_names` <a name="reset_allowed_common_names" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedCommonNames"></a>

```python
def reset_allowed_common_names() -> None
```

##### `reset_allowed_dns_sans` <a name="reset_allowed_dns_sans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedDnsSans"></a>

```python
def reset_allowed_dns_sans() -> None
```

##### `reset_allowed_email_sans` <a name="reset_allowed_email_sans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedEmailSans"></a>

```python
def reset_allowed_email_sans() -> None
```

##### `reset_allowed_names` <a name="reset_allowed_names" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedNames"></a>

```python
def reset_allowed_names() -> None
```

##### `reset_allowed_organizational_units` <a name="reset_allowed_organizational_units" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedOrganizationalUnits"></a>

```python
def reset_allowed_organizational_units() -> None
```

##### `reset_allowed_organization_units` <a name="reset_allowed_organization_units" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedOrganizationUnits"></a>

```python
def reset_allowed_organization_units() -> None
```

##### `reset_allowed_uri_sans` <a name="reset_allowed_uri_sans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedUriSans"></a>

```python
def reset_allowed_uri_sans() -> None
```

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_required_extensions` <a name="reset_required_extensions" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetRequiredExtensions"></a>

```python
def reset_required_extensions() -> None
```

##### `reset_token_bound_cidrs` <a name="reset_token_bound_cidrs" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenBoundCidrs"></a>

```python
def reset_token_bound_cidrs() -> None
```

##### `reset_token_explicit_max_ttl` <a name="reset_token_explicit_max_ttl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```python
def reset_token_explicit_max_ttl() -> None
```

##### `reset_token_max_ttl` <a name="reset_token_max_ttl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenMaxTtl"></a>

```python
def reset_token_max_ttl() -> None
```

##### `reset_token_no_default_policy` <a name="reset_token_no_default_policy" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```python
def reset_token_no_default_policy() -> None
```

##### `reset_token_num_uses` <a name="reset_token_num_uses" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenNumUses"></a>

```python
def reset_token_num_uses() -> None
```

##### `reset_token_period` <a name="reset_token_period" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenPeriod"></a>

```python
def reset_token_period() -> None
```

##### `reset_token_policies` <a name="reset_token_policies" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenPolicies"></a>

```python
def reset_token_policies() -> None
```

##### `reset_token_ttl` <a name="reset_token_ttl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenTtl"></a>

```python
def reset_token_ttl() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenType"></a>

```python
def reset_token_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import cert_auth_backend_role

certAuthBackendRole.CertAuthBackendRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import cert_auth_backend_role

certAuthBackendRole.CertAuthBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import cert_auth_backend_role

certAuthBackendRole.CertAuthBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedCommonNamesInput">allowed_common_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedDnsSansInput">allowed_dns_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedEmailSansInput">allowed_email_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedNamesInput">allowed_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationalUnitsInput">allowed_organizational_units_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationUnitsInput">allowed_organization_units_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedUriSansInput">allowed_uri_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.requiredExtensionsInput">required_extensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenBoundCidrsInput">token_bound_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenExplicitMaxTtlInput">token_explicit_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenMaxTtlInput">token_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNoDefaultPolicyInput">token_no_default_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNumUsesInput">token_num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPeriodInput">token_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPoliciesInput">token_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTtlInput">token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedCommonNames">allowed_common_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedDnsSans">allowed_dns_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedEmailSans">allowed_email_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedNames">allowed_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationalUnits">allowed_organizational_units</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationUnits">allowed_organization_units</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedUriSans">allowed_uri_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.requiredExtensions">required_extensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_common_names_input`<sup>Optional</sup> <a name="allowed_common_names_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedCommonNamesInput"></a>

```python
allowed_common_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_dns_sans_input`<sup>Optional</sup> <a name="allowed_dns_sans_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedDnsSansInput"></a>

```python
allowed_dns_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_email_sans_input`<sup>Optional</sup> <a name="allowed_email_sans_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedEmailSansInput"></a>

```python
allowed_email_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_names_input`<sup>Optional</sup> <a name="allowed_names_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedNamesInput"></a>

```python
allowed_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_organizational_units_input`<sup>Optional</sup> <a name="allowed_organizational_units_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationalUnitsInput"></a>

```python
allowed_organizational_units_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_organization_units_input`<sup>Optional</sup> <a name="allowed_organization_units_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationUnitsInput"></a>

```python
allowed_organization_units_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_uri_sans_input`<sup>Optional</sup> <a name="allowed_uri_sans_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedUriSansInput"></a>

```python
allowed_uri_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `required_extensions_input`<sup>Optional</sup> <a name="required_extensions_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.requiredExtensionsInput"></a>

```python
required_extensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_bound_cidrs_input`<sup>Optional</sup> <a name="token_bound_cidrs_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenBoundCidrsInput"></a>

```python
token_bound_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl_input`<sup>Optional</sup> <a name="token_explicit_max_ttl_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```python
token_explicit_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl_input`<sup>Optional</sup> <a name="token_max_ttl_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenMaxTtlInput"></a>

```python
token_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy_input`<sup>Optional</sup> <a name="token_no_default_policy_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```python
token_no_default_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_num_uses_input`<sup>Optional</sup> <a name="token_num_uses_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNumUsesInput"></a>

```python
token_num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period_input`<sup>Optional</sup> <a name="token_period_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPeriodInput"></a>

```python
token_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies_input`<sup>Optional</sup> <a name="token_policies_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPoliciesInput"></a>

```python
token_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl_input`<sup>Optional</sup> <a name="token_ttl_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTtlInput"></a>

```python
token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `allowed_common_names`<sup>Required</sup> <a name="allowed_common_names" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedCommonNames"></a>

```python
allowed_common_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_dns_sans`<sup>Required</sup> <a name="allowed_dns_sans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedDnsSans"></a>

```python
allowed_dns_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_email_sans`<sup>Required</sup> <a name="allowed_email_sans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedEmailSans"></a>

```python
allowed_email_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_names`<sup>Required</sup> <a name="allowed_names" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedNames"></a>

```python
allowed_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_organizational_units`<sup>Required</sup> <a name="allowed_organizational_units" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationalUnits"></a>

```python
allowed_organizational_units: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_organization_units`<sup>Required</sup> <a name="allowed_organization_units" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationUnits"></a>

```python
allowed_organization_units: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_uri_sans`<sup>Required</sup> <a name="allowed_uri_sans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedUriSans"></a>

```python
allowed_uri_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `required_extensions`<sup>Required</sup> <a name="required_extensions" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.requiredExtensions"></a>

```python
required_extensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_bound_cidrs`<sup>Required</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl`<sup>Required</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl`<sup>Required</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy`<sup>Required</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_num_uses`<sup>Required</sup> <a name="token_num_uses" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period`<sup>Required</sup> <a name="token_period" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies`<sup>Required</sup> <a name="token_policies" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CertAuthBackendRoleConfig <a name="CertAuthBackendRoleConfig" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import cert_auth_backend_role

certAuthBackendRole.CertAuthBackendRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate: str,
  name: str,
  allowed_common_names: typing.List[str] = None,
  allowed_dns_sans: typing.List[str] = None,
  allowed_email_sans: typing.List[str] = None,
  allowed_names: typing.List[str] = None,
  allowed_organizational_units: typing.List[str] = None,
  allowed_organization_units: typing.List[str] = None,
  allowed_uri_sans: typing.List[str] = None,
  backend: str = None,
  display_name: str = None,
  id: str = None,
  namespace: str = None,
  required_extensions: typing.List[str] = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: typing.Union[bool, IResolvable] = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#certificate CertAuthBackendRole#certificate}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#name CertAuthBackendRole#name}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedCommonNames">allowed_common_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_common_names CertAuthBackendRole#allowed_common_names}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedDnsSans">allowed_dns_sans</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_dns_sans CertAuthBackendRole#allowed_dns_sans}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedEmailSans">allowed_email_sans</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_email_sans CertAuthBackendRole#allowed_email_sans}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedNames">allowed_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_names CertAuthBackendRole#allowed_names}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedOrganizationalUnits">allowed_organizational_units</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_organizational_units CertAuthBackendRole#allowed_organizational_units}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedOrganizationUnits">allowed_organization_units</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_organization_units CertAuthBackendRole#allowed_organization_units}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedUriSans">allowed_uri_sans</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_uri_sans CertAuthBackendRole#allowed_uri_sans}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.backend">backend</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#backend CertAuthBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#display_name CertAuthBackendRole#display_name}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#id CertAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.requiredExtensions">required_extensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#required_extensions CertAuthBackendRole#required_extensions}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#certificate CertAuthBackendRole#certificate}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#name CertAuthBackendRole#name}.

---

##### `allowed_common_names`<sup>Optional</sup> <a name="allowed_common_names" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedCommonNames"></a>

```python
allowed_common_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_common_names CertAuthBackendRole#allowed_common_names}.

---

##### `allowed_dns_sans`<sup>Optional</sup> <a name="allowed_dns_sans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedDnsSans"></a>

```python
allowed_dns_sans: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_dns_sans CertAuthBackendRole#allowed_dns_sans}.

---

##### `allowed_email_sans`<sup>Optional</sup> <a name="allowed_email_sans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedEmailSans"></a>

```python
allowed_email_sans: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_email_sans CertAuthBackendRole#allowed_email_sans}.

---

##### `allowed_names`<sup>Optional</sup> <a name="allowed_names" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedNames"></a>

```python
allowed_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_names CertAuthBackendRole#allowed_names}.

---

##### `allowed_organizational_units`<sup>Optional</sup> <a name="allowed_organizational_units" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedOrganizationalUnits"></a>

```python
allowed_organizational_units: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_organizational_units CertAuthBackendRole#allowed_organizational_units}.

---

##### `allowed_organization_units`<sup>Optional</sup> <a name="allowed_organization_units" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedOrganizationUnits"></a>

```python
allowed_organization_units: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_organization_units CertAuthBackendRole#allowed_organization_units}.

---

##### `allowed_uri_sans`<sup>Optional</sup> <a name="allowed_uri_sans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedUriSans"></a>

```python
allowed_uri_sans: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#allowed_uri_sans CertAuthBackendRole#allowed_uri_sans}.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#backend CertAuthBackendRole#backend}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#display_name CertAuthBackendRole#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#id CertAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#namespace CertAuthBackendRole#namespace}

---

##### `required_extensions`<sup>Optional</sup> <a name="required_extensions" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.requiredExtensions"></a>

```python
required_extensions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#required_extensions CertAuthBackendRole#required_extensions}.

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_bound_cidrs CertAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_explicit_max_ttl CertAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_max_ttl CertAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_no_default_policy CertAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_num_uses CertAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_period CertAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_policies CertAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_ttl CertAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/cert_auth_backend_role#token_type CertAuthBackendRole#token_type}

---



