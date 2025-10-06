# `transformTransformation` Submodule <a name="`transformTransformation` Submodule" id="@cdktf/provider-vault.transformTransformation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformation <a name="TransformTransformation" id="@cdktf/provider-vault.transformTransformation.TransformTransformation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation vault_transform_transformation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import transform_transformation

transformTransformation.TransformTransformation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  path: str,
  allowed_roles: typing.List[str] = None,
  deletion_allowed: bool | IResolvable = None,
  id: str = None,
  masking_character: str = None,
  namespace: str = None,
  template: str = None,
  templates: typing.List[str] = None,
  tweak_source: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.path">path</a></code> | <code>str</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | The set of roles allowed to perform this transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.deletionAllowed">deletion_allowed</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, this transform can be deleted. Otherwise deletion is blocked while this value remains false. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#id TransformTransformation#id}. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.maskingCharacter">masking_character</a></code> | <code>str</code> | The character used to replace data when in masking mode. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.template">template</a></code> | <code>str</code> | The name of the template to use. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.templates">templates</a></code> | <code>typing.List[str]</code> | Templates configured for transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.tweakSource">tweak_source</a></code> | <code>str</code> | The source of where the tweak value comes from. Only valid when in FPE mode. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of transformation to perform. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.name"></a>

- *Type:* str

The name of the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#name TransformTransformation#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.path"></a>

- *Type:* str

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#path TransformTransformation#path}

---

##### `allowed_roles`<sup>Optional</sup> <a name="allowed_roles" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.allowedRoles"></a>

- *Type:* typing.List[str]

The set of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#allowed_roles TransformTransformation#allowed_roles}

---

##### `deletion_allowed`<sup>Optional</sup> <a name="deletion_allowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.deletionAllowed"></a>

- *Type:* bool | cdktf.IResolvable

If true, this transform can be deleted. Otherwise deletion is blocked while this value remains false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#deletion_allowed TransformTransformation#deletion_allowed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#id TransformTransformation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masking_character`<sup>Optional</sup> <a name="masking_character" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.maskingCharacter"></a>

- *Type:* str

The character used to replace data when in masking mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#masking_character TransformTransformation#masking_character}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#namespace TransformTransformation#namespace}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.template"></a>

- *Type:* str

The name of the template to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#template TransformTransformation#template}

---

##### `templates`<sup>Optional</sup> <a name="templates" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.templates"></a>

- *Type:* typing.List[str]

Templates configured for transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#templates TransformTransformation#templates}

---

##### `tweak_source`<sup>Optional</sup> <a name="tweak_source" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.tweakSource"></a>

- *Type:* str

The source of where the tweak value comes from. Only valid when in FPE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#tweak_source TransformTransformation#tweak_source}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.type"></a>

- *Type:* str

The type of transformation to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#type TransformTransformation#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetAllowedRoles">reset_allowed_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetDeletionAllowed">reset_deletion_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetMaskingCharacter">reset_masking_character</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplate">reset_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplates">reset_templates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTweakSource">reset_tweak_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_roles` <a name="reset_allowed_roles" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetAllowedRoles"></a>

```python
def reset_allowed_roles() -> None
```

##### `reset_deletion_allowed` <a name="reset_deletion_allowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetDeletionAllowed"></a>

```python
def reset_deletion_allowed() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_masking_character` <a name="reset_masking_character" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetMaskingCharacter"></a>

```python
def reset_masking_character() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_template` <a name="reset_template" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplate"></a>

```python
def reset_template() -> None
```

##### `reset_templates` <a name="reset_templates" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplates"></a>

```python
def reset_templates() -> None
```

##### `reset_tweak_source` <a name="reset_tweak_source" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTweakSource"></a>

```python
def reset_tweak_source() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TransformTransformation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import transform_transformation

transformTransformation.TransformTransformation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import transform_transformation

transformTransformation.TransformTransformation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import transform_transformation

transformTransformation.TransformTransformation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import transform_transformation

transformTransformation.TransformTransformation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TransformTransformation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TransformTransformation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TransformTransformation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TransformTransformation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRolesInput">allowed_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowedInput">deletion_allowed_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacterInput">masking_character_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templateInput">template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templatesInput">templates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSourceInput">tweak_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowed">deletion_allowed</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacter">masking_character</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.template">template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templates">templates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSource">tweak_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `allowed_roles_input`<sup>Optional</sup> <a name="allowed_roles_input" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRolesInput"></a>

```python
allowed_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_allowed_input`<sup>Optional</sup> <a name="deletion_allowed_input" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowedInput"></a>

```python
deletion_allowed_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `masking_character_input`<sup>Optional</sup> <a name="masking_character_input" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacterInput"></a>

```python
masking_character_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templateInput"></a>

```python
template_input: str
```

- *Type:* str

---

##### `templates_input`<sup>Optional</sup> <a name="templates_input" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templatesInput"></a>

```python
templates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tweak_source_input`<sup>Optional</sup> <a name="tweak_source_input" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSourceInput"></a>

```python
tweak_source_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `allowed_roles`<sup>Required</sup> <a name="allowed_roles" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRoles"></a>

```python
allowed_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_allowed`<sup>Required</sup> <a name="deletion_allowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowed"></a>

```python
deletion_allowed: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `masking_character`<sup>Required</sup> <a name="masking_character" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacter"></a>

```python
masking_character: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.template"></a>

```python
template: str
```

- *Type:* str

---

##### `templates`<sup>Required</sup> <a name="templates" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templates"></a>

```python
templates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tweak_source`<sup>Required</sup> <a name="tweak_source" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSource"></a>

```python
tweak_source: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationConfig <a name="TransformTransformationConfig" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import transform_transformation

transformTransformation.TransformTransformationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  path: str,
  allowed_roles: typing.List[str] = None,
  deletion_allowed: bool | IResolvable = None,
  id: str = None,
  masking_character: str = None,
  namespace: str = None,
  template: str = None,
  templates: typing.List[str] = None,
  tweak_source: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.name">name</a></code> | <code>str</code> | The name of the transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.path">path</a></code> | <code>str</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | The set of roles allowed to perform this transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.deletionAllowed">deletion_allowed</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, this transform can be deleted. Otherwise deletion is blocked while this value remains false. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#id TransformTransformation#id}. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.maskingCharacter">masking_character</a></code> | <code>str</code> | The character used to replace data when in masking mode. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.template">template</a></code> | <code>str</code> | The name of the template to use. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.templates">templates</a></code> | <code>typing.List[str]</code> | Templates configured for transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.tweakSource">tweak_source</a></code> | <code>str</code> | The source of where the tweak value comes from. Only valid when in FPE mode. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.type">type</a></code> | <code>str</code> | The type of transformation to perform. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#name TransformTransformation#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#path TransformTransformation#path}

---

##### `allowed_roles`<sup>Optional</sup> <a name="allowed_roles" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.allowedRoles"></a>

```python
allowed_roles: typing.List[str]
```

- *Type:* typing.List[str]

The set of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#allowed_roles TransformTransformation#allowed_roles}

---

##### `deletion_allowed`<sup>Optional</sup> <a name="deletion_allowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.deletionAllowed"></a>

```python
deletion_allowed: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, this transform can be deleted. Otherwise deletion is blocked while this value remains false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#deletion_allowed TransformTransformation#deletion_allowed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#id TransformTransformation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masking_character`<sup>Optional</sup> <a name="masking_character" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.maskingCharacter"></a>

```python
masking_character: str
```

- *Type:* str

The character used to replace data when in masking mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#masking_character TransformTransformation#masking_character}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#namespace TransformTransformation#namespace}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.template"></a>

```python
template: str
```

- *Type:* str

The name of the template to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#template TransformTransformation#template}

---

##### `templates`<sup>Optional</sup> <a name="templates" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.templates"></a>

```python
templates: typing.List[str]
```

- *Type:* typing.List[str]

Templates configured for transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#templates TransformTransformation#templates}

---

##### `tweak_source`<sup>Optional</sup> <a name="tweak_source" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.tweakSource"></a>

```python
tweak_source: str
```

- *Type:* str

The source of where the tweak value comes from. Only valid when in FPE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#tweak_source TransformTransformation#tweak_source}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of transformation to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/transform_transformation#type TransformTransformation#type}

---



