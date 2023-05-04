# `vault_azure_auth_backend_role`

Refer to the Terraform Registory for docs: [`vault_azure_auth_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role).

# `azureAuthBackendRole` Submodule <a name="`azureAuthBackendRole` Submodule" id="@cdktf/provider-vault.azureAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureAuthBackendRole <a name="AzureAuthBackendRole" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role vault_azure_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import azure_auth_backend_role

azureAuthBackendRole.AzureAuthBackendRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role: str,
  backend: str = None,
  bound_group_ids: typing.List[str] = None,
  bound_locations: typing.List[str] = None,
  bound_resource_groups: typing.List[str] = None,
  bound_scale_sets: typing.List[str] = None,
  bound_service_principal_ids: typing.List[str] = None,
  bound_subscription_ids: typing.List[str] = None,
  id: str = None,
  namespace: str = None,
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
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.role">role</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.boundGroupIds">bound_group_ids</a></code> | <code>typing.List[str]</code> | The list of group ids that login is restricted to. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.boundLocations">bound_locations</a></code> | <code>typing.List[str]</code> | The list of locations that login is restricted to. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.boundResourceGroups">bound_resource_groups</a></code> | <code>typing.List[str]</code> | The list of resource groups that login is restricted to. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.boundScaleSets">bound_scale_sets</a></code> | <code>typing.List[str]</code> | The list of scale set names that the login is restricted to. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.boundServicePrincipalIds">bound_service_principal_ids</a></code> | <code>typing.List[str]</code> | The list of Service Principal IDs that login is restricted to. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.boundSubscriptionIds">bound_subscription_ids</a></code> | <code>typing.List[str]</code> | The list of subscription IDs that login is restricted to. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#id AzureAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.role"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#role AzureAuthBackendRole#role}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.backend"></a>

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#backend AzureAuthBackendRole#backend}

---

##### `bound_group_ids`<sup>Optional</sup> <a name="bound_group_ids" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.boundGroupIds"></a>

- *Type:* typing.List[str]

The list of group ids that login is restricted to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#bound_group_ids AzureAuthBackendRole#bound_group_ids}

---

##### `bound_locations`<sup>Optional</sup> <a name="bound_locations" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.boundLocations"></a>

- *Type:* typing.List[str]

The list of locations that login is restricted to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#bound_locations AzureAuthBackendRole#bound_locations}

---

##### `bound_resource_groups`<sup>Optional</sup> <a name="bound_resource_groups" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.boundResourceGroups"></a>

- *Type:* typing.List[str]

The list of resource groups that login is restricted to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#bound_resource_groups AzureAuthBackendRole#bound_resource_groups}

---

##### `bound_scale_sets`<sup>Optional</sup> <a name="bound_scale_sets" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.boundScaleSets"></a>

- *Type:* typing.List[str]

The list of scale set names that the login is restricted to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#bound_scale_sets AzureAuthBackendRole#bound_scale_sets}

---

##### `bound_service_principal_ids`<sup>Optional</sup> <a name="bound_service_principal_ids" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.boundServicePrincipalIds"></a>

- *Type:* typing.List[str]

The list of Service Principal IDs that login is restricted to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#bound_service_principal_ids AzureAuthBackendRole#bound_service_principal_ids}

---

##### `bound_subscription_ids`<sup>Optional</sup> <a name="bound_subscription_ids" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.boundSubscriptionIds"></a>

- *Type:* typing.List[str]

The list of subscription IDs that login is restricted to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#bound_subscription_ids AzureAuthBackendRole#bound_subscription_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#id AzureAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#namespace AzureAuthBackendRole#namespace}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_bound_cidrs AzureAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_explicit_max_ttl AzureAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_max_ttl AzureAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_no_default_policy AzureAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_num_uses AzureAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_period AzureAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_policies AzureAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_ttl AzureAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_type AzureAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetBoundGroupIds">reset_bound_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetBoundLocations">reset_bound_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetBoundResourceGroups">reset_bound_resource_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetBoundScaleSets">reset_bound_scale_sets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetBoundServicePrincipalIds">reset_bound_service_principal_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetBoundSubscriptionIds">reset_bound_subscription_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenBoundCidrs">reset_token_bound_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenExplicitMaxTtl">reset_token_explicit_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenMaxTtl">reset_token_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenNoDefaultPolicy">reset_token_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenNumUses">reset_token_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenPeriod">reset_token_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenPolicies">reset_token_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenTtl">reset_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenType">reset_token_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_bound_group_ids` <a name="reset_bound_group_ids" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetBoundGroupIds"></a>

```python
def reset_bound_group_ids() -> None
```

##### `reset_bound_locations` <a name="reset_bound_locations" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetBoundLocations"></a>

```python
def reset_bound_locations() -> None
```

##### `reset_bound_resource_groups` <a name="reset_bound_resource_groups" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetBoundResourceGroups"></a>

```python
def reset_bound_resource_groups() -> None
```

##### `reset_bound_scale_sets` <a name="reset_bound_scale_sets" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetBoundScaleSets"></a>

```python
def reset_bound_scale_sets() -> None
```

##### `reset_bound_service_principal_ids` <a name="reset_bound_service_principal_ids" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetBoundServicePrincipalIds"></a>

```python
def reset_bound_service_principal_ids() -> None
```

##### `reset_bound_subscription_ids` <a name="reset_bound_subscription_ids" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetBoundSubscriptionIds"></a>

```python
def reset_bound_subscription_ids() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_token_bound_cidrs` <a name="reset_token_bound_cidrs" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenBoundCidrs"></a>

```python
def reset_token_bound_cidrs() -> None
```

##### `reset_token_explicit_max_ttl` <a name="reset_token_explicit_max_ttl" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```python
def reset_token_explicit_max_ttl() -> None
```

##### `reset_token_max_ttl` <a name="reset_token_max_ttl" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenMaxTtl"></a>

```python
def reset_token_max_ttl() -> None
```

##### `reset_token_no_default_policy` <a name="reset_token_no_default_policy" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```python
def reset_token_no_default_policy() -> None
```

##### `reset_token_num_uses` <a name="reset_token_num_uses" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenNumUses"></a>

```python
def reset_token_num_uses() -> None
```

##### `reset_token_period` <a name="reset_token_period" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenPeriod"></a>

```python
def reset_token_period() -> None
```

##### `reset_token_policies` <a name="reset_token_policies" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenPolicies"></a>

```python
def reset_token_policies() -> None
```

##### `reset_token_ttl` <a name="reset_token_ttl" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenTtl"></a>

```python
def reset_token_ttl() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.resetTokenType"></a>

```python
def reset_token_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import azure_auth_backend_role

azureAuthBackendRole.AzureAuthBackendRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import azure_auth_backend_role

azureAuthBackendRole.AzureAuthBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import azure_auth_backend_role

azureAuthBackendRole.AzureAuthBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundGroupIdsInput">bound_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundLocationsInput">bound_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundResourceGroupsInput">bound_resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundScaleSetsInput">bound_scale_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundServicePrincipalIdsInput">bound_service_principal_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundSubscriptionIdsInput">bound_subscription_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenBoundCidrsInput">token_bound_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenExplicitMaxTtlInput">token_explicit_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenMaxTtlInput">token_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenNoDefaultPolicyInput">token_no_default_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenNumUsesInput">token_num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenPeriodInput">token_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenPoliciesInput">token_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenTtlInput">token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundGroupIds">bound_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundLocations">bound_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundResourceGroups">bound_resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundScaleSets">bound_scale_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundServicePrincipalIds">bound_service_principal_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundSubscriptionIds">bound_subscription_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `bound_group_ids_input`<sup>Optional</sup> <a name="bound_group_ids_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundGroupIdsInput"></a>

```python
bound_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_locations_input`<sup>Optional</sup> <a name="bound_locations_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundLocationsInput"></a>

```python
bound_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_resource_groups_input`<sup>Optional</sup> <a name="bound_resource_groups_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundResourceGroupsInput"></a>

```python
bound_resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_scale_sets_input`<sup>Optional</sup> <a name="bound_scale_sets_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundScaleSetsInput"></a>

```python
bound_scale_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_service_principal_ids_input`<sup>Optional</sup> <a name="bound_service_principal_ids_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundServicePrincipalIdsInput"></a>

```python
bound_service_principal_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_subscription_ids_input`<sup>Optional</sup> <a name="bound_subscription_ids_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundSubscriptionIdsInput"></a>

```python
bound_subscription_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `token_bound_cidrs_input`<sup>Optional</sup> <a name="token_bound_cidrs_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenBoundCidrsInput"></a>

```python
token_bound_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl_input`<sup>Optional</sup> <a name="token_explicit_max_ttl_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```python
token_explicit_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl_input`<sup>Optional</sup> <a name="token_max_ttl_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenMaxTtlInput"></a>

```python
token_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy_input`<sup>Optional</sup> <a name="token_no_default_policy_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```python
token_no_default_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_num_uses_input`<sup>Optional</sup> <a name="token_num_uses_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenNumUsesInput"></a>

```python
token_num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period_input`<sup>Optional</sup> <a name="token_period_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenPeriodInput"></a>

```python
token_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies_input`<sup>Optional</sup> <a name="token_policies_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenPoliciesInput"></a>

```python
token_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl_input`<sup>Optional</sup> <a name="token_ttl_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenTtlInput"></a>

```python
token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `bound_group_ids`<sup>Required</sup> <a name="bound_group_ids" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundGroupIds"></a>

```python
bound_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_locations`<sup>Required</sup> <a name="bound_locations" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundLocations"></a>

```python
bound_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_resource_groups`<sup>Required</sup> <a name="bound_resource_groups" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundResourceGroups"></a>

```python
bound_resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_scale_sets`<sup>Required</sup> <a name="bound_scale_sets" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundScaleSets"></a>

```python
bound_scale_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_service_principal_ids`<sup>Required</sup> <a name="bound_service_principal_ids" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundServicePrincipalIds"></a>

```python
bound_service_principal_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_subscription_ids`<sup>Required</sup> <a name="bound_subscription_ids" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.boundSubscriptionIds"></a>

```python
bound_subscription_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `token_bound_cidrs`<sup>Required</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl`<sup>Required</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl`<sup>Required</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy`<sup>Required</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_num_uses`<sup>Required</sup> <a name="token_num_uses" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period`<sup>Required</sup> <a name="token_period" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies`<sup>Required</sup> <a name="token_policies" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AzureAuthBackendRoleConfig <a name="AzureAuthBackendRoleConfig" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import azure_auth_backend_role

azureAuthBackendRole.AzureAuthBackendRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role: str,
  backend: str = None,
  bound_group_ids: typing.List[str] = None,
  bound_locations: typing.List[str] = None,
  bound_resource_groups: typing.List[str] = None,
  bound_scale_sets: typing.List[str] = None,
  bound_service_principal_ids: typing.List[str] = None,
  bound_subscription_ids: typing.List[str] = None,
  id: str = None,
  namespace: str = None,
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
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.role">role</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.boundGroupIds">bound_group_ids</a></code> | <code>typing.List[str]</code> | The list of group ids that login is restricted to. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.boundLocations">bound_locations</a></code> | <code>typing.List[str]</code> | The list of locations that login is restricted to. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.boundResourceGroups">bound_resource_groups</a></code> | <code>typing.List[str]</code> | The list of resource groups that login is restricted to. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.boundScaleSets">bound_scale_sets</a></code> | <code>typing.List[str]</code> | The list of scale set names that the login is restricted to. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.boundServicePrincipalIds">bound_service_principal_ids</a></code> | <code>typing.List[str]</code> | The list of Service Principal IDs that login is restricted to. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.boundSubscriptionIds">bound_subscription_ids</a></code> | <code>typing.List[str]</code> | The list of subscription IDs that login is restricted to. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#id AzureAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#role AzureAuthBackendRole#role}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#backend AzureAuthBackendRole#backend}

---

##### `bound_group_ids`<sup>Optional</sup> <a name="bound_group_ids" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.boundGroupIds"></a>

```python
bound_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of group ids that login is restricted to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#bound_group_ids AzureAuthBackendRole#bound_group_ids}

---

##### `bound_locations`<sup>Optional</sup> <a name="bound_locations" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.boundLocations"></a>

```python
bound_locations: typing.List[str]
```

- *Type:* typing.List[str]

The list of locations that login is restricted to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#bound_locations AzureAuthBackendRole#bound_locations}

---

##### `bound_resource_groups`<sup>Optional</sup> <a name="bound_resource_groups" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.boundResourceGroups"></a>

```python
bound_resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

The list of resource groups that login is restricted to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#bound_resource_groups AzureAuthBackendRole#bound_resource_groups}

---

##### `bound_scale_sets`<sup>Optional</sup> <a name="bound_scale_sets" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.boundScaleSets"></a>

```python
bound_scale_sets: typing.List[str]
```

- *Type:* typing.List[str]

The list of scale set names that the login is restricted to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#bound_scale_sets AzureAuthBackendRole#bound_scale_sets}

---

##### `bound_service_principal_ids`<sup>Optional</sup> <a name="bound_service_principal_ids" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.boundServicePrincipalIds"></a>

```python
bound_service_principal_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of Service Principal IDs that login is restricted to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#bound_service_principal_ids AzureAuthBackendRole#bound_service_principal_ids}

---

##### `bound_subscription_ids`<sup>Optional</sup> <a name="bound_subscription_ids" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.boundSubscriptionIds"></a>

```python
bound_subscription_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of subscription IDs that login is restricted to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#bound_subscription_ids AzureAuthBackendRole#bound_subscription_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#id AzureAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#namespace AzureAuthBackendRole#namespace}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_bound_cidrs AzureAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_explicit_max_ttl AzureAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_max_ttl AzureAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_no_default_policy AzureAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_num_uses AzureAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_period AzureAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_policies AzureAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_ttl AzureAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.azureAuthBackendRole.AzureAuthBackendRoleConfig.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/azure_auth_backend_role#token_type AzureAuthBackendRole#token_type}

---



