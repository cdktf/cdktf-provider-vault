# `dataVaultPolicyDocument` Submodule <a name="`dataVaultPolicyDocument` Submodule" id="@cdktf/provider-vault.dataVaultPolicyDocument"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPolicyDocument <a name="DataVaultPolicyDocument" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document vault_policy_document}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_policy_document

dataVaultPolicyDocument.DataVaultPolicyDocument(
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
  namespace: str = None,
  rule: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRule]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#id DataVaultPolicyDocument#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>]]</code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#id DataVaultPolicyDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#namespace DataVaultPolicyDocument#namespace}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#rule DataVaultPolicyDocument#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetRule">reset_rule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetRule"></a>

```python
def reset_rule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVaultPolicyDocument resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_policy_document

dataVaultPolicyDocument.DataVaultPolicyDocument.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_policy_document

dataVaultPolicyDocument.DataVaultPolicyDocument.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_policy_document

dataVaultPolicyDocument.DataVaultPolicyDocument.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_policy_document

dataVaultPolicyDocument.DataVaultPolicyDocument.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVaultPolicyDocument resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultPolicyDocument to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultPolicyDocument that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultPolicyDocument to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.hcl">hcl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList">DataVaultPolicyDocumentRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `hcl`<sup>Required</sup> <a name="hcl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.hcl"></a>

```python
hcl: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.rule"></a>

```python
rule: DataVaultPolicyDocumentRuleList
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList">DataVaultPolicyDocumentRuleList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPolicyDocumentConfig <a name="DataVaultPolicyDocumentConfig" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_policy_document

dataVaultPolicyDocument.DataVaultPolicyDocumentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  namespace: str = None,
  rule: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRule]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#id DataVaultPolicyDocument#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>]]</code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#id DataVaultPolicyDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#namespace DataVaultPolicyDocument#namespace}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#rule DataVaultPolicyDocument#rule}

---

### DataVaultPolicyDocumentRule <a name="DataVaultPolicyDocumentRule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_policy_document

dataVaultPolicyDocument.DataVaultPolicyDocumentRule(
  capabilities: typing.List[str],
  path: str,
  allowed_parameter: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRuleAllowedParameter]] = None,
  denied_parameter: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRuleDeniedParameter]] = None,
  description: str = None,
  max_wrapping_ttl: str = None,
  min_wrapping_ttl: str = None,
  required_parameters: typing.List[str] = None,
  subscribe_event_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | A list of capabilities to apply to the specified path. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.path">path</a></code> | <code>str</code> | A path in Vault that this rule applies to. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.allowedParameter">allowed_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>]]</code> | allowed_parameter block. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.deniedParameter">denied_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>]]</code> | denied_parameter block. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.description">description</a></code> | <code>str</code> | Description of the rule. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.maxWrappingTtl">max_wrapping_ttl</a></code> | <code>str</code> | The maximum allowed TTL that clients can specify for a wrapped response. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.minWrappingTtl">min_wrapping_ttl</a></code> | <code>str</code> | The minimum allowed TTL that clients can specify for a wrapped response. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.requiredParameters">required_parameters</a></code> | <code>typing.List[str]</code> | A list of parameters that must be specified. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.subscribeEventTypes">subscribe_event_types</a></code> | <code>typing.List[str]</code> | A list of event types to subscribe to when using `subscribe` capability. |

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

A list of capabilities to apply to the specified path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#capabilities DataVaultPolicyDocument#capabilities}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.path"></a>

```python
path: str
```

- *Type:* str

A path in Vault that this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#path DataVaultPolicyDocument#path}

---

##### `allowed_parameter`<sup>Optional</sup> <a name="allowed_parameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.allowedParameter"></a>

```python
allowed_parameter: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRuleAllowedParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>]]

allowed_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#allowed_parameter DataVaultPolicyDocument#allowed_parameter}

---

##### `denied_parameter`<sup>Optional</sup> <a name="denied_parameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.deniedParameter"></a>

```python
denied_parameter: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRuleDeniedParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>]]

denied_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#denied_parameter DataVaultPolicyDocument#denied_parameter}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#description DataVaultPolicyDocument#description}

---

##### `max_wrapping_ttl`<sup>Optional</sup> <a name="max_wrapping_ttl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.maxWrappingTtl"></a>

```python
max_wrapping_ttl: str
```

- *Type:* str

The maximum allowed TTL that clients can specify for a wrapped response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#max_wrapping_ttl DataVaultPolicyDocument#max_wrapping_ttl}

---

##### `min_wrapping_ttl`<sup>Optional</sup> <a name="min_wrapping_ttl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.minWrappingTtl"></a>

```python
min_wrapping_ttl: str
```

- *Type:* str

The minimum allowed TTL that clients can specify for a wrapped response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#min_wrapping_ttl DataVaultPolicyDocument#min_wrapping_ttl}

---

##### `required_parameters`<sup>Optional</sup> <a name="required_parameters" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.requiredParameters"></a>

```python
required_parameters: typing.List[str]
```

- *Type:* typing.List[str]

A list of parameters that must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#required_parameters DataVaultPolicyDocument#required_parameters}

---

##### `subscribe_event_types`<sup>Optional</sup> <a name="subscribe_event_types" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.subscribeEventTypes"></a>

```python
subscribe_event_types: typing.List[str]
```

- *Type:* typing.List[str]

A list of event types to subscribe to when using `subscribe` capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#subscribe_event_types DataVaultPolicyDocument#subscribe_event_types}

---

### DataVaultPolicyDocumentRuleAllowedParameter <a name="DataVaultPolicyDocumentRuleAllowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_policy_document

dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter(
  key: str,
  value: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.key">key</a></code> | <code>str</code> | Name of permitted key. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.value">value</a></code> | <code>typing.List[str]</code> | A list of values what are permitted by policy rule. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.key"></a>

```python
key: str
```

- *Type:* str

Name of permitted key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

A list of values what are permitted by policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}

---

### DataVaultPolicyDocumentRuleDeniedParameter <a name="DataVaultPolicyDocumentRuleDeniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_policy_document

dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter(
  key: str,
  value: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.key">key</a></code> | <code>str</code> | Name of denied key. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.value">value</a></code> | <code>typing.List[str]</code> | A list of values what are denied by policy rule. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.key"></a>

```python
key: str
```

- *Type:* str

Name of denied key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

A list of values what are denied by policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVaultPolicyDocumentRuleAllowedParameterList <a name="DataVaultPolicyDocumentRuleAllowedParameterList" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_policy_document

dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataVaultPolicyDocumentRuleAllowedParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRuleAllowedParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>]]

---


### DataVaultPolicyDocumentRuleAllowedParameterOutputReference <a name="DataVaultPolicyDocumentRuleAllowedParameterOutputReference" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_policy_document

dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.valueInput">value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.value">value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.valueInput"></a>

```python
value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataVaultPolicyDocumentRuleAllowedParameter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>]

---


### DataVaultPolicyDocumentRuleDeniedParameterList <a name="DataVaultPolicyDocumentRuleDeniedParameterList" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_policy_document

dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataVaultPolicyDocumentRuleDeniedParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRuleDeniedParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>]]

---


### DataVaultPolicyDocumentRuleDeniedParameterOutputReference <a name="DataVaultPolicyDocumentRuleDeniedParameterOutputReference" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_policy_document

dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.valueInput">value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.value">value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.valueInput"></a>

```python
value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataVaultPolicyDocumentRuleDeniedParameter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>]

---


### DataVaultPolicyDocumentRuleList <a name="DataVaultPolicyDocumentRuleList" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_policy_document

dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataVaultPolicyDocumentRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>]]

---


### DataVaultPolicyDocumentRuleOutputReference <a name="DataVaultPolicyDocumentRuleOutputReference" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_policy_document

dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putAllowedParameter">put_allowed_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putDeniedParameter">put_denied_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetAllowedParameter">reset_allowed_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDeniedParameter">reset_denied_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMaxWrappingTtl">reset_max_wrapping_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMinWrappingTtl">reset_min_wrapping_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetRequiredParameters">reset_required_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetSubscribeEventTypes">reset_subscribe_event_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allowed_parameter` <a name="put_allowed_parameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putAllowedParameter"></a>

```python
def put_allowed_parameter(
  value: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRuleAllowedParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putAllowedParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>]]

---

##### `put_denied_parameter` <a name="put_denied_parameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putDeniedParameter"></a>

```python
def put_denied_parameter(
  value: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRuleDeniedParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putDeniedParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>]]

---

##### `reset_allowed_parameter` <a name="reset_allowed_parameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetAllowedParameter"></a>

```python
def reset_allowed_parameter() -> None
```

##### `reset_denied_parameter` <a name="reset_denied_parameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDeniedParameter"></a>

```python
def reset_denied_parameter() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_max_wrapping_ttl` <a name="reset_max_wrapping_ttl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMaxWrappingTtl"></a>

```python
def reset_max_wrapping_ttl() -> None
```

##### `reset_min_wrapping_ttl` <a name="reset_min_wrapping_ttl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMinWrappingTtl"></a>

```python
def reset_min_wrapping_ttl() -> None
```

##### `reset_required_parameters` <a name="reset_required_parameters" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetRequiredParameters"></a>

```python
def reset_required_parameters() -> None
```

##### `reset_subscribe_event_types` <a name="reset_subscribe_event_types" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetSubscribeEventTypes"></a>

```python
def reset_subscribe_event_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameter">allowed_parameter</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList">DataVaultPolicyDocumentRuleAllowedParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameter">denied_parameter</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList">DataVaultPolicyDocumentRuleDeniedParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameterInput">allowed_parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilitiesInput">capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameterInput">denied_parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtlInput">max_wrapping_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtlInput">min_wrapping_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParametersInput">required_parameters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.subscribeEventTypesInput">subscribe_event_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtl">max_wrapping_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtl">min_wrapping_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParameters">required_parameters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.subscribeEventTypes">subscribe_event_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_parameter`<sup>Required</sup> <a name="allowed_parameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameter"></a>

```python
allowed_parameter: DataVaultPolicyDocumentRuleAllowedParameterList
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList">DataVaultPolicyDocumentRuleAllowedParameterList</a>

---

##### `denied_parameter`<sup>Required</sup> <a name="denied_parameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameter"></a>

```python
denied_parameter: DataVaultPolicyDocumentRuleDeniedParameterList
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList">DataVaultPolicyDocumentRuleDeniedParameterList</a>

---

##### `allowed_parameter_input`<sup>Optional</sup> <a name="allowed_parameter_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameterInput"></a>

```python
allowed_parameter_input: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRuleAllowedParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>]]

---

##### `capabilities_input`<sup>Optional</sup> <a name="capabilities_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilitiesInput"></a>

```python
capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_parameter_input`<sup>Optional</sup> <a name="denied_parameter_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameterInput"></a>

```python
denied_parameter_input: typing.Union[IResolvable, typing.List[DataVaultPolicyDocumentRuleDeniedParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `max_wrapping_ttl_input`<sup>Optional</sup> <a name="max_wrapping_ttl_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtlInput"></a>

```python
max_wrapping_ttl_input: str
```

- *Type:* str

---

##### `min_wrapping_ttl_input`<sup>Optional</sup> <a name="min_wrapping_ttl_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtlInput"></a>

```python
min_wrapping_ttl_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `required_parameters_input`<sup>Optional</sup> <a name="required_parameters_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParametersInput"></a>

```python
required_parameters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subscribe_event_types_input`<sup>Optional</sup> <a name="subscribe_event_types_input" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.subscribeEventTypesInput"></a>

```python
subscribe_event_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `max_wrapping_ttl`<sup>Required</sup> <a name="max_wrapping_ttl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtl"></a>

```python
max_wrapping_ttl: str
```

- *Type:* str

---

##### `min_wrapping_ttl`<sup>Required</sup> <a name="min_wrapping_ttl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtl"></a>

```python
min_wrapping_ttl: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `required_parameters`<sup>Required</sup> <a name="required_parameters" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParameters"></a>

```python
required_parameters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subscribe_event_types`<sup>Required</sup> <a name="subscribe_event_types" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.subscribeEventTypes"></a>

```python
subscribe_event_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataVaultPolicyDocumentRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>]

---



