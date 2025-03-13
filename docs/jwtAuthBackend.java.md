# `jwtAuthBackend` Submodule <a name="`jwtAuthBackend` Submodule" id="@cdktf/provider-vault.jwtAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JwtAuthBackend <a name="JwtAuthBackend" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend vault_jwt_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.jwt_auth_backend.JwtAuthBackend;

JwtAuthBackend.Builder.create(Construct scope, java.lang.String id)
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
//  .boundIssuer(java.lang.String)
//  .defaultRole(java.lang.String)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .id(java.lang.String)
//  .jwksCaPem(java.lang.String)
//  .jwksUrl(java.lang.String)
//  .jwtSupportedAlgs(java.util.List<java.lang.String>)
//  .jwtValidationPubkeys(java.util.List<java.lang.String>)
//  .local(java.lang.Boolean)
//  .local(IResolvable)
//  .namespace(java.lang.String)
//  .namespaceInState(java.lang.Boolean)
//  .namespaceInState(IResolvable)
//  .oidcClientId(java.lang.String)
//  .oidcClientSecret(java.lang.String)
//  .oidcDiscoveryCaPem(java.lang.String)
//  .oidcDiscoveryUrl(java.lang.String)
//  .oidcResponseMode(java.lang.String)
//  .oidcResponseTypes(java.util.List<java.lang.String>)
//  .path(java.lang.String)
//  .providerConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .tune(IResolvable)
//  .tune(java.util.List<JwtAuthBackendTune>)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.boundIssuer">boundIssuer</a></code> | <code>java.lang.String</code> | The value against which to match the iss claim in a JWT. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.defaultRole">defaultRole</a></code> | <code>java.lang.String</code> | The default role to use if none is provided during login. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the auth backend. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#id JwtAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwksCaPem">jwksCaPem</a></code> | <code>java.lang.String</code> | The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwksUrl">jwksUrl</a></code> | <code>java.lang.String</code> | JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwtSupportedAlgs">jwtSupportedAlgs</a></code> | <code>java.util.List<java.lang.String></code> | A list of supported signing algorithms. Defaults to [RS256]. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwtValidationPubkeys">jwtValidationPubkeys</a></code> | <code>java.util.List<java.lang.String></code> | A list of PEM-encoded public keys to use to authenticate signatures locally. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.namespaceInState">namespaceInState</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Pass namespace in the OIDC state parameter instead of as a separate query parameter. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcClientId">oidcClientId</a></code> | <code>java.lang.String</code> | Client ID used for OIDC. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcClientSecret">oidcClientSecret</a></code> | <code>java.lang.String</code> | Client Secret used for OIDC. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcDiscoveryCaPem">oidcDiscoveryCaPem</a></code> | <code>java.lang.String</code> | The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcDiscoveryUrl">oidcDiscoveryUrl</a></code> | <code>java.lang.String</code> | The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or 'jwt_validation_pubkeys'. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcResponseMode">oidcResponseMode</a></code> | <code>java.lang.String</code> | The response mode to be used in the OAuth2 request. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcResponseTypes">oidcResponseTypes</a></code> | <code>java.util.List<java.lang.String></code> | The response types to request. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | path to mount the backend. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.providerConfig">providerConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Provider specific handling configuration. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.tune">tune</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#tune JwtAuthBackend#tune}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Type of backend. Can be either 'jwt' or 'oidc'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `boundIssuer`<sup>Optional</sup> <a name="boundIssuer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.boundIssuer"></a>

- *Type:* java.lang.String

The value against which to match the iss claim in a JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#bound_issuer JwtAuthBackend#bound_issuer}

---

##### `defaultRole`<sup>Optional</sup> <a name="defaultRole" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.defaultRole"></a>

- *Type:* java.lang.String

The default role to use if none is provided during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#default_role JwtAuthBackend#default_role}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#description JwtAuthBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.disableRemount"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#disable_remount JwtAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#id JwtAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jwksCaPem`<sup>Optional</sup> <a name="jwksCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwksCaPem"></a>

- *Type:* java.lang.String

The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL.

If not set, system certificates are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#jwks_ca_pem JwtAuthBackend#jwks_ca_pem}

---

##### `jwksUrl`<sup>Optional</sup> <a name="jwksUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwksUrl"></a>

- *Type:* java.lang.String

JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#jwks_url JwtAuthBackend#jwks_url}

---

##### `jwtSupportedAlgs`<sup>Optional</sup> <a name="jwtSupportedAlgs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwtSupportedAlgs"></a>

- *Type:* java.util.List<java.lang.String>

A list of supported signing algorithms. Defaults to [RS256].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#jwt_supported_algs JwtAuthBackend#jwt_supported_algs}

---

##### `jwtValidationPubkeys`<sup>Optional</sup> <a name="jwtValidationPubkeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.jwtValidationPubkeys"></a>

- *Type:* java.util.List<java.lang.String>

A list of PEM-encoded public keys to use to authenticate signatures locally.

Cannot be used with 'jwks_url' or 'oidc_discovery_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#jwt_validation_pubkeys JwtAuthBackend#jwt_validation_pubkeys}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.local"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#local JwtAuthBackend#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#namespace JwtAuthBackend#namespace}

---

##### `namespaceInState`<sup>Optional</sup> <a name="namespaceInState" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.namespaceInState"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Pass namespace in the OIDC state parameter instead of as a separate query parameter.

With this setting, the allowed redirect URL(s) in Vault and on the provider side should not contain a namespace query parameter. This means only one redirect URL entry needs to be maintained on the OIDC provider side for all vault namespaces that will be authenticating against it. Defaults to true for new configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#namespace_in_state JwtAuthBackend#namespace_in_state}

---

##### `oidcClientId`<sup>Optional</sup> <a name="oidcClientId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcClientId"></a>

- *Type:* java.lang.String

Client ID used for OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#oidc_client_id JwtAuthBackend#oidc_client_id}

---

##### `oidcClientSecret`<sup>Optional</sup> <a name="oidcClientSecret" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcClientSecret"></a>

- *Type:* java.lang.String

Client Secret used for OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#oidc_client_secret JwtAuthBackend#oidc_client_secret}

---

##### `oidcDiscoveryCaPem`<sup>Optional</sup> <a name="oidcDiscoveryCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcDiscoveryCaPem"></a>

- *Type:* java.lang.String

The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL.

If not set, system certificates are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#oidc_discovery_ca_pem JwtAuthBackend#oidc_discovery_ca_pem}

---

##### `oidcDiscoveryUrl`<sup>Optional</sup> <a name="oidcDiscoveryUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcDiscoveryUrl"></a>

- *Type:* java.lang.String

The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or 'jwt_validation_pubkeys'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#oidc_discovery_url JwtAuthBackend#oidc_discovery_url}

---

##### `oidcResponseMode`<sup>Optional</sup> <a name="oidcResponseMode" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcResponseMode"></a>

- *Type:* java.lang.String

The response mode to be used in the OAuth2 request.

Allowed values are 'query' and 'form_post'. Defaults to 'query'. If using Vault namespaces, and oidc_response_mode is 'form_post', then 'namespace_in_state' should be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#oidc_response_mode JwtAuthBackend#oidc_response_mode}

---

##### `oidcResponseTypes`<sup>Optional</sup> <a name="oidcResponseTypes" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.oidcResponseTypes"></a>

- *Type:* java.util.List<java.lang.String>

The response types to request.

Allowed values are 'code' and 'id_token'. Defaults to 'code'. Note: 'id_token' may only be used if 'oidc_response_mode' is set to 'form_post'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#oidc_response_types JwtAuthBackend#oidc_response_types}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.path"></a>

- *Type:* java.lang.String

path to mount the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#path JwtAuthBackend#path}

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.providerConfig"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Provider specific handling configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#provider_config JwtAuthBackend#provider_config}

---

##### `tune`<sup>Optional</sup> <a name="tune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.tune"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#tune JwtAuthBackend#tune}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Type of backend. Can be either 'jwt' or 'oidc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#type JwtAuthBackend#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.putTune">putTune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetBoundIssuer">resetBoundIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDefaultRole">resetDefaultRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksCaPem">resetJwksCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksUrl">resetJwksUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtSupportedAlgs">resetJwtSupportedAlgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtValidationPubkeys">resetJwtValidationPubkeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespaceInState">resetNamespaceInState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientId">resetOidcClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientSecret">resetOidcClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryCaPem">resetOidcDiscoveryCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryUrl">resetOidcDiscoveryUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseMode">resetOidcResponseMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseTypes">resetOidcResponseTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetTune">resetTune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTune` <a name="putTune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.putTune"></a>

```java
public void putTune(IResolvable OR java.util.List<JwtAuthBackendTune> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.putTune.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>>

---

##### `resetBoundIssuer` <a name="resetBoundIssuer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetBoundIssuer"></a>

```java
public void resetBoundIssuer()
```

##### `resetDefaultRole` <a name="resetDefaultRole" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDefaultRole"></a>

```java
public void resetDefaultRole()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDisableRemount"></a>

```java
public void resetDisableRemount()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetId"></a>

```java
public void resetId()
```

##### `resetJwksCaPem` <a name="resetJwksCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksCaPem"></a>

```java
public void resetJwksCaPem()
```

##### `resetJwksUrl` <a name="resetJwksUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksUrl"></a>

```java
public void resetJwksUrl()
```

##### `resetJwtSupportedAlgs` <a name="resetJwtSupportedAlgs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtSupportedAlgs"></a>

```java
public void resetJwtSupportedAlgs()
```

##### `resetJwtValidationPubkeys` <a name="resetJwtValidationPubkeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtValidationPubkeys"></a>

```java
public void resetJwtValidationPubkeys()
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetLocal"></a>

```java
public void resetLocal()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNamespaceInState` <a name="resetNamespaceInState" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespaceInState"></a>

```java
public void resetNamespaceInState()
```

##### `resetOidcClientId` <a name="resetOidcClientId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientId"></a>

```java
public void resetOidcClientId()
```

##### `resetOidcClientSecret` <a name="resetOidcClientSecret" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientSecret"></a>

```java
public void resetOidcClientSecret()
```

##### `resetOidcDiscoveryCaPem` <a name="resetOidcDiscoveryCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryCaPem"></a>

```java
public void resetOidcDiscoveryCaPem()
```

##### `resetOidcDiscoveryUrl` <a name="resetOidcDiscoveryUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryUrl"></a>

```java
public void resetOidcDiscoveryUrl()
```

##### `resetOidcResponseMode` <a name="resetOidcResponseMode" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseMode"></a>

```java
public void resetOidcResponseMode()
```

##### `resetOidcResponseTypes` <a name="resetOidcResponseTypes" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseTypes"></a>

```java
public void resetOidcResponseTypes()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetPath"></a>

```java
public void resetPath()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetTune` <a name="resetTune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetTune"></a>

```java
public void resetTune()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a JwtAuthBackend resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.jwt_auth_backend.JwtAuthBackend;

JwtAuthBackend.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.jwt_auth_backend.JwtAuthBackend;

JwtAuthBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.jwt_auth_backend.JwtAuthBackend;

JwtAuthBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.jwt_auth_backend.JwtAuthBackend;

JwtAuthBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),JwtAuthBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a JwtAuthBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the JwtAuthBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing JwtAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the JwtAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tune">tune</a></code> | <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList">JwtAuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuerInput">boundIssuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRoleInput">defaultRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPemInput">jwksCaPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrlInput">jwksUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgsInput">jwtSupportedAlgsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeysInput">jwtValidationPubkeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.localInput">localInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInStateInput">namespaceInStateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientIdInput">oidcClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretInput">oidcClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPemInput">oidcDiscoveryCaPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrlInput">oidcDiscoveryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseModeInput">oidcResponseModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypesInput">oidcResponseTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfigInput">providerConfigInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tuneInput">tuneInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuer">boundIssuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRole">defaultRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPem">jwksCaPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrl">jwksUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgs">jwtSupportedAlgs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeys">jwtValidationPubkeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInState">namespaceInState</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientId">oidcClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecret">oidcClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPem">oidcDiscoveryCaPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrl">oidcDiscoveryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseMode">oidcResponseMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypes">oidcResponseTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfig">providerConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `tune`<sup>Required</sup> <a name="tune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tune"></a>

```java
public JwtAuthBackendTuneList getTune();
```

- *Type:* <a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList">JwtAuthBackendTuneList</a>

---

##### `boundIssuerInput`<sup>Optional</sup> <a name="boundIssuerInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuerInput"></a>

```java
public java.lang.String getBoundIssuerInput();
```

- *Type:* java.lang.String

---

##### `defaultRoleInput`<sup>Optional</sup> <a name="defaultRoleInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRoleInput"></a>

```java
public java.lang.String getDefaultRoleInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemountInput"></a>

```java
public java.lang.Object getDisableRemountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jwksCaPemInput`<sup>Optional</sup> <a name="jwksCaPemInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPemInput"></a>

```java
public java.lang.String getJwksCaPemInput();
```

- *Type:* java.lang.String

---

##### `jwksUrlInput`<sup>Optional</sup> <a name="jwksUrlInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrlInput"></a>

```java
public java.lang.String getJwksUrlInput();
```

- *Type:* java.lang.String

---

##### `jwtSupportedAlgsInput`<sup>Optional</sup> <a name="jwtSupportedAlgsInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgsInput"></a>

```java
public java.util.List<java.lang.String> getJwtSupportedAlgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jwtValidationPubkeysInput`<sup>Optional</sup> <a name="jwtValidationPubkeysInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeysInput"></a>

```java
public java.util.List<java.lang.String> getJwtValidationPubkeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.localInput"></a>

```java
public java.lang.Object getLocalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `namespaceInStateInput`<sup>Optional</sup> <a name="namespaceInStateInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInStateInput"></a>

```java
public java.lang.Object getNamespaceInStateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oidcClientIdInput`<sup>Optional</sup> <a name="oidcClientIdInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientIdInput"></a>

```java
public java.lang.String getOidcClientIdInput();
```

- *Type:* java.lang.String

---

##### `oidcClientSecretInput`<sup>Optional</sup> <a name="oidcClientSecretInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretInput"></a>

```java
public java.lang.String getOidcClientSecretInput();
```

- *Type:* java.lang.String

---

##### `oidcDiscoveryCaPemInput`<sup>Optional</sup> <a name="oidcDiscoveryCaPemInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPemInput"></a>

```java
public java.lang.String getOidcDiscoveryCaPemInput();
```

- *Type:* java.lang.String

---

##### `oidcDiscoveryUrlInput`<sup>Optional</sup> <a name="oidcDiscoveryUrlInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrlInput"></a>

```java
public java.lang.String getOidcDiscoveryUrlInput();
```

- *Type:* java.lang.String

---

##### `oidcResponseModeInput`<sup>Optional</sup> <a name="oidcResponseModeInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseModeInput"></a>

```java
public java.lang.String getOidcResponseModeInput();
```

- *Type:* java.lang.String

---

##### `oidcResponseTypesInput`<sup>Optional</sup> <a name="oidcResponseTypesInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypesInput"></a>

```java
public java.util.List<java.lang.String> getOidcResponseTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfigInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProviderConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tuneInput`<sup>Optional</sup> <a name="tuneInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tuneInput"></a>

```java
public java.lang.Object getTuneInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `boundIssuer`<sup>Required</sup> <a name="boundIssuer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuer"></a>

```java
public java.lang.String getBoundIssuer();
```

- *Type:* java.lang.String

---

##### `defaultRole`<sup>Required</sup> <a name="defaultRole" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRole"></a>

```java
public java.lang.String getDefaultRole();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jwksCaPem`<sup>Required</sup> <a name="jwksCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPem"></a>

```java
public java.lang.String getJwksCaPem();
```

- *Type:* java.lang.String

---

##### `jwksUrl`<sup>Required</sup> <a name="jwksUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrl"></a>

```java
public java.lang.String getJwksUrl();
```

- *Type:* java.lang.String

---

##### `jwtSupportedAlgs`<sup>Required</sup> <a name="jwtSupportedAlgs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgs"></a>

```java
public java.util.List<java.lang.String> getJwtSupportedAlgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jwtValidationPubkeys`<sup>Required</sup> <a name="jwtValidationPubkeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeys"></a>

```java
public java.util.List<java.lang.String> getJwtValidationPubkeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.local"></a>

```java
public java.lang.Object getLocal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `namespaceInState`<sup>Required</sup> <a name="namespaceInState" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInState"></a>

```java
public java.lang.Object getNamespaceInState();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oidcClientId`<sup>Required</sup> <a name="oidcClientId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientId"></a>

```java
public java.lang.String getOidcClientId();
```

- *Type:* java.lang.String

---

##### `oidcClientSecret`<sup>Required</sup> <a name="oidcClientSecret" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecret"></a>

```java
public java.lang.String getOidcClientSecret();
```

- *Type:* java.lang.String

---

##### `oidcDiscoveryCaPem`<sup>Required</sup> <a name="oidcDiscoveryCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPem"></a>

```java
public java.lang.String getOidcDiscoveryCaPem();
```

- *Type:* java.lang.String

---

##### `oidcDiscoveryUrl`<sup>Required</sup> <a name="oidcDiscoveryUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrl"></a>

```java
public java.lang.String getOidcDiscoveryUrl();
```

- *Type:* java.lang.String

---

##### `oidcResponseMode`<sup>Required</sup> <a name="oidcResponseMode" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseMode"></a>

```java
public java.lang.String getOidcResponseMode();
```

- *Type:* java.lang.String

---

##### `oidcResponseTypes`<sup>Required</sup> <a name="oidcResponseTypes" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypes"></a>

```java
public java.util.List<java.lang.String> getOidcResponseTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProviderConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### JwtAuthBackendConfig <a name="JwtAuthBackendConfig" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.jwt_auth_backend.JwtAuthBackendConfig;

JwtAuthBackendConfig.builder()
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
//  .boundIssuer(java.lang.String)
//  .defaultRole(java.lang.String)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .id(java.lang.String)
//  .jwksCaPem(java.lang.String)
//  .jwksUrl(java.lang.String)
//  .jwtSupportedAlgs(java.util.List<java.lang.String>)
//  .jwtValidationPubkeys(java.util.List<java.lang.String>)
//  .local(java.lang.Boolean)
//  .local(IResolvable)
//  .namespace(java.lang.String)
//  .namespaceInState(java.lang.Boolean)
//  .namespaceInState(IResolvable)
//  .oidcClientId(java.lang.String)
//  .oidcClientSecret(java.lang.String)
//  .oidcDiscoveryCaPem(java.lang.String)
//  .oidcDiscoveryUrl(java.lang.String)
//  .oidcResponseMode(java.lang.String)
//  .oidcResponseTypes(java.util.List<java.lang.String>)
//  .path(java.lang.String)
//  .providerConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .tune(IResolvable)
//  .tune(java.util.List<JwtAuthBackendTune>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.boundIssuer">boundIssuer</a></code> | <code>java.lang.String</code> | The value against which to match the iss claim in a JWT. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.defaultRole">defaultRole</a></code> | <code>java.lang.String</code> | The default role to use if none is provided during login. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the auth backend. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#id JwtAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksCaPem">jwksCaPem</a></code> | <code>java.lang.String</code> | The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksUrl">jwksUrl</a></code> | <code>java.lang.String</code> | JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtSupportedAlgs">jwtSupportedAlgs</a></code> | <code>java.util.List<java.lang.String></code> | A list of supported signing algorithms. Defaults to [RS256]. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtValidationPubkeys">jwtValidationPubkeys</a></code> | <code>java.util.List<java.lang.String></code> | A list of PEM-encoded public keys to use to authenticate signatures locally. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespaceInState">namespaceInState</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Pass namespace in the OIDC state parameter instead of as a separate query parameter. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientId">oidcClientId</a></code> | <code>java.lang.String</code> | Client ID used for OIDC. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientSecret">oidcClientSecret</a></code> | <code>java.lang.String</code> | Client Secret used for OIDC. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryCaPem">oidcDiscoveryCaPem</a></code> | <code>java.lang.String</code> | The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryUrl">oidcDiscoveryUrl</a></code> | <code>java.lang.String</code> | The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or 'jwt_validation_pubkeys'. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseMode">oidcResponseMode</a></code> | <code>java.lang.String</code> | The response mode to be used in the OAuth2 request. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseTypes">oidcResponseTypes</a></code> | <code>java.util.List<java.lang.String></code> | The response types to request. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.path">path</a></code> | <code>java.lang.String</code> | path to mount the backend. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.providerConfig">providerConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Provider specific handling configuration. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.tune">tune</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#tune JwtAuthBackend#tune}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of backend. Can be either 'jwt' or 'oidc'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `boundIssuer`<sup>Optional</sup> <a name="boundIssuer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.boundIssuer"></a>

```java
public java.lang.String getBoundIssuer();
```

- *Type:* java.lang.String

The value against which to match the iss claim in a JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#bound_issuer JwtAuthBackend#bound_issuer}

---

##### `defaultRole`<sup>Optional</sup> <a name="defaultRole" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.defaultRole"></a>

```java
public java.lang.String getDefaultRole();
```

- *Type:* java.lang.String

The default role to use if none is provided during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#default_role JwtAuthBackend#default_role}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#description JwtAuthBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#disable_remount JwtAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#id JwtAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jwksCaPem`<sup>Optional</sup> <a name="jwksCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksCaPem"></a>

```java
public java.lang.String getJwksCaPem();
```

- *Type:* java.lang.String

The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL.

If not set, system certificates are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#jwks_ca_pem JwtAuthBackend#jwks_ca_pem}

---

##### `jwksUrl`<sup>Optional</sup> <a name="jwksUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksUrl"></a>

```java
public java.lang.String getJwksUrl();
```

- *Type:* java.lang.String

JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#jwks_url JwtAuthBackend#jwks_url}

---

##### `jwtSupportedAlgs`<sup>Optional</sup> <a name="jwtSupportedAlgs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtSupportedAlgs"></a>

```java
public java.util.List<java.lang.String> getJwtSupportedAlgs();
```

- *Type:* java.util.List<java.lang.String>

A list of supported signing algorithms. Defaults to [RS256].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#jwt_supported_algs JwtAuthBackend#jwt_supported_algs}

---

##### `jwtValidationPubkeys`<sup>Optional</sup> <a name="jwtValidationPubkeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtValidationPubkeys"></a>

```java
public java.util.List<java.lang.String> getJwtValidationPubkeys();
```

- *Type:* java.util.List<java.lang.String>

A list of PEM-encoded public keys to use to authenticate signatures locally.

Cannot be used with 'jwks_url' or 'oidc_discovery_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#jwt_validation_pubkeys JwtAuthBackend#jwt_validation_pubkeys}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.local"></a>

```java
public java.lang.Object getLocal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#local JwtAuthBackend#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#namespace JwtAuthBackend#namespace}

---

##### `namespaceInState`<sup>Optional</sup> <a name="namespaceInState" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespaceInState"></a>

```java
public java.lang.Object getNamespaceInState();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Pass namespace in the OIDC state parameter instead of as a separate query parameter.

With this setting, the allowed redirect URL(s) in Vault and on the provider side should not contain a namespace query parameter. This means only one redirect URL entry needs to be maintained on the OIDC provider side for all vault namespaces that will be authenticating against it. Defaults to true for new configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#namespace_in_state JwtAuthBackend#namespace_in_state}

---

##### `oidcClientId`<sup>Optional</sup> <a name="oidcClientId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientId"></a>

```java
public java.lang.String getOidcClientId();
```

- *Type:* java.lang.String

Client ID used for OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#oidc_client_id JwtAuthBackend#oidc_client_id}

---

##### `oidcClientSecret`<sup>Optional</sup> <a name="oidcClientSecret" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientSecret"></a>

```java
public java.lang.String getOidcClientSecret();
```

- *Type:* java.lang.String

Client Secret used for OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#oidc_client_secret JwtAuthBackend#oidc_client_secret}

---

##### `oidcDiscoveryCaPem`<sup>Optional</sup> <a name="oidcDiscoveryCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryCaPem"></a>

```java
public java.lang.String getOidcDiscoveryCaPem();
```

- *Type:* java.lang.String

The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL.

If not set, system certificates are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#oidc_discovery_ca_pem JwtAuthBackend#oidc_discovery_ca_pem}

---

##### `oidcDiscoveryUrl`<sup>Optional</sup> <a name="oidcDiscoveryUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryUrl"></a>

```java
public java.lang.String getOidcDiscoveryUrl();
```

- *Type:* java.lang.String

The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or 'jwt_validation_pubkeys'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#oidc_discovery_url JwtAuthBackend#oidc_discovery_url}

---

##### `oidcResponseMode`<sup>Optional</sup> <a name="oidcResponseMode" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseMode"></a>

```java
public java.lang.String getOidcResponseMode();
```

- *Type:* java.lang.String

The response mode to be used in the OAuth2 request.

Allowed values are 'query' and 'form_post'. Defaults to 'query'. If using Vault namespaces, and oidc_response_mode is 'form_post', then 'namespace_in_state' should be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#oidc_response_mode JwtAuthBackend#oidc_response_mode}

---

##### `oidcResponseTypes`<sup>Optional</sup> <a name="oidcResponseTypes" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseTypes"></a>

```java
public java.util.List<java.lang.String> getOidcResponseTypes();
```

- *Type:* java.util.List<java.lang.String>

The response types to request.

Allowed values are 'code' and 'id_token'. Defaults to 'code'. Note: 'id_token' may only be used if 'oidc_response_mode' is set to 'form_post'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#oidc_response_types JwtAuthBackend#oidc_response_types}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

path to mount the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#path JwtAuthBackend#path}

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.providerConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProviderConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Provider specific handling configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#provider_config JwtAuthBackend#provider_config}

---

##### `tune`<sup>Optional</sup> <a name="tune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.tune"></a>

```java
public java.lang.Object getTune();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#tune JwtAuthBackend#tune}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of backend. Can be either 'jwt' or 'oidc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#type JwtAuthBackend#type}

---

### JwtAuthBackendTune <a name="JwtAuthBackendTune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.jwt_auth_backend.JwtAuthBackendTune;

JwtAuthBackendTune.builder()
//  .allowedResponseHeaders(java.util.List<java.lang.String>)
//  .auditNonHmacRequestKeys(java.util.List<java.lang.String>)
//  .auditNonHmacResponseKeys(java.util.List<java.lang.String>)
//  .defaultLeaseTtl(java.lang.String)
//  .listingVisibility(java.lang.String)
//  .maxLeaseTtl(java.lang.String)
//  .passthroughRequestHeaders(java.util.List<java.lang.String>)
//  .tokenType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#allowed_response_headers JwtAuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#audit_non_hmac_request_keys JwtAuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#audit_non_hmac_response_keys JwtAuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.defaultLeaseTtl">defaultLeaseTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#default_lease_ttl JwtAuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#listing_visibility JwtAuthBackend#listing_visibility}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.maxLeaseTtl">maxLeaseTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#max_lease_ttl JwtAuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#passthrough_request_headers JwtAuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#token_type JwtAuthBackend#token_type}. |

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.allowedResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#allowed_response_headers JwtAuthBackend#allowed_response_headers}.

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#audit_non_hmac_request_keys JwtAuthBackend#audit_non_hmac_request_keys}.

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#audit_non_hmac_response_keys JwtAuthBackend#audit_non_hmac_response_keys}.

---

##### `defaultLeaseTtl`<sup>Optional</sup> <a name="defaultLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.defaultLeaseTtl"></a>

```java
public java.lang.String getDefaultLeaseTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#default_lease_ttl JwtAuthBackend#default_lease_ttl}.

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.listingVisibility"></a>

```java
public java.lang.String getListingVisibility();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#listing_visibility JwtAuthBackend#listing_visibility}.

---

##### `maxLeaseTtl`<sup>Optional</sup> <a name="maxLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.maxLeaseTtl"></a>

```java
public java.lang.String getMaxLeaseTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#max_lease_ttl JwtAuthBackend#max_lease_ttl}.

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.passthroughRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#passthrough_request_headers JwtAuthBackend#passthrough_request_headers}.

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/jwt_auth_backend#token_type JwtAuthBackend#token_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### JwtAuthBackendTuneList <a name="JwtAuthBackendTuneList" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.jwt_auth_backend.JwtAuthBackendTuneList;

new JwtAuthBackendTuneList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.get"></a>

```java
public JwtAuthBackendTuneOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>>

---


### JwtAuthBackendTuneOutputReference <a name="JwtAuthBackendTuneOutputReference" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.jwt_auth_backend.JwtAuthBackendTuneOutputReference;

new JwtAuthBackendTuneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAllowedResponseHeaders">resetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetDefaultLeaseTtl">resetDefaultLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetListingVisibility">resetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetMaxLeaseTtl">resetMaxLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetPassthroughRequestHeaders">resetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedResponseHeaders` <a name="resetAllowedResponseHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```java
public void resetAllowedResponseHeaders()
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```java
public void resetAuditNonHmacRequestKeys()
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```java
public void resetAuditNonHmacResponseKeys()
```

##### `resetDefaultLeaseTtl` <a name="resetDefaultLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```java
public void resetDefaultLeaseTtl()
```

##### `resetListingVisibility` <a name="resetListingVisibility" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetListingVisibility"></a>

```java
public void resetListingVisibility()
```

##### `resetMaxLeaseTtl` <a name="resetMaxLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```java
public void resetMaxLeaseTtl()
```

##### `resetPassthroughRequestHeaders` <a name="resetPassthroughRequestHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```java
public void resetPassthroughRequestHeaders()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetTokenType"></a>

```java
public void resetTokenType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeadersInput">allowedResponseHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtlInput">defaultLeaseTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibilityInput">listingVisibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtlInput">maxLeaseTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">passthroughRequestHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtl">defaultLeaseTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtl">maxLeaseTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedResponseHeadersInput`<sup>Optional</sup> <a name="allowedResponseHeadersInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultLeaseTtlInput`<sup>Optional</sup> <a name="defaultLeaseTtlInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```java
public java.lang.String getDefaultLeaseTtlInput();
```

- *Type:* java.lang.String

---

##### `listingVisibilityInput`<sup>Optional</sup> <a name="listingVisibilityInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```java
public java.lang.String getListingVisibilityInput();
```

- *Type:* java.lang.String

---

##### `maxLeaseTtlInput`<sup>Optional</sup> <a name="maxLeaseTtlInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```java
public java.lang.String getMaxLeaseTtlInput();
```

- *Type:* java.lang.String

---

##### `passthroughRequestHeadersInput`<sup>Optional</sup> <a name="passthroughRequestHeadersInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `allowedResponseHeaders`<sup>Required</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultLeaseTtl`<sup>Required</sup> <a name="defaultLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```java
public java.lang.String getDefaultLeaseTtl();
```

- *Type:* java.lang.String

---

##### `listingVisibility`<sup>Required</sup> <a name="listingVisibility" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibility"></a>

```java
public java.lang.String getListingVisibility();
```

- *Type:* java.lang.String

---

##### `maxLeaseTtl`<sup>Required</sup> <a name="maxLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```java
public java.lang.String getMaxLeaseTtl();
```

- *Type:* java.lang.String

---

##### `passthroughRequestHeaders`<sup>Required</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>

---



