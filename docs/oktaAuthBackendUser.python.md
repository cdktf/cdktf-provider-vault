# `vault_okta_auth_backend_user`

Refer to the Terraform Registory for docs: [`vault_okta_auth_backend_user`](https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user).

# `oktaAuthBackendUser` Submodule <a name="`oktaAuthBackendUser` Submodule" id="@cdktf/provider-vault.oktaAuthBackendUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OktaAuthBackendUserA <a name="OktaAuthBackendUserA" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user vault_okta_auth_backend_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend_user

oktaAuthBackendUser.OktaAuthBackendUserA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path: str,
  username: str,
  groups: typing.List[str] = None,
  id: str = None,
  namespace: str = None,
  policies: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.path">path</a></code> | <code>str</code> | Path to the Okta auth backend. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.username">username</a></code> | <code>str</code> | Name of the user within Okta. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.groups">groups</a></code> | <code>typing.List[str]</code> | Groups within the Okta auth backend to associate with this user. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user#id OktaAuthBackendUserA#id}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.policies">policies</a></code> | <code>typing.List[str]</code> | Policies to associate with this user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.path"></a>

- *Type:* str

Path to the Okta auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user#path OktaAuthBackendUserA#path}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.username"></a>

- *Type:* str

Name of the user within Okta.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user#username OktaAuthBackendUserA#username}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.groups"></a>

- *Type:* typing.List[str]

Groups within the Okta auth backend to associate with this user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user#groups OktaAuthBackendUserA#groups}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user#id OktaAuthBackendUserA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user#namespace OktaAuthBackendUserA#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.policies"></a>

- *Type:* typing.List[str]

Policies to associate with this user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user#policies OktaAuthBackendUserA#policies}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetPolicies">reset_policies</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_groups` <a name="reset_groups" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetPolicies"></a>

```python
def reset_policies() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend_user

oktaAuthBackendUser.OktaAuthBackendUserA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend_user

oktaAuthBackendUser.OktaAuthBackendUserA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend_user

oktaAuthBackendUser.OktaAuthBackendUserA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.groupsInput">groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.policiesInput">policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.groupsInput"></a>

```python
groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.policiesInput"></a>

```python
policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OktaAuthBackendUserAConfig <a name="OktaAuthBackendUserAConfig" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend_user

oktaAuthBackendUser.OktaAuthBackendUserAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path: str,
  username: str,
  groups: typing.List[str] = None,
  id: str = None,
  namespace: str = None,
  policies: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.path">path</a></code> | <code>str</code> | Path to the Okta auth backend. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.username">username</a></code> | <code>str</code> | Name of the user within Okta. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.groups">groups</a></code> | <code>typing.List[str]</code> | Groups within the Okta auth backend to associate with this user. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user#id OktaAuthBackendUserA#id}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.policies">policies</a></code> | <code>typing.List[str]</code> | Policies to associate with this user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Path to the Okta auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user#path OktaAuthBackendUserA#path}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Name of the user within Okta.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user#username OktaAuthBackendUserA#username}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

Groups within the Okta auth backend to associate with this user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user#groups OktaAuthBackendUserA#groups}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user#id OktaAuthBackendUserA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user#namespace OktaAuthBackendUserA#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

Policies to associate with this user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/okta_auth_backend_user#policies OktaAuthBackendUserA#policies}

---



