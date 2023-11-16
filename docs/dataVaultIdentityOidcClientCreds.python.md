# `data_vault_identity_oidc_client_creds`

Refer to the Terraform Registory for docs: [`data_vault_identity_oidc_client_creds`](https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_oidc_client_creds).

# `dataVaultIdentityOidcClientCreds` Submodule <a name="`dataVaultIdentityOidcClientCreds` Submodule" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultIdentityOidcClientCreds <a name="DataVaultIdentityOidcClientCreds" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_oidc_client_creds vault_identity_oidc_client_creds}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_oidc_client_creds

dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds(
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
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the client. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_oidc_client_creds#id DataVaultIdentityOidcClientCreds#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.name"></a>

- *Type:* str

The name of the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_oidc_client_creds#name DataVaultIdentityOidcClientCreds#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_oidc_client_creds#id DataVaultIdentityOidcClientCreds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_oidc_client_creds#namespace DataVaultIdentityOidcClientCreds#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVaultIdentityOidcClientCreds resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_oidc_client_creds

dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_oidc_client_creds

dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_oidc_client_creds

dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_oidc_client_creds

dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVaultIdentityOidcClientCreds resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultIdentityOidcClientCreds to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultIdentityOidcClientCreds that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_oidc_client_creds#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultIdentityOidcClientCreds to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCreds.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultIdentityOidcClientCredsConfig <a name="DataVaultIdentityOidcClientCredsConfig" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_oidc_client_creds

dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig(
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
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.name">name</a></code> | <code>str</code> | The name of the client. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_oidc_client_creds#id DataVaultIdentityOidcClientCreds#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_oidc_client_creds#name DataVaultIdentityOidcClientCreds#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_oidc_client_creds#id DataVaultIdentityOidcClientCreds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityOidcClientCreds.DataVaultIdentityOidcClientCredsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/identity_oidc_client_creds#namespace DataVaultIdentityOidcClientCreds#namespace}

---



