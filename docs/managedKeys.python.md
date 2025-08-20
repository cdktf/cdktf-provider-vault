# `managedKeys` Submodule <a name="`managedKeys` Submodule" id="@cdktf/provider-vault.managedKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKeys <a name="ManagedKeys" id="@cdktf/provider-vault.managedKeys.ManagedKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys vault_managed_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import managed_keys

managedKeys.ManagedKeys(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws: typing.Union[IResolvable, typing.List[ManagedKeysAws]] = None,
  azure: typing.Union[IResolvable, typing.List[ManagedKeysAzure]] = None,
  id: str = None,
  namespace: str = None,
  pkcs: typing.Union[IResolvable, typing.List[ManagedKeysPkcs]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.aws">aws</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>]]</code> | aws block. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.azure">azure</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>]]</code> | azure block. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#id ManagedKeys#id}. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.pkcs">pkcs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>]]</code> | pkcs block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.aws"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>]]

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#aws ManagedKeys#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.azure"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>]]

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#azure ManagedKeys#azure}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#id ManagedKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#namespace ManagedKeys#namespace}

---

##### `pkcs`<sup>Optional</sup> <a name="pkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.pkcs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>]]

pkcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#pkcs ManagedKeys#pkcs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.putAws">put_aws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.putAzure">put_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.putPkcs">put_pkcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetAws">reset_aws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetAzure">reset_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetPkcs">reset_pkcs</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.managedKeys.ManagedKeys.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws` <a name="put_aws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAws"></a>

```python
def put_aws(
  value: typing.Union[IResolvable, typing.List[ManagedKeysAws]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAws.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>]]

---

##### `put_azure` <a name="put_azure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAzure"></a>

```python
def put_azure(
  value: typing.Union[IResolvable, typing.List[ManagedKeysAzure]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAzure.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>]]

---

##### `put_pkcs` <a name="put_pkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putPkcs"></a>

```python
def put_pkcs(
  value: typing.Union[IResolvable, typing.List[ManagedKeysPkcs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putPkcs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>]]

---

##### `reset_aws` <a name="reset_aws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetAws"></a>

```python
def reset_aws() -> None
```

##### `reset_azure` <a name="reset_azure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetAzure"></a>

```python
def reset_azure() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_pkcs` <a name="reset_pkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetPkcs"></a>

```python
def reset_pkcs() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ManagedKeys resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import managed_keys

managedKeys.ManagedKeys.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import managed_keys

managedKeys.ManagedKeys.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import managed_keys

managedKeys.ManagedKeys.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import managed_keys

managedKeys.ManagedKeys.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ManagedKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagedKeys to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagedKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList">ManagedKeysAwsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList">ManagedKeysAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcs">pkcs</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList">ManagedKeysPkcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.awsInput">aws_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.azureInput">azure_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcsInput">pkcs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.aws"></a>

```python
aws: ManagedKeysAwsList
```

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList">ManagedKeysAwsList</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.azure"></a>

```python
azure: ManagedKeysAzureList
```

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList">ManagedKeysAzureList</a>

---

##### `pkcs`<sup>Required</sup> <a name="pkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcs"></a>

```python
pkcs: ManagedKeysPkcsList
```

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList">ManagedKeysPkcsList</a>

---

##### `aws_input`<sup>Optional</sup> <a name="aws_input" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.awsInput"></a>

```python
aws_input: typing.Union[IResolvable, typing.List[ManagedKeysAws]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>]]

---

##### `azure_input`<sup>Optional</sup> <a name="azure_input" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.azureInput"></a>

```python
azure_input: typing.Union[IResolvable, typing.List[ManagedKeysAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `pkcs_input`<sup>Optional</sup> <a name="pkcs_input" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcsInput"></a>

```python
pkcs_input: typing.Union[IResolvable, typing.List[ManagedKeysPkcs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKeysAws <a name="ManagedKeysAws" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import managed_keys

managedKeys.ManagedKeysAws(
  access_key: str,
  key_bits: str,
  key_type: str,
  kms_key: str,
  name: str,
  secret_key: str,
  allow_generate_key: typing.Union[bool, IResolvable] = None,
  allow_replace_key: typing.Union[bool, IResolvable] = None,
  allow_store_key: typing.Union[bool, IResolvable] = None,
  any_mount: typing.Union[bool, IResolvable] = None,
  curve: str = None,
  endpoint: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.accessKey">access_key</a></code> | <code>str</code> | The AWS access key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyBits">key_bits</a></code> | <code>str</code> | The size in bits for an RSA key. This field is required when 'key_type' is 'RSA'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyType">key_type</a></code> | <code>str</code> | The type of key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.kmsKey">kms_key</a></code> | <code>str</code> | An identifier for the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.name">name</a></code> | <code>str</code> | A unique lowercase name that serves as identifying the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.secretKey">secret_key</a></code> | <code>str</code> | The AWS secret key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowGenerateKey">allow_generate_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowReplaceKey">allow_replace_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowStoreKey">allow_store_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.anyMount">any_mount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow usage from any mount point within the namespace if 'true'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.curve">curve</a></code> | <code>str</code> | The curve to use for an ECDSA key. Used when key_type is 'ECDSA'. Required if 'allow_generate_key' is true. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.endpoint">endpoint</a></code> | <code>str</code> | Used to specify a custom AWS endpoint. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.region">region</a></code> | <code>str</code> | The AWS region where the keys are stored (or will be stored). |

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

The AWS access key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#access_key ManagedKeys#access_key}

---

##### `key_bits`<sup>Required</sup> <a name="key_bits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyBits"></a>

```python
key_bits: str
```

- *Type:* str

The size in bits for an RSA key. This field is required when 'key_type' is 'RSA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

The type of key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#key_type ManagedKeys#key_type}

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

An identifier for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#kms_key ManagedKeys#kms_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.name"></a>

```python
name: str
```

- *Type:* str

A unique lowercase name that serves as identifying the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#name ManagedKeys#name}

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

The AWS secret key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#secret_key ManagedKeys#secret_key}

---

##### `allow_generate_key`<sup>Optional</sup> <a name="allow_generate_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowGenerateKey"></a>

```python
allow_generate_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}

---

##### `allow_replace_key`<sup>Optional</sup> <a name="allow_replace_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowReplaceKey"></a>

```python
allow_replace_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}

---

##### `allow_store_key`<sup>Optional</sup> <a name="allow_store_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowStoreKey"></a>

```python
allow_store_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}

---

##### `any_mount`<sup>Optional</sup> <a name="any_mount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.anyMount"></a>

```python
any_mount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow usage from any mount point within the namespace if 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}

---

##### `curve`<sup>Optional</sup> <a name="curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.curve"></a>

```python
curve: str
```

- *Type:* str

The curve to use for an ECDSA key. Used when key_type is 'ECDSA'. Required if 'allow_generate_key' is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#curve ManagedKeys#curve}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Used to specify a custom AWS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#endpoint ManagedKeys#endpoint}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.region"></a>

```python
region: str
```

- *Type:* str

The AWS region where the keys are stored (or will be stored).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#region ManagedKeys#region}

---

### ManagedKeysAzure <a name="ManagedKeysAzure" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import managed_keys

managedKeys.ManagedKeysAzure(
  client_id: str,
  client_secret: str,
  key_name: str,
  key_type: str,
  name: str,
  tenant_id: str,
  vault_name: str,
  allow_generate_key: typing.Union[bool, IResolvable] = None,
  allow_replace_key: typing.Union[bool, IResolvable] = None,
  allow_store_key: typing.Union[bool, IResolvable] = None,
  any_mount: typing.Union[bool, IResolvable] = None,
  environment: str = None,
  key_bits: str = None,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientId">client_id</a></code> | <code>str</code> | The client id for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientSecret">client_secret</a></code> | <code>str</code> | The client secret for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyName">key_name</a></code> | <code>str</code> | The Key Vault key to use for encryption and decryption. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyType">key_type</a></code> | <code>str</code> | The type of key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.name">name</a></code> | <code>str</code> | A unique lowercase name that serves as identifying the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.tenantId">tenant_id</a></code> | <code>str</code> | The tenant id for the Azure Active Directory organization. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.vaultName">vault_name</a></code> | <code>str</code> | The Key Vault vault to use the encryption keys for encryption and decryption. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowGenerateKey">allow_generate_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowReplaceKey">allow_replace_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowStoreKey">allow_store_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.anyMount">any_mount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow usage from any mount point within the namespace if 'true'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.environment">environment</a></code> | <code>str</code> | The Azure Cloud environment API endpoints to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyBits">key_bits</a></code> | <code>str</code> | The size in bits for an RSA key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.resource">resource</a></code> | <code>str</code> | The Azure Key Vault resource's DNS Suffix to connect to. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client id for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#client_id ManagedKeys#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The client secret for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#client_secret ManagedKeys#client_secret}

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

The Key Vault key to use for encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#key_name ManagedKeys#key_name}

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

The type of key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#key_type ManagedKeys#key_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.name"></a>

```python
name: str
```

- *Type:* str

A unique lowercase name that serves as identifying the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#name ManagedKeys#name}

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The tenant id for the Azure Active Directory organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#tenant_id ManagedKeys#tenant_id}

---

##### `vault_name`<sup>Required</sup> <a name="vault_name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.vaultName"></a>

```python
vault_name: str
```

- *Type:* str

The Key Vault vault to use the encryption keys for encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#vault_name ManagedKeys#vault_name}

---

##### `allow_generate_key`<sup>Optional</sup> <a name="allow_generate_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowGenerateKey"></a>

```python
allow_generate_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}

---

##### `allow_replace_key`<sup>Optional</sup> <a name="allow_replace_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowReplaceKey"></a>

```python
allow_replace_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}

---

##### `allow_store_key`<sup>Optional</sup> <a name="allow_store_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowStoreKey"></a>

```python
allow_store_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}

---

##### `any_mount`<sup>Optional</sup> <a name="any_mount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.anyMount"></a>

```python
any_mount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow usage from any mount point within the namespace if 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.environment"></a>

```python
environment: str
```

- *Type:* str

The Azure Cloud environment API endpoints to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#environment ManagedKeys#environment}

---

##### `key_bits`<sup>Optional</sup> <a name="key_bits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyBits"></a>

```python
key_bits: str
```

- *Type:* str

The size in bits for an RSA key.

This field is required when 'key_type' is 'RSA' or when 'allow_generate_key' is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.resource"></a>

```python
resource: str
```

- *Type:* str

The Azure Key Vault resource's DNS Suffix to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#resource ManagedKeys#resource}

---

### ManagedKeysConfig <a name="ManagedKeysConfig" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import managed_keys

managedKeys.ManagedKeysConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws: typing.Union[IResolvable, typing.List[ManagedKeysAws]] = None,
  azure: typing.Union[IResolvable, typing.List[ManagedKeysAzure]] = None,
  id: str = None,
  namespace: str = None,
  pkcs: typing.Union[IResolvable, typing.List[ManagedKeysPkcs]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.aws">aws</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>]]</code> | aws block. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.azure">azure</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>]]</code> | azure block. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#id ManagedKeys#id}. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.pkcs">pkcs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>]]</code> | pkcs block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.aws"></a>

```python
aws: typing.Union[IResolvable, typing.List[ManagedKeysAws]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>]]

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#aws ManagedKeys#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.azure"></a>

```python
azure: typing.Union[IResolvable, typing.List[ManagedKeysAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>]]

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#azure ManagedKeys#azure}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#id ManagedKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#namespace ManagedKeys#namespace}

---

##### `pkcs`<sup>Optional</sup> <a name="pkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.pkcs"></a>

```python
pkcs: typing.Union[IResolvable, typing.List[ManagedKeysPkcs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>]]

pkcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#pkcs ManagedKeys#pkcs}

---

### ManagedKeysPkcs <a name="ManagedKeysPkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import managed_keys

managedKeys.ManagedKeysPkcs(
  key_id: str,
  key_label: str,
  library: str,
  mechanism: str,
  name: str,
  pin: str,
  allow_generate_key: typing.Union[bool, IResolvable] = None,
  allow_replace_key: typing.Union[bool, IResolvable] = None,
  allow_store_key: typing.Union[bool, IResolvable] = None,
  any_mount: typing.Union[bool, IResolvable] = None,
  curve: str = None,
  force_rw_session: str = None,
  key_bits: str = None,
  slot: str = None,
  token_label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyId">key_id</a></code> | <code>str</code> | The id of a PKCS#11 key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyLabel">key_label</a></code> | <code>str</code> | The label of the key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.library">library</a></code> | <code>str</code> | The name of the kms_library stanza to use from Vault's config to lookup the local library path. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.mechanism">mechanism</a></code> | <code>str</code> | The encryption/decryption mechanism to use, specified as a hexadecimal (prefixed by 0x) string. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.name">name</a></code> | <code>str</code> | A unique lowercase name that serves as identifying the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.pin">pin</a></code> | <code>str</code> | The PIN for login. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowGenerateKey">allow_generate_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowReplaceKey">allow_replace_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowStoreKey">allow_store_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.anyMount">any_mount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow usage from any mount point within the namespace if 'true'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.curve">curve</a></code> | <code>str</code> | Supplies the curve value when using the 'CKM_ECDSA' mechanism. Required if 'allow_generate_key' is true. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.forceRwSession">force_rw_session</a></code> | <code>str</code> | Force all operations to open up a read-write session to the HSM. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyBits">key_bits</a></code> | <code>str</code> | Supplies the size in bits of the key when using 'CKM_RSA_PKCS_PSS', 'CKM_RSA_PKCS_OAEP' or 'CKM_RSA_PKCS' as a value for 'mechanism'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.slot">slot</a></code> | <code>str</code> | The slot number to use, specified as a string in a decimal format (e.g. '2305843009213693953'). |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.tokenLabel">token_label</a></code> | <code>str</code> | The slot token label to use. |

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

The id of a PKCS#11 key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#key_id ManagedKeys#key_id}

---

##### `key_label`<sup>Required</sup> <a name="key_label" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyLabel"></a>

```python
key_label: str
```

- *Type:* str

The label of the key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#key_label ManagedKeys#key_label}

---

##### `library`<sup>Required</sup> <a name="library" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.library"></a>

```python
library: str
```

- *Type:* str

The name of the kms_library stanza to use from Vault's config to lookup the local library path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#library ManagedKeys#library}

---

##### `mechanism`<sup>Required</sup> <a name="mechanism" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.mechanism"></a>

```python
mechanism: str
```

- *Type:* str

The encryption/decryption mechanism to use, specified as a hexadecimal (prefixed by 0x) string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#mechanism ManagedKeys#mechanism}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.name"></a>

```python
name: str
```

- *Type:* str

A unique lowercase name that serves as identifying the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#name ManagedKeys#name}

---

##### `pin`<sup>Required</sup> <a name="pin" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.pin"></a>

```python
pin: str
```

- *Type:* str

The PIN for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#pin ManagedKeys#pin}

---

##### `allow_generate_key`<sup>Optional</sup> <a name="allow_generate_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowGenerateKey"></a>

```python
allow_generate_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}

---

##### `allow_replace_key`<sup>Optional</sup> <a name="allow_replace_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowReplaceKey"></a>

```python
allow_replace_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}

---

##### `allow_store_key`<sup>Optional</sup> <a name="allow_store_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowStoreKey"></a>

```python
allow_store_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}

---

##### `any_mount`<sup>Optional</sup> <a name="any_mount" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.anyMount"></a>

```python
any_mount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow usage from any mount point within the namespace if 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}

---

##### `curve`<sup>Optional</sup> <a name="curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.curve"></a>

```python
curve: str
```

- *Type:* str

Supplies the curve value when using the 'CKM_ECDSA' mechanism. Required if 'allow_generate_key' is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#curve ManagedKeys#curve}

---

##### `force_rw_session`<sup>Optional</sup> <a name="force_rw_session" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.forceRwSession"></a>

```python
force_rw_session: str
```

- *Type:* str

Force all operations to open up a read-write session to the HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#force_rw_session ManagedKeys#force_rw_session}

---

##### `key_bits`<sup>Optional</sup> <a name="key_bits" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyBits"></a>

```python
key_bits: str
```

- *Type:* str

Supplies the size in bits of the key when using 'CKM_RSA_PKCS_PSS', 'CKM_RSA_PKCS_OAEP' or 'CKM_RSA_PKCS' as a value for 'mechanism'.

Required if 'allow_generate_key' is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}

---

##### `slot`<sup>Optional</sup> <a name="slot" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.slot"></a>

```python
slot: str
```

- *Type:* str

The slot number to use, specified as a string in a decimal format (e.g. '2305843009213693953').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#slot ManagedKeys#slot}

---

##### `token_label`<sup>Optional</sup> <a name="token_label" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.tokenLabel"></a>

```python
token_label: str
```

- *Type:* str

The slot token label to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/managed_keys#token_label ManagedKeys#token_label}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKeysAwsList <a name="ManagedKeysAwsList" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import managed_keys

managedKeys.ManagedKeysAwsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedKeysAwsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ManagedKeysAws]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>]]

---


### ManagedKeysAwsOutputReference <a name="ManagedKeysAwsOutputReference" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import managed_keys

managedKeys.ManagedKeysAwsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowGenerateKey">reset_allow_generate_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowReplaceKey">reset_allow_replace_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowStoreKey">reset_allow_store_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAnyMount">reset_any_mount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetCurve">reset_curve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_generate_key` <a name="reset_allow_generate_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowGenerateKey"></a>

```python
def reset_allow_generate_key() -> None
```

##### `reset_allow_replace_key` <a name="reset_allow_replace_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowReplaceKey"></a>

```python
def reset_allow_replace_key() -> None
```

##### `reset_allow_store_key` <a name="reset_allow_store_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowStoreKey"></a>

```python
def reset_allow_store_key() -> None
```

##### `reset_any_mount` <a name="reset_any_mount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAnyMount"></a>

```python
def reset_any_mount() -> None
```

##### `reset_curve` <a name="reset_curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetCurve"></a>

```python
def reset_curve() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKeyInput">access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKeyInput">allow_generate_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKeyInput">allow_replace_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKeyInput">allow_store_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMountInput">any_mount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curveInput">curve_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBitsInput">key_bits_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKeyInput">secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKey">allow_generate_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKey">allow_replace_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKey">allow_store_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMount">any_mount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curve">curve</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBits">key_bits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `access_key_input`<sup>Optional</sup> <a name="access_key_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKeyInput"></a>

```python
access_key_input: str
```

- *Type:* str

---

##### `allow_generate_key_input`<sup>Optional</sup> <a name="allow_generate_key_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKeyInput"></a>

```python
allow_generate_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_replace_key_input`<sup>Optional</sup> <a name="allow_replace_key_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKeyInput"></a>

```python
allow_replace_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_store_key_input`<sup>Optional</sup> <a name="allow_store_key_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKeyInput"></a>

```python
allow_store_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `any_mount_input`<sup>Optional</sup> <a name="any_mount_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMountInput"></a>

```python
any_mount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `curve_input`<sup>Optional</sup> <a name="curve_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curveInput"></a>

```python
curve_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `key_bits_input`<sup>Optional</sup> <a name="key_bits_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBitsInput"></a>

```python
key_bits_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `secret_key_input`<sup>Optional</sup> <a name="secret_key_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKeyInput"></a>

```python
secret_key_input: str
```

- *Type:* str

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `allow_generate_key`<sup>Required</sup> <a name="allow_generate_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKey"></a>

```python
allow_generate_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_replace_key`<sup>Required</sup> <a name="allow_replace_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKey"></a>

```python
allow_replace_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_store_key`<sup>Required</sup> <a name="allow_store_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKey"></a>

```python
allow_store_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `any_mount`<sup>Required</sup> <a name="any_mount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMount"></a>

```python
any_mount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `curve`<sup>Required</sup> <a name="curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curve"></a>

```python
curve: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `key_bits`<sup>Required</sup> <a name="key_bits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBits"></a>

```python
key_bits: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ManagedKeysAws]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws">ManagedKeysAws</a>]

---


### ManagedKeysAzureList <a name="ManagedKeysAzureList" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import managed_keys

managedKeys.ManagedKeysAzureList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedKeysAzureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ManagedKeysAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>]]

---


### ManagedKeysAzureOutputReference <a name="ManagedKeysAzureOutputReference" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import managed_keys

managedKeys.ManagedKeysAzureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowGenerateKey">reset_allow_generate_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowReplaceKey">reset_allow_replace_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowStoreKey">reset_allow_store_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAnyMount">reset_any_mount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetKeyBits">reset_key_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_generate_key` <a name="reset_allow_generate_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowGenerateKey"></a>

```python
def reset_allow_generate_key() -> None
```

##### `reset_allow_replace_key` <a name="reset_allow_replace_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowReplaceKey"></a>

```python
def reset_allow_replace_key() -> None
```

##### `reset_allow_store_key` <a name="reset_allow_store_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowStoreKey"></a>

```python
def reset_allow_store_key() -> None
```

##### `reset_any_mount` <a name="reset_any_mount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAnyMount"></a>

```python
def reset_any_mount() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_key_bits` <a name="reset_key_bits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetKeyBits"></a>

```python
def reset_key_bits() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKeyInput">allow_generate_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKeyInput">allow_replace_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKeyInput">allow_store_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMountInput">any_mount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBitsInput">key_bits_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultNameInput">vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKey">allow_generate_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKey">allow_replace_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKey">allow_store_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMount">any_mount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBits">key_bits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultName">vault_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `allow_generate_key_input`<sup>Optional</sup> <a name="allow_generate_key_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKeyInput"></a>

```python
allow_generate_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_replace_key_input`<sup>Optional</sup> <a name="allow_replace_key_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKeyInput"></a>

```python
allow_replace_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_store_key_input`<sup>Optional</sup> <a name="allow_store_key_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKeyInput"></a>

```python
allow_store_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `any_mount_input`<sup>Optional</sup> <a name="any_mount_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMountInput"></a>

```python
any_mount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `key_bits_input`<sup>Optional</sup> <a name="key_bits_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBitsInput"></a>

```python
key_bits_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `vault_name_input`<sup>Optional</sup> <a name="vault_name_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultNameInput"></a>

```python
vault_name_input: str
```

- *Type:* str

---

##### `allow_generate_key`<sup>Required</sup> <a name="allow_generate_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKey"></a>

```python
allow_generate_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_replace_key`<sup>Required</sup> <a name="allow_replace_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKey"></a>

```python
allow_replace_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_store_key`<sup>Required</sup> <a name="allow_store_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKey"></a>

```python
allow_store_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `any_mount`<sup>Required</sup> <a name="any_mount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMount"></a>

```python
any_mount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `key_bits`<sup>Required</sup> <a name="key_bits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBits"></a>

```python
key_bits: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `vault_name`<sup>Required</sup> <a name="vault_name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultName"></a>

```python
vault_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ManagedKeysAzure]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure">ManagedKeysAzure</a>]

---


### ManagedKeysPkcsList <a name="ManagedKeysPkcsList" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import managed_keys

managedKeys.ManagedKeysPkcsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedKeysPkcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ManagedKeysPkcs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>]]

---


### ManagedKeysPkcsOutputReference <a name="ManagedKeysPkcsOutputReference" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import managed_keys

managedKeys.ManagedKeysPkcsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowGenerateKey">reset_allow_generate_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowReplaceKey">reset_allow_replace_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowStoreKey">reset_allow_store_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAnyMount">reset_any_mount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetCurve">reset_curve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetForceRwSession">reset_force_rw_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetKeyBits">reset_key_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetSlot">reset_slot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetTokenLabel">reset_token_label</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_generate_key` <a name="reset_allow_generate_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowGenerateKey"></a>

```python
def reset_allow_generate_key() -> None
```

##### `reset_allow_replace_key` <a name="reset_allow_replace_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowReplaceKey"></a>

```python
def reset_allow_replace_key() -> None
```

##### `reset_allow_store_key` <a name="reset_allow_store_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowStoreKey"></a>

```python
def reset_allow_store_key() -> None
```

##### `reset_any_mount` <a name="reset_any_mount" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAnyMount"></a>

```python
def reset_any_mount() -> None
```

##### `reset_curve` <a name="reset_curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetCurve"></a>

```python
def reset_curve() -> None
```

##### `reset_force_rw_session` <a name="reset_force_rw_session" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetForceRwSession"></a>

```python
def reset_force_rw_session() -> None
```

##### `reset_key_bits` <a name="reset_key_bits" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetKeyBits"></a>

```python
def reset_key_bits() -> None
```

##### `reset_slot` <a name="reset_slot" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetSlot"></a>

```python
def reset_slot() -> None
```

##### `reset_token_label` <a name="reset_token_label" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetTokenLabel"></a>

```python
def reset_token_label() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKeyInput">allow_generate_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKeyInput">allow_replace_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKeyInput">allow_store_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMountInput">any_mount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curveInput">curve_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSessionInput">force_rw_session_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBitsInput">key_bits_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabelInput">key_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.libraryInput">library_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanismInput">mechanism_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pinInput">pin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slotInput">slot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabelInput">token_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKey">allow_generate_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKey">allow_replace_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKey">allow_store_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMount">any_mount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curve">curve</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSession">force_rw_session</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBits">key_bits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabel">key_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.library">library</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanism">mechanism</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pin">pin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slot">slot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabel">token_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `allow_generate_key_input`<sup>Optional</sup> <a name="allow_generate_key_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKeyInput"></a>

```python
allow_generate_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_replace_key_input`<sup>Optional</sup> <a name="allow_replace_key_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKeyInput"></a>

```python
allow_replace_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_store_key_input`<sup>Optional</sup> <a name="allow_store_key_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKeyInput"></a>

```python
allow_store_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `any_mount_input`<sup>Optional</sup> <a name="any_mount_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMountInput"></a>

```python
any_mount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `curve_input`<sup>Optional</sup> <a name="curve_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curveInput"></a>

```python
curve_input: str
```

- *Type:* str

---

##### `force_rw_session_input`<sup>Optional</sup> <a name="force_rw_session_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSessionInput"></a>

```python
force_rw_session_input: str
```

- *Type:* str

---

##### `key_bits_input`<sup>Optional</sup> <a name="key_bits_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBitsInput"></a>

```python
key_bits_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `key_label_input`<sup>Optional</sup> <a name="key_label_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabelInput"></a>

```python
key_label_input: str
```

- *Type:* str

---

##### `library_input`<sup>Optional</sup> <a name="library_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.libraryInput"></a>

```python
library_input: str
```

- *Type:* str

---

##### `mechanism_input`<sup>Optional</sup> <a name="mechanism_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanismInput"></a>

```python
mechanism_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pin_input`<sup>Optional</sup> <a name="pin_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pinInput"></a>

```python
pin_input: str
```

- *Type:* str

---

##### `slot_input`<sup>Optional</sup> <a name="slot_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slotInput"></a>

```python
slot_input: str
```

- *Type:* str

---

##### `token_label_input`<sup>Optional</sup> <a name="token_label_input" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabelInput"></a>

```python
token_label_input: str
```

- *Type:* str

---

##### `allow_generate_key`<sup>Required</sup> <a name="allow_generate_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKey"></a>

```python
allow_generate_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_replace_key`<sup>Required</sup> <a name="allow_replace_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKey"></a>

```python
allow_replace_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_store_key`<sup>Required</sup> <a name="allow_store_key" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKey"></a>

```python
allow_store_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `any_mount`<sup>Required</sup> <a name="any_mount" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMount"></a>

```python
any_mount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `curve`<sup>Required</sup> <a name="curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curve"></a>

```python
curve: str
```

- *Type:* str

---

##### `force_rw_session`<sup>Required</sup> <a name="force_rw_session" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSession"></a>

```python
force_rw_session: str
```

- *Type:* str

---

##### `key_bits`<sup>Required</sup> <a name="key_bits" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBits"></a>

```python
key_bits: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `key_label`<sup>Required</sup> <a name="key_label" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabel"></a>

```python
key_label: str
```

- *Type:* str

---

##### `library`<sup>Required</sup> <a name="library" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.library"></a>

```python
library: str
```

- *Type:* str

---

##### `mechanism`<sup>Required</sup> <a name="mechanism" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanism"></a>

```python
mechanism: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pin`<sup>Required</sup> <a name="pin" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pin"></a>

```python
pin: str
```

- *Type:* str

---

##### `slot`<sup>Required</sup> <a name="slot" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slot"></a>

```python
slot: str
```

- *Type:* str

---

##### `token_label`<sup>Required</sup> <a name="token_label" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabel"></a>

```python
token_label: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ManagedKeysPkcs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs">ManagedKeysPkcs</a>]

---



