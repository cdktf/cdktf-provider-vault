# `kmipSecretBackend` Submodule <a name="`kmipSecretBackend` Submodule" id="@cdktf/provider-vault.kmipSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretBackend <a name="KmipSecretBackend" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend vault_kmip_secret_backend}.

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
  allowed_managed_keys: typing.List[str] = None,
  allowed_response_headers: typing.List[str] = None,
  audit_non_hmac_request_keys: typing.List[str] = None,
  audit_non_hmac_response_keys: typing.List[str] = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  default_tls_client_key_bits: typing.Union[int, float] = None,
  default_tls_client_key_type: str = None,
  default_tls_client_ttl: typing.Union[int, float] = None,
  delegated_auth_accessors: typing.List[str] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  external_entropy_access: typing.Union[bool, IResolvable] = None,
  force_no_cache: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity_token_key: str = None,
  listen_addrs: typing.List[str] = None,
  listing_visibility: str = None,
  local: typing.Union[bool, IResolvable] = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  options: typing.Mapping[str] = None,
  passthrough_request_headers: typing.List[str] = None,
  plugin_version: str = None,
  seal_wrap: typing.Union[bool, IResolvable] = None,
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
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.defaultTlsClientKeyBits">default_tls_client_key_bits</a></code> | <code>typing.Union[int, float]</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.defaultTlsClientKeyType">default_tls_client_key_type</a></code> | <code>str</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.defaultTlsClientTtl">default_tls_client_ttl</a></code> | <code>typing.Union[int, float]</code> | Client certificate TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.delegatedAuthAccessors">delegated_auth_accessors</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.externalEntropyAccess">external_entropy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.forceNoCache">force_no_cache</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#id KmipSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.identityTokenKey">identity_token_key</a></code> | <code>str</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.listenAddrs">listen_addrs</a></code> | <code>typing.List[str]</code> | Addresses the KMIP server should listen on (host:port). |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.listingVisibility">listing_visibility</a></code> | <code>str</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.options">options</a></code> | <code>typing.Mapping[str]</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.pluginVersion">plugin_version</a></code> | <code>str</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.sealWrap">seal_wrap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#path KmipSecretBackend#path}

---

##### `allowed_managed_keys`<sup>Optional</sup> <a name="allowed_managed_keys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.allowedManagedKeys"></a>

- *Type:* typing.List[str]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#allowed_managed_keys KmipSecretBackend#allowed_managed_keys}

---

##### `allowed_response_headers`<sup>Optional</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.allowedResponseHeaders"></a>

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#allowed_response_headers KmipSecretBackend#allowed_response_headers}

---

##### `audit_non_hmac_request_keys`<sup>Optional</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.auditNonHmacRequestKeys"></a>

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#audit_non_hmac_request_keys KmipSecretBackend#audit_non_hmac_request_keys}

---

##### `audit_non_hmac_response_keys`<sup>Optional</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.auditNonHmacResponseKeys"></a>

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#audit_non_hmac_response_keys KmipSecretBackend#audit_non_hmac_response_keys}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#default_lease_ttl_seconds KmipSecretBackend#default_lease_ttl_seconds}

---

##### `default_tls_client_key_bits`<sup>Optional</sup> <a name="default_tls_client_key_bits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.defaultTlsClientKeyBits"></a>

- *Type:* typing.Union[int, float]

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#default_tls_client_key_bits KmipSecretBackend#default_tls_client_key_bits}

---

##### `default_tls_client_key_type`<sup>Optional</sup> <a name="default_tls_client_key_type" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.defaultTlsClientKeyType"></a>

- *Type:* str

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#default_tls_client_key_type KmipSecretBackend#default_tls_client_key_type}

---

##### `default_tls_client_ttl`<sup>Optional</sup> <a name="default_tls_client_ttl" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.defaultTlsClientTtl"></a>

- *Type:* typing.Union[int, float]

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#default_tls_client_ttl KmipSecretBackend#default_tls_client_ttl}

---

##### `delegated_auth_accessors`<sup>Optional</sup> <a name="delegated_auth_accessors" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.delegatedAuthAccessors"></a>

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#delegated_auth_accessors KmipSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.description"></a>

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#description KmipSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#disable_remount KmipSecretBackend#disable_remount}

---

##### `external_entropy_access`<sup>Optional</sup> <a name="external_entropy_access" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.externalEntropyAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#external_entropy_access KmipSecretBackend#external_entropy_access}

---

##### `force_no_cache`<sup>Optional</sup> <a name="force_no_cache" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.forceNoCache"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#force_no_cache KmipSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#id KmipSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_token_key`<sup>Optional</sup> <a name="identity_token_key" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.identityTokenKey"></a>

- *Type:* str

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#identity_token_key KmipSecretBackend#identity_token_key}

---

##### `listen_addrs`<sup>Optional</sup> <a name="listen_addrs" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.listenAddrs"></a>

- *Type:* typing.List[str]

Addresses the KMIP server should listen on (host:port).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#listen_addrs KmipSecretBackend#listen_addrs}

---

##### `listing_visibility`<sup>Optional</sup> <a name="listing_visibility" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.listingVisibility"></a>

- *Type:* str

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#listing_visibility KmipSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.local"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#local KmipSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#max_lease_ttl_seconds KmipSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#namespace KmipSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.options"></a>

- *Type:* typing.Mapping[str]

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#options KmipSecretBackend#options}

---

##### `passthrough_request_headers`<sup>Optional</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.passthroughRequestHeaders"></a>

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#passthrough_request_headers KmipSecretBackend#passthrough_request_headers}

---

##### `plugin_version`<sup>Optional</sup> <a name="plugin_version" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.pluginVersion"></a>

- *Type:* str

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#plugin_version KmipSecretBackend#plugin_version}

---

##### `seal_wrap`<sup>Optional</sup> <a name="seal_wrap" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.sealWrap"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#seal_wrap KmipSecretBackend#seal_wrap}

---

##### `server_hostnames`<sup>Optional</sup> <a name="server_hostnames" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.serverHostnames"></a>

- *Type:* typing.List[str]

Hostnames to include in the server's TLS certificate as SAN DNS names.

The first will be used as the common name (CN)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#server_hostnames KmipSecretBackend#server_hostnames}

---

##### `server_ips`<sup>Optional</sup> <a name="server_ips" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.serverIps"></a>

- *Type:* typing.List[str]

IPs to include in the server's TLS certificate as SAN IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#server_ips KmipSecretBackend#server_ips}

---

##### `tls_ca_key_bits`<sup>Optional</sup> <a name="tls_ca_key_bits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.tlsCaKeyBits"></a>

- *Type:* typing.Union[int, float]

CA key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#tls_ca_key_bits KmipSecretBackend#tls_ca_key_bits}

---

##### `tls_ca_key_type`<sup>Optional</sup> <a name="tls_ca_key_type" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.tlsCaKeyType"></a>

- *Type:* str

CA key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#tls_ca_key_type KmipSecretBackend#tls_ca_key_type}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.tlsMinVersion"></a>

- *Type:* str

Minimum TLS version to accept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#tls_min_version KmipSecretBackend#tls_min_version}

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
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAllowedManagedKeys">reset_allowed_managed_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAllowedResponseHeaders">reset_allowed_response_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAuditNonHmacRequestKeys">reset_audit_non_hmac_request_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAuditNonHmacResponseKeys">reset_audit_non_hmac_response_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultLeaseTtlSeconds">reset_default_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyBits">reset_default_tls_client_key_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyType">reset_default_tls_client_key_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientTtl">reset_default_tls_client_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDelegatedAuthAccessors">reset_delegated_auth_accessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDisableRemount">reset_disable_remount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetExternalEntropyAccess">reset_external_entropy_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetForceNoCache">reset_force_no_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetIdentityTokenKey">reset_identity_token_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListenAddrs">reset_listen_addrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListingVisibility">reset_listing_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetLocal">reset_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetMaxLeaseTtlSeconds">reset_max_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetPassthroughRequestHeaders">reset_passthrough_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetPluginVersion">reset_plugin_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetSealWrap">reset_seal_wrap</a></code> | *No description.* |
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

##### `reset_allowed_managed_keys` <a name="reset_allowed_managed_keys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAllowedManagedKeys"></a>

```python
def reset_allowed_managed_keys() -> None
```

##### `reset_allowed_response_headers` <a name="reset_allowed_response_headers" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAllowedResponseHeaders"></a>

```python
def reset_allowed_response_headers() -> None
```

##### `reset_audit_non_hmac_request_keys` <a name="reset_audit_non_hmac_request_keys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAuditNonHmacRequestKeys"></a>

```python
def reset_audit_non_hmac_request_keys() -> None
```

##### `reset_audit_non_hmac_response_keys` <a name="reset_audit_non_hmac_response_keys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAuditNonHmacResponseKeys"></a>

```python
def reset_audit_non_hmac_response_keys() -> None
```

##### `reset_default_lease_ttl_seconds` <a name="reset_default_lease_ttl_seconds" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```python
def reset_default_lease_ttl_seconds() -> None
```

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

##### `reset_delegated_auth_accessors` <a name="reset_delegated_auth_accessors" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDelegatedAuthAccessors"></a>

```python
def reset_delegated_auth_accessors() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_remount` <a name="reset_disable_remount" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDisableRemount"></a>

```python
def reset_disable_remount() -> None
```

##### `reset_external_entropy_access` <a name="reset_external_entropy_access" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetExternalEntropyAccess"></a>

```python
def reset_external_entropy_access() -> None
```

##### `reset_force_no_cache` <a name="reset_force_no_cache" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetForceNoCache"></a>

```python
def reset_force_no_cache() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_token_key` <a name="reset_identity_token_key" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetIdentityTokenKey"></a>

```python
def reset_identity_token_key() -> None
```

##### `reset_listen_addrs` <a name="reset_listen_addrs" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListenAddrs"></a>

```python
def reset_listen_addrs() -> None
```

##### `reset_listing_visibility` <a name="reset_listing_visibility" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListingVisibility"></a>

```python
def reset_listing_visibility() -> None
```

##### `reset_local` <a name="reset_local" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetLocal"></a>

```python
def reset_local() -> None
```

##### `reset_max_lease_ttl_seconds` <a name="reset_max_lease_ttl_seconds" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetMaxLeaseTtlSeconds"></a>

```python
def reset_max_lease_ttl_seconds() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_passthrough_request_headers` <a name="reset_passthrough_request_headers" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetPassthroughRequestHeaders"></a>

```python
def reset_passthrough_request_headers() -> None
```

##### `reset_plugin_version` <a name="reset_plugin_version" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetPluginVersion"></a>

```python
def reset_plugin_version() -> None
```

##### `reset_seal_wrap` <a name="reset_seal_wrap" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetSealWrap"></a>

```python
def reset_seal_wrap() -> None
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

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedManagedKeysInput">allowed_managed_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedResponseHeadersInput">allowed_response_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacRequestKeysInput">audit_non_hmac_request_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacResponseKeysInput">audit_non_hmac_response_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultLeaseTtlSecondsInput">default_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBitsInput">default_tls_client_key_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyTypeInput">default_tls_client_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtlInput">default_tls_client_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.delegatedAuthAccessorsInput">delegated_auth_accessors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemountInput">disable_remount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.externalEntropyAccessInput">external_entropy_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forceNoCacheInput">force_no_cache_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.identityTokenKeyInput">identity_token_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrsInput">listen_addrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listingVisibilityInput">listing_visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.localInput">local_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.maxLeaseTtlSecondsInput">max_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.passthroughRequestHeadersInput">passthrough_request_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pluginVersionInput">plugin_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.sealWrapInput">seal_wrap_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnamesInput">server_hostnames_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIpsInput">server_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBitsInput">tls_ca_key_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyTypeInput">tls_ca_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersionInput">tls_min_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBits">default_tls_client_key_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyType">default_tls_client_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtl">default_tls_client_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.delegatedAuthAccessors">delegated_auth_accessors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.externalEntropyAccess">external_entropy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forceNoCache">force_no_cache</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.identityTokenKey">identity_token_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrs">listen_addrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listingVisibility">listing_visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pluginVersion">plugin_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.sealWrap">seal_wrap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
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

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `allowed_managed_keys_input`<sup>Optional</sup> <a name="allowed_managed_keys_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedManagedKeysInput"></a>

```python
allowed_managed_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_response_headers_input`<sup>Optional</sup> <a name="allowed_response_headers_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedResponseHeadersInput"></a>

```python
allowed_response_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_request_keys_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```python
audit_non_hmac_request_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_response_keys_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```python
audit_non_hmac_response_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_lease_ttl_seconds_input`<sup>Optional</sup> <a name="default_lease_ttl_seconds_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```python
default_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

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

##### `delegated_auth_accessors_input`<sup>Optional</sup> <a name="delegated_auth_accessors_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.delegatedAuthAccessorsInput"></a>

```python
delegated_auth_accessors_input: typing.List[str]
```

- *Type:* typing.List[str]

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

##### `external_entropy_access_input`<sup>Optional</sup> <a name="external_entropy_access_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.externalEntropyAccessInput"></a>

```python
external_entropy_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_no_cache_input`<sup>Optional</sup> <a name="force_no_cache_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forceNoCacheInput"></a>

```python
force_no_cache_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_token_key_input`<sup>Optional</sup> <a name="identity_token_key_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.identityTokenKeyInput"></a>

```python
identity_token_key_input: str
```

- *Type:* str

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

##### `listing_visibility_input`<sup>Optional</sup> <a name="listing_visibility_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listingVisibilityInput"></a>

```python
listing_visibility_input: str
```

- *Type:* str

---

##### `local_input`<sup>Optional</sup> <a name="local_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.localInput"></a>

```python
local_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_lease_ttl_seconds_input`<sup>Optional</sup> <a name="max_lease_ttl_seconds_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```python
max_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `passthrough_request_headers_input`<sup>Optional</sup> <a name="passthrough_request_headers_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.passthroughRequestHeadersInput"></a>

```python
passthrough_request_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `plugin_version_input`<sup>Optional</sup> <a name="plugin_version_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pluginVersionInput"></a>

```python
plugin_version_input: str
```

- *Type:* str

---

##### `seal_wrap_input`<sup>Optional</sup> <a name="seal_wrap_input" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.sealWrapInput"></a>

```python
seal_wrap_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

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

##### `allowed_managed_keys`<sup>Required</sup> <a name="allowed_managed_keys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedManagedKeys"></a>

```python
allowed_managed_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_response_headers`<sup>Required</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedResponseHeaders"></a>

```python
allowed_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys`<sup>Required</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys`<sup>Required</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_lease_ttl_seconds`<sup>Required</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

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

##### `delegated_auth_accessors`<sup>Required</sup> <a name="delegated_auth_accessors" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.delegatedAuthAccessors"></a>

```python
delegated_auth_accessors: typing.List[str]
```

- *Type:* typing.List[str]

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

##### `external_entropy_access`<sup>Required</sup> <a name="external_entropy_access" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.externalEntropyAccess"></a>

```python
external_entropy_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_no_cache`<sup>Required</sup> <a name="force_no_cache" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forceNoCache"></a>

```python
force_no_cache: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_token_key`<sup>Required</sup> <a name="identity_token_key" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.identityTokenKey"></a>

```python
identity_token_key: str
```

- *Type:* str

---

##### `listen_addrs`<sup>Required</sup> <a name="listen_addrs" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrs"></a>

```python
listen_addrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listing_visibility`<sup>Required</sup> <a name="listing_visibility" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listingVisibility"></a>

```python
listing_visibility: str
```

- *Type:* str

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.local"></a>

```python
local: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_lease_ttl_seconds`<sup>Required</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `passthrough_request_headers`<sup>Required</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.passthroughRequestHeaders"></a>

```python
passthrough_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `plugin_version`<sup>Required</sup> <a name="plugin_version" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pluginVersion"></a>

```python
plugin_version: str
```

- *Type:* str

---

##### `seal_wrap`<sup>Required</sup> <a name="seal_wrap" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.sealWrap"></a>

```python
seal_wrap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

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
  allowed_managed_keys: typing.List[str] = None,
  allowed_response_headers: typing.List[str] = None,
  audit_non_hmac_request_keys: typing.List[str] = None,
  audit_non_hmac_response_keys: typing.List[str] = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  default_tls_client_key_bits: typing.Union[int, float] = None,
  default_tls_client_key_type: str = None,
  default_tls_client_ttl: typing.Union[int, float] = None,
  delegated_auth_accessors: typing.List[str] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  external_entropy_access: typing.Union[bool, IResolvable] = None,
  force_no_cache: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity_token_key: str = None,
  listen_addrs: typing.List[str] = None,
  listing_visibility: str = None,
  local: typing.Union[bool, IResolvable] = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  options: typing.Mapping[str] = None,
  passthrough_request_headers: typing.List[str] = None,
  plugin_version: str = None,
  seal_wrap: typing.Union[bool, IResolvable] = None,
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
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyBits">default_tls_client_key_bits</a></code> | <code>typing.Union[int, float]</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyType">default_tls_client_key_type</a></code> | <code>str</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientTtl">default_tls_client_ttl</a></code> | <code>typing.Union[int, float]</code> | Client certificate TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.delegatedAuthAccessors">delegated_auth_accessors</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.externalEntropyAccess">external_entropy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.forceNoCache">force_no_cache</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#id KmipSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.identityTokenKey">identity_token_key</a></code> | <code>str</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listenAddrs">listen_addrs</a></code> | <code>typing.List[str]</code> | Addresses the KMIP server should listen on (host:port). |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listingVisibility">listing_visibility</a></code> | <code>str</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.pluginVersion">plugin_version</a></code> | <code>str</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.sealWrap">seal_wrap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#path KmipSecretBackend#path}

---

##### `allowed_managed_keys`<sup>Optional</sup> <a name="allowed_managed_keys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.allowedManagedKeys"></a>

```python
allowed_managed_keys: typing.List[str]
```

- *Type:* typing.List[str]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#allowed_managed_keys KmipSecretBackend#allowed_managed_keys}

---

##### `allowed_response_headers`<sup>Optional</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.allowedResponseHeaders"></a>

```python
allowed_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#allowed_response_headers KmipSecretBackend#allowed_response_headers}

---

##### `audit_non_hmac_request_keys`<sup>Optional</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#audit_non_hmac_request_keys KmipSecretBackend#audit_non_hmac_request_keys}

---

##### `audit_non_hmac_response_keys`<sup>Optional</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#audit_non_hmac_response_keys KmipSecretBackend#audit_non_hmac_response_keys}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#default_lease_ttl_seconds KmipSecretBackend#default_lease_ttl_seconds}

---

##### `default_tls_client_key_bits`<sup>Optional</sup> <a name="default_tls_client_key_bits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyBits"></a>

```python
default_tls_client_key_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#default_tls_client_key_bits KmipSecretBackend#default_tls_client_key_bits}

---

##### `default_tls_client_key_type`<sup>Optional</sup> <a name="default_tls_client_key_type" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyType"></a>

```python
default_tls_client_key_type: str
```

- *Type:* str

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#default_tls_client_key_type KmipSecretBackend#default_tls_client_key_type}

---

##### `default_tls_client_ttl`<sup>Optional</sup> <a name="default_tls_client_ttl" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientTtl"></a>

```python
default_tls_client_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#default_tls_client_ttl KmipSecretBackend#default_tls_client_ttl}

---

##### `delegated_auth_accessors`<sup>Optional</sup> <a name="delegated_auth_accessors" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.delegatedAuthAccessors"></a>

```python
delegated_auth_accessors: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#delegated_auth_accessors KmipSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#description KmipSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#disable_remount KmipSecretBackend#disable_remount}

---

##### `external_entropy_access`<sup>Optional</sup> <a name="external_entropy_access" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.externalEntropyAccess"></a>

```python
external_entropy_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#external_entropy_access KmipSecretBackend#external_entropy_access}

---

##### `force_no_cache`<sup>Optional</sup> <a name="force_no_cache" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.forceNoCache"></a>

```python
force_no_cache: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#force_no_cache KmipSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#id KmipSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_token_key`<sup>Optional</sup> <a name="identity_token_key" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.identityTokenKey"></a>

```python
identity_token_key: str
```

- *Type:* str

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#identity_token_key KmipSecretBackend#identity_token_key}

---

##### `listen_addrs`<sup>Optional</sup> <a name="listen_addrs" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listenAddrs"></a>

```python
listen_addrs: typing.List[str]
```

- *Type:* typing.List[str]

Addresses the KMIP server should listen on (host:port).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#listen_addrs KmipSecretBackend#listen_addrs}

---

##### `listing_visibility`<sup>Optional</sup> <a name="listing_visibility" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listingVisibility"></a>

```python
listing_visibility: str
```

- *Type:* str

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#listing_visibility KmipSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.local"></a>

```python
local: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#local KmipSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#max_lease_ttl_seconds KmipSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#namespace KmipSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#options KmipSecretBackend#options}

---

##### `passthrough_request_headers`<sup>Optional</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.passthroughRequestHeaders"></a>

```python
passthrough_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#passthrough_request_headers KmipSecretBackend#passthrough_request_headers}

---

##### `plugin_version`<sup>Optional</sup> <a name="plugin_version" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.pluginVersion"></a>

```python
plugin_version: str
```

- *Type:* str

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#plugin_version KmipSecretBackend#plugin_version}

---

##### `seal_wrap`<sup>Optional</sup> <a name="seal_wrap" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.sealWrap"></a>

```python
seal_wrap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#seal_wrap KmipSecretBackend#seal_wrap}

---

##### `server_hostnames`<sup>Optional</sup> <a name="server_hostnames" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverHostnames"></a>

```python
server_hostnames: typing.List[str]
```

- *Type:* typing.List[str]

Hostnames to include in the server's TLS certificate as SAN DNS names.

The first will be used as the common name (CN)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#server_hostnames KmipSecretBackend#server_hostnames}

---

##### `server_ips`<sup>Optional</sup> <a name="server_ips" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverIps"></a>

```python
server_ips: typing.List[str]
```

- *Type:* typing.List[str]

IPs to include in the server's TLS certificate as SAN IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#server_ips KmipSecretBackend#server_ips}

---

##### `tls_ca_key_bits`<sup>Optional</sup> <a name="tls_ca_key_bits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyBits"></a>

```python
tls_ca_key_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

CA key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#tls_ca_key_bits KmipSecretBackend#tls_ca_key_bits}

---

##### `tls_ca_key_type`<sup>Optional</sup> <a name="tls_ca_key_type" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyType"></a>

```python
tls_ca_key_type: str
```

- *Type:* str

CA key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#tls_ca_key_type KmipSecretBackend#tls_ca_key_type}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

Minimum TLS version to accept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#tls_min_version KmipSecretBackend#tls_min_version}

---



