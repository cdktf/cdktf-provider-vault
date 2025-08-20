# `rabbitmqSecretBackendRole` Submodule <a name="`rabbitmqSecretBackendRole` Submodule" id="@cdktf/provider-vault.rabbitmqSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RabbitmqSecretBackendRole <a name="RabbitmqSecretBackendRole" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role vault_rabbitmq_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend_role

rabbitmqSecretBackendRole.RabbitmqSecretBackendRole(
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
  name: str,
  id: str = None,
  namespace: str = None,
  tags: str = None,
  vhost: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhost]] = None,
  vhost_topic: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhostTopic]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The path of the Rabbitmq Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#id RabbitmqSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.tags">tags</a></code> | <code>str</code> | Specifies a comma-separated RabbitMQ management tags. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.vhost">vhost</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>]]</code> | vhost block. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.vhostTopic">vhost_topic</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>]]</code> | vhost_topic block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* str

The path of the Rabbitmq Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#backend RabbitmqSecretBackendRole#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* str

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#name RabbitmqSecretBackendRole#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#id RabbitmqSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#namespace RabbitmqSecretBackendRole#namespace}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.tags"></a>

- *Type:* str

Specifies a comma-separated RabbitMQ management tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#tags RabbitmqSecretBackendRole#tags}

---

##### `vhost`<sup>Optional</sup> <a name="vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.vhost"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>]]

vhost block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#vhost RabbitmqSecretBackendRole#vhost}

---

##### `vhost_topic`<sup>Optional</sup> <a name="vhost_topic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.vhostTopic"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>]]

vhost_topic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#vhost_topic RabbitmqSecretBackendRole#vhost_topic}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhost">put_vhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhostTopic">put_vhost_topic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhost">reset_vhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhostTopic">reset_vhost_topic</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_vhost` <a name="put_vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhost"></a>

```python
def put_vhost(
  value: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhost]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhost.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>]]

---

##### `put_vhost_topic` <a name="put_vhost_topic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhostTopic"></a>

```python
def put_vhost_topic(
  value: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhostTopic]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhostTopic.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vhost` <a name="reset_vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhost"></a>

```python
def reset_vhost() -> None
```

##### `reset_vhost_topic` <a name="reset_vhost_topic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhostTopic"></a>

```python
def reset_vhost_topic() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RabbitmqSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend_role

rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend_role

rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend_role

rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend_role

rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RabbitmqSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RabbitmqSecretBackendRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RabbitmqSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RabbitmqSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhost">vhost</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList">RabbitmqSecretBackendRoleVhostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopic">vhost_topic</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList">RabbitmqSecretBackendRoleVhostTopicList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tagsInput">tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostInput">vhost_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopicInput">vhost_topic_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tags">tags</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vhost`<sup>Required</sup> <a name="vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhost"></a>

```python
vhost: RabbitmqSecretBackendRoleVhostList
```

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList">RabbitmqSecretBackendRoleVhostList</a>

---

##### `vhost_topic`<sup>Required</sup> <a name="vhost_topic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopic"></a>

```python
vhost_topic: RabbitmqSecretBackendRoleVhostTopicList
```

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList">RabbitmqSecretBackendRoleVhostTopicList</a>

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tagsInput"></a>

```python
tags_input: str
```

- *Type:* str

---

##### `vhost_input`<sup>Optional</sup> <a name="vhost_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostInput"></a>

```python
vhost_input: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhost]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>]]

---

##### `vhost_topic_input`<sup>Optional</sup> <a name="vhost_topic_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopicInput"></a>

```python
vhost_topic_input: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhostTopic]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tags"></a>

```python
tags: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RabbitmqSecretBackendRoleConfig <a name="RabbitmqSecretBackendRoleConfig" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend_role

rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  name: str,
  id: str = None,
  namespace: str = None,
  tags: str = None,
  vhost: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhost]] = None,
  vhost_topic: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhostTopic]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.backend">backend</a></code> | <code>str</code> | The path of the Rabbitmq Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.name">name</a></code> | <code>str</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#id RabbitmqSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.tags">tags</a></code> | <code>str</code> | Specifies a comma-separated RabbitMQ management tags. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhost">vhost</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>]]</code> | vhost block. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhostTopic">vhost_topic</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>]]</code> | vhost_topic block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The path of the Rabbitmq Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#backend RabbitmqSecretBackendRole#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#name RabbitmqSecretBackendRole#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#id RabbitmqSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#namespace RabbitmqSecretBackendRole#namespace}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.tags"></a>

```python
tags: str
```

- *Type:* str

Specifies a comma-separated RabbitMQ management tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#tags RabbitmqSecretBackendRole#tags}

---

##### `vhost`<sup>Optional</sup> <a name="vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhost"></a>

```python
vhost: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhost]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>]]

vhost block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#vhost RabbitmqSecretBackendRole#vhost}

---

##### `vhost_topic`<sup>Optional</sup> <a name="vhost_topic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhostTopic"></a>

```python
vhost_topic: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhostTopic]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>]]

vhost_topic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#vhost_topic RabbitmqSecretBackendRole#vhost_topic}

---

### RabbitmqSecretBackendRoleVhost <a name="RabbitmqSecretBackendRoleVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend_role

rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost(
  configure: str,
  host: str,
  read: str,
  write: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.configure">configure</a></code> | <code>str</code> | The configure permissions for this vhost. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.host">host</a></code> | <code>str</code> | The vhost to set permissions for. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.read">read</a></code> | <code>str</code> | The read permissions for this vhost. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.write">write</a></code> | <code>str</code> | The write permissions for this vhost. |

---

##### `configure`<sup>Required</sup> <a name="configure" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.configure"></a>

```python
configure: str
```

- *Type:* str

The configure permissions for this vhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#configure RabbitmqSecretBackendRole#configure}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.host"></a>

```python
host: str
```

- *Type:* str

The vhost to set permissions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#host RabbitmqSecretBackendRole#host}

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.read"></a>

```python
read: str
```

- *Type:* str

The read permissions for this vhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#read RabbitmqSecretBackendRole#read}

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.write"></a>

```python
write: str
```

- *Type:* str

The write permissions for this vhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#write RabbitmqSecretBackendRole#write}

---

### RabbitmqSecretBackendRoleVhostTopic <a name="RabbitmqSecretBackendRoleVhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend_role

rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic(
  host: str,
  vhost: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhostTopicVhost]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.host">host</a></code> | <code>str</code> | The vhost to set permissions for. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.vhost">vhost</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>]]</code> | vhost block. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.host"></a>

```python
host: str
```

- *Type:* str

The vhost to set permissions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#host RabbitmqSecretBackendRole#host}

---

##### `vhost`<sup>Optional</sup> <a name="vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.vhost"></a>

```python
vhost: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhostTopicVhost]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>]]

vhost block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#vhost RabbitmqSecretBackendRole#vhost}

---

### RabbitmqSecretBackendRoleVhostTopicVhost <a name="RabbitmqSecretBackendRoleVhostTopicVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend_role

rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost(
  read: str,
  topic: str,
  write: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.read">read</a></code> | <code>str</code> | The read permissions for this vhost. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.topic">topic</a></code> | <code>str</code> | The vhost to set permissions for. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.write">write</a></code> | <code>str</code> | The write permissions for this vhost. |

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.read"></a>

```python
read: str
```

- *Type:* str

The read permissions for this vhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#read RabbitmqSecretBackendRole#read}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.topic"></a>

```python
topic: str
```

- *Type:* str

The vhost to set permissions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#topic RabbitmqSecretBackendRole#topic}

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.write"></a>

```python
write: str
```

- *Type:* str

The write permissions for this vhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/rabbitmq_secret_backend_role#write RabbitmqSecretBackendRole#write}

---

## Classes <a name="Classes" id="Classes"></a>

### RabbitmqSecretBackendRoleVhostList <a name="RabbitmqSecretBackendRoleVhostList" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend_role

rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RabbitmqSecretBackendRoleVhostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhost]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>]]

---


### RabbitmqSecretBackendRoleVhostOutputReference <a name="RabbitmqSecretBackendRoleVhostOutputReference" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend_role

rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configureInput">configure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.writeInput">write_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configure">configure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.write">write</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configure_input`<sup>Optional</sup> <a name="configure_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configureInput"></a>

```python
configure_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `write_input`<sup>Optional</sup> <a name="write_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.writeInput"></a>

```python
write_input: str
```

- *Type:* str

---

##### `configure`<sup>Required</sup> <a name="configure" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configure"></a>

```python
configure: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.write"></a>

```python
write: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RabbitmqSecretBackendRoleVhost]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>]

---


### RabbitmqSecretBackendRoleVhostTopicList <a name="RabbitmqSecretBackendRoleVhostTopicList" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend_role

rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RabbitmqSecretBackendRoleVhostTopicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhostTopic]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>]]

---


### RabbitmqSecretBackendRoleVhostTopicOutputReference <a name="RabbitmqSecretBackendRoleVhostTopicOutputReference" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend_role

rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.putVhost">put_vhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resetVhost">reset_vhost</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vhost` <a name="put_vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.putVhost"></a>

```python
def put_vhost(
  value: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhostTopicVhost]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.putVhost.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>]]

---

##### `reset_vhost` <a name="reset_vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resetVhost"></a>

```python
def reset_vhost() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhost">vhost</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList">RabbitmqSecretBackendRoleVhostTopicVhostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhostInput">vhost_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vhost`<sup>Required</sup> <a name="vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhost"></a>

```python
vhost: RabbitmqSecretBackendRoleVhostTopicVhostList
```

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList">RabbitmqSecretBackendRoleVhostTopicVhostList</a>

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `vhost_input`<sup>Optional</sup> <a name="vhost_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhostInput"></a>

```python
vhost_input: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhostTopicVhost]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>]]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RabbitmqSecretBackendRoleVhostTopic]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>]

---


### RabbitmqSecretBackendRoleVhostTopicVhostList <a name="RabbitmqSecretBackendRoleVhostTopicVhostList" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend_role

rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RabbitmqSecretBackendRoleVhostTopicVhostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RabbitmqSecretBackendRoleVhostTopicVhost]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>]]

---


### RabbitmqSecretBackendRoleVhostTopicVhostOutputReference <a name="RabbitmqSecretBackendRoleVhostTopicVhostOutputReference" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import rabbitmq_secret_backend_role

rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.writeInput">write_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.write">write</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `write_input`<sup>Optional</sup> <a name="write_input" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.writeInput"></a>

```python
write_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.write"></a>

```python
write: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RabbitmqSecretBackendRoleVhostTopicVhost]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>]

---



