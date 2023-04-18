# `data_vault_identity_group`

Refer to the Terraform Registory for docs: [`data_vault_identity_group`](https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group).

# `dataVaultIdentityGroup` Submodule <a name="`dataVaultIdentityGroup` Submodule" id="@cdktf/provider-vault.dataVaultIdentityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultIdentityGroup <a name="DataVaultIdentityGroup" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group vault_identity_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_group

dataVaultIdentityGroup.DataVaultIdentityGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alias_id: str = None,
  alias_mount_accessor: str = None,
  alias_name: str = None,
  group_id: str = None,
  group_name: str = None,
  id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.aliasId">alias_id</a></code> | <code>str</code> | ID of the alias. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.aliasMountAccessor">alias_mount_accessor</a></code> | <code>str</code> | Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.aliasName">alias_name</a></code> | <code>str</code> | Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.groupName">group_name</a></code> | <code>str</code> | Name of the group. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#id DataVaultIdentityGroup#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias_id`<sup>Optional</sup> <a name="alias_id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.aliasId"></a>

- *Type:* str

ID of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#alias_id DataVaultIdentityGroup#alias_id}

---

##### `alias_mount_accessor`<sup>Optional</sup> <a name="alias_mount_accessor" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.aliasMountAccessor"></a>

- *Type:* str

Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#alias_mount_accessor DataVaultIdentityGroup#alias_mount_accessor}

---

##### `alias_name`<sup>Optional</sup> <a name="alias_name" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.aliasName"></a>

- *Type:* str

Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#alias_name DataVaultIdentityGroup#alias_name}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.groupId"></a>

- *Type:* str

ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#group_id DataVaultIdentityGroup#group_id}

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.groupName"></a>

- *Type:* str

Name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#group_name DataVaultIdentityGroup#group_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#id DataVaultIdentityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#namespace DataVaultIdentityGroup#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasId">reset_alias_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasMountAccessor">reset_alias_mount_accessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasName">reset_alias_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupName">reset_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_alias_id` <a name="reset_alias_id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasId"></a>

```python
def reset_alias_id() -> None
```

##### `reset_alias_mount_accessor` <a name="reset_alias_mount_accessor" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasMountAccessor"></a>

```python
def reset_alias_mount_accessor() -> None
```

##### `reset_alias_name` <a name="reset_alias_name" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasName"></a>

```python
def reset_alias_name() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_group_name` <a name="reset_group_name" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupName"></a>

```python
def reset_group_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_group

dataVaultIdentityGroup.DataVaultIdentityGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_group

dataVaultIdentityGroup.DataVaultIdentityGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_group

dataVaultIdentityGroup.DataVaultIdentityGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCanonicalId">alias_canonical_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCreationTime">alias_creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasLastUpdateTime">alias_last_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMergedFromCanonicalIds">alias_merged_from_canonical_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMetadata">alias_metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountPath">alias_mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountType">alias_mount_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dataJson">data_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lastUpdateTime">last_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberEntityIds">member_entity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberGroupIds">member_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.modifyIndex">modify_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.parentGroupIds">parent_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasIdInput">alias_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessorInput">alias_mount_accessor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasNameInput">alias_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasId">alias_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessor">alias_mount_accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasName">alias_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `alias_canonical_id`<sup>Required</sup> <a name="alias_canonical_id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCanonicalId"></a>

```python
alias_canonical_id: str
```

- *Type:* str

---

##### `alias_creation_time`<sup>Required</sup> <a name="alias_creation_time" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCreationTime"></a>

```python
alias_creation_time: str
```

- *Type:* str

---

##### `alias_last_update_time`<sup>Required</sup> <a name="alias_last_update_time" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasLastUpdateTime"></a>

```python
alias_last_update_time: str
```

- *Type:* str

---

##### `alias_merged_from_canonical_ids`<sup>Required</sup> <a name="alias_merged_from_canonical_ids" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMergedFromCanonicalIds"></a>

```python
alias_merged_from_canonical_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alias_metadata`<sup>Required</sup> <a name="alias_metadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMetadata"></a>

```python
alias_metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `alias_mount_path`<sup>Required</sup> <a name="alias_mount_path" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountPath"></a>

```python
alias_mount_path: str
```

- *Type:* str

---

##### `alias_mount_type`<sup>Required</sup> <a name="alias_mount_type" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountType"></a>

```python
alias_mount_type: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dataJson"></a>

```python
data_json: str
```

- *Type:* str

---

##### `last_update_time`<sup>Required</sup> <a name="last_update_time" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lastUpdateTime"></a>

```python
last_update_time: str
```

- *Type:* str

---

##### `member_entity_ids`<sup>Required</sup> <a name="member_entity_ids" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberEntityIds"></a>

```python
member_entity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `member_group_ids`<sup>Required</sup> <a name="member_group_ids" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberGroupIds"></a>

```python
member_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `modify_index`<sup>Required</sup> <a name="modify_index" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.modifyIndex"></a>

```python
modify_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `parent_group_ids`<sup>Required</sup> <a name="parent_group_ids" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.parentGroupIds"></a>

```python
parent_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `alias_id_input`<sup>Optional</sup> <a name="alias_id_input" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasIdInput"></a>

```python
alias_id_input: str
```

- *Type:* str

---

##### `alias_mount_accessor_input`<sup>Optional</sup> <a name="alias_mount_accessor_input" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessorInput"></a>

```python
alias_mount_accessor_input: str
```

- *Type:* str

---

##### `alias_name_input`<sup>Optional</sup> <a name="alias_name_input" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasNameInput"></a>

```python
alias_name_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `alias_id`<sup>Required</sup> <a name="alias_id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasId"></a>

```python
alias_id: str
```

- *Type:* str

---

##### `alias_mount_accessor`<sup>Required</sup> <a name="alias_mount_accessor" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessor"></a>

```python
alias_mount_accessor: str
```

- *Type:* str

---

##### `alias_name`<sup>Required</sup> <a name="alias_name" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasName"></a>

```python
alias_name: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultIdentityGroupConfig <a name="DataVaultIdentityGroupConfig" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_group

dataVaultIdentityGroup.DataVaultIdentityGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alias_id: str = None,
  alias_mount_accessor: str = None,
  alias_name: str = None,
  group_id: str = None,
  group_name: str = None,
  id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasId">alias_id</a></code> | <code>str</code> | ID of the alias. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasMountAccessor">alias_mount_accessor</a></code> | <code>str</code> | Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasName">alias_name</a></code> | <code>str</code> | Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupId">group_id</a></code> | <code>str</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupName">group_name</a></code> | <code>str</code> | Name of the group. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#id DataVaultIdentityGroup#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias_id`<sup>Optional</sup> <a name="alias_id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasId"></a>

```python
alias_id: str
```

- *Type:* str

ID of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#alias_id DataVaultIdentityGroup#alias_id}

---

##### `alias_mount_accessor`<sup>Optional</sup> <a name="alias_mount_accessor" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasMountAccessor"></a>

```python
alias_mount_accessor: str
```

- *Type:* str

Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#alias_mount_accessor DataVaultIdentityGroup#alias_mount_accessor}

---

##### `alias_name`<sup>Optional</sup> <a name="alias_name" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasName"></a>

```python
alias_name: str
```

- *Type:* str

Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#alias_name DataVaultIdentityGroup#alias_name}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#group_id DataVaultIdentityGroup#group_id}

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#group_name DataVaultIdentityGroup#group_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#id DataVaultIdentityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/data-sources/identity_group#namespace DataVaultIdentityGroup#namespace}

---



