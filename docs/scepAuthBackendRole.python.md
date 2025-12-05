# `scepAuthBackendRole` Submodule <a name="`scepAuthBackendRole` Submodule" id="@cdktf/provider-vault.scepAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScepAuthBackendRole <a name="ScepAuthBackendRole" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role vault_scep_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import scep_auth_backend_role

scepAuthBackendRole.ScepAuthBackendRole(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_type: str,
  name: str,
  alias_metadata: typing.Mapping[str] = None,
  backend: str = None,
  challenge: str = None,
  display_name: str = None,
  id: str = None,
  namespace: str = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: bool | IResolvable = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#auth_type ScepAuthBackendRole#auth_type}. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#name ScepAuthBackendRole#name}. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.aliasMetadata">alias_metadata</a></code> | <code>typing.Mapping[str]</code> | The metadata to be tied to generated entity alias. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#backend ScepAuthBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.challenge">challenge</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#challenge ScepAuthBackendRole#challenge}. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#display_name ScepAuthBackendRole#display_name}. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#id ScepAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.authType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#auth_type ScepAuthBackendRole#auth_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#name ScepAuthBackendRole#name}.

---

##### `alias_metadata`<sup>Optional</sup> <a name="alias_metadata" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.aliasMetadata"></a>

- *Type:* typing.Mapping[str]

The metadata to be tied to generated entity alias.

This should be a list or map containing the metadata in key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#alias_metadata ScepAuthBackendRole#alias_metadata}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.backend"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#backend ScepAuthBackendRole#backend}.

---

##### `challenge`<sup>Optional</sup> <a name="challenge" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.challenge"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#challenge ScepAuthBackendRole#challenge}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#display_name ScepAuthBackendRole#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#id ScepAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#namespace ScepAuthBackendRole#namespace}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_bound_cidrs ScepAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_explicit_max_ttl ScepAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_max_ttl ScepAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* bool | cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_no_default_policy ScepAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_num_uses ScepAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_period ScepAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_policies ScepAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_ttl ScepAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_type ScepAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetAliasMetadata">reset_alias_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetChallenge">reset_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenBoundCidrs">reset_token_bound_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenExplicitMaxTtl">reset_token_explicit_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenMaxTtl">reset_token_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenNoDefaultPolicy">reset_token_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenNumUses">reset_token_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenPeriod">reset_token_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenPolicies">reset_token_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenTtl">reset_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenType">reset_token_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_alias_metadata` <a name="reset_alias_metadata" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetAliasMetadata"></a>

```python
def reset_alias_metadata() -> None
```

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_challenge` <a name="reset_challenge" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetChallenge"></a>

```python
def reset_challenge() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_token_bound_cidrs` <a name="reset_token_bound_cidrs" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenBoundCidrs"></a>

```python
def reset_token_bound_cidrs() -> None
```

##### `reset_token_explicit_max_ttl` <a name="reset_token_explicit_max_ttl" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```python
def reset_token_explicit_max_ttl() -> None
```

##### `reset_token_max_ttl` <a name="reset_token_max_ttl" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenMaxTtl"></a>

```python
def reset_token_max_ttl() -> None
```

##### `reset_token_no_default_policy` <a name="reset_token_no_default_policy" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```python
def reset_token_no_default_policy() -> None
```

##### `reset_token_num_uses` <a name="reset_token_num_uses" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenNumUses"></a>

```python
def reset_token_num_uses() -> None
```

##### `reset_token_period` <a name="reset_token_period" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenPeriod"></a>

```python
def reset_token_period() -> None
```

##### `reset_token_policies` <a name="reset_token_policies" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenPolicies"></a>

```python
def reset_token_policies() -> None
```

##### `reset_token_ttl` <a name="reset_token_ttl" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenTtl"></a>

```python
def reset_token_ttl() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.resetTokenType"></a>

```python
def reset_token_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ScepAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import scep_auth_backend_role

scepAuthBackendRole.ScepAuthBackendRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import scep_auth_backend_role

scepAuthBackendRole.ScepAuthBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import scep_auth_backend_role

scepAuthBackendRole.ScepAuthBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import scep_auth_backend_role

scepAuthBackendRole.ScepAuthBackendRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ScepAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ScepAuthBackendRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ScepAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ScepAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.aliasMetadataInput">alias_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.challengeInput">challenge_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenBoundCidrsInput">token_bound_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenExplicitMaxTtlInput">token_explicit_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenMaxTtlInput">token_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenNoDefaultPolicyInput">token_no_default_policy_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenNumUsesInput">token_num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenPeriodInput">token_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenPoliciesInput">token_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenTtlInput">token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.aliasMetadata">alias_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.challenge">challenge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `alias_metadata_input`<sup>Optional</sup> <a name="alias_metadata_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.aliasMetadataInput"></a>

```python
alias_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `challenge_input`<sup>Optional</sup> <a name="challenge_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.challengeInput"></a>

```python
challenge_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `token_bound_cidrs_input`<sup>Optional</sup> <a name="token_bound_cidrs_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenBoundCidrsInput"></a>

```python
token_bound_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl_input`<sup>Optional</sup> <a name="token_explicit_max_ttl_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```python
token_explicit_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl_input`<sup>Optional</sup> <a name="token_max_ttl_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenMaxTtlInput"></a>

```python
token_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy_input`<sup>Optional</sup> <a name="token_no_default_policy_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```python
token_no_default_policy_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `token_num_uses_input`<sup>Optional</sup> <a name="token_num_uses_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenNumUsesInput"></a>

```python
token_num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period_input`<sup>Optional</sup> <a name="token_period_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenPeriodInput"></a>

```python
token_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies_input`<sup>Optional</sup> <a name="token_policies_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenPoliciesInput"></a>

```python
token_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl_input`<sup>Optional</sup> <a name="token_ttl_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenTtlInput"></a>

```python
token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `alias_metadata`<sup>Required</sup> <a name="alias_metadata" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.aliasMetadata"></a>

```python
alias_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `challenge`<sup>Required</sup> <a name="challenge" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.challenge"></a>

```python
challenge: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `token_bound_cidrs`<sup>Required</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl`<sup>Required</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl`<sup>Required</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy`<sup>Required</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `token_num_uses`<sup>Required</sup> <a name="token_num_uses" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period`<sup>Required</sup> <a name="token_period" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies`<sup>Required</sup> <a name="token_policies" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ScepAuthBackendRoleConfig <a name="ScepAuthBackendRoleConfig" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import scep_auth_backend_role

scepAuthBackendRole.ScepAuthBackendRoleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_type: str,
  name: str,
  alias_metadata: typing.Mapping[str] = None,
  backend: str = None,
  challenge: str = None,
  display_name: str = None,
  id: str = None,
  namespace: str = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: bool | IResolvable = None,
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
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#auth_type ScepAuthBackendRole#auth_type}. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#name ScepAuthBackendRole#name}. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.aliasMetadata">alias_metadata</a></code> | <code>typing.Mapping[str]</code> | The metadata to be tied to generated entity alias. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.backend">backend</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#backend ScepAuthBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.challenge">challenge</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#challenge ScepAuthBackendRole#challenge}. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#display_name ScepAuthBackendRole#display_name}. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#id ScepAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#auth_type ScepAuthBackendRole#auth_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#name ScepAuthBackendRole#name}.

---

##### `alias_metadata`<sup>Optional</sup> <a name="alias_metadata" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.aliasMetadata"></a>

```python
alias_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The metadata to be tied to generated entity alias.

This should be a list or map containing the metadata in key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#alias_metadata ScepAuthBackendRole#alias_metadata}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#backend ScepAuthBackendRole#backend}.

---

##### `challenge`<sup>Optional</sup> <a name="challenge" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.challenge"></a>

```python
challenge: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#challenge ScepAuthBackendRole#challenge}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#display_name ScepAuthBackendRole#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#id ScepAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#namespace ScepAuthBackendRole#namespace}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_bound_cidrs ScepAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_explicit_max_ttl ScepAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_max_ttl ScepAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_no_default_policy ScepAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_num_uses ScepAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_period ScepAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_policies ScepAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_ttl ScepAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.scepAuthBackendRole.ScepAuthBackendRoleConfig.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/scep_auth_backend_role#token_type ScepAuthBackendRole#token_type}

---



