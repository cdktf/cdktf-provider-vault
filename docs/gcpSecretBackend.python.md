# `gcpSecretBackend` Submodule <a name="`gcpSecretBackend` Submodule" id="@cdktf/provider-vault.gcpSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretBackend <a name="GcpSecretBackend" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend vault_gcp_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_backend

gcpSecretBackend.GcpSecretBackend(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credentials: str = None,
  credentials_wo: str = None,
  credentials_wo_version: typing.Union[int, float] = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  description: str = None,
  disable_automated_rotation: typing.Union[bool, IResolvable] = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity_token_audience: str = None,
  identity_token_key: str = None,
  identity_token_ttl: typing.Union[int, float] = None,
  local: typing.Union[bool, IResolvable] = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  path: str = None,
  rotation_period: typing.Union[int, float] = None,
  rotation_schedule: str = None,
  rotation_window: typing.Union[int, float] = None,
  service_account_email: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.credentials">credentials</a></code> | <code>str</code> | JSON-encoded credentials to use to connect to GCP. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.credentialsWo">credentials_wo</a></code> | <code>str</code> | Write-only JSON-encoded credentials to use to connect to GCP. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.credentialsWoVersion">credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for write-only JSON-encoded credentials. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.disableAutomatedRotation">disable_automated_rotation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#id GcpSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.identityTokenAudience">identity_token_audience</a></code> | <code>str</code> | The audience claim value for plugin identity tokens. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.identityTokenKey">identity_token_key</a></code> | <code>str</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.identityTokenTtl">identity_token_ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL of generated tokens. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.path">path</a></code> | <code>str</code> | Path to mount the backend at. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.rotationSchedule">rotation_schedule</a></code> | <code>str</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.rotationWindow">rotation_window</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | Service Account to impersonate for plugin workload identity federation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.credentials"></a>

- *Type:* str

JSON-encoded credentials to use to connect to GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#credentials GcpSecretBackend#credentials}

---

##### `credentials_wo`<sup>Optional</sup> <a name="credentials_wo" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.credentialsWo"></a>

- *Type:* str

Write-only JSON-encoded credentials to use to connect to GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#credentials_wo GcpSecretBackend#credentials_wo}

---

##### `credentials_wo_version`<sup>Optional</sup> <a name="credentials_wo_version" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.credentialsWoVersion"></a>

- *Type:* typing.Union[int, float]

Version counter for write-only JSON-encoded credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#credentials_wo_version GcpSecretBackend#credentials_wo_version}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#default_lease_ttl_seconds GcpSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.description"></a>

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#description GcpSecretBackend#description}

---

##### `disable_automated_rotation`<sup>Optional</sup> <a name="disable_automated_rotation" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.disableAutomatedRotation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#disable_automated_rotation GcpSecretBackend#disable_automated_rotation}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#disable_remount GcpSecretBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#id GcpSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_token_audience`<sup>Optional</sup> <a name="identity_token_audience" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.identityTokenAudience"></a>

- *Type:* str

The audience claim value for plugin identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#identity_token_audience GcpSecretBackend#identity_token_audience}

---

##### `identity_token_key`<sup>Optional</sup> <a name="identity_token_key" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.identityTokenKey"></a>

- *Type:* str

The key to use for signing identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#identity_token_key GcpSecretBackend#identity_token_key}

---

##### `identity_token_ttl`<sup>Optional</sup> <a name="identity_token_ttl" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.identityTokenTtl"></a>

- *Type:* typing.Union[int, float]

The TTL of generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#identity_token_ttl GcpSecretBackend#identity_token_ttl}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.local"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#local GcpSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#max_lease_ttl_seconds GcpSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#namespace GcpSecretBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.path"></a>

- *Type:* str

Path to mount the backend at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#path GcpSecretBackend#path}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.rotationPeriod"></a>

- *Type:* typing.Union[int, float]

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#rotation_period GcpSecretBackend#rotation_period}

---

##### `rotation_schedule`<sup>Optional</sup> <a name="rotation_schedule" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.rotationSchedule"></a>

- *Type:* str

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#rotation_schedule GcpSecretBackend#rotation_schedule}

---

##### `rotation_window`<sup>Optional</sup> <a name="rotation_window" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.rotationWindow"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#rotation_window GcpSecretBackend#rotation_window}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.serviceAccountEmail"></a>

- *Type:* str

Service Account to impersonate for plugin workload identity federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#service_account_email GcpSecretBackend#service_account_email}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetCredentialsWo">reset_credentials_wo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetCredentialsWoVersion">reset_credentials_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDefaultLeaseTtlSeconds">reset_default_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDisableAutomatedRotation">reset_disable_automated_rotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDisableRemount">reset_disable_remount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetIdentityTokenAudience">reset_identity_token_audience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetIdentityTokenKey">reset_identity_token_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetIdentityTokenTtl">reset_identity_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetLocal">reset_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetMaxLeaseTtlSeconds">reset_max_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetRotationPeriod">reset_rotation_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetRotationSchedule">reset_rotation_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetRotationWindow">reset_rotation_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetServiceAccountEmail">reset_service_account_email</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_credentials` <a name="reset_credentials" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_credentials_wo` <a name="reset_credentials_wo" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetCredentialsWo"></a>

```python
def reset_credentials_wo() -> None
```

##### `reset_credentials_wo_version` <a name="reset_credentials_wo_version" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetCredentialsWoVersion"></a>

```python
def reset_credentials_wo_version() -> None
```

##### `reset_default_lease_ttl_seconds` <a name="reset_default_lease_ttl_seconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```python
def reset_default_lease_ttl_seconds() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_automated_rotation` <a name="reset_disable_automated_rotation" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDisableAutomatedRotation"></a>

```python
def reset_disable_automated_rotation() -> None
```

##### `reset_disable_remount` <a name="reset_disable_remount" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDisableRemount"></a>

```python
def reset_disable_remount() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_token_audience` <a name="reset_identity_token_audience" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetIdentityTokenAudience"></a>

```python
def reset_identity_token_audience() -> None
```

##### `reset_identity_token_key` <a name="reset_identity_token_key" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetIdentityTokenKey"></a>

```python
def reset_identity_token_key() -> None
```

##### `reset_identity_token_ttl` <a name="reset_identity_token_ttl" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetIdentityTokenTtl"></a>

```python
def reset_identity_token_ttl() -> None
```

##### `reset_local` <a name="reset_local" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetLocal"></a>

```python
def reset_local() -> None
```

##### `reset_max_lease_ttl_seconds` <a name="reset_max_lease_ttl_seconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetMaxLeaseTtlSeconds"></a>

```python
def reset_max_lease_ttl_seconds() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_rotation_period` <a name="reset_rotation_period" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetRotationPeriod"></a>

```python
def reset_rotation_period() -> None
```

##### `reset_rotation_schedule` <a name="reset_rotation_schedule" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetRotationSchedule"></a>

```python
def reset_rotation_schedule() -> None
```

##### `reset_rotation_window` <a name="reset_rotation_window" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetRotationWindow"></a>

```python
def reset_rotation_window() -> None
```

##### `reset_service_account_email` <a name="reset_service_account_email" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetServiceAccountEmail"></a>

```python
def reset_service_account_email() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GcpSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_backend

gcpSecretBackend.GcpSecretBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_backend

gcpSecretBackend.GcpSecretBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_backend

gcpSecretBackend.GcpSecretBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_backend

gcpSecretBackend.GcpSecretBackend.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GcpSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GcpSecretBackend to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GcpSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GcpSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentialsInput">credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentialsWoInput">credentials_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentialsWoVersionInput">credentials_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.defaultLeaseTtlSecondsInput">default_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableAutomatedRotationInput">disable_automated_rotation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableRemountInput">disable_remount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenAudienceInput">identity_token_audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenKeyInput">identity_token_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenTtlInput">identity_token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.localInput">local_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.maxLeaseTtlSecondsInput">max_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationPeriodInput">rotation_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationScheduleInput">rotation_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationWindowInput">rotation_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentials">credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentialsWo">credentials_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentialsWoVersion">credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableAutomatedRotation">disable_automated_rotation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenAudience">identity_token_audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenKey">identity_token_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenTtl">identity_token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationSchedule">rotation_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationWindow">rotation_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentialsInput"></a>

```python
credentials_input: str
```

- *Type:* str

---

##### `credentials_wo_input`<sup>Optional</sup> <a name="credentials_wo_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentialsWoInput"></a>

```python
credentials_wo_input: str
```

- *Type:* str

---

##### `credentials_wo_version_input`<sup>Optional</sup> <a name="credentials_wo_version_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentialsWoVersionInput"></a>

```python
credentials_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_lease_ttl_seconds_input`<sup>Optional</sup> <a name="default_lease_ttl_seconds_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```python
default_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_automated_rotation_input`<sup>Optional</sup> <a name="disable_automated_rotation_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableAutomatedRotationInput"></a>

```python
disable_automated_rotation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_remount_input`<sup>Optional</sup> <a name="disable_remount_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableRemountInput"></a>

```python
disable_remount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_token_audience_input`<sup>Optional</sup> <a name="identity_token_audience_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenAudienceInput"></a>

```python
identity_token_audience_input: str
```

- *Type:* str

---

##### `identity_token_key_input`<sup>Optional</sup> <a name="identity_token_key_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenKeyInput"></a>

```python
identity_token_key_input: str
```

- *Type:* str

---

##### `identity_token_ttl_input`<sup>Optional</sup> <a name="identity_token_ttl_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenTtlInput"></a>

```python
identity_token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_input`<sup>Optional</sup> <a name="local_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.localInput"></a>

```python
local_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_lease_ttl_seconds_input`<sup>Optional</sup> <a name="max_lease_ttl_seconds_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```python
max_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `rotation_period_input`<sup>Optional</sup> <a name="rotation_period_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationPeriodInput"></a>

```python
rotation_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_schedule_input`<sup>Optional</sup> <a name="rotation_schedule_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationScheduleInput"></a>

```python
rotation_schedule_input: str
```

- *Type:* str

---

##### `rotation_window_input`<sup>Optional</sup> <a name="rotation_window_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationWindowInput"></a>

```python
rotation_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

---

##### `credentials_wo`<sup>Required</sup> <a name="credentials_wo" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentialsWo"></a>

```python
credentials_wo: str
```

- *Type:* str

---

##### `credentials_wo_version`<sup>Required</sup> <a name="credentials_wo_version" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentialsWoVersion"></a>

```python
credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_lease_ttl_seconds`<sup>Required</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_automated_rotation`<sup>Required</sup> <a name="disable_automated_rotation" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableAutomatedRotation"></a>

```python
disable_automated_rotation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_remount`<sup>Required</sup> <a name="disable_remount" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_token_audience`<sup>Required</sup> <a name="identity_token_audience" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenAudience"></a>

```python
identity_token_audience: str
```

- *Type:* str

---

##### `identity_token_key`<sup>Required</sup> <a name="identity_token_key" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenKey"></a>

```python
identity_token_key: str
```

- *Type:* str

---

##### `identity_token_ttl`<sup>Required</sup> <a name="identity_token_ttl" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenTtl"></a>

```python
identity_token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.local"></a>

```python
local: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_lease_ttl_seconds`<sup>Required</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationPeriod"></a>

```python
rotation_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_schedule`<sup>Required</sup> <a name="rotation_schedule" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationSchedule"></a>

```python
rotation_schedule: str
```

- *Type:* str

---

##### `rotation_window`<sup>Required</sup> <a name="rotation_window" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationWindow"></a>

```python
rotation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretBackendConfig <a name="GcpSecretBackendConfig" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_backend

gcpSecretBackend.GcpSecretBackendConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credentials: str = None,
  credentials_wo: str = None,
  credentials_wo_version: typing.Union[int, float] = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  description: str = None,
  disable_automated_rotation: typing.Union[bool, IResolvable] = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity_token_audience: str = None,
  identity_token_key: str = None,
  identity_token_ttl: typing.Union[int, float] = None,
  local: typing.Union[bool, IResolvable] = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  path: str = None,
  rotation_period: typing.Union[int, float] = None,
  rotation_schedule: str = None,
  rotation_window: typing.Union[int, float] = None,
  service_account_email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.credentials">credentials</a></code> | <code>str</code> | JSON-encoded credentials to use to connect to GCP. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.credentialsWo">credentials_wo</a></code> | <code>str</code> | Write-only JSON-encoded credentials to use to connect to GCP. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.credentialsWoVersion">credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for write-only JSON-encoded credentials. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.disableAutomatedRotation">disable_automated_rotation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#id GcpSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.identityTokenAudience">identity_token_audience</a></code> | <code>str</code> | The audience claim value for plugin identity tokens. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.identityTokenKey">identity_token_key</a></code> | <code>str</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.identityTokenTtl">identity_token_ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL of generated tokens. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.path">path</a></code> | <code>str</code> | Path to mount the backend at. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.rotationSchedule">rotation_schedule</a></code> | <code>str</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.rotationWindow">rotation_window</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | Service Account to impersonate for plugin workload identity federation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

JSON-encoded credentials to use to connect to GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#credentials GcpSecretBackend#credentials}

---

##### `credentials_wo`<sup>Optional</sup> <a name="credentials_wo" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.credentialsWo"></a>

```python
credentials_wo: str
```

- *Type:* str

Write-only JSON-encoded credentials to use to connect to GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#credentials_wo GcpSecretBackend#credentials_wo}

---

##### `credentials_wo_version`<sup>Optional</sup> <a name="credentials_wo_version" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.credentialsWoVersion"></a>

```python
credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version counter for write-only JSON-encoded credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#credentials_wo_version GcpSecretBackend#credentials_wo_version}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#default_lease_ttl_seconds GcpSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#description GcpSecretBackend#description}

---

##### `disable_automated_rotation`<sup>Optional</sup> <a name="disable_automated_rotation" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.disableAutomatedRotation"></a>

```python
disable_automated_rotation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#disable_automated_rotation GcpSecretBackend#disable_automated_rotation}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#disable_remount GcpSecretBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#id GcpSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_token_audience`<sup>Optional</sup> <a name="identity_token_audience" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.identityTokenAudience"></a>

```python
identity_token_audience: str
```

- *Type:* str

The audience claim value for plugin identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#identity_token_audience GcpSecretBackend#identity_token_audience}

---

##### `identity_token_key`<sup>Optional</sup> <a name="identity_token_key" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.identityTokenKey"></a>

```python
identity_token_key: str
```

- *Type:* str

The key to use for signing identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#identity_token_key GcpSecretBackend#identity_token_key}

---

##### `identity_token_ttl`<sup>Optional</sup> <a name="identity_token_ttl" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.identityTokenTtl"></a>

```python
identity_token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TTL of generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#identity_token_ttl GcpSecretBackend#identity_token_ttl}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.local"></a>

```python
local: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#local GcpSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#max_lease_ttl_seconds GcpSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#namespace GcpSecretBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Path to mount the backend at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#path GcpSecretBackend#path}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.rotationPeriod"></a>

```python
rotation_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#rotation_period GcpSecretBackend#rotation_period}

---

##### `rotation_schedule`<sup>Optional</sup> <a name="rotation_schedule" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.rotationSchedule"></a>

```python
rotation_schedule: str
```

- *Type:* str

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#rotation_schedule GcpSecretBackend#rotation_schedule}

---

##### `rotation_window`<sup>Optional</sup> <a name="rotation_window" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.rotationWindow"></a>

```python
rotation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#rotation_window GcpSecretBackend#rotation_window}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

Service Account to impersonate for plugin workload identity federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/gcp_secret_backend#service_account_email GcpSecretBackend#service_account_email}

---



