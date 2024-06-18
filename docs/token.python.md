# `token` Submodule <a name="`token` Submodule" id="@cdktf/provider-vault.token"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Token <a name="Token" id="@cdktf/provider-vault.token.Token"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token vault_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.token.Token.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import token

token.Token(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  explicit_max_ttl: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  namespace: str = None,
  no_default_policy: typing.Union[bool, IResolvable] = None,
  no_parent: typing.Union[bool, IResolvable] = None,
  num_uses: typing.Union[int, float] = None,
  period: str = None,
  policies: typing.List[str] = None,
  renewable: typing.Union[bool, IResolvable] = None,
  renew_increment: typing.Union[int, float] = None,
  renew_min_lease: typing.Union[int, float] = None,
  role_name: str = None,
  ttl: str = None,
  wrapping_ttl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the token. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.explicitMaxTtl">explicit_max_ttl</a></code> | <code>str</code> | The explicit max TTL of the token. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#id Token#id}. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata to be associated with the token. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.noDefaultPolicy">no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to disable the default policy. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.noParent">no_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to create a token without parent. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.numUses">num_uses</a></code> | <code>typing.Union[int, float]</code> | The number of allowed uses of the token. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.period">period</a></code> | <code>str</code> | The period of the token. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.policies">policies</a></code> | <code>typing.List[str]</code> | List of policies. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.renewable">renewable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow the token to be renewed. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.renewIncrement">renew_increment</a></code> | <code>typing.Union[int, float]</code> | The renew increment. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.renewMinLease">renew_min_lease</a></code> | <code>typing.Union[int, float]</code> | The minimum lease to renew token. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | The token role name. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | The TTL period of the token. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.wrappingTtl">wrapping_ttl</a></code> | <code>str</code> | The TTL period of the wrapped token. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.token.Token.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.token.Token.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.token.Token.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.token.Token.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.token.Token.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.token.Token.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.token.Token.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.token.Token.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.token.Token.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-vault.token.Token.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#display_name Token#display_name}

---

##### `explicit_max_ttl`<sup>Optional</sup> <a name="explicit_max_ttl" id="@cdktf/provider-vault.token.Token.Initializer.parameter.explicitMaxTtl"></a>

- *Type:* str

The explicit max TTL of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#explicit_max_ttl Token#explicit_max_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.token.Token.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#id Token#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.token.Token.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Metadata to be associated with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#metadata Token#metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.token.Token.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#namespace Token#namespace}

---

##### `no_default_policy`<sup>Optional</sup> <a name="no_default_policy" id="@cdktf/provider-vault.token.Token.Initializer.parameter.noDefaultPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to disable the default policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#no_default_policy Token#no_default_policy}

---

##### `no_parent`<sup>Optional</sup> <a name="no_parent" id="@cdktf/provider-vault.token.Token.Initializer.parameter.noParent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to create a token without parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#no_parent Token#no_parent}

---

##### `num_uses`<sup>Optional</sup> <a name="num_uses" id="@cdktf/provider-vault.token.Token.Initializer.parameter.numUses"></a>

- *Type:* typing.Union[int, float]

The number of allowed uses of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#num_uses Token#num_uses}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-vault.token.Token.Initializer.parameter.period"></a>

- *Type:* str

The period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#period Token#period}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.token.Token.Initializer.parameter.policies"></a>

- *Type:* typing.List[str]

List of policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#policies Token#policies}

---

##### `renewable`<sup>Optional</sup> <a name="renewable" id="@cdktf/provider-vault.token.Token.Initializer.parameter.renewable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow the token to be renewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#renewable Token#renewable}

---

##### `renew_increment`<sup>Optional</sup> <a name="renew_increment" id="@cdktf/provider-vault.token.Token.Initializer.parameter.renewIncrement"></a>

- *Type:* typing.Union[int, float]

The renew increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#renew_increment Token#renew_increment}

---

##### `renew_min_lease`<sup>Optional</sup> <a name="renew_min_lease" id="@cdktf/provider-vault.token.Token.Initializer.parameter.renewMinLease"></a>

- *Type:* typing.Union[int, float]

The minimum lease to renew token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#renew_min_lease Token#renew_min_lease}

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktf/provider-vault.token.Token.Initializer.parameter.roleName"></a>

- *Type:* str

The token role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#role_name Token#role_name}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.token.Token.Initializer.parameter.ttl"></a>

- *Type:* str

The TTL period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#ttl Token#ttl}

---

##### `wrapping_ttl`<sup>Optional</sup> <a name="wrapping_ttl" id="@cdktf/provider-vault.token.Token.Initializer.parameter.wrappingTtl"></a>

- *Type:* str

The TTL period of the wrapped token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#wrapping_ttl Token#wrapping_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.token.Token.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.token.Token.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.token.Token.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.token.Token.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.token.Token.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.token.Token.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.token.Token.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.token.Token.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetExplicitMaxTtl">reset_explicit_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNoDefaultPolicy">reset_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNoParent">reset_no_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNumUses">reset_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetPolicies">reset_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRenewable">reset_renewable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRenewIncrement">reset_renew_increment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRenewMinLease">reset_renew_min_lease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRoleName">reset_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetWrappingTtl">reset_wrapping_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.token.Token.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.token.Token.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.token.Token.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.token.Token.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.token.Token.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.token.Token.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.token.Token.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.token.Token.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.token.Token.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.token.Token.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.token.Token.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.token.Token.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.token.Token.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.token.Token.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.token.Token.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.token.Token.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.token.Token.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.token.Token.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.token.Token.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.token.Token.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.token.Token.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.token.Token.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.token.Token.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.token.Token.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.token.Token.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.token.Token.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.token.Token.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.token.Token.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.token.Token.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.token.Token.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.token.Token.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.token.Token.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.token.Token.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.token.Token.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.token.Token.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.token.Token.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.token.Token.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.token.Token.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.token.Token.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.token.Token.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.token.Token.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.token.Token.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.token.Token.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-vault.token.Token.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_explicit_max_ttl` <a name="reset_explicit_max_ttl" id="@cdktf/provider-vault.token.Token.resetExplicitMaxTtl"></a>

```python
def reset_explicit_max_ttl() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.token.Token.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-vault.token.Token.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.token.Token.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_no_default_policy` <a name="reset_no_default_policy" id="@cdktf/provider-vault.token.Token.resetNoDefaultPolicy"></a>

```python
def reset_no_default_policy() -> None
```

##### `reset_no_parent` <a name="reset_no_parent" id="@cdktf/provider-vault.token.Token.resetNoParent"></a>

```python
def reset_no_parent() -> None
```

##### `reset_num_uses` <a name="reset_num_uses" id="@cdktf/provider-vault.token.Token.resetNumUses"></a>

```python
def reset_num_uses() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-vault.token.Token.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktf/provider-vault.token.Token.resetPolicies"></a>

```python
def reset_policies() -> None
```

##### `reset_renewable` <a name="reset_renewable" id="@cdktf/provider-vault.token.Token.resetRenewable"></a>

```python
def reset_renewable() -> None
```

##### `reset_renew_increment` <a name="reset_renew_increment" id="@cdktf/provider-vault.token.Token.resetRenewIncrement"></a>

```python
def reset_renew_increment() -> None
```

##### `reset_renew_min_lease` <a name="reset_renew_min_lease" id="@cdktf/provider-vault.token.Token.resetRenewMinLease"></a>

```python
def reset_renew_min_lease() -> None
```

##### `reset_role_name` <a name="reset_role_name" id="@cdktf/provider-vault.token.Token.resetRoleName"></a>

```python
def reset_role_name() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.token.Token.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_wrapping_ttl` <a name="reset_wrapping_ttl" id="@cdktf/provider-vault.token.Token.resetWrappingTtl"></a>

```python
def reset_wrapping_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.token.Token.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Token resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.token.Token.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import token

token.Token.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.token.Token.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.token.Token.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import token

token.Token.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.token.Token.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.token.Token.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import token

token.Token.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.token.Token.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.token.Token.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import token

token.Token.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Token resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.token.Token.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.token.Token.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Token to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.token.Token.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Token that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.token.Token.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Token to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.token.Token.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.leaseDuration">lease_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.leaseStarted">lease_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappedToken">wrapped_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappingAccessor">wrapping_accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.explicitMaxTtlInput">explicit_max_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noDefaultPolicyInput">no_default_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noParentInput">no_parent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.numUsesInput">num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.policiesInput">policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewableInput">renewable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewIncrementInput">renew_increment_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewMinLeaseInput">renew_min_lease_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappingTtlInput">wrapping_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.explicitMaxTtl">explicit_max_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noDefaultPolicy">no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noParent">no_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.numUses">num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewable">renewable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewIncrement">renew_increment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewMinLease">renew_min_lease</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappingTtl">wrapping_ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.token.Token.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.token.Token.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.token.Token.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.token.Token.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.token.Token.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.token.Token.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.token.Token.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.token.Token.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.token.Token.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.token.Token.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.token.Token.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.token.Token.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.token.Token.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.token.Token.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktf/provider-vault.token.Token.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `lease_duration`<sup>Required</sup> <a name="lease_duration" id="@cdktf/provider-vault.token.Token.property.leaseDuration"></a>

```python
lease_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lease_started`<sup>Required</sup> <a name="lease_started" id="@cdktf/provider-vault.token.Token.property.leaseStarted"></a>

```python
lease_started: str
```

- *Type:* str

---

##### `wrapped_token`<sup>Required</sup> <a name="wrapped_token" id="@cdktf/provider-vault.token.Token.property.wrappedToken"></a>

```python
wrapped_token: str
```

- *Type:* str

---

##### `wrapping_accessor`<sup>Required</sup> <a name="wrapping_accessor" id="@cdktf/provider-vault.token.Token.property.wrappingAccessor"></a>

```python
wrapping_accessor: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-vault.token.Token.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `explicit_max_ttl_input`<sup>Optional</sup> <a name="explicit_max_ttl_input" id="@cdktf/provider-vault.token.Token.property.explicitMaxTtlInput"></a>

```python
explicit_max_ttl_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.token.Token.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-vault.token.Token.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.token.Token.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `no_default_policy_input`<sup>Optional</sup> <a name="no_default_policy_input" id="@cdktf/provider-vault.token.Token.property.noDefaultPolicyInput"></a>

```python
no_default_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_parent_input`<sup>Optional</sup> <a name="no_parent_input" id="@cdktf/provider-vault.token.Token.property.noParentInput"></a>

```python
no_parent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `num_uses_input`<sup>Optional</sup> <a name="num_uses_input" id="@cdktf/provider-vault.token.Token.property.numUsesInput"></a>

```python
num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-vault.token.Token.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-vault.token.Token.property.policiesInput"></a>

```python
policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `renewable_input`<sup>Optional</sup> <a name="renewable_input" id="@cdktf/provider-vault.token.Token.property.renewableInput"></a>

```python
renewable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `renew_increment_input`<sup>Optional</sup> <a name="renew_increment_input" id="@cdktf/provider-vault.token.Token.property.renewIncrementInput"></a>

```python
renew_increment_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `renew_min_lease_input`<sup>Optional</sup> <a name="renew_min_lease_input" id="@cdktf/provider-vault.token.Token.property.renewMinLeaseInput"></a>

```python
renew_min_lease_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-vault.token.Token.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.token.Token.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `wrapping_ttl_input`<sup>Optional</sup> <a name="wrapping_ttl_input" id="@cdktf/provider-vault.token.Token.property.wrappingTtlInput"></a>

```python
wrapping_ttl_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-vault.token.Token.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `explicit_max_ttl`<sup>Required</sup> <a name="explicit_max_ttl" id="@cdktf/provider-vault.token.Token.property.explicitMaxTtl"></a>

```python
explicit_max_ttl: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.token.Token.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.token.Token.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.token.Token.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `no_default_policy`<sup>Required</sup> <a name="no_default_policy" id="@cdktf/provider-vault.token.Token.property.noDefaultPolicy"></a>

```python
no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_parent`<sup>Required</sup> <a name="no_parent" id="@cdktf/provider-vault.token.Token.property.noParent"></a>

```python
no_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `num_uses`<sup>Required</sup> <a name="num_uses" id="@cdktf/provider-vault.token.Token.property.numUses"></a>

```python
num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-vault.token.Token.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.token.Token.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktf/provider-vault.token.Token.property.renewable"></a>

```python
renewable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `renew_increment`<sup>Required</sup> <a name="renew_increment" id="@cdktf/provider-vault.token.Token.property.renewIncrement"></a>

```python
renew_increment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `renew_min_lease`<sup>Required</sup> <a name="renew_min_lease" id="@cdktf/provider-vault.token.Token.property.renewMinLease"></a>

```python
renew_min_lease: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.token.Token.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.token.Token.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `wrapping_ttl`<sup>Required</sup> <a name="wrapping_ttl" id="@cdktf/provider-vault.token.Token.property.wrappingTtl"></a>

```python
wrapping_ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.token.Token.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TokenConfig <a name="TokenConfig" id="@cdktf/provider-vault.token.TokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.token.TokenConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import token

token.TokenConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  explicit_max_ttl: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  namespace: str = None,
  no_default_policy: typing.Union[bool, IResolvable] = None,
  no_parent: typing.Union[bool, IResolvable] = None,
  num_uses: typing.Union[int, float] = None,
  period: str = None,
  policies: typing.List[str] = None,
  renewable: typing.Union[bool, IResolvable] = None,
  renew_increment: typing.Union[int, float] = None,
  renew_min_lease: typing.Union[int, float] = None,
  role_name: str = None,
  ttl: str = None,
  wrapping_ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.explicitMaxTtl">explicit_max_ttl</a></code> | <code>str</code> | The explicit max TTL of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#id Token#id}. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata to be associated with the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.noDefaultPolicy">no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to disable the default policy. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.noParent">no_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to create a token without parent. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.numUses">num_uses</a></code> | <code>typing.Union[int, float]</code> | The number of allowed uses of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.period">period</a></code> | <code>str</code> | The period of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.policies">policies</a></code> | <code>typing.List[str]</code> | List of policies. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.renewable">renewable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to allow the token to be renewed. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.renewIncrement">renew_increment</a></code> | <code>typing.Union[int, float]</code> | The renew increment. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.renewMinLease">renew_min_lease</a></code> | <code>typing.Union[int, float]</code> | The minimum lease to renew token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.roleName">role_name</a></code> | <code>str</code> | The token role name. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.ttl">ttl</a></code> | <code>str</code> | The TTL period of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.wrappingTtl">wrapping_ttl</a></code> | <code>str</code> | The TTL period of the wrapped token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.token.TokenConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.token.TokenConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.token.TokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.token.TokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.token.TokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.token.TokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.token.TokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-vault.token.TokenConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#display_name Token#display_name}

---

##### `explicit_max_ttl`<sup>Optional</sup> <a name="explicit_max_ttl" id="@cdktf/provider-vault.token.TokenConfig.property.explicitMaxTtl"></a>

```python
explicit_max_ttl: str
```

- *Type:* str

The explicit max TTL of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#explicit_max_ttl Token#explicit_max_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.token.TokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#id Token#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.token.TokenConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Metadata to be associated with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#metadata Token#metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.token.TokenConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#namespace Token#namespace}

---

##### `no_default_policy`<sup>Optional</sup> <a name="no_default_policy" id="@cdktf/provider-vault.token.TokenConfig.property.noDefaultPolicy"></a>

```python
no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to disable the default policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#no_default_policy Token#no_default_policy}

---

##### `no_parent`<sup>Optional</sup> <a name="no_parent" id="@cdktf/provider-vault.token.TokenConfig.property.noParent"></a>

```python
no_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to create a token without parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#no_parent Token#no_parent}

---

##### `num_uses`<sup>Optional</sup> <a name="num_uses" id="@cdktf/provider-vault.token.TokenConfig.property.numUses"></a>

```python
num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of allowed uses of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#num_uses Token#num_uses}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-vault.token.TokenConfig.property.period"></a>

```python
period: str
```

- *Type:* str

The period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#period Token#period}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.token.TokenConfig.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

List of policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#policies Token#policies}

---

##### `renewable`<sup>Optional</sup> <a name="renewable" id="@cdktf/provider-vault.token.TokenConfig.property.renewable"></a>

```python
renewable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to allow the token to be renewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#renewable Token#renewable}

---

##### `renew_increment`<sup>Optional</sup> <a name="renew_increment" id="@cdktf/provider-vault.token.TokenConfig.property.renewIncrement"></a>

```python
renew_increment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The renew increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#renew_increment Token#renew_increment}

---

##### `renew_min_lease`<sup>Optional</sup> <a name="renew_min_lease" id="@cdktf/provider-vault.token.TokenConfig.property.renewMinLease"></a>

```python
renew_min_lease: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum lease to renew token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#renew_min_lease Token#renew_min_lease}

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktf/provider-vault.token.TokenConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

The token role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#role_name Token#role_name}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.token.TokenConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

The TTL period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#ttl Token#ttl}

---

##### `wrapping_ttl`<sup>Optional</sup> <a name="wrapping_ttl" id="@cdktf/provider-vault.token.TokenConfig.property.wrappingTtl"></a>

```python
wrapping_ttl: str
```

- *Type:* str

The TTL period of the wrapped token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/token#wrapping_ttl Token#wrapping_ttl}

---



