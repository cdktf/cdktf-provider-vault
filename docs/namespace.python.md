# `namespace` Submodule <a name="`namespace` Submodule" id="@cdktf/provider-vault.namespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Namespace <a name="Namespace" id="@cdktf/provider-vault.namespace.Namespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/namespace vault_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.namespace.Namespace.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import namespace

namespace.Namespace(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path: str,
  custom_metadata: typing.Mapping[str] = None,
  id: str = None,
  namespace: str = None,
  path_fq: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.path">path</a></code> | <code>str</code> | Namespace path. |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.customMetadata">custom_metadata</a></code> | <code>typing.Mapping[str]</code> | Custom metadata describing this namespace. Value type is map[string]string. |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/namespace#id Namespace#id}. |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.pathFq">path_fq</a></code> | <code>str</code> | The fully qualified namespace path. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.path"></a>

- *Type:* str

Namespace path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/namespace#path Namespace#path}

---

##### `custom_metadata`<sup>Optional</sup> <a name="custom_metadata" id="@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.customMetadata"></a>

- *Type:* typing.Mapping[str]

Custom metadata describing this namespace. Value type is map[string]string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/namespace#custom_metadata Namespace#custom_metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/namespace#id Namespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/namespace#namespace Namespace#namespace}

---

##### `path_fq`<sup>Optional</sup> <a name="path_fq" id="@cdktf/provider-vault.namespace.Namespace.Initializer.parameter.pathFq"></a>

- *Type:* str

The fully qualified namespace path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/namespace#path_fq Namespace#path_fq}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.resetCustomMetadata">reset_custom_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.resetPathFq">reset_path_fq</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.namespace.Namespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.namespace.Namespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.namespace.Namespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.namespace.Namespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.namespace.Namespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.namespace.Namespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.namespace.Namespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.namespace.Namespace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.namespace.Namespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.namespace.Namespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.namespace.Namespace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.namespace.Namespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.namespace.Namespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.namespace.Namespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.namespace.Namespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.namespace.Namespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.namespace.Namespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.namespace.Namespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.namespace.Namespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.namespace.Namespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.namespace.Namespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.namespace.Namespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.namespace.Namespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.namespace.Namespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.namespace.Namespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.namespace.Namespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.namespace.Namespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.namespace.Namespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.namespace.Namespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.namespace.Namespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.namespace.Namespace.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.namespace.Namespace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.namespace.Namespace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.namespace.Namespace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.namespace.Namespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.namespace.Namespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.namespace.Namespace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.namespace.Namespace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.namespace.Namespace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.namespace.Namespace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.namespace.Namespace.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.namespace.Namespace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.namespace.Namespace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_custom_metadata` <a name="reset_custom_metadata" id="@cdktf/provider-vault.namespace.Namespace.resetCustomMetadata"></a>

```python
def reset_custom_metadata() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.namespace.Namespace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.namespace.Namespace.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_path_fq` <a name="reset_path_fq" id="@cdktf/provider-vault.namespace.Namespace.resetPathFq"></a>

```python
def reset_path_fq() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Namespace resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.namespace.Namespace.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import namespace

namespace.Namespace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.namespace.Namespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.namespace.Namespace.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import namespace

namespace.Namespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.namespace.Namespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.namespace.Namespace.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import namespace

namespace.Namespace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.namespace.Namespace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.namespace.Namespace.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import namespace

namespace.Namespace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Namespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.namespace.Namespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.namespace.Namespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Namespace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.namespace.Namespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Namespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.namespace.Namespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Namespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.customMetadataInput">custom_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.pathFqInput">path_fq_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.customMetadata">custom_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.pathFq">path_fq</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.namespace.Namespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.namespace.Namespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.namespace.Namespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.namespace.Namespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.namespace.Namespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.namespace.Namespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.namespace.Namespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.namespace.Namespace.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.namespace.Namespace.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.namespace.Namespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.namespace.Namespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.namespace.Namespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.namespace.Namespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.namespace.Namespace.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-vault.namespace.Namespace.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `custom_metadata_input`<sup>Optional</sup> <a name="custom_metadata_input" id="@cdktf/provider-vault.namespace.Namespace.property.customMetadataInput"></a>

```python
custom_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.namespace.Namespace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.namespace.Namespace.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_fq_input`<sup>Optional</sup> <a name="path_fq_input" id="@cdktf/provider-vault.namespace.Namespace.property.pathFqInput"></a>

```python
path_fq_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.namespace.Namespace.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `custom_metadata`<sup>Required</sup> <a name="custom_metadata" id="@cdktf/provider-vault.namespace.Namespace.property.customMetadata"></a>

```python
custom_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.namespace.Namespace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.namespace.Namespace.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.namespace.Namespace.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `path_fq`<sup>Required</sup> <a name="path_fq" id="@cdktf/provider-vault.namespace.Namespace.property.pathFq"></a>

```python
path_fq: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.namespace.Namespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.namespace.Namespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NamespaceConfig <a name="NamespaceConfig" id="@cdktf/provider-vault.namespace.NamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.namespace.NamespaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import namespace

namespace.NamespaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path: str,
  custom_metadata: typing.Mapping[str] = None,
  id: str = None,
  namespace: str = None,
  path_fq: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.namespace.NamespaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.NamespaceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.NamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.NamespaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.NamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.NamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.NamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.namespace.NamespaceConfig.property.path">path</a></code> | <code>str</code> | Namespace path. |
| <code><a href="#@cdktf/provider-vault.namespace.NamespaceConfig.property.customMetadata">custom_metadata</a></code> | <code>typing.Mapping[str]</code> | Custom metadata describing this namespace. Value type is map[string]string. |
| <code><a href="#@cdktf/provider-vault.namespace.NamespaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/namespace#id Namespace#id}. |
| <code><a href="#@cdktf/provider-vault.namespace.NamespaceConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.namespace.NamespaceConfig.property.pathFq">path_fq</a></code> | <code>str</code> | The fully qualified namespace path. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.namespace.NamespaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.namespace.NamespaceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.namespace.NamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.namespace.NamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.namespace.NamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.namespace.NamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.namespace.NamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.namespace.NamespaceConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Namespace path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/namespace#path Namespace#path}

---

##### `custom_metadata`<sup>Optional</sup> <a name="custom_metadata" id="@cdktf/provider-vault.namespace.NamespaceConfig.property.customMetadata"></a>

```python
custom_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom metadata describing this namespace. Value type is map[string]string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/namespace#custom_metadata Namespace#custom_metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.namespace.NamespaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/namespace#id Namespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.namespace.NamespaceConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/namespace#namespace Namespace#namespace}

---

##### `path_fq`<sup>Optional</sup> <a name="path_fq" id="@cdktf/provider-vault.namespace.NamespaceConfig.property.pathFq"></a>

```python
path_fq: str
```

- *Type:* str

The fully qualified namespace path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/namespace#path_fq Namespace#path_fq}

---



