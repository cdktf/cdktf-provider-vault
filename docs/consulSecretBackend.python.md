# `consulSecretBackend` Submodule <a name="`consulSecretBackend` Submodule" id="@cdktf/provider-vault.consulSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulSecretBackend <a name="ConsulSecretBackend" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend vault_consul_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import consul_secret_backend

consulSecretBackend.ConsulSecretBackend(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  address: str,
  allowed_managed_keys: typing.List[str] = None,
  allowed_response_headers: typing.List[str] = None,
  audit_non_hmac_request_keys: typing.List[str] = None,
  audit_non_hmac_response_keys: typing.List[str] = None,
  bootstrap: bool | IResolvable = None,
  ca_cert: str = None,
  client_cert: str = None,
  client_key: str = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  delegated_auth_accessors: typing.List[str] = None,
  description: str = None,
  disable_remount: bool | IResolvable = None,
  external_entropy_access: bool | IResolvable = None,
  force_no_cache: bool | IResolvable = None,
  id: str = None,
  identity_token_key: str = None,
  listing_visibility: str = None,
  local: bool | IResolvable = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  options: typing.Mapping[str] = None,
  passthrough_request_headers: typing.List[str] = None,
  path: str = None,
  plugin_version: str = None,
  scheme: str = None,
  seal_wrap: bool | IResolvable = None,
  token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.address">address</a></code> | <code>str</code> | Specifies the address of the Consul instance, provided as "host:port" like "127.0.0.1:8500". |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.bootstrap">bootstrap</a></code> | <code>bool \| cdktf.IResolvable</code> | Denotes a backend resource that is used to bootstrap the Consul ACL system. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.caCert">ca_cert</a></code> | <code>str</code> | CA certificate to use when verifying Consul server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.clientCert">client_cert</a></code> | <code>str</code> | Client certificate used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.clientKey">client_key</a></code> | <code>str</code> | Client key used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.delegatedAuthAccessors">delegated_auth_accessors</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.disableRemount">disable_remount</a></code> | <code>bool \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.externalEntropyAccess">external_entropy_access</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.forceNoCache">force_no_cache</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#id ConsulSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.identityTokenKey">identity_token_key</a></code> | <code>str</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.listingVisibility">listing_visibility</a></code> | <code>str</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.local">local</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies if the secret backend is local only. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.options">options</a></code> | <code>typing.Mapping[str]</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.path">path</a></code> | <code>str</code> | Unique name of the Vault Consul mount to configure. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.pluginVersion">plugin_version</a></code> | <code>str</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.scheme">scheme</a></code> | <code>str</code> | Specifies the URL scheme to use. Defaults to "http". |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.sealWrap">seal_wrap</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.token">token</a></code> | <code>str</code> | Specifies the Consul token to use when managing or issuing new tokens. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.address"></a>

- *Type:* str

Specifies the address of the Consul instance, provided as "host:port" like "127.0.0.1:8500".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#address ConsulSecretBackend#address}

---

##### `allowed_managed_keys`<sup>Optional</sup> <a name="allowed_managed_keys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.allowedManagedKeys"></a>

- *Type:* typing.List[str]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#allowed_managed_keys ConsulSecretBackend#allowed_managed_keys}

---

##### `allowed_response_headers`<sup>Optional</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.allowedResponseHeaders"></a>

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#allowed_response_headers ConsulSecretBackend#allowed_response_headers}

---

##### `audit_non_hmac_request_keys`<sup>Optional</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.auditNonHmacRequestKeys"></a>

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#audit_non_hmac_request_keys ConsulSecretBackend#audit_non_hmac_request_keys}

---

##### `audit_non_hmac_response_keys`<sup>Optional</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.auditNonHmacResponseKeys"></a>

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#audit_non_hmac_response_keys ConsulSecretBackend#audit_non_hmac_response_keys}

---

##### `bootstrap`<sup>Optional</sup> <a name="bootstrap" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.bootstrap"></a>

- *Type:* bool | cdktf.IResolvable

Denotes a backend resource that is used to bootstrap the Consul ACL system.

Only one resource may be used to bootstrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#bootstrap ConsulSecretBackend#bootstrap}

---

##### `ca_cert`<sup>Optional</sup> <a name="ca_cert" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.caCert"></a>

- *Type:* str

CA certificate to use when verifying Consul server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#ca_cert ConsulSecretBackend#ca_cert}

---

##### `client_cert`<sup>Optional</sup> <a name="client_cert" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.clientCert"></a>

- *Type:* str

Client certificate used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#client_cert ConsulSecretBackend#client_cert}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.clientKey"></a>

- *Type:* str

Client key used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#client_key ConsulSecretBackend#client_key}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#default_lease_ttl_seconds ConsulSecretBackend#default_lease_ttl_seconds}

---

##### `delegated_auth_accessors`<sup>Optional</sup> <a name="delegated_auth_accessors" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.delegatedAuthAccessors"></a>

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#delegated_auth_accessors ConsulSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.description"></a>

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#description ConsulSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* bool | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#disable_remount ConsulSecretBackend#disable_remount}

---

##### `external_entropy_access`<sup>Optional</sup> <a name="external_entropy_access" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.externalEntropyAccess"></a>

- *Type:* bool | cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#external_entropy_access ConsulSecretBackend#external_entropy_access}

---

##### `force_no_cache`<sup>Optional</sup> <a name="force_no_cache" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.forceNoCache"></a>

- *Type:* bool | cdktf.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#force_no_cache ConsulSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#id ConsulSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_token_key`<sup>Optional</sup> <a name="identity_token_key" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.identityTokenKey"></a>

- *Type:* str

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#identity_token_key ConsulSecretBackend#identity_token_key}

---

##### `listing_visibility`<sup>Optional</sup> <a name="listing_visibility" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.listingVisibility"></a>

- *Type:* str

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#listing_visibility ConsulSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.local"></a>

- *Type:* bool | cdktf.IResolvable

Specifies if the secret backend is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#local ConsulSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#max_lease_ttl_seconds ConsulSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#namespace ConsulSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.options"></a>

- *Type:* typing.Mapping[str]

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#options ConsulSecretBackend#options}

---

##### `passthrough_request_headers`<sup>Optional</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.passthroughRequestHeaders"></a>

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#passthrough_request_headers ConsulSecretBackend#passthrough_request_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.path"></a>

- *Type:* str

Unique name of the Vault Consul mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#path ConsulSecretBackend#path}

---

##### `plugin_version`<sup>Optional</sup> <a name="plugin_version" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.pluginVersion"></a>

- *Type:* str

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#plugin_version ConsulSecretBackend#plugin_version}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.scheme"></a>

- *Type:* str

Specifies the URL scheme to use. Defaults to "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#scheme ConsulSecretBackend#scheme}

---

##### `seal_wrap`<sup>Optional</sup> <a name="seal_wrap" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.sealWrap"></a>

- *Type:* bool | cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#seal_wrap ConsulSecretBackend#seal_wrap}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.token"></a>

- *Type:* str

Specifies the Consul token to use when managing or issuing new tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#token ConsulSecretBackend#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAllowedManagedKeys">reset_allowed_managed_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAllowedResponseHeaders">reset_allowed_response_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAuditNonHmacRequestKeys">reset_audit_non_hmac_request_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAuditNonHmacResponseKeys">reset_audit_non_hmac_response_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetBootstrap">reset_bootstrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetCaCert">reset_ca_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientCert">reset_client_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientKey">reset_client_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDefaultLeaseTtlSeconds">reset_default_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDelegatedAuthAccessors">reset_delegated_auth_accessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDisableRemount">reset_disable_remount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetExternalEntropyAccess">reset_external_entropy_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetForceNoCache">reset_force_no_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetIdentityTokenKey">reset_identity_token_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetListingVisibility">reset_listing_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetLocal">reset_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetMaxLeaseTtlSeconds">reset_max_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPassthroughRequestHeaders">reset_passthrough_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPluginVersion">reset_plugin_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetScheme">reset_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetSealWrap">reset_seal_wrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_managed_keys` <a name="reset_allowed_managed_keys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAllowedManagedKeys"></a>

```python
def reset_allowed_managed_keys() -> None
```

##### `reset_allowed_response_headers` <a name="reset_allowed_response_headers" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAllowedResponseHeaders"></a>

```python
def reset_allowed_response_headers() -> None
```

##### `reset_audit_non_hmac_request_keys` <a name="reset_audit_non_hmac_request_keys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAuditNonHmacRequestKeys"></a>

```python
def reset_audit_non_hmac_request_keys() -> None
```

##### `reset_audit_non_hmac_response_keys` <a name="reset_audit_non_hmac_response_keys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAuditNonHmacResponseKeys"></a>

```python
def reset_audit_non_hmac_response_keys() -> None
```

##### `reset_bootstrap` <a name="reset_bootstrap" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetBootstrap"></a>

```python
def reset_bootstrap() -> None
```

##### `reset_ca_cert` <a name="reset_ca_cert" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetCaCert"></a>

```python
def reset_ca_cert() -> None
```

##### `reset_client_cert` <a name="reset_client_cert" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientCert"></a>

```python
def reset_client_cert() -> None
```

##### `reset_client_key` <a name="reset_client_key" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientKey"></a>

```python
def reset_client_key() -> None
```

##### `reset_default_lease_ttl_seconds` <a name="reset_default_lease_ttl_seconds" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```python
def reset_default_lease_ttl_seconds() -> None
```

##### `reset_delegated_auth_accessors` <a name="reset_delegated_auth_accessors" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDelegatedAuthAccessors"></a>

```python
def reset_delegated_auth_accessors() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_remount` <a name="reset_disable_remount" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDisableRemount"></a>

```python
def reset_disable_remount() -> None
```

##### `reset_external_entropy_access` <a name="reset_external_entropy_access" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetExternalEntropyAccess"></a>

```python
def reset_external_entropy_access() -> None
```

##### `reset_force_no_cache` <a name="reset_force_no_cache" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetForceNoCache"></a>

```python
def reset_force_no_cache() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_token_key` <a name="reset_identity_token_key" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetIdentityTokenKey"></a>

```python
def reset_identity_token_key() -> None
```

##### `reset_listing_visibility` <a name="reset_listing_visibility" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetListingVisibility"></a>

```python
def reset_listing_visibility() -> None
```

##### `reset_local` <a name="reset_local" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetLocal"></a>

```python
def reset_local() -> None
```

##### `reset_max_lease_ttl_seconds` <a name="reset_max_lease_ttl_seconds" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetMaxLeaseTtlSeconds"></a>

```python
def reset_max_lease_ttl_seconds() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_passthrough_request_headers` <a name="reset_passthrough_request_headers" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPassthroughRequestHeaders"></a>

```python
def reset_passthrough_request_headers() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_plugin_version` <a name="reset_plugin_version" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPluginVersion"></a>

```python
def reset_plugin_version() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetScheme"></a>

```python
def reset_scheme() -> None
```

##### `reset_seal_wrap` <a name="reset_seal_wrap" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetSealWrap"></a>

```python
def reset_seal_wrap() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ConsulSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import consul_secret_backend

consulSecretBackend.ConsulSecretBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import consul_secret_backend

consulSecretBackend.ConsulSecretBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import consul_secret_backend

consulSecretBackend.ConsulSecretBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import consul_secret_backend

consulSecretBackend.ConsulSecretBackend.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ConsulSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConsulSecretBackend to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConsulSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConsulSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedManagedKeysInput">allowed_managed_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedResponseHeadersInput">allowed_response_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacRequestKeysInput">audit_non_hmac_request_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacResponseKeysInput">audit_non_hmac_response_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.bootstrapInput">bootstrap_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.caCertInput">ca_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientCertInput">client_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.defaultLeaseTtlSecondsInput">default_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.delegatedAuthAccessorsInput">delegated_auth_accessors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.disableRemountInput">disable_remount_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.externalEntropyAccessInput">external_entropy_access_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forceNoCacheInput">force_no_cache_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.identityTokenKeyInput">identity_token_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.listingVisibilityInput">listing_visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.localInput">local_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.maxLeaseTtlSecondsInput">max_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.passthroughRequestHeadersInput">passthrough_request_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pluginVersionInput">plugin_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.sealWrapInput">seal_wrap_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.bootstrap">bootstrap</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.caCert">ca_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientCert">client_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.delegatedAuthAccessors">delegated_auth_accessors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.disableRemount">disable_remount</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.externalEntropyAccess">external_entropy_access</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forceNoCache">force_no_cache</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.identityTokenKey">identity_token_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.listingVisibility">listing_visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.local">local</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pluginVersion">plugin_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.sealWrap">seal_wrap</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `allowed_managed_keys_input`<sup>Optional</sup> <a name="allowed_managed_keys_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedManagedKeysInput"></a>

```python
allowed_managed_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_response_headers_input`<sup>Optional</sup> <a name="allowed_response_headers_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedResponseHeadersInput"></a>

```python
allowed_response_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_request_keys_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```python
audit_non_hmac_request_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_response_keys_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```python
audit_non_hmac_response_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bootstrap_input`<sup>Optional</sup> <a name="bootstrap_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.bootstrapInput"></a>

```python
bootstrap_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `ca_cert_input`<sup>Optional</sup> <a name="ca_cert_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.caCertInput"></a>

```python
ca_cert_input: str
```

- *Type:* str

---

##### `client_cert_input`<sup>Optional</sup> <a name="client_cert_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientCertInput"></a>

```python
client_cert_input: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `default_lease_ttl_seconds_input`<sup>Optional</sup> <a name="default_lease_ttl_seconds_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```python
default_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delegated_auth_accessors_input`<sup>Optional</sup> <a name="delegated_auth_accessors_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.delegatedAuthAccessorsInput"></a>

```python
delegated_auth_accessors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_remount_input`<sup>Optional</sup> <a name="disable_remount_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.disableRemountInput"></a>

```python
disable_remount_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `external_entropy_access_input`<sup>Optional</sup> <a name="external_entropy_access_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.externalEntropyAccessInput"></a>

```python
external_entropy_access_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `force_no_cache_input`<sup>Optional</sup> <a name="force_no_cache_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forceNoCacheInput"></a>

```python
force_no_cache_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `identity_token_key_input`<sup>Optional</sup> <a name="identity_token_key_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.identityTokenKeyInput"></a>

```python
identity_token_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listing_visibility_input`<sup>Optional</sup> <a name="listing_visibility_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.listingVisibilityInput"></a>

```python
listing_visibility_input: str
```

- *Type:* str

---

##### `local_input`<sup>Optional</sup> <a name="local_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.localInput"></a>

```python
local_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_lease_ttl_seconds_input`<sup>Optional</sup> <a name="max_lease_ttl_seconds_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```python
max_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `passthrough_request_headers_input`<sup>Optional</sup> <a name="passthrough_request_headers_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.passthroughRequestHeadersInput"></a>

```python
passthrough_request_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `plugin_version_input`<sup>Optional</sup> <a name="plugin_version_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pluginVersionInput"></a>

```python
plugin_version_input: str
```

- *Type:* str

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `seal_wrap_input`<sup>Optional</sup> <a name="seal_wrap_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.sealWrapInput"></a>

```python
seal_wrap_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `allowed_managed_keys`<sup>Required</sup> <a name="allowed_managed_keys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedManagedKeys"></a>

```python
allowed_managed_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_response_headers`<sup>Required</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedResponseHeaders"></a>

```python
allowed_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys`<sup>Required</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys`<sup>Required</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bootstrap`<sup>Required</sup> <a name="bootstrap" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.bootstrap"></a>

```python
bootstrap: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `ca_cert`<sup>Required</sup> <a name="ca_cert" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.caCert"></a>

```python
ca_cert: str
```

- *Type:* str

---

##### `client_cert`<sup>Required</sup> <a name="client_cert" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientCert"></a>

```python
client_cert: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `default_lease_ttl_seconds`<sup>Required</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delegated_auth_accessors`<sup>Required</sup> <a name="delegated_auth_accessors" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.delegatedAuthAccessors"></a>

```python
delegated_auth_accessors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_remount`<sup>Required</sup> <a name="disable_remount" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.disableRemount"></a>

```python
disable_remount: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `external_entropy_access`<sup>Required</sup> <a name="external_entropy_access" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.externalEntropyAccess"></a>

```python
external_entropy_access: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `force_no_cache`<sup>Required</sup> <a name="force_no_cache" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forceNoCache"></a>

```python
force_no_cache: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_token_key`<sup>Required</sup> <a name="identity_token_key" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.identityTokenKey"></a>

```python
identity_token_key: str
```

- *Type:* str

---

##### `listing_visibility`<sup>Required</sup> <a name="listing_visibility" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.listingVisibility"></a>

```python
listing_visibility: str
```

- *Type:* str

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.local"></a>

```python
local: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_lease_ttl_seconds`<sup>Required</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `passthrough_request_headers`<sup>Required</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.passthroughRequestHeaders"></a>

```python
passthrough_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `plugin_version`<sup>Required</sup> <a name="plugin_version" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pluginVersion"></a>

```python
plugin_version: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `seal_wrap`<sup>Required</sup> <a name="seal_wrap" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.sealWrap"></a>

```python
seal_wrap: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulSecretBackendConfig <a name="ConsulSecretBackendConfig" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import consul_secret_backend

consulSecretBackend.ConsulSecretBackendConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  address: str,
  allowed_managed_keys: typing.List[str] = None,
  allowed_response_headers: typing.List[str] = None,
  audit_non_hmac_request_keys: typing.List[str] = None,
  audit_non_hmac_response_keys: typing.List[str] = None,
  bootstrap: bool | IResolvable = None,
  ca_cert: str = None,
  client_cert: str = None,
  client_key: str = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  delegated_auth_accessors: typing.List[str] = None,
  description: str = None,
  disable_remount: bool | IResolvable = None,
  external_entropy_access: bool | IResolvable = None,
  force_no_cache: bool | IResolvable = None,
  id: str = None,
  identity_token_key: str = None,
  listing_visibility: str = None,
  local: bool | IResolvable = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  options: typing.Mapping[str] = None,
  passthrough_request_headers: typing.List[str] = None,
  path: str = None,
  plugin_version: str = None,
  scheme: str = None,
  seal_wrap: bool | IResolvable = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.address">address</a></code> | <code>str</code> | Specifies the address of the Consul instance, provided as "host:port" like "127.0.0.1:8500". |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.bootstrap">bootstrap</a></code> | <code>bool \| cdktf.IResolvable</code> | Denotes a backend resource that is used to bootstrap the Consul ACL system. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.caCert">ca_cert</a></code> | <code>str</code> | CA certificate to use when verifying Consul server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientCert">client_cert</a></code> | <code>str</code> | Client certificate used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientKey">client_key</a></code> | <code>str</code> | Client key used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.delegatedAuthAccessors">delegated_auth_accessors</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.disableRemount">disable_remount</a></code> | <code>bool \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.externalEntropyAccess">external_entropy_access</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.forceNoCache">force_no_cache</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#id ConsulSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.identityTokenKey">identity_token_key</a></code> | <code>str</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.listingVisibility">listing_visibility</a></code> | <code>str</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.local">local</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies if the secret backend is local only. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.path">path</a></code> | <code>str</code> | Unique name of the Vault Consul mount to configure. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.pluginVersion">plugin_version</a></code> | <code>str</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.scheme">scheme</a></code> | <code>str</code> | Specifies the URL scheme to use. Defaults to "http". |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.sealWrap">seal_wrap</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.token">token</a></code> | <code>str</code> | Specifies the Consul token to use when managing or issuing new tokens. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.address"></a>

```python
address: str
```

- *Type:* str

Specifies the address of the Consul instance, provided as "host:port" like "127.0.0.1:8500".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#address ConsulSecretBackend#address}

---

##### `allowed_managed_keys`<sup>Optional</sup> <a name="allowed_managed_keys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.allowedManagedKeys"></a>

```python
allowed_managed_keys: typing.List[str]
```

- *Type:* typing.List[str]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#allowed_managed_keys ConsulSecretBackend#allowed_managed_keys}

---

##### `allowed_response_headers`<sup>Optional</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.allowedResponseHeaders"></a>

```python
allowed_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#allowed_response_headers ConsulSecretBackend#allowed_response_headers}

---

##### `audit_non_hmac_request_keys`<sup>Optional</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#audit_non_hmac_request_keys ConsulSecretBackend#audit_non_hmac_request_keys}

---

##### `audit_non_hmac_response_keys`<sup>Optional</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#audit_non_hmac_response_keys ConsulSecretBackend#audit_non_hmac_response_keys}

---

##### `bootstrap`<sup>Optional</sup> <a name="bootstrap" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.bootstrap"></a>

```python
bootstrap: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Denotes a backend resource that is used to bootstrap the Consul ACL system.

Only one resource may be used to bootstrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#bootstrap ConsulSecretBackend#bootstrap}

---

##### `ca_cert`<sup>Optional</sup> <a name="ca_cert" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.caCert"></a>

```python
ca_cert: str
```

- *Type:* str

CA certificate to use when verifying Consul server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#ca_cert ConsulSecretBackend#ca_cert}

---

##### `client_cert`<sup>Optional</sup> <a name="client_cert" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientCert"></a>

```python
client_cert: str
```

- *Type:* str

Client certificate used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#client_cert ConsulSecretBackend#client_cert}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

Client key used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#client_key ConsulSecretBackend#client_key}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#default_lease_ttl_seconds ConsulSecretBackend#default_lease_ttl_seconds}

---

##### `delegated_auth_accessors`<sup>Optional</sup> <a name="delegated_auth_accessors" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.delegatedAuthAccessors"></a>

```python
delegated_auth_accessors: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#delegated_auth_accessors ConsulSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#description ConsulSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.disableRemount"></a>

```python
disable_remount: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#disable_remount ConsulSecretBackend#disable_remount}

---

##### `external_entropy_access`<sup>Optional</sup> <a name="external_entropy_access" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.externalEntropyAccess"></a>

```python
external_entropy_access: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#external_entropy_access ConsulSecretBackend#external_entropy_access}

---

##### `force_no_cache`<sup>Optional</sup> <a name="force_no_cache" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.forceNoCache"></a>

```python
force_no_cache: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#force_no_cache ConsulSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#id ConsulSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_token_key`<sup>Optional</sup> <a name="identity_token_key" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.identityTokenKey"></a>

```python
identity_token_key: str
```

- *Type:* str

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#identity_token_key ConsulSecretBackend#identity_token_key}

---

##### `listing_visibility`<sup>Optional</sup> <a name="listing_visibility" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.listingVisibility"></a>

```python
listing_visibility: str
```

- *Type:* str

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#listing_visibility ConsulSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.local"></a>

```python
local: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Specifies if the secret backend is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#local ConsulSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#max_lease_ttl_seconds ConsulSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#namespace ConsulSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#options ConsulSecretBackend#options}

---

##### `passthrough_request_headers`<sup>Optional</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.passthroughRequestHeaders"></a>

```python
passthrough_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#passthrough_request_headers ConsulSecretBackend#passthrough_request_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Unique name of the Vault Consul mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#path ConsulSecretBackend#path}

---

##### `plugin_version`<sup>Optional</sup> <a name="plugin_version" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.pluginVersion"></a>

```python
plugin_version: str
```

- *Type:* str

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#plugin_version ConsulSecretBackend#plugin_version}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Specifies the URL scheme to use. Defaults to "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#scheme ConsulSecretBackend#scheme}

---

##### `seal_wrap`<sup>Optional</sup> <a name="seal_wrap" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.sealWrap"></a>

```python
seal_wrap: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#seal_wrap ConsulSecretBackend#seal_wrap}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Specifies the Consul token to use when managing or issuing new tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/consul_secret_backend#token ConsulSecretBackend#token}

---



