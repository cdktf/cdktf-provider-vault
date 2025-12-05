# `genericSecret` Submodule <a name="`genericSecret` Submodule" id="@cdktf/provider-vault.genericSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenericSecret <a name="GenericSecret" id="@cdktf/provider-vault.genericSecret.GenericSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret vault_generic_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import generic_secret

genericSecret.GenericSecret(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_json: str,
  path: str,
  delete_all_versions: bool | IResolvable = None,
  disable_read: bool | IResolvable = None,
  id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.dataJson">data_json</a></code> | <code>str</code> | JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.path">path</a></code> | <code>str</code> | Full path where the generic secret will be written. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.deleteAllVersions">delete_all_versions</a></code> | <code>bool \| cdktf.IResolvable</code> | Only applicable for kv-v2 stores. If set, permanently deletes all versions for the specified key. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.disableRead">disable_read</a></code> | <code>bool \| cdktf.IResolvable</code> | Don't attempt to read the token from Vault if true; drift won't be detected. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret#id GenericSecret#id}. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.dataJson"></a>

- *Type:* str

JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret#data_json GenericSecret#data_json}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.path"></a>

- *Type:* str

Full path where the generic secret will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret#path GenericSecret#path}

---

##### `delete_all_versions`<sup>Optional</sup> <a name="delete_all_versions" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.deleteAllVersions"></a>

- *Type:* bool | cdktf.IResolvable

Only applicable for kv-v2 stores. If set, permanently deletes all versions for the specified key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret#delete_all_versions GenericSecret#delete_all_versions}

---

##### `disable_read`<sup>Optional</sup> <a name="disable_read" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.disableRead"></a>

- *Type:* bool | cdktf.IResolvable

Don't attempt to read the token from Vault if true; drift won't be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret#disable_read GenericSecret#disable_read}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret#id GenericSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.genericSecret.GenericSecret.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret#namespace GenericSecret#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.resetDeleteAllVersions">reset_delete_all_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.resetDisableRead">reset_disable_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.genericSecret.GenericSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.genericSecret.GenericSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.genericSecret.GenericSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.genericSecret.GenericSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.genericSecret.GenericSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.genericSecret.GenericSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.genericSecret.GenericSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.genericSecret.GenericSecret.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.genericSecret.GenericSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.genericSecret.GenericSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.genericSecret.GenericSecret.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.genericSecret.GenericSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.genericSecret.GenericSecret.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.genericSecret.GenericSecret.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.genericSecret.GenericSecret.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.genericSecret.GenericSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericSecret.GenericSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.genericSecret.GenericSecret.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.genericSecret.GenericSecret.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.genericSecret.GenericSecret.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.genericSecret.GenericSecret.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.genericSecret.GenericSecret.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.genericSecret.GenericSecret.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.genericSecret.GenericSecret.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_delete_all_versions` <a name="reset_delete_all_versions" id="@cdktf/provider-vault.genericSecret.GenericSecret.resetDeleteAllVersions"></a>

```python
def reset_delete_all_versions() -> None
```

##### `reset_disable_read` <a name="reset_disable_read" id="@cdktf/provider-vault.genericSecret.GenericSecret.resetDisableRead"></a>

```python
def reset_disable_read() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.genericSecret.GenericSecret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.genericSecret.GenericSecret.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GenericSecret resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.genericSecret.GenericSecret.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import generic_secret

genericSecret.GenericSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.genericSecret.GenericSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.genericSecret.GenericSecret.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import generic_secret

genericSecret.GenericSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.genericSecret.GenericSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.genericSecret.GenericSecret.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import generic_secret

genericSecret.GenericSecret.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.genericSecret.GenericSecret.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.genericSecret.GenericSecret.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import generic_secret

genericSecret.GenericSecret.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GenericSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.genericSecret.GenericSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.genericSecret.GenericSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GenericSecret to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.genericSecret.GenericSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GenericSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.genericSecret.GenericSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenericSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.data">data</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.dataJsonInput">data_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.deleteAllVersionsInput">delete_all_versions_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.disableReadInput">disable_read_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.dataJson">data_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.deleteAllVersions">delete_all_versions</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.disableRead">disable_read</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.path">path</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.data"></a>

```python
data: StringMap
```

- *Type:* cdktf.StringMap

---

##### `data_json_input`<sup>Optional</sup> <a name="data_json_input" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.dataJsonInput"></a>

```python
data_json_input: str
```

- *Type:* str

---

##### `delete_all_versions_input`<sup>Optional</sup> <a name="delete_all_versions_input" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.deleteAllVersionsInput"></a>

```python
delete_all_versions_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `disable_read_input`<sup>Optional</sup> <a name="disable_read_input" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.disableReadInput"></a>

```python
disable_read_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.dataJson"></a>

```python
data_json: str
```

- *Type:* str

---

##### `delete_all_versions`<sup>Required</sup> <a name="delete_all_versions" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.deleteAllVersions"></a>

```python
delete_all_versions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `disable_read`<sup>Required</sup> <a name="disable_read" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.disableRead"></a>

```python
disable_read: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.path"></a>

```python
path: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.genericSecret.GenericSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GenericSecretConfig <a name="GenericSecretConfig" id="@cdktf/provider-vault.genericSecret.GenericSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.genericSecret.GenericSecretConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import generic_secret

genericSecret.GenericSecretConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_json: str,
  path: str,
  delete_all_versions: bool | IResolvable = None,
  disable_read: bool | IResolvable = None,
  id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.dataJson">data_json</a></code> | <code>str</code> | JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.path">path</a></code> | <code>str</code> | Full path where the generic secret will be written. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.deleteAllVersions">delete_all_versions</a></code> | <code>bool \| cdktf.IResolvable</code> | Only applicable for kv-v2 stores. If set, permanently deletes all versions for the specified key. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.disableRead">disable_read</a></code> | <code>bool \| cdktf.IResolvable</code> | Don't attempt to read the token from Vault if true; drift won't be detected. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret#id GenericSecret#id}. |
| <code><a href="#@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.dataJson"></a>

```python
data_json: str
```

- *Type:* str

JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret#data_json GenericSecret#data_json}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Full path where the generic secret will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret#path GenericSecret#path}

---

##### `delete_all_versions`<sup>Optional</sup> <a name="delete_all_versions" id="@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.deleteAllVersions"></a>

```python
delete_all_versions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Only applicable for kv-v2 stores. If set, permanently deletes all versions for the specified key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret#delete_all_versions GenericSecret#delete_all_versions}

---

##### `disable_read`<sup>Optional</sup> <a name="disable_read" id="@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.disableRead"></a>

```python
disable_read: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Don't attempt to read the token from Vault if true; drift won't be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret#disable_read GenericSecret#disable_read}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret#id GenericSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.genericSecret.GenericSecretConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/generic_secret#namespace GenericSecret#namespace}

---



