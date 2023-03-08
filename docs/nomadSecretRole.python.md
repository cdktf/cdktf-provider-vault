# `nomadSecretRole` Submodule <a name="`nomadSecretRole` Submodule" id="@cdktf/provider-vault.nomadSecretRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NomadSecretRole <a name="NomadSecretRole" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role vault_nomad_secret_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import nomad_secret_role

nomadSecretRole.NomadSecretRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  role: str,
  global: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None,
  policies: typing.List[str] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The mount path for the Nomad backend. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.role">role</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.global">global</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the token should be global. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#id NomadSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.policies">policies</a></code> | <code>typing.List[str]</code> | Comma separated list of Nomad policies the token is going to be created against. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.type">type</a></code> | <code>str</code> | Specifies the type of token to create when using this role. Valid values are "client" or "management". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.backend"></a>

- *Type:* str

The mount path for the Nomad backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#backend NomadSecretRole#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.role"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#role NomadSecretRole#role}

---

##### `global`<sup>Optional</sup> <a name="global" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.global"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the token should be global.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#global NomadSecretRole#global}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#id NomadSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#namespace NomadSecretRole#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.policies"></a>

- *Type:* typing.List[str]

Comma separated list of Nomad policies the token is going to be created against.

These need to be created beforehand in Nomad.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#policies NomadSecretRole#policies}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.Initializer.parameter.type"></a>

- *Type:* str

Specifies the type of token to create when using this role. Valid values are "client" or "management".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#type NomadSecretRole#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.resetGlobal">reset_global</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.resetPolicies">reset_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_global` <a name="reset_global" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.resetGlobal"></a>

```python
def reset_global() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.resetPolicies"></a>

```python
def reset_policies() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import nomad_secret_role

nomadSecretRole.NomadSecretRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import nomad_secret_role

nomadSecretRole.NomadSecretRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import nomad_secret_role

nomadSecretRole.NomadSecretRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.globalInput">global_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.policiesInput">policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.global">global</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `global_input`<sup>Optional</sup> <a name="global_input" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.globalInput"></a>

```python
global_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.policiesInput"></a>

```python
policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `global`<sup>Required</sup> <a name="global" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.global"></a>

```python
global: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NomadSecretRoleConfig <a name="NomadSecretRoleConfig" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import nomad_secret_role

nomadSecretRole.NomadSecretRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  role: str,
  global: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None,
  policies: typing.List[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.backend">backend</a></code> | <code>str</code> | The mount path for the Nomad backend. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.role">role</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.global">global</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the token should be global. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#id NomadSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.policies">policies</a></code> | <code>typing.List[str]</code> | Comma separated list of Nomad policies the token is going to be created against. |
| <code><a href="#@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.type">type</a></code> | <code>str</code> | Specifies the type of token to create when using this role. Valid values are "client" or "management". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The mount path for the Nomad backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#backend NomadSecretRole#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#role NomadSecretRole#role}

---

##### `global`<sup>Optional</sup> <a name="global" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.global"></a>

```python
global: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the token should be global.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#global NomadSecretRole#global}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#id NomadSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#namespace NomadSecretRole#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

Comma separated list of Nomad policies the token is going to be created against.

These need to be created beforehand in Nomad.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#policies NomadSecretRole#policies}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.nomadSecretRole.NomadSecretRoleConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies the type of token to create when using this role. Valid values are "client" or "management".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/nomad_secret_role#type NomadSecretRole#type}

---


