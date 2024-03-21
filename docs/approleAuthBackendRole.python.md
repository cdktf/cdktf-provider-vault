# `approleAuthBackendRole` Submodule <a name="`approleAuthBackendRole` Submodule" id="@cdktf/provider-vault.approleAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApproleAuthBackendRole <a name="ApproleAuthBackendRole" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role vault_approle_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_role

approleAuthBackendRole.ApproleAuthBackendRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_name: str,
  backend: str = None,
  bind_secret_id: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None,
  role_id: str = None,
  secret_id_bound_cidrs: typing.List[str] = None,
  secret_id_num_uses: typing.Union[int, float] = None,
  secret_id_ttl: typing.Union[int, float] = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: typing.Union[bool, IResolvable] = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.bindSecretId">bind_secret_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to require secret_id to be present when logging in using this AppRole. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#id ApproleAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.roleId">role_id</a></code> | <code>str</code> | The RoleID of the role. Autogenerated if not set. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.secretIdBoundCidrs">secret_id_bound_cidrs</a></code> | <code>typing.List[str]</code> | List of CIDR blocks that can log in using the AppRole. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.secretIdNumUses">secret_id_num_uses</a></code> | <code>typing.Union[int, float]</code> | Number of times which a particular SecretID can be used to fetch a token from this AppRole, after which the SecretID will expire. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.secretIdTtl">secret_id_ttl</a></code> | <code>typing.Union[int, float]</code> | Number of seconds a SecretID remains valid for. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.roleName"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#role_name ApproleAuthBackendRole#role_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.backend"></a>

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#backend ApproleAuthBackendRole#backend}

---

##### `bind_secret_id`<sup>Optional</sup> <a name="bind_secret_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.bindSecretId"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to require secret_id to be present when logging in using this AppRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#bind_secret_id ApproleAuthBackendRole#bind_secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#id ApproleAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#namespace ApproleAuthBackendRole#namespace}

---

##### `role_id`<sup>Optional</sup> <a name="role_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.roleId"></a>

- *Type:* str

The RoleID of the role. Autogenerated if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#role_id ApproleAuthBackendRole#role_id}

---

##### `secret_id_bound_cidrs`<sup>Optional</sup> <a name="secret_id_bound_cidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.secretIdBoundCidrs"></a>

- *Type:* typing.List[str]

List of CIDR blocks that can log in using the AppRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#secret_id_bound_cidrs ApproleAuthBackendRole#secret_id_bound_cidrs}

---

##### `secret_id_num_uses`<sup>Optional</sup> <a name="secret_id_num_uses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.secretIdNumUses"></a>

- *Type:* typing.Union[int, float]

Number of times which a particular SecretID can be used to fetch a token from this AppRole, after which the SecretID will expire.

Leaving this unset or setting it to 0 will allow unlimited uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#secret_id_num_uses ApproleAuthBackendRole#secret_id_num_uses}

---

##### `secret_id_ttl`<sup>Optional</sup> <a name="secret_id_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.secretIdTtl"></a>

- *Type:* typing.Union[int, float]

Number of seconds a SecretID remains valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#secret_id_ttl ApproleAuthBackendRole#secret_id_ttl}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_bound_cidrs ApproleAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_explicit_max_ttl ApproleAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_max_ttl ApproleAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_no_default_policy ApproleAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_num_uses ApproleAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_period ApproleAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_policies ApproleAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_ttl ApproleAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_type ApproleAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetBindSecretId">reset_bind_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetRoleId">reset_role_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetSecretIdBoundCidrs">reset_secret_id_bound_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetSecretIdNumUses">reset_secret_id_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetSecretIdTtl">reset_secret_id_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenBoundCidrs">reset_token_bound_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenExplicitMaxTtl">reset_token_explicit_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenMaxTtl">reset_token_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenNoDefaultPolicy">reset_token_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenNumUses">reset_token_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenPeriod">reset_token_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenPolicies">reset_token_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenTtl">reset_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenType">reset_token_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_bind_secret_id` <a name="reset_bind_secret_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetBindSecretId"></a>

```python
def reset_bind_secret_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_role_id` <a name="reset_role_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetRoleId"></a>

```python
def reset_role_id() -> None
```

##### `reset_secret_id_bound_cidrs` <a name="reset_secret_id_bound_cidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetSecretIdBoundCidrs"></a>

```python
def reset_secret_id_bound_cidrs() -> None
```

##### `reset_secret_id_num_uses` <a name="reset_secret_id_num_uses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetSecretIdNumUses"></a>

```python
def reset_secret_id_num_uses() -> None
```

##### `reset_secret_id_ttl` <a name="reset_secret_id_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetSecretIdTtl"></a>

```python
def reset_secret_id_ttl() -> None
```

##### `reset_token_bound_cidrs` <a name="reset_token_bound_cidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenBoundCidrs"></a>

```python
def reset_token_bound_cidrs() -> None
```

##### `reset_token_explicit_max_ttl` <a name="reset_token_explicit_max_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```python
def reset_token_explicit_max_ttl() -> None
```

##### `reset_token_max_ttl` <a name="reset_token_max_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenMaxTtl"></a>

```python
def reset_token_max_ttl() -> None
```

##### `reset_token_no_default_policy` <a name="reset_token_no_default_policy" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```python
def reset_token_no_default_policy() -> None
```

##### `reset_token_num_uses` <a name="reset_token_num_uses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenNumUses"></a>

```python
def reset_token_num_uses() -> None
```

##### `reset_token_period` <a name="reset_token_period" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenPeriod"></a>

```python
def reset_token_period() -> None
```

##### `reset_token_policies` <a name="reset_token_policies" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenPolicies"></a>

```python
def reset_token_policies() -> None
```

##### `reset_token_ttl` <a name="reset_token_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenTtl"></a>

```python
def reset_token_ttl() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenType"></a>

```python
def reset_token_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApproleAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_role

approleAuthBackendRole.ApproleAuthBackendRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_role

approleAuthBackendRole.ApproleAuthBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_role

approleAuthBackendRole.ApproleAuthBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_role

approleAuthBackendRole.ApproleAuthBackendRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApproleAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApproleAuthBackendRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApproleAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApproleAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.bindSecretIdInput">bind_secret_id_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdBoundCidrsInput">secret_id_bound_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdNumUsesInput">secret_id_num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdTtlInput">secret_id_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenBoundCidrsInput">token_bound_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenExplicitMaxTtlInput">token_explicit_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenMaxTtlInput">token_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNoDefaultPolicyInput">token_no_default_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNumUsesInput">token_num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPeriodInput">token_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPoliciesInput">token_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenTtlInput">token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.bindSecretId">bind_secret_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdBoundCidrs">secret_id_bound_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdNumUses">secret_id_num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdTtl">secret_id_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `bind_secret_id_input`<sup>Optional</sup> <a name="bind_secret_id_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.bindSecretIdInput"></a>

```python
bind_secret_id_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `secret_id_bound_cidrs_input`<sup>Optional</sup> <a name="secret_id_bound_cidrs_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdBoundCidrsInput"></a>

```python
secret_id_bound_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_id_num_uses_input`<sup>Optional</sup> <a name="secret_id_num_uses_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdNumUsesInput"></a>

```python
secret_id_num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret_id_ttl_input`<sup>Optional</sup> <a name="secret_id_ttl_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdTtlInput"></a>

```python
secret_id_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_bound_cidrs_input`<sup>Optional</sup> <a name="token_bound_cidrs_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenBoundCidrsInput"></a>

```python
token_bound_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl_input`<sup>Optional</sup> <a name="token_explicit_max_ttl_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```python
token_explicit_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl_input`<sup>Optional</sup> <a name="token_max_ttl_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenMaxTtlInput"></a>

```python
token_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy_input`<sup>Optional</sup> <a name="token_no_default_policy_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```python
token_no_default_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_num_uses_input`<sup>Optional</sup> <a name="token_num_uses_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNumUsesInput"></a>

```python
token_num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period_input`<sup>Optional</sup> <a name="token_period_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPeriodInput"></a>

```python
token_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies_input`<sup>Optional</sup> <a name="token_policies_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPoliciesInput"></a>

```python
token_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl_input`<sup>Optional</sup> <a name="token_ttl_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenTtlInput"></a>

```python
token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `bind_secret_id`<sup>Required</sup> <a name="bind_secret_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.bindSecretId"></a>

```python
bind_secret_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `secret_id_bound_cidrs`<sup>Required</sup> <a name="secret_id_bound_cidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdBoundCidrs"></a>

```python
secret_id_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_id_num_uses`<sup>Required</sup> <a name="secret_id_num_uses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdNumUses"></a>

```python
secret_id_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret_id_ttl`<sup>Required</sup> <a name="secret_id_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdTtl"></a>

```python
secret_id_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_bound_cidrs`<sup>Required</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl`<sup>Required</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl`<sup>Required</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy`<sup>Required</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_num_uses`<sup>Required</sup> <a name="token_num_uses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period`<sup>Required</sup> <a name="token_period" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies`<sup>Required</sup> <a name="token_policies" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApproleAuthBackendRoleConfig <a name="ApproleAuthBackendRoleConfig" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_role

approleAuthBackendRole.ApproleAuthBackendRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_name: str,
  backend: str = None,
  bind_secret_id: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None,
  role_id: str = None,
  secret_id_bound_cidrs: typing.List[str] = None,
  secret_id_num_uses: typing.Union[int, float] = None,
  secret_id_ttl: typing.Union[int, float] = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: typing.Union[bool, IResolvable] = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.roleName">role_name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.bindSecretId">bind_secret_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to require secret_id to be present when logging in using this AppRole. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#id ApproleAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.roleId">role_id</a></code> | <code>str</code> | The RoleID of the role. Autogenerated if not set. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.secretIdBoundCidrs">secret_id_bound_cidrs</a></code> | <code>typing.List[str]</code> | List of CIDR blocks that can log in using the AppRole. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.secretIdNumUses">secret_id_num_uses</a></code> | <code>typing.Union[int, float]</code> | Number of times which a particular SecretID can be used to fetch a token from this AppRole, after which the SecretID will expire. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.secretIdTtl">secret_id_ttl</a></code> | <code>typing.Union[int, float]</code> | Number of seconds a SecretID remains valid for. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#role_name ApproleAuthBackendRole#role_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#backend ApproleAuthBackendRole#backend}

---

##### `bind_secret_id`<sup>Optional</sup> <a name="bind_secret_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.bindSecretId"></a>

```python
bind_secret_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to require secret_id to be present when logging in using this AppRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#bind_secret_id ApproleAuthBackendRole#bind_secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#id ApproleAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#namespace ApproleAuthBackendRole#namespace}

---

##### `role_id`<sup>Optional</sup> <a name="role_id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

The RoleID of the role. Autogenerated if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#role_id ApproleAuthBackendRole#role_id}

---

##### `secret_id_bound_cidrs`<sup>Optional</sup> <a name="secret_id_bound_cidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.secretIdBoundCidrs"></a>

```python
secret_id_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

List of CIDR blocks that can log in using the AppRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#secret_id_bound_cidrs ApproleAuthBackendRole#secret_id_bound_cidrs}

---

##### `secret_id_num_uses`<sup>Optional</sup> <a name="secret_id_num_uses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.secretIdNumUses"></a>

```python
secret_id_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of times which a particular SecretID can be used to fetch a token from this AppRole, after which the SecretID will expire.

Leaving this unset or setting it to 0 will allow unlimited uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#secret_id_num_uses ApproleAuthBackendRole#secret_id_num_uses}

---

##### `secret_id_ttl`<sup>Optional</sup> <a name="secret_id_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.secretIdTtl"></a>

```python
secret_id_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds a SecretID remains valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#secret_id_ttl ApproleAuthBackendRole#secret_id_ttl}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_bound_cidrs ApproleAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_explicit_max_ttl ApproleAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_max_ttl ApproleAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_no_default_policy ApproleAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_num_uses ApproleAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_period ApproleAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_policies ApproleAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_ttl ApproleAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_role#token_type ApproleAuthBackendRole#token_type}

---



