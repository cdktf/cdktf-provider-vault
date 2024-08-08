# `jwtAuthBackendRole` Submodule <a name="`jwtAuthBackendRole` Submodule" id="@cdktf/provider-vault.jwtAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JwtAuthBackendRole <a name="JwtAuthBackendRole" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role vault_jwt_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.jwt_auth_backend_role.JwtAuthBackendRole;

JwtAuthBackendRole.Builder.create(Construct scope, java.lang.String id)
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
    .userClaim(java.lang.String)
//  .allowedRedirectUris(java.util.List<java.lang.String>)
//  .backend(java.lang.String)
//  .boundAudiences(java.util.List<java.lang.String>)
//  .boundClaims(java.util.Map<java.lang.String, java.lang.String>)
//  .boundClaimsType(java.lang.String)
//  .boundSubject(java.lang.String)
//  .claimMappings(java.util.Map<java.lang.String, java.lang.String>)
//  .clockSkewLeeway(java.lang.Number)
//  .disableBoundClaimsParsing(java.lang.Boolean)
//  .disableBoundClaimsParsing(IResolvable)
//  .expirationLeeway(java.lang.Number)
//  .groupsClaim(java.lang.String)
//  .id(java.lang.String)
//  .maxAge(java.lang.Number)
//  .namespace(java.lang.String)
//  .notBeforeLeeway(java.lang.Number)
//  .oidcScopes(java.util.List<java.lang.String>)
//  .roleType(java.lang.String)
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
//  .userClaimJsonPointer(java.lang.Boolean)
//  .userClaimJsonPointer(IResolvable)
//  .verboseOidcLogging(java.lang.Boolean)
//  .verboseOidcLogging(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.userClaim">userClaim</a></code> | <code>java.lang.String</code> | The claim to use to uniquely identify the user; |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.allowedRedirectUris">allowedRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | The list of allowed values for redirect_uri during OIDC logins. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundAudiences">boundAudiences</a></code> | <code>java.util.List<java.lang.String></code> | List of aud claims to match against. Any match is sufficient. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundClaims">boundClaims</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of claims/values to match against. The expected value may be a single string or a comma-separated string list. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundClaimsType">boundClaimsType</a></code> | <code>java.lang.String</code> | How to interpret values in the claims/values map: can be either "string" (exact match) or "glob" (wildcard match). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundSubject">boundSubject</a></code> | <code>java.lang.String</code> | If set, requires that the sub claim matches this value. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.claimMappings">claimMappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of claims (keys) to be copied to specified metadata fields (values). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.clockSkewLeeway">clockSkewLeeway</a></code> | <code>java.lang.Number</code> | The amount of leeway to add to all claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.disableBoundClaimsParsing">disableBoundClaimsParsing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable bound claim value parsing. Useful when values contain commas. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.expirationLeeway">expirationLeeway</a></code> | <code>java.lang.Number</code> | The amount of leeway to add to expiration (exp) claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.groupsClaim">groupsClaim</a></code> | <code>java.lang.String</code> | The claim to use to uniquely identify the set of groups to which the user belongs; |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#id JwtAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | Specifies the allowable elapsed time in seconds since the last time the user was actively authenticated. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.notBeforeLeeway">notBeforeLeeway</a></code> | <code>java.lang.Number</code> | The amount of leeway to add to not before (nbf) claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.oidcScopes">oidcScopes</a></code> | <code>java.util.List<java.lang.String></code> | List of OIDC scopes to be used with an OIDC role. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.roleType">roleType</a></code> | <code>java.lang.String</code> | Type of role, either "oidc" (default) or "jwt". |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.userClaimJsonPointer">userClaimJsonPointer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the user_claim value uses JSON pointer syntax for referencing claims. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.verboseOidcLogging">verboseOidcLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Log received OIDC tokens and claims when debug-level logging is active. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#role_name JwtAuthBackendRole#role_name}

---

##### `userClaim`<sup>Required</sup> <a name="userClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.userClaim"></a>

- *Type:* java.lang.String

The claim to use to uniquely identify the user;

this will be used as the name for the Identity entity alias created due to a successful login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#user_claim JwtAuthBackendRole#user_claim}

---

##### `allowedRedirectUris`<sup>Optional</sup> <a name="allowedRedirectUris" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.allowedRedirectUris"></a>

- *Type:* java.util.List<java.lang.String>

The list of allowed values for redirect_uri during OIDC logins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#allowed_redirect_uris JwtAuthBackendRole#allowed_redirect_uris}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#backend JwtAuthBackendRole#backend}

---

##### `boundAudiences`<sup>Optional</sup> <a name="boundAudiences" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundAudiences"></a>

- *Type:* java.util.List<java.lang.String>

List of aud claims to match against. Any match is sufficient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#bound_audiences JwtAuthBackendRole#bound_audiences}

---

##### `boundClaims`<sup>Optional</sup> <a name="boundClaims" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundClaims"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of claims/values to match against. The expected value may be a single string or a comma-separated string list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#bound_claims JwtAuthBackendRole#bound_claims}

---

##### `boundClaimsType`<sup>Optional</sup> <a name="boundClaimsType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundClaimsType"></a>

- *Type:* java.lang.String

How to interpret values in the claims/values map: can be either "string" (exact match) or "glob" (wildcard match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#bound_claims_type JwtAuthBackendRole#bound_claims_type}

---

##### `boundSubject`<sup>Optional</sup> <a name="boundSubject" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundSubject"></a>

- *Type:* java.lang.String

If set, requires that the sub claim matches this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#bound_subject JwtAuthBackendRole#bound_subject}

---

##### `claimMappings`<sup>Optional</sup> <a name="claimMappings" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.claimMappings"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of claims (keys) to be copied to specified metadata fields (values).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#claim_mappings JwtAuthBackendRole#claim_mappings}

---

##### `clockSkewLeeway`<sup>Optional</sup> <a name="clockSkewLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.clockSkewLeeway"></a>

- *Type:* java.lang.Number

The amount of leeway to add to all claims to account for clock skew, in seconds.

Defaults to 60 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#clock_skew_leeway JwtAuthBackendRole#clock_skew_leeway}

---

##### `disableBoundClaimsParsing`<sup>Optional</sup> <a name="disableBoundClaimsParsing" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.disableBoundClaimsParsing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable bound claim value parsing. Useful when values contain commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#disable_bound_claims_parsing JwtAuthBackendRole#disable_bound_claims_parsing}

---

##### `expirationLeeway`<sup>Optional</sup> <a name="expirationLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.expirationLeeway"></a>

- *Type:* java.lang.Number

The amount of leeway to add to expiration (exp) claims to account for clock skew, in seconds.

Defaults to 150 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#expiration_leeway JwtAuthBackendRole#expiration_leeway}

---

##### `groupsClaim`<sup>Optional</sup> <a name="groupsClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.groupsClaim"></a>

- *Type:* java.lang.String

The claim to use to uniquely identify the set of groups to which the user belongs;

this will be used as the names for the Identity group aliases created due to a successful login. The claim value must be a list of strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#groups_claim JwtAuthBackendRole#groups_claim}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#id JwtAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.maxAge"></a>

- *Type:* java.lang.Number

Specifies the allowable elapsed time in seconds since the last time the user was actively authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#max_age JwtAuthBackendRole#max_age}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#namespace JwtAuthBackendRole#namespace}

---

##### `notBeforeLeeway`<sup>Optional</sup> <a name="notBeforeLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.notBeforeLeeway"></a>

- *Type:* java.lang.Number

The amount of leeway to add to not before (nbf) claims to account for clock skew, in seconds.

Defaults to 150 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#not_before_leeway JwtAuthBackendRole#not_before_leeway}

---

##### `oidcScopes`<sup>Optional</sup> <a name="oidcScopes" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.oidcScopes"></a>

- *Type:* java.util.List<java.lang.String>

List of OIDC scopes to be used with an OIDC role.

The standard scope "openid" is automatically included and need not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#oidc_scopes JwtAuthBackendRole#oidc_scopes}

---

##### `roleType`<sup>Optional</sup> <a name="roleType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.roleType"></a>

- *Type:* java.lang.String

Type of role, either "oidc" (default) or "jwt".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#role_type JwtAuthBackendRole#role_type}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_bound_cidrs JwtAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_explicit_max_ttl JwtAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_max_ttl JwtAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_no_default_policy JwtAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_num_uses JwtAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_period JwtAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_policies JwtAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_ttl JwtAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_type JwtAuthBackendRole#token_type}

---

##### `userClaimJsonPointer`<sup>Optional</sup> <a name="userClaimJsonPointer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.userClaimJsonPointer"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the user_claim value uses JSON pointer syntax for referencing claims.

By default, the user_claim value will not use JSON pointer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#user_claim_json_pointer JwtAuthBackendRole#user_claim_json_pointer}

---

##### `verboseOidcLogging`<sup>Optional</sup> <a name="verboseOidcLogging" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.verboseOidcLogging"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Log received OIDC tokens and claims when debug-level logging is active.

Not recommended in production since sensitive information may be present in OIDC responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#verbose_oidc_logging JwtAuthBackendRole#verbose_oidc_logging}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetAllowedRedirectUris">resetAllowedRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundAudiences">resetBoundAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaims">resetBoundClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaimsType">resetBoundClaimsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundSubject">resetBoundSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClaimMappings">resetClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClockSkewLeeway">resetClockSkewLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetDisableBoundClaimsParsing">resetDisableBoundClaimsParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetExpirationLeeway">resetExpirationLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetGroupsClaim">resetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetMaxAge">resetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNotBeforeLeeway">resetNotBeforeLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOidcScopes">resetOidcScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetRoleType">resetRoleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetUserClaimJsonPointer">resetUserClaimJsonPointer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetVerboseOidcLogging">resetVerboseOidcLogging</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedRedirectUris` <a name="resetAllowedRedirectUris" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetAllowedRedirectUris"></a>

```java
public void resetAllowedRedirectUris()
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetBoundAudiences` <a name="resetBoundAudiences" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundAudiences"></a>

```java
public void resetBoundAudiences()
```

##### `resetBoundClaims` <a name="resetBoundClaims" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaims"></a>

```java
public void resetBoundClaims()
```

##### `resetBoundClaimsType` <a name="resetBoundClaimsType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaimsType"></a>

```java
public void resetBoundClaimsType()
```

##### `resetBoundSubject` <a name="resetBoundSubject" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundSubject"></a>

```java
public void resetBoundSubject()
```

##### `resetClaimMappings` <a name="resetClaimMappings" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClaimMappings"></a>

```java
public void resetClaimMappings()
```

##### `resetClockSkewLeeway` <a name="resetClockSkewLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClockSkewLeeway"></a>

```java
public void resetClockSkewLeeway()
```

##### `resetDisableBoundClaimsParsing` <a name="resetDisableBoundClaimsParsing" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetDisableBoundClaimsParsing"></a>

```java
public void resetDisableBoundClaimsParsing()
```

##### `resetExpirationLeeway` <a name="resetExpirationLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetExpirationLeeway"></a>

```java
public void resetExpirationLeeway()
```

##### `resetGroupsClaim` <a name="resetGroupsClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetGroupsClaim"></a>

```java
public void resetGroupsClaim()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetMaxAge"></a>

```java
public void resetMaxAge()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNotBeforeLeeway` <a name="resetNotBeforeLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNotBeforeLeeway"></a>

```java
public void resetNotBeforeLeeway()
```

##### `resetOidcScopes` <a name="resetOidcScopes" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOidcScopes"></a>

```java
public void resetOidcScopes()
```

##### `resetRoleType` <a name="resetRoleType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetRoleType"></a>

```java
public void resetRoleType()
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenBoundCidrs"></a>

```java
public void resetTokenBoundCidrs()
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```java
public void resetTokenExplicitMaxTtl()
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenMaxTtl"></a>

```java
public void resetTokenMaxTtl()
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```java
public void resetTokenNoDefaultPolicy()
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNumUses"></a>

```java
public void resetTokenNumUses()
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPeriod"></a>

```java
public void resetTokenPeriod()
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPolicies"></a>

```java
public void resetTokenPolicies()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenType"></a>

```java
public void resetTokenType()
```

##### `resetUserClaimJsonPointer` <a name="resetUserClaimJsonPointer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetUserClaimJsonPointer"></a>

```java
public void resetUserClaimJsonPointer()
```

##### `resetVerboseOidcLogging` <a name="resetVerboseOidcLogging" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetVerboseOidcLogging"></a>

```java
public void resetVerboseOidcLogging()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a JwtAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.jwt_auth_backend_role.JwtAuthBackendRole;

JwtAuthBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.jwt_auth_backend_role.JwtAuthBackendRole;

JwtAuthBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.jwt_auth_backend_role.JwtAuthBackendRole;

JwtAuthBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.jwt_auth_backend_role.JwtAuthBackendRole;

JwtAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),JwtAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a JwtAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the JwtAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing JwtAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the JwtAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUrisInput">allowedRedirectUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiencesInput">boundAudiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsInput">boundClaimsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsTypeInput">boundClaimsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubjectInput">boundSubjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappingsInput">claimMappingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeewayInput">clockSkewLeewayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsingInput">disableBoundClaimsParsingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeewayInput">expirationLeewayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaimInput">groupsClaimInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeewayInput">notBeforeLeewayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopesInput">oidcScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleTypeInput">roleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimInput">userClaimInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointerInput">userClaimJsonPointerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLoggingInput">verboseOidcLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUris">allowedRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiences">boundAudiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaims">boundClaims</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsType">boundClaimsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubject">boundSubject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappings">claimMappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeeway">clockSkewLeeway</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsing">disableBoundClaimsParsing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeeway">expirationLeeway</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaim">groupsClaim</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeeway">notBeforeLeeway</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopes">oidcScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleType">roleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaim">userClaim</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointer">userClaimJsonPointer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLogging">verboseOidcLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedRedirectUrisInput`<sup>Optional</sup> <a name="allowedRedirectUrisInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUrisInput"></a>

```java
public java.util.List<java.lang.String> getAllowedRedirectUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `boundAudiencesInput`<sup>Optional</sup> <a name="boundAudiencesInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiencesInput"></a>

```java
public java.util.List<java.lang.String> getBoundAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundClaimsInput`<sup>Optional</sup> <a name="boundClaimsInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBoundClaimsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `boundClaimsTypeInput`<sup>Optional</sup> <a name="boundClaimsTypeInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsTypeInput"></a>

```java
public java.lang.String getBoundClaimsTypeInput();
```

- *Type:* java.lang.String

---

##### `boundSubjectInput`<sup>Optional</sup> <a name="boundSubjectInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubjectInput"></a>

```java
public java.lang.String getBoundSubjectInput();
```

- *Type:* java.lang.String

---

##### `claimMappingsInput`<sup>Optional</sup> <a name="claimMappingsInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClaimMappingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `clockSkewLeewayInput`<sup>Optional</sup> <a name="clockSkewLeewayInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeewayInput"></a>

```java
public java.lang.Number getClockSkewLeewayInput();
```

- *Type:* java.lang.Number

---

##### `disableBoundClaimsParsingInput`<sup>Optional</sup> <a name="disableBoundClaimsParsingInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsingInput"></a>

```java
public java.lang.Object getDisableBoundClaimsParsingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expirationLeewayInput`<sup>Optional</sup> <a name="expirationLeewayInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeewayInput"></a>

```java
public java.lang.Number getExpirationLeewayInput();
```

- *Type:* java.lang.Number

---

##### `groupsClaimInput`<sup>Optional</sup> <a name="groupsClaimInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaimInput"></a>

```java
public java.lang.String getGroupsClaimInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAgeInput"></a>

```java
public java.lang.Number getMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `notBeforeLeewayInput`<sup>Optional</sup> <a name="notBeforeLeewayInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeewayInput"></a>

```java
public java.lang.Number getNotBeforeLeewayInput();
```

- *Type:* java.lang.Number

---

##### `oidcScopesInput`<sup>Optional</sup> <a name="oidcScopesInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopesInput"></a>

```java
public java.util.List<java.lang.String> getOidcScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `roleTypeInput`<sup>Optional</sup> <a name="roleTypeInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleTypeInput"></a>

```java
public java.lang.String getRoleTypeInput();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrsInput"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```java
public java.lang.Number getTokenExplicitMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtlInput"></a>

```java
public java.lang.Number getTokenMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```java
public java.lang.Object getTokenNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUsesInput"></a>

```java
public java.lang.Number getTokenNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriodInput"></a>

```java
public java.lang.Number getTokenPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getTokenPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtlInput"></a>

```java
public java.lang.Number getTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `userClaimInput`<sup>Optional</sup> <a name="userClaimInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimInput"></a>

```java
public java.lang.String getUserClaimInput();
```

- *Type:* java.lang.String

---

##### `userClaimJsonPointerInput`<sup>Optional</sup> <a name="userClaimJsonPointerInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointerInput"></a>

```java
public java.lang.Object getUserClaimJsonPointerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `verboseOidcLoggingInput`<sup>Optional</sup> <a name="verboseOidcLoggingInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLoggingInput"></a>

```java
public java.lang.Object getVerboseOidcLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedRedirectUris`<sup>Required</sup> <a name="allowedRedirectUris" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUris"></a>

```java
public java.util.List<java.lang.String> getAllowedRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `boundAudiences`<sup>Required</sup> <a name="boundAudiences" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiences"></a>

```java
public java.util.List<java.lang.String> getBoundAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundClaims`<sup>Required</sup> <a name="boundClaims" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaims"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBoundClaims();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `boundClaimsType`<sup>Required</sup> <a name="boundClaimsType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsType"></a>

```java
public java.lang.String getBoundClaimsType();
```

- *Type:* java.lang.String

---

##### `boundSubject`<sup>Required</sup> <a name="boundSubject" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubject"></a>

```java
public java.lang.String getBoundSubject();
```

- *Type:* java.lang.String

---

##### `claimMappings`<sup>Required</sup> <a name="claimMappings" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClaimMappings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `clockSkewLeeway`<sup>Required</sup> <a name="clockSkewLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeeway"></a>

```java
public java.lang.Number getClockSkewLeeway();
```

- *Type:* java.lang.Number

---

##### `disableBoundClaimsParsing`<sup>Required</sup> <a name="disableBoundClaimsParsing" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsing"></a>

```java
public java.lang.Object getDisableBoundClaimsParsing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expirationLeeway`<sup>Required</sup> <a name="expirationLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeeway"></a>

```java
public java.lang.Number getExpirationLeeway();
```

- *Type:* java.lang.Number

---

##### `groupsClaim`<sup>Required</sup> <a name="groupsClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaim"></a>

```java
public java.lang.String getGroupsClaim();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `notBeforeLeeway`<sup>Required</sup> <a name="notBeforeLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeeway"></a>

```java
public java.lang.Number getNotBeforeLeeway();
```

- *Type:* java.lang.Number

---

##### `oidcScopes`<sup>Required</sup> <a name="oidcScopes" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopes"></a>

```java
public java.util.List<java.lang.String> getOidcScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleType"></a>

```java
public java.lang.String getRoleType();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

##### `userClaim`<sup>Required</sup> <a name="userClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaim"></a>

```java
public java.lang.String getUserClaim();
```

- *Type:* java.lang.String

---

##### `userClaimJsonPointer`<sup>Required</sup> <a name="userClaimJsonPointer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointer"></a>

```java
public java.lang.Object getUserClaimJsonPointer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `verboseOidcLogging`<sup>Required</sup> <a name="verboseOidcLogging" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLogging"></a>

```java
public java.lang.Object getVerboseOidcLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### JwtAuthBackendRoleConfig <a name="JwtAuthBackendRoleConfig" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.jwt_auth_backend_role.JwtAuthBackendRoleConfig;

JwtAuthBackendRoleConfig.builder()
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
    .userClaim(java.lang.String)
//  .allowedRedirectUris(java.util.List<java.lang.String>)
//  .backend(java.lang.String)
//  .boundAudiences(java.util.List<java.lang.String>)
//  .boundClaims(java.util.Map<java.lang.String, java.lang.String>)
//  .boundClaimsType(java.lang.String)
//  .boundSubject(java.lang.String)
//  .claimMappings(java.util.Map<java.lang.String, java.lang.String>)
//  .clockSkewLeeway(java.lang.Number)
//  .disableBoundClaimsParsing(java.lang.Boolean)
//  .disableBoundClaimsParsing(IResolvable)
//  .expirationLeeway(java.lang.Number)
//  .groupsClaim(java.lang.String)
//  .id(java.lang.String)
//  .maxAge(java.lang.Number)
//  .namespace(java.lang.String)
//  .notBeforeLeeway(java.lang.Number)
//  .oidcScopes(java.util.List<java.lang.String>)
//  .roleType(java.lang.String)
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
//  .userClaimJsonPointer(java.lang.Boolean)
//  .userClaimJsonPointer(IResolvable)
//  .verboseOidcLogging(java.lang.Boolean)
//  .verboseOidcLogging(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaim">userClaim</a></code> | <code>java.lang.String</code> | The claim to use to uniquely identify the user; |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.allowedRedirectUris">allowedRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | The list of allowed values for redirect_uri during OIDC logins. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundAudiences">boundAudiences</a></code> | <code>java.util.List<java.lang.String></code> | List of aud claims to match against. Any match is sufficient. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaims">boundClaims</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of claims/values to match against. The expected value may be a single string or a comma-separated string list. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaimsType">boundClaimsType</a></code> | <code>java.lang.String</code> | How to interpret values in the claims/values map: can be either "string" (exact match) or "glob" (wildcard match). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundSubject">boundSubject</a></code> | <code>java.lang.String</code> | If set, requires that the sub claim matches this value. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.claimMappings">claimMappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of claims (keys) to be copied to specified metadata fields (values). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.clockSkewLeeway">clockSkewLeeway</a></code> | <code>java.lang.Number</code> | The amount of leeway to add to all claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.disableBoundClaimsParsing">disableBoundClaimsParsing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable bound claim value parsing. Useful when values contain commas. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.expirationLeeway">expirationLeeway</a></code> | <code>java.lang.Number</code> | The amount of leeway to add to expiration (exp) claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.groupsClaim">groupsClaim</a></code> | <code>java.lang.String</code> | The claim to use to uniquely identify the set of groups to which the user belongs; |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#id JwtAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | Specifies the allowable elapsed time in seconds since the last time the user was actively authenticated. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.notBeforeLeeway">notBeforeLeeway</a></code> | <code>java.lang.Number</code> | The amount of leeway to add to not before (nbf) claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.oidcScopes">oidcScopes</a></code> | <code>java.util.List<java.lang.String></code> | List of OIDC scopes to be used with an OIDC role. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleType">roleType</a></code> | <code>java.lang.String</code> | Type of role, either "oidc" (default) or "jwt". |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaimJsonPointer">userClaimJsonPointer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the user_claim value uses JSON pointer syntax for referencing claims. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.verboseOidcLogging">verboseOidcLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Log received OIDC tokens and claims when debug-level logging is active. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#role_name JwtAuthBackendRole#role_name}

---

##### `userClaim`<sup>Required</sup> <a name="userClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaim"></a>

```java
public java.lang.String getUserClaim();
```

- *Type:* java.lang.String

The claim to use to uniquely identify the user;

this will be used as the name for the Identity entity alias created due to a successful login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#user_claim JwtAuthBackendRole#user_claim}

---

##### `allowedRedirectUris`<sup>Optional</sup> <a name="allowedRedirectUris" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.allowedRedirectUris"></a>

```java
public java.util.List<java.lang.String> getAllowedRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

The list of allowed values for redirect_uri during OIDC logins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#allowed_redirect_uris JwtAuthBackendRole#allowed_redirect_uris}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#backend JwtAuthBackendRole#backend}

---

##### `boundAudiences`<sup>Optional</sup> <a name="boundAudiences" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundAudiences"></a>

```java
public java.util.List<java.lang.String> getBoundAudiences();
```

- *Type:* java.util.List<java.lang.String>

List of aud claims to match against. Any match is sufficient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#bound_audiences JwtAuthBackendRole#bound_audiences}

---

##### `boundClaims`<sup>Optional</sup> <a name="boundClaims" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaims"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBoundClaims();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of claims/values to match against. The expected value may be a single string or a comma-separated string list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#bound_claims JwtAuthBackendRole#bound_claims}

---

##### `boundClaimsType`<sup>Optional</sup> <a name="boundClaimsType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaimsType"></a>

```java
public java.lang.String getBoundClaimsType();
```

- *Type:* java.lang.String

How to interpret values in the claims/values map: can be either "string" (exact match) or "glob" (wildcard match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#bound_claims_type JwtAuthBackendRole#bound_claims_type}

---

##### `boundSubject`<sup>Optional</sup> <a name="boundSubject" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundSubject"></a>

```java
public java.lang.String getBoundSubject();
```

- *Type:* java.lang.String

If set, requires that the sub claim matches this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#bound_subject JwtAuthBackendRole#bound_subject}

---

##### `claimMappings`<sup>Optional</sup> <a name="claimMappings" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.claimMappings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClaimMappings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of claims (keys) to be copied to specified metadata fields (values).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#claim_mappings JwtAuthBackendRole#claim_mappings}

---

##### `clockSkewLeeway`<sup>Optional</sup> <a name="clockSkewLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.clockSkewLeeway"></a>

```java
public java.lang.Number getClockSkewLeeway();
```

- *Type:* java.lang.Number

The amount of leeway to add to all claims to account for clock skew, in seconds.

Defaults to 60 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#clock_skew_leeway JwtAuthBackendRole#clock_skew_leeway}

---

##### `disableBoundClaimsParsing`<sup>Optional</sup> <a name="disableBoundClaimsParsing" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.disableBoundClaimsParsing"></a>

```java
public java.lang.Object getDisableBoundClaimsParsing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable bound claim value parsing. Useful when values contain commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#disable_bound_claims_parsing JwtAuthBackendRole#disable_bound_claims_parsing}

---

##### `expirationLeeway`<sup>Optional</sup> <a name="expirationLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.expirationLeeway"></a>

```java
public java.lang.Number getExpirationLeeway();
```

- *Type:* java.lang.Number

The amount of leeway to add to expiration (exp) claims to account for clock skew, in seconds.

Defaults to 150 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#expiration_leeway JwtAuthBackendRole#expiration_leeway}

---

##### `groupsClaim`<sup>Optional</sup> <a name="groupsClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.groupsClaim"></a>

```java
public java.lang.String getGroupsClaim();
```

- *Type:* java.lang.String

The claim to use to uniquely identify the set of groups to which the user belongs;

this will be used as the names for the Identity group aliases created due to a successful login. The claim value must be a list of strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#groups_claim JwtAuthBackendRole#groups_claim}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#id JwtAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

Specifies the allowable elapsed time in seconds since the last time the user was actively authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#max_age JwtAuthBackendRole#max_age}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#namespace JwtAuthBackendRole#namespace}

---

##### `notBeforeLeeway`<sup>Optional</sup> <a name="notBeforeLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.notBeforeLeeway"></a>

```java
public java.lang.Number getNotBeforeLeeway();
```

- *Type:* java.lang.Number

The amount of leeway to add to not before (nbf) claims to account for clock skew, in seconds.

Defaults to 150 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#not_before_leeway JwtAuthBackendRole#not_before_leeway}

---

##### `oidcScopes`<sup>Optional</sup> <a name="oidcScopes" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.oidcScopes"></a>

```java
public java.util.List<java.lang.String> getOidcScopes();
```

- *Type:* java.util.List<java.lang.String>

List of OIDC scopes to be used with an OIDC role.

The standard scope "openid" is automatically included and need not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#oidc_scopes JwtAuthBackendRole#oidc_scopes}

---

##### `roleType`<sup>Optional</sup> <a name="roleType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleType"></a>

```java
public java.lang.String getRoleType();
```

- *Type:* java.lang.String

Type of role, either "oidc" (default) or "jwt".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#role_type JwtAuthBackendRole#role_type}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_bound_cidrs JwtAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_explicit_max_ttl JwtAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_max_ttl JwtAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_no_default_policy JwtAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_num_uses JwtAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_period JwtAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_policies JwtAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_ttl JwtAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#token_type JwtAuthBackendRole#token_type}

---

##### `userClaimJsonPointer`<sup>Optional</sup> <a name="userClaimJsonPointer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaimJsonPointer"></a>

```java
public java.lang.Object getUserClaimJsonPointer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the user_claim value uses JSON pointer syntax for referencing claims.

By default, the user_claim value will not use JSON pointer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#user_claim_json_pointer JwtAuthBackendRole#user_claim_json_pointer}

---

##### `verboseOidcLogging`<sup>Optional</sup> <a name="verboseOidcLogging" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.verboseOidcLogging"></a>

```java
public java.lang.Object getVerboseOidcLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Log received OIDC tokens and claims when debug-level logging is active.

Not recommended in production since sensitive information may be present in OIDC responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/jwt_auth_backend_role#verbose_oidc_logging JwtAuthBackendRole#verbose_oidc_logging}

---



