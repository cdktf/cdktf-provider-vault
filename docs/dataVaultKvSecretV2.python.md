# `data_vault_kv_secret_v2`

Refer to the Terraform Registory for docs: [`data_vault_kv_secret_v2`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/kv_secret_v2).

# `dataVaultKvSecretV2` Submodule <a name="`dataVaultKvSecretV2` Submodule" id="@cdktf/provider-vault.dataVaultKvSecretV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultKvSecretV2 <a name="DataVaultKvSecretV2" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/kv_secret_v2 vault_kv_secret_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kv_secret_v2

dataVaultKvSecretV2.DataVaultKvSecretV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mount: str,
  name: str,
  id: str = None,
  namespace: str = None,
  version: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path where KV-V2 engine is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Full name of the secret. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/kv_secret_v2#id DataVaultKvSecretV2#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.version">version</a></code> | <code>typing.Union[int, float]</code> | Version of the secret to retrieve. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.mount"></a>

- *Type:* str

Path where KV-V2 engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/kv_secret_v2#mount DataVaultKvSecretV2#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.name"></a>

- *Type:* str

Full name of the secret.

For a nested secret, the name is the nested path excluding the mount and data prefix. For example, for a secret at 'kvv2/data/foo/bar/baz', the name is 'foo/bar/baz'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/kv_secret_v2#name DataVaultKvSecretV2#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/kv_secret_v2#id DataVaultKvSecretV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/kv_secret_v2#namespace DataVaultKvSecretV2#namespace}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.Initializer.parameter.version"></a>

- *Type:* typing.Union[int, float]

Version of the secret to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/kv_secret_v2#version DataVaultKvSecretV2#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVaultKvSecretV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kv_secret_v2

dataVaultKvSecretV2.DataVaultKvSecretV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kv_secret_v2

dataVaultKvSecretV2.DataVaultKvSecretV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kv_secret_v2

dataVaultKvSecretV2.DataVaultKvSecretV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kv_secret_v2

dataVaultKvSecretV2.DataVaultKvSecretV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVaultKvSecretV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultKvSecretV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultKvSecretV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/kv_secret_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultKvSecretV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.customMetadata">custom_metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.data">data</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.dataJson">data_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.deletionTime">deletion_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.destroyed">destroyed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `custom_metadata`<sup>Required</sup> <a name="custom_metadata" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.customMetadata"></a>

```python
custom_metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.data"></a>

```python
data: StringMap
```

- *Type:* cdktf.StringMap

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.dataJson"></a>

```python
data_json: str
```

- *Type:* str

---

##### `deletion_time`<sup>Required</sup> <a name="deletion_time" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.deletionTime"></a>

```python
deletion_time: str
```

- *Type:* str

---

##### `destroyed`<sup>Required</sup> <a name="destroyed" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.destroyed"></a>

```python
destroyed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultKvSecretV2Config <a name="DataVaultKvSecretV2Config" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kv_secret_v2

dataVaultKvSecretV2.DataVaultKvSecretV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mount: str,
  name: str,
  id: str = None,
  namespace: str = None,
  version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.mount">mount</a></code> | <code>str</code> | Path where KV-V2 engine is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.name">name</a></code> | <code>str</code> | Full name of the secret. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/kv_secret_v2#id DataVaultKvSecretV2#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Version of the secret to retrieve. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path where KV-V2 engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/kv_secret_v2#mount DataVaultKvSecretV2#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Full name of the secret.

For a nested secret, the name is the nested path excluding the mount and data prefix. For example, for a secret at 'kvv2/data/foo/bar/baz', the name is 'foo/bar/baz'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/kv_secret_v2#name DataVaultKvSecretV2#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/kv_secret_v2#id DataVaultKvSecretV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/kv_secret_v2#namespace DataVaultKvSecretV2#namespace}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-vault.dataVaultKvSecretV2.DataVaultKvSecretV2Config.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version of the secret to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/kv_secret_v2#version DataVaultKvSecretV2#version}

---



