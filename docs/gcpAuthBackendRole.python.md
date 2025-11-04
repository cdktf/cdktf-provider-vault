# `gcpAuthBackendRole` Submodule <a name="`gcpAuthBackendRole` Submodule" id="@cdktf/provider-vault.gcpAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpAuthBackendRole <a name="GcpAuthBackendRole" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role vault_gcp_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_auth_backend_role

gcpAuthBackendRole.GcpAuthBackendRole(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role: str,
  type: str,
  add_group_aliases: bool | IResolvable = None,
  allow_gce_inference: bool | IResolvable = None,
  backend: str = None,
  bound_instance_groups: typing.List[str] = None,
  bound_labels: typing.List[str] = None,
  bound_projects: typing.List[str] = None,
  bound_regions: typing.List[str] = None,
  bound_service_accounts: typing.List[str] = None,
  bound_zones: typing.List[str] = None,
  id: str = None,
  max_jwt_exp: str = None,
  namespace: str = None,
  role_id: str = None,
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
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#role GcpAuthBackendRole#role}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#type GcpAuthBackendRole#type}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.addGroupAliases">add_group_aliases</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#add_group_aliases GcpAuthBackendRole#add_group_aliases}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.allowGceInference">allow_gce_inference</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#allow_gce_inference GcpAuthBackendRole#allow_gce_inference}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#backend GcpAuthBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundInstanceGroups">bound_instance_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_instance_groups GcpAuthBackendRole#bound_instance_groups}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundLabels">bound_labels</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_labels GcpAuthBackendRole#bound_labels}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundProjects">bound_projects</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_projects GcpAuthBackendRole#bound_projects}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundRegions">bound_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_regions GcpAuthBackendRole#bound_regions}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundServiceAccounts">bound_service_accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_service_accounts GcpAuthBackendRole#bound_service_accounts}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundZones">bound_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_zones GcpAuthBackendRole#bound_zones}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#id GcpAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.maxJwtExp">max_jwt_exp</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#max_jwt_exp GcpAuthBackendRole#max_jwt_exp}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.roleId">role_id</a></code> | <code>str</code> | The role_id is the stable, unique identifier for the role generated by vault. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#role GcpAuthBackendRole#role}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#type GcpAuthBackendRole#type}.

---

##### `add_group_aliases`<sup>Optional</sup> <a name="add_group_aliases" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.addGroupAliases"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#add_group_aliases GcpAuthBackendRole#add_group_aliases}.

---

##### `allow_gce_inference`<sup>Optional</sup> <a name="allow_gce_inference" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.allowGceInference"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#allow_gce_inference GcpAuthBackendRole#allow_gce_inference}.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.backend"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#backend GcpAuthBackendRole#backend}.

---

##### `bound_instance_groups`<sup>Optional</sup> <a name="bound_instance_groups" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundInstanceGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_instance_groups GcpAuthBackendRole#bound_instance_groups}.

---

##### `bound_labels`<sup>Optional</sup> <a name="bound_labels" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundLabels"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_labels GcpAuthBackendRole#bound_labels}.

---

##### `bound_projects`<sup>Optional</sup> <a name="bound_projects" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundProjects"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_projects GcpAuthBackendRole#bound_projects}.

---

##### `bound_regions`<sup>Optional</sup> <a name="bound_regions" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundRegions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_regions GcpAuthBackendRole#bound_regions}.

---

##### `bound_service_accounts`<sup>Optional</sup> <a name="bound_service_accounts" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundServiceAccounts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_service_accounts GcpAuthBackendRole#bound_service_accounts}.

---

##### `bound_zones`<sup>Optional</sup> <a name="bound_zones" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_zones GcpAuthBackendRole#bound_zones}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#id GcpAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_jwt_exp`<sup>Optional</sup> <a name="max_jwt_exp" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.maxJwtExp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#max_jwt_exp GcpAuthBackendRole#max_jwt_exp}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#namespace GcpAuthBackendRole#namespace}

---

##### `role_id`<sup>Optional</sup> <a name="role_id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.roleId"></a>

- *Type:* str

The role_id is the stable, unique identifier for the role generated by vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#role_id GcpAuthBackendRole#role_id}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_bound_cidrs GcpAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_explicit_max_ttl GcpAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_max_ttl GcpAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* bool | cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_no_default_policy GcpAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_num_uses GcpAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_period GcpAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_policies GcpAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_ttl GcpAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_type GcpAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAddGroupAliases">reset_add_group_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAllowGceInference">reset_allow_gce_inference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundInstanceGroups">reset_bound_instance_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundLabels">reset_bound_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundProjects">reset_bound_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundRegions">reset_bound_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundServiceAccounts">reset_bound_service_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundZones">reset_bound_zones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetMaxJwtExp">reset_max_jwt_exp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetRoleId">reset_role_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenBoundCidrs">reset_token_bound_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenExplicitMaxTtl">reset_token_explicit_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenMaxTtl">reset_token_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNoDefaultPolicy">reset_token_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNumUses">reset_token_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPeriod">reset_token_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPolicies">reset_token_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenTtl">reset_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenType">reset_token_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_add_group_aliases` <a name="reset_add_group_aliases" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAddGroupAliases"></a>

```python
def reset_add_group_aliases() -> None
```

##### `reset_allow_gce_inference` <a name="reset_allow_gce_inference" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAllowGceInference"></a>

```python
def reset_allow_gce_inference() -> None
```

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_bound_instance_groups` <a name="reset_bound_instance_groups" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundInstanceGroups"></a>

```python
def reset_bound_instance_groups() -> None
```

##### `reset_bound_labels` <a name="reset_bound_labels" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundLabels"></a>

```python
def reset_bound_labels() -> None
```

##### `reset_bound_projects` <a name="reset_bound_projects" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundProjects"></a>

```python
def reset_bound_projects() -> None
```

##### `reset_bound_regions` <a name="reset_bound_regions" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundRegions"></a>

```python
def reset_bound_regions() -> None
```

##### `reset_bound_service_accounts` <a name="reset_bound_service_accounts" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundServiceAccounts"></a>

```python
def reset_bound_service_accounts() -> None
```

##### `reset_bound_zones` <a name="reset_bound_zones" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundZones"></a>

```python
def reset_bound_zones() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_jwt_exp` <a name="reset_max_jwt_exp" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetMaxJwtExp"></a>

```python
def reset_max_jwt_exp() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_role_id` <a name="reset_role_id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetRoleId"></a>

```python
def reset_role_id() -> None
```

##### `reset_token_bound_cidrs` <a name="reset_token_bound_cidrs" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenBoundCidrs"></a>

```python
def reset_token_bound_cidrs() -> None
```

##### `reset_token_explicit_max_ttl` <a name="reset_token_explicit_max_ttl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```python
def reset_token_explicit_max_ttl() -> None
```

##### `reset_token_max_ttl` <a name="reset_token_max_ttl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenMaxTtl"></a>

```python
def reset_token_max_ttl() -> None
```

##### `reset_token_no_default_policy` <a name="reset_token_no_default_policy" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```python
def reset_token_no_default_policy() -> None
```

##### `reset_token_num_uses` <a name="reset_token_num_uses" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNumUses"></a>

```python
def reset_token_num_uses() -> None
```

##### `reset_token_period` <a name="reset_token_period" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPeriod"></a>

```python
def reset_token_period() -> None
```

##### `reset_token_policies` <a name="reset_token_policies" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPolicies"></a>

```python
def reset_token_policies() -> None
```

##### `reset_token_ttl` <a name="reset_token_ttl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenTtl"></a>

```python
def reset_token_ttl() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenType"></a>

```python
def reset_token_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GcpAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import gcp_auth_backend_role

gcpAuthBackendRole.GcpAuthBackendRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import gcp_auth_backend_role

gcpAuthBackendRole.GcpAuthBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import gcp_auth_backend_role

gcpAuthBackendRole.GcpAuthBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import gcp_auth_backend_role

gcpAuthBackendRole.GcpAuthBackendRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GcpAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GcpAuthBackendRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GcpAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GcpAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliasesInput">add_group_aliases_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInferenceInput">allow_gce_inference_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroupsInput">bound_instance_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabelsInput">bound_labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjectsInput">bound_projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegionsInput">bound_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccountsInput">bound_service_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZonesInput">bound_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExpInput">max_jwt_exp_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrsInput">token_bound_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtlInput">token_explicit_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtlInput">token_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicyInput">token_no_default_policy_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUsesInput">token_num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriodInput">token_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPoliciesInput">token_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtlInput">token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliases">add_group_aliases</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInference">allow_gce_inference</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroups">bound_instance_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabels">bound_labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjects">bound_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegions">bound_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccounts">bound_service_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZones">bound_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExp">max_jwt_exp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `add_group_aliases_input`<sup>Optional</sup> <a name="add_group_aliases_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliasesInput"></a>

```python
add_group_aliases_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `allow_gce_inference_input`<sup>Optional</sup> <a name="allow_gce_inference_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInferenceInput"></a>

```python
allow_gce_inference_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `bound_instance_groups_input`<sup>Optional</sup> <a name="bound_instance_groups_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroupsInput"></a>

```python
bound_instance_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_labels_input`<sup>Optional</sup> <a name="bound_labels_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabelsInput"></a>

```python
bound_labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_projects_input`<sup>Optional</sup> <a name="bound_projects_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjectsInput"></a>

```python
bound_projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_regions_input`<sup>Optional</sup> <a name="bound_regions_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegionsInput"></a>

```python
bound_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_service_accounts_input`<sup>Optional</sup> <a name="bound_service_accounts_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccountsInput"></a>

```python
bound_service_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_zones_input`<sup>Optional</sup> <a name="bound_zones_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZonesInput"></a>

```python
bound_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_jwt_exp_input`<sup>Optional</sup> <a name="max_jwt_exp_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExpInput"></a>

```python
max_jwt_exp_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `token_bound_cidrs_input`<sup>Optional</sup> <a name="token_bound_cidrs_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrsInput"></a>

```python
token_bound_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl_input`<sup>Optional</sup> <a name="token_explicit_max_ttl_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```python
token_explicit_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl_input`<sup>Optional</sup> <a name="token_max_ttl_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtlInput"></a>

```python
token_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy_input`<sup>Optional</sup> <a name="token_no_default_policy_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```python
token_no_default_policy_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `token_num_uses_input`<sup>Optional</sup> <a name="token_num_uses_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUsesInput"></a>

```python
token_num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period_input`<sup>Optional</sup> <a name="token_period_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriodInput"></a>

```python
token_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies_input`<sup>Optional</sup> <a name="token_policies_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPoliciesInput"></a>

```python
token_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl_input`<sup>Optional</sup> <a name="token_ttl_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtlInput"></a>

```python
token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `add_group_aliases`<sup>Required</sup> <a name="add_group_aliases" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliases"></a>

```python
add_group_aliases: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `allow_gce_inference`<sup>Required</sup> <a name="allow_gce_inference" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInference"></a>

```python
allow_gce_inference: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `bound_instance_groups`<sup>Required</sup> <a name="bound_instance_groups" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroups"></a>

```python
bound_instance_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_labels`<sup>Required</sup> <a name="bound_labels" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabels"></a>

```python
bound_labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_projects`<sup>Required</sup> <a name="bound_projects" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjects"></a>

```python
bound_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_regions`<sup>Required</sup> <a name="bound_regions" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegions"></a>

```python
bound_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_service_accounts`<sup>Required</sup> <a name="bound_service_accounts" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccounts"></a>

```python
bound_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_zones`<sup>Required</sup> <a name="bound_zones" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZones"></a>

```python
bound_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_jwt_exp`<sup>Required</sup> <a name="max_jwt_exp" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExp"></a>

```python
max_jwt_exp: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `token_bound_cidrs`<sup>Required</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl`<sup>Required</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl`<sup>Required</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy`<sup>Required</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `token_num_uses`<sup>Required</sup> <a name="token_num_uses" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period`<sup>Required</sup> <a name="token_period" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies`<sup>Required</sup> <a name="token_policies" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GcpAuthBackendRoleConfig <a name="GcpAuthBackendRoleConfig" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_auth_backend_role

gcpAuthBackendRole.GcpAuthBackendRoleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role: str,
  type: str,
  add_group_aliases: bool | IResolvable = None,
  allow_gce_inference: bool | IResolvable = None,
  backend: str = None,
  bound_instance_groups: typing.List[str] = None,
  bound_labels: typing.List[str] = None,
  bound_projects: typing.List[str] = None,
  bound_regions: typing.List[str] = None,
  bound_service_accounts: typing.List[str] = None,
  bound_zones: typing.List[str] = None,
  id: str = None,
  max_jwt_exp: str = None,
  namespace: str = None,
  role_id: str = None,
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
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#role GcpAuthBackendRole#role}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#type GcpAuthBackendRole#type}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.addGroupAliases">add_group_aliases</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#add_group_aliases GcpAuthBackendRole#add_group_aliases}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.allowGceInference">allow_gce_inference</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#allow_gce_inference GcpAuthBackendRole#allow_gce_inference}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.backend">backend</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#backend GcpAuthBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundInstanceGroups">bound_instance_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_instance_groups GcpAuthBackendRole#bound_instance_groups}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundLabels">bound_labels</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_labels GcpAuthBackendRole#bound_labels}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundProjects">bound_projects</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_projects GcpAuthBackendRole#bound_projects}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundRegions">bound_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_regions GcpAuthBackendRole#bound_regions}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundServiceAccounts">bound_service_accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_service_accounts GcpAuthBackendRole#bound_service_accounts}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundZones">bound_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_zones GcpAuthBackendRole#bound_zones}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#id GcpAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.maxJwtExp">max_jwt_exp</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#max_jwt_exp GcpAuthBackendRole#max_jwt_exp}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.roleId">role_id</a></code> | <code>str</code> | The role_id is the stable, unique identifier for the role generated by vault. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#role GcpAuthBackendRole#role}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#type GcpAuthBackendRole#type}.

---

##### `add_group_aliases`<sup>Optional</sup> <a name="add_group_aliases" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.addGroupAliases"></a>

```python
add_group_aliases: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#add_group_aliases GcpAuthBackendRole#add_group_aliases}.

---

##### `allow_gce_inference`<sup>Optional</sup> <a name="allow_gce_inference" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.allowGceInference"></a>

```python
allow_gce_inference: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#allow_gce_inference GcpAuthBackendRole#allow_gce_inference}.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#backend GcpAuthBackendRole#backend}.

---

##### `bound_instance_groups`<sup>Optional</sup> <a name="bound_instance_groups" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundInstanceGroups"></a>

```python
bound_instance_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_instance_groups GcpAuthBackendRole#bound_instance_groups}.

---

##### `bound_labels`<sup>Optional</sup> <a name="bound_labels" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundLabels"></a>

```python
bound_labels: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_labels GcpAuthBackendRole#bound_labels}.

---

##### `bound_projects`<sup>Optional</sup> <a name="bound_projects" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundProjects"></a>

```python
bound_projects: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_projects GcpAuthBackendRole#bound_projects}.

---

##### `bound_regions`<sup>Optional</sup> <a name="bound_regions" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundRegions"></a>

```python
bound_regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_regions GcpAuthBackendRole#bound_regions}.

---

##### `bound_service_accounts`<sup>Optional</sup> <a name="bound_service_accounts" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundServiceAccounts"></a>

```python
bound_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_service_accounts GcpAuthBackendRole#bound_service_accounts}.

---

##### `bound_zones`<sup>Optional</sup> <a name="bound_zones" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundZones"></a>

```python
bound_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#bound_zones GcpAuthBackendRole#bound_zones}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#id GcpAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_jwt_exp`<sup>Optional</sup> <a name="max_jwt_exp" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.maxJwtExp"></a>

```python
max_jwt_exp: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#max_jwt_exp GcpAuthBackendRole#max_jwt_exp}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#namespace GcpAuthBackendRole#namespace}

---

##### `role_id`<sup>Optional</sup> <a name="role_id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

The role_id is the stable, unique identifier for the role generated by vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#role_id GcpAuthBackendRole#role_id}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_bound_cidrs GcpAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_explicit_max_ttl GcpAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_max_ttl GcpAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_no_default_policy GcpAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_num_uses GcpAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_period GcpAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_policies GcpAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_ttl GcpAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/gcp_auth_backend_role#token_type GcpAuthBackendRole#token_type}

---



