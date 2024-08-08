# `identityMfaDuo` Submodule <a name="`identityMfaDuo` Submodule" id="@cdktf/provider-vault.identityMfaDuo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaDuo <a name="IdentityMfaDuo" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo vault_identity_mfa_duo}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_duo

identityMfaDuo.IdentityMfaDuo(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_hostname: str,
  integration_key: str,
  secret_key: str,
  id: str = None,
  namespace: str = None,
  push_info: str = None,
  use_passcode: typing.Union[bool, IResolvable] = None,
  username_format: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.apiHostname">api_hostname</a></code> | <code>str</code> | API hostname for Duo. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.integrationKey">integration_key</a></code> | <code>str</code> | Integration key for Duo. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.secretKey">secret_key</a></code> | <code>str</code> | Secret key for Duo. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#id IdentityMfaDuo#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.pushInfo">push_info</a></code> | <code>str</code> | Push information for Duo. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.usePasscode">use_passcode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require passcode upon MFA validation. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.usernameFormat">username_format</a></code> | <code>str</code> | A template string for mapping Identity names to MFA methods. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_hostname`<sup>Required</sup> <a name="api_hostname" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.apiHostname"></a>

- *Type:* str

API hostname for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#api_hostname IdentityMfaDuo#api_hostname}

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.integrationKey"></a>

- *Type:* str

Integration key for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#integration_key IdentityMfaDuo#integration_key}

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.secretKey"></a>

- *Type:* str

Secret key for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#secret_key IdentityMfaDuo#secret_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#id IdentityMfaDuo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#namespace IdentityMfaDuo#namespace}

---

##### `push_info`<sup>Optional</sup> <a name="push_info" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.pushInfo"></a>

- *Type:* str

Push information for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#push_info IdentityMfaDuo#push_info}

---

##### `use_passcode`<sup>Optional</sup> <a name="use_passcode" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.usePasscode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require passcode upon MFA validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#use_passcode IdentityMfaDuo#use_passcode}

---

##### `username_format`<sup>Optional</sup> <a name="username_format" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.usernameFormat"></a>

- *Type:* str

A template string for mapping Identity names to MFA methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#username_format IdentityMfaDuo#username_format}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetPushInfo">reset_push_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetUsePasscode">reset_use_passcode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetUsernameFormat">reset_username_format</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_push_info` <a name="reset_push_info" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetPushInfo"></a>

```python
def reset_push_info() -> None
```

##### `reset_use_passcode` <a name="reset_use_passcode" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetUsePasscode"></a>

```python
def reset_use_passcode() -> None
```

##### `reset_username_format` <a name="reset_username_format" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetUsernameFormat"></a>

```python
def reset_username_format() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityMfaDuo resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_duo

identityMfaDuo.IdentityMfaDuo.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_duo

identityMfaDuo.IdentityMfaDuo.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_duo

identityMfaDuo.IdentityMfaDuo.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_duo

identityMfaDuo.IdentityMfaDuo.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityMfaDuo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityMfaDuo to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityMfaDuo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityMfaDuo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.methodId">method_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.mountAccessor">mount_accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespacePath">namespace_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.apiHostnameInput">api_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.integrationKeyInput">integration_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.pushInfoInput">push_info_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.secretKeyInput">secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usePasscodeInput">use_passcode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usernameFormatInput">username_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.apiHostname">api_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.integrationKey">integration_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.pushInfo">push_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usePasscode">use_passcode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usernameFormat">username_format</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `method_id`<sup>Required</sup> <a name="method_id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.methodId"></a>

```python
method_id: str
```

- *Type:* str

---

##### `mount_accessor`<sup>Required</sup> <a name="mount_accessor" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.mountAccessor"></a>

```python
mount_accessor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `namespace_path`<sup>Required</sup> <a name="namespace_path" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespacePath"></a>

```python
namespace_path: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `api_hostname_input`<sup>Optional</sup> <a name="api_hostname_input" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.apiHostnameInput"></a>

```python
api_hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_key_input`<sup>Optional</sup> <a name="integration_key_input" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.integrationKeyInput"></a>

```python
integration_key_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `push_info_input`<sup>Optional</sup> <a name="push_info_input" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.pushInfoInput"></a>

```python
push_info_input: str
```

- *Type:* str

---

##### `secret_key_input`<sup>Optional</sup> <a name="secret_key_input" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.secretKeyInput"></a>

```python
secret_key_input: str
```

- *Type:* str

---

##### `use_passcode_input`<sup>Optional</sup> <a name="use_passcode_input" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usePasscodeInput"></a>

```python
use_passcode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_format_input`<sup>Optional</sup> <a name="username_format_input" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usernameFormatInput"></a>

```python
username_format_input: str
```

- *Type:* str

---

##### `api_hostname`<sup>Required</sup> <a name="api_hostname" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.apiHostname"></a>

```python
api_hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.integrationKey"></a>

```python
integration_key: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `push_info`<sup>Required</sup> <a name="push_info" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.pushInfo"></a>

```python
push_info: str
```

- *Type:* str

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `use_passcode`<sup>Required</sup> <a name="use_passcode" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usePasscode"></a>

```python
use_passcode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_format`<sup>Required</sup> <a name="username_format" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usernameFormat"></a>

```python
username_format: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaDuoConfig <a name="IdentityMfaDuoConfig" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_duo

identityMfaDuo.IdentityMfaDuoConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_hostname: str,
  integration_key: str,
  secret_key: str,
  id: str = None,
  namespace: str = None,
  push_info: str = None,
  use_passcode: typing.Union[bool, IResolvable] = None,
  username_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.apiHostname">api_hostname</a></code> | <code>str</code> | API hostname for Duo. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.integrationKey">integration_key</a></code> | <code>str</code> | Integration key for Duo. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.secretKey">secret_key</a></code> | <code>str</code> | Secret key for Duo. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#id IdentityMfaDuo#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.pushInfo">push_info</a></code> | <code>str</code> | Push information for Duo. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.usePasscode">use_passcode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require passcode upon MFA validation. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.usernameFormat">username_format</a></code> | <code>str</code> | A template string for mapping Identity names to MFA methods. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_hostname`<sup>Required</sup> <a name="api_hostname" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.apiHostname"></a>

```python
api_hostname: str
```

- *Type:* str

API hostname for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#api_hostname IdentityMfaDuo#api_hostname}

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.integrationKey"></a>

```python
integration_key: str
```

- *Type:* str

Integration key for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#integration_key IdentityMfaDuo#integration_key}

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

Secret key for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#secret_key IdentityMfaDuo#secret_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#id IdentityMfaDuo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#namespace IdentityMfaDuo#namespace}

---

##### `push_info`<sup>Optional</sup> <a name="push_info" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.pushInfo"></a>

```python
push_info: str
```

- *Type:* str

Push information for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#push_info IdentityMfaDuo#push_info}

---

##### `use_passcode`<sup>Optional</sup> <a name="use_passcode" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.usePasscode"></a>

```python
use_passcode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require passcode upon MFA validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#use_passcode IdentityMfaDuo#use_passcode}

---

##### `username_format`<sup>Optional</sup> <a name="username_format" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.usernameFormat"></a>

```python
username_format: str
```

- *Type:* str

A template string for mapping Identity names to MFA methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#username_format IdentityMfaDuo#username_format}

---



