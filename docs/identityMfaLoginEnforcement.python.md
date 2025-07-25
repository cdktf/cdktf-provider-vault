# `identityMfaLoginEnforcement` Submodule <a name="`identityMfaLoginEnforcement` Submodule" id="@cdktf/provider-vault.identityMfaLoginEnforcement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaLoginEnforcement <a name="IdentityMfaLoginEnforcement" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement vault_identity_mfa_login_enforcement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_login_enforcement

identityMfaLoginEnforcement.IdentityMfaLoginEnforcement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mfa_method_ids: typing.List[str],
  name: str,
  auth_method_accessors: typing.List[str] = None,
  auth_method_types: typing.List[str] = None,
  id: str = None,
  identity_entity_ids: typing.List[str] = None,
  identity_group_ids: typing.List[str] = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.mfaMethodIds">mfa_method_ids</a></code> | <code>typing.List[str]</code> | Set of MFA method UUIDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.name">name</a></code> | <code>str</code> | Login enforcement name. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.authMethodAccessors">auth_method_accessors</a></code> | <code>typing.List[str]</code> | Set of auth method accessor IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.authMethodTypes">auth_method_types</a></code> | <code>typing.List[str]</code> | Set of auth method types. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#id IdentityMfaLoginEnforcement#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.identityEntityIds">identity_entity_ids</a></code> | <code>typing.List[str]</code> | Set of identity entity IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.identityGroupIds">identity_group_ids</a></code> | <code>typing.List[str]</code> | Set of identity group IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mfa_method_ids`<sup>Required</sup> <a name="mfa_method_ids" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.mfaMethodIds"></a>

- *Type:* typing.List[str]

Set of MFA method UUIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#mfa_method_ids IdentityMfaLoginEnforcement#mfa_method_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.name"></a>

- *Type:* str

Login enforcement name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#name IdentityMfaLoginEnforcement#name}

---

##### `auth_method_accessors`<sup>Optional</sup> <a name="auth_method_accessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.authMethodAccessors"></a>

- *Type:* typing.List[str]

Set of auth method accessor IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#auth_method_accessors IdentityMfaLoginEnforcement#auth_method_accessors}

---

##### `auth_method_types`<sup>Optional</sup> <a name="auth_method_types" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.authMethodTypes"></a>

- *Type:* typing.List[str]

Set of auth method types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#auth_method_types IdentityMfaLoginEnforcement#auth_method_types}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#id IdentityMfaLoginEnforcement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_entity_ids`<sup>Optional</sup> <a name="identity_entity_ids" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.identityEntityIds"></a>

- *Type:* typing.List[str]

Set of identity entity IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#identity_entity_ids IdentityMfaLoginEnforcement#identity_entity_ids}

---

##### `identity_group_ids`<sup>Optional</sup> <a name="identity_group_ids" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.identityGroupIds"></a>

- *Type:* typing.List[str]

Set of identity group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#identity_group_ids IdentityMfaLoginEnforcement#identity_group_ids}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#namespace IdentityMfaLoginEnforcement#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodAccessors">reset_auth_method_accessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodTypes">reset_auth_method_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityEntityIds">reset_identity_entity_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityGroupIds">reset_identity_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_auth_method_accessors` <a name="reset_auth_method_accessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodAccessors"></a>

```python
def reset_auth_method_accessors() -> None
```

##### `reset_auth_method_types` <a name="reset_auth_method_types" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodTypes"></a>

```python
def reset_auth_method_types() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_entity_ids` <a name="reset_identity_entity_ids" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityEntityIds"></a>

```python
def reset_identity_entity_ids() -> None
```

##### `reset_identity_group_ids` <a name="reset_identity_group_ids" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityGroupIds"></a>

```python
def reset_identity_group_ids() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityMfaLoginEnforcement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_login_enforcement

identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_login_enforcement

identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_login_enforcement

identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_login_enforcement

identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityMfaLoginEnforcement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityMfaLoginEnforcement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityMfaLoginEnforcement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityMfaLoginEnforcement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespacePath">namespace_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessorsInput">auth_method_accessors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypesInput">auth_method_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIdsInput">identity_entity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIdsInput">identity_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIdsInput">mfa_method_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessors">auth_method_accessors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypes">auth_method_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIds">identity_entity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIds">identity_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIds">mfa_method_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `namespace_path`<sup>Required</sup> <a name="namespace_path" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespacePath"></a>

```python
namespace_path: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `auth_method_accessors_input`<sup>Optional</sup> <a name="auth_method_accessors_input" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessorsInput"></a>

```python
auth_method_accessors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auth_method_types_input`<sup>Optional</sup> <a name="auth_method_types_input" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypesInput"></a>

```python
auth_method_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_entity_ids_input`<sup>Optional</sup> <a name="identity_entity_ids_input" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIdsInput"></a>

```python
identity_entity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_group_ids_input`<sup>Optional</sup> <a name="identity_group_ids_input" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIdsInput"></a>

```python
identity_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mfa_method_ids_input`<sup>Optional</sup> <a name="mfa_method_ids_input" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIdsInput"></a>

```python
mfa_method_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `auth_method_accessors`<sup>Required</sup> <a name="auth_method_accessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessors"></a>

```python
auth_method_accessors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auth_method_types`<sup>Required</sup> <a name="auth_method_types" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypes"></a>

```python
auth_method_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_entity_ids`<sup>Required</sup> <a name="identity_entity_ids" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIds"></a>

```python
identity_entity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_group_ids`<sup>Required</sup> <a name="identity_group_ids" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIds"></a>

```python
identity_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mfa_method_ids`<sup>Required</sup> <a name="mfa_method_ids" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIds"></a>

```python
mfa_method_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaLoginEnforcementConfig <a name="IdentityMfaLoginEnforcementConfig" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_login_enforcement

identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mfa_method_ids: typing.List[str],
  name: str,
  auth_method_accessors: typing.List[str] = None,
  auth_method_types: typing.List[str] = None,
  id: str = None,
  identity_entity_ids: typing.List[str] = None,
  identity_group_ids: typing.List[str] = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.mfaMethodIds">mfa_method_ids</a></code> | <code>typing.List[str]</code> | Set of MFA method UUIDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.name">name</a></code> | <code>str</code> | Login enforcement name. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodAccessors">auth_method_accessors</a></code> | <code>typing.List[str]</code> | Set of auth method accessor IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodTypes">auth_method_types</a></code> | <code>typing.List[str]</code> | Set of auth method types. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#id IdentityMfaLoginEnforcement#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityEntityIds">identity_entity_ids</a></code> | <code>typing.List[str]</code> | Set of identity entity IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityGroupIds">identity_group_ids</a></code> | <code>typing.List[str]</code> | Set of identity group IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mfa_method_ids`<sup>Required</sup> <a name="mfa_method_ids" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.mfaMethodIds"></a>

```python
mfa_method_ids: typing.List[str]
```

- *Type:* typing.List[str]

Set of MFA method UUIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#mfa_method_ids IdentityMfaLoginEnforcement#mfa_method_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Login enforcement name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#name IdentityMfaLoginEnforcement#name}

---

##### `auth_method_accessors`<sup>Optional</sup> <a name="auth_method_accessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodAccessors"></a>

```python
auth_method_accessors: typing.List[str]
```

- *Type:* typing.List[str]

Set of auth method accessor IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#auth_method_accessors IdentityMfaLoginEnforcement#auth_method_accessors}

---

##### `auth_method_types`<sup>Optional</sup> <a name="auth_method_types" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodTypes"></a>

```python
auth_method_types: typing.List[str]
```

- *Type:* typing.List[str]

Set of auth method types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#auth_method_types IdentityMfaLoginEnforcement#auth_method_types}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#id IdentityMfaLoginEnforcement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_entity_ids`<sup>Optional</sup> <a name="identity_entity_ids" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityEntityIds"></a>

```python
identity_entity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Set of identity entity IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#identity_entity_ids IdentityMfaLoginEnforcement#identity_entity_ids}

---

##### `identity_group_ids`<sup>Optional</sup> <a name="identity_group_ids" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityGroupIds"></a>

```python
identity_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Set of identity group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#identity_group_ids IdentityMfaLoginEnforcement#identity_group_ids}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/identity_mfa_login_enforcement#namespace IdentityMfaLoginEnforcement#namespace}

---



