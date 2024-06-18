# `dataVaultRaftAutopilotState` Submodule <a name="`dataVaultRaftAutopilotState` Submodule" id="@cdktf/provider-vault.dataVaultRaftAutopilotState"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultRaftAutopilotState <a name="DataVaultRaftAutopilotState" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/raft_autopilot_state vault_raft_autopilot_state}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_raft_autopilot_state

dataVaultRaftAutopilotState.DataVaultRaftAutopilotState(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/raft_autopilot_state#id DataVaultRaftAutopilotState#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/raft_autopilot_state#id DataVaultRaftAutopilotState#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/raft_autopilot_state#namespace DataVaultRaftAutopilotState#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVaultRaftAutopilotState resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_raft_autopilot_state

dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_raft_autopilot_state

dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_raft_autopilot_state

dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_raft_autopilot_state

dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVaultRaftAutopilotState resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultRaftAutopilotState to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultRaftAutopilotState that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/raft_autopilot_state#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultRaftAutopilotState to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.failureTolerance">failure_tolerance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.healthy">healthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.leader">leader</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.optimisticFailureTolerance">optimistic_failure_tolerance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZones">redundancy_zones</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZonesJson">redundancy_zones_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.servers">servers</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.serversJson">servers_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfo">upgrade_info</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfoJson">upgrade_info_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.voters">voters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `failure_tolerance`<sup>Required</sup> <a name="failure_tolerance" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.failureTolerance"></a>

```python
failure_tolerance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.healthy"></a>

```python
healthy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `leader`<sup>Required</sup> <a name="leader" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.leader"></a>

```python
leader: str
```

- *Type:* str

---

##### `optimistic_failure_tolerance`<sup>Required</sup> <a name="optimistic_failure_tolerance" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.optimisticFailureTolerance"></a>

```python
optimistic_failure_tolerance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redundancy_zones`<sup>Required</sup> <a name="redundancy_zones" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZones"></a>

```python
redundancy_zones: StringMap
```

- *Type:* cdktf.StringMap

---

##### `redundancy_zones_json`<sup>Required</sup> <a name="redundancy_zones_json" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZonesJson"></a>

```python
redundancy_zones_json: str
```

- *Type:* str

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.servers"></a>

```python
servers: StringMap
```

- *Type:* cdktf.StringMap

---

##### `servers_json`<sup>Required</sup> <a name="servers_json" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.serversJson"></a>

```python
servers_json: str
```

- *Type:* str

---

##### `upgrade_info`<sup>Required</sup> <a name="upgrade_info" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfo"></a>

```python
upgrade_info: StringMap
```

- *Type:* cdktf.StringMap

---

##### `upgrade_info_json`<sup>Required</sup> <a name="upgrade_info_json" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfoJson"></a>

```python
upgrade_info_json: str
```

- *Type:* str

---

##### `voters`<sup>Required</sup> <a name="voters" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.voters"></a>

```python
voters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultRaftAutopilotStateConfig <a name="DataVaultRaftAutopilotStateConfig" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_raft_autopilot_state

dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/raft_autopilot_state#id DataVaultRaftAutopilotState#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/raft_autopilot_state#id DataVaultRaftAutopilotState#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/data-sources/raft_autopilot_state#namespace DataVaultRaftAutopilotState#namespace}

---



