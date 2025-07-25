# `transformTemplate` Submodule <a name="`transformTemplate` Submodule" id="@cdktf/provider-vault.transformTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTemplate <a name="TransformTemplate" id="@cdktf/provider-vault.transformTemplate.TransformTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template vault_transform_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import transform_template

transformTemplate.TransformTemplate(
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
  path: str,
  alphabet: str = None,
  decode_formats: typing.Mapping[str] = None,
  encode_format: str = None,
  id: str = None,
  namespace: str = None,
  pattern: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the template. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.path">path</a></code> | <code>str</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.alphabet">alphabet</a></code> | <code>str</code> | The alphabet to use for this template. This is only used during FPE transformations. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.decodeFormats">decode_formats</a></code> | <code>typing.Mapping[str]</code> | The map of regular expression templates used to customize decoded outputs. Only applicable to FPE transformations. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.encodeFormat">encode_format</a></code> | <code>str</code> | The regular expression template used for encoding values. Only applicable to FPE transformations. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#id TransformTemplate#id}. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.pattern">pattern</a></code> | <code>str</code> | The pattern used for matching. Currently, only regular expression pattern is supported. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.type">type</a></code> | <code>str</code> | The pattern type to use for match detection. Currently, only regex is supported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.name"></a>

- *Type:* str

The name of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#name TransformTemplate#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.path"></a>

- *Type:* str

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#path TransformTemplate#path}

---

##### `alphabet`<sup>Optional</sup> <a name="alphabet" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.alphabet"></a>

- *Type:* str

The alphabet to use for this template. This is only used during FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#alphabet TransformTemplate#alphabet}

---

##### `decode_formats`<sup>Optional</sup> <a name="decode_formats" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.decodeFormats"></a>

- *Type:* typing.Mapping[str]

The map of regular expression templates used to customize decoded outputs. Only applicable to FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#decode_formats TransformTemplate#decode_formats}

---

##### `encode_format`<sup>Optional</sup> <a name="encode_format" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.encodeFormat"></a>

- *Type:* str

The regular expression template used for encoding values. Only applicable to FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#encode_format TransformTemplate#encode_format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#id TransformTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#namespace TransformTemplate#namespace}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.pattern"></a>

- *Type:* str

The pattern used for matching. Currently, only regular expression pattern is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#pattern TransformTemplate#pattern}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.type"></a>

- *Type:* str

The pattern type to use for match detection. Currently, only regex is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#type TransformTemplate#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetAlphabet">reset_alphabet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetDecodeFormats">reset_decode_formats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetEncodeFormat">reset_encode_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetPattern">reset_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_alphabet` <a name="reset_alphabet" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetAlphabet"></a>

```python
def reset_alphabet() -> None
```

##### `reset_decode_formats` <a name="reset_decode_formats" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetDecodeFormats"></a>

```python
def reset_decode_formats() -> None
```

##### `reset_encode_format` <a name="reset_encode_format" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetEncodeFormat"></a>

```python
def reset_encode_format() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_pattern` <a name="reset_pattern" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetPattern"></a>

```python
def reset_pattern() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TransformTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import transform_template

transformTemplate.TransformTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import transform_template

transformTemplate.TransformTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import transform_template

transformTemplate.TransformTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import transform_template

transformTemplate.TransformTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TransformTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TransformTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TransformTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TransformTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.alphabetInput">alphabet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.decodeFormatsInput">decode_formats_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.encodeFormatInput">encode_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.alphabet">alphabet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.decodeFormats">decode_formats</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.encodeFormat">encode_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alphabet_input`<sup>Optional</sup> <a name="alphabet_input" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.alphabetInput"></a>

```python
alphabet_input: str
```

- *Type:* str

---

##### `decode_formats_input`<sup>Optional</sup> <a name="decode_formats_input" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.decodeFormatsInput"></a>

```python
decode_formats_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `encode_format_input`<sup>Optional</sup> <a name="encode_format_input" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.encodeFormatInput"></a>

```python
encode_format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `alphabet`<sup>Required</sup> <a name="alphabet" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.alphabet"></a>

```python
alphabet: str
```

- *Type:* str

---

##### `decode_formats`<sup>Required</sup> <a name="decode_formats" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.decodeFormats"></a>

```python
decode_formats: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `encode_format`<sup>Required</sup> <a name="encode_format" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.encodeFormat"></a>

```python
encode_format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTemplateConfig <a name="TransformTemplateConfig" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import transform_template

transformTemplate.TransformTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  path: str,
  alphabet: str = None,
  decode_formats: typing.Mapping[str] = None,
  encode_format: str = None,
  id: str = None,
  namespace: str = None,
  pattern: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.name">name</a></code> | <code>str</code> | The name of the template. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.path">path</a></code> | <code>str</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.alphabet">alphabet</a></code> | <code>str</code> | The alphabet to use for this template. This is only used during FPE transformations. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.decodeFormats">decode_formats</a></code> | <code>typing.Mapping[str]</code> | The map of regular expression templates used to customize decoded outputs. Only applicable to FPE transformations. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.encodeFormat">encode_format</a></code> | <code>str</code> | The regular expression template used for encoding values. Only applicable to FPE transformations. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#id TransformTemplate#id}. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.pattern">pattern</a></code> | <code>str</code> | The pattern used for matching. Currently, only regular expression pattern is supported. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.type">type</a></code> | <code>str</code> | The pattern type to use for match detection. Currently, only regex is supported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#name TransformTemplate#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#path TransformTemplate#path}

---

##### `alphabet`<sup>Optional</sup> <a name="alphabet" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.alphabet"></a>

```python
alphabet: str
```

- *Type:* str

The alphabet to use for this template. This is only used during FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#alphabet TransformTemplate#alphabet}

---

##### `decode_formats`<sup>Optional</sup> <a name="decode_formats" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.decodeFormats"></a>

```python
decode_formats: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The map of regular expression templates used to customize decoded outputs. Only applicable to FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#decode_formats TransformTemplate#decode_formats}

---

##### `encode_format`<sup>Optional</sup> <a name="encode_format" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.encodeFormat"></a>

```python
encode_format: str
```

- *Type:* str

The regular expression template used for encoding values. Only applicable to FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#encode_format TransformTemplate#encode_format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#id TransformTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#namespace TransformTemplate#namespace}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

The pattern used for matching. Currently, only regular expression pattern is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#pattern TransformTemplate#pattern}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The pattern type to use for match detection. Currently, only regex is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/transform_template#type TransformTemplate#type}

---



