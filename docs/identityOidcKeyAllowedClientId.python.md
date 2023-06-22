# `vault_identity_oidc_key_allowed_client_id`

Refer to the Terraform Registory for docs: [`vault_identity_oidc_key_allowed_client_id`](https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_oidc_key_allowed_client_id).

# `identityOidcKeyAllowedClientId` Submodule <a name="`identityOidcKeyAllowedClientId` Submodule" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityOidcKeyAllowedClientId <a name="IdentityOidcKeyAllowedClientId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_oidc_key_allowed_client_id vault_identity_oidc_key_allowed_client_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_oidc_key_allowed_client_id

identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_client_id: str,
  key_name: str,
  id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.allowedClientId">allowed_client_id</a></code> | <code>str</code> | Role Client ID allowed to use the key for signing. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Name of the key. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_oidc_key_allowed_client_id#id IdentityOidcKeyAllowedClientId#id}. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_client_id`<sup>Required</sup> <a name="allowed_client_id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.allowedClientId"></a>

- *Type:* str

Role Client ID allowed to use the key for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_oidc_key_allowed_client_id#allowed_client_id IdentityOidcKeyAllowedClientId#allowed_client_id}

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.keyName"></a>

- *Type:* str

Name of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_oidc_key_allowed_client_id#key_name IdentityOidcKeyAllowedClientId#key_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_oidc_key_allowed_client_id#id IdentityOidcKeyAllowedClientId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_oidc_key_allowed_client_id#namespace IdentityOidcKeyAllowedClientId#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import identity_oidc_key_allowed_client_id

identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import identity_oidc_key_allowed_client_id

identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import identity_oidc_key_allowed_client_id

identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientIdInput">allowed_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientId">allowed_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_client_id_input`<sup>Optional</sup> <a name="allowed_client_id_input" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientIdInput"></a>

```python
allowed_client_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `allowed_client_id`<sup>Required</sup> <a name="allowed_client_id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientId"></a>

```python
allowed_client_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityOidcKeyAllowedClientIdConfig <a name="IdentityOidcKeyAllowedClientIdConfig" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_oidc_key_allowed_client_id

identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_client_id: str,
  key_name: str,
  id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.allowedClientId">allowed_client_id</a></code> | <code>str</code> | Role Client ID allowed to use the key for signing. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.keyName">key_name</a></code> | <code>str</code> | Name of the key. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_oidc_key_allowed_client_id#id IdentityOidcKeyAllowedClientId#id}. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_client_id`<sup>Required</sup> <a name="allowed_client_id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.allowedClientId"></a>

```python
allowed_client_id: str
```

- *Type:* str

Role Client ID allowed to use the key for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_oidc_key_allowed_client_id#allowed_client_id IdentityOidcKeyAllowedClientId#allowed_client_id}

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Name of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_oidc_key_allowed_client_id#key_name IdentityOidcKeyAllowedClientId#key_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_oidc_key_allowed_client_id#id IdentityOidcKeyAllowedClientId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_oidc_key_allowed_client_id#namespace IdentityOidcKeyAllowedClientId#namespace}

---



