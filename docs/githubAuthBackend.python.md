# `vault_github_auth_backend`

Refer to the Terraform Registory for docs: [`vault_github_auth_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend).

# `githubAuthBackend` Submodule <a name="`githubAuthBackend` Submodule" id="@cdktf/provider-vault.githubAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubAuthBackend <a name="GithubAuthBackend" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend vault_github_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import github_auth_backend

githubAuthBackend.GithubAuthBackend(
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
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None,
  organization_id: typing.Union[int, float] = None,
  path: str = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: typing.Union[bool, IResolvable] = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None,
  tune: typing.Union[IResolvable, typing.List[GithubAuthBackendTune]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The organization users must be part of. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.baseUrl">base_url</a></code> | <code>str</code> | The API endpoint to use. Useful if you are running GitHub Enterprise or an API-compatible authentication server. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.description">description</a></code> | <code>str</code> | Specifies the description of the mount. This overrides the current stored value, if any. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#id GithubAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.organizationId">organization_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the organization users must be part of. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.path">path</a></code> | <code>str</code> | Path where the auth backend is mounted. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tune">tune</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#tune GithubAuthBackend#tune}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.organization"></a>

- *Type:* str

The organization users must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#organization GithubAuthBackend#organization}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.baseUrl"></a>

- *Type:* str

The API endpoint to use. Useful if you are running GitHub Enterprise or an API-compatible authentication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#base_url GithubAuthBackend#base_url}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.description"></a>

- *Type:* str

Specifies the description of the mount. This overrides the current stored value, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#description GithubAuthBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.disableRemount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#disable_remount GithubAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#id GithubAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#namespace GithubAuthBackend#namespace}

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.organizationId"></a>

- *Type:* typing.Union[int, float]

The ID of the organization users must be part of.

Vault will attempt to fetch and set this value if it is not provided (vault-1.10+)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#organization_id GithubAuthBackend#organization_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.path"></a>

- *Type:* str

Path where the auth backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#path GithubAuthBackend#path}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_bound_cidrs GithubAuthBackend#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_explicit_max_ttl GithubAuthBackend#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_max_ttl GithubAuthBackend#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_no_default_policy GithubAuthBackend#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenNumUses"></a>

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_num_uses GithubAuthBackend#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenPeriod"></a>

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_period GithubAuthBackend#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenPolicies"></a>

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_policies GithubAuthBackend#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenTtl"></a>

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_ttl GithubAuthBackend#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tokenType"></a>

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_type GithubAuthBackend#token_type}

---

##### `tune`<sup>Optional</sup> <a name="tune" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.tune"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#tune GithubAuthBackend#tune}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.putTune">put_tune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetDisableRemount">reset_disable_remount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetOrganizationId">reset_organization_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenBoundCidrs">reset_token_bound_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenExplicitMaxTtl">reset_token_explicit_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenMaxTtl">reset_token_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenNoDefaultPolicy">reset_token_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenNumUses">reset_token_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenPeriod">reset_token_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenPolicies">reset_token_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenTtl">reset_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenType">reset_token_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTune">reset_tune</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_tune` <a name="put_tune" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.putTune"></a>

```python
def put_tune(
  value: typing.Union[IResolvable, typing.List[GithubAuthBackendTune]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.putTune.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>]]

---

##### `reset_base_url` <a name="reset_base_url" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_remount` <a name="reset_disable_remount" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetDisableRemount"></a>

```python
def reset_disable_remount() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_organization_id` <a name="reset_organization_id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetOrganizationId"></a>

```python
def reset_organization_id() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_token_bound_cidrs` <a name="reset_token_bound_cidrs" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenBoundCidrs"></a>

```python
def reset_token_bound_cidrs() -> None
```

##### `reset_token_explicit_max_ttl` <a name="reset_token_explicit_max_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenExplicitMaxTtl"></a>

```python
def reset_token_explicit_max_ttl() -> None
```

##### `reset_token_max_ttl` <a name="reset_token_max_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenMaxTtl"></a>

```python
def reset_token_max_ttl() -> None
```

##### `reset_token_no_default_policy` <a name="reset_token_no_default_policy" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenNoDefaultPolicy"></a>

```python
def reset_token_no_default_policy() -> None
```

##### `reset_token_num_uses` <a name="reset_token_num_uses" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenNumUses"></a>

```python
def reset_token_num_uses() -> None
```

##### `reset_token_period` <a name="reset_token_period" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenPeriod"></a>

```python
def reset_token_period() -> None
```

##### `reset_token_policies` <a name="reset_token_policies" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenPolicies"></a>

```python
def reset_token_policies() -> None
```

##### `reset_token_ttl` <a name="reset_token_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenTtl"></a>

```python
def reset_token_ttl() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenType"></a>

```python
def reset_token_type() -> None
```

##### `reset_tune` <a name="reset_tune" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.resetTune"></a>

```python
def reset_tune() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GithubAuthBackend resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import github_auth_backend

githubAuthBackend.GithubAuthBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import github_auth_backend

githubAuthBackend.GithubAuthBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import github_auth_backend

githubAuthBackend.GithubAuthBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import github_auth_backend

githubAuthBackend.GithubAuthBackend.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GithubAuthBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GithubAuthBackend to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GithubAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GithubAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tune">tune</a></code> | <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList">GithubAuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.disableRemountInput">disable_remount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.organizationIdInput">organization_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenBoundCidrsInput">token_bound_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenExplicitMaxTtlInput">token_explicit_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenMaxTtlInput">token_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNoDefaultPolicyInput">token_no_default_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNumUsesInput">token_num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPeriodInput">token_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPoliciesInput">token_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenTtlInput">token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tuneInput">tune_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.organizationId">organization_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `tune`<sup>Required</sup> <a name="tune" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tune"></a>

```python
tune: GithubAuthBackendTuneList
```

- *Type:* <a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList">GithubAuthBackendTuneList</a>

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_remount_input`<sup>Optional</sup> <a name="disable_remount_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.disableRemountInput"></a>

```python
disable_remount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `organization_id_input`<sup>Optional</sup> <a name="organization_id_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.organizationIdInput"></a>

```python
organization_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `token_bound_cidrs_input`<sup>Optional</sup> <a name="token_bound_cidrs_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenBoundCidrsInput"></a>

```python
token_bound_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl_input`<sup>Optional</sup> <a name="token_explicit_max_ttl_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenExplicitMaxTtlInput"></a>

```python
token_explicit_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl_input`<sup>Optional</sup> <a name="token_max_ttl_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenMaxTtlInput"></a>

```python
token_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy_input`<sup>Optional</sup> <a name="token_no_default_policy_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNoDefaultPolicyInput"></a>

```python
token_no_default_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_num_uses_input`<sup>Optional</sup> <a name="token_num_uses_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNumUsesInput"></a>

```python
token_num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period_input`<sup>Optional</sup> <a name="token_period_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPeriodInput"></a>

```python
token_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies_input`<sup>Optional</sup> <a name="token_policies_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPoliciesInput"></a>

```python
token_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl_input`<sup>Optional</sup> <a name="token_ttl_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenTtlInput"></a>

```python
token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `tune_input`<sup>Optional</sup> <a name="tune_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tuneInput"></a>

```python
tune_input: typing.Union[IResolvable, typing.List[GithubAuthBackendTune]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>]]

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_remount`<sup>Required</sup> <a name="disable_remount" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.organizationId"></a>

```python
organization_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `token_bound_cidrs`<sup>Required</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl`<sup>Required</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl`<sup>Required</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy`<sup>Required</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_num_uses`<sup>Required</sup> <a name="token_num_uses" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period`<sup>Required</sup> <a name="token_period" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies`<sup>Required</sup> <a name="token_policies" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GithubAuthBackendConfig <a name="GithubAuthBackendConfig" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import github_auth_backend

githubAuthBackend.GithubAuthBackendConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  organization: str,
  base_url: str = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None,
  organization_id: typing.Union[int, float] = None,
  path: str = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: typing.Union[bool, IResolvable] = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None,
  tune: typing.Union[IResolvable, typing.List[GithubAuthBackendTune]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.organization">organization</a></code> | <code>str</code> | The organization users must be part of. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.baseUrl">base_url</a></code> | <code>str</code> | The API endpoint to use. Useful if you are running GitHub Enterprise or an API-compatible authentication server. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.description">description</a></code> | <code>str</code> | Specifies the description of the mount. This overrides the current stored value, if any. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#id GithubAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.organizationId">organization_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the organization users must be part of. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.path">path</a></code> | <code>str</code> | Path where the auth backend is mounted. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tune">tune</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#tune GithubAuthBackend#tune}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The organization users must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#organization GithubAuthBackend#organization}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

The API endpoint to use. Useful if you are running GitHub Enterprise or an API-compatible authentication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#base_url GithubAuthBackend#base_url}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Specifies the description of the mount. This overrides the current stored value, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#description GithubAuthBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#disable_remount GithubAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#id GithubAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#namespace GithubAuthBackend#namespace}

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.organizationId"></a>

```python
organization_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the organization users must be part of.

Vault will attempt to fetch and set this value if it is not provided (vault-1.10+)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#organization_id GithubAuthBackend#organization_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Path where the auth backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#path GithubAuthBackend#path}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_bound_cidrs GithubAuthBackend#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_explicit_max_ttl GithubAuthBackend#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_max_ttl GithubAuthBackend#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_no_default_policy GithubAuthBackend#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_num_uses GithubAuthBackend#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_period GithubAuthBackend#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_policies GithubAuthBackend#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_ttl GithubAuthBackend#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_type GithubAuthBackend#token_type}

---

##### `tune`<sup>Optional</sup> <a name="tune" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tune"></a>

```python
tune: typing.Union[IResolvable, typing.List[GithubAuthBackendTune]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#tune GithubAuthBackend#tune}.

---

### GithubAuthBackendTune <a name="GithubAuthBackendTune" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import github_auth_backend

githubAuthBackend.GithubAuthBackendTune(
  allowed_response_headers: typing.List[str] = None,
  audit_non_hmac_request_keys: typing.List[str] = None,
  audit_non_hmac_response_keys: typing.List[str] = None,
  default_lease_ttl: str = None,
  listing_visibility: str = None,
  max_lease_ttl: str = None,
  passthrough_request_headers: typing.List[str] = None,
  token_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#allowed_response_headers GithubAuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#audit_non_hmac_request_keys GithubAuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#audit_non_hmac_response_keys GithubAuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.defaultLeaseTtl">default_lease_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#default_lease_ttl GithubAuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.listingVisibility">listing_visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#listing_visibility GithubAuthBackend#listing_visibility}. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.maxLeaseTtl">max_lease_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#max_lease_ttl GithubAuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#passthrough_request_headers GithubAuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.tokenType">token_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_type GithubAuthBackend#token_type}. |

---

##### `allowed_response_headers`<sup>Optional</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.allowedResponseHeaders"></a>

```python
allowed_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#allowed_response_headers GithubAuthBackend#allowed_response_headers}.

---

##### `audit_non_hmac_request_keys`<sup>Optional</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#audit_non_hmac_request_keys GithubAuthBackend#audit_non_hmac_request_keys}.

---

##### `audit_non_hmac_response_keys`<sup>Optional</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#audit_non_hmac_response_keys GithubAuthBackend#audit_non_hmac_response_keys}.

---

##### `default_lease_ttl`<sup>Optional</sup> <a name="default_lease_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.defaultLeaseTtl"></a>

```python
default_lease_ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#default_lease_ttl GithubAuthBackend#default_lease_ttl}.

---

##### `listing_visibility`<sup>Optional</sup> <a name="listing_visibility" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.listingVisibility"></a>

```python
listing_visibility: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#listing_visibility GithubAuthBackend#listing_visibility}.

---

##### `max_lease_ttl`<sup>Optional</sup> <a name="max_lease_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.maxLeaseTtl"></a>

```python
max_lease_ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#max_lease_ttl GithubAuthBackend#max_lease_ttl}.

---

##### `passthrough_request_headers`<sup>Optional</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.passthroughRequestHeaders"></a>

```python
passthrough_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#passthrough_request_headers GithubAuthBackend#passthrough_request_headers}.

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/github_auth_backend#token_type GithubAuthBackend#token_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### GithubAuthBackendTuneList <a name="GithubAuthBackendTuneList" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import github_auth_backend

githubAuthBackend.GithubAuthBackendTuneList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GithubAuthBackendTuneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GithubAuthBackendTune]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>]]

---


### GithubAuthBackendTuneOutputReference <a name="GithubAuthBackendTuneOutputReference" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import github_auth_backend

githubAuthBackend.GithubAuthBackendTuneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetAllowedResponseHeaders">reset_allowed_response_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">reset_audit_non_hmac_request_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">reset_audit_non_hmac_response_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetDefaultLeaseTtl">reset_default_lease_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetListingVisibility">reset_listing_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetMaxLeaseTtl">reset_max_lease_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetPassthroughRequestHeaders">reset_passthrough_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetTokenType">reset_token_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_response_headers` <a name="reset_allowed_response_headers" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```python
def reset_allowed_response_headers() -> None
```

##### `reset_audit_non_hmac_request_keys` <a name="reset_audit_non_hmac_request_keys" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```python
def reset_audit_non_hmac_request_keys() -> None
```

##### `reset_audit_non_hmac_response_keys` <a name="reset_audit_non_hmac_response_keys" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```python
def reset_audit_non_hmac_response_keys() -> None
```

##### `reset_default_lease_ttl` <a name="reset_default_lease_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```python
def reset_default_lease_ttl() -> None
```

##### `reset_listing_visibility` <a name="reset_listing_visibility" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetListingVisibility"></a>

```python
def reset_listing_visibility() -> None
```

##### `reset_max_lease_ttl` <a name="reset_max_lease_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```python
def reset_max_lease_ttl() -> None
```

##### `reset_passthrough_request_headers` <a name="reset_passthrough_request_headers" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```python
def reset_passthrough_request_headers() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetTokenType"></a>

```python
def reset_token_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.allowedResponseHeadersInput">allowed_response_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">audit_non_hmac_request_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">audit_non_hmac_response_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.defaultLeaseTtlInput">default_lease_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.listingVisibilityInput">listing_visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.maxLeaseTtlInput">max_lease_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">passthrough_request_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.defaultLeaseTtl">default_lease_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.listingVisibility">listing_visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.maxLeaseTtl">max_lease_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_response_headers_input`<sup>Optional</sup> <a name="allowed_response_headers_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```python
allowed_response_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_request_keys_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```python
audit_non_hmac_request_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_response_keys_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```python
audit_non_hmac_response_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_lease_ttl_input`<sup>Optional</sup> <a name="default_lease_ttl_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```python
default_lease_ttl_input: str
```

- *Type:* str

---

##### `listing_visibility_input`<sup>Optional</sup> <a name="listing_visibility_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```python
listing_visibility_input: str
```

- *Type:* str

---

##### `max_lease_ttl_input`<sup>Optional</sup> <a name="max_lease_ttl_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```python
max_lease_ttl_input: str
```

- *Type:* str

---

##### `passthrough_request_headers_input`<sup>Optional</sup> <a name="passthrough_request_headers_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```python
passthrough_request_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `allowed_response_headers`<sup>Required</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```python
allowed_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys`<sup>Required</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys`<sup>Required</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_lease_ttl`<sup>Required</sup> <a name="default_lease_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```python
default_lease_ttl: str
```

- *Type:* str

---

##### `listing_visibility`<sup>Required</sup> <a name="listing_visibility" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.listingVisibility"></a>

```python
listing_visibility: str
```

- *Type:* str

---

##### `max_lease_ttl`<sup>Required</sup> <a name="max_lease_ttl" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```python
max_lease_ttl: str
```

- *Type:* str

---

##### `passthrough_request_headers`<sup>Required</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```python
passthrough_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GithubAuthBackendTune]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>]

---



