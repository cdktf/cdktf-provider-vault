# `vault_generic_endpoint`

Refer to the Terraform Registory for docs: [`vault_generic_endpoint`](https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint).

# `genericEndpoint` Submodule <a name="`genericEndpoint` Submodule" id="@cdktf/provider-vault.genericEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenericEndpoint <a name="GenericEndpoint" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint vault_generic_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import generic_endpoint

genericEndpoint.GenericEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_json: str,
  path: str,
  disable_delete: typing.Union[bool, IResolvable] = None,
  disable_read: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ignore_absent_fields: typing.Union[bool, IResolvable] = None,
  namespace: str = None,
  write_fields: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.dataJson">data_json</a></code> | <code>str</code> | JSON-encoded data to write. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.path">path</a></code> | <code>str</code> | Full path where to the endpoint that will be written. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.disableDelete">disable_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Don't attempt to delete the path from Vault if true. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.disableRead">disable_read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Don't attempt to read the path from Vault if true; drift won't be detected. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#id GenericEndpoint#id}. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.ignoreAbsentFields">ignore_absent_fields</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When reading, disregard fields not present in data_json. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.writeFields">write_fields</a></code> | <code>typing.List[str]</code> | Top-level fields returned by write to persist in state. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.dataJson"></a>

- *Type:* str

JSON-encoded data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#data_json GenericEndpoint#data_json}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.path"></a>

- *Type:* str

Full path where to the endpoint that will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#path GenericEndpoint#path}

---

##### `disable_delete`<sup>Optional</sup> <a name="disable_delete" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.disableDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Don't attempt to delete the path from Vault if true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#disable_delete GenericEndpoint#disable_delete}

---

##### `disable_read`<sup>Optional</sup> <a name="disable_read" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.disableRead"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Don't attempt to read the path from Vault if true; drift won't be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#disable_read GenericEndpoint#disable_read}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#id GenericEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_absent_fields`<sup>Optional</sup> <a name="ignore_absent_fields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.ignoreAbsentFields"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When reading, disregard fields not present in data_json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#ignore_absent_fields GenericEndpoint#ignore_absent_fields}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#namespace GenericEndpoint#namespace}

---

##### `write_fields`<sup>Optional</sup> <a name="write_fields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.writeFields"></a>

- *Type:* typing.List[str]

Top-level fields returned by write to persist in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#write_fields GenericEndpoint#write_fields}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetDisableDelete">reset_disable_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetDisableRead">reset_disable_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetIgnoreAbsentFields">reset_ignore_absent_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetWriteFields">reset_write_fields</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_disable_delete` <a name="reset_disable_delete" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetDisableDelete"></a>

```python
def reset_disable_delete() -> None
```

##### `reset_disable_read` <a name="reset_disable_read" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetDisableRead"></a>

```python
def reset_disable_read() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_absent_fields` <a name="reset_ignore_absent_fields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetIgnoreAbsentFields"></a>

```python
def reset_ignore_absent_fields() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_write_fields` <a name="reset_write_fields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetWriteFields"></a>

```python
def reset_write_fields() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import generic_endpoint

genericEndpoint.GenericEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import generic_endpoint

genericEndpoint.GenericEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import generic_endpoint

genericEndpoint.GenericEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeData">write_data</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeDataJson">write_data_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dataJsonInput">data_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableDeleteInput">disable_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableReadInput">disable_read_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFieldsInput">ignore_absent_fields_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeFieldsInput">write_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dataJson">data_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableDelete">disable_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableRead">disable_read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFields">ignore_absent_fields</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeFields">write_fields</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `write_data`<sup>Required</sup> <a name="write_data" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeData"></a>

```python
write_data: StringMap
```

- *Type:* cdktf.StringMap

---

##### `write_data_json`<sup>Required</sup> <a name="write_data_json" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeDataJson"></a>

```python
write_data_json: str
```

- *Type:* str

---

##### `data_json_input`<sup>Optional</sup> <a name="data_json_input" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dataJsonInput"></a>

```python
data_json_input: str
```

- *Type:* str

---

##### `disable_delete_input`<sup>Optional</sup> <a name="disable_delete_input" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableDeleteInput"></a>

```python
disable_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_read_input`<sup>Optional</sup> <a name="disable_read_input" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableReadInput"></a>

```python
disable_read_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_absent_fields_input`<sup>Optional</sup> <a name="ignore_absent_fields_input" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFieldsInput"></a>

```python
ignore_absent_fields_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `write_fields_input`<sup>Optional</sup> <a name="write_fields_input" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeFieldsInput"></a>

```python
write_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dataJson"></a>

```python
data_json: str
```

- *Type:* str

---

##### `disable_delete`<sup>Required</sup> <a name="disable_delete" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableDelete"></a>

```python
disable_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_read`<sup>Required</sup> <a name="disable_read" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableRead"></a>

```python
disable_read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_absent_fields`<sup>Required</sup> <a name="ignore_absent_fields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFields"></a>

```python
ignore_absent_fields: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `write_fields`<sup>Required</sup> <a name="write_fields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeFields"></a>

```python
write_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GenericEndpointConfig <a name="GenericEndpointConfig" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import generic_endpoint

genericEndpoint.GenericEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_json: str,
  path: str,
  disable_delete: typing.Union[bool, IResolvable] = None,
  disable_read: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ignore_absent_fields: typing.Union[bool, IResolvable] = None,
  namespace: str = None,
  write_fields: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.dataJson">data_json</a></code> | <code>str</code> | JSON-encoded data to write. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.path">path</a></code> | <code>str</code> | Full path where to the endpoint that will be written. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableDelete">disable_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Don't attempt to delete the path from Vault if true. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableRead">disable_read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Don't attempt to read the path from Vault if true; drift won't be detected. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#id GenericEndpoint#id}. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.ignoreAbsentFields">ignore_absent_fields</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When reading, disregard fields not present in data_json. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.writeFields">write_fields</a></code> | <code>typing.List[str]</code> | Top-level fields returned by write to persist in state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.dataJson"></a>

```python
data_json: str
```

- *Type:* str

JSON-encoded data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#data_json GenericEndpoint#data_json}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Full path where to the endpoint that will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#path GenericEndpoint#path}

---

##### `disable_delete`<sup>Optional</sup> <a name="disable_delete" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableDelete"></a>

```python
disable_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Don't attempt to delete the path from Vault if true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#disable_delete GenericEndpoint#disable_delete}

---

##### `disable_read`<sup>Optional</sup> <a name="disable_read" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableRead"></a>

```python
disable_read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Don't attempt to read the path from Vault if true; drift won't be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#disable_read GenericEndpoint#disable_read}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#id GenericEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_absent_fields`<sup>Optional</sup> <a name="ignore_absent_fields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.ignoreAbsentFields"></a>

```python
ignore_absent_fields: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When reading, disregard fields not present in data_json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#ignore_absent_fields GenericEndpoint#ignore_absent_fields}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#namespace GenericEndpoint#namespace}

---

##### `write_fields`<sup>Optional</sup> <a name="write_fields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.writeFields"></a>

```python
write_fields: typing.List[str]
```

- *Type:* typing.List[str]

Top-level fields returned by write to persist in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/generic_endpoint#write_fields GenericEndpoint#write_fields}

---



