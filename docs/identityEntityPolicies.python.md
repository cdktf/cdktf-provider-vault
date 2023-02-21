# `identityEntityPolicies` Submodule <a name="`identityEntityPolicies` Submodule" id="@cdktf/provider-vault.identityEntityPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityEntityPolicies <a name="IdentityEntityPolicies" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/identity_entity_policies vault_identity_entity_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_entity_policies

identityEntityPolicies.IdentityEntityPolicies(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entity_id: str,
  policies: typing.List[str],
  exclusive: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.entityId">entity_id</a></code> | <code>str</code> | ID of the entity. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.policies">policies</a></code> | <code>typing.List[str]</code> | Policies to be tied to the entity. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.exclusive">exclusive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the resource manage policies exclusively. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_entity_policies#id IdentityEntityPolicies#id}. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.entityId"></a>

- *Type:* str

ID of the entity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_entity_policies#entity_id IdentityEntityPolicies#entity_id}

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.policies"></a>

- *Type:* typing.List[str]

Policies to be tied to the entity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_entity_policies#policies IdentityEntityPolicies#policies}

---

##### `exclusive`<sup>Optional</sup> <a name="exclusive" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.exclusive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the resource manage policies exclusively.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_entity_policies#exclusive IdentityEntityPolicies#exclusive}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_entity_policies#id IdentityEntityPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_entity_policies#namespace IdentityEntityPolicies#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.resetExclusive">reset_exclusive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_exclusive` <a name="reset_exclusive" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.resetExclusive"></a>

```python
def reset_exclusive() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import identity_entity_policies

identityEntityPolicies.IdentityEntityPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import identity_entity_policies

identityEntityPolicies.IdentityEntityPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import identity_entity_policies

identityEntityPolicies.IdentityEntityPolicies.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.entityName">entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.exclusiveInput">exclusive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.policiesInput">policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.exclusive">exclusive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entity_name`<sup>Required</sup> <a name="entity_name" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.entityName"></a>

```python
entity_name: str
```

- *Type:* str

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `exclusive_input`<sup>Optional</sup> <a name="exclusive_input" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.exclusiveInput"></a>

```python
exclusive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.policiesInput"></a>

```python
policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `exclusive`<sup>Required</sup> <a name="exclusive" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.exclusive"></a>

```python
exclusive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityEntityPoliciesConfig <a name="IdentityEntityPoliciesConfig" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_entity_policies

identityEntityPolicies.IdentityEntityPoliciesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entity_id: str,
  policies: typing.List[str],
  exclusive: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.entityId">entity_id</a></code> | <code>str</code> | ID of the entity. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.policies">policies</a></code> | <code>typing.List[str]</code> | Policies to be tied to the entity. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.exclusive">exclusive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the resource manage policies exclusively. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_entity_policies#id IdentityEntityPolicies#id}. |
| <code><a href="#@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

ID of the entity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_entity_policies#entity_id IdentityEntityPolicies#entity_id}

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

Policies to be tied to the entity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_entity_policies#policies IdentityEntityPolicies#policies}

---

##### `exclusive`<sup>Optional</sup> <a name="exclusive" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.exclusive"></a>

```python
exclusive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the resource manage policies exclusively.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_entity_policies#exclusive IdentityEntityPolicies#exclusive}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_entity_policies#id IdentityEntityPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityEntityPolicies.IdentityEntityPoliciesConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_entity_policies#namespace IdentityEntityPolicies#namespace}

---



