# `vault_okta_auth_backend`

Refer to the Terraform Registory for docs: [`vault_okta_auth_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend).

# `oktaAuthBackend` Submodule <a name="`oktaAuthBackend` Submodule" id="@cdktf/provider-vault.oktaAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OktaAuthBackend <a name="OktaAuthBackend" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend vault_okta_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend

oktaAuthBackend.OktaAuthBackend(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  organization: str,
  base_url: str = None,
  bypass_okta_mfa: typing.Union[bool, IResolvable] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  group: typing.Union[IResolvable, typing.List[OktaAuthBackendGroup]] = None,
  id: str = None,
  max_ttl: str = None,
  namespace: str = None,
  path: str = None,
  token: str = None,
  ttl: str = None,
  user: typing.Union[IResolvable, typing.List[OktaAuthBackendUser]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The Okta organization. This will be the first part of the url https://XXX.okta.com. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.baseUrl">base_url</a></code> | <code>str</code> | The Okta url. Examples: oktapreview.com, okta.com (default). |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.bypassOktaMfa">bypass_okta_mfa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, requests by Okta for a MFA check will be bypassed. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the auth backend. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.group">group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#group OktaAuthBackend#group}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#id OktaAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>str</code> | Maximum duration after which authentication will be expired. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.path">path</a></code> | <code>str</code> | path to mount the backend. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.token">token</a></code> | <code>str</code> | The Okta API token. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | Duration after which authentication will be expired. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.user">user</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#user OktaAuthBackend#user}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.organization"></a>

- *Type:* str

The Okta organization. This will be the first part of the url https://XXX.okta.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#organization OktaAuthBackend#organization}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.baseUrl"></a>

- *Type:* str

The Okta url. Examples: oktapreview.com, okta.com (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#base_url OktaAuthBackend#base_url}

---

##### `bypass_okta_mfa`<sup>Optional</sup> <a name="bypass_okta_mfa" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.bypassOktaMfa"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, requests by Okta for a MFA check will be bypassed.

This also disallows certain status checks on the account, such as whether the password is expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#bypass_okta_mfa OktaAuthBackend#bypass_okta_mfa}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.description"></a>

- *Type:* str

The description of the auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#description OktaAuthBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.disableRemount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#disable_remount OktaAuthBackend#disable_remount}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.group"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#group OktaAuthBackend#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#id OktaAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.maxTtl"></a>

- *Type:* str

Maximum duration after which authentication will be expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#max_ttl OktaAuthBackend#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#namespace OktaAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.path"></a>

- *Type:* str

path to mount the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#path OktaAuthBackend#path}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.token"></a>

- *Type:* str

The Okta API token.

This is required to query Okta for user group membership. If this is not supplied only locally configured groups will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#token OktaAuthBackend#token}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.ttl"></a>

- *Type:* str

Duration after which authentication will be expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#ttl OktaAuthBackend#ttl}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.user"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#user OktaAuthBackend#user}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putGroup">put_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putUser">put_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBypassOktaMfa">reset_bypass_okta_mfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDisableRemount">reset_disable_remount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetUser">reset_user</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_group` <a name="put_group" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putGroup"></a>

```python
def put_group(
  value: typing.Union[IResolvable, typing.List[OktaAuthBackendGroup]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putGroup.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>]]

---

##### `put_user` <a name="put_user" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putUser"></a>

```python
def put_user(
  value: typing.Union[IResolvable, typing.List[OktaAuthBackendUser]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putUser.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>]]

---

##### `reset_base_url` <a name="reset_base_url" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_bypass_okta_mfa` <a name="reset_bypass_okta_mfa" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBypassOktaMfa"></a>

```python
def reset_bypass_okta_mfa() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_remount` <a name="reset_disable_remount" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDisableRemount"></a>

```python
def reset_disable_remount() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetUser"></a>

```python
def reset_user() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend

oktaAuthBackend.OktaAuthBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend

oktaAuthBackend.OktaAuthBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend

oktaAuthBackend.OktaAuthBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.group">group</a></code> | <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList">OktaAuthBackendGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.user">user</a></code> | <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList">OktaAuthBackendUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfaInput">bypass_okta_mfa_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemountInput">disable_remount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.groupInput">group_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.maxTtlInput">max_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.userInput">user_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfa">bypass_okta_mfa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.maxTtl">max_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.group"></a>

```python
group: OktaAuthBackendGroupList
```

- *Type:* <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList">OktaAuthBackendGroupList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.user"></a>

```python
user: OktaAuthBackendUserList
```

- *Type:* <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList">OktaAuthBackendUserList</a>

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `bypass_okta_mfa_input`<sup>Optional</sup> <a name="bypass_okta_mfa_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfaInput"></a>

```python
bypass_okta_mfa_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_remount_input`<sup>Optional</sup> <a name="disable_remount_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemountInput"></a>

```python
disable_remount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.groupInput"></a>

```python
group_input: typing.Union[IResolvable, typing.List[OktaAuthBackendGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.maxTtlInput"></a>

```python
max_ttl_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.userInput"></a>

```python
user_input: typing.Union[IResolvable, typing.List[OktaAuthBackendUser]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>]]

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `bypass_okta_mfa`<sup>Required</sup> <a name="bypass_okta_mfa" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfa"></a>

```python
bypass_okta_mfa: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_remount`<sup>Required</sup> <a name="disable_remount" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.maxTtl"></a>

```python
max_ttl: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OktaAuthBackendConfig <a name="OktaAuthBackendConfig" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend

oktaAuthBackend.OktaAuthBackendConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  organization: str,
  base_url: str = None,
  bypass_okta_mfa: typing.Union[bool, IResolvable] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  group: typing.Union[IResolvable, typing.List[OktaAuthBackendGroup]] = None,
  id: str = None,
  max_ttl: str = None,
  namespace: str = None,
  path: str = None,
  token: str = None,
  ttl: str = None,
  user: typing.Union[IResolvable, typing.List[OktaAuthBackendUser]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.organization">organization</a></code> | <code>str</code> | The Okta organization. This will be the first part of the url https://XXX.okta.com. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.baseUrl">base_url</a></code> | <code>str</code> | The Okta url. Examples: oktapreview.com, okta.com (default). |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.bypassOktaMfa">bypass_okta_mfa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, requests by Okta for a MFA check will be bypassed. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.description">description</a></code> | <code>str</code> | The description of the auth backend. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.group">group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#group OktaAuthBackend#group}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#id OktaAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.maxTtl">max_ttl</a></code> | <code>str</code> | Maximum duration after which authentication will be expired. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.path">path</a></code> | <code>str</code> | path to mount the backend. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.token">token</a></code> | <code>str</code> | The Okta API token. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.ttl">ttl</a></code> | <code>str</code> | Duration after which authentication will be expired. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.user">user</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#user OktaAuthBackend#user}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The Okta organization. This will be the first part of the url https://XXX.okta.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#organization OktaAuthBackend#organization}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

The Okta url. Examples: oktapreview.com, okta.com (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#base_url OktaAuthBackend#base_url}

---

##### `bypass_okta_mfa`<sup>Optional</sup> <a name="bypass_okta_mfa" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.bypassOktaMfa"></a>

```python
bypass_okta_mfa: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, requests by Okta for a MFA check will be bypassed.

This also disallows certain status checks on the account, such as whether the password is expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#bypass_okta_mfa OktaAuthBackend#bypass_okta_mfa}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#description OktaAuthBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#disable_remount OktaAuthBackend#disable_remount}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.group"></a>

```python
group: typing.Union[IResolvable, typing.List[OktaAuthBackendGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#group OktaAuthBackend#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#id OktaAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.maxTtl"></a>

```python
max_ttl: str
```

- *Type:* str

Maximum duration after which authentication will be expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#max_ttl OktaAuthBackend#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#namespace OktaAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.path"></a>

```python
path: str
```

- *Type:* str

path to mount the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#path OktaAuthBackend#path}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.token"></a>

```python
token: str
```

- *Type:* str

The Okta API token.

This is required to query Okta for user group membership. If this is not supplied only locally configured groups will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#token OktaAuthBackend#token}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Duration after which authentication will be expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#ttl OktaAuthBackend#ttl}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.user"></a>

```python
user: typing.Union[IResolvable, typing.List[OktaAuthBackendUser]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#user OktaAuthBackend#user}.

---

### OktaAuthBackendGroup <a name="OktaAuthBackendGroup" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend

oktaAuthBackend.OktaAuthBackendGroup(
  group_name: str = None,
  policies: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#group_name OktaAuthBackend#group_name}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.policies">policies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#policies OktaAuthBackend#policies}. |

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#group_name OktaAuthBackend#group_name}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#policies OktaAuthBackend#policies}.

---

### OktaAuthBackendUser <a name="OktaAuthBackendUser" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend

oktaAuthBackend.OktaAuthBackendUser(
  groups: typing.List[str] = None,
  policies: typing.List[str] = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.groups">groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#groups OktaAuthBackend#groups}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.policies">policies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#policies OktaAuthBackend#policies}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#username OktaAuthBackend#username}. |

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#groups OktaAuthBackend#groups}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#policies OktaAuthBackend#policies}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/okta_auth_backend#username OktaAuthBackend#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### OktaAuthBackendGroupList <a name="OktaAuthBackendGroupList" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend

oktaAuthBackend.OktaAuthBackendGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OktaAuthBackendGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OktaAuthBackendGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>]]

---


### OktaAuthBackendGroupOutputReference <a name="OktaAuthBackendGroupOutputReference" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend

oktaAuthBackend.OktaAuthBackendGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetGroupName">reset_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetPolicies">reset_policies</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_name` <a name="reset_group_name" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetGroupName"></a>

```python
def reset_group_name() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetPolicies"></a>

```python
def reset_policies() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policiesInput">policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policiesInput"></a>

```python
policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OktaAuthBackendGroup]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>]

---


### OktaAuthBackendUserList <a name="OktaAuthBackendUserList" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend

oktaAuthBackend.OktaAuthBackendUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OktaAuthBackendUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OktaAuthBackendUser]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>]]

---


### OktaAuthBackendUserOutputReference <a name="OktaAuthBackendUserOutputReference" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import okta_auth_backend

oktaAuthBackend.OktaAuthBackendUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetPolicies">reset_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_groups` <a name="reset_groups" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetPolicies"></a>

```python
def reset_policies() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groupsInput">groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policiesInput">policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groupsInput"></a>

```python
groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policiesInput"></a>

```python
policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OktaAuthBackendUser]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>]

---



