# `azureSecretBackend` Submodule <a name="`azureSecretBackend` Submodule" id="@cdktf/provider-vault.azureSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureSecretBackend <a name="AzureSecretBackend" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend vault_azure_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend

azureSecretBackend.AzureSecretBackend(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  subscription_id: str,
  tenant_id: str,
  allowed_managed_keys: typing.List[str] = None,
  allowed_response_headers: typing.List[str] = None,
  audit_non_hmac_request_keys: typing.List[str] = None,
  audit_non_hmac_response_keys: typing.List[str] = None,
  client_id: str = None,
  client_secret: str = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  delegated_auth_accessors: typing.List[str] = None,
  description: str = None,
  disable_automated_rotation: bool | IResolvable = None,
  disable_remount: bool | IResolvable = None,
  environment: str = None,
  external_entropy_access: bool | IResolvable = None,
  force_no_cache: bool | IResolvable = None,
  id: str = None,
  identity_token_audience: str = None,
  identity_token_key: str = None,
  identity_token_ttl: typing.Union[int, float] = None,
  listing_visibility: str = None,
  local: bool | IResolvable = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  options: typing.Mapping[str] = None,
  passthrough_request_headers: typing.List[str] = None,
  path: str = None,
  plugin_version: str = None,
  root_password_ttl: typing.Union[int, float] = None,
  rotation_period: typing.Union[int, float] = None,
  rotation_schedule: str = None,
  rotation_window: typing.Union[int, float] = None,
  seal_wrap: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | The subscription id for the Azure Active Directory. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | The tenant id for the Azure Active Directory organization. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | The client secret for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.delegatedAuthAccessors">delegated_auth_accessors</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.disableAutomatedRotation">disable_automated_rotation</a></code> | <code>bool \| cdktf.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.disableRemount">disable_remount</a></code> | <code>bool \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.externalEntropyAccess">external_entropy_access</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.forceNoCache">force_no_cache</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#id AzureSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.identityTokenAudience">identity_token_audience</a></code> | <code>str</code> | The audience claim value. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.identityTokenKey">identity_token_key</a></code> | <code>str</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.identityTokenTtl">identity_token_ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL of generated identity tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.listingVisibility">listing_visibility</a></code> | <code>str</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.local">local</a></code> | <code>bool \| cdktf.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.options">options</a></code> | <code>typing.Mapping[str]</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.path">path</a></code> | <code>str</code> | Path to mount the backend at. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.pluginVersion">plugin_version</a></code> | <code>str</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.rootPasswordTtl">root_password_ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL in seconds of the root password in Azure when rotate-root generates a new client secret. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.rotationSchedule">rotation_schedule</a></code> | <code>str</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.rotationWindow">rotation_window</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.sealWrap">seal_wrap</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.subscriptionId"></a>

- *Type:* str

The subscription id for the Azure Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#subscription_id AzureSecretBackend#subscription_id}

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.tenantId"></a>

- *Type:* str

The tenant id for the Azure Active Directory organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#tenant_id AzureSecretBackend#tenant_id}

---

##### `allowed_managed_keys`<sup>Optional</sup> <a name="allowed_managed_keys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.allowedManagedKeys"></a>

- *Type:* typing.List[str]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#allowed_managed_keys AzureSecretBackend#allowed_managed_keys}

---

##### `allowed_response_headers`<sup>Optional</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.allowedResponseHeaders"></a>

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#allowed_response_headers AzureSecretBackend#allowed_response_headers}

---

##### `audit_non_hmac_request_keys`<sup>Optional</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.auditNonHmacRequestKeys"></a>

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#audit_non_hmac_request_keys AzureSecretBackend#audit_non_hmac_request_keys}

---

##### `audit_non_hmac_response_keys`<sup>Optional</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.auditNonHmacResponseKeys"></a>

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#audit_non_hmac_response_keys AzureSecretBackend#audit_non_hmac_response_keys}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.clientId"></a>

- *Type:* str

The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#client_id AzureSecretBackend#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.clientSecret"></a>

- *Type:* str

The client secret for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#client_secret AzureSecretBackend#client_secret}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#default_lease_ttl_seconds AzureSecretBackend#default_lease_ttl_seconds}

---

##### `delegated_auth_accessors`<sup>Optional</sup> <a name="delegated_auth_accessors" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.delegatedAuthAccessors"></a>

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#delegated_auth_accessors AzureSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.description"></a>

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#description AzureSecretBackend#description}

---

##### `disable_automated_rotation`<sup>Optional</sup> <a name="disable_automated_rotation" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.disableAutomatedRotation"></a>

- *Type:* bool | cdktf.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#disable_automated_rotation AzureSecretBackend#disable_automated_rotation}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* bool | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#disable_remount AzureSecretBackend#disable_remount}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.environment"></a>

- *Type:* str

The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#environment AzureSecretBackend#environment}

---

##### `external_entropy_access`<sup>Optional</sup> <a name="external_entropy_access" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.externalEntropyAccess"></a>

- *Type:* bool | cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#external_entropy_access AzureSecretBackend#external_entropy_access}

---

##### `force_no_cache`<sup>Optional</sup> <a name="force_no_cache" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.forceNoCache"></a>

- *Type:* bool | cdktf.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#force_no_cache AzureSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#id AzureSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_token_audience`<sup>Optional</sup> <a name="identity_token_audience" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.identityTokenAudience"></a>

- *Type:* str

The audience claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#identity_token_audience AzureSecretBackend#identity_token_audience}

---

##### `identity_token_key`<sup>Optional</sup> <a name="identity_token_key" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.identityTokenKey"></a>

- *Type:* str

The key to use for signing identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#identity_token_key AzureSecretBackend#identity_token_key}

---

##### `identity_token_ttl`<sup>Optional</sup> <a name="identity_token_ttl" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.identityTokenTtl"></a>

- *Type:* typing.Union[int, float]

The TTL of generated identity tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#identity_token_ttl AzureSecretBackend#identity_token_ttl}

---

##### `listing_visibility`<sup>Optional</sup> <a name="listing_visibility" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.listingVisibility"></a>

- *Type:* str

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#listing_visibility AzureSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.local"></a>

- *Type:* bool | cdktf.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#local AzureSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#max_lease_ttl_seconds AzureSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#namespace AzureSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.options"></a>

- *Type:* typing.Mapping[str]

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#options AzureSecretBackend#options}

---

##### `passthrough_request_headers`<sup>Optional</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.passthroughRequestHeaders"></a>

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#passthrough_request_headers AzureSecretBackend#passthrough_request_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.path"></a>

- *Type:* str

Path to mount the backend at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#path AzureSecretBackend#path}

---

##### `plugin_version`<sup>Optional</sup> <a name="plugin_version" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.pluginVersion"></a>

- *Type:* str

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#plugin_version AzureSecretBackend#plugin_version}

---

##### `root_password_ttl`<sup>Optional</sup> <a name="root_password_ttl" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.rootPasswordTtl"></a>

- *Type:* typing.Union[int, float]

The TTL in seconds of the root password in Azure when rotate-root generates a new client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#root_password_ttl AzureSecretBackend#root_password_ttl}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.rotationPeriod"></a>

- *Type:* typing.Union[int, float]

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#rotation_period AzureSecretBackend#rotation_period}

---

##### `rotation_schedule`<sup>Optional</sup> <a name="rotation_schedule" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.rotationSchedule"></a>

- *Type:* str

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#rotation_schedule AzureSecretBackend#rotation_schedule}

---

##### `rotation_window`<sup>Optional</sup> <a name="rotation_window" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.rotationWindow"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#rotation_window AzureSecretBackend#rotation_window}

---

##### `seal_wrap`<sup>Optional</sup> <a name="seal_wrap" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.sealWrap"></a>

- *Type:* bool | cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#seal_wrap AzureSecretBackend#seal_wrap}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAllowedManagedKeys">reset_allowed_managed_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAllowedResponseHeaders">reset_allowed_response_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAuditNonHmacRequestKeys">reset_audit_non_hmac_request_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAuditNonHmacResponseKeys">reset_audit_non_hmac_response_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDefaultLeaseTtlSeconds">reset_default_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDelegatedAuthAccessors">reset_delegated_auth_accessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDisableAutomatedRotation">reset_disable_automated_rotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDisableRemount">reset_disable_remount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetExternalEntropyAccess">reset_external_entropy_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetForceNoCache">reset_force_no_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetIdentityTokenAudience">reset_identity_token_audience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetIdentityTokenKey">reset_identity_token_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetIdentityTokenTtl">reset_identity_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetListingVisibility">reset_listing_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetLocal">reset_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetMaxLeaseTtlSeconds">reset_max_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetPassthroughRequestHeaders">reset_passthrough_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetPluginVersion">reset_plugin_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRootPasswordTtl">reset_root_password_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRotationPeriod">reset_rotation_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRotationSchedule">reset_rotation_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRotationWindow">reset_rotation_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetSealWrap">reset_seal_wrap</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_managed_keys` <a name="reset_allowed_managed_keys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAllowedManagedKeys"></a>

```python
def reset_allowed_managed_keys() -> None
```

##### `reset_allowed_response_headers` <a name="reset_allowed_response_headers" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAllowedResponseHeaders"></a>

```python
def reset_allowed_response_headers() -> None
```

##### `reset_audit_non_hmac_request_keys` <a name="reset_audit_non_hmac_request_keys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAuditNonHmacRequestKeys"></a>

```python
def reset_audit_non_hmac_request_keys() -> None
```

##### `reset_audit_non_hmac_response_keys` <a name="reset_audit_non_hmac_response_keys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAuditNonHmacResponseKeys"></a>

```python
def reset_audit_non_hmac_response_keys() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_default_lease_ttl_seconds` <a name="reset_default_lease_ttl_seconds" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```python
def reset_default_lease_ttl_seconds() -> None
```

##### `reset_delegated_auth_accessors` <a name="reset_delegated_auth_accessors" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDelegatedAuthAccessors"></a>

```python
def reset_delegated_auth_accessors() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_automated_rotation` <a name="reset_disable_automated_rotation" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDisableAutomatedRotation"></a>

```python
def reset_disable_automated_rotation() -> None
```

##### `reset_disable_remount` <a name="reset_disable_remount" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDisableRemount"></a>

```python
def reset_disable_remount() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_external_entropy_access` <a name="reset_external_entropy_access" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetExternalEntropyAccess"></a>

```python
def reset_external_entropy_access() -> None
```

##### `reset_force_no_cache` <a name="reset_force_no_cache" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetForceNoCache"></a>

```python
def reset_force_no_cache() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_token_audience` <a name="reset_identity_token_audience" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetIdentityTokenAudience"></a>

```python
def reset_identity_token_audience() -> None
```

##### `reset_identity_token_key` <a name="reset_identity_token_key" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetIdentityTokenKey"></a>

```python
def reset_identity_token_key() -> None
```

##### `reset_identity_token_ttl` <a name="reset_identity_token_ttl" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetIdentityTokenTtl"></a>

```python
def reset_identity_token_ttl() -> None
```

##### `reset_listing_visibility` <a name="reset_listing_visibility" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetListingVisibility"></a>

```python
def reset_listing_visibility() -> None
```

##### `reset_local` <a name="reset_local" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetLocal"></a>

```python
def reset_local() -> None
```

##### `reset_max_lease_ttl_seconds` <a name="reset_max_lease_ttl_seconds" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetMaxLeaseTtlSeconds"></a>

```python
def reset_max_lease_ttl_seconds() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_passthrough_request_headers` <a name="reset_passthrough_request_headers" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetPassthroughRequestHeaders"></a>

```python
def reset_passthrough_request_headers() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_plugin_version` <a name="reset_plugin_version" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetPluginVersion"></a>

```python
def reset_plugin_version() -> None
```

##### `reset_root_password_ttl` <a name="reset_root_password_ttl" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRootPasswordTtl"></a>

```python
def reset_root_password_ttl() -> None
```

##### `reset_rotation_period` <a name="reset_rotation_period" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRotationPeriod"></a>

```python
def reset_rotation_period() -> None
```

##### `reset_rotation_schedule` <a name="reset_rotation_schedule" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRotationSchedule"></a>

```python
def reset_rotation_schedule() -> None
```

##### `reset_rotation_window` <a name="reset_rotation_window" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRotationWindow"></a>

```python
def reset_rotation_window() -> None
```

##### `reset_seal_wrap` <a name="reset_seal_wrap" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetSealWrap"></a>

```python
def reset_seal_wrap() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AzureSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend

azureSecretBackend.AzureSecretBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend

azureSecretBackend.AzureSecretBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend

azureSecretBackend.AzureSecretBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend

azureSecretBackend.AzureSecretBackend.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AzureSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AzureSecretBackend to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AzureSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AzureSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedManagedKeysInput">allowed_managed_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedResponseHeadersInput">allowed_response_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacRequestKeysInput">audit_non_hmac_request_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacResponseKeysInput">audit_non_hmac_response_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.defaultLeaseTtlSecondsInput">default_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.delegatedAuthAccessorsInput">delegated_auth_accessors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableAutomatedRotationInput">disable_automated_rotation_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableRemountInput">disable_remount_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.externalEntropyAccessInput">external_entropy_access_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.forceNoCacheInput">force_no_cache_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenAudienceInput">identity_token_audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenKeyInput">identity_token_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenTtlInput">identity_token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.listingVisibilityInput">listing_visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.localInput">local_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.maxLeaseTtlSecondsInput">max_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.passthroughRequestHeadersInput">passthrough_request_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.pluginVersionInput">plugin_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rootPasswordTtlInput">root_password_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationPeriodInput">rotation_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationScheduleInput">rotation_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationWindowInput">rotation_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.sealWrapInput">seal_wrap_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.delegatedAuthAccessors">delegated_auth_accessors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableAutomatedRotation">disable_automated_rotation</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableRemount">disable_remount</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.externalEntropyAccess">external_entropy_access</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.forceNoCache">force_no_cache</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenAudience">identity_token_audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenKey">identity_token_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenTtl">identity_token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.listingVisibility">listing_visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.local">local</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.pluginVersion">plugin_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rootPasswordTtl">root_password_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationSchedule">rotation_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationWindow">rotation_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.sealWrap">seal_wrap</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `allowed_managed_keys_input`<sup>Optional</sup> <a name="allowed_managed_keys_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedManagedKeysInput"></a>

```python
allowed_managed_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_response_headers_input`<sup>Optional</sup> <a name="allowed_response_headers_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedResponseHeadersInput"></a>

```python
allowed_response_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_request_keys_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```python
audit_non_hmac_request_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_response_keys_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```python
audit_non_hmac_response_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `default_lease_ttl_seconds_input`<sup>Optional</sup> <a name="default_lease_ttl_seconds_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```python
default_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delegated_auth_accessors_input`<sup>Optional</sup> <a name="delegated_auth_accessors_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.delegatedAuthAccessorsInput"></a>

```python
delegated_auth_accessors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_automated_rotation_input`<sup>Optional</sup> <a name="disable_automated_rotation_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableAutomatedRotationInput"></a>

```python
disable_automated_rotation_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `disable_remount_input`<sup>Optional</sup> <a name="disable_remount_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableRemountInput"></a>

```python
disable_remount_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `external_entropy_access_input`<sup>Optional</sup> <a name="external_entropy_access_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.externalEntropyAccessInput"></a>

```python
external_entropy_access_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `force_no_cache_input`<sup>Optional</sup> <a name="force_no_cache_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.forceNoCacheInput"></a>

```python
force_no_cache_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `identity_token_audience_input`<sup>Optional</sup> <a name="identity_token_audience_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenAudienceInput"></a>

```python
identity_token_audience_input: str
```

- *Type:* str

---

##### `identity_token_key_input`<sup>Optional</sup> <a name="identity_token_key_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenKeyInput"></a>

```python
identity_token_key_input: str
```

- *Type:* str

---

##### `identity_token_ttl_input`<sup>Optional</sup> <a name="identity_token_ttl_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenTtlInput"></a>

```python
identity_token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listing_visibility_input`<sup>Optional</sup> <a name="listing_visibility_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.listingVisibilityInput"></a>

```python
listing_visibility_input: str
```

- *Type:* str

---

##### `local_input`<sup>Optional</sup> <a name="local_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.localInput"></a>

```python
local_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_lease_ttl_seconds_input`<sup>Optional</sup> <a name="max_lease_ttl_seconds_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```python
max_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `passthrough_request_headers_input`<sup>Optional</sup> <a name="passthrough_request_headers_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.passthroughRequestHeadersInput"></a>

```python
passthrough_request_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `plugin_version_input`<sup>Optional</sup> <a name="plugin_version_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.pluginVersionInput"></a>

```python
plugin_version_input: str
```

- *Type:* str

---

##### `root_password_ttl_input`<sup>Optional</sup> <a name="root_password_ttl_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rootPasswordTtlInput"></a>

```python
root_password_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_period_input`<sup>Optional</sup> <a name="rotation_period_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationPeriodInput"></a>

```python
rotation_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_schedule_input`<sup>Optional</sup> <a name="rotation_schedule_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationScheduleInput"></a>

```python
rotation_schedule_input: str
```

- *Type:* str

---

##### `rotation_window_input`<sup>Optional</sup> <a name="rotation_window_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationWindowInput"></a>

```python
rotation_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seal_wrap_input`<sup>Optional</sup> <a name="seal_wrap_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.sealWrapInput"></a>

```python
seal_wrap_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `allowed_managed_keys`<sup>Required</sup> <a name="allowed_managed_keys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedManagedKeys"></a>

```python
allowed_managed_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_response_headers`<sup>Required</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedResponseHeaders"></a>

```python
allowed_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys`<sup>Required</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys`<sup>Required</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `default_lease_ttl_seconds`<sup>Required</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delegated_auth_accessors`<sup>Required</sup> <a name="delegated_auth_accessors" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.delegatedAuthAccessors"></a>

```python
delegated_auth_accessors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_automated_rotation`<sup>Required</sup> <a name="disable_automated_rotation" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableAutomatedRotation"></a>

```python
disable_automated_rotation: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `disable_remount`<sup>Required</sup> <a name="disable_remount" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableRemount"></a>

```python
disable_remount: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `external_entropy_access`<sup>Required</sup> <a name="external_entropy_access" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.externalEntropyAccess"></a>

```python
external_entropy_access: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `force_no_cache`<sup>Required</sup> <a name="force_no_cache" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.forceNoCache"></a>

```python
force_no_cache: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_token_audience`<sup>Required</sup> <a name="identity_token_audience" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenAudience"></a>

```python
identity_token_audience: str
```

- *Type:* str

---

##### `identity_token_key`<sup>Required</sup> <a name="identity_token_key" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenKey"></a>

```python
identity_token_key: str
```

- *Type:* str

---

##### `identity_token_ttl`<sup>Required</sup> <a name="identity_token_ttl" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenTtl"></a>

```python
identity_token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `listing_visibility`<sup>Required</sup> <a name="listing_visibility" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.listingVisibility"></a>

```python
listing_visibility: str
```

- *Type:* str

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.local"></a>

```python
local: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_lease_ttl_seconds`<sup>Required</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `passthrough_request_headers`<sup>Required</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.passthroughRequestHeaders"></a>

```python
passthrough_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `plugin_version`<sup>Required</sup> <a name="plugin_version" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.pluginVersion"></a>

```python
plugin_version: str
```

- *Type:* str

---

##### `root_password_ttl`<sup>Required</sup> <a name="root_password_ttl" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rootPasswordTtl"></a>

```python
root_password_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationPeriod"></a>

```python
rotation_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_schedule`<sup>Required</sup> <a name="rotation_schedule" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationSchedule"></a>

```python
rotation_schedule: str
```

- *Type:* str

---

##### `rotation_window`<sup>Required</sup> <a name="rotation_window" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationWindow"></a>

```python
rotation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seal_wrap`<sup>Required</sup> <a name="seal_wrap" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.sealWrap"></a>

```python
seal_wrap: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AzureSecretBackendConfig <a name="AzureSecretBackendConfig" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend

azureSecretBackend.AzureSecretBackendConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  subscription_id: str,
  tenant_id: str,
  allowed_managed_keys: typing.List[str] = None,
  allowed_response_headers: typing.List[str] = None,
  audit_non_hmac_request_keys: typing.List[str] = None,
  audit_non_hmac_response_keys: typing.List[str] = None,
  client_id: str = None,
  client_secret: str = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  delegated_auth_accessors: typing.List[str] = None,
  description: str = None,
  disable_automated_rotation: bool | IResolvable = None,
  disable_remount: bool | IResolvable = None,
  environment: str = None,
  external_entropy_access: bool | IResolvable = None,
  force_no_cache: bool | IResolvable = None,
  id: str = None,
  identity_token_audience: str = None,
  identity_token_key: str = None,
  identity_token_ttl: typing.Union[int, float] = None,
  listing_visibility: str = None,
  local: bool | IResolvable = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  options: typing.Mapping[str] = None,
  passthrough_request_headers: typing.List[str] = None,
  path: str = None,
  plugin_version: str = None,
  root_password_ttl: typing.Union[int, float] = None,
  rotation_period: typing.Union[int, float] = None,
  rotation_schedule: str = None,
  rotation_window: typing.Union[int, float] = None,
  seal_wrap: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | The subscription id for the Azure Active Directory. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | The tenant id for the Azure Active Directory organization. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.clientId">client_id</a></code> | <code>str</code> | The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The client secret for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.delegatedAuthAccessors">delegated_auth_accessors</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.disableAutomatedRotation">disable_automated_rotation</a></code> | <code>bool \| cdktf.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.disableRemount">disable_remount</a></code> | <code>bool \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.environment">environment</a></code> | <code>str</code> | The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.externalEntropyAccess">external_entropy_access</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.forceNoCache">force_no_cache</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#id AzureSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.identityTokenAudience">identity_token_audience</a></code> | <code>str</code> | The audience claim value. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.identityTokenKey">identity_token_key</a></code> | <code>str</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.identityTokenTtl">identity_token_ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL of generated identity tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.listingVisibility">listing_visibility</a></code> | <code>str</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.local">local</a></code> | <code>bool \| cdktf.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.path">path</a></code> | <code>str</code> | Path to mount the backend at. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.pluginVersion">plugin_version</a></code> | <code>str</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rootPasswordTtl">root_password_ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL in seconds of the root password in Azure when rotate-root generates a new client secret. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rotationSchedule">rotation_schedule</a></code> | <code>str</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rotationWindow">rotation_window</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.sealWrap">seal_wrap</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

The subscription id for the Azure Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#subscription_id AzureSecretBackend#subscription_id}

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The tenant id for the Azure Active Directory organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#tenant_id AzureSecretBackend#tenant_id}

---

##### `allowed_managed_keys`<sup>Optional</sup> <a name="allowed_managed_keys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.allowedManagedKeys"></a>

```python
allowed_managed_keys: typing.List[str]
```

- *Type:* typing.List[str]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#allowed_managed_keys AzureSecretBackend#allowed_managed_keys}

---

##### `allowed_response_headers`<sup>Optional</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.allowedResponseHeaders"></a>

```python
allowed_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#allowed_response_headers AzureSecretBackend#allowed_response_headers}

---

##### `audit_non_hmac_request_keys`<sup>Optional</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#audit_non_hmac_request_keys AzureSecretBackend#audit_non_hmac_request_keys}

---

##### `audit_non_hmac_response_keys`<sup>Optional</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#audit_non_hmac_response_keys AzureSecretBackend#audit_non_hmac_response_keys}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#client_id AzureSecretBackend#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The client secret for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#client_secret AzureSecretBackend#client_secret}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#default_lease_ttl_seconds AzureSecretBackend#default_lease_ttl_seconds}

---

##### `delegated_auth_accessors`<sup>Optional</sup> <a name="delegated_auth_accessors" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.delegatedAuthAccessors"></a>

```python
delegated_auth_accessors: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#delegated_auth_accessors AzureSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#description AzureSecretBackend#description}

---

##### `disable_automated_rotation`<sup>Optional</sup> <a name="disable_automated_rotation" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.disableAutomatedRotation"></a>

```python
disable_automated_rotation: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#disable_automated_rotation AzureSecretBackend#disable_automated_rotation}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.disableRemount"></a>

```python
disable_remount: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#disable_remount AzureSecretBackend#disable_remount}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#environment AzureSecretBackend#environment}

---

##### `external_entropy_access`<sup>Optional</sup> <a name="external_entropy_access" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.externalEntropyAccess"></a>

```python
external_entropy_access: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#external_entropy_access AzureSecretBackend#external_entropy_access}

---

##### `force_no_cache`<sup>Optional</sup> <a name="force_no_cache" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.forceNoCache"></a>

```python
force_no_cache: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#force_no_cache AzureSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#id AzureSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_token_audience`<sup>Optional</sup> <a name="identity_token_audience" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.identityTokenAudience"></a>

```python
identity_token_audience: str
```

- *Type:* str

The audience claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#identity_token_audience AzureSecretBackend#identity_token_audience}

---

##### `identity_token_key`<sup>Optional</sup> <a name="identity_token_key" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.identityTokenKey"></a>

```python
identity_token_key: str
```

- *Type:* str

The key to use for signing identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#identity_token_key AzureSecretBackend#identity_token_key}

---

##### `identity_token_ttl`<sup>Optional</sup> <a name="identity_token_ttl" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.identityTokenTtl"></a>

```python
identity_token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TTL of generated identity tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#identity_token_ttl AzureSecretBackend#identity_token_ttl}

---

##### `listing_visibility`<sup>Optional</sup> <a name="listing_visibility" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.listingVisibility"></a>

```python
listing_visibility: str
```

- *Type:* str

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#listing_visibility AzureSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.local"></a>

```python
local: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#local AzureSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#max_lease_ttl_seconds AzureSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#namespace AzureSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#options AzureSecretBackend#options}

---

##### `passthrough_request_headers`<sup>Optional</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.passthroughRequestHeaders"></a>

```python
passthrough_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#passthrough_request_headers AzureSecretBackend#passthrough_request_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Path to mount the backend at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#path AzureSecretBackend#path}

---

##### `plugin_version`<sup>Optional</sup> <a name="plugin_version" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.pluginVersion"></a>

```python
plugin_version: str
```

- *Type:* str

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#plugin_version AzureSecretBackend#plugin_version}

---

##### `root_password_ttl`<sup>Optional</sup> <a name="root_password_ttl" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rootPasswordTtl"></a>

```python
root_password_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TTL in seconds of the root password in Azure when rotate-root generates a new client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#root_password_ttl AzureSecretBackend#root_password_ttl}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rotationPeriod"></a>

```python
rotation_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#rotation_period AzureSecretBackend#rotation_period}

---

##### `rotation_schedule`<sup>Optional</sup> <a name="rotation_schedule" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rotationSchedule"></a>

```python
rotation_schedule: str
```

- *Type:* str

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#rotation_schedule AzureSecretBackend#rotation_schedule}

---

##### `rotation_window`<sup>Optional</sup> <a name="rotation_window" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rotationWindow"></a>

```python
rotation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#rotation_window AzureSecretBackend#rotation_window}

---

##### `seal_wrap`<sup>Optional</sup> <a name="seal_wrap" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.sealWrap"></a>

```python
seal_wrap: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend#seal_wrap AzureSecretBackend#seal_wrap}

---



