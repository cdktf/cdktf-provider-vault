# `pluginPinnedVersion` Submodule <a name="`pluginPinnedVersion` Submodule" id="@cdktf/provider-vault.pluginPinnedVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PluginPinnedVersion <a name="PluginPinnedVersion" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/plugin_pinned_version vault_plugin_pinned_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import plugin_pinned_version

pluginPinnedVersion.PluginPinnedVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  version: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the plugin. |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.type">type</a></code> | <code>str</code> | Type of plugin; one of "auth", "secret", or "database". |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.version">version</a></code> | <code>str</code> | Semantic pinned plugin version. |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/plugin_pinned_version#id PluginPinnedVersion#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.name"></a>

- *Type:* str

Name of the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/plugin_pinned_version#name PluginPinnedVersion#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.type"></a>

- *Type:* str

Type of plugin; one of "auth", "secret", or "database".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/plugin_pinned_version#type PluginPinnedVersion#type}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.version"></a>

- *Type:* str

Semantic pinned plugin version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/plugin_pinned_version#version PluginPinnedVersion#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/plugin_pinned_version#id PluginPinnedVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PluginPinnedVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import plugin_pinned_version

pluginPinnedVersion.PluginPinnedVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import plugin_pinned_version

pluginPinnedVersion.PluginPinnedVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import plugin_pinned_version

pluginPinnedVersion.PluginPinnedVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import plugin_pinned_version

pluginPinnedVersion.PluginPinnedVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PluginPinnedVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PluginPinnedVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PluginPinnedVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/plugin_pinned_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PluginPinnedVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PluginPinnedVersionConfig <a name="PluginPinnedVersionConfig" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import plugin_pinned_version

pluginPinnedVersion.PluginPinnedVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  version: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.name">name</a></code> | <code>str</code> | Name of the plugin. |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.type">type</a></code> | <code>str</code> | Type of plugin; one of "auth", "secret", or "database". |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.version">version</a></code> | <code>str</code> | Semantic pinned plugin version. |
| <code><a href="#@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/plugin_pinned_version#id PluginPinnedVersion#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/plugin_pinned_version#name PluginPinnedVersion#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of plugin; one of "auth", "secret", or "database".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/plugin_pinned_version#type PluginPinnedVersion#type}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Semantic pinned plugin version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/plugin_pinned_version#version PluginPinnedVersion#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pluginPinnedVersion.PluginPinnedVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/plugin_pinned_version#id PluginPinnedVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



