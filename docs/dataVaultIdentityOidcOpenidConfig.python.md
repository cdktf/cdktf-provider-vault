# `data_vault_identity_oidc_openid_config`

Refer to the Terraform Registory for docs: [`data_vault_identity_oidc_openid_config`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/identity_oidc_openid_config).

# `dataVaultIdentityOidcOpenidConfig` Submodule <a name="`dataVaultIdentityOidcOpenidConfig` Submodule" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultIdentityOidcOpenidConfig <a name="DataVaultIdentityOidcOpenidConfig" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/identity_oidc_openid_config vault_identity_oidc_openid_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_oidc_openid_config

dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig(
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
  id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the provider. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/identity_oidc_openid_config#id DataVaultIdentityOidcOpenidConfig#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.name"></a>

- *Type:* str

The name of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/identity_oidc_openid_config#name DataVaultIdentityOidcOpenidConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/identity_oidc_openid_config#id DataVaultIdentityOidcOpenidConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/identity_oidc_openid_config#namespace DataVaultIdentityOidcOpenidConfig#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVaultIdentityOidcOpenidConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_oidc_openid_config

dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_oidc_openid_config

dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_oidc_openid_config

dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_oidc_openid_config

dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVaultIdentityOidcOpenidConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultIdentityOidcOpenidConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultIdentityOidcOpenidConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/identity_oidc_openid_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultIdentityOidcOpenidConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.grantTypesSupported">grant_types_supported</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idTokenSigningAlgValuesSupported">id_token_signing_alg_values_supported</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.jwksUri">jwks_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.requestUriParameterSupported">request_uri_parameter_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.responseTypesSupported">response_types_supported</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.scopesSupported">scopes_supported</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.subjectTypesSupported">subject_types_supported</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpointAuthMethodsSupported">token_endpoint_auth_methods_supported</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.userinfoEndpoint">userinfo_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `grant_types_supported`<sup>Required</sup> <a name="grant_types_supported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.grantTypesSupported"></a>

```python
grant_types_supported: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_token_signing_alg_values_supported`<sup>Required</sup> <a name="id_token_signing_alg_values_supported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idTokenSigningAlgValuesSupported"></a>

```python
id_token_signing_alg_values_supported: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `jwks_uri`<sup>Required</sup> <a name="jwks_uri" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.jwksUri"></a>

```python
jwks_uri: str
```

- *Type:* str

---

##### `request_uri_parameter_supported`<sup>Required</sup> <a name="request_uri_parameter_supported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.requestUriParameterSupported"></a>

```python
request_uri_parameter_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `response_types_supported`<sup>Required</sup> <a name="response_types_supported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.responseTypesSupported"></a>

```python
response_types_supported: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scopes_supported`<sup>Required</sup> <a name="scopes_supported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.scopesSupported"></a>

```python
scopes_supported: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subject_types_supported`<sup>Required</sup> <a name="subject_types_supported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.subjectTypesSupported"></a>

```python
subject_types_supported: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `token_endpoint_auth_methods_supported`<sup>Required</sup> <a name="token_endpoint_auth_methods_supported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpointAuthMethodsSupported"></a>

```python
token_endpoint_auth_methods_supported: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `userinfo_endpoint`<sup>Required</sup> <a name="userinfo_endpoint" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.userinfoEndpoint"></a>

```python
userinfo_endpoint: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultIdentityOidcOpenidConfigConfig <a name="DataVaultIdentityOidcOpenidConfigConfig" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_oidc_openid_config

dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.name">name</a></code> | <code>str</code> | The name of the provider. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/identity_oidc_openid_config#id DataVaultIdentityOidcOpenidConfig#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/identity_oidc_openid_config#name DataVaultIdentityOidcOpenidConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/identity_oidc_openid_config#id DataVaultIdentityOidcOpenidConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/identity_oidc_openid_config#namespace DataVaultIdentityOidcOpenidConfig#namespace}

---



