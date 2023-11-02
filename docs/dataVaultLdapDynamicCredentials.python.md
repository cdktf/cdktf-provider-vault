# `data_vault_ldap_dynamic_credentials`

Refer to the Terraform Registory for docs: [`data_vault_ldap_dynamic_credentials`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/ldap_dynamic_credentials).

# `dataVaultLdapDynamicCredentials` Submodule <a name="`dataVaultLdapDynamicCredentials` Submodule" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultLdapDynamicCredentials <a name="DataVaultLdapDynamicCredentials" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/ldap_dynamic_credentials vault_ldap_dynamic_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ldap_dynamic_credentials

dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials(
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
  role_name: str,
  id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.mount">mount</a></code> | <code>str</code> | LDAP Secret Backend to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/ldap_dynamic_credentials#id DataVaultLdapDynamicCredentials#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.mount"></a>

- *Type:* str

LDAP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/ldap_dynamic_credentials#mount DataVaultLdapDynamicCredentials#mount}

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.roleName"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/ldap_dynamic_credentials#role_name DataVaultLdapDynamicCredentials#role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/ldap_dynamic_credentials#id DataVaultLdapDynamicCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/ldap_dynamic_credentials#namespace DataVaultLdapDynamicCredentials#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVaultLdapDynamicCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ldap_dynamic_credentials

dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ldap_dynamic_credentials

dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ldap_dynamic_credentials

dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ldap_dynamic_credentials

dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVaultLdapDynamicCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultLdapDynamicCredentials to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultLdapDynamicCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/ldap_dynamic_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultLdapDynamicCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.distinguishedNames">distinguished_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseDuration">lease_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseId">lease_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseRenewable">lease_renewable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `distinguished_names`<sup>Required</sup> <a name="distinguished_names" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.distinguishedNames"></a>

```python
distinguished_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lease_duration`<sup>Required</sup> <a name="lease_duration" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseDuration"></a>

```python
lease_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lease_id`<sup>Required</sup> <a name="lease_id" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseId"></a>

```python
lease_id: str
```

- *Type:* str

---

##### `lease_renewable`<sup>Required</sup> <a name="lease_renewable" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseRenewable"></a>

```python
lease_renewable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultLdapDynamicCredentialsConfig <a name="DataVaultLdapDynamicCredentialsConfig" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ldap_dynamic_credentials

dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mount: str,
  role_name: str,
  id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.mount">mount</a></code> | <code>str</code> | LDAP Secret Backend to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.roleName">role_name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/ldap_dynamic_credentials#id DataVaultLdapDynamicCredentials#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

LDAP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/ldap_dynamic_credentials#mount DataVaultLdapDynamicCredentials#mount}

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/ldap_dynamic_credentials#role_name DataVaultLdapDynamicCredentials#role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/ldap_dynamic_credentials#id DataVaultLdapDynamicCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/ldap_dynamic_credentials#namespace DataVaultLdapDynamicCredentials#namespace}

---



