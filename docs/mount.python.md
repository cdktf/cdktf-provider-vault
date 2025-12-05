# `mount` Submodule <a name="`mount` Submodule" id="@cdktf/provider-vault.mount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mount <a name="Mount" id="@cdktf/provider-vault.mount.Mount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount vault_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.mount.Mount.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import mount

mount.Mount(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  path: str,
  type: str,
  allowed_managed_keys: typing.List[str] = None,
  allowed_response_headers: typing.List[str] = None,
  audit_non_hmac_request_keys: typing.List[str] = None,
  audit_non_hmac_response_keys: typing.List[str] = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  delegated_auth_accessors: typing.List[str] = None,
  description: str = None,
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
  plugin_version: str = None,
  seal_wrap: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.path">path</a></code> | <code>str</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.type">type</a></code> | <code>str</code> | Type of the backend, such as 'aws'. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.delegatedAuthAccessors">delegated_auth_accessors</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.externalEntropyAccess">external_entropy_access</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.forceNoCache">force_no_cache</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#id Mount#id}. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.identityTokenKey">identity_token_key</a></code> | <code>str</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.listingVisibility">listing_visibility</a></code> | <code>str</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.local">local</a></code> | <code>bool \| cdktf.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.options">options</a></code> | <code>typing.Mapping[str]</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.pluginVersion">plugin_version</a></code> | <code>str</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.Initializer.parameter.sealWrap">seal_wrap</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.path"></a>

- *Type:* str

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#path Mount#path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.type"></a>

- *Type:* str

Type of the backend, such as 'aws'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#type Mount#type}

---

##### `allowed_managed_keys`<sup>Optional</sup> <a name="allowed_managed_keys" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.allowedManagedKeys"></a>

- *Type:* typing.List[str]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#allowed_managed_keys Mount#allowed_managed_keys}

---

##### `allowed_response_headers`<sup>Optional</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.allowedResponseHeaders"></a>

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#allowed_response_headers Mount#allowed_response_headers}

---

##### `audit_non_hmac_request_keys`<sup>Optional</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.auditNonHmacRequestKeys"></a>

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#audit_non_hmac_request_keys Mount#audit_non_hmac_request_keys}

---

##### `audit_non_hmac_response_keys`<sup>Optional</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.auditNonHmacResponseKeys"></a>

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#audit_non_hmac_response_keys Mount#audit_non_hmac_response_keys}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#default_lease_ttl_seconds Mount#default_lease_ttl_seconds}

---

##### `delegated_auth_accessors`<sup>Optional</sup> <a name="delegated_auth_accessors" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.delegatedAuthAccessors"></a>

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#delegated_auth_accessors Mount#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.description"></a>

- *Type:* str

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#description Mount#description}

---

##### `external_entropy_access`<sup>Optional</sup> <a name="external_entropy_access" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.externalEntropyAccess"></a>

- *Type:* bool | cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#external_entropy_access Mount#external_entropy_access}

---

##### `force_no_cache`<sup>Optional</sup> <a name="force_no_cache" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.forceNoCache"></a>

- *Type:* bool | cdktf.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#force_no_cache Mount#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#id Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_token_key`<sup>Optional</sup> <a name="identity_token_key" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.identityTokenKey"></a>

- *Type:* str

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#identity_token_key Mount#identity_token_key}

---

##### `listing_visibility`<sup>Optional</sup> <a name="listing_visibility" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.listingVisibility"></a>

- *Type:* str

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#listing_visibility Mount#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.local"></a>

- *Type:* bool | cdktf.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#local Mount#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#max_lease_ttl_seconds Mount#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#namespace Mount#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.options"></a>

- *Type:* typing.Mapping[str]

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#options Mount#options}

---

##### `passthrough_request_headers`<sup>Optional</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.passthroughRequestHeaders"></a>

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#passthrough_request_headers Mount#passthrough_request_headers}

---

##### `plugin_version`<sup>Optional</sup> <a name="plugin_version" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.pluginVersion"></a>

- *Type:* str

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#plugin_version Mount#plugin_version}

---

##### `seal_wrap`<sup>Optional</sup> <a name="seal_wrap" id="@cdktf/provider-vault.mount.Mount.Initializer.parameter.sealWrap"></a>

- *Type:* bool | cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#seal_wrap Mount#seal_wrap}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mount.Mount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetAllowedManagedKeys">reset_allowed_managed_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetAllowedResponseHeaders">reset_allowed_response_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetAuditNonHmacRequestKeys">reset_audit_non_hmac_request_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetAuditNonHmacResponseKeys">reset_audit_non_hmac_response_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetDefaultLeaseTtlSeconds">reset_default_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetDelegatedAuthAccessors">reset_delegated_auth_accessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetExternalEntropyAccess">reset_external_entropy_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetForceNoCache">reset_force_no_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetIdentityTokenKey">reset_identity_token_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetListingVisibility">reset_listing_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetLocal">reset_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetMaxLeaseTtlSeconds">reset_max_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetPassthroughRequestHeaders">reset_passthrough_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetPluginVersion">reset_plugin_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.resetSealWrap">reset_seal_wrap</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.mount.Mount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.mount.Mount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.mount.Mount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.mount.Mount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.mount.Mount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.mount.Mount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.mount.Mount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.mount.Mount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.mount.Mount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.mount.Mount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.mount.Mount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.mount.Mount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.mount.Mount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mount.Mount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.mount.Mount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mount.Mount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.mount.Mount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mount.Mount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.mount.Mount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mount.Mount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.mount.Mount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mount.Mount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.mount.Mount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mount.Mount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.mount.Mount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mount.Mount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.mount.Mount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mount.Mount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.mount.Mount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mount.Mount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.mount.Mount.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.mount.Mount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mount.Mount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mount.Mount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.mount.Mount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mount.Mount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.mount.Mount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mount.Mount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.mount.Mount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.mount.Mount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.mount.Mount.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.mount.Mount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mount.Mount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_managed_keys` <a name="reset_allowed_managed_keys" id="@cdktf/provider-vault.mount.Mount.resetAllowedManagedKeys"></a>

```python
def reset_allowed_managed_keys() -> None
```

##### `reset_allowed_response_headers` <a name="reset_allowed_response_headers" id="@cdktf/provider-vault.mount.Mount.resetAllowedResponseHeaders"></a>

```python
def reset_allowed_response_headers() -> None
```

##### `reset_audit_non_hmac_request_keys` <a name="reset_audit_non_hmac_request_keys" id="@cdktf/provider-vault.mount.Mount.resetAuditNonHmacRequestKeys"></a>

```python
def reset_audit_non_hmac_request_keys() -> None
```

##### `reset_audit_non_hmac_response_keys` <a name="reset_audit_non_hmac_response_keys" id="@cdktf/provider-vault.mount.Mount.resetAuditNonHmacResponseKeys"></a>

```python
def reset_audit_non_hmac_response_keys() -> None
```

##### `reset_default_lease_ttl_seconds` <a name="reset_default_lease_ttl_seconds" id="@cdktf/provider-vault.mount.Mount.resetDefaultLeaseTtlSeconds"></a>

```python
def reset_default_lease_ttl_seconds() -> None
```

##### `reset_delegated_auth_accessors` <a name="reset_delegated_auth_accessors" id="@cdktf/provider-vault.mount.Mount.resetDelegatedAuthAccessors"></a>

```python
def reset_delegated_auth_accessors() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.mount.Mount.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_external_entropy_access` <a name="reset_external_entropy_access" id="@cdktf/provider-vault.mount.Mount.resetExternalEntropyAccess"></a>

```python
def reset_external_entropy_access() -> None
```

##### `reset_force_no_cache` <a name="reset_force_no_cache" id="@cdktf/provider-vault.mount.Mount.resetForceNoCache"></a>

```python
def reset_force_no_cache() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.mount.Mount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_token_key` <a name="reset_identity_token_key" id="@cdktf/provider-vault.mount.Mount.resetIdentityTokenKey"></a>

```python
def reset_identity_token_key() -> None
```

##### `reset_listing_visibility` <a name="reset_listing_visibility" id="@cdktf/provider-vault.mount.Mount.resetListingVisibility"></a>

```python
def reset_listing_visibility() -> None
```

##### `reset_local` <a name="reset_local" id="@cdktf/provider-vault.mount.Mount.resetLocal"></a>

```python
def reset_local() -> None
```

##### `reset_max_lease_ttl_seconds` <a name="reset_max_lease_ttl_seconds" id="@cdktf/provider-vault.mount.Mount.resetMaxLeaseTtlSeconds"></a>

```python
def reset_max_lease_ttl_seconds() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.mount.Mount.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-vault.mount.Mount.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_passthrough_request_headers` <a name="reset_passthrough_request_headers" id="@cdktf/provider-vault.mount.Mount.resetPassthroughRequestHeaders"></a>

```python
def reset_passthrough_request_headers() -> None
```

##### `reset_plugin_version` <a name="reset_plugin_version" id="@cdktf/provider-vault.mount.Mount.resetPluginVersion"></a>

```python
def reset_plugin_version() -> None
```

##### `reset_seal_wrap` <a name="reset_seal_wrap" id="@cdktf/provider-vault.mount.Mount.resetSealWrap"></a>

```python
def reset_seal_wrap() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mount.Mount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Mount resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.mount.Mount.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import mount

mount.Mount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mount.Mount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.mount.Mount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import mount

mount.Mount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mount.Mount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.mount.Mount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import mount

mount.Mount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mount.Mount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.mount.Mount.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import mount

mount.Mount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Mount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mount.Mount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.mount.Mount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Mount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.mount.Mount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Mount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mount.Mount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Mount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.allowedManagedKeysInput">allowed_managed_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.allowedResponseHeadersInput">allowed_response_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.auditNonHmacRequestKeysInput">audit_non_hmac_request_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.auditNonHmacResponseKeysInput">audit_non_hmac_response_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.defaultLeaseTtlSecondsInput">default_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.delegatedAuthAccessorsInput">delegated_auth_accessors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.externalEntropyAccessInput">external_entropy_access_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.forceNoCacheInput">force_no_cache_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.identityTokenKeyInput">identity_token_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.listingVisibilityInput">listing_visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.localInput">local_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.maxLeaseTtlSecondsInput">max_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.passthroughRequestHeadersInput">passthrough_request_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.pluginVersionInput">plugin_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.sealWrapInput">seal_wrap_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.delegatedAuthAccessors">delegated_auth_accessors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.externalEntropyAccess">external_entropy_access</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.forceNoCache">force_no_cache</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.identityTokenKey">identity_token_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.listingVisibility">listing_visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.local">local</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.pluginVersion">plugin_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.sealWrap">seal_wrap</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.mount.Mount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.mount.Mount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.mount.Mount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.mount.Mount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.mount.Mount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.mount.Mount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.mount.Mount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mount.Mount.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mount.Mount.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.mount.Mount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.mount.Mount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mount.Mount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mount.Mount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mount.Mount.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.mount.Mount.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `allowed_managed_keys_input`<sup>Optional</sup> <a name="allowed_managed_keys_input" id="@cdktf/provider-vault.mount.Mount.property.allowedManagedKeysInput"></a>

```python
allowed_managed_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_response_headers_input`<sup>Optional</sup> <a name="allowed_response_headers_input" id="@cdktf/provider-vault.mount.Mount.property.allowedResponseHeadersInput"></a>

```python
allowed_response_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_request_keys_input" id="@cdktf/provider-vault.mount.Mount.property.auditNonHmacRequestKeysInput"></a>

```python
audit_non_hmac_request_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_response_keys_input" id="@cdktf/provider-vault.mount.Mount.property.auditNonHmacResponseKeysInput"></a>

```python
audit_non_hmac_response_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_lease_ttl_seconds_input`<sup>Optional</sup> <a name="default_lease_ttl_seconds_input" id="@cdktf/provider-vault.mount.Mount.property.defaultLeaseTtlSecondsInput"></a>

```python
default_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delegated_auth_accessors_input`<sup>Optional</sup> <a name="delegated_auth_accessors_input" id="@cdktf/provider-vault.mount.Mount.property.delegatedAuthAccessorsInput"></a>

```python
delegated_auth_accessors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.mount.Mount.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `external_entropy_access_input`<sup>Optional</sup> <a name="external_entropy_access_input" id="@cdktf/provider-vault.mount.Mount.property.externalEntropyAccessInput"></a>

```python
external_entropy_access_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `force_no_cache_input`<sup>Optional</sup> <a name="force_no_cache_input" id="@cdktf/provider-vault.mount.Mount.property.forceNoCacheInput"></a>

```python
force_no_cache_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `identity_token_key_input`<sup>Optional</sup> <a name="identity_token_key_input" id="@cdktf/provider-vault.mount.Mount.property.identityTokenKeyInput"></a>

```python
identity_token_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.mount.Mount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listing_visibility_input`<sup>Optional</sup> <a name="listing_visibility_input" id="@cdktf/provider-vault.mount.Mount.property.listingVisibilityInput"></a>

```python
listing_visibility_input: str
```

- *Type:* str

---

##### `local_input`<sup>Optional</sup> <a name="local_input" id="@cdktf/provider-vault.mount.Mount.property.localInput"></a>

```python
local_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_lease_ttl_seconds_input`<sup>Optional</sup> <a name="max_lease_ttl_seconds_input" id="@cdktf/provider-vault.mount.Mount.property.maxLeaseTtlSecondsInput"></a>

```python
max_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.mount.Mount.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-vault.mount.Mount.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `passthrough_request_headers_input`<sup>Optional</sup> <a name="passthrough_request_headers_input" id="@cdktf/provider-vault.mount.Mount.property.passthroughRequestHeadersInput"></a>

```python
passthrough_request_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.mount.Mount.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `plugin_version_input`<sup>Optional</sup> <a name="plugin_version_input" id="@cdktf/provider-vault.mount.Mount.property.pluginVersionInput"></a>

```python
plugin_version_input: str
```

- *Type:* str

---

##### `seal_wrap_input`<sup>Optional</sup> <a name="seal_wrap_input" id="@cdktf/provider-vault.mount.Mount.property.sealWrapInput"></a>

```python
seal_wrap_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vault.mount.Mount.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `allowed_managed_keys`<sup>Required</sup> <a name="allowed_managed_keys" id="@cdktf/provider-vault.mount.Mount.property.allowedManagedKeys"></a>

```python
allowed_managed_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_response_headers`<sup>Required</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.mount.Mount.property.allowedResponseHeaders"></a>

```python
allowed_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys`<sup>Required</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.mount.Mount.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys`<sup>Required</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.mount.Mount.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_lease_ttl_seconds`<sup>Required</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.mount.Mount.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delegated_auth_accessors`<sup>Required</sup> <a name="delegated_auth_accessors" id="@cdktf/provider-vault.mount.Mount.property.delegatedAuthAccessors"></a>

```python
delegated_auth_accessors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.mount.Mount.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_entropy_access`<sup>Required</sup> <a name="external_entropy_access" id="@cdktf/provider-vault.mount.Mount.property.externalEntropyAccess"></a>

```python
external_entropy_access: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `force_no_cache`<sup>Required</sup> <a name="force_no_cache" id="@cdktf/provider-vault.mount.Mount.property.forceNoCache"></a>

```python
force_no_cache: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mount.Mount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_token_key`<sup>Required</sup> <a name="identity_token_key" id="@cdktf/provider-vault.mount.Mount.property.identityTokenKey"></a>

```python
identity_token_key: str
```

- *Type:* str

---

##### `listing_visibility`<sup>Required</sup> <a name="listing_visibility" id="@cdktf/provider-vault.mount.Mount.property.listingVisibility"></a>

```python
listing_visibility: str
```

- *Type:* str

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.mount.Mount.property.local"></a>

```python
local: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_lease_ttl_seconds`<sup>Required</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.mount.Mount.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.mount.Mount.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.mount.Mount.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `passthrough_request_headers`<sup>Required</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.mount.Mount.property.passthroughRequestHeaders"></a>

```python
passthrough_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.mount.Mount.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `plugin_version`<sup>Required</sup> <a name="plugin_version" id="@cdktf/provider-vault.mount.Mount.property.pluginVersion"></a>

```python
plugin_version: str
```

- *Type:* str

---

##### `seal_wrap`<sup>Required</sup> <a name="seal_wrap" id="@cdktf/provider-vault.mount.Mount.property.sealWrap"></a>

```python
seal_wrap: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.mount.Mount.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mount.Mount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.mount.Mount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MountConfig <a name="MountConfig" id="@cdktf/provider-vault.mount.MountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.mount.MountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import mount

mount.MountConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  path: str,
  type: str,
  allowed_managed_keys: typing.List[str] = None,
  allowed_response_headers: typing.List[str] = None,
  audit_non_hmac_request_keys: typing.List[str] = None,
  audit_non_hmac_response_keys: typing.List[str] = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  delegated_auth_accessors: typing.List[str] = None,
  description: str = None,
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
  plugin_version: str = None,
  seal_wrap: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.path">path</a></code> | <code>str</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.type">type</a></code> | <code>str</code> | Type of the backend, such as 'aws'. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.delegatedAuthAccessors">delegated_auth_accessors</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.description">description</a></code> | <code>str</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.externalEntropyAccess">external_entropy_access</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.forceNoCache">force_no_cache</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#id Mount#id}. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.identityTokenKey">identity_token_key</a></code> | <code>str</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.listingVisibility">listing_visibility</a></code> | <code>str</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.local">local</a></code> | <code>bool \| cdktf.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.pluginVersion">plugin_version</a></code> | <code>str</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.mount.MountConfig.property.sealWrap">seal_wrap</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mount.MountConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mount.MountConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.mount.MountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.mount.MountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mount.MountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mount.MountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mount.MountConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.mount.MountConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#path Mount#path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.mount.MountConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the backend, such as 'aws'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#type Mount#type}

---

##### `allowed_managed_keys`<sup>Optional</sup> <a name="allowed_managed_keys" id="@cdktf/provider-vault.mount.MountConfig.property.allowedManagedKeys"></a>

```python
allowed_managed_keys: typing.List[str]
```

- *Type:* typing.List[str]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#allowed_managed_keys Mount#allowed_managed_keys}

---

##### `allowed_response_headers`<sup>Optional</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.mount.MountConfig.property.allowedResponseHeaders"></a>

```python
allowed_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#allowed_response_headers Mount#allowed_response_headers}

---

##### `audit_non_hmac_request_keys`<sup>Optional</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.mount.MountConfig.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#audit_non_hmac_request_keys Mount#audit_non_hmac_request_keys}

---

##### `audit_non_hmac_response_keys`<sup>Optional</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.mount.MountConfig.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#audit_non_hmac_response_keys Mount#audit_non_hmac_response_keys}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.mount.MountConfig.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#default_lease_ttl_seconds Mount#default_lease_ttl_seconds}

---

##### `delegated_auth_accessors`<sup>Optional</sup> <a name="delegated_auth_accessors" id="@cdktf/provider-vault.mount.MountConfig.property.delegatedAuthAccessors"></a>

```python
delegated_auth_accessors: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#delegated_auth_accessors Mount#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.mount.MountConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#description Mount#description}

---

##### `external_entropy_access`<sup>Optional</sup> <a name="external_entropy_access" id="@cdktf/provider-vault.mount.MountConfig.property.externalEntropyAccess"></a>

```python
external_entropy_access: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#external_entropy_access Mount#external_entropy_access}

---

##### `force_no_cache`<sup>Optional</sup> <a name="force_no_cache" id="@cdktf/provider-vault.mount.MountConfig.property.forceNoCache"></a>

```python
force_no_cache: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#force_no_cache Mount#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.mount.MountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#id Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_token_key`<sup>Optional</sup> <a name="identity_token_key" id="@cdktf/provider-vault.mount.MountConfig.property.identityTokenKey"></a>

```python
identity_token_key: str
```

- *Type:* str

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#identity_token_key Mount#identity_token_key}

---

##### `listing_visibility`<sup>Optional</sup> <a name="listing_visibility" id="@cdktf/provider-vault.mount.MountConfig.property.listingVisibility"></a>

```python
listing_visibility: str
```

- *Type:* str

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#listing_visibility Mount#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.mount.MountConfig.property.local"></a>

```python
local: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#local Mount#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.mount.MountConfig.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#max_lease_ttl_seconds Mount#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.mount.MountConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#namespace Mount#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.mount.MountConfig.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#options Mount#options}

---

##### `passthrough_request_headers`<sup>Optional</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.mount.MountConfig.property.passthroughRequestHeaders"></a>

```python
passthrough_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#passthrough_request_headers Mount#passthrough_request_headers}

---

##### `plugin_version`<sup>Optional</sup> <a name="plugin_version" id="@cdktf/provider-vault.mount.MountConfig.property.pluginVersion"></a>

```python
plugin_version: str
```

- *Type:* str

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#plugin_version Mount#plugin_version}

---

##### `seal_wrap`<sup>Optional</sup> <a name="seal_wrap" id="@cdktf/provider-vault.mount.MountConfig.property.sealWrap"></a>

```python
seal_wrap: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/mount#seal_wrap Mount#seal_wrap}

---



