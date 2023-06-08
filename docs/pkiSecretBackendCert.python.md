# `vault_pki_secret_backend_cert`

Refer to the Terraform Registory for docs: [`vault_pki_secret_backend_cert`](https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert).

# `pkiSecretBackendCert` Submodule <a name="`pkiSecretBackendCert` Submodule" id="@cdktf/provider-vault.pkiSecretBackendCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendCert <a name="PkiSecretBackendCert" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert vault_pki_secret_backend_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_cert

pkiSecretBackendCert.PkiSecretBackendCert(
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
  name: str,
  alt_names: typing.List[str] = None,
  auto_renew: typing.Union[bool, IResolvable] = None,
  exclude_cn_from_sans: typing.Union[bool, IResolvable] = None,
  format: str = None,
  id: str = None,
  ip_sans: typing.List[str] = None,
  min_seconds_remaining: typing.Union[int, float] = None,
  namespace: str = None,
  other_sans: typing.List[str] = None,
  private_key_format: str = None,
  revoke: typing.Union[bool, IResolvable] = None,
  ttl: str = None,
  uri_sans: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.commonName">common_name</a></code> | <code>str</code> | CN of the certificate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the role to create the certificate against. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.altNames">alt_names</a></code> | <code>typing.List[str]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.autoRenew">auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.excludeCnFromSans">exclude_cn_from_sans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.format">format</a></code> | <code>str</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.ipSans">ip_sans</a></code> | <code>typing.List[str]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.minSecondsRemaining">min_seconds_remaining</a></code> | <code>typing.Union[int, float]</code> | Generate a new certificate when the expiration is within this number of seconds. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.otherSans">other_sans</a></code> | <code>typing.List[str]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.privateKeyFormat">private_key_format</a></code> | <code>str</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.revoke">revoke</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Revoke the certificate upon resource destruction. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.uriSans">uri_sans</a></code> | <code>typing.List[str]</code> | List of alternative URIs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.backend"></a>

- *Type:* str

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#backend PkiSecretBackendCert#backend}

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.commonName"></a>

- *Type:* str

CN of the certificate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#common_name PkiSecretBackendCert#common_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.name"></a>

- *Type:* str

Name of the role to create the certificate against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#name PkiSecretBackendCert#name}

---

##### `alt_names`<sup>Optional</sup> <a name="alt_names" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.altNames"></a>

- *Type:* typing.List[str]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#alt_names PkiSecretBackendCert#alt_names}

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.autoRenew"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#auto_renew PkiSecretBackendCert#auto_renew}

---

##### `exclude_cn_from_sans`<sup>Optional</sup> <a name="exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.excludeCnFromSans"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#exclude_cn_from_sans PkiSecretBackendCert#exclude_cn_from_sans}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.format"></a>

- *Type:* str

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#format PkiSecretBackendCert#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_sans`<sup>Optional</sup> <a name="ip_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.ipSans"></a>

- *Type:* typing.List[str]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#ip_sans PkiSecretBackendCert#ip_sans}

---

##### `min_seconds_remaining`<sup>Optional</sup> <a name="min_seconds_remaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.minSecondsRemaining"></a>

- *Type:* typing.Union[int, float]

Generate a new certificate when the expiration is within this number of seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#min_seconds_remaining PkiSecretBackendCert#min_seconds_remaining}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#namespace PkiSecretBackendCert#namespace}

---

##### `other_sans`<sup>Optional</sup> <a name="other_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.otherSans"></a>

- *Type:* typing.List[str]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#other_sans PkiSecretBackendCert#other_sans}

---

##### `private_key_format`<sup>Optional</sup> <a name="private_key_format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.privateKeyFormat"></a>

- *Type:* str

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#private_key_format PkiSecretBackendCert#private_key_format}

---

##### `revoke`<sup>Optional</sup> <a name="revoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.revoke"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Revoke the certificate upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#revoke PkiSecretBackendCert#revoke}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.ttl"></a>

- *Type:* str

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#ttl PkiSecretBackendCert#ttl}

---

##### `uri_sans`<sup>Optional</sup> <a name="uri_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.uriSans"></a>

- *Type:* typing.List[str]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#uri_sans PkiSecretBackendCert#uri_sans}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAltNames">reset_alt_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAutoRenew">reset_auto_renew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetExcludeCnFromSans">reset_exclude_cn_from_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIpSans">reset_ip_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetMinSecondsRemaining">reset_min_seconds_remaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOtherSans">reset_other_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetPrivateKeyFormat">reset_private_key_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevoke">reset_revoke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUriSans">reset_uri_sans</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_alt_names` <a name="reset_alt_names" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAltNames"></a>

```python
def reset_alt_names() -> None
```

##### `reset_auto_renew` <a name="reset_auto_renew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAutoRenew"></a>

```python
def reset_auto_renew() -> None
```

##### `reset_exclude_cn_from_sans` <a name="reset_exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetExcludeCnFromSans"></a>

```python
def reset_exclude_cn_from_sans() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_sans` <a name="reset_ip_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIpSans"></a>

```python
def reset_ip_sans() -> None
```

##### `reset_min_seconds_remaining` <a name="reset_min_seconds_remaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetMinSecondsRemaining"></a>

```python
def reset_min_seconds_remaining() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_other_sans` <a name="reset_other_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOtherSans"></a>

```python
def reset_other_sans() -> None
```

##### `reset_private_key_format` <a name="reset_private_key_format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetPrivateKeyFormat"></a>

```python
def reset_private_key_format() -> None
```

##### `reset_revoke` <a name="reset_revoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevoke"></a>

```python
def reset_revoke() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_uri_sans` <a name="reset_uri_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUriSans"></a>

```python
def reset_uri_sans() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_cert

pkiSecretBackendCert.PkiSecretBackendCert.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_cert

pkiSecretBackendCert.PkiSecretBackendCert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_cert

pkiSecretBackendCert.PkiSecretBackendCert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.caChain">ca_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.expiration">expiration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuingCa">issuing_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyType">private_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.renewPending">renew_pending</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNamesInput">alt_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenewInput">auto_renew_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSansInput">exclude_cn_from_sans_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSansInput">ip_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemainingInput">min_seconds_remaining_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSansInput">other_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormatInput">private_key_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeInput">revoke_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSansInput">uri_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNames">alt_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenew">auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSans">exclude_cn_from_sans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSans">ip_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemaining">min_seconds_remaining</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSans">other_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormat">private_key_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revoke">revoke</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSans">uri_sans</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ca_chain`<sup>Required</sup> <a name="ca_chain" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.caChain"></a>

```python
ca_chain: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.expiration"></a>

```python
expiration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuing_ca`<sup>Required</sup> <a name="issuing_ca" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuingCa"></a>

```python
issuing_ca: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `private_key_type`<sup>Required</sup> <a name="private_key_type" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyType"></a>

```python
private_key_type: str
```

- *Type:* str

---

##### `renew_pending`<sup>Required</sup> <a name="renew_pending" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.renewPending"></a>

```python
renew_pending: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `alt_names_input`<sup>Optional</sup> <a name="alt_names_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNamesInput"></a>

```python
alt_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_renew_input`<sup>Optional</sup> <a name="auto_renew_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenewInput"></a>

```python
auto_renew_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `exclude_cn_from_sans_input`<sup>Optional</sup> <a name="exclude_cn_from_sans_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSansInput"></a>

```python
exclude_cn_from_sans_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_sans_input`<sup>Optional</sup> <a name="ip_sans_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSansInput"></a>

```python
ip_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `min_seconds_remaining_input`<sup>Optional</sup> <a name="min_seconds_remaining_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemainingInput"></a>

```python
min_seconds_remaining_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `other_sans_input`<sup>Optional</sup> <a name="other_sans_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSansInput"></a>

```python
other_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_key_format_input`<sup>Optional</sup> <a name="private_key_format_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormatInput"></a>

```python
private_key_format_input: str
```

- *Type:* str

---

##### `revoke_input`<sup>Optional</sup> <a name="revoke_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeInput"></a>

```python
revoke_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `uri_sans_input`<sup>Optional</sup> <a name="uri_sans_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSansInput"></a>

```python
uri_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alt_names`<sup>Required</sup> <a name="alt_names" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNames"></a>

```python
alt_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_renew`<sup>Required</sup> <a name="auto_renew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenew"></a>

```python
auto_renew: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `exclude_cn_from_sans`<sup>Required</sup> <a name="exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSans"></a>

```python
exclude_cn_from_sans: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_sans`<sup>Required</sup> <a name="ip_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSans"></a>

```python
ip_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `min_seconds_remaining`<sup>Required</sup> <a name="min_seconds_remaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemaining"></a>

```python
min_seconds_remaining: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `other_sans`<sup>Required</sup> <a name="other_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSans"></a>

```python
other_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_key_format`<sup>Required</sup> <a name="private_key_format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormat"></a>

```python
private_key_format: str
```

- *Type:* str

---

##### `revoke`<sup>Required</sup> <a name="revoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revoke"></a>

```python
revoke: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `uri_sans`<sup>Required</sup> <a name="uri_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSans"></a>

```python
uri_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendCertConfig <a name="PkiSecretBackendCertConfig" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_cert

pkiSecretBackendCert.PkiSecretBackendCertConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  common_name: str,
  name: str,
  alt_names: typing.List[str] = None,
  auto_renew: typing.Union[bool, IResolvable] = None,
  exclude_cn_from_sans: typing.Union[bool, IResolvable] = None,
  format: str = None,
  id: str = None,
  ip_sans: typing.List[str] = None,
  min_seconds_remaining: typing.Union[int, float] = None,
  namespace: str = None,
  other_sans: typing.List[str] = None,
  private_key_format: str = None,
  revoke: typing.Union[bool, IResolvable] = None,
  ttl: str = None,
  uri_sans: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.backend">backend</a></code> | <code>str</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.commonName">common_name</a></code> | <code>str</code> | CN of the certificate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.name">name</a></code> | <code>str</code> | Name of the role to create the certificate against. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.altNames">alt_names</a></code> | <code>typing.List[str]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.autoRenew">auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.excludeCnFromSans">exclude_cn_from_sans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.format">format</a></code> | <code>str</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ipSans">ip_sans</a></code> | <code>typing.List[str]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.minSecondsRemaining">min_seconds_remaining</a></code> | <code>typing.Union[int, float]</code> | Generate a new certificate when the expiration is within this number of seconds. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.otherSans">other_sans</a></code> | <code>typing.List[str]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.privateKeyFormat">private_key_format</a></code> | <code>str</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revoke">revoke</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Revoke the certificate upon resource destruction. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ttl">ttl</a></code> | <code>str</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.uriSans">uri_sans</a></code> | <code>typing.List[str]</code> | List of alternative URIs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#backend PkiSecretBackendCert#backend}

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

CN of the certificate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#common_name PkiSecretBackendCert#common_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the role to create the certificate against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#name PkiSecretBackendCert#name}

---

##### `alt_names`<sup>Optional</sup> <a name="alt_names" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.altNames"></a>

```python
alt_names: typing.List[str]
```

- *Type:* typing.List[str]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#alt_names PkiSecretBackendCert#alt_names}

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.autoRenew"></a>

```python
auto_renew: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#auto_renew PkiSecretBackendCert#auto_renew}

---

##### `exclude_cn_from_sans`<sup>Optional</sup> <a name="exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.excludeCnFromSans"></a>

```python
exclude_cn_from_sans: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#exclude_cn_from_sans PkiSecretBackendCert#exclude_cn_from_sans}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.format"></a>

```python
format: str
```

- *Type:* str

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#format PkiSecretBackendCert#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_sans`<sup>Optional</sup> <a name="ip_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ipSans"></a>

```python
ip_sans: typing.List[str]
```

- *Type:* typing.List[str]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#ip_sans PkiSecretBackendCert#ip_sans}

---

##### `min_seconds_remaining`<sup>Optional</sup> <a name="min_seconds_remaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.minSecondsRemaining"></a>

```python
min_seconds_remaining: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generate a new certificate when the expiration is within this number of seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#min_seconds_remaining PkiSecretBackendCert#min_seconds_remaining}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#namespace PkiSecretBackendCert#namespace}

---

##### `other_sans`<sup>Optional</sup> <a name="other_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.otherSans"></a>

```python
other_sans: typing.List[str]
```

- *Type:* typing.List[str]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#other_sans PkiSecretBackendCert#other_sans}

---

##### `private_key_format`<sup>Optional</sup> <a name="private_key_format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.privateKeyFormat"></a>

```python
private_key_format: str
```

- *Type:* str

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#private_key_format PkiSecretBackendCert#private_key_format}

---

##### `revoke`<sup>Optional</sup> <a name="revoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revoke"></a>

```python
revoke: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Revoke the certificate upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#revoke PkiSecretBackendCert#revoke}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#ttl PkiSecretBackendCert#ttl}

---

##### `uri_sans`<sup>Optional</sup> <a name="uri_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.uriSans"></a>

```python
uri_sans: typing.List[str]
```

- *Type:* typing.List[str]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/pki_secret_backend_cert#uri_sans PkiSecretBackendCert#uri_sans}

---



