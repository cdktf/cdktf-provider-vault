# `data_vault_transit_encrypt`

Refer to the Terraform Registory for docs: [`data_vault_transit_encrypt`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt).

# `dataVaultTransitEncrypt` Submodule <a name="`dataVaultTransitEncrypt` Submodule" id="@cdktf/provider-vault.dataVaultTransitEncrypt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitEncrypt <a name="DataVaultTransitEncrypt" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt vault_transit_encrypt}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transit_encrypt

dataVaultTransitEncrypt.DataVaultTransitEncrypt(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  key: str,
  plaintext: str,
  context: str = None,
  id: str = None,
  key_version: typing.Union[int, float] = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.key">key</a></code> | <code>str</code> | Name of the encryption key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.plaintext">plaintext</a></code> | <code>str</code> | Map of strings read from Vault. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.context">context</a></code> | <code>str</code> | Specifies the context for key derivation. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#id DataVaultTransitEncrypt#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.keyVersion">key_version</a></code> | <code>typing.Union[int, float]</code> | The version of the key to use for encryption. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.backend"></a>

- *Type:* str

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#backend DataVaultTransitEncrypt#backend}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.key"></a>

- *Type:* str

Name of the encryption key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#key DataVaultTransitEncrypt#key}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.plaintext"></a>

- *Type:* str

Map of strings read from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#plaintext DataVaultTransitEncrypt#plaintext}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.context"></a>

- *Type:* str

Specifies the context for key derivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#context DataVaultTransitEncrypt#context}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#id DataVaultTransitEncrypt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_version`<sup>Optional</sup> <a name="key_version" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.keyVersion"></a>

- *Type:* typing.Union[int, float]

The version of the key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#key_version DataVaultTransitEncrypt#key_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#namespace DataVaultTransitEncrypt#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetKeyVersion">reset_key_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_context` <a name="reset_context" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_version` <a name="reset_key_version" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetKeyVersion"></a>

```python
def reset_key_version() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transit_encrypt

dataVaultTransitEncrypt.DataVaultTransitEncrypt.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transit_encrypt

dataVaultTransitEncrypt.DataVaultTransitEncrypt.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transit_encrypt

dataVaultTransitEncrypt.DataVaultTransitEncrypt.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.ciphertext">ciphertext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.contextInput">context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersionInput">key_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.context">context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersion">key_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.ciphertext"></a>

```python
ciphertext: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.contextInput"></a>

```python
context_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `key_version_input`<sup>Optional</sup> <a name="key_version_input" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersionInput"></a>

```python
key_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.context"></a>

```python
context: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `key_version`<sup>Required</sup> <a name="key_version" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersion"></a>

```python
key_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitEncryptConfig <a name="DataVaultTransitEncryptConfig" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transit_encrypt

dataVaultTransitEncrypt.DataVaultTransitEncryptConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  key: str,
  plaintext: str,
  context: str = None,
  id: str = None,
  key_version: typing.Union[int, float] = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.backend">backend</a></code> | <code>str</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.key">key</a></code> | <code>str</code> | Name of the encryption key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.plaintext">plaintext</a></code> | <code>str</code> | Map of strings read from Vault. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.context">context</a></code> | <code>str</code> | Specifies the context for key derivation. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#id DataVaultTransitEncrypt#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.keyVersion">key_version</a></code> | <code>typing.Union[int, float]</code> | The version of the key to use for encryption. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#backend DataVaultTransitEncrypt#backend}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Name of the encryption key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#key DataVaultTransitEncrypt#key}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Map of strings read from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#plaintext DataVaultTransitEncrypt#plaintext}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.context"></a>

```python
context: str
```

- *Type:* str

Specifies the context for key derivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#context DataVaultTransitEncrypt#context}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#id DataVaultTransitEncrypt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_version`<sup>Optional</sup> <a name="key_version" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.keyVersion"></a>

```python
key_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The version of the key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#key_version DataVaultTransitEncrypt#key_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/transit_encrypt#namespace DataVaultTransitEncrypt#namespace}

---



