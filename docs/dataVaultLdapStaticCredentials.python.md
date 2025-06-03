# `dataVaultLdapStaticCredentials` Submodule <a name="`dataVaultLdapStaticCredentials` Submodule" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultLdapStaticCredentials <a name="DataVaultLdapStaticCredentials" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ldap_static_credentials vault_ldap_static_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ldap_static_credentials

dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials(
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
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.mount">mount</a></code> | <code>str</code> | LDAP Secret Backend to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ldap_static_credentials#id DataVaultLdapStaticCredentials#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.mount"></a>

- *Type:* str

LDAP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ldap_static_credentials#mount DataVaultLdapStaticCredentials#mount}

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.roleName"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ldap_static_credentials#role_name DataVaultLdapStaticCredentials#role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ldap_static_credentials#id DataVaultLdapStaticCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ldap_static_credentials#namespace DataVaultLdapStaticCredentials#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVaultLdapStaticCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ldap_static_credentials

dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ldap_static_credentials

dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ldap_static_credentials

dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ldap_static_credentials

dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVaultLdapStaticCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultLdapStaticCredentials to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultLdapStaticCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ldap_static_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultLdapStaticCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dn">dn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastPassword">last_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastVaultRotation">last_vault_rotation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dn"></a>

```python
dn: str
```

- *Type:* str

---

##### `last_password`<sup>Required</sup> <a name="last_password" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastPassword"></a>

```python
last_password: str
```

- *Type:* str

---

##### `last_vault_rotation`<sup>Required</sup> <a name="last_vault_rotation" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastVaultRotation"></a>

```python
last_vault_rotation: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.rotationPeriod"></a>

```python
rotation_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultLdapStaticCredentialsConfig <a name="DataVaultLdapStaticCredentialsConfig" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ldap_static_credentials

dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig(
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
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.mount">mount</a></code> | <code>str</code> | LDAP Secret Backend to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.roleName">role_name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ldap_static_credentials#id DataVaultLdapStaticCredentials#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

LDAP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ldap_static_credentials#mount DataVaultLdapStaticCredentials#mount}

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ldap_static_credentials#role_name DataVaultLdapStaticCredentials#role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ldap_static_credentials#id DataVaultLdapStaticCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/ldap_static_credentials#namespace DataVaultLdapStaticCredentials#namespace}

---



