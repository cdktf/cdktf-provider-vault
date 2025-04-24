# `kmipSecretBackend` Submodule <a name="`kmipSecretBackend` Submodule" id="@cdktf/provider-vault.kmipSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretBackend <a name="KmipSecretBackend" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend vault_kmip_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import kmip_secret_backend

kmipSecretBackend.KmipSecretBackend(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path: str,
  default_tls_client_key_bits: typing.Union[int, float] = None,
  default_tls_client_key_type: str = None,
  default_tls_client_ttl: typing.Union[int, float] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  id: str = None,
  listen_addrs: typing.List[str] = None,
  namespace: str = None,
  server_hostnames: typing.List[str] = None,
  server_ips: typing.List[str] = None,
  tls_ca_key_bits: typing.Union[int, float] = None,
  tls_ca_key_type: str = None,
  tls_min_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.path">path</a></code> | <code>str</code> | Path where KMIP secret backend will be mounted. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.defaultTlsClientKeyBits">default_tls_client_key_bits</a></code> | <code>typing.Union[int, float]</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.defaultTlsClientKeyType">default_tls_client_key_type</a></code> | <code>str</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.defaultTlsClientTtl">default_tls_client_ttl</a></code> | <code>typing.Union[int, float]</code> | Client certificate TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#id KmipSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.listenAddrs">listen_addrs</a></code> | <code>typing.List[str]</code> | Addresses the KMIP server should listen on (host:port). |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.serverHostnames">server_hostnames</a></code> | <code>typing.List[str]</code> | Hostnames to include in the server's TLS certificate as SAN DNS names. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.serverIps">server_ips</a></code> | <code>typing.List[str]</code> | IPs to include in the server's TLS certificate as SAN IP addresses. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.tlsCaKeyBits">tls_ca_key_bits</a></code> | <code>typing.Union[int, float]</code> | CA key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.tlsCaKeyType">tls_ca_key_type</a></code> | <code>str</code> | CA key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Minimum TLS version to accept. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.path"></a>

- *Type:* str

Path where KMIP secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#path KmipSecretBackend#path}

---

##### `default_tls_client_key_bits`<sup>Optional</sup> <a name="default_tls_client_key_bits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.defaultTlsClientKeyBits"></a>

- *Type:* typing.Union[int, float]

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#default_tls_client_key_bits KmipSecretBackend#default_tls_client_key_bits}

---

##### `default_tls_client_key_type`<sup>Optional</sup> <a name="default_tls_client_key_type" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.defaultTlsClientKeyType"></a>

- *Type:* str

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#default_tls_client_key_type KmipSecretBackend#default_tls_client_key_type}

---

##### `default_tls_client_ttl`<sup>Optional</sup> <a name="default_tls_client_ttl" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.defaultTlsClientTtl"></a>

- *Type:* typing.Union[int, float]

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#default_tls_client_ttl KmipSecretBackend#default_tls_client_ttl}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.description"></a>

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#description KmipSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#disable_remount KmipSecretBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#id KmipSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen_addrs`<sup>Optional</sup> <a name="listen_addrs" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.listenAddrs"></a>

- *Type:* typing.List[str]

Addresses the KMIP server should listen on (host:port).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#listen_addrs KmipSecretBackend#listen_addrs}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#namespace KmipSecretBackend#namespace}

---

##### `server_hostnames`<sup>Optional</sup> <a name="server_hostnames" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.serverHostnames"></a>

- *Type:* typing.List[str]

Hostnames to include in the server's TLS certificate as SAN DNS names.

The first will be used as the common name (CN)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#server_hostnames KmipSecretBackend#server_hostnames}

---

##### `server_ips`<sup>Optional</sup> <a name="server_ips" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.serverIps"></a>

- *Type:* typing.List[str]

IPs to include in the server's TLS certificate as SAN IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#server_ips KmipSecretBackend#server_ips}

---

##### `tls_ca_key_bits`<sup>Optional</sup> <a name="tls_ca_key_bits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.tlsCaKeyBits"></a>

- *Type:* typing.Union[int, float]

CA key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#tls_ca_key_bits KmipSecretBackend#tls_ca_key_bits}

---

##### `tls_ca_key_type`<sup>Optional</sup> <a name="tls_ca_key_type" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.tlsCaKeyType"></a>

- *Type:* str

CA key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#tls_ca_key_type KmipSecretBackend#tls_ca_key_type}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.tlsMinVersion"></a>

- *Type:* str

Minimum TLS version to accept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#tls_min_version KmipSecretBackend#tls_min_version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyBits">reset_default_tls_client_key_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyType">reset_default_tls_client_key_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientTtl">reset_default_tls_client_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDisableRemount">reset_disable_remount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListenAddrs">reset_listen_addrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerHostnames">reset_server_hostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerIps">reset_server_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyBits">reset_tls_ca_key_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyType">reset_tls_ca_key_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsMinVersion">reset_tls_min_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_default_tls_client_key_bits` <a name="reset_default_tls_client_key_bits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyBits"></a>

```python
def reset_default_tls_client_key_bits() -> None
```

##### `reset_default_tls_client_key_type` <a name="reset_default_tls_client_key_type" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyType"></a>

```python
def reset_default_tls_client_key_type() -> None
```

##### `reset_default_tls_client_ttl` <a name="reset_default_tls_client_ttl" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientTtl"></a>

```python
def reset_default_tls_client_ttl() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_remount` <a name="reset_disable_remount" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDisableRemount"></a>

```python
def reset_disable_remount() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_listen_addrs` <a name="reset_listen_addrs" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListenAddrs"></a>

```python
def reset_listen_addrs() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_server_hostnames` <a name="reset_server_hostnames" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerHostnames"></a>

```python
def reset_server_hostnames() -> None
```

##### `reset_server_ips` <a name="reset_server_ips" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerIps"></a>

```python
def reset_server_ips() -> None
```

##### `reset_tls_ca_key_bits` <a name="reset_tls_ca_key_bits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyBits"></a>

```python
def reset_tls_ca_key_bits() -> None
```

##### `reset_tls_ca_key_type` <a name="reset_tls_ca_key_type" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyType"></a>

```python
def reset_tls_ca_key_type() -> None
```

##### `reset_tls_min_version` <a name="reset_tls_min_version" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsMinVersion"></a>

```python
def reset_tls_min_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KmipSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import kmip_secret_backend

kmipSecretBackend.KmipSecretBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import kmip_secret_backend

kmipSecretBackend.KmipSecretBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import kmip_secret_backend

kmipSecretBackend.KmipSecretBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import kmip_secret_backend

kmipSecretBackend.KmipSecretBackend.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KmipSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KmipSecretBackend to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KmipSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmipSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBitsInput">default_tls_client_key_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyTypeInput">default_tls_client_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtlInput">default_tls_client_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemountInput">disable_remount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrsInput">listen_addrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnamesInput">server_hostnames_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIpsInput">server_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBitsInput">tls_ca_key_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyTypeInput">tls_ca_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersionInput">tls_min_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBits">default_tls_client_key_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyType">default_tls_client_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtl">default_tls_client_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrs">listen_addrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnames">server_hostnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIps">server_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBits">tls_ca_key_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyType">tls_ca_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_tls_client_key_bits_input`<sup>Optional</sup> <a name="default_tls_client_key_bits_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBitsInput"></a>

```python
default_tls_client_key_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_tls_client_key_type_input`<sup>Optional</sup> <a name="default_tls_client_key_type_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyTypeInput"></a>

```python
default_tls_client_key_type_input: str
```

- *Type:* str

---

##### `default_tls_client_ttl_input`<sup>Optional</sup> <a name="default_tls_client_ttl_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtlInput"></a>

```python
default_tls_client_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_remount_input`<sup>Optional</sup> <a name="disable_remount_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemountInput"></a>

```python
disable_remount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listen_addrs_input`<sup>Optional</sup> <a name="listen_addrs_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrsInput"></a>

```python
listen_addrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `server_hostnames_input`<sup>Optional</sup> <a name="server_hostnames_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnamesInput"></a>

```python
server_hostnames_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_ips_input`<sup>Optional</sup> <a name="server_ips_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIpsInput"></a>

```python
server_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_ca_key_bits_input`<sup>Optional</sup> <a name="tls_ca_key_bits_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBitsInput"></a>

```python
tls_ca_key_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls_ca_key_type_input`<sup>Optional</sup> <a name="tls_ca_key_type_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyTypeInput"></a>

```python
tls_ca_key_type_input: str
```

- *Type:* str

---

##### `tls_min_version_input`<sup>Optional</sup> <a name="tls_min_version_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersionInput"></a>

```python
tls_min_version_input: str
```

- *Type:* str

---

##### `default_tls_client_key_bits`<sup>Required</sup> <a name="default_tls_client_key_bits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBits"></a>

```python
default_tls_client_key_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_tls_client_key_type`<sup>Required</sup> <a name="default_tls_client_key_type" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyType"></a>

```python
default_tls_client_key_type: str
```

- *Type:* str

---

##### `default_tls_client_ttl`<sup>Required</sup> <a name="default_tls_client_ttl" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtl"></a>

```python
default_tls_client_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_remount`<sup>Required</sup> <a name="disable_remount" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listen_addrs`<sup>Required</sup> <a name="listen_addrs" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrs"></a>

```python
listen_addrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `server_hostnames`<sup>Required</sup> <a name="server_hostnames" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnames"></a>

```python
server_hostnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_ips`<sup>Required</sup> <a name="server_ips" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIps"></a>

```python
server_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_ca_key_bits`<sup>Required</sup> <a name="tls_ca_key_bits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBits"></a>

```python
tls_ca_key_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls_ca_key_type`<sup>Required</sup> <a name="tls_ca_key_type" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyType"></a>

```python
tls_ca_key_type: str
```

- *Type:* str

---

##### `tls_min_version`<sup>Required</sup> <a name="tls_min_version" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretBackendConfig <a name="KmipSecretBackendConfig" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import kmip_secret_backend

kmipSecretBackend.KmipSecretBackendConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path: str,
  default_tls_client_key_bits: typing.Union[int, float] = None,
  default_tls_client_key_type: str = None,
  default_tls_client_ttl: typing.Union[int, float] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  id: str = None,
  listen_addrs: typing.List[str] = None,
  namespace: str = None,
  server_hostnames: typing.List[str] = None,
  server_ips: typing.List[str] = None,
  tls_ca_key_bits: typing.Union[int, float] = None,
  tls_ca_key_type: str = None,
  tls_min_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.path">path</a></code> | <code>str</code> | Path where KMIP secret backend will be mounted. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyBits">default_tls_client_key_bits</a></code> | <code>typing.Union[int, float]</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyType">default_tls_client_key_type</a></code> | <code>str</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientTtl">default_tls_client_ttl</a></code> | <code>typing.Union[int, float]</code> | Client certificate TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#id KmipSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listenAddrs">listen_addrs</a></code> | <code>typing.List[str]</code> | Addresses the KMIP server should listen on (host:port). |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverHostnames">server_hostnames</a></code> | <code>typing.List[str]</code> | Hostnames to include in the server's TLS certificate as SAN DNS names. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverIps">server_ips</a></code> | <code>typing.List[str]</code> | IPs to include in the server's TLS certificate as SAN IP addresses. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyBits">tls_ca_key_bits</a></code> | <code>typing.Union[int, float]</code> | CA key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyType">tls_ca_key_type</a></code> | <code>str</code> | CA key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Minimum TLS version to accept. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Path where KMIP secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#path KmipSecretBackend#path}

---

##### `default_tls_client_key_bits`<sup>Optional</sup> <a name="default_tls_client_key_bits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyBits"></a>

```python
default_tls_client_key_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#default_tls_client_key_bits KmipSecretBackend#default_tls_client_key_bits}

---

##### `default_tls_client_key_type`<sup>Optional</sup> <a name="default_tls_client_key_type" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyType"></a>

```python
default_tls_client_key_type: str
```

- *Type:* str

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#default_tls_client_key_type KmipSecretBackend#default_tls_client_key_type}

---

##### `default_tls_client_ttl`<sup>Optional</sup> <a name="default_tls_client_ttl" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientTtl"></a>

```python
default_tls_client_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#default_tls_client_ttl KmipSecretBackend#default_tls_client_ttl}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#description KmipSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#disable_remount KmipSecretBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#id KmipSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen_addrs`<sup>Optional</sup> <a name="listen_addrs" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listenAddrs"></a>

```python
listen_addrs: typing.List[str]
```

- *Type:* typing.List[str]

Addresses the KMIP server should listen on (host:port).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#listen_addrs KmipSecretBackend#listen_addrs}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#namespace KmipSecretBackend#namespace}

---

##### `server_hostnames`<sup>Optional</sup> <a name="server_hostnames" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverHostnames"></a>

```python
server_hostnames: typing.List[str]
```

- *Type:* typing.List[str]

Hostnames to include in the server's TLS certificate as SAN DNS names.

The first will be used as the common name (CN)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#server_hostnames KmipSecretBackend#server_hostnames}

---

##### `server_ips`<sup>Optional</sup> <a name="server_ips" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverIps"></a>

```python
server_ips: typing.List[str]
```

- *Type:* typing.List[str]

IPs to include in the server's TLS certificate as SAN IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#server_ips KmipSecretBackend#server_ips}

---

##### `tls_ca_key_bits`<sup>Optional</sup> <a name="tls_ca_key_bits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyBits"></a>

```python
tls_ca_key_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

CA key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#tls_ca_key_bits KmipSecretBackend#tls_ca_key_bits}

---

##### `tls_ca_key_type`<sup>Optional</sup> <a name="tls_ca_key_type" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyType"></a>

```python
tls_ca_key_type: str
```

- *Type:* str

CA key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#tls_ca_key_type KmipSecretBackend#tls_ca_key_type}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

Minimum TLS version to accept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/kmip_secret_backend#tls_min_version KmipSecretBackend#tls_min_version}

---



