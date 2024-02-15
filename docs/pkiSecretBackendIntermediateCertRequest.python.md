# `pkiSecretBackendIntermediateCertRequest` Submodule <a name="`pkiSecretBackendIntermediateCertRequest` Submodule" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendIntermediateCertRequest <a name="PkiSecretBackendIntermediateCertRequest" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request vault_pki_secret_backend_intermediate_cert_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_intermediate_cert_request

pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest(
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
  add_basic_constraints: typing.Union[bool, IResolvable] = None,
  alt_names: typing.List[str] = None,
  country: str = None,
  exclude_cn_from_sans: typing.Union[bool, IResolvable] = None,
  format: str = None,
  id: str = None,
  ip_sans: typing.List[str] = None,
  key_bits: typing.Union[int, float] = None,
  key_name: str = None,
  key_ref: str = None,
  key_type: str = None,
  locality: str = None,
  managed_key_id: str = None,
  managed_key_name: str = None,
  namespace: str = None,
  organization: str = None,
  other_sans: typing.List[str] = None,
  ou: str = None,
  postal_code: str = None,
  private_key_format: str = None,
  province: str = None,
  street_address: str = None,
  uri_sans: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.commonName">common_name</a></code> | <code>str</code> | CN of intermediate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.type">type</a></code> | <code>str</code> | Type of intermediate to create. Must be either "existing", "exported", "internal" or "kms". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.addBasicConstraints">add_basic_constraints</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set 'CA: true' in a Basic Constraints extension. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.altNames">alt_names</a></code> | <code>typing.List[str]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.country">country</a></code> | <code>str</code> | The country. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.excludeCnFromSans">exclude_cn_from_sans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.format">format</a></code> | <code>str</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#id PkiSecretBackendIntermediateCertRequest#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.ipSans">ip_sans</a></code> | <code>typing.List[str]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.keyBits">key_bits</a></code> | <code>typing.Union[int, float]</code> | The number of bits to use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | When a new key is created with this request, optionally specifies the name for this. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.keyRef">key_ref</a></code> | <code>str</code> | Specifies the key to use for generating this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.keyType">key_type</a></code> | <code>str</code> | The desired key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.locality">locality</a></code> | <code>str</code> | The locality. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.managedKeyId">managed_key_id</a></code> | <code>str</code> | The ID of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.managedKeyName">managed_key_name</a></code> | <code>str</code> | The name of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The organization. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.otherSans">other_sans</a></code> | <code>typing.List[str]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.ou">ou</a></code> | <code>str</code> | The organization unit. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.postalCode">postal_code</a></code> | <code>str</code> | The postal code. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.privateKeyFormat">private_key_format</a></code> | <code>str</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.province">province</a></code> | <code>str</code> | The province. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.streetAddress">street_address</a></code> | <code>str</code> | The street address. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.uriSans">uri_sans</a></code> | <code>typing.List[str]</code> | List of alternative URIs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.backend"></a>

- *Type:* str

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#backend PkiSecretBackendIntermediateCertRequest#backend}

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.commonName"></a>

- *Type:* str

CN of intermediate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#common_name PkiSecretBackendIntermediateCertRequest#common_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.type"></a>

- *Type:* str

Type of intermediate to create. Must be either "existing", "exported", "internal" or "kms".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#type PkiSecretBackendIntermediateCertRequest#type}

---

##### `add_basic_constraints`<sup>Optional</sup> <a name="add_basic_constraints" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.addBasicConstraints"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set 'CA: true' in a Basic Constraints extension.

Only needed as
a workaround in some compatibility scenarios with Active Directory Certificate Services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#add_basic_constraints PkiSecretBackendIntermediateCertRequest#add_basic_constraints}

---

##### `alt_names`<sup>Optional</sup> <a name="alt_names" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.altNames"></a>

- *Type:* typing.List[str]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#alt_names PkiSecretBackendIntermediateCertRequest#alt_names}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.country"></a>

- *Type:* str

The country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#country PkiSecretBackendIntermediateCertRequest#country}

---

##### `exclude_cn_from_sans`<sup>Optional</sup> <a name="exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.excludeCnFromSans"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#exclude_cn_from_sans PkiSecretBackendIntermediateCertRequest#exclude_cn_from_sans}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.format"></a>

- *Type:* str

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#format PkiSecretBackendIntermediateCertRequest#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#id PkiSecretBackendIntermediateCertRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_sans`<sup>Optional</sup> <a name="ip_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.ipSans"></a>

- *Type:* typing.List[str]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#ip_sans PkiSecretBackendIntermediateCertRequest#ip_sans}

---

##### `key_bits`<sup>Optional</sup> <a name="key_bits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.keyBits"></a>

- *Type:* typing.Union[int, float]

The number of bits to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_bits PkiSecretBackendIntermediateCertRequest#key_bits}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.keyName"></a>

- *Type:* str

When a new key is created with this request, optionally specifies the name for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_name PkiSecretBackendIntermediateCertRequest#key_name}

---

##### `key_ref`<sup>Optional</sup> <a name="key_ref" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.keyRef"></a>

- *Type:* str

Specifies the key to use for generating this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_ref PkiSecretBackendIntermediateCertRequest#key_ref}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.keyType"></a>

- *Type:* str

The desired key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_type PkiSecretBackendIntermediateCertRequest#key_type}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.locality"></a>

- *Type:* str

The locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#locality PkiSecretBackendIntermediateCertRequest#locality}

---

##### `managed_key_id`<sup>Optional</sup> <a name="managed_key_id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.managedKeyId"></a>

- *Type:* str

The ID of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#managed_key_id PkiSecretBackendIntermediateCertRequest#managed_key_id}

---

##### `managed_key_name`<sup>Optional</sup> <a name="managed_key_name" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.managedKeyName"></a>

- *Type:* str

The name of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#managed_key_name PkiSecretBackendIntermediateCertRequest#managed_key_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#namespace PkiSecretBackendIntermediateCertRequest#namespace}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.organization"></a>

- *Type:* str

The organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#organization PkiSecretBackendIntermediateCertRequest#organization}

---

##### `other_sans`<sup>Optional</sup> <a name="other_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.otherSans"></a>

- *Type:* typing.List[str]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#other_sans PkiSecretBackendIntermediateCertRequest#other_sans}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.ou"></a>

- *Type:* str

The organization unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#ou PkiSecretBackendIntermediateCertRequest#ou}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.postalCode"></a>

- *Type:* str

The postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#postal_code PkiSecretBackendIntermediateCertRequest#postal_code}

---

##### `private_key_format`<sup>Optional</sup> <a name="private_key_format" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.privateKeyFormat"></a>

- *Type:* str

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#private_key_format PkiSecretBackendIntermediateCertRequest#private_key_format}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.province"></a>

- *Type:* str

The province.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#province PkiSecretBackendIntermediateCertRequest#province}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.streetAddress"></a>

- *Type:* str

The street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#street_address PkiSecretBackendIntermediateCertRequest#street_address}

---

##### `uri_sans`<sup>Optional</sup> <a name="uri_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.uriSans"></a>

- *Type:* typing.List[str]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#uri_sans PkiSecretBackendIntermediateCertRequest#uri_sans}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetAddBasicConstraints">reset_add_basic_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetAltNames">reset_alt_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetExcludeCnFromSans">reset_exclude_cn_from_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetIpSans">reset_ip_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyBits">reset_key_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyRef">reset_key_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyType">reset_key_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetManagedKeyId">reset_managed_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetManagedKeyName">reset_managed_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOtherSans">reset_other_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOu">reset_ou</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetPrivateKeyFormat">reset_private_key_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetProvince">reset_province</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetStreetAddress">reset_street_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetUriSans">reset_uri_sans</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_add_basic_constraints` <a name="reset_add_basic_constraints" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetAddBasicConstraints"></a>

```python
def reset_add_basic_constraints() -> None
```

##### `reset_alt_names` <a name="reset_alt_names" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetAltNames"></a>

```python
def reset_alt_names() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_exclude_cn_from_sans` <a name="reset_exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetExcludeCnFromSans"></a>

```python
def reset_exclude_cn_from_sans() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_sans` <a name="reset_ip_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetIpSans"></a>

```python
def reset_ip_sans() -> None
```

##### `reset_key_bits` <a name="reset_key_bits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyBits"></a>

```python
def reset_key_bits() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_key_ref` <a name="reset_key_ref" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyRef"></a>

```python
def reset_key_ref() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyType"></a>

```python
def reset_key_type() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_managed_key_id` <a name="reset_managed_key_id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetManagedKeyId"></a>

```python
def reset_managed_key_id() -> None
```

##### `reset_managed_key_name` <a name="reset_managed_key_name" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetManagedKeyName"></a>

```python
def reset_managed_key_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_other_sans` <a name="reset_other_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOtherSans"></a>

```python
def reset_other_sans() -> None
```

##### `reset_ou` <a name="reset_ou" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOu"></a>

```python
def reset_ou() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_private_key_format` <a name="reset_private_key_format" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetPrivateKeyFormat"></a>

```python
def reset_private_key_format() -> None
```

##### `reset_province` <a name="reset_province" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetProvince"></a>

```python
def reset_province() -> None
```

##### `reset_street_address` <a name="reset_street_address" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetStreetAddress"></a>

```python
def reset_street_address() -> None
```

##### `reset_uri_sans` <a name="reset_uri_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetUriSans"></a>

```python
def reset_uri_sans() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PkiSecretBackendIntermediateCertRequest resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_intermediate_cert_request

pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_intermediate_cert_request

pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_intermediate_cert_request

pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_intermediate_cert_request

pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PkiSecretBackendIntermediateCertRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiSecretBackendIntermediateCertRequest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiSecretBackendIntermediateCertRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendIntermediateCertRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.csr">csr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyType">private_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.addBasicConstraintsInput">add_basic_constraints_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.altNamesInput">alt_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.excludeCnFromSansInput">exclude_cn_from_sans_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ipSansInput">ip_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyBitsInput">key_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyRefInput">key_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyIdInput">managed_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyNameInput">managed_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.otherSansInput">other_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ouInput">ou_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyFormatInput">private_key_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provinceInput">province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.streetAddressInput">street_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.uriSansInput">uri_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.addBasicConstraints">add_basic_constraints</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.altNames">alt_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.excludeCnFromSans">exclude_cn_from_sans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ipSans">ip_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyBits">key_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyRef">key_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyId">managed_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyName">managed_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.otherSans">other_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ou">ou</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyFormat">private_key_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.streetAddress">street_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.uriSans">uri_sans</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.csr"></a>

```python
csr: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `private_key_type`<sup>Required</sup> <a name="private_key_type" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyType"></a>

```python
private_key_type: str
```

- *Type:* str

---

##### `add_basic_constraints_input`<sup>Optional</sup> <a name="add_basic_constraints_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.addBasicConstraintsInput"></a>

```python
add_basic_constraints_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `alt_names_input`<sup>Optional</sup> <a name="alt_names_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.altNamesInput"></a>

```python
alt_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `exclude_cn_from_sans_input`<sup>Optional</sup> <a name="exclude_cn_from_sans_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.excludeCnFromSansInput"></a>

```python
exclude_cn_from_sans_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_sans_input`<sup>Optional</sup> <a name="ip_sans_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ipSansInput"></a>

```python
ip_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_bits_input`<sup>Optional</sup> <a name="key_bits_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyBitsInput"></a>

```python
key_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `key_ref_input`<sup>Optional</sup> <a name="key_ref_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyRefInput"></a>

```python
key_ref_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `managed_key_id_input`<sup>Optional</sup> <a name="managed_key_id_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyIdInput"></a>

```python
managed_key_id_input: str
```

- *Type:* str

---

##### `managed_key_name_input`<sup>Optional</sup> <a name="managed_key_name_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyNameInput"></a>

```python
managed_key_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `other_sans_input`<sup>Optional</sup> <a name="other_sans_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.otherSansInput"></a>

```python
other_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ou_input`<sup>Optional</sup> <a name="ou_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ouInput"></a>

```python
ou_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `private_key_format_input`<sup>Optional</sup> <a name="private_key_format_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyFormatInput"></a>

```python
private_key_format_input: str
```

- *Type:* str

---

##### `province_input`<sup>Optional</sup> <a name="province_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provinceInput"></a>

```python
province_input: str
```

- *Type:* str

---

##### `street_address_input`<sup>Optional</sup> <a name="street_address_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.streetAddressInput"></a>

```python
street_address_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uri_sans_input`<sup>Optional</sup> <a name="uri_sans_input" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.uriSansInput"></a>

```python
uri_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `add_basic_constraints`<sup>Required</sup> <a name="add_basic_constraints" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.addBasicConstraints"></a>

```python
add_basic_constraints: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `alt_names`<sup>Required</sup> <a name="alt_names" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.altNames"></a>

```python
alt_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `exclude_cn_from_sans`<sup>Required</sup> <a name="exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.excludeCnFromSans"></a>

```python
exclude_cn_from_sans: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_sans`<sup>Required</sup> <a name="ip_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ipSans"></a>

```python
ip_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_bits`<sup>Required</sup> <a name="key_bits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyBits"></a>

```python
key_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `key_ref`<sup>Required</sup> <a name="key_ref" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyRef"></a>

```python
key_ref: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `managed_key_id`<sup>Required</sup> <a name="managed_key_id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyId"></a>

```python
managed_key_id: str
```

- *Type:* str

---

##### `managed_key_name`<sup>Required</sup> <a name="managed_key_name" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyName"></a>

```python
managed_key_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `other_sans`<sup>Required</sup> <a name="other_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.otherSans"></a>

```python
other_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ou`<sup>Required</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ou"></a>

```python
ou: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `private_key_format`<sup>Required</sup> <a name="private_key_format" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyFormat"></a>

```python
private_key_format: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri_sans`<sup>Required</sup> <a name="uri_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.uriSans"></a>

```python
uri_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendIntermediateCertRequestConfig <a name="PkiSecretBackendIntermediateCertRequestConfig" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_intermediate_cert_request

pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig(
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
  add_basic_constraints: typing.Union[bool, IResolvable] = None,
  alt_names: typing.List[str] = None,
  country: str = None,
  exclude_cn_from_sans: typing.Union[bool, IResolvable] = None,
  format: str = None,
  id: str = None,
  ip_sans: typing.List[str] = None,
  key_bits: typing.Union[int, float] = None,
  key_name: str = None,
  key_ref: str = None,
  key_type: str = None,
  locality: str = None,
  managed_key_id: str = None,
  managed_key_name: str = None,
  namespace: str = None,
  organization: str = None,
  other_sans: typing.List[str] = None,
  ou: str = None,
  postal_code: str = None,
  private_key_format: str = None,
  province: str = None,
  street_address: str = None,
  uri_sans: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.backend">backend</a></code> | <code>str</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.commonName">common_name</a></code> | <code>str</code> | CN of intermediate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.type">type</a></code> | <code>str</code> | Type of intermediate to create. Must be either "existing", "exported", "internal" or "kms". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.addBasicConstraints">add_basic_constraints</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set 'CA: true' in a Basic Constraints extension. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.altNames">alt_names</a></code> | <code>typing.List[str]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.country">country</a></code> | <code>str</code> | The country. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.excludeCnFromSans">exclude_cn_from_sans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.format">format</a></code> | <code>str</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#id PkiSecretBackendIntermediateCertRequest#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.ipSans">ip_sans</a></code> | <code>typing.List[str]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyBits">key_bits</a></code> | <code>typing.Union[int, float]</code> | The number of bits to use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyName">key_name</a></code> | <code>str</code> | When a new key is created with this request, optionally specifies the name for this. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyRef">key_ref</a></code> | <code>str</code> | Specifies the key to use for generating this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyType">key_type</a></code> | <code>str</code> | The desired key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.locality">locality</a></code> | <code>str</code> | The locality. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.managedKeyId">managed_key_id</a></code> | <code>str</code> | The ID of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.managedKeyName">managed_key_name</a></code> | <code>str</code> | The name of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.organization">organization</a></code> | <code>str</code> | The organization. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.otherSans">other_sans</a></code> | <code>typing.List[str]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.ou">ou</a></code> | <code>str</code> | The organization unit. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.postalCode">postal_code</a></code> | <code>str</code> | The postal code. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.privateKeyFormat">private_key_format</a></code> | <code>str</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.province">province</a></code> | <code>str</code> | The province. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.streetAddress">street_address</a></code> | <code>str</code> | The street address. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.uriSans">uri_sans</a></code> | <code>typing.List[str]</code> | List of alternative URIs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#backend PkiSecretBackendIntermediateCertRequest#backend}

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

CN of intermediate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#common_name PkiSecretBackendIntermediateCertRequest#common_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of intermediate to create. Must be either "existing", "exported", "internal" or "kms".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#type PkiSecretBackendIntermediateCertRequest#type}

---

##### `add_basic_constraints`<sup>Optional</sup> <a name="add_basic_constraints" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.addBasicConstraints"></a>

```python
add_basic_constraints: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set 'CA: true' in a Basic Constraints extension.

Only needed as
a workaround in some compatibility scenarios with Active Directory Certificate Services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#add_basic_constraints PkiSecretBackendIntermediateCertRequest#add_basic_constraints}

---

##### `alt_names`<sup>Optional</sup> <a name="alt_names" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.altNames"></a>

```python
alt_names: typing.List[str]
```

- *Type:* typing.List[str]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#alt_names PkiSecretBackendIntermediateCertRequest#alt_names}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.country"></a>

```python
country: str
```

- *Type:* str

The country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#country PkiSecretBackendIntermediateCertRequest#country}

---

##### `exclude_cn_from_sans`<sup>Optional</sup> <a name="exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.excludeCnFromSans"></a>

```python
exclude_cn_from_sans: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#exclude_cn_from_sans PkiSecretBackendIntermediateCertRequest#exclude_cn_from_sans}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.format"></a>

```python
format: str
```

- *Type:* str

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#format PkiSecretBackendIntermediateCertRequest#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#id PkiSecretBackendIntermediateCertRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_sans`<sup>Optional</sup> <a name="ip_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.ipSans"></a>

```python
ip_sans: typing.List[str]
```

- *Type:* typing.List[str]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#ip_sans PkiSecretBackendIntermediateCertRequest#ip_sans}

---

##### `key_bits`<sup>Optional</sup> <a name="key_bits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyBits"></a>

```python
key_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of bits to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_bits PkiSecretBackendIntermediateCertRequest#key_bits}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

When a new key is created with this request, optionally specifies the name for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_name PkiSecretBackendIntermediateCertRequest#key_name}

---

##### `key_ref`<sup>Optional</sup> <a name="key_ref" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyRef"></a>

```python
key_ref: str
```

- *Type:* str

Specifies the key to use for generating this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_ref PkiSecretBackendIntermediateCertRequest#key_ref}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

The desired key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_type PkiSecretBackendIntermediateCertRequest#key_type}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.locality"></a>

```python
locality: str
```

- *Type:* str

The locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#locality PkiSecretBackendIntermediateCertRequest#locality}

---

##### `managed_key_id`<sup>Optional</sup> <a name="managed_key_id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.managedKeyId"></a>

```python
managed_key_id: str
```

- *Type:* str

The ID of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#managed_key_id PkiSecretBackendIntermediateCertRequest#managed_key_id}

---

##### `managed_key_name`<sup>Optional</sup> <a name="managed_key_name" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.managedKeyName"></a>

```python
managed_key_name: str
```

- *Type:* str

The name of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#managed_key_name PkiSecretBackendIntermediateCertRequest#managed_key_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#namespace PkiSecretBackendIntermediateCertRequest#namespace}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#organization PkiSecretBackendIntermediateCertRequest#organization}

---

##### `other_sans`<sup>Optional</sup> <a name="other_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.otherSans"></a>

```python
other_sans: typing.List[str]
```

- *Type:* typing.List[str]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#other_sans PkiSecretBackendIntermediateCertRequest#other_sans}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.ou"></a>

```python
ou: str
```

- *Type:* str

The organization unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#ou PkiSecretBackendIntermediateCertRequest#ou}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

The postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#postal_code PkiSecretBackendIntermediateCertRequest#postal_code}

---

##### `private_key_format`<sup>Optional</sup> <a name="private_key_format" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.privateKeyFormat"></a>

```python
private_key_format: str
```

- *Type:* str

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#private_key_format PkiSecretBackendIntermediateCertRequest#private_key_format}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.province"></a>

```python
province: str
```

- *Type:* str

The province.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#province PkiSecretBackendIntermediateCertRequest#province}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

The street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#street_address PkiSecretBackendIntermediateCertRequest#street_address}

---

##### `uri_sans`<sup>Optional</sup> <a name="uri_sans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.uriSans"></a>

```python
uri_sans: typing.List[str]
```

- *Type:* typing.List[str]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_intermediate_cert_request#uri_sans PkiSecretBackendIntermediateCertRequest#uri_sans}

---



