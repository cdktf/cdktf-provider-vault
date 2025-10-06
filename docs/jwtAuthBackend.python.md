# `jwtAuthBackend` Submodule <a name="`jwtAuthBackend` Submodule" id="@cdktf/provider-vault.jwtAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JwtAuthBackend <a name="JwtAuthBackend" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend vault_jwt_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import jwt_auth_backend

jwtAuthBackend.JwtAuthBackend(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bound_issuer: str = None,
  default_role: str = None,
  description: str = None,
  disable_remount: bool | IResolvable = None,
  id: str = None,
  jwks_ca_pem: str = None,
  jwks_pairs: IResolvable | typing.List[typing.Mapping[str]] = None,
  jwks_url: str = None,
  jwt_supported_algs: typing.List[str] = None,
  jwt_validation_pubkeys: typing.List[str] = None,
  local: bool | IResolvable = None,
  namespace: str = None,
  namespace_in_state: bool | IResolvable = None,
  oidc_client_id: str = None,
  oidc_client_secret: str = None,
  oidc_discovery_ca_pem: str = None,
  oidc_discovery_url: str = None,
  oidc_response_mode: str = None,
  oidc_response_types: typing.List[str] = None,
  path: str = None,
  provider_config: typing.Mapping[str] = None,
  tune: IResolvable | typing.List[JwtAuthBackendTune] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.boundIssuer">bound_issuer</a></code> | <code>str</code> | The value against which to match the iss claim in a JWT. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.defaultRole">default_role</a></code> | <code>str</code> | The default role to use if none is provided during login. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the auth backend. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.disableRemount">disable_remount</a></code> | <code>bool \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#id JwtAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwksCaPem">jwks_ca_pem</a></code> | <code>str</code> | The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwksPairs">jwks_pairs</a></code> | <code>cdktf.IResolvable \| typing.List[typing.Mapping[str]]</code> | List of JWKS URL and optional CA certificate pairs. Cannot be used with 'jwks_url' or 'jwks_ca_pem'. Requires Vault 1.16+. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwksUrl">jwks_url</a></code> | <code>str</code> | JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwtSupportedAlgs">jwt_supported_algs</a></code> | <code>typing.List[str]</code> | A list of supported signing algorithms. Defaults to [RS256]. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwtValidationPubkeys">jwt_validation_pubkeys</a></code> | <code>typing.List[str]</code> | A list of PEM-encoded public keys to use to authenticate signatures locally. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.local">local</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.namespaceInState">namespace_in_state</a></code> | <code>bool \| cdktf.IResolvable</code> | Pass namespace in the OIDC state parameter instead of as a separate query parameter. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcClientId">oidc_client_id</a></code> | <code>str</code> | Client ID used for OIDC. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcClientSecret">oidc_client_secret</a></code> | <code>str</code> | Client Secret used for OIDC. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcDiscoveryCaPem">oidc_discovery_ca_pem</a></code> | <code>str</code> | The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcDiscoveryUrl">oidc_discovery_url</a></code> | <code>str</code> | The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or 'jwt_validation_pubkeys'. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcResponseMode">oidc_response_mode</a></code> | <code>str</code> | The response mode to be used in the OAuth2 request. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcResponseTypes">oidc_response_types</a></code> | <code>typing.List[str]</code> | The response types to request. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.path">path</a></code> | <code>str</code> | path to mount the backend. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.providerConfig">provider_config</a></code> | <code>typing.Mapping[str]</code> | Provider specific handling configuration. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.tune">tune</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#tune JwtAuthBackend#tune}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.type">type</a></code> | <code>str</code> | Type of backend. Can be either 'jwt' or 'oidc'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `bound_issuer`<sup>Optional</sup> <a name="bound_issuer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.boundIssuer"></a>

- *Type:* str

The value against which to match the iss claim in a JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#bound_issuer JwtAuthBackend#bound_issuer}

---

##### `default_role`<sup>Optional</sup> <a name="default_role" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.defaultRole"></a>

- *Type:* str

The default role to use if none is provided during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#default_role JwtAuthBackend#default_role}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.description"></a>

- *Type:* str

The description of the auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#description JwtAuthBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.disableRemount"></a>

- *Type:* bool | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#disable_remount JwtAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#id JwtAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jwks_ca_pem`<sup>Optional</sup> <a name="jwks_ca_pem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwksCaPem"></a>

- *Type:* str

The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL.

If not set, system certificates are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#jwks_ca_pem JwtAuthBackend#jwks_ca_pem}

---

##### `jwks_pairs`<sup>Optional</sup> <a name="jwks_pairs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwksPairs"></a>

- *Type:* cdktf.IResolvable | typing.List[typing.Mapping[str]]

List of JWKS URL and optional CA certificate pairs. Cannot be used with 'jwks_url' or 'jwks_ca_pem'. Requires Vault 1.16+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#jwks_pairs JwtAuthBackend#jwks_pairs}

---

##### `jwks_url`<sup>Optional</sup> <a name="jwks_url" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwksUrl"></a>

- *Type:* str

JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#jwks_url JwtAuthBackend#jwks_url}

---

##### `jwt_supported_algs`<sup>Optional</sup> <a name="jwt_supported_algs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwtSupportedAlgs"></a>

- *Type:* typing.List[str]

A list of supported signing algorithms. Defaults to [RS256].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#jwt_supported_algs JwtAuthBackend#jwt_supported_algs}

---

##### `jwt_validation_pubkeys`<sup>Optional</sup> <a name="jwt_validation_pubkeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwtValidationPubkeys"></a>

- *Type:* typing.List[str]

A list of PEM-encoded public keys to use to authenticate signatures locally.

Cannot be used with 'jwks_url' or 'oidc_discovery_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#jwt_validation_pubkeys JwtAuthBackend#jwt_validation_pubkeys}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.local"></a>

- *Type:* bool | cdktf.IResolvable

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#local JwtAuthBackend#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#namespace JwtAuthBackend#namespace}

---

##### `namespace_in_state`<sup>Optional</sup> <a name="namespace_in_state" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.namespaceInState"></a>

- *Type:* bool | cdktf.IResolvable

Pass namespace in the OIDC state parameter instead of as a separate query parameter.

With this setting, the allowed redirect URL(s) in Vault and on the provider side should not contain a namespace query parameter. This means only one redirect URL entry needs to be maintained on the OIDC provider side for all vault namespaces that will be authenticating against it. Defaults to true for new configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#namespace_in_state JwtAuthBackend#namespace_in_state}

---

##### `oidc_client_id`<sup>Optional</sup> <a name="oidc_client_id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcClientId"></a>

- *Type:* str

Client ID used for OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#oidc_client_id JwtAuthBackend#oidc_client_id}

---

##### `oidc_client_secret`<sup>Optional</sup> <a name="oidc_client_secret" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcClientSecret"></a>

- *Type:* str

Client Secret used for OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#oidc_client_secret JwtAuthBackend#oidc_client_secret}

---

##### `oidc_discovery_ca_pem`<sup>Optional</sup> <a name="oidc_discovery_ca_pem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcDiscoveryCaPem"></a>

- *Type:* str

The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL.

If not set, system certificates are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#oidc_discovery_ca_pem JwtAuthBackend#oidc_discovery_ca_pem}

---

##### `oidc_discovery_url`<sup>Optional</sup> <a name="oidc_discovery_url" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcDiscoveryUrl"></a>

- *Type:* str

The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or 'jwt_validation_pubkeys'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#oidc_discovery_url JwtAuthBackend#oidc_discovery_url}

---

##### `oidc_response_mode`<sup>Optional</sup> <a name="oidc_response_mode" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcResponseMode"></a>

- *Type:* str

The response mode to be used in the OAuth2 request.

Allowed values are 'query' and 'form_post'. Defaults to 'query'. If using Vault namespaces, and oidc_response_mode is 'form_post', then 'namespace_in_state' should be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#oidc_response_mode JwtAuthBackend#oidc_response_mode}

---

##### `oidc_response_types`<sup>Optional</sup> <a name="oidc_response_types" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcResponseTypes"></a>

- *Type:* typing.List[str]

The response types to request.

Allowed values are 'code' and 'id_token'. Defaults to 'code'. Note: 'id_token' may only be used if 'oidc_response_mode' is set to 'form_post'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#oidc_response_types JwtAuthBackend#oidc_response_types}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.path"></a>

- *Type:* str

path to mount the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#path JwtAuthBackend#path}

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.providerConfig"></a>

- *Type:* typing.Mapping[str]

Provider specific handling configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#provider_config JwtAuthBackend#provider_config}

---

##### `tune`<sup>Optional</sup> <a name="tune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.tune"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#tune JwtAuthBackend#tune}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.type"></a>

- *Type:* str

Type of backend. Can be either 'jwt' or 'oidc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#type JwtAuthBackend#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.putTune">put_tune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetBoundIssuer">reset_bound_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDefaultRole">reset_default_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDisableRemount">reset_disable_remount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksCaPem">reset_jwks_ca_pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksPairs">reset_jwks_pairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksUrl">reset_jwks_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtSupportedAlgs">reset_jwt_supported_algs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtValidationPubkeys">reset_jwt_validation_pubkeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetLocal">reset_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespaceInState">reset_namespace_in_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientId">reset_oidc_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientSecret">reset_oidc_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryCaPem">reset_oidc_discovery_ca_pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryUrl">reset_oidc_discovery_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseMode">reset_oidc_response_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseTypes">reset_oidc_response_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetTune">reset_tune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tune` <a name="put_tune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.putTune"></a>

```python
def put_tune(
  value: IResolvable | typing.List[JwtAuthBackendTune]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.putTune.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>]

---

##### `reset_bound_issuer` <a name="reset_bound_issuer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetBoundIssuer"></a>

```python
def reset_bound_issuer() -> None
```

##### `reset_default_role` <a name="reset_default_role" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDefaultRole"></a>

```python
def reset_default_role() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_remount` <a name="reset_disable_remount" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDisableRemount"></a>

```python
def reset_disable_remount() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_jwks_ca_pem` <a name="reset_jwks_ca_pem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksCaPem"></a>

```python
def reset_jwks_ca_pem() -> None
```

##### `reset_jwks_pairs` <a name="reset_jwks_pairs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksPairs"></a>

```python
def reset_jwks_pairs() -> None
```

##### `reset_jwks_url` <a name="reset_jwks_url" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksUrl"></a>

```python
def reset_jwks_url() -> None
```

##### `reset_jwt_supported_algs` <a name="reset_jwt_supported_algs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtSupportedAlgs"></a>

```python
def reset_jwt_supported_algs() -> None
```

##### `reset_jwt_validation_pubkeys` <a name="reset_jwt_validation_pubkeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtValidationPubkeys"></a>

```python
def reset_jwt_validation_pubkeys() -> None
```

##### `reset_local` <a name="reset_local" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetLocal"></a>

```python
def reset_local() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_namespace_in_state` <a name="reset_namespace_in_state" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespaceInState"></a>

```python
def reset_namespace_in_state() -> None
```

##### `reset_oidc_client_id` <a name="reset_oidc_client_id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientId"></a>

```python
def reset_oidc_client_id() -> None
```

##### `reset_oidc_client_secret` <a name="reset_oidc_client_secret" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientSecret"></a>

```python
def reset_oidc_client_secret() -> None
```

##### `reset_oidc_discovery_ca_pem` <a name="reset_oidc_discovery_ca_pem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryCaPem"></a>

```python
def reset_oidc_discovery_ca_pem() -> None
```

##### `reset_oidc_discovery_url` <a name="reset_oidc_discovery_url" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryUrl"></a>

```python
def reset_oidc_discovery_url() -> None
```

##### `reset_oidc_response_mode` <a name="reset_oidc_response_mode" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseMode"></a>

```python
def reset_oidc_response_mode() -> None
```

##### `reset_oidc_response_types` <a name="reset_oidc_response_types" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseTypes"></a>

```python
def reset_oidc_response_types() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_tune` <a name="reset_tune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetTune"></a>

```python
def reset_tune() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a JwtAuthBackend resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import jwt_auth_backend

jwtAuthBackend.JwtAuthBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import jwt_auth_backend

jwtAuthBackend.JwtAuthBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import jwt_auth_backend

jwtAuthBackend.JwtAuthBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import jwt_auth_backend

jwtAuthBackend.JwtAuthBackend.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a JwtAuthBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the JwtAuthBackend to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing JwtAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the JwtAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tune">tune</a></code> | <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList">JwtAuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuerInput">bound_issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRoleInput">default_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemountInput">disable_remount_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPemInput">jwks_ca_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksPairsInput">jwks_pairs_input</a></code> | <code>cdktf.IResolvable \| typing.List[typing.Mapping[str]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrlInput">jwks_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgsInput">jwt_supported_algs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeysInput">jwt_validation_pubkeys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.localInput">local_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInStateInput">namespace_in_state_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientIdInput">oidc_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretInput">oidc_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPemInput">oidc_discovery_ca_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrlInput">oidc_discovery_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseModeInput">oidc_response_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypesInput">oidc_response_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfigInput">provider_config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tuneInput">tune_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuer">bound_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRole">default_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemount">disable_remount</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPem">jwks_ca_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksPairs">jwks_pairs</a></code> | <code>cdktf.IResolvable \| typing.List[typing.Mapping[str]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrl">jwks_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgs">jwt_supported_algs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeys">jwt_validation_pubkeys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.local">local</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInState">namespace_in_state</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientId">oidc_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecret">oidc_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPem">oidc_discovery_ca_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrl">oidc_discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseMode">oidc_response_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypes">oidc_response_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfig">provider_config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `tune`<sup>Required</sup> <a name="tune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tune"></a>

```python
tune: JwtAuthBackendTuneList
```

- *Type:* <a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList">JwtAuthBackendTuneList</a>

---

##### `bound_issuer_input`<sup>Optional</sup> <a name="bound_issuer_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuerInput"></a>

```python
bound_issuer_input: str
```

- *Type:* str

---

##### `default_role_input`<sup>Optional</sup> <a name="default_role_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRoleInput"></a>

```python
default_role_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_remount_input`<sup>Optional</sup> <a name="disable_remount_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemountInput"></a>

```python
disable_remount_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `jwks_ca_pem_input`<sup>Optional</sup> <a name="jwks_ca_pem_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPemInput"></a>

```python
jwks_ca_pem_input: str
```

- *Type:* str

---

##### `jwks_pairs_input`<sup>Optional</sup> <a name="jwks_pairs_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksPairsInput"></a>

```python
jwks_pairs_input: IResolvable | typing.List[typing.Mapping[str]]
```

- *Type:* cdktf.IResolvable | typing.List[typing.Mapping[str]]

---

##### `jwks_url_input`<sup>Optional</sup> <a name="jwks_url_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrlInput"></a>

```python
jwks_url_input: str
```

- *Type:* str

---

##### `jwt_supported_algs_input`<sup>Optional</sup> <a name="jwt_supported_algs_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgsInput"></a>

```python
jwt_supported_algs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jwt_validation_pubkeys_input`<sup>Optional</sup> <a name="jwt_validation_pubkeys_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeysInput"></a>

```python
jwt_validation_pubkeys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_input`<sup>Optional</sup> <a name="local_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.localInput"></a>

```python
local_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `namespace_in_state_input`<sup>Optional</sup> <a name="namespace_in_state_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInStateInput"></a>

```python
namespace_in_state_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `oidc_client_id_input`<sup>Optional</sup> <a name="oidc_client_id_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientIdInput"></a>

```python
oidc_client_id_input: str
```

- *Type:* str

---

##### `oidc_client_secret_input`<sup>Optional</sup> <a name="oidc_client_secret_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretInput"></a>

```python
oidc_client_secret_input: str
```

- *Type:* str

---

##### `oidc_discovery_ca_pem_input`<sup>Optional</sup> <a name="oidc_discovery_ca_pem_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPemInput"></a>

```python
oidc_discovery_ca_pem_input: str
```

- *Type:* str

---

##### `oidc_discovery_url_input`<sup>Optional</sup> <a name="oidc_discovery_url_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrlInput"></a>

```python
oidc_discovery_url_input: str
```

- *Type:* str

---

##### `oidc_response_mode_input`<sup>Optional</sup> <a name="oidc_response_mode_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseModeInput"></a>

```python
oidc_response_mode_input: str
```

- *Type:* str

---

##### `oidc_response_types_input`<sup>Optional</sup> <a name="oidc_response_types_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypesInput"></a>

```python
oidc_response_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfigInput"></a>

```python
provider_config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tune_input`<sup>Optional</sup> <a name="tune_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tuneInput"></a>

```python
tune_input: IResolvable | typing.List[JwtAuthBackendTune]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `bound_issuer`<sup>Required</sup> <a name="bound_issuer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuer"></a>

```python
bound_issuer: str
```

- *Type:* str

---

##### `default_role`<sup>Required</sup> <a name="default_role" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRole"></a>

```python
default_role: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_remount`<sup>Required</sup> <a name="disable_remount" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemount"></a>

```python
disable_remount: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `jwks_ca_pem`<sup>Required</sup> <a name="jwks_ca_pem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPem"></a>

```python
jwks_ca_pem: str
```

- *Type:* str

---

##### `jwks_pairs`<sup>Required</sup> <a name="jwks_pairs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksPairs"></a>

```python
jwks_pairs: IResolvable | typing.List[typing.Mapping[str]]
```

- *Type:* cdktf.IResolvable | typing.List[typing.Mapping[str]]

---

##### `jwks_url`<sup>Required</sup> <a name="jwks_url" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrl"></a>

```python
jwks_url: str
```

- *Type:* str

---

##### `jwt_supported_algs`<sup>Required</sup> <a name="jwt_supported_algs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgs"></a>

```python
jwt_supported_algs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jwt_validation_pubkeys`<sup>Required</sup> <a name="jwt_validation_pubkeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeys"></a>

```python
jwt_validation_pubkeys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.local"></a>

```python
local: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `namespace_in_state`<sup>Required</sup> <a name="namespace_in_state" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInState"></a>

```python
namespace_in_state: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `oidc_client_id`<sup>Required</sup> <a name="oidc_client_id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientId"></a>

```python
oidc_client_id: str
```

- *Type:* str

---

##### `oidc_client_secret`<sup>Required</sup> <a name="oidc_client_secret" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecret"></a>

```python
oidc_client_secret: str
```

- *Type:* str

---

##### `oidc_discovery_ca_pem`<sup>Required</sup> <a name="oidc_discovery_ca_pem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPem"></a>

```python
oidc_discovery_ca_pem: str
```

- *Type:* str

---

##### `oidc_discovery_url`<sup>Required</sup> <a name="oidc_discovery_url" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrl"></a>

```python
oidc_discovery_url: str
```

- *Type:* str

---

##### `oidc_response_mode`<sup>Required</sup> <a name="oidc_response_mode" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseMode"></a>

```python
oidc_response_mode: str
```

- *Type:* str

---

##### `oidc_response_types`<sup>Required</sup> <a name="oidc_response_types" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypes"></a>

```python
oidc_response_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfig"></a>

```python
provider_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### JwtAuthBackendConfig <a name="JwtAuthBackendConfig" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import jwt_auth_backend

jwtAuthBackend.JwtAuthBackendConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bound_issuer: str = None,
  default_role: str = None,
  description: str = None,
  disable_remount: bool | IResolvable = None,
  id: str = None,
  jwks_ca_pem: str = None,
  jwks_pairs: IResolvable | typing.List[typing.Mapping[str]] = None,
  jwks_url: str = None,
  jwt_supported_algs: typing.List[str] = None,
  jwt_validation_pubkeys: typing.List[str] = None,
  local: bool | IResolvable = None,
  namespace: str = None,
  namespace_in_state: bool | IResolvable = None,
  oidc_client_id: str = None,
  oidc_client_secret: str = None,
  oidc_discovery_ca_pem: str = None,
  oidc_discovery_url: str = None,
  oidc_response_mode: str = None,
  oidc_response_types: typing.List[str] = None,
  path: str = None,
  provider_config: typing.Mapping[str] = None,
  tune: IResolvable | typing.List[JwtAuthBackendTune] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.boundIssuer">bound_issuer</a></code> | <code>str</code> | The value against which to match the iss claim in a JWT. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.defaultRole">default_role</a></code> | <code>str</code> | The default role to use if none is provided during login. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.description">description</a></code> | <code>str</code> | The description of the auth backend. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.disableRemount">disable_remount</a></code> | <code>bool \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#id JwtAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksCaPem">jwks_ca_pem</a></code> | <code>str</code> | The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksPairs">jwks_pairs</a></code> | <code>cdktf.IResolvable \| typing.List[typing.Mapping[str]]</code> | List of JWKS URL and optional CA certificate pairs. Cannot be used with 'jwks_url' or 'jwks_ca_pem'. Requires Vault 1.16+. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksUrl">jwks_url</a></code> | <code>str</code> | JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtSupportedAlgs">jwt_supported_algs</a></code> | <code>typing.List[str]</code> | A list of supported signing algorithms. Defaults to [RS256]. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtValidationPubkeys">jwt_validation_pubkeys</a></code> | <code>typing.List[str]</code> | A list of PEM-encoded public keys to use to authenticate signatures locally. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.local">local</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespaceInState">namespace_in_state</a></code> | <code>bool \| cdktf.IResolvable</code> | Pass namespace in the OIDC state parameter instead of as a separate query parameter. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientId">oidc_client_id</a></code> | <code>str</code> | Client ID used for OIDC. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientSecret">oidc_client_secret</a></code> | <code>str</code> | Client Secret used for OIDC. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryCaPem">oidc_discovery_ca_pem</a></code> | <code>str</code> | The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryUrl">oidc_discovery_url</a></code> | <code>str</code> | The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or 'jwt_validation_pubkeys'. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseMode">oidc_response_mode</a></code> | <code>str</code> | The response mode to be used in the OAuth2 request. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseTypes">oidc_response_types</a></code> | <code>typing.List[str]</code> | The response types to request. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.path">path</a></code> | <code>str</code> | path to mount the backend. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.providerConfig">provider_config</a></code> | <code>typing.Mapping[str]</code> | Provider specific handling configuration. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.tune">tune</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#tune JwtAuthBackend#tune}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.type">type</a></code> | <code>str</code> | Type of backend. Can be either 'jwt' or 'oidc'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `bound_issuer`<sup>Optional</sup> <a name="bound_issuer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.boundIssuer"></a>

```python
bound_issuer: str
```

- *Type:* str

The value against which to match the iss claim in a JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#bound_issuer JwtAuthBackend#bound_issuer}

---

##### `default_role`<sup>Optional</sup> <a name="default_role" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.defaultRole"></a>

```python
default_role: str
```

- *Type:* str

The default role to use if none is provided during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#default_role JwtAuthBackend#default_role}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#description JwtAuthBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.disableRemount"></a>

```python
disable_remount: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#disable_remount JwtAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#id JwtAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jwks_ca_pem`<sup>Optional</sup> <a name="jwks_ca_pem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksCaPem"></a>

```python
jwks_ca_pem: str
```

- *Type:* str

The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL.

If not set, system certificates are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#jwks_ca_pem JwtAuthBackend#jwks_ca_pem}

---

##### `jwks_pairs`<sup>Optional</sup> <a name="jwks_pairs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksPairs"></a>

```python
jwks_pairs: IResolvable | typing.List[typing.Mapping[str]]
```

- *Type:* cdktf.IResolvable | typing.List[typing.Mapping[str]]

List of JWKS URL and optional CA certificate pairs. Cannot be used with 'jwks_url' or 'jwks_ca_pem'. Requires Vault 1.16+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#jwks_pairs JwtAuthBackend#jwks_pairs}

---

##### `jwks_url`<sup>Optional</sup> <a name="jwks_url" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksUrl"></a>

```python
jwks_url: str
```

- *Type:* str

JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#jwks_url JwtAuthBackend#jwks_url}

---

##### `jwt_supported_algs`<sup>Optional</sup> <a name="jwt_supported_algs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtSupportedAlgs"></a>

```python
jwt_supported_algs: typing.List[str]
```

- *Type:* typing.List[str]

A list of supported signing algorithms. Defaults to [RS256].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#jwt_supported_algs JwtAuthBackend#jwt_supported_algs}

---

##### `jwt_validation_pubkeys`<sup>Optional</sup> <a name="jwt_validation_pubkeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtValidationPubkeys"></a>

```python
jwt_validation_pubkeys: typing.List[str]
```

- *Type:* typing.List[str]

A list of PEM-encoded public keys to use to authenticate signatures locally.

Cannot be used with 'jwks_url' or 'oidc_discovery_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#jwt_validation_pubkeys JwtAuthBackend#jwt_validation_pubkeys}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.local"></a>

```python
local: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#local JwtAuthBackend#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#namespace JwtAuthBackend#namespace}

---

##### `namespace_in_state`<sup>Optional</sup> <a name="namespace_in_state" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespaceInState"></a>

```python
namespace_in_state: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Pass namespace in the OIDC state parameter instead of as a separate query parameter.

With this setting, the allowed redirect URL(s) in Vault and on the provider side should not contain a namespace query parameter. This means only one redirect URL entry needs to be maintained on the OIDC provider side for all vault namespaces that will be authenticating against it. Defaults to true for new configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#namespace_in_state JwtAuthBackend#namespace_in_state}

---

##### `oidc_client_id`<sup>Optional</sup> <a name="oidc_client_id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientId"></a>

```python
oidc_client_id: str
```

- *Type:* str

Client ID used for OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#oidc_client_id JwtAuthBackend#oidc_client_id}

---

##### `oidc_client_secret`<sup>Optional</sup> <a name="oidc_client_secret" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientSecret"></a>

```python
oidc_client_secret: str
```

- *Type:* str

Client Secret used for OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#oidc_client_secret JwtAuthBackend#oidc_client_secret}

---

##### `oidc_discovery_ca_pem`<sup>Optional</sup> <a name="oidc_discovery_ca_pem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryCaPem"></a>

```python
oidc_discovery_ca_pem: str
```

- *Type:* str

The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL.

If not set, system certificates are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#oidc_discovery_ca_pem JwtAuthBackend#oidc_discovery_ca_pem}

---

##### `oidc_discovery_url`<sup>Optional</sup> <a name="oidc_discovery_url" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryUrl"></a>

```python
oidc_discovery_url: str
```

- *Type:* str

The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or 'jwt_validation_pubkeys'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#oidc_discovery_url JwtAuthBackend#oidc_discovery_url}

---

##### `oidc_response_mode`<sup>Optional</sup> <a name="oidc_response_mode" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseMode"></a>

```python
oidc_response_mode: str
```

- *Type:* str

The response mode to be used in the OAuth2 request.

Allowed values are 'query' and 'form_post'. Defaults to 'query'. If using Vault namespaces, and oidc_response_mode is 'form_post', then 'namespace_in_state' should be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#oidc_response_mode JwtAuthBackend#oidc_response_mode}

---

##### `oidc_response_types`<sup>Optional</sup> <a name="oidc_response_types" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseTypes"></a>

```python
oidc_response_types: typing.List[str]
```

- *Type:* typing.List[str]

The response types to request.

Allowed values are 'code' and 'id_token'. Defaults to 'code'. Note: 'id_token' may only be used if 'oidc_response_mode' is set to 'form_post'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#oidc_response_types JwtAuthBackend#oidc_response_types}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.path"></a>

```python
path: str
```

- *Type:* str

path to mount the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#path JwtAuthBackend#path}

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.providerConfig"></a>

```python
provider_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Provider specific handling configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#provider_config JwtAuthBackend#provider_config}

---

##### `tune`<sup>Optional</sup> <a name="tune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.tune"></a>

```python
tune: IResolvable | typing.List[JwtAuthBackendTune]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#tune JwtAuthBackend#tune}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of backend. Can be either 'jwt' or 'oidc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#type JwtAuthBackend#type}

---

### JwtAuthBackendTune <a name="JwtAuthBackendTune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import jwt_auth_backend

jwtAuthBackend.JwtAuthBackendTune(
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
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#allowed_response_headers JwtAuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#audit_non_hmac_request_keys JwtAuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#audit_non_hmac_response_keys JwtAuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.defaultLeaseTtl">default_lease_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#default_lease_ttl JwtAuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.listingVisibility">listing_visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#listing_visibility JwtAuthBackend#listing_visibility}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.maxLeaseTtl">max_lease_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#max_lease_ttl JwtAuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#passthrough_request_headers JwtAuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.tokenType">token_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#token_type JwtAuthBackend#token_type}. |

---

##### `allowed_response_headers`<sup>Optional</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.allowedResponseHeaders"></a>

```python
allowed_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#allowed_response_headers JwtAuthBackend#allowed_response_headers}.

---

##### `audit_non_hmac_request_keys`<sup>Optional</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#audit_non_hmac_request_keys JwtAuthBackend#audit_non_hmac_request_keys}.

---

##### `audit_non_hmac_response_keys`<sup>Optional</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#audit_non_hmac_response_keys JwtAuthBackend#audit_non_hmac_response_keys}.

---

##### `default_lease_ttl`<sup>Optional</sup> <a name="default_lease_ttl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.defaultLeaseTtl"></a>

```python
default_lease_ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#default_lease_ttl JwtAuthBackend#default_lease_ttl}.

---

##### `listing_visibility`<sup>Optional</sup> <a name="listing_visibility" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.listingVisibility"></a>

```python
listing_visibility: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#listing_visibility JwtAuthBackend#listing_visibility}.

---

##### `max_lease_ttl`<sup>Optional</sup> <a name="max_lease_ttl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.maxLeaseTtl"></a>

```python
max_lease_ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#max_lease_ttl JwtAuthBackend#max_lease_ttl}.

---

##### `passthrough_request_headers`<sup>Optional</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.passthroughRequestHeaders"></a>

```python
passthrough_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#passthrough_request_headers JwtAuthBackend#passthrough_request_headers}.

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/jwt_auth_backend#token_type JwtAuthBackend#token_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### JwtAuthBackendTuneList <a name="JwtAuthBackendTuneList" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import jwt_auth_backend

jwtAuthBackend.JwtAuthBackendTuneList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> JwtAuthBackendTuneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[JwtAuthBackendTune]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>]

---


### JwtAuthBackendTuneOutputReference <a name="JwtAuthBackendTuneOutputReference" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import jwt_auth_backend

jwtAuthBackend.JwtAuthBackendTuneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAllowedResponseHeaders">reset_allowed_response_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">reset_audit_non_hmac_request_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">reset_audit_non_hmac_response_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetDefaultLeaseTtl">reset_default_lease_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetListingVisibility">reset_listing_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetMaxLeaseTtl">reset_max_lease_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetPassthroughRequestHeaders">reset_passthrough_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetTokenType">reset_token_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_response_headers` <a name="reset_allowed_response_headers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```python
def reset_allowed_response_headers() -> None
```

##### `reset_audit_non_hmac_request_keys` <a name="reset_audit_non_hmac_request_keys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```python
def reset_audit_non_hmac_request_keys() -> None
```

##### `reset_audit_non_hmac_response_keys` <a name="reset_audit_non_hmac_response_keys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```python
def reset_audit_non_hmac_response_keys() -> None
```

##### `reset_default_lease_ttl` <a name="reset_default_lease_ttl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```python
def reset_default_lease_ttl() -> None
```

##### `reset_listing_visibility` <a name="reset_listing_visibility" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetListingVisibility"></a>

```python
def reset_listing_visibility() -> None
```

##### `reset_max_lease_ttl` <a name="reset_max_lease_ttl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```python
def reset_max_lease_ttl() -> None
```

##### `reset_passthrough_request_headers` <a name="reset_passthrough_request_headers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```python
def reset_passthrough_request_headers() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetTokenType"></a>

```python
def reset_token_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeadersInput">allowed_response_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">audit_non_hmac_request_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">audit_non_hmac_response_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtlInput">default_lease_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibilityInput">listing_visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtlInput">max_lease_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">passthrough_request_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtl">default_lease_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibility">listing_visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtl">max_lease_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_response_headers_input`<sup>Optional</sup> <a name="allowed_response_headers_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```python
allowed_response_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_request_keys_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```python
audit_non_hmac_request_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_response_keys_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```python
audit_non_hmac_response_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_lease_ttl_input`<sup>Optional</sup> <a name="default_lease_ttl_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```python
default_lease_ttl_input: str
```

- *Type:* str

---

##### `listing_visibility_input`<sup>Optional</sup> <a name="listing_visibility_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```python
listing_visibility_input: str
```

- *Type:* str

---

##### `max_lease_ttl_input`<sup>Optional</sup> <a name="max_lease_ttl_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```python
max_lease_ttl_input: str
```

- *Type:* str

---

##### `passthrough_request_headers_input`<sup>Optional</sup> <a name="passthrough_request_headers_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```python
passthrough_request_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `allowed_response_headers`<sup>Required</sup> <a name="allowed_response_headers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```python
allowed_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys`<sup>Required</sup> <a name="audit_non_hmac_request_keys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys`<sup>Required</sup> <a name="audit_non_hmac_response_keys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_lease_ttl`<sup>Required</sup> <a name="default_lease_ttl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```python
default_lease_ttl: str
```

- *Type:* str

---

##### `listing_visibility`<sup>Required</sup> <a name="listing_visibility" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibility"></a>

```python
listing_visibility: str
```

- *Type:* str

---

##### `max_lease_ttl`<sup>Required</sup> <a name="max_lease_ttl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```python
max_lease_ttl: str
```

- *Type:* str

---

##### `passthrough_request_headers`<sup>Required</sup> <a name="passthrough_request_headers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```python
passthrough_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | JwtAuthBackendTune
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>

---



