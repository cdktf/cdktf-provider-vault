# `jwtAuthBackendRole` Submodule <a name="`jwtAuthBackendRole` Submodule" id="@cdktf/provider-vault.jwtAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JwtAuthBackendRole <a name="JwtAuthBackendRole" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role vault_jwt_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import jwt_auth_backend_role

jwtAuthBackendRole.JwtAuthBackendRole(
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
  user_claim: str,
  allowed_redirect_uris: typing.List[str] = None,
  backend: str = None,
  bound_audiences: typing.List[str] = None,
  bound_claims: typing.Mapping[str] = None,
  bound_claims_type: str = None,
  bound_subject: str = None,
  claim_mappings: typing.Mapping[str] = None,
  clock_skew_leeway: typing.Union[int, float] = None,
  disable_bound_claims_parsing: typing.Union[bool, IResolvable] = None,
  expiration_leeway: typing.Union[int, float] = None,
  groups_claim: str = None,
  id: str = None,
  max_age: typing.Union[int, float] = None,
  namespace: str = None,
  not_before_leeway: typing.Union[int, float] = None,
  oidc_scopes: typing.List[str] = None,
  role_type: str = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: typing.Union[bool, IResolvable] = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None,
  user_claim_json_pointer: typing.Union[bool, IResolvable] = None,
  verbose_oidc_logging: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.userClaim">user_claim</a></code> | <code>str</code> | The claim to use to uniquely identify the user; |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.allowedRedirectUris">allowed_redirect_uris</a></code> | <code>typing.List[str]</code> | The list of allowed values for redirect_uri during OIDC logins. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundAudiences">bound_audiences</a></code> | <code>typing.List[str]</code> | List of aud claims to match against. Any match is sufficient. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundClaims">bound_claims</a></code> | <code>typing.Mapping[str]</code> | Map of claims/values to match against. The expected value may be a single string or a comma-separated string list. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundClaimsType">bound_claims_type</a></code> | <code>str</code> | How to interpret values in the claims/values map: can be either "string" (exact match) or "glob" (wildcard match). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundSubject">bound_subject</a></code> | <code>str</code> | If set, requires that the sub claim matches this value. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.claimMappings">claim_mappings</a></code> | <code>typing.Mapping[str]</code> | Map of claims (keys) to be copied to specified metadata fields (values). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.clockSkewLeeway">clock_skew_leeway</a></code> | <code>typing.Union[int, float]</code> | The amount of leeway to add to all claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.disableBoundClaimsParsing">disable_bound_claims_parsing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable bound claim value parsing. Useful when values contain commas. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.expirationLeeway">expiration_leeway</a></code> | <code>typing.Union[int, float]</code> | The amount of leeway to add to expiration (exp) claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.groupsClaim">groups_claim</a></code> | <code>str</code> | The claim to use to uniquely identify the set of groups to which the user belongs; |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#id JwtAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | Specifies the allowable elapsed time in seconds since the last time the user was actively authenticated. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.notBeforeLeeway">not_before_leeway</a></code> | <code>typing.Union[int, float]</code> | The amount of leeway to add to not before (nbf) claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.oidcScopes">oidc_scopes</a></code> | <code>typing.List[str]</code> | List of OIDC scopes to be used with an OIDC role. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.roleType">role_type</a></code> | <code>str</code> | Type of role, either "oidc" (default) or "jwt". |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.userClaimJsonPointer">user_claim_json_pointer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the user_claim value uses JSON pointer syntax for referencing claims. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.verboseOidcLogging">verbose_oidc_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Log received OIDC tokens and claims when debug-level logging is active. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.roleName"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#role_name JwtAuthBackendRole#role_name}

---

##### `user_claim`<sup>Required</sup> <a name="user_claim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.userClaim"></a>

- *Type:* str

The claim to use to uniquely identify the user;

this will be used as the name for the Identity entity alias created due to a successful login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#user_claim JwtAuthBackendRole#user_claim}

---

##### `allowed_redirect_uris`<sup>Optional</sup> <a name="allowed_redirect_uris" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.allowedRedirectUris"></a>

- *Type:* typing.List[str]

The list of allowed values for redirect_uri during OIDC logins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#allowed_redirect_uris JwtAuthBackendRole#allowed_redirect_uris}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.backend"></a>

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#backend JwtAuthBackendRole#backend}

---

##### `bound_audiences`<sup>Optional</sup> <a name="bound_audiences" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundAudiences"></a>

- *Type:* typing.List[str]

List of aud claims to match against. Any match is sufficient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#bound_audiences JwtAuthBackendRole#bound_audiences}

---

##### `bound_claims`<sup>Optional</sup> <a name="bound_claims" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundClaims"></a>

- *Type:* typing.Mapping[str]

Map of claims/values to match against. The expected value may be a single string or a comma-separated string list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#bound_claims JwtAuthBackendRole#bound_claims}

---

##### `bound_claims_type`<sup>Optional</sup> <a name="bound_claims_type" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundClaimsType"></a>

- *Type:* str

How to interpret values in the claims/values map: can be either "string" (exact match) or "glob" (wildcard match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#bound_claims_type JwtAuthBackendRole#bound_claims_type}

---

##### `bound_subject`<sup>Optional</sup> <a name="bound_subject" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.boundSubject"></a>

- *Type:* str

If set, requires that the sub claim matches this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#bound_subject JwtAuthBackendRole#bound_subject}

---

##### `claim_mappings`<sup>Optional</sup> <a name="claim_mappings" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.claimMappings"></a>

- *Type:* typing.Mapping[str]

Map of claims (keys) to be copied to specified metadata fields (values).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#claim_mappings JwtAuthBackendRole#claim_mappings}

---

##### `clock_skew_leeway`<sup>Optional</sup> <a name="clock_skew_leeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.clockSkewLeeway"></a>

- *Type:* typing.Union[int, float]

The amount of leeway to add to all claims to account for clock skew, in seconds.

Defaults to 60 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#clock_skew_leeway JwtAuthBackendRole#clock_skew_leeway}

---

##### `disable_bound_claims_parsing`<sup>Optional</sup> <a name="disable_bound_claims_parsing" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.disableBoundClaimsParsing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable bound claim value parsing. Useful when values contain commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#disable_bound_claims_parsing JwtAuthBackendRole#disable_bound_claims_parsing}

---

##### `expiration_leeway`<sup>Optional</sup> <a name="expiration_leeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.expirationLeeway"></a>

- *Type:* typing.Union[int, float]

The amount of leeway to add to expiration (exp) claims to account for clock skew, in seconds.

Defaults to 150 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#expiration_leeway JwtAuthBackendRole#expiration_leeway}

---

##### `groups_claim`<sup>Optional</sup> <a name="groups_claim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.groupsClaim"></a>

- *Type:* str

The claim to use to uniquely identify the set of groups to which the user belongs;

this will be used as the names for the Identity group aliases created due to a successful login. The claim value must be a list of strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#groups_claim JwtAuthBackendRole#groups_claim}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#id JwtAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.maxAge"></a>

- *Type:* typing.Union[int, float]

Specifies the allowable elapsed time in seconds since the last time the user was actively authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#max_age JwtAuthBackendRole#max_age}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#namespace JwtAuthBackendRole#namespace}

---

##### `not_before_leeway`<sup>Optional</sup> <a name="not_before_leeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.notBeforeLeeway"></a>

- *Type:* typing.Union[int, float]

The amount of leeway to add to not before (nbf) claims to account for clock skew, in seconds.

Defaults to 150 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#not_before_leeway JwtAuthBackendRole#not_before_leeway}

---

##### `oidc_scopes`<sup>Optional</sup> <a name="oidc_scopes" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.oidcScopes"></a>

- *Type:* typing.List[str]

List of OIDC scopes to be used with an OIDC role.

The standard scope "openid" is automatically included and need not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#oidc_scopes JwtAuthBackendRole#oidc_scopes}

---

##### `role_type`<sup>Optional</sup> <a name="role_type" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.roleType"></a>

- *Type:* str

Type of role, either "oidc" (default) or "jwt".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#role_type JwtAuthBackendRole#role_type}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_bound_cidrs JwtAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_explicit_max_ttl JwtAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_max_ttl JwtAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_no_default_policy JwtAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_num_uses JwtAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_period JwtAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_policies JwtAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_ttl JwtAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_type JwtAuthBackendRole#token_type}

---

##### `user_claim_json_pointer`<sup>Optional</sup> <a name="user_claim_json_pointer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.userClaimJsonPointer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the user_claim value uses JSON pointer syntax for referencing claims.

By default, the user_claim value will not use JSON pointer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#user_claim_json_pointer JwtAuthBackendRole#user_claim_json_pointer}

---

##### `verbose_oidc_logging`<sup>Optional</sup> <a name="verbose_oidc_logging" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.verboseOidcLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Log received OIDC tokens and claims when debug-level logging is active.

Not recommended in production since sensitive information may be present in OIDC responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#verbose_oidc_logging JwtAuthBackendRole#verbose_oidc_logging}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetAllowedRedirectUris">reset_allowed_redirect_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundAudiences">reset_bound_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaims">reset_bound_claims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaimsType">reset_bound_claims_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundSubject">reset_bound_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClaimMappings">reset_claim_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClockSkewLeeway">reset_clock_skew_leeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetDisableBoundClaimsParsing">reset_disable_bound_claims_parsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetExpirationLeeway">reset_expiration_leeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetGroupsClaim">reset_groups_claim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetMaxAge">reset_max_age</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNotBeforeLeeway">reset_not_before_leeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOidcScopes">reset_oidc_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetRoleType">reset_role_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenBoundCidrs">reset_token_bound_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenExplicitMaxTtl">reset_token_explicit_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenMaxTtl">reset_token_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNoDefaultPolicy">reset_token_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNumUses">reset_token_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPeriod">reset_token_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPolicies">reset_token_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenTtl">reset_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenType">reset_token_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetUserClaimJsonPointer">reset_user_claim_json_pointer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetVerboseOidcLogging">reset_verbose_oidc_logging</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_redirect_uris` <a name="reset_allowed_redirect_uris" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetAllowedRedirectUris"></a>

```python
def reset_allowed_redirect_uris() -> None
```

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_bound_audiences` <a name="reset_bound_audiences" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundAudiences"></a>

```python
def reset_bound_audiences() -> None
```

##### `reset_bound_claims` <a name="reset_bound_claims" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaims"></a>

```python
def reset_bound_claims() -> None
```

##### `reset_bound_claims_type` <a name="reset_bound_claims_type" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaimsType"></a>

```python
def reset_bound_claims_type() -> None
```

##### `reset_bound_subject` <a name="reset_bound_subject" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundSubject"></a>

```python
def reset_bound_subject() -> None
```

##### `reset_claim_mappings` <a name="reset_claim_mappings" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClaimMappings"></a>

```python
def reset_claim_mappings() -> None
```

##### `reset_clock_skew_leeway` <a name="reset_clock_skew_leeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClockSkewLeeway"></a>

```python
def reset_clock_skew_leeway() -> None
```

##### `reset_disable_bound_claims_parsing` <a name="reset_disable_bound_claims_parsing" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetDisableBoundClaimsParsing"></a>

```python
def reset_disable_bound_claims_parsing() -> None
```

##### `reset_expiration_leeway` <a name="reset_expiration_leeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetExpirationLeeway"></a>

```python
def reset_expiration_leeway() -> None
```

##### `reset_groups_claim` <a name="reset_groups_claim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetGroupsClaim"></a>

```python
def reset_groups_claim() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_age` <a name="reset_max_age" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetMaxAge"></a>

```python
def reset_max_age() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_not_before_leeway` <a name="reset_not_before_leeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNotBeforeLeeway"></a>

```python
def reset_not_before_leeway() -> None
```

##### `reset_oidc_scopes` <a name="reset_oidc_scopes" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOidcScopes"></a>

```python
def reset_oidc_scopes() -> None
```

##### `reset_role_type` <a name="reset_role_type" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetRoleType"></a>

```python
def reset_role_type() -> None
```

##### `reset_token_bound_cidrs` <a name="reset_token_bound_cidrs" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenBoundCidrs"></a>

```python
def reset_token_bound_cidrs() -> None
```

##### `reset_token_explicit_max_ttl` <a name="reset_token_explicit_max_ttl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```python
def reset_token_explicit_max_ttl() -> None
```

##### `reset_token_max_ttl` <a name="reset_token_max_ttl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenMaxTtl"></a>

```python
def reset_token_max_ttl() -> None
```

##### `reset_token_no_default_policy` <a name="reset_token_no_default_policy" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```python
def reset_token_no_default_policy() -> None
```

##### `reset_token_num_uses` <a name="reset_token_num_uses" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNumUses"></a>

```python
def reset_token_num_uses() -> None
```

##### `reset_token_period` <a name="reset_token_period" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPeriod"></a>

```python
def reset_token_period() -> None
```

##### `reset_token_policies` <a name="reset_token_policies" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPolicies"></a>

```python
def reset_token_policies() -> None
```

##### `reset_token_ttl` <a name="reset_token_ttl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenTtl"></a>

```python
def reset_token_ttl() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenType"></a>

```python
def reset_token_type() -> None
```

##### `reset_user_claim_json_pointer` <a name="reset_user_claim_json_pointer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetUserClaimJsonPointer"></a>

```python
def reset_user_claim_json_pointer() -> None
```

##### `reset_verbose_oidc_logging` <a name="reset_verbose_oidc_logging" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetVerboseOidcLogging"></a>

```python
def reset_verbose_oidc_logging() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a JwtAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import jwt_auth_backend_role

jwtAuthBackendRole.JwtAuthBackendRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import jwt_auth_backend_role

jwtAuthBackendRole.JwtAuthBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import jwt_auth_backend_role

jwtAuthBackendRole.JwtAuthBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import jwt_auth_backend_role

jwtAuthBackendRole.JwtAuthBackendRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a JwtAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the JwtAuthBackendRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing JwtAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the JwtAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUrisInput">allowed_redirect_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiencesInput">bound_audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsInput">bound_claims_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsTypeInput">bound_claims_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubjectInput">bound_subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappingsInput">claim_mappings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeewayInput">clock_skew_leeway_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsingInput">disable_bound_claims_parsing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeewayInput">expiration_leeway_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaimInput">groups_claim_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAgeInput">max_age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeewayInput">not_before_leeway_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopesInput">oidc_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleTypeInput">role_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrsInput">token_bound_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtlInput">token_explicit_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtlInput">token_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicyInput">token_no_default_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUsesInput">token_num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriodInput">token_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPoliciesInput">token_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtlInput">token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimInput">user_claim_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointerInput">user_claim_json_pointer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLoggingInput">verbose_oidc_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUris">allowed_redirect_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiences">bound_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaims">bound_claims</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsType">bound_claims_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubject">bound_subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappings">claim_mappings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeeway">clock_skew_leeway</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsing">disable_bound_claims_parsing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeeway">expiration_leeway</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaim">groups_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeeway">not_before_leeway</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopes">oidc_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleType">role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaim">user_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointer">user_claim_json_pointer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLogging">verbose_oidc_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_redirect_uris_input`<sup>Optional</sup> <a name="allowed_redirect_uris_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUrisInput"></a>

```python
allowed_redirect_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `bound_audiences_input`<sup>Optional</sup> <a name="bound_audiences_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiencesInput"></a>

```python
bound_audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_claims_input`<sup>Optional</sup> <a name="bound_claims_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsInput"></a>

```python
bound_claims_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `bound_claims_type_input`<sup>Optional</sup> <a name="bound_claims_type_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsTypeInput"></a>

```python
bound_claims_type_input: str
```

- *Type:* str

---

##### `bound_subject_input`<sup>Optional</sup> <a name="bound_subject_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubjectInput"></a>

```python
bound_subject_input: str
```

- *Type:* str

---

##### `claim_mappings_input`<sup>Optional</sup> <a name="claim_mappings_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappingsInput"></a>

```python
claim_mappings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `clock_skew_leeway_input`<sup>Optional</sup> <a name="clock_skew_leeway_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeewayInput"></a>

```python
clock_skew_leeway_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_bound_claims_parsing_input`<sup>Optional</sup> <a name="disable_bound_claims_parsing_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsingInput"></a>

```python
disable_bound_claims_parsing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_leeway_input`<sup>Optional</sup> <a name="expiration_leeway_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeewayInput"></a>

```python
expiration_leeway_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `groups_claim_input`<sup>Optional</sup> <a name="groups_claim_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaimInput"></a>

```python
groups_claim_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_age_input`<sup>Optional</sup> <a name="max_age_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAgeInput"></a>

```python
max_age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `not_before_leeway_input`<sup>Optional</sup> <a name="not_before_leeway_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeewayInput"></a>

```python
not_before_leeway_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oidc_scopes_input`<sup>Optional</sup> <a name="oidc_scopes_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopesInput"></a>

```python
oidc_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `role_type_input`<sup>Optional</sup> <a name="role_type_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleTypeInput"></a>

```python
role_type_input: str
```

- *Type:* str

---

##### `token_bound_cidrs_input`<sup>Optional</sup> <a name="token_bound_cidrs_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrsInput"></a>

```python
token_bound_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl_input`<sup>Optional</sup> <a name="token_explicit_max_ttl_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```python
token_explicit_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl_input`<sup>Optional</sup> <a name="token_max_ttl_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtlInput"></a>

```python
token_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy_input`<sup>Optional</sup> <a name="token_no_default_policy_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```python
token_no_default_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_num_uses_input`<sup>Optional</sup> <a name="token_num_uses_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUsesInput"></a>

```python
token_num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period_input`<sup>Optional</sup> <a name="token_period_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriodInput"></a>

```python
token_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies_input`<sup>Optional</sup> <a name="token_policies_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPoliciesInput"></a>

```python
token_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl_input`<sup>Optional</sup> <a name="token_ttl_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtlInput"></a>

```python
token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `user_claim_input`<sup>Optional</sup> <a name="user_claim_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimInput"></a>

```python
user_claim_input: str
```

- *Type:* str

---

##### `user_claim_json_pointer_input`<sup>Optional</sup> <a name="user_claim_json_pointer_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointerInput"></a>

```python
user_claim_json_pointer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `verbose_oidc_logging_input`<sup>Optional</sup> <a name="verbose_oidc_logging_input" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLoggingInput"></a>

```python
verbose_oidc_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_redirect_uris`<sup>Required</sup> <a name="allowed_redirect_uris" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUris"></a>

```python
allowed_redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `bound_audiences`<sup>Required</sup> <a name="bound_audiences" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiences"></a>

```python
bound_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_claims`<sup>Required</sup> <a name="bound_claims" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaims"></a>

```python
bound_claims: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `bound_claims_type`<sup>Required</sup> <a name="bound_claims_type" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsType"></a>

```python
bound_claims_type: str
```

- *Type:* str

---

##### `bound_subject`<sup>Required</sup> <a name="bound_subject" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubject"></a>

```python
bound_subject: str
```

- *Type:* str

---

##### `claim_mappings`<sup>Required</sup> <a name="claim_mappings" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappings"></a>

```python
claim_mappings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `clock_skew_leeway`<sup>Required</sup> <a name="clock_skew_leeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeeway"></a>

```python
clock_skew_leeway: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_bound_claims_parsing`<sup>Required</sup> <a name="disable_bound_claims_parsing" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsing"></a>

```python
disable_bound_claims_parsing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_leeway`<sup>Required</sup> <a name="expiration_leeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeeway"></a>

```python
expiration_leeway: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `groups_claim`<sup>Required</sup> <a name="groups_claim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaim"></a>

```python
groups_claim: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `not_before_leeway`<sup>Required</sup> <a name="not_before_leeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeeway"></a>

```python
not_before_leeway: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oidc_scopes`<sup>Required</sup> <a name="oidc_scopes" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopes"></a>

```python
oidc_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `role_type`<sup>Required</sup> <a name="role_type" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleType"></a>

```python
role_type: str
```

- *Type:* str

---

##### `token_bound_cidrs`<sup>Required</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl`<sup>Required</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl`<sup>Required</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy`<sup>Required</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_num_uses`<sup>Required</sup> <a name="token_num_uses" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period`<sup>Required</sup> <a name="token_period" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies`<sup>Required</sup> <a name="token_policies" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `user_claim`<sup>Required</sup> <a name="user_claim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaim"></a>

```python
user_claim: str
```

- *Type:* str

---

##### `user_claim_json_pointer`<sup>Required</sup> <a name="user_claim_json_pointer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointer"></a>

```python
user_claim_json_pointer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `verbose_oidc_logging`<sup>Required</sup> <a name="verbose_oidc_logging" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLogging"></a>

```python
verbose_oidc_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### JwtAuthBackendRoleConfig <a name="JwtAuthBackendRoleConfig" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import jwt_auth_backend_role

jwtAuthBackendRole.JwtAuthBackendRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_name: str,
  user_claim: str,
  allowed_redirect_uris: typing.List[str] = None,
  backend: str = None,
  bound_audiences: typing.List[str] = None,
  bound_claims: typing.Mapping[str] = None,
  bound_claims_type: str = None,
  bound_subject: str = None,
  claim_mappings: typing.Mapping[str] = None,
  clock_skew_leeway: typing.Union[int, float] = None,
  disable_bound_claims_parsing: typing.Union[bool, IResolvable] = None,
  expiration_leeway: typing.Union[int, float] = None,
  groups_claim: str = None,
  id: str = None,
  max_age: typing.Union[int, float] = None,
  namespace: str = None,
  not_before_leeway: typing.Union[int, float] = None,
  oidc_scopes: typing.List[str] = None,
  role_type: str = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: typing.Union[bool, IResolvable] = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None,
  user_claim_json_pointer: typing.Union[bool, IResolvable] = None,
  verbose_oidc_logging: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleName">role_name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaim">user_claim</a></code> | <code>str</code> | The claim to use to uniquely identify the user; |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.allowedRedirectUris">allowed_redirect_uris</a></code> | <code>typing.List[str]</code> | The list of allowed values for redirect_uri during OIDC logins. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundAudiences">bound_audiences</a></code> | <code>typing.List[str]</code> | List of aud claims to match against. Any match is sufficient. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaims">bound_claims</a></code> | <code>typing.Mapping[str]</code> | Map of claims/values to match against. The expected value may be a single string or a comma-separated string list. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaimsType">bound_claims_type</a></code> | <code>str</code> | How to interpret values in the claims/values map: can be either "string" (exact match) or "glob" (wildcard match). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundSubject">bound_subject</a></code> | <code>str</code> | If set, requires that the sub claim matches this value. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.claimMappings">claim_mappings</a></code> | <code>typing.Mapping[str]</code> | Map of claims (keys) to be copied to specified metadata fields (values). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.clockSkewLeeway">clock_skew_leeway</a></code> | <code>typing.Union[int, float]</code> | The amount of leeway to add to all claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.disableBoundClaimsParsing">disable_bound_claims_parsing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable bound claim value parsing. Useful when values contain commas. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.expirationLeeway">expiration_leeway</a></code> | <code>typing.Union[int, float]</code> | The amount of leeway to add to expiration (exp) claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.groupsClaim">groups_claim</a></code> | <code>str</code> | The claim to use to uniquely identify the set of groups to which the user belongs; |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#id JwtAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | Specifies the allowable elapsed time in seconds since the last time the user was actively authenticated. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.notBeforeLeeway">not_before_leeway</a></code> | <code>typing.Union[int, float]</code> | The amount of leeway to add to not before (nbf) claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.oidcScopes">oidc_scopes</a></code> | <code>typing.List[str]</code> | List of OIDC scopes to be used with an OIDC role. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleType">role_type</a></code> | <code>str</code> | Type of role, either "oidc" (default) or "jwt". |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaimJsonPointer">user_claim_json_pointer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the user_claim value uses JSON pointer syntax for referencing claims. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.verboseOidcLogging">verbose_oidc_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Log received OIDC tokens and claims when debug-level logging is active. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#role_name JwtAuthBackendRole#role_name}

---

##### `user_claim`<sup>Required</sup> <a name="user_claim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaim"></a>

```python
user_claim: str
```

- *Type:* str

The claim to use to uniquely identify the user;

this will be used as the name for the Identity entity alias created due to a successful login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#user_claim JwtAuthBackendRole#user_claim}

---

##### `allowed_redirect_uris`<sup>Optional</sup> <a name="allowed_redirect_uris" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.allowedRedirectUris"></a>

```python
allowed_redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

The list of allowed values for redirect_uri during OIDC logins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#allowed_redirect_uris JwtAuthBackendRole#allowed_redirect_uris}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#backend JwtAuthBackendRole#backend}

---

##### `bound_audiences`<sup>Optional</sup> <a name="bound_audiences" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundAudiences"></a>

```python
bound_audiences: typing.List[str]
```

- *Type:* typing.List[str]

List of aud claims to match against. Any match is sufficient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#bound_audiences JwtAuthBackendRole#bound_audiences}

---

##### `bound_claims`<sup>Optional</sup> <a name="bound_claims" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaims"></a>

```python
bound_claims: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of claims/values to match against. The expected value may be a single string or a comma-separated string list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#bound_claims JwtAuthBackendRole#bound_claims}

---

##### `bound_claims_type`<sup>Optional</sup> <a name="bound_claims_type" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaimsType"></a>

```python
bound_claims_type: str
```

- *Type:* str

How to interpret values in the claims/values map: can be either "string" (exact match) or "glob" (wildcard match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#bound_claims_type JwtAuthBackendRole#bound_claims_type}

---

##### `bound_subject`<sup>Optional</sup> <a name="bound_subject" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundSubject"></a>

```python
bound_subject: str
```

- *Type:* str

If set, requires that the sub claim matches this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#bound_subject JwtAuthBackendRole#bound_subject}

---

##### `claim_mappings`<sup>Optional</sup> <a name="claim_mappings" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.claimMappings"></a>

```python
claim_mappings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of claims (keys) to be copied to specified metadata fields (values).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#claim_mappings JwtAuthBackendRole#claim_mappings}

---

##### `clock_skew_leeway`<sup>Optional</sup> <a name="clock_skew_leeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.clockSkewLeeway"></a>

```python
clock_skew_leeway: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of leeway to add to all claims to account for clock skew, in seconds.

Defaults to 60 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#clock_skew_leeway JwtAuthBackendRole#clock_skew_leeway}

---

##### `disable_bound_claims_parsing`<sup>Optional</sup> <a name="disable_bound_claims_parsing" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.disableBoundClaimsParsing"></a>

```python
disable_bound_claims_parsing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable bound claim value parsing. Useful when values contain commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#disable_bound_claims_parsing JwtAuthBackendRole#disable_bound_claims_parsing}

---

##### `expiration_leeway`<sup>Optional</sup> <a name="expiration_leeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.expirationLeeway"></a>

```python
expiration_leeway: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of leeway to add to expiration (exp) claims to account for clock skew, in seconds.

Defaults to 150 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#expiration_leeway JwtAuthBackendRole#expiration_leeway}

---

##### `groups_claim`<sup>Optional</sup> <a name="groups_claim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.groupsClaim"></a>

```python
groups_claim: str
```

- *Type:* str

The claim to use to uniquely identify the set of groups to which the user belongs;

this will be used as the names for the Identity group aliases created due to a successful login. The claim value must be a list of strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#groups_claim JwtAuthBackendRole#groups_claim}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#id JwtAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the allowable elapsed time in seconds since the last time the user was actively authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#max_age JwtAuthBackendRole#max_age}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#namespace JwtAuthBackendRole#namespace}

---

##### `not_before_leeway`<sup>Optional</sup> <a name="not_before_leeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.notBeforeLeeway"></a>

```python
not_before_leeway: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of leeway to add to not before (nbf) claims to account for clock skew, in seconds.

Defaults to 150 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#not_before_leeway JwtAuthBackendRole#not_before_leeway}

---

##### `oidc_scopes`<sup>Optional</sup> <a name="oidc_scopes" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.oidcScopes"></a>

```python
oidc_scopes: typing.List[str]
```

- *Type:* typing.List[str]

List of OIDC scopes to be used with an OIDC role.

The standard scope "openid" is automatically included and need not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#oidc_scopes JwtAuthBackendRole#oidc_scopes}

---

##### `role_type`<sup>Optional</sup> <a name="role_type" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleType"></a>

```python
role_type: str
```

- *Type:* str

Type of role, either "oidc" (default) or "jwt".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#role_type JwtAuthBackendRole#role_type}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_bound_cidrs JwtAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_explicit_max_ttl JwtAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_max_ttl JwtAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_no_default_policy JwtAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_num_uses JwtAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_period JwtAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_policies JwtAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_ttl JwtAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#token_type JwtAuthBackendRole#token_type}

---

##### `user_claim_json_pointer`<sup>Optional</sup> <a name="user_claim_json_pointer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaimJsonPointer"></a>

```python
user_claim_json_pointer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the user_claim value uses JSON pointer syntax for referencing claims.

By default, the user_claim value will not use JSON pointer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#user_claim_json_pointer JwtAuthBackendRole#user_claim_json_pointer}

---

##### `verbose_oidc_logging`<sup>Optional</sup> <a name="verbose_oidc_logging" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.verboseOidcLogging"></a>

```python
verbose_oidc_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Log received OIDC tokens and claims when debug-level logging is active.

Not recommended in production since sensitive information may be present in OIDC responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend_role#verbose_oidc_logging JwtAuthBackendRole#verbose_oidc_logging}

---



