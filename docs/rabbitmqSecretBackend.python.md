# `rabbitmqSecretBackend` Submodule <a name="`rabbitmqSecretBackend` Submodule" id="@cdktf/provider-vault.rabbitmqSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RabbitmqSecretBackend <a name="RabbitmqSecretBackend" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend vault_rabbitmq_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend

rabbitmqSecretBackend.RabbitmqSecretBackend(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_uri: str,
  password: str,
  username: str,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  id: str = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  password_policy: str = None,
  path: str = None,
  username_template: str = None,
  verify_connection: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.connectionUri">connection_uri</a></code> | <code>str</code> | Specifies the RabbitMQ connection URI. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.password">password</a></code> | <code>str</code> | Specifies the RabbitMQ management administrator password. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.username">username</a></code> | <code>str</code> | Specifies the RabbitMQ management administrator username. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#id RabbitmqSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.passwordPolicy">password_policy</a></code> | <code>str</code> | Specifies a password policy to use when creating dynamic credentials. Defaults to generating an alphanumeric password if not set. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.path">path</a></code> | <code>str</code> | The path of the RabbitMQ Secret Backend where the connection should be configured. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.usernameTemplate">username_template</a></code> | <code>str</code> | Template describing how dynamic usernames are generated. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.verifyConnection">verify_connection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to verify connection URI, username, and password. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_uri`<sup>Required</sup> <a name="connection_uri" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.connectionUri"></a>

- *Type:* str

Specifies the RabbitMQ connection URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#connection_uri RabbitmqSecretBackend#connection_uri}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.password"></a>

- *Type:* str

Specifies the RabbitMQ management administrator password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#password RabbitmqSecretBackend#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.username"></a>

- *Type:* str

Specifies the RabbitMQ management administrator username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#username RabbitmqSecretBackend#username}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#default_lease_ttl_seconds RabbitmqSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.description"></a>

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#description RabbitmqSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#disable_remount RabbitmqSecretBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#id RabbitmqSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#max_lease_ttl_seconds RabbitmqSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#namespace RabbitmqSecretBackend#namespace}

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.passwordPolicy"></a>

- *Type:* str

Specifies a password policy to use when creating dynamic credentials. Defaults to generating an alphanumeric password if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#password_policy RabbitmqSecretBackend#password_policy}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.path"></a>

- *Type:* str

The path of the RabbitMQ Secret Backend where the connection should be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#path RabbitmqSecretBackend#path}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.usernameTemplate"></a>

- *Type:* str

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#username_template RabbitmqSecretBackend#username_template}

---

##### `verify_connection`<sup>Optional</sup> <a name="verify_connection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.verifyConnection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to verify connection URI, username, and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#verify_connection RabbitmqSecretBackend#verify_connection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDefaultLeaseTtlSeconds">reset_default_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDisableRemount">reset_disable_remount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetMaxLeaseTtlSeconds">reset_max_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPasswordPolicy">reset_password_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetVerifyConnection">reset_verify_connection</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_default_lease_ttl_seconds` <a name="reset_default_lease_ttl_seconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```python
def reset_default_lease_ttl_seconds() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_remount` <a name="reset_disable_remount" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDisableRemount"></a>

```python
def reset_disable_remount() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_lease_ttl_seconds` <a name="reset_max_lease_ttl_seconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetMaxLeaseTtlSeconds"></a>

```python
def reset_max_lease_ttl_seconds() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_password_policy` <a name="reset_password_policy" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPasswordPolicy"></a>

```python
def reset_password_policy() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```

##### `reset_verify_connection` <a name="reset_verify_connection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetVerifyConnection"></a>

```python
def reset_verify_connection() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RabbitmqSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend

rabbitmqSecretBackend.RabbitmqSecretBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend

rabbitmqSecretBackend.RabbitmqSecretBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend

rabbitmqSecretBackend.RabbitmqSecretBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend

rabbitmqSecretBackend.RabbitmqSecretBackend.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RabbitmqSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RabbitmqSecretBackend to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RabbitmqSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RabbitmqSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUriInput">connection_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSecondsInput">default_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemountInput">disable_remount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSecondsInput">max_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicyInput">password_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnectionInput">verify_connection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUri">connection_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicy">password_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnection">verify_connection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_uri_input`<sup>Optional</sup> <a name="connection_uri_input" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUriInput"></a>

```python
connection_uri_input: str
```

- *Type:* str

---

##### `default_lease_ttl_seconds_input`<sup>Optional</sup> <a name="default_lease_ttl_seconds_input" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```python
default_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_remount_input`<sup>Optional</sup> <a name="disable_remount_input" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemountInput"></a>

```python
disable_remount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_lease_ttl_seconds_input`<sup>Optional</sup> <a name="max_lease_ttl_seconds_input" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```python
max_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `password_policy_input`<sup>Optional</sup> <a name="password_policy_input" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicyInput"></a>

```python
password_policy_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `verify_connection_input`<sup>Optional</sup> <a name="verify_connection_input" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnectionInput"></a>

```python
verify_connection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connection_uri`<sup>Required</sup> <a name="connection_uri" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUri"></a>

```python
connection_uri: str
```

- *Type:* str

---

##### `default_lease_ttl_seconds`<sup>Required</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_remount`<sup>Required</sup> <a name="disable_remount" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_lease_ttl_seconds`<sup>Required</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_policy`<sup>Required</sup> <a name="password_policy" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicy"></a>

```python
password_policy: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

##### `verify_connection`<sup>Required</sup> <a name="verify_connection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnection"></a>

```python
verify_connection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RabbitmqSecretBackendConfig <a name="RabbitmqSecretBackendConfig" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend

rabbitmqSecretBackend.RabbitmqSecretBackendConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_uri: str,
  password: str,
  username: str,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  id: str = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  password_policy: str = None,
  path: str = None,
  username_template: str = None,
  verify_connection: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connectionUri">connection_uri</a></code> | <code>str</code> | Specifies the RabbitMQ connection URI. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.password">password</a></code> | <code>str</code> | Specifies the RabbitMQ management administrator password. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.username">username</a></code> | <code>str</code> | Specifies the RabbitMQ management administrator username. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#id RabbitmqSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.passwordPolicy">password_policy</a></code> | <code>str</code> | Specifies a password policy to use when creating dynamic credentials. Defaults to generating an alphanumeric password if not set. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.path">path</a></code> | <code>str</code> | The path of the RabbitMQ Secret Backend where the connection should be configured. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.usernameTemplate">username_template</a></code> | <code>str</code> | Template describing how dynamic usernames are generated. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.verifyConnection">verify_connection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to verify connection URI, username, and password. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_uri`<sup>Required</sup> <a name="connection_uri" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connectionUri"></a>

```python
connection_uri: str
```

- *Type:* str

Specifies the RabbitMQ connection URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#connection_uri RabbitmqSecretBackend#connection_uri}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Specifies the RabbitMQ management administrator password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#password RabbitmqSecretBackend#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Specifies the RabbitMQ management administrator username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#username RabbitmqSecretBackend#username}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#default_lease_ttl_seconds RabbitmqSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#description RabbitmqSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#disable_remount RabbitmqSecretBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#id RabbitmqSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#max_lease_ttl_seconds RabbitmqSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#namespace RabbitmqSecretBackend#namespace}

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.passwordPolicy"></a>

```python
password_policy: str
```

- *Type:* str

Specifies a password policy to use when creating dynamic credentials. Defaults to generating an alphanumeric password if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#password_policy RabbitmqSecretBackend#password_policy}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The path of the RabbitMQ Secret Backend where the connection should be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#path RabbitmqSecretBackend#path}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#username_template RabbitmqSecretBackend#username_template}

---

##### `verify_connection`<sup>Optional</sup> <a name="verify_connection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.verifyConnection"></a>

```python
verify_connection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to verify connection URI, username, and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/rabbitmq_secret_backend#verify_connection RabbitmqSecretBackend#verify_connection}

---



