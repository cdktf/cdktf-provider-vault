# `data_vault_generic_secret`

Refer to the Terraform Registory for docs: [`data_vault_generic_secret`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret).

# `dataVaultGenericSecret` Submodule <a name="`dataVaultGenericSecret` Submodule" id="@cdktf/provider-vault.dataVaultGenericSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultGenericSecret <a name="DataVaultGenericSecret" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret vault_generic_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_generic_secret

dataVaultGenericSecret.DataVaultGenericSecret(
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
  id: str = None,
  namespace: str = None,
  version: typing.Union[int, float] = None,
  with_lease_start_time: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.path">path</a></code> | <code>str</code> | Full path from which a secret will be read. |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret#id DataVaultGenericSecret#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret#version DataVaultGenericSecret#version}. |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.withLeaseStartTime">with_lease_start_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, stores 'lease_start_time' in the TF state. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.path"></a>

- *Type:* str

Full path from which a secret will be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret#path DataVaultGenericSecret#path}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret#id DataVaultGenericSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret#namespace DataVaultGenericSecret#namespace}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.version"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret#version DataVaultGenericSecret#version}.

---

##### `with_lease_start_time`<sup>Optional</sup> <a name="with_lease_start_time" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.Initializer.parameter.withLeaseStartTime"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, stores 'lease_start_time' in the TF state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret#with_lease_start_time DataVaultGenericSecret#with_lease_start_time}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.resetVersion">reset_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.resetWithLeaseStartTime">reset_with_lease_start_time</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.resetVersion"></a>

```python
def reset_version() -> None
```

##### `reset_with_lease_start_time` <a name="reset_with_lease_start_time" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.resetWithLeaseStartTime"></a>

```python
def reset_with_lease_start_time() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_generic_secret

dataVaultGenericSecret.DataVaultGenericSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_generic_secret

dataVaultGenericSecret.DataVaultGenericSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_generic_secret

dataVaultGenericSecret.DataVaultGenericSecret.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.data">data</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.dataJson">data_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.leaseDuration">lease_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.leaseId">lease_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.leaseRenewable">lease_renewable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.leaseStartTime">lease_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.withLeaseStartTimeInput">with_lease_start_time_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.withLeaseStartTime">with_lease_start_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.data"></a>

```python
data: StringMap
```

- *Type:* cdktf.StringMap

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.dataJson"></a>

```python
data_json: str
```

- *Type:* str

---

##### `lease_duration`<sup>Required</sup> <a name="lease_duration" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.leaseDuration"></a>

```python
lease_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lease_id`<sup>Required</sup> <a name="lease_id" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.leaseId"></a>

```python
lease_id: str
```

- *Type:* str

---

##### `lease_renewable`<sup>Required</sup> <a name="lease_renewable" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.leaseRenewable"></a>

```python
lease_renewable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lease_start_time`<sup>Required</sup> <a name="lease_start_time" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.leaseStartTime"></a>

```python
lease_start_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `with_lease_start_time_input`<sup>Optional</sup> <a name="with_lease_start_time_input" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.withLeaseStartTimeInput"></a>

```python
with_lease_start_time_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `with_lease_start_time`<sup>Required</sup> <a name="with_lease_start_time" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.withLeaseStartTime"></a>

```python
with_lease_start_time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultGenericSecretConfig <a name="DataVaultGenericSecretConfig" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_generic_secret

dataVaultGenericSecret.DataVaultGenericSecretConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path: str,
  id: str = None,
  namespace: str = None,
  version: typing.Union[int, float] = None,
  with_lease_start_time: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.path">path</a></code> | <code>str</code> | Full path from which a secret will be read. |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret#id DataVaultGenericSecret#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret#version DataVaultGenericSecret#version}. |
| <code><a href="#@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.withLeaseStartTime">with_lease_start_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, stores 'lease_start_time' in the TF state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Full path from which a secret will be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret#path DataVaultGenericSecret#path}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret#id DataVaultGenericSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret#namespace DataVaultGenericSecret#namespace}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret#version DataVaultGenericSecret#version}.

---

##### `with_lease_start_time`<sup>Optional</sup> <a name="with_lease_start_time" id="@cdktf/provider-vault.dataVaultGenericSecret.DataVaultGenericSecretConfig.property.withLeaseStartTime"></a>

```python
with_lease_start_time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, stores 'lease_start_time' in the TF state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/generic_secret#with_lease_start_time DataVaultGenericSecret#with_lease_start_time}

---



