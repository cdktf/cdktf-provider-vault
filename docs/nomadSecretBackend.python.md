# `nomadSecretBackend` Submodule <a name="`nomadSecretBackend` Submodule" id="@cdktf/provider-vault.nomadSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NomadSecretBackend <a name="NomadSecretBackend" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend vault_nomad_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import nomad_secret_backend

nomadSecretBackend.NomadSecretBackend(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address: str = None,
  backend: str = None,
  ca_cert: str = None,
  client_cert: str = None,
  client_key: str = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  id: str = None,
  local: typing.Union[bool, IResolvable] = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  max_token_name_length: typing.Union[int, float] = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  token: str = None,
  ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.address">address</a></code> | <code>str</code> | Specifies the address of the Nomad instance, provided as "protocol://host:port" like "http://127.0.0.1:4646". |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The mount path for the Nomad backend. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.caCert">ca_cert</a></code> | <code>str</code> | CA certificate to use when verifying Nomad server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.clientCert">client_cert</a></code> | <code>str</code> | Client certificate used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.clientKey">client_key</a></code> | <code>str</code> | Client key used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#id NomadSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Mark the secrets engine as local-only. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.maxTokenNameLength">max_token_name_length</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum length to use for the name of the Nomad token generated with Generate Credential. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.token">token</a></code> | <code>str</code> | Specifies the Nomad Management token to use. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.address"></a>

- *Type:* str

Specifies the address of the Nomad instance, provided as "protocol://host:port" like "http://127.0.0.1:4646".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#address NomadSecretBackend#address}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.backend"></a>

- *Type:* str

The mount path for the Nomad backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#backend NomadSecretBackend#backend}

---

##### `ca_cert`<sup>Optional</sup> <a name="ca_cert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.caCert"></a>

- *Type:* str

CA certificate to use when verifying Nomad server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#ca_cert NomadSecretBackend#ca_cert}

---

##### `client_cert`<sup>Optional</sup> <a name="client_cert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.clientCert"></a>

- *Type:* str

Client certificate used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#client_cert NomadSecretBackend#client_cert}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.clientKey"></a>

- *Type:* str

Client key used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#client_key NomadSecretBackend#client_key}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#default_lease_ttl_seconds NomadSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.description"></a>

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#description NomadSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#disable_remount NomadSecretBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#id NomadSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.local"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Mark the secrets engine as local-only.

Local engines are not replicated or removed by replication. Tolerance duration to use when checking the last rotation time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#local NomadSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#max_lease_ttl_seconds NomadSecretBackend#max_lease_ttl_seconds}

---

##### `max_token_name_length`<sup>Optional</sup> <a name="max_token_name_length" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.maxTokenNameLength"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum length to use for the name of the Nomad token generated with Generate Credential.

If omitted, 0 is used and ignored, defaulting to the max value allowed by the Nomad version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#max_token_name_length NomadSecretBackend#max_token_name_length}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#max_ttl NomadSecretBackend#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#namespace NomadSecretBackend#namespace}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.token"></a>

- *Type:* str

Specifies the Nomad Management token to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#token NomadSecretBackend#token}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#ttl NomadSecretBackend#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetCaCert">reset_ca_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientCert">reset_client_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientKey">reset_client_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDefaultLeaseTtlSeconds">reset_default_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDisableRemount">reset_disable_remount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetLocal">reset_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxLeaseTtlSeconds">reset_max_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxTokenNameLength">reset_max_token_name_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_address` <a name="reset_address" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_ca_cert` <a name="reset_ca_cert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetCaCert"></a>

```python
def reset_ca_cert() -> None
```

##### `reset_client_cert` <a name="reset_client_cert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientCert"></a>

```python
def reset_client_cert() -> None
```

##### `reset_client_key` <a name="reset_client_key" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientKey"></a>

```python
def reset_client_key() -> None
```

##### `reset_default_lease_ttl_seconds` <a name="reset_default_lease_ttl_seconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```python
def reset_default_lease_ttl_seconds() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_remount` <a name="reset_disable_remount" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDisableRemount"></a>

```python
def reset_disable_remount() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_local` <a name="reset_local" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetLocal"></a>

```python
def reset_local() -> None
```

##### `reset_max_lease_ttl_seconds` <a name="reset_max_lease_ttl_seconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxLeaseTtlSeconds"></a>

```python
def reset_max_lease_ttl_seconds() -> None
```

##### `reset_max_token_name_length` <a name="reset_max_token_name_length" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxTokenNameLength"></a>

```python
def reset_max_token_name_length() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import nomad_secret_backend

nomadSecretBackend.NomadSecretBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import nomad_secret_backend

nomadSecretBackend.NomadSecretBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import nomad_secret_backend

nomadSecretBackend.NomadSecretBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.caCertInput">ca_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientCertInput">client_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.defaultLeaseTtlSecondsInput">default_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.disableRemountInput">disable_remount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.localInput">local_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxLeaseTtlSecondsInput">max_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTokenNameLengthInput">max_token_name_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.caCert">ca_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientCert">client_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTokenNameLength">max_token_name_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `ca_cert_input`<sup>Optional</sup> <a name="ca_cert_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.caCertInput"></a>

```python
ca_cert_input: str
```

- *Type:* str

---

##### `client_cert_input`<sup>Optional</sup> <a name="client_cert_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientCertInput"></a>

```python
client_cert_input: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `default_lease_ttl_seconds_input`<sup>Optional</sup> <a name="default_lease_ttl_seconds_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```python
default_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_remount_input`<sup>Optional</sup> <a name="disable_remount_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.disableRemountInput"></a>

```python
disable_remount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_input`<sup>Optional</sup> <a name="local_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.localInput"></a>

```python
local_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_lease_ttl_seconds_input`<sup>Optional</sup> <a name="max_lease_ttl_seconds_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```python
max_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_token_name_length_input`<sup>Optional</sup> <a name="max_token_name_length_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTokenNameLengthInput"></a>

```python
max_token_name_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `ca_cert`<sup>Required</sup> <a name="ca_cert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.caCert"></a>

```python
ca_cert: str
```

- *Type:* str

---

##### `client_cert`<sup>Required</sup> <a name="client_cert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientCert"></a>

```python
client_cert: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `default_lease_ttl_seconds`<sup>Required</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_remount`<sup>Required</sup> <a name="disable_remount" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.local"></a>

```python
local: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_lease_ttl_seconds`<sup>Required</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_token_name_length`<sup>Required</sup> <a name="max_token_name_length" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTokenNameLength"></a>

```python
max_token_name_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NomadSecretBackendConfig <a name="NomadSecretBackendConfig" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import nomad_secret_backend

nomadSecretBackend.NomadSecretBackendConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address: str = None,
  backend: str = None,
  ca_cert: str = None,
  client_cert: str = None,
  client_key: str = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  id: str = None,
  local: typing.Union[bool, IResolvable] = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  max_token_name_length: typing.Union[int, float] = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  token: str = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.address">address</a></code> | <code>str</code> | Specifies the address of the Nomad instance, provided as "protocol://host:port" like "http://127.0.0.1:4646". |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.backend">backend</a></code> | <code>str</code> | The mount path for the Nomad backend. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.caCert">ca_cert</a></code> | <code>str</code> | CA certificate to use when verifying Nomad server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientCert">client_cert</a></code> | <code>str</code> | Client certificate used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientKey">client_key</a></code> | <code>str</code> | Client key used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#id NomadSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Mark the secrets engine as local-only. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxTokenNameLength">max_token_name_length</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum length to use for the name of the Nomad token generated with Generate Credential. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.token">token</a></code> | <code>str</code> | Specifies the Nomad Management token to use. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.address"></a>

```python
address: str
```

- *Type:* str

Specifies the address of the Nomad instance, provided as "protocol://host:port" like "http://127.0.0.1:4646".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#address NomadSecretBackend#address}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The mount path for the Nomad backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#backend NomadSecretBackend#backend}

---

##### `ca_cert`<sup>Optional</sup> <a name="ca_cert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.caCert"></a>

```python
ca_cert: str
```

- *Type:* str

CA certificate to use when verifying Nomad server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#ca_cert NomadSecretBackend#ca_cert}

---

##### `client_cert`<sup>Optional</sup> <a name="client_cert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientCert"></a>

```python
client_cert: str
```

- *Type:* str

Client certificate used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#client_cert NomadSecretBackend#client_cert}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

Client key used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#client_key NomadSecretBackend#client_key}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#default_lease_ttl_seconds NomadSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#description NomadSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#disable_remount NomadSecretBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#id NomadSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.local"></a>

```python
local: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Mark the secrets engine as local-only.

Local engines are not replicated or removed by replication. Tolerance duration to use when checking the last rotation time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#local NomadSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#max_lease_ttl_seconds NomadSecretBackend#max_lease_ttl_seconds}

---

##### `max_token_name_length`<sup>Optional</sup> <a name="max_token_name_length" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxTokenNameLength"></a>

```python
max_token_name_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum length to use for the name of the Nomad token generated with Generate Credential.

If omitted, 0 is used and ignored, defaulting to the max value allowed by the Nomad version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#max_token_name_length NomadSecretBackend#max_token_name_length}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#max_ttl NomadSecretBackend#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#namespace NomadSecretBackend#namespace}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Specifies the Nomad Management token to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#token NomadSecretBackend#token}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_backend#ttl NomadSecretBackend#ttl}

---


