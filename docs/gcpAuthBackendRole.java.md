# `vault_gcp_auth_backend_role`

Refer to the Terraform Registory for docs: [`vault_gcp_auth_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role).

# `gcpAuthBackendRole` Submodule <a name="`gcpAuthBackendRole` Submodule" id="@cdktf/provider-vault.gcpAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpAuthBackendRole <a name="GcpAuthBackendRole" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role vault_gcp_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend_role.GcpAuthBackendRole;

GcpAuthBackendRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .role(java.lang.String)
    .type(java.lang.String)
//  .addGroupAliases(java.lang.Boolean)
//  .addGroupAliases(IResolvable)
//  .allowGceInference(java.lang.Boolean)
//  .allowGceInference(IResolvable)
//  .backend(java.lang.String)
//  .boundInstanceGroups(java.util.List<java.lang.String>)
//  .boundLabels(java.util.List<java.lang.String>)
//  .boundProjects(java.util.List<java.lang.String>)
//  .boundRegions(java.util.List<java.lang.String>)
//  .boundServiceAccounts(java.util.List<java.lang.String>)
//  .boundZones(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .maxJwtExp(java.lang.String)
//  .namespace(java.lang.String)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean)
//  .tokenNoDefaultPolicy(IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#role GcpAuthBackendRole#role}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#type GcpAuthBackendRole#type}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.addGroupAliases">addGroupAliases</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#add_group_aliases GcpAuthBackendRole#add_group_aliases}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.allowGceInference">allowGceInference</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#allow_gce_inference GcpAuthBackendRole#allow_gce_inference}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#backend GcpAuthBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundInstanceGroups">boundInstanceGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_instance_groups GcpAuthBackendRole#bound_instance_groups}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundLabels">boundLabels</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_labels GcpAuthBackendRole#bound_labels}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundProjects">boundProjects</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_projects GcpAuthBackendRole#bound_projects}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundRegions">boundRegions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_regions GcpAuthBackendRole#bound_regions}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundServiceAccounts">boundServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_service_accounts GcpAuthBackendRole#bound_service_accounts}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundZones">boundZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_zones GcpAuthBackendRole#bound_zones}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#id GcpAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.maxJwtExp">maxJwtExp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#max_jwt_exp GcpAuthBackendRole#max_jwt_exp}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#role GcpAuthBackendRole#role}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#type GcpAuthBackendRole#type}.

---

##### `addGroupAliases`<sup>Optional</sup> <a name="addGroupAliases" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.addGroupAliases"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#add_group_aliases GcpAuthBackendRole#add_group_aliases}.

---

##### `allowGceInference`<sup>Optional</sup> <a name="allowGceInference" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.allowGceInference"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#allow_gce_inference GcpAuthBackendRole#allow_gce_inference}.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#backend GcpAuthBackendRole#backend}.

---

##### `boundInstanceGroups`<sup>Optional</sup> <a name="boundInstanceGroups" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundInstanceGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_instance_groups GcpAuthBackendRole#bound_instance_groups}.

---

##### `boundLabels`<sup>Optional</sup> <a name="boundLabels" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundLabels"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_labels GcpAuthBackendRole#bound_labels}.

---

##### `boundProjects`<sup>Optional</sup> <a name="boundProjects" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundProjects"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_projects GcpAuthBackendRole#bound_projects}.

---

##### `boundRegions`<sup>Optional</sup> <a name="boundRegions" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundRegions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_regions GcpAuthBackendRole#bound_regions}.

---

##### `boundServiceAccounts`<sup>Optional</sup> <a name="boundServiceAccounts" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundServiceAccounts"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_service_accounts GcpAuthBackendRole#bound_service_accounts}.

---

##### `boundZones`<sup>Optional</sup> <a name="boundZones" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.boundZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_zones GcpAuthBackendRole#bound_zones}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#id GcpAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxJwtExp`<sup>Optional</sup> <a name="maxJwtExp" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.maxJwtExp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#max_jwt_exp GcpAuthBackendRole#max_jwt_exp}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#namespace GcpAuthBackendRole#namespace}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_bound_cidrs GcpAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_explicit_max_ttl GcpAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_max_ttl GcpAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_no_default_policy GcpAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_num_uses GcpAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_period GcpAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_policies GcpAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_ttl GcpAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_type GcpAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAddGroupAliases">resetAddGroupAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAllowGceInference">resetAllowGceInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundInstanceGroups">resetBoundInstanceGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundLabels">resetBoundLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundProjects">resetBoundProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundRegions">resetBoundRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundServiceAccounts">resetBoundServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundZones">resetBoundZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetMaxJwtExp">resetMaxJwtExp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAddGroupAliases` <a name="resetAddGroupAliases" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAddGroupAliases"></a>

```java
public void resetAddGroupAliases()
```

##### `resetAllowGceInference` <a name="resetAllowGceInference" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAllowGceInference"></a>

```java
public void resetAllowGceInference()
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetBoundInstanceGroups` <a name="resetBoundInstanceGroups" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundInstanceGroups"></a>

```java
public void resetBoundInstanceGroups()
```

##### `resetBoundLabels` <a name="resetBoundLabels" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundLabels"></a>

```java
public void resetBoundLabels()
```

##### `resetBoundProjects` <a name="resetBoundProjects" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundProjects"></a>

```java
public void resetBoundProjects()
```

##### `resetBoundRegions` <a name="resetBoundRegions" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundRegions"></a>

```java
public void resetBoundRegions()
```

##### `resetBoundServiceAccounts` <a name="resetBoundServiceAccounts" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundServiceAccounts"></a>

```java
public void resetBoundServiceAccounts()
```

##### `resetBoundZones` <a name="resetBoundZones" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundZones"></a>

```java
public void resetBoundZones()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetMaxJwtExp` <a name="resetMaxJwtExp" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetMaxJwtExp"></a>

```java
public void resetMaxJwtExp()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenBoundCidrs"></a>

```java
public void resetTokenBoundCidrs()
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```java
public void resetTokenExplicitMaxTtl()
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenMaxTtl"></a>

```java
public void resetTokenMaxTtl()
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```java
public void resetTokenNoDefaultPolicy()
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNumUses"></a>

```java
public void resetTokenNumUses()
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPeriod"></a>

```java
public void resetTokenPeriod()
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPolicies"></a>

```java
public void resetTokenPolicies()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenType"></a>

```java
public void resetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend_role.GcpAuthBackendRole;

GcpAuthBackendRole.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend_role.GcpAuthBackendRole;

GcpAuthBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend_role.GcpAuthBackendRole;

GcpAuthBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliasesInput">addGroupAliasesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInferenceInput">allowGceInferenceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroupsInput">boundInstanceGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabelsInput">boundLabelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjectsInput">boundProjectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegionsInput">boundRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccountsInput">boundServiceAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZonesInput">boundZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExpInput">maxJwtExpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliases">addGroupAliases</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInference">allowGceInference</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroups">boundInstanceGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabels">boundLabels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjects">boundProjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegions">boundRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccounts">boundServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZones">boundZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExp">maxJwtExp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addGroupAliasesInput`<sup>Optional</sup> <a name="addGroupAliasesInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliasesInput"></a>

```java
public java.lang.Object getAddGroupAliasesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowGceInferenceInput`<sup>Optional</sup> <a name="allowGceInferenceInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInferenceInput"></a>

```java
public java.lang.Object getAllowGceInferenceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `boundInstanceGroupsInput`<sup>Optional</sup> <a name="boundInstanceGroupsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroupsInput"></a>

```java
public java.util.List<java.lang.String> getBoundInstanceGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundLabelsInput`<sup>Optional</sup> <a name="boundLabelsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabelsInput"></a>

```java
public java.util.List<java.lang.String> getBoundLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundProjectsInput`<sup>Optional</sup> <a name="boundProjectsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjectsInput"></a>

```java
public java.util.List<java.lang.String> getBoundProjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundRegionsInput`<sup>Optional</sup> <a name="boundRegionsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegionsInput"></a>

```java
public java.util.List<java.lang.String> getBoundRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundServiceAccountsInput`<sup>Optional</sup> <a name="boundServiceAccountsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccountsInput"></a>

```java
public java.util.List<java.lang.String> getBoundServiceAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundZonesInput`<sup>Optional</sup> <a name="boundZonesInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZonesInput"></a>

```java
public java.util.List<java.lang.String> getBoundZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxJwtExpInput`<sup>Optional</sup> <a name="maxJwtExpInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExpInput"></a>

```java
public java.lang.String getMaxJwtExpInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrsInput"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```java
public java.lang.Number getTokenExplicitMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtlInput"></a>

```java
public java.lang.Number getTokenMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```java
public java.lang.Object getTokenNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUsesInput"></a>

```java
public java.lang.Number getTokenNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriodInput"></a>

```java
public java.lang.Number getTokenPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getTokenPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtlInput"></a>

```java
public java.lang.Number getTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `addGroupAliases`<sup>Required</sup> <a name="addGroupAliases" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliases"></a>

```java
public java.lang.Object getAddGroupAliases();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowGceInference`<sup>Required</sup> <a name="allowGceInference" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInference"></a>

```java
public java.lang.Object getAllowGceInference();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `boundInstanceGroups`<sup>Required</sup> <a name="boundInstanceGroups" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroups"></a>

```java
public java.util.List<java.lang.String> getBoundInstanceGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundLabels`<sup>Required</sup> <a name="boundLabels" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabels"></a>

```java
public java.util.List<java.lang.String> getBoundLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundProjects`<sup>Required</sup> <a name="boundProjects" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjects"></a>

```java
public java.util.List<java.lang.String> getBoundProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundRegions`<sup>Required</sup> <a name="boundRegions" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegions"></a>

```java
public java.util.List<java.lang.String> getBoundRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundServiceAccounts`<sup>Required</sup> <a name="boundServiceAccounts" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getBoundServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundZones`<sup>Required</sup> <a name="boundZones" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZones"></a>

```java
public java.util.List<java.lang.String> getBoundZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxJwtExp`<sup>Required</sup> <a name="maxJwtExp" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExp"></a>

```java
public java.lang.String getMaxJwtExp();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GcpAuthBackendRoleConfig <a name="GcpAuthBackendRoleConfig" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend_role.GcpAuthBackendRoleConfig;

GcpAuthBackendRoleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .role(java.lang.String)
    .type(java.lang.String)
//  .addGroupAliases(java.lang.Boolean)
//  .addGroupAliases(IResolvable)
//  .allowGceInference(java.lang.Boolean)
//  .allowGceInference(IResolvable)
//  .backend(java.lang.String)
//  .boundInstanceGroups(java.util.List<java.lang.String>)
//  .boundLabels(java.util.List<java.lang.String>)
//  .boundProjects(java.util.List<java.lang.String>)
//  .boundRegions(java.util.List<java.lang.String>)
//  .boundServiceAccounts(java.util.List<java.lang.String>)
//  .boundZones(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .maxJwtExp(java.lang.String)
//  .namespace(java.lang.String)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean)
//  .tokenNoDefaultPolicy(IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#role GcpAuthBackendRole#role}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#type GcpAuthBackendRole#type}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.addGroupAliases">addGroupAliases</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#add_group_aliases GcpAuthBackendRole#add_group_aliases}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.allowGceInference">allowGceInference</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#allow_gce_inference GcpAuthBackendRole#allow_gce_inference}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#backend GcpAuthBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundInstanceGroups">boundInstanceGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_instance_groups GcpAuthBackendRole#bound_instance_groups}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundLabels">boundLabels</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_labels GcpAuthBackendRole#bound_labels}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundProjects">boundProjects</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_projects GcpAuthBackendRole#bound_projects}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundRegions">boundRegions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_regions GcpAuthBackendRole#bound_regions}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundServiceAccounts">boundServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_service_accounts GcpAuthBackendRole#bound_service_accounts}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundZones">boundZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_zones GcpAuthBackendRole#bound_zones}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#id GcpAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.maxJwtExp">maxJwtExp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#max_jwt_exp GcpAuthBackendRole#max_jwt_exp}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#role GcpAuthBackendRole#role}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#type GcpAuthBackendRole#type}.

---

##### `addGroupAliases`<sup>Optional</sup> <a name="addGroupAliases" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.addGroupAliases"></a>

```java
public java.lang.Object getAddGroupAliases();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#add_group_aliases GcpAuthBackendRole#add_group_aliases}.

---

##### `allowGceInference`<sup>Optional</sup> <a name="allowGceInference" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.allowGceInference"></a>

```java
public java.lang.Object getAllowGceInference();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#allow_gce_inference GcpAuthBackendRole#allow_gce_inference}.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#backend GcpAuthBackendRole#backend}.

---

##### `boundInstanceGroups`<sup>Optional</sup> <a name="boundInstanceGroups" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundInstanceGroups"></a>

```java
public java.util.List<java.lang.String> getBoundInstanceGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_instance_groups GcpAuthBackendRole#bound_instance_groups}.

---

##### `boundLabels`<sup>Optional</sup> <a name="boundLabels" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundLabels"></a>

```java
public java.util.List<java.lang.String> getBoundLabels();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_labels GcpAuthBackendRole#bound_labels}.

---

##### `boundProjects`<sup>Optional</sup> <a name="boundProjects" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundProjects"></a>

```java
public java.util.List<java.lang.String> getBoundProjects();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_projects GcpAuthBackendRole#bound_projects}.

---

##### `boundRegions`<sup>Optional</sup> <a name="boundRegions" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundRegions"></a>

```java
public java.util.List<java.lang.String> getBoundRegions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_regions GcpAuthBackendRole#bound_regions}.

---

##### `boundServiceAccounts`<sup>Optional</sup> <a name="boundServiceAccounts" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getBoundServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_service_accounts GcpAuthBackendRole#bound_service_accounts}.

---

##### `boundZones`<sup>Optional</sup> <a name="boundZones" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundZones"></a>

```java
public java.util.List<java.lang.String> getBoundZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#bound_zones GcpAuthBackendRole#bound_zones}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#id GcpAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxJwtExp`<sup>Optional</sup> <a name="maxJwtExp" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.maxJwtExp"></a>

```java
public java.lang.String getMaxJwtExp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#max_jwt_exp GcpAuthBackendRole#max_jwt_exp}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#namespace GcpAuthBackendRole#namespace}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_bound_cidrs GcpAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_explicit_max_ttl GcpAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_max_ttl GcpAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_no_default_policy GcpAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_num_uses GcpAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_period GcpAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_policies GcpAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_ttl GcpAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend_role#token_type GcpAuthBackendRole#token_type}

---



