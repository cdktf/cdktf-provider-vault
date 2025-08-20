# `tokenAuthBackendRole` Submodule <a name="`tokenAuthBackendRole` Submodule" id="@cdktf/provider-vault.tokenAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TokenAuthBackendRole <a name="TokenAuthBackendRole" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role vault_token_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import token_auth_backend_role

tokenAuthBackendRole.TokenAuthBackendRole(
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
  allowed_entity_aliases: typing.List[str] = None,
  allowed_policies: typing.List[str] = None,
  allowed_policies_glob: typing.List[str] = None,
  disallowed_policies: typing.List[str] = None,
  disallowed_policies_glob: typing.List[str] = None,
  id: str = None,
  namespace: str = None,
  orphan: typing.Union[bool, IResolvable] = None,
  path_suffix: str = None,
  renewable: typing.Union[bool, IResolvable] = None,
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
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.allowedEntityAliases">allowed_entity_aliases</a></code> | <code>typing.List[str]</code> | Set of allowed entity aliases for this role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.allowedPolicies">allowed_policies</a></code> | <code>typing.List[str]</code> | List of allowed policies for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.allowedPoliciesGlob">allowed_policies_glob</a></code> | <code>typing.List[str]</code> | Set of allowed policies with glob match for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.disallowedPolicies">disallowed_policies</a></code> | <code>typing.List[str]</code> | List of disallowed policies for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.disallowedPoliciesGlob">disallowed_policies_glob</a></code> | <code>typing.List[str]</code> | Set of disallowed policies with glob match for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#id TokenAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.orphan">orphan</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, tokens created against this policy will be orphan tokens. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.pathSuffix">path_suffix</a></code> | <code>str</code> | Tokens created against this role will have the given suffix as part of their path in addition to the role name. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.renewable">renewable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to disable the ability of the token to be renewed past its initial TTL. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.roleName"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#role_name TokenAuthBackendRole#role_name}

---

##### `allowed_entity_aliases`<sup>Optional</sup> <a name="allowed_entity_aliases" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.allowedEntityAliases"></a>

- *Type:* typing.List[str]

Set of allowed entity aliases for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#allowed_entity_aliases TokenAuthBackendRole#allowed_entity_aliases}

---

##### `allowed_policies`<sup>Optional</sup> <a name="allowed_policies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.allowedPolicies"></a>

- *Type:* typing.List[str]

List of allowed policies for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#allowed_policies TokenAuthBackendRole#allowed_policies}

---

##### `allowed_policies_glob`<sup>Optional</sup> <a name="allowed_policies_glob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.allowedPoliciesGlob"></a>

- *Type:* typing.List[str]

Set of allowed policies with glob match for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#allowed_policies_glob TokenAuthBackendRole#allowed_policies_glob}

---

##### `disallowed_policies`<sup>Optional</sup> <a name="disallowed_policies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.disallowedPolicies"></a>

- *Type:* typing.List[str]

List of disallowed policies for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#disallowed_policies TokenAuthBackendRole#disallowed_policies}

---

##### `disallowed_policies_glob`<sup>Optional</sup> <a name="disallowed_policies_glob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.disallowedPoliciesGlob"></a>

- *Type:* typing.List[str]

Set of disallowed policies with glob match for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#disallowed_policies_glob TokenAuthBackendRole#disallowed_policies_glob}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#id TokenAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#namespace TokenAuthBackendRole#namespace}

---

##### `orphan`<sup>Optional</sup> <a name="orphan" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.orphan"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, tokens created against this policy will be orphan tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#orphan TokenAuthBackendRole#orphan}

---

##### `path_suffix`<sup>Optional</sup> <a name="path_suffix" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.pathSuffix"></a>

- *Type:* str

Tokens created against this role will have the given suffix as part of their path in addition to the role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#path_suffix TokenAuthBackendRole#path_suffix}

---

##### `renewable`<sup>Optional</sup> <a name="renewable" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.renewable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable the ability of the token to be renewed past its initial TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#renewable TokenAuthBackendRole#renewable}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_bound_cidrs TokenAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_explicit_max_ttl TokenAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_max_ttl TokenAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_no_default_policy TokenAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_num_uses TokenAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_period TokenAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_policies TokenAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_ttl TokenAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_type TokenAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedEntityAliases">reset_allowed_entity_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPolicies">reset_allowed_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPoliciesGlob">reset_allowed_policies_glob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPolicies">reset_disallowed_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPoliciesGlob">reset_disallowed_policies_glob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOrphan">reset_orphan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetPathSuffix">reset_path_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetRenewable">reset_renewable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenBoundCidrs">reset_token_bound_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenExplicitMaxTtl">reset_token_explicit_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenMaxTtl">reset_token_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNoDefaultPolicy">reset_token_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNumUses">reset_token_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPeriod">reset_token_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPolicies">reset_token_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenTtl">reset_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenType">reset_token_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_entity_aliases` <a name="reset_allowed_entity_aliases" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedEntityAliases"></a>

```python
def reset_allowed_entity_aliases() -> None
```

##### `reset_allowed_policies` <a name="reset_allowed_policies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPolicies"></a>

```python
def reset_allowed_policies() -> None
```

##### `reset_allowed_policies_glob` <a name="reset_allowed_policies_glob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPoliciesGlob"></a>

```python
def reset_allowed_policies_glob() -> None
```

##### `reset_disallowed_policies` <a name="reset_disallowed_policies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPolicies"></a>

```python
def reset_disallowed_policies() -> None
```

##### `reset_disallowed_policies_glob` <a name="reset_disallowed_policies_glob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPoliciesGlob"></a>

```python
def reset_disallowed_policies_glob() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_orphan` <a name="reset_orphan" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOrphan"></a>

```python
def reset_orphan() -> None
```

##### `reset_path_suffix` <a name="reset_path_suffix" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetPathSuffix"></a>

```python
def reset_path_suffix() -> None
```

##### `reset_renewable` <a name="reset_renewable" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetRenewable"></a>

```python
def reset_renewable() -> None
```

##### `reset_token_bound_cidrs` <a name="reset_token_bound_cidrs" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenBoundCidrs"></a>

```python
def reset_token_bound_cidrs() -> None
```

##### `reset_token_explicit_max_ttl` <a name="reset_token_explicit_max_ttl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```python
def reset_token_explicit_max_ttl() -> None
```

##### `reset_token_max_ttl` <a name="reset_token_max_ttl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenMaxTtl"></a>

```python
def reset_token_max_ttl() -> None
```

##### `reset_token_no_default_policy` <a name="reset_token_no_default_policy" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```python
def reset_token_no_default_policy() -> None
```

##### `reset_token_num_uses` <a name="reset_token_num_uses" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNumUses"></a>

```python
def reset_token_num_uses() -> None
```

##### `reset_token_period` <a name="reset_token_period" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPeriod"></a>

```python
def reset_token_period() -> None
```

##### `reset_token_policies` <a name="reset_token_policies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPolicies"></a>

```python
def reset_token_policies() -> None
```

##### `reset_token_ttl` <a name="reset_token_ttl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenTtl"></a>

```python
def reset_token_ttl() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenType"></a>

```python
def reset_token_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TokenAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import token_auth_backend_role

tokenAuthBackendRole.TokenAuthBackendRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import token_auth_backend_role

tokenAuthBackendRole.TokenAuthBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import token_auth_backend_role

tokenAuthBackendRole.TokenAuthBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import token_auth_backend_role

tokenAuthBackendRole.TokenAuthBackendRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TokenAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TokenAuthBackendRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TokenAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TokenAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliasesInput">allowed_entity_aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlobInput">allowed_policies_glob_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesInput">allowed_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlobInput">disallowed_policies_glob_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesInput">disallowed_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphanInput">orphan_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffixInput">path_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewableInput">renewable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrsInput">token_bound_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtlInput">token_explicit_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtlInput">token_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicyInput">token_no_default_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUsesInput">token_num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriodInput">token_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPoliciesInput">token_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtlInput">token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliases">allowed_entity_aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPolicies">allowed_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlob">allowed_policies_glob</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPolicies">disallowed_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlob">disallowed_policies_glob</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphan">orphan</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffix">path_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewable">renewable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_entity_aliases_input`<sup>Optional</sup> <a name="allowed_entity_aliases_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliasesInput"></a>

```python
allowed_entity_aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_policies_glob_input`<sup>Optional</sup> <a name="allowed_policies_glob_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlobInput"></a>

```python
allowed_policies_glob_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_policies_input`<sup>Optional</sup> <a name="allowed_policies_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesInput"></a>

```python
allowed_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disallowed_policies_glob_input`<sup>Optional</sup> <a name="disallowed_policies_glob_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlobInput"></a>

```python
disallowed_policies_glob_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disallowed_policies_input`<sup>Optional</sup> <a name="disallowed_policies_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesInput"></a>

```python
disallowed_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `orphan_input`<sup>Optional</sup> <a name="orphan_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphanInput"></a>

```python
orphan_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path_suffix_input`<sup>Optional</sup> <a name="path_suffix_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffixInput"></a>

```python
path_suffix_input: str
```

- *Type:* str

---

##### `renewable_input`<sup>Optional</sup> <a name="renewable_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewableInput"></a>

```python
renewable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `token_bound_cidrs_input`<sup>Optional</sup> <a name="token_bound_cidrs_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrsInput"></a>

```python
token_bound_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl_input`<sup>Optional</sup> <a name="token_explicit_max_ttl_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```python
token_explicit_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl_input`<sup>Optional</sup> <a name="token_max_ttl_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtlInput"></a>

```python
token_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy_input`<sup>Optional</sup> <a name="token_no_default_policy_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```python
token_no_default_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_num_uses_input`<sup>Optional</sup> <a name="token_num_uses_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUsesInput"></a>

```python
token_num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period_input`<sup>Optional</sup> <a name="token_period_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriodInput"></a>

```python
token_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies_input`<sup>Optional</sup> <a name="token_policies_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPoliciesInput"></a>

```python
token_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl_input`<sup>Optional</sup> <a name="token_ttl_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtlInput"></a>

```python
token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `allowed_entity_aliases`<sup>Required</sup> <a name="allowed_entity_aliases" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliases"></a>

```python
allowed_entity_aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_policies`<sup>Required</sup> <a name="allowed_policies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPolicies"></a>

```python
allowed_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_policies_glob`<sup>Required</sup> <a name="allowed_policies_glob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlob"></a>

```python
allowed_policies_glob: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disallowed_policies`<sup>Required</sup> <a name="disallowed_policies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPolicies"></a>

```python
disallowed_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disallowed_policies_glob`<sup>Required</sup> <a name="disallowed_policies_glob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlob"></a>

```python
disallowed_policies_glob: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `orphan`<sup>Required</sup> <a name="orphan" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphan"></a>

```python
orphan: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path_suffix`<sup>Required</sup> <a name="path_suffix" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffix"></a>

```python
path_suffix: str
```

- *Type:* str

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewable"></a>

```python
renewable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `token_bound_cidrs`<sup>Required</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl`<sup>Required</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl`<sup>Required</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy`<sup>Required</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_num_uses`<sup>Required</sup> <a name="token_num_uses" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period`<sup>Required</sup> <a name="token_period" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies`<sup>Required</sup> <a name="token_policies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TokenAuthBackendRoleConfig <a name="TokenAuthBackendRoleConfig" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import token_auth_backend_role

tokenAuthBackendRole.TokenAuthBackendRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_name: str,
  allowed_entity_aliases: typing.List[str] = None,
  allowed_policies: typing.List[str] = None,
  allowed_policies_glob: typing.List[str] = None,
  disallowed_policies: typing.List[str] = None,
  disallowed_policies_glob: typing.List[str] = None,
  id: str = None,
  namespace: str = None,
  orphan: typing.Union[bool, IResolvable] = None,
  path_suffix: str = None,
  renewable: typing.Union[bool, IResolvable] = None,
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
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.roleName">role_name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedEntityAliases">allowed_entity_aliases</a></code> | <code>typing.List[str]</code> | Set of allowed entity aliases for this role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPolicies">allowed_policies</a></code> | <code>typing.List[str]</code> | List of allowed policies for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPoliciesGlob">allowed_policies_glob</a></code> | <code>typing.List[str]</code> | Set of allowed policies with glob match for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPolicies">disallowed_policies</a></code> | <code>typing.List[str]</code> | List of disallowed policies for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPoliciesGlob">disallowed_policies_glob</a></code> | <code>typing.List[str]</code> | Set of disallowed policies with glob match for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#id TokenAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.orphan">orphan</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, tokens created against this policy will be orphan tokens. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.pathSuffix">path_suffix</a></code> | <code>str</code> | Tokens created against this role will have the given suffix as part of their path in addition to the role name. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.renewable">renewable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to disable the ability of the token to be renewed past its initial TTL. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#role_name TokenAuthBackendRole#role_name}

---

##### `allowed_entity_aliases`<sup>Optional</sup> <a name="allowed_entity_aliases" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedEntityAliases"></a>

```python
allowed_entity_aliases: typing.List[str]
```

- *Type:* typing.List[str]

Set of allowed entity aliases for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#allowed_entity_aliases TokenAuthBackendRole#allowed_entity_aliases}

---

##### `allowed_policies`<sup>Optional</sup> <a name="allowed_policies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPolicies"></a>

```python
allowed_policies: typing.List[str]
```

- *Type:* typing.List[str]

List of allowed policies for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#allowed_policies TokenAuthBackendRole#allowed_policies}

---

##### `allowed_policies_glob`<sup>Optional</sup> <a name="allowed_policies_glob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPoliciesGlob"></a>

```python
allowed_policies_glob: typing.List[str]
```

- *Type:* typing.List[str]

Set of allowed policies with glob match for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#allowed_policies_glob TokenAuthBackendRole#allowed_policies_glob}

---

##### `disallowed_policies`<sup>Optional</sup> <a name="disallowed_policies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPolicies"></a>

```python
disallowed_policies: typing.List[str]
```

- *Type:* typing.List[str]

List of disallowed policies for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#disallowed_policies TokenAuthBackendRole#disallowed_policies}

---

##### `disallowed_policies_glob`<sup>Optional</sup> <a name="disallowed_policies_glob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPoliciesGlob"></a>

```python
disallowed_policies_glob: typing.List[str]
```

- *Type:* typing.List[str]

Set of disallowed policies with glob match for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#disallowed_policies_glob TokenAuthBackendRole#disallowed_policies_glob}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#id TokenAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#namespace TokenAuthBackendRole#namespace}

---

##### `orphan`<sup>Optional</sup> <a name="orphan" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.orphan"></a>

```python
orphan: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, tokens created against this policy will be orphan tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#orphan TokenAuthBackendRole#orphan}

---

##### `path_suffix`<sup>Optional</sup> <a name="path_suffix" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.pathSuffix"></a>

```python
path_suffix: str
```

- *Type:* str

Tokens created against this role will have the given suffix as part of their path in addition to the role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#path_suffix TokenAuthBackendRole#path_suffix}

---

##### `renewable`<sup>Optional</sup> <a name="renewable" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.renewable"></a>

```python
renewable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable the ability of the token to be renewed past its initial TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#renewable TokenAuthBackendRole#renewable}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_bound_cidrs TokenAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_explicit_max_ttl TokenAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_max_ttl TokenAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_no_default_policy TokenAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_num_uses TokenAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_period TokenAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_policies TokenAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_ttl TokenAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/token_auth_backend_role#token_type TokenAuthBackendRole#token_type}

---



