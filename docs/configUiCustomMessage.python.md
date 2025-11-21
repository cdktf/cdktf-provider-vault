# `configUiCustomMessage` Submodule <a name="`configUiCustomMessage` Submodule" id="@cdktf/provider-vault.configUiCustomMessage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigUiCustomMessage <a name="ConfigUiCustomMessage" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message vault_config_ui_custom_message}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import config_ui_custom_message

configUiCustomMessage.ConfigUiCustomMessage(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  message_base64: str,
  start_time: str,
  title: str,
  authenticated: bool | IResolvable = None,
  end_time: str = None,
  link: ConfigUiCustomMessageLink = None,
  namespace: str = None,
  options: typing.Mapping[str] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.messageBase64">message_base64</a></code> | <code>str</code> | The base64-encoded content of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | The starting time of the active period of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.title">title</a></code> | <code>str</code> | The title of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.authenticated">authenticated</a></code> | <code>bool \| cdktf.IResolvable</code> | A flag indicating whether the custom message is displayed pre-login (false) or post-login (true). |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.endTime">end_time</a></code> | <code>str</code> | The ending time of the active period of the custom message. Can be omitted for non-expiring message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.link">link</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | link block. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.options">options</a></code> | <code>typing.Mapping[str]</code> | A map containing additional options for the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.type">type</a></code> | <code>str</code> | The display type of custom message. Allowed values are banner and modal. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `message_base64`<sup>Required</sup> <a name="message_base64" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.messageBase64"></a>

- *Type:* str

The base64-encoded content of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#message_base64 ConfigUiCustomMessage#message_base64}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.startTime"></a>

- *Type:* str

The starting time of the active period of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#start_time ConfigUiCustomMessage#start_time}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.title"></a>

- *Type:* str

The title of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#title ConfigUiCustomMessage#title}

---

##### `authenticated`<sup>Optional</sup> <a name="authenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.authenticated"></a>

- *Type:* bool | cdktf.IResolvable

A flag indicating whether the custom message is displayed pre-login (false) or post-login (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#authenticated ConfigUiCustomMessage#authenticated}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.endTime"></a>

- *Type:* str

The ending time of the active period of the custom message. Can be omitted for non-expiring message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#end_time ConfigUiCustomMessage#end_time}

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.link"></a>

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#link ConfigUiCustomMessage#link}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#namespace ConfigUiCustomMessage#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.options"></a>

- *Type:* typing.Mapping[str]

A map containing additional options for the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#options ConfigUiCustomMessage#options}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.type"></a>

- *Type:* str

The display type of custom message. Allowed values are banner and modal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#type ConfigUiCustomMessage#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink">put_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetAuthenticated">reset_authenticated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetLink">reset_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_link` <a name="put_link" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink"></a>

```python
def put_link(
  href: str,
  title: str
) -> None
```

###### `href`<sup>Required</sup> <a name="href" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink.parameter.href"></a>

- *Type:* str

The URL of the hyperlink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#href ConfigUiCustomMessage#href}

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink.parameter.title"></a>

- *Type:* str

The title of the hyperlink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#title ConfigUiCustomMessage#title}

---

##### `reset_authenticated` <a name="reset_authenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetAuthenticated"></a>

```python
def reset_authenticated() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_link` <a name="reset_link" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetLink"></a>

```python
def reset_link() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ConfigUiCustomMessage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import config_ui_custom_message

configUiCustomMessage.ConfigUiCustomMessage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import config_ui_custom_message

configUiCustomMessage.ConfigUiCustomMessage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import config_ui_custom_message

configUiCustomMessage.ConfigUiCustomMessage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import config_ui_custom_message

configUiCustomMessage.ConfigUiCustomMessage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ConfigUiCustomMessage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigUiCustomMessage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigUiCustomMessage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigUiCustomMessage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.link">link</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference">ConfigUiCustomMessageLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticatedInput">authenticated_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.linkInput">link_input</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64Input">message_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticated">authenticated</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64">message_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.link"></a>

```python
link: ConfigUiCustomMessageLinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference">ConfigUiCustomMessageLinkOutputReference</a>

---

##### `authenticated_input`<sup>Optional</sup> <a name="authenticated_input" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticatedInput"></a>

```python
authenticated_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `link_input`<sup>Optional</sup> <a name="link_input" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.linkInput"></a>

```python
link_input: ConfigUiCustomMessageLink
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

---

##### `message_base64_input`<sup>Optional</sup> <a name="message_base64_input" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64Input"></a>

```python
message_base64_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `authenticated`<sup>Required</sup> <a name="authenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticated"></a>

```python
authenticated: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `message_base64`<sup>Required</sup> <a name="message_base64" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64"></a>

```python
message_base64: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigUiCustomMessageConfig <a name="ConfigUiCustomMessageConfig" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import config_ui_custom_message

configUiCustomMessage.ConfigUiCustomMessageConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  message_base64: str,
  start_time: str,
  title: str,
  authenticated: bool | IResolvable = None,
  end_time: str = None,
  link: ConfigUiCustomMessageLink = None,
  namespace: str = None,
  options: typing.Mapping[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.messageBase64">message_base64</a></code> | <code>str</code> | The base64-encoded content of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.startTime">start_time</a></code> | <code>str</code> | The starting time of the active period of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.title">title</a></code> | <code>str</code> | The title of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.authenticated">authenticated</a></code> | <code>bool \| cdktf.IResolvable</code> | A flag indicating whether the custom message is displayed pre-login (false) or post-login (true). |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.endTime">end_time</a></code> | <code>str</code> | The ending time of the active period of the custom message. Can be omitted for non-expiring message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.link">link</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | link block. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.options">options</a></code> | <code>typing.Mapping[str]</code> | A map containing additional options for the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.type">type</a></code> | <code>str</code> | The display type of custom message. Allowed values are banner and modal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `message_base64`<sup>Required</sup> <a name="message_base64" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.messageBase64"></a>

```python
message_base64: str
```

- *Type:* str

The base64-encoded content of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#message_base64 ConfigUiCustomMessage#message_base64}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The starting time of the active period of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#start_time ConfigUiCustomMessage#start_time}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#title ConfigUiCustomMessage#title}

---

##### `authenticated`<sup>Optional</sup> <a name="authenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.authenticated"></a>

```python
authenticated: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

A flag indicating whether the custom message is displayed pre-login (false) or post-login (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#authenticated ConfigUiCustomMessage#authenticated}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The ending time of the active period of the custom message. Can be omitted for non-expiring message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#end_time ConfigUiCustomMessage#end_time}

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.link"></a>

```python
link: ConfigUiCustomMessageLink
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#link ConfigUiCustomMessage#link}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#namespace ConfigUiCustomMessage#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map containing additional options for the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#options ConfigUiCustomMessage#options}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The display type of custom message. Allowed values are banner and modal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#type ConfigUiCustomMessage#type}

---

### ConfigUiCustomMessageLink <a name="ConfigUiCustomMessageLink" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import config_ui_custom_message

configUiCustomMessage.ConfigUiCustomMessageLink(
  href: str,
  title: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.href">href</a></code> | <code>str</code> | The URL of the hyperlink. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.title">title</a></code> | <code>str</code> | The title of the hyperlink. |

---

##### `href`<sup>Required</sup> <a name="href" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.href"></a>

```python
href: str
```

- *Type:* str

The URL of the hyperlink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#href ConfigUiCustomMessage#href}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the hyperlink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#title ConfigUiCustomMessage#title}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigUiCustomMessageLinkOutputReference <a name="ConfigUiCustomMessageLinkOutputReference" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import config_ui_custom_message

configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.hrefInput">href_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.href">href</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `href_input`<sup>Optional</sup> <a name="href_input" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.hrefInput"></a>

```python
href_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `href`<sup>Required</sup> <a name="href" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.href"></a>

```python
href: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.internalValue"></a>

```python
internal_value: ConfigUiCustomMessageLink
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

---



