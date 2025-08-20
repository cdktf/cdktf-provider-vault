# `dataVaultIdentityEntity` Submodule <a name="`dataVaultIdentityEntity` Submodule" id="@cdktf/provider-vault.dataVaultIdentityEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultIdentityEntity <a name="DataVaultIdentityEntity" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity vault_identity_entity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_entity

dataVaultIdentityEntity.DataVaultIdentityEntity(
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
  entity_id: str = None,
  entity_name: str = None,
  id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.aliasId">alias_id</a></code> | <code>str</code> | ID of the alias. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.aliasMountAccessor">alias_mount_accessor</a></code> | <code>str</code> | Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.aliasName">alias_name</a></code> | <code>str</code> | Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.entityId">entity_id</a></code> | <code>str</code> | ID of the entity. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.entityName">entity_name</a></code> | <code>str</code> | Name of the entity. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#id DataVaultIdentityEntity#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias_id`<sup>Optional</sup> <a name="alias_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.aliasId"></a>

- *Type:* str

ID of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#alias_id DataVaultIdentityEntity#alias_id}

---

##### `alias_mount_accessor`<sup>Optional</sup> <a name="alias_mount_accessor" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.aliasMountAccessor"></a>

- *Type:* str

Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#alias_mount_accessor DataVaultIdentityEntity#alias_mount_accessor}

---

##### `alias_name`<sup>Optional</sup> <a name="alias_name" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.aliasName"></a>

- *Type:* str

Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#alias_name DataVaultIdentityEntity#alias_name}

---

##### `entity_id`<sup>Optional</sup> <a name="entity_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.entityId"></a>

- *Type:* str

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#entity_id DataVaultIdentityEntity#entity_id}

---

##### `entity_name`<sup>Optional</sup> <a name="entity_name" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.entityName"></a>

- *Type:* str

Name of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#entity_name DataVaultIdentityEntity#entity_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#id DataVaultIdentityEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#namespace DataVaultIdentityEntity#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasId">reset_alias_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasMountAccessor">reset_alias_mount_accessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasName">reset_alias_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityId">reset_entity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityName">reset_entity_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_alias_id` <a name="reset_alias_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasId"></a>

```python
def reset_alias_id() -> None
```

##### `reset_alias_mount_accessor` <a name="reset_alias_mount_accessor" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasMountAccessor"></a>

```python
def reset_alias_mount_accessor() -> None
```

##### `reset_alias_name` <a name="reset_alias_name" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasName"></a>

```python
def reset_alias_name() -> None
```

##### `reset_entity_id` <a name="reset_entity_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityId"></a>

```python
def reset_entity_id() -> None
```

##### `reset_entity_name` <a name="reset_entity_name" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityName"></a>

```python
def reset_entity_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVaultIdentityEntity resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_entity

dataVaultIdentityEntity.DataVaultIdentityEntity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_entity

dataVaultIdentityEntity.DataVaultIdentityEntity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_entity

dataVaultIdentityEntity.DataVaultIdentityEntity.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_entity

dataVaultIdentityEntity.DataVaultIdentityEntity.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVaultIdentityEntity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultIdentityEntity to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultIdentityEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultIdentityEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliases">aliases</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList">DataVaultIdentityEntityAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dataJson">data_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.directGroupIds">direct_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.groupIds">group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.inheritedGroupIds">inherited_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lastUpdateTime">last_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.mergedEntityIds">merged_entity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasIdInput">alias_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessorInput">alias_mount_accessor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasNameInput">alias_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityNameInput">entity_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasId">alias_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessor">alias_mount_accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasName">alias_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityName">entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliases"></a>

```python
aliases: DataVaultIdentityEntityAliasesList
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList">DataVaultIdentityEntityAliasesList</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dataJson"></a>

```python
data_json: str
```

- *Type:* str

---

##### `direct_group_ids`<sup>Required</sup> <a name="direct_group_ids" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.directGroupIds"></a>

```python
direct_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `group_ids`<sup>Required</sup> <a name="group_ids" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.groupIds"></a>

```python
group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inherited_group_ids`<sup>Required</sup> <a name="inherited_group_ids" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.inheritedGroupIds"></a>

```python
inherited_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_update_time`<sup>Required</sup> <a name="last_update_time" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lastUpdateTime"></a>

```python
last_update_time: str
```

- *Type:* str

---

##### `merged_entity_ids`<sup>Required</sup> <a name="merged_entity_ids" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.mergedEntityIds"></a>

```python
merged_entity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alias_id_input`<sup>Optional</sup> <a name="alias_id_input" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasIdInput"></a>

```python
alias_id_input: str
```

- *Type:* str

---

##### `alias_mount_accessor_input`<sup>Optional</sup> <a name="alias_mount_accessor_input" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessorInput"></a>

```python
alias_mount_accessor_input: str
```

- *Type:* str

---

##### `alias_name_input`<sup>Optional</sup> <a name="alias_name_input" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasNameInput"></a>

```python
alias_name_input: str
```

- *Type:* str

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `entity_name_input`<sup>Optional</sup> <a name="entity_name_input" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityNameInput"></a>

```python
entity_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `alias_id`<sup>Required</sup> <a name="alias_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasId"></a>

```python
alias_id: str
```

- *Type:* str

---

##### `alias_mount_accessor`<sup>Required</sup> <a name="alias_mount_accessor" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessor"></a>

```python
alias_mount_accessor: str
```

- *Type:* str

---

##### `alias_name`<sup>Required</sup> <a name="alias_name" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasName"></a>

```python
alias_name: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `entity_name`<sup>Required</sup> <a name="entity_name" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityName"></a>

```python
entity_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultIdentityEntityAliases <a name="DataVaultIdentityEntityAliases" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_entity

dataVaultIdentityEntity.DataVaultIdentityEntityAliases()
```


### DataVaultIdentityEntityConfig <a name="DataVaultIdentityEntityConfig" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_entity

dataVaultIdentityEntity.DataVaultIdentityEntityConfig(
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
  entity_id: str = None,
  entity_name: str = None,
  id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasId">alias_id</a></code> | <code>str</code> | ID of the alias. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasMountAccessor">alias_mount_accessor</a></code> | <code>str</code> | Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasName">alias_name</a></code> | <code>str</code> | Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityId">entity_id</a></code> | <code>str</code> | ID of the entity. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityName">entity_name</a></code> | <code>str</code> | Name of the entity. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#id DataVaultIdentityEntity#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias_id`<sup>Optional</sup> <a name="alias_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasId"></a>

```python
alias_id: str
```

- *Type:* str

ID of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#alias_id DataVaultIdentityEntity#alias_id}

---

##### `alias_mount_accessor`<sup>Optional</sup> <a name="alias_mount_accessor" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasMountAccessor"></a>

```python
alias_mount_accessor: str
```

- *Type:* str

Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#alias_mount_accessor DataVaultIdentityEntity#alias_mount_accessor}

---

##### `alias_name`<sup>Optional</sup> <a name="alias_name" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasName"></a>

```python
alias_name: str
```

- *Type:* str

Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#alias_name DataVaultIdentityEntity#alias_name}

---

##### `entity_id`<sup>Optional</sup> <a name="entity_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#entity_id DataVaultIdentityEntity#entity_id}

---

##### `entity_name`<sup>Optional</sup> <a name="entity_name" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityName"></a>

```python
entity_name: str
```

- *Type:* str

Name of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#entity_name DataVaultIdentityEntity#entity_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#id DataVaultIdentityEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/identity_entity#namespace DataVaultIdentityEntity#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVaultIdentityEntityAliasesList <a name="DataVaultIdentityEntityAliasesList" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_entity

dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataVaultIdentityEntityAliasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataVaultIdentityEntityAliasesOutputReference <a name="DataVaultIdentityEntityAliasesOutputReference" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_identity_entity

dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.canonicalId">canonical_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.lastUpdateTime">last_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mergedFromCanonicalIds">merged_from_canonical_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountAccessor">mount_accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountType">mount_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases">DataVaultIdentityEntityAliases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canonical_id`<sup>Required</sup> <a name="canonical_id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.canonicalId"></a>

```python
canonical_id: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_update_time`<sup>Required</sup> <a name="last_update_time" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.lastUpdateTime"></a>

```python
last_update_time: str
```

- *Type:* str

---

##### `merged_from_canonical_ids`<sup>Required</sup> <a name="merged_from_canonical_ids" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mergedFromCanonicalIds"></a>

```python
merged_from_canonical_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `mount_accessor`<sup>Required</sup> <a name="mount_accessor" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountAccessor"></a>

```python
mount_accessor: str
```

- *Type:* str

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `mount_type`<sup>Required</sup> <a name="mount_type" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountType"></a>

```python
mount_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.internalValue"></a>

```python
internal_value: DataVaultIdentityEntityAliases
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases">DataVaultIdentityEntityAliases</a>

---



