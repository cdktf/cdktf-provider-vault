# `tokenAuthBackendRole` Submodule <a name="`tokenAuthBackendRole` Submodule" id="@cdktf/provider-vault.tokenAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TokenAuthBackendRole <a name="TokenAuthBackendRole" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role vault_token_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.token_auth_backend_role.TokenAuthBackendRole;

TokenAuthBackendRole.Builder.create(Construct scope, java.lang.String id)
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
    .roleName(java.lang.String)
//  .allowedEntityAliases(java.util.List<java.lang.String>)
//  .allowedPolicies(java.util.List<java.lang.String>)
//  .allowedPoliciesGlob(java.util.List<java.lang.String>)
//  .disallowedPolicies(java.util.List<java.lang.String>)
//  .disallowedPoliciesGlob(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .orphan(java.lang.Boolean)
//  .orphan(IResolvable)
//  .pathSuffix(java.lang.String)
//  .renewable(java.lang.Boolean)
//  .renewable(IResolvable)
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
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.allowedEntityAliases">allowedEntityAliases</a></code> | <code>java.util.List<java.lang.String></code> | Set of allowed entity aliases for this role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.allowedPolicies">allowedPolicies</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed policies for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.allowedPoliciesGlob">allowedPoliciesGlob</a></code> | <code>java.util.List<java.lang.String></code> | Set of allowed policies with glob match for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.disallowedPolicies">disallowedPolicies</a></code> | <code>java.util.List<java.lang.String></code> | List of disallowed policies for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.disallowedPoliciesGlob">disallowedPoliciesGlob</a></code> | <code>java.util.List<java.lang.String></code> | Set of disallowed policies with glob match for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#id TokenAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.orphan">orphan</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, tokens created against this policy will be orphan tokens. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.pathSuffix">pathSuffix</a></code> | <code>java.lang.String</code> | Tokens created against this role will have the given suffix as part of their path in addition to the role name. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.renewable">renewable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to disable the ability of the token to be renewed past its initial TTL. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#role_name TokenAuthBackendRole#role_name}

---

##### `allowedEntityAliases`<sup>Optional</sup> <a name="allowedEntityAliases" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.allowedEntityAliases"></a>

- *Type:* java.util.List<java.lang.String>

Set of allowed entity aliases for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#allowed_entity_aliases TokenAuthBackendRole#allowed_entity_aliases}

---

##### `allowedPolicies`<sup>Optional</sup> <a name="allowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.allowedPolicies"></a>

- *Type:* java.util.List<java.lang.String>

List of allowed policies for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#allowed_policies TokenAuthBackendRole#allowed_policies}

---

##### `allowedPoliciesGlob`<sup>Optional</sup> <a name="allowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.allowedPoliciesGlob"></a>

- *Type:* java.util.List<java.lang.String>

Set of allowed policies with glob match for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#allowed_policies_glob TokenAuthBackendRole#allowed_policies_glob}

---

##### `disallowedPolicies`<sup>Optional</sup> <a name="disallowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.disallowedPolicies"></a>

- *Type:* java.util.List<java.lang.String>

List of disallowed policies for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#disallowed_policies TokenAuthBackendRole#disallowed_policies}

---

##### `disallowedPoliciesGlob`<sup>Optional</sup> <a name="disallowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.disallowedPoliciesGlob"></a>

- *Type:* java.util.List<java.lang.String>

Set of disallowed policies with glob match for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#disallowed_policies_glob TokenAuthBackendRole#disallowed_policies_glob}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#id TokenAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#namespace TokenAuthBackendRole#namespace}

---

##### `orphan`<sup>Optional</sup> <a name="orphan" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.orphan"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, tokens created against this policy will be orphan tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#orphan TokenAuthBackendRole#orphan}

---

##### `pathSuffix`<sup>Optional</sup> <a name="pathSuffix" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.pathSuffix"></a>

- *Type:* java.lang.String

Tokens created against this role will have the given suffix as part of their path in addition to the role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#path_suffix TokenAuthBackendRole#path_suffix}

---

##### `renewable`<sup>Optional</sup> <a name="renewable" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.renewable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to disable the ability of the token to be renewed past its initial TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#renewable TokenAuthBackendRole#renewable}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_bound_cidrs TokenAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_explicit_max_ttl TokenAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_max_ttl TokenAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_no_default_policy TokenAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_num_uses TokenAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_period TokenAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_policies TokenAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_ttl TokenAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_type TokenAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedEntityAliases">resetAllowedEntityAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPolicies">resetAllowedPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPoliciesGlob">resetAllowedPoliciesGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPolicies">resetDisallowedPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPoliciesGlob">resetDisallowedPoliciesGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOrphan">resetOrphan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetPathSuffix">resetPathSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetRenewable">resetRenewable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedEntityAliases` <a name="resetAllowedEntityAliases" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedEntityAliases"></a>

```java
public void resetAllowedEntityAliases()
```

##### `resetAllowedPolicies` <a name="resetAllowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPolicies"></a>

```java
public void resetAllowedPolicies()
```

##### `resetAllowedPoliciesGlob` <a name="resetAllowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPoliciesGlob"></a>

```java
public void resetAllowedPoliciesGlob()
```

##### `resetDisallowedPolicies` <a name="resetDisallowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPolicies"></a>

```java
public void resetDisallowedPolicies()
```

##### `resetDisallowedPoliciesGlob` <a name="resetDisallowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPoliciesGlob"></a>

```java
public void resetDisallowedPoliciesGlob()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOrphan` <a name="resetOrphan" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOrphan"></a>

```java
public void resetOrphan()
```

##### `resetPathSuffix` <a name="resetPathSuffix" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetPathSuffix"></a>

```java
public void resetPathSuffix()
```

##### `resetRenewable` <a name="resetRenewable" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetRenewable"></a>

```java
public void resetRenewable()
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenBoundCidrs"></a>

```java
public void resetTokenBoundCidrs()
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```java
public void resetTokenExplicitMaxTtl()
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenMaxTtl"></a>

```java
public void resetTokenMaxTtl()
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```java
public void resetTokenNoDefaultPolicy()
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNumUses"></a>

```java
public void resetTokenNumUses()
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPeriod"></a>

```java
public void resetTokenPeriod()
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPolicies"></a>

```java
public void resetTokenPolicies()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenType"></a>

```java
public void resetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TokenAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.token_auth_backend_role.TokenAuthBackendRole;

TokenAuthBackendRole.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.token_auth_backend_role.TokenAuthBackendRole;

TokenAuthBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.token_auth_backend_role.TokenAuthBackendRole;

TokenAuthBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.token_auth_backend_role.TokenAuthBackendRole;

TokenAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TokenAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TokenAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TokenAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TokenAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TokenAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliasesInput">allowedEntityAliasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlobInput">allowedPoliciesGlobInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesInput">allowedPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlobInput">disallowedPoliciesGlobInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesInput">disallowedPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphanInput">orphanInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffixInput">pathSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewableInput">renewableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliases">allowedEntityAliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPolicies">allowedPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlob">allowedPoliciesGlob</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPolicies">disallowedPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlob">disallowedPoliciesGlob</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphan">orphan</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffix">pathSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewable">renewable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedEntityAliasesInput`<sup>Optional</sup> <a name="allowedEntityAliasesInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliasesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedEntityAliasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedPoliciesGlobInput`<sup>Optional</sup> <a name="allowedPoliciesGlobInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlobInput"></a>

```java
public java.util.List<java.lang.String> getAllowedPoliciesGlobInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedPoliciesInput`<sup>Optional</sup> <a name="allowedPoliciesInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disallowedPoliciesGlobInput`<sup>Optional</sup> <a name="disallowedPoliciesGlobInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlobInput"></a>

```java
public java.util.List<java.lang.String> getDisallowedPoliciesGlobInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disallowedPoliciesInput`<sup>Optional</sup> <a name="disallowedPoliciesInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getDisallowedPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `orphanInput`<sup>Optional</sup> <a name="orphanInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphanInput"></a>

```java
public java.lang.Object getOrphanInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pathSuffixInput`<sup>Optional</sup> <a name="pathSuffixInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffixInput"></a>

```java
public java.lang.String getPathSuffixInput();
```

- *Type:* java.lang.String

---

##### `renewableInput`<sup>Optional</sup> <a name="renewableInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewableInput"></a>

```java
public java.lang.Object getRenewableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrsInput"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```java
public java.lang.Number getTokenExplicitMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtlInput"></a>

```java
public java.lang.Number getTokenMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```java
public java.lang.Object getTokenNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUsesInput"></a>

```java
public java.lang.Number getTokenNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriodInput"></a>

```java
public java.lang.Number getTokenPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getTokenPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtlInput"></a>

```java
public java.lang.Number getTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `allowedEntityAliases`<sup>Required</sup> <a name="allowedEntityAliases" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliases"></a>

```java
public java.util.List<java.lang.String> getAllowedEntityAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedPolicies`<sup>Required</sup> <a name="allowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPolicies"></a>

```java
public java.util.List<java.lang.String> getAllowedPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedPoliciesGlob`<sup>Required</sup> <a name="allowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlob"></a>

```java
public java.util.List<java.lang.String> getAllowedPoliciesGlob();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disallowedPolicies`<sup>Required</sup> <a name="disallowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPolicies"></a>

```java
public java.util.List<java.lang.String> getDisallowedPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disallowedPoliciesGlob`<sup>Required</sup> <a name="disallowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlob"></a>

```java
public java.util.List<java.lang.String> getDisallowedPoliciesGlob();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `orphan`<sup>Required</sup> <a name="orphan" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphan"></a>

```java
public java.lang.Object getOrphan();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pathSuffix`<sup>Required</sup> <a name="pathSuffix" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffix"></a>

```java
public java.lang.String getPathSuffix();
```

- *Type:* java.lang.String

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewable"></a>

```java
public java.lang.Object getRenewable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TokenAuthBackendRoleConfig <a name="TokenAuthBackendRoleConfig" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.token_auth_backend_role.TokenAuthBackendRoleConfig;

TokenAuthBackendRoleConfig.builder()
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
    .roleName(java.lang.String)
//  .allowedEntityAliases(java.util.List<java.lang.String>)
//  .allowedPolicies(java.util.List<java.lang.String>)
//  .allowedPoliciesGlob(java.util.List<java.lang.String>)
//  .disallowedPolicies(java.util.List<java.lang.String>)
//  .disallowedPoliciesGlob(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .orphan(java.lang.Boolean)
//  .orphan(IResolvable)
//  .pathSuffix(java.lang.String)
//  .renewable(java.lang.Boolean)
//  .renewable(IResolvable)
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
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedEntityAliases">allowedEntityAliases</a></code> | <code>java.util.List<java.lang.String></code> | Set of allowed entity aliases for this role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPolicies">allowedPolicies</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed policies for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPoliciesGlob">allowedPoliciesGlob</a></code> | <code>java.util.List<java.lang.String></code> | Set of allowed policies with glob match for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPolicies">disallowedPolicies</a></code> | <code>java.util.List<java.lang.String></code> | List of disallowed policies for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPoliciesGlob">disallowedPoliciesGlob</a></code> | <code>java.util.List<java.lang.String></code> | Set of disallowed policies with glob match for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#id TokenAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.orphan">orphan</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, tokens created against this policy will be orphan tokens. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.pathSuffix">pathSuffix</a></code> | <code>java.lang.String</code> | Tokens created against this role will have the given suffix as part of their path in addition to the role name. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.renewable">renewable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to disable the ability of the token to be renewed past its initial TTL. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#role_name TokenAuthBackendRole#role_name}

---

##### `allowedEntityAliases`<sup>Optional</sup> <a name="allowedEntityAliases" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedEntityAliases"></a>

```java
public java.util.List<java.lang.String> getAllowedEntityAliases();
```

- *Type:* java.util.List<java.lang.String>

Set of allowed entity aliases for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#allowed_entity_aliases TokenAuthBackendRole#allowed_entity_aliases}

---

##### `allowedPolicies`<sup>Optional</sup> <a name="allowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPolicies"></a>

```java
public java.util.List<java.lang.String> getAllowedPolicies();
```

- *Type:* java.util.List<java.lang.String>

List of allowed policies for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#allowed_policies TokenAuthBackendRole#allowed_policies}

---

##### `allowedPoliciesGlob`<sup>Optional</sup> <a name="allowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPoliciesGlob"></a>

```java
public java.util.List<java.lang.String> getAllowedPoliciesGlob();
```

- *Type:* java.util.List<java.lang.String>

Set of allowed policies with glob match for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#allowed_policies_glob TokenAuthBackendRole#allowed_policies_glob}

---

##### `disallowedPolicies`<sup>Optional</sup> <a name="disallowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPolicies"></a>

```java
public java.util.List<java.lang.String> getDisallowedPolicies();
```

- *Type:* java.util.List<java.lang.String>

List of disallowed policies for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#disallowed_policies TokenAuthBackendRole#disallowed_policies}

---

##### `disallowedPoliciesGlob`<sup>Optional</sup> <a name="disallowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPoliciesGlob"></a>

```java
public java.util.List<java.lang.String> getDisallowedPoliciesGlob();
```

- *Type:* java.util.List<java.lang.String>

Set of disallowed policies with glob match for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#disallowed_policies_glob TokenAuthBackendRole#disallowed_policies_glob}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#id TokenAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#namespace TokenAuthBackendRole#namespace}

---

##### `orphan`<sup>Optional</sup> <a name="orphan" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.orphan"></a>

```java
public java.lang.Object getOrphan();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, tokens created against this policy will be orphan tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#orphan TokenAuthBackendRole#orphan}

---

##### `pathSuffix`<sup>Optional</sup> <a name="pathSuffix" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.pathSuffix"></a>

```java
public java.lang.String getPathSuffix();
```

- *Type:* java.lang.String

Tokens created against this role will have the given suffix as part of their path in addition to the role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#path_suffix TokenAuthBackendRole#path_suffix}

---

##### `renewable`<sup>Optional</sup> <a name="renewable" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.renewable"></a>

```java
public java.lang.Object getRenewable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to disable the ability of the token to be renewed past its initial TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#renewable TokenAuthBackendRole#renewable}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_bound_cidrs TokenAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_explicit_max_ttl TokenAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_max_ttl TokenAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_no_default_policy TokenAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_num_uses TokenAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_period TokenAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_policies TokenAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_ttl TokenAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/token_auth_backend_role#token_type TokenAuthBackendRole#token_type}

---



