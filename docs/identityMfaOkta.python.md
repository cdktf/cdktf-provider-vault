# `identityMfaOkta` Submodule <a name="`identityMfaOkta` Submodule" id="@cdktf/provider-vault.identityMfaOkta"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaOkta <a name="IdentityMfaOkta" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta vault_identity_mfa_okta}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_okta

identityMfaOkta.IdentityMfaOkta(
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
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.apiToken">api_token</a></code> | <code>str</code> | Okta API token. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.orgName">org_name</a></code> | <code>str</code> | Name of the organization to be used in the Okta API. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.baseUrl">base_url</a></code> | <code>str</code> | The base domain to use for API requests. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#id IdentityMfaOkta#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.primaryEmail">primary_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only match the primary email for the account. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.usernameFormat">username_format</a></code> | <code>str</code> | A template string for mapping Identity names to MFA methods. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_token`<sup>Required</sup> <a name="api_token" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.apiToken"></a>

- *Type:* str

Okta API token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#api_token IdentityMfaOkta#api_token}

---

##### `org_name`<sup>Required</sup> <a name="org_name" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.orgName"></a>

- *Type:* str

Name of the organization to be used in the Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#org_name IdentityMfaOkta#org_name}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.baseUrl"></a>

- *Type:* str

The base domain to use for API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#base_url IdentityMfaOkta#base_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#id IdentityMfaOkta#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#namespace IdentityMfaOkta#namespace}

---

##### `primary_email`<sup>Optional</sup> <a name="primary_email" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.primaryEmail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only match the primary email for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#primary_email IdentityMfaOkta#primary_email}

---

##### `username_format`<sup>Optional</sup> <a name="username_format" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.usernameFormat"></a>

- *Type:* str

A template string for mapping Identity names to MFA methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#username_format IdentityMfaOkta#username_format}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetPrimaryEmail">reset_primary_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetUsernameFormat">reset_username_format</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_base_url` <a name="reset_base_url" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_primary_email` <a name="reset_primary_email" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetPrimaryEmail"></a>

```python
def reset_primary_email() -> None
```

##### `reset_username_format` <a name="reset_username_format" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetUsernameFormat"></a>

```python
def reset_username_format() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityMfaOkta resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_okta

identityMfaOkta.IdentityMfaOkta.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_okta

identityMfaOkta.IdentityMfaOkta.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_okta

identityMfaOkta.IdentityMfaOkta.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_okta

identityMfaOkta.IdentityMfaOkta.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityMfaOkta resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityMfaOkta to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityMfaOkta that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityMfaOkta to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.methodId">method_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.mountAccessor">mount_accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespacePath">namespace_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.apiTokenInput">api_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.orgNameInput">org_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.primaryEmailInput">primary_email_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.usernameFormatInput">username_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.apiToken">api_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.orgName">org_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.primaryEmail">primary_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.usernameFormat">username_format</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `method_id`<sup>Required</sup> <a name="method_id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.methodId"></a>

```python
method_id: str
```

- *Type:* str

---

##### `mount_accessor`<sup>Required</sup> <a name="mount_accessor" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.mountAccessor"></a>

```python
mount_accessor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `namespace_path`<sup>Required</sup> <a name="namespace_path" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespacePath"></a>

```python
namespace_path: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `api_token_input`<sup>Optional</sup> <a name="api_token_input" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.apiTokenInput"></a>

```python
api_token_input: str
```

- *Type:* str

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `org_name_input`<sup>Optional</sup> <a name="org_name_input" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.orgNameInput"></a>

```python
org_name_input: str
```

- *Type:* str

---

##### `primary_email_input`<sup>Optional</sup> <a name="primary_email_input" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.primaryEmailInput"></a>

```python
primary_email_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_format_input`<sup>Optional</sup> <a name="username_format_input" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.usernameFormatInput"></a>

```python
username_format_input: str
```

- *Type:* str

---

##### `api_token`<sup>Required</sup> <a name="api_token" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `org_name`<sup>Required</sup> <a name="org_name" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.orgName"></a>

```python
org_name: str
```

- *Type:* str

---

##### `primary_email`<sup>Required</sup> <a name="primary_email" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.primaryEmail"></a>

```python
primary_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_format`<sup>Required</sup> <a name="username_format" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.usernameFormat"></a>

```python
username_format: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaOktaConfig <a name="IdentityMfaOktaConfig" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_okta

identityMfaOkta.IdentityMfaOktaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_token: str,
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
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.apiToken">api_token</a></code> | <code>str</code> | Okta API token. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.orgName">org_name</a></code> | <code>str</code> | Name of the organization to be used in the Okta API. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.baseUrl">base_url</a></code> | <code>str</code> | The base domain to use for API requests. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#id IdentityMfaOkta#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.primaryEmail">primary_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only match the primary email for the account. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.usernameFormat">username_format</a></code> | <code>str</code> | A template string for mapping Identity names to MFA methods. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_token`<sup>Required</sup> <a name="api_token" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

Okta API token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#api_token IdentityMfaOkta#api_token}

---

##### `org_name`<sup>Required</sup> <a name="org_name" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.orgName"></a>

```python
org_name: str
```

- *Type:* str

Name of the organization to be used in the Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#org_name IdentityMfaOkta#org_name}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

The base domain to use for API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#base_url IdentityMfaOkta#base_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#id IdentityMfaOkta#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#namespace IdentityMfaOkta#namespace}

---

##### `primary_email`<sup>Optional</sup> <a name="primary_email" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.primaryEmail"></a>

```python
primary_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only match the primary email for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#primary_email IdentityMfaOkta#primary_email}

---

##### `username_format`<sup>Optional</sup> <a name="username_format" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.usernameFormat"></a>

```python
username_format: str
```

- *Type:* str

A template string for mapping Identity names to MFA methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_okta#username_format IdentityMfaOkta#username_format}

---



