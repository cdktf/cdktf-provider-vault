# `dataVaultTransformEncode` Submodule <a name="`dataVaultTransformEncode` Submodule" id="@cdktf/provider-vault.dataVaultTransformEncode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransformEncode <a name="DataVaultTransformEncode" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode vault_transform_encode}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transform_encode

dataVaultTransformEncode.DataVaultTransformEncode(
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
  role_name: str,
  batch_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  batch_results: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  encoded_value: str = None,
  id: str = None,
  namespace: str = None,
  transformation: str = None,
  tweak: str = None,
  value: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.path">path</a></code> | <code>str</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.batchInput">batch_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | Specifies a list of items to be encoded in a single batch. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.batchResults">batch_results</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | The result of encoding batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.encodedValue">encoded_value</a></code> | <code>str</code> | The result of encoding a value. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#id DataVaultTransformEncode#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.transformation">transformation</a></code> | <code>str</code> | The transformation to perform. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.tweak">tweak</a></code> | <code>str</code> | The tweak value to use. Only applicable for FPE transformations. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.value">value</a></code> | <code>str</code> | The value in which to encode. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.path"></a>

- *Type:* str

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#path DataVaultTransformEncode#path}

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.roleName"></a>

- *Type:* str

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#role_name DataVaultTransformEncode#role_name}

---

##### `batch_input`<sup>Optional</sup> <a name="batch_input" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.batchInput"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

Specifies a list of items to be encoded in a single batch.

If this parameter is set, the parameters 'value', 'transformation' and 'tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#batch_input DataVaultTransformEncode#batch_input}

---

##### `batch_results`<sup>Optional</sup> <a name="batch_results" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.batchResults"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

The result of encoding batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#batch_results DataVaultTransformEncode#batch_results}

---

##### `encoded_value`<sup>Optional</sup> <a name="encoded_value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.encodedValue"></a>

- *Type:* str

The result of encoding a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#encoded_value DataVaultTransformEncode#encoded_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#id DataVaultTransformEncode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#namespace DataVaultTransformEncode#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.transformation"></a>

- *Type:* str

The transformation to perform.

If no value is provided and the role contains a single transformation, this value will be inferred from the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#transformation DataVaultTransformEncode#transformation}

---

##### `tweak`<sup>Optional</sup> <a name="tweak" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.tweak"></a>

- *Type:* str

The tweak value to use. Only applicable for FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#tweak DataVaultTransformEncode#tweak}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.value"></a>

- *Type:* str

The value in which to encode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#value DataVaultTransformEncode#value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchInput">reset_batch_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchResults">reset_batch_results</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetEncodedValue">reset_encoded_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTransformation">reset_transformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTweak">reset_tweak</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetValue">reset_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_batch_input` <a name="reset_batch_input" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchInput"></a>

```python
def reset_batch_input() -> None
```

##### `reset_batch_results` <a name="reset_batch_results" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchResults"></a>

```python
def reset_batch_results() -> None
```

##### `reset_encoded_value` <a name="reset_encoded_value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetEncodedValue"></a>

```python
def reset_encoded_value() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_transformation` <a name="reset_transformation" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTransformation"></a>

```python
def reset_transformation() -> None
```

##### `reset_tweak` <a name="reset_tweak" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTweak"></a>

```python
def reset_tweak() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetValue"></a>

```python
def reset_value() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVaultTransformEncode resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transform_encode

dataVaultTransformEncode.DataVaultTransformEncode.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transform_encode

dataVaultTransformEncode.DataVaultTransformEncode.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transform_encode

dataVaultTransformEncode.DataVaultTransformEncode.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transform_encode

dataVaultTransformEncode.DataVaultTransformEncode.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVaultTransformEncode resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultTransformEncode to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultTransformEncode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransformEncode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInputInput">batch_input_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResultsInput">batch_results_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValueInput">encoded_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformationInput">transformation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweakInput">tweak_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInput">batch_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResults">batch_results</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValue">encoded_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformation">transformation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweak">tweak</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.value">value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `batch_input_input`<sup>Optional</sup> <a name="batch_input_input" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInputInput"></a>

```python
batch_input_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `batch_results_input`<sup>Optional</sup> <a name="batch_results_input" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResultsInput"></a>

```python
batch_results_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `encoded_value_input`<sup>Optional</sup> <a name="encoded_value_input" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValueInput"></a>

```python
encoded_value_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `transformation_input`<sup>Optional</sup> <a name="transformation_input" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformationInput"></a>

```python
transformation_input: str
```

- *Type:* str

---

##### `tweak_input`<sup>Optional</sup> <a name="tweak_input" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweakInput"></a>

```python
tweak_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `batch_input`<sup>Required</sup> <a name="batch_input" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInput"></a>

```python
batch_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `batch_results`<sup>Required</sup> <a name="batch_results" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResults"></a>

```python
batch_results: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `encoded_value`<sup>Required</sup> <a name="encoded_value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValue"></a>

```python
encoded_value: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformation"></a>

```python
transformation: str
```

- *Type:* str

---

##### `tweak`<sup>Required</sup> <a name="tweak" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweak"></a>

```python
tweak: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.value"></a>

```python
value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransformEncodeConfig <a name="DataVaultTransformEncodeConfig" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transform_encode

dataVaultTransformEncode.DataVaultTransformEncodeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path: str,
  role_name: str,
  batch_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  batch_results: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  encoded_value: str = None,
  id: str = None,
  namespace: str = None,
  transformation: str = None,
  tweak: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.path">path</a></code> | <code>str</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.roleName">role_name</a></code> | <code>str</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchInput">batch_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | Specifies a list of items to be encoded in a single batch. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchResults">batch_results</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | The result of encoding batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.encodedValue">encoded_value</a></code> | <code>str</code> | The result of encoding a value. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#id DataVaultTransformEncode#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.transformation">transformation</a></code> | <code>str</code> | The transformation to perform. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.tweak">tweak</a></code> | <code>str</code> | The tweak value to use. Only applicable for FPE transformations. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.value">value</a></code> | <code>str</code> | The value in which to encode. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#path DataVaultTransformEncode#path}

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#role_name DataVaultTransformEncode#role_name}

---

##### `batch_input`<sup>Optional</sup> <a name="batch_input" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchInput"></a>

```python
batch_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

Specifies a list of items to be encoded in a single batch.

If this parameter is set, the parameters 'value', 'transformation' and 'tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#batch_input DataVaultTransformEncode#batch_input}

---

##### `batch_results`<sup>Optional</sup> <a name="batch_results" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchResults"></a>

```python
batch_results: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

The result of encoding batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#batch_results DataVaultTransformEncode#batch_results}

---

##### `encoded_value`<sup>Optional</sup> <a name="encoded_value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.encodedValue"></a>

```python
encoded_value: str
```

- *Type:* str

The result of encoding a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#encoded_value DataVaultTransformEncode#encoded_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#id DataVaultTransformEncode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#namespace DataVaultTransformEncode#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.transformation"></a>

```python
transformation: str
```

- *Type:* str

The transformation to perform.

If no value is provided and the role contains a single transformation, this value will be inferred from the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#transformation DataVaultTransformEncode#transformation}

---

##### `tweak`<sup>Optional</sup> <a name="tweak" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.tweak"></a>

```python
tweak: str
```

- *Type:* str

The tweak value to use. Only applicable for FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#tweak DataVaultTransformEncode#tweak}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.value"></a>

```python
value: str
```

- *Type:* str

The value in which to encode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/data-sources/transform_encode#value DataVaultTransformEncode#value}

---



