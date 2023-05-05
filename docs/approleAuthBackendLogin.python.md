# `vault_approle_auth_backend_login`

Refer to the Terraform Registory for docs: [`vault_approle_auth_backend_login`](https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/approle_auth_backend_login).

# `approleAuthBackendLogin` Submodule <a name="`approleAuthBackendLogin` Submodule" id="@cdktf/provider-vault.approleAuthBackendLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApproleAuthBackendLogin <a name="ApproleAuthBackendLogin" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/approle_auth_backend_login vault_approle_auth_backend_login}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_login

approleAuthBackendLogin.ApproleAuthBackendLogin(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_id: str,
  backend: str = None,
  id: str = None,
  namespace: str = None,
  secret_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.roleId">role_id</a></code> | <code>str</code> | The RoleID to log in with. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | The SecretID to log in with. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.roleId"></a>

- *Type:* str

The RoleID to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/approle_auth_backend_login#role_id ApproleAuthBackendLogin#role_id}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.backend"></a>

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/approle_auth_backend_login#backend ApproleAuthBackendLogin#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/approle_auth_backend_login#namespace ApproleAuthBackendLogin#namespace}

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.secretId"></a>

- *Type:* str

The SecretID to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/approle_auth_backend_login#secret_id ApproleAuthBackendLogin#secret_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretId">reset_secret_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretId"></a>

```python
def reset_secret_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_login

approleAuthBackendLogin.ApproleAuthBackendLogin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_login

approleAuthBackendLogin.ApproleAuthBackendLogin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_login

approleAuthBackendLogin.ApproleAuthBackendLogin.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseDuration">lease_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseStarted">lease_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.renewable">renewable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `lease_duration`<sup>Required</sup> <a name="lease_duration" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseDuration"></a>

```python
lease_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lease_started`<sup>Required</sup> <a name="lease_started" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseStarted"></a>

```python
lease_started: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.renewable"></a>

```python
renewable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApproleAuthBackendLoginConfig <a name="ApproleAuthBackendLoginConfig" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_login

approleAuthBackendLogin.ApproleAuthBackendLoginConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_id: str,
  backend: str = None,
  id: str = None,
  namespace: str = None,
  secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.roleId">role_id</a></code> | <code>str</code> | The RoleID to log in with. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretId">secret_id</a></code> | <code>str</code> | The SecretID to log in with. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

The RoleID to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/approle_auth_backend_login#role_id ApproleAuthBackendLogin#role_id}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/approle_auth_backend_login#backend ApproleAuthBackendLogin#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/approle_auth_backend_login#namespace ApproleAuthBackendLogin#namespace}

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

The SecretID to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/approle_auth_backend_login#secret_id ApproleAuthBackendLogin#secret_id}

---



