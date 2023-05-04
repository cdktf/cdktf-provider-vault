# `vault_mfa_okta`

Refer to the Terraform Registory for docs: [`vault_mfa_okta`](https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta).

# `mfaOkta` Submodule <a name="`mfaOkta` Submodule" id="@cdktf/provider-vault.mfaOkta"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaOkta <a name="MfaOkta" id="@cdktf/provider-vault.mfaOkta.MfaOkta"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta vault_mfa_okta}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import mfa_okta

mfaOkta.MfaOkta(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_token: str,
  mount_accessor: str,
  name: str,
  org_name: str,
  base_url: str = None,
  id: str = None,
  namespace: str = None,
  primary_email: typing.Union[bool, IResolvable] = None,
  username_format: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.apiToken">api_token</a></code> | <code>str</code> | Okta API key. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.mountAccessor">mount_accessor</a></code> | <code>str</code> | The mount to tie this method to for use in automatic mappings. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the MFA method. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.orgName">org_name</a></code> | <code>str</code> | Name of the organization to be used in the Okta API. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.baseUrl">base_url</a></code> | <code>str</code> | If set, will be used as the base domain for API requests. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.id">id</a></code> | <code>str</code> | ID computed by Vault. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.primaryEmail">primary_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the username will only match the primary email for the account. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.usernameFormat">username_format</a></code> | <code>str</code> | A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_token`<sup>Required</sup> <a name="api_token" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.apiToken"></a>

- *Type:* str

Okta API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#api_token MfaOkta#api_token}

---

##### `mount_accessor`<sup>Required</sup> <a name="mount_accessor" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.mountAccessor"></a>

- *Type:* str

The mount to tie this method to for use in automatic mappings.

The mapping will use the Name field of Aliases associated with this mount as the username in the mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#mount_accessor MfaOkta#mount_accessor}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.name"></a>

- *Type:* str

Name of the MFA method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#name MfaOkta#name}

---

##### `org_name`<sup>Required</sup> <a name="org_name" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.orgName"></a>

- *Type:* str

Name of the organization to be used in the Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#org_name MfaOkta#org_name}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.baseUrl"></a>

- *Type:* str

If set, will be used as the base domain for API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#base_url MfaOkta#base_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.id"></a>

- *Type:* str

ID computed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#id MfaOkta#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#namespace MfaOkta#namespace}

---

##### `primary_email`<sup>Optional</sup> <a name="primary_email" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.primaryEmail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the username will only match the primary email for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#primary_email MfaOkta#primary_email}

---

##### `username_format`<sup>Optional</sup> <a name="username_format" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.usernameFormat"></a>

- *Type:* str

A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#username_format MfaOkta#username_format}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.resetPrimaryEmail">reset_primary_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.resetUsernameFormat">reset_username_format</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.mfaOkta.MfaOkta.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.mfaOkta.MfaOkta.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.mfaOkta.MfaOkta.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.mfaOkta.MfaOkta.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.mfaOkta.MfaOkta.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.mfaOkta.MfaOkta.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.mfaOkta.MfaOkta.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.mfaOkta.MfaOkta.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.mfaOkta.MfaOkta.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_base_url` <a name="reset_base_url" id="@cdktf/provider-vault.mfaOkta.MfaOkta.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.mfaOkta.MfaOkta.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.mfaOkta.MfaOkta.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_primary_email` <a name="reset_primary_email" id="@cdktf/provider-vault.mfaOkta.MfaOkta.resetPrimaryEmail"></a>

```python
def reset_primary_email() -> None
```

##### `reset_username_format` <a name="reset_username_format" id="@cdktf/provider-vault.mfaOkta.MfaOkta.resetUsernameFormat"></a>

```python
def reset_username_format() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.mfaOkta.MfaOkta.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import mfa_okta

mfaOkta.MfaOkta.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaOkta.MfaOkta.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.mfaOkta.MfaOkta.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import mfa_okta

mfaOkta.MfaOkta.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaOkta.MfaOkta.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.mfaOkta.MfaOkta.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import mfa_okta

mfaOkta.MfaOkta.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaOkta.MfaOkta.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.apiTokenInput">api_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.mountAccessorInput">mount_accessor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.orgNameInput">org_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.primaryEmailInput">primary_email_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.usernameFormatInput">username_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.apiToken">api_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.mountAccessor">mount_accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.orgName">org_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.primaryEmail">primary_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.usernameFormat">username_format</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_token_input`<sup>Optional</sup> <a name="api_token_input" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.apiTokenInput"></a>

```python
api_token_input: str
```

- *Type:* str

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mount_accessor_input`<sup>Optional</sup> <a name="mount_accessor_input" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.mountAccessorInput"></a>

```python
mount_accessor_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `org_name_input`<sup>Optional</sup> <a name="org_name_input" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.orgNameInput"></a>

```python
org_name_input: str
```

- *Type:* str

---

##### `primary_email_input`<sup>Optional</sup> <a name="primary_email_input" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.primaryEmailInput"></a>

```python
primary_email_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_format_input`<sup>Optional</sup> <a name="username_format_input" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.usernameFormatInput"></a>

```python
username_format_input: str
```

- *Type:* str

---

##### `api_token`<sup>Required</sup> <a name="api_token" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mount_accessor`<sup>Required</sup> <a name="mount_accessor" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.mountAccessor"></a>

```python
mount_accessor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `org_name`<sup>Required</sup> <a name="org_name" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.orgName"></a>

```python
org_name: str
```

- *Type:* str

---

##### `primary_email`<sup>Required</sup> <a name="primary_email" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.primaryEmail"></a>

```python
primary_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_format`<sup>Required</sup> <a name="username_format" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.usernameFormat"></a>

```python
username_format: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MfaOktaConfig <a name="MfaOktaConfig" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import mfa_okta

mfaOkta.MfaOktaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_token: str,
  mount_accessor: str,
  name: str,
  org_name: str,
  base_url: str = None,
  id: str = None,
  namespace: str = None,
  primary_email: typing.Union[bool, IResolvable] = None,
  username_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.apiToken">api_token</a></code> | <code>str</code> | Okta API key. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.mountAccessor">mount_accessor</a></code> | <code>str</code> | The mount to tie this method to for use in automatic mappings. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.name">name</a></code> | <code>str</code> | Name of the MFA method. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.orgName">org_name</a></code> | <code>str</code> | Name of the organization to be used in the Okta API. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.baseUrl">base_url</a></code> | <code>str</code> | If set, will be used as the base domain for API requests. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.id">id</a></code> | <code>str</code> | ID computed by Vault. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.primaryEmail">primary_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the username will only match the primary email for the account. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.usernameFormat">username_format</a></code> | <code>str</code> | A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_token`<sup>Required</sup> <a name="api_token" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

Okta API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#api_token MfaOkta#api_token}

---

##### `mount_accessor`<sup>Required</sup> <a name="mount_accessor" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.mountAccessor"></a>

```python
mount_accessor: str
```

- *Type:* str

The mount to tie this method to for use in automatic mappings.

The mapping will use the Name field of Aliases associated with this mount as the username in the mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#mount_accessor MfaOkta#mount_accessor}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the MFA method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#name MfaOkta#name}

---

##### `org_name`<sup>Required</sup> <a name="org_name" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.orgName"></a>

```python
org_name: str
```

- *Type:* str

Name of the organization to be used in the Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#org_name MfaOkta#org_name}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

If set, will be used as the base domain for API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#base_url MfaOkta#base_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

ID computed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#id MfaOkta#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#namespace MfaOkta#namespace}

---

##### `primary_email`<sup>Optional</sup> <a name="primary_email" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.primaryEmail"></a>

```python
primary_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the username will only match the primary email for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#primary_email MfaOkta#primary_email}

---

##### `username_format`<sup>Optional</sup> <a name="username_format" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.usernameFormat"></a>

```python
username_format: str
```

- *Type:* str

A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/mfa_okta#username_format MfaOkta#username_format}

---



