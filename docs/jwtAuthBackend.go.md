# `vault_jwt_auth_backend`

Refer to the Terraform Registory for docs: [`vault_jwt_auth_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend).

# `jwtAuthBackend` Submodule <a name="`jwtAuthBackend` Submodule" id="@cdktf/provider-vault.jwtAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JwtAuthBackend <a name="JwtAuthBackend" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend vault_jwt_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/jwtauthbackend"

jwtauthbackend.NewJwtAuthBackend(scope Construct, id *string, config JwtAuthBackendConfig) JwtAuthBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig">JwtAuthBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig">JwtAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.putTune">PutTune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetBoundIssuer">ResetBoundIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDefaultRole">ResetDefaultRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksCaPem">ResetJwksCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksUrl">ResetJwksUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtSupportedAlgs">ResetJwtSupportedAlgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtValidationPubkeys">ResetJwtValidationPubkeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespaceInState">ResetNamespaceInState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientId">ResetOidcClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientSecret">ResetOidcClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryCaPem">ResetOidcDiscoveryCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryUrl">ResetOidcDiscoveryUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseMode">ResetOidcResponseMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseTypes">ResetOidcResponseTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetTune">ResetTune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTune` <a name="PutTune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.putTune"></a>

```go
func PutTune(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.putTune.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBoundIssuer` <a name="ResetBoundIssuer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetBoundIssuer"></a>

```go
func ResetBoundIssuer()
```

##### `ResetDefaultRole` <a name="ResetDefaultRole" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDefaultRole"></a>

```go
func ResetDefaultRole()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDisableRemount"></a>

```go
func ResetDisableRemount()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetId"></a>

```go
func ResetId()
```

##### `ResetJwksCaPem` <a name="ResetJwksCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksCaPem"></a>

```go
func ResetJwksCaPem()
```

##### `ResetJwksUrl` <a name="ResetJwksUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksUrl"></a>

```go
func ResetJwksUrl()
```

##### `ResetJwtSupportedAlgs` <a name="ResetJwtSupportedAlgs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtSupportedAlgs"></a>

```go
func ResetJwtSupportedAlgs()
```

##### `ResetJwtValidationPubkeys` <a name="ResetJwtValidationPubkeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtValidationPubkeys"></a>

```go
func ResetJwtValidationPubkeys()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetLocal"></a>

```go
func ResetLocal()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNamespaceInState` <a name="ResetNamespaceInState" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespaceInState"></a>

```go
func ResetNamespaceInState()
```

##### `ResetOidcClientId` <a name="ResetOidcClientId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientId"></a>

```go
func ResetOidcClientId()
```

##### `ResetOidcClientSecret` <a name="ResetOidcClientSecret" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientSecret"></a>

```go
func ResetOidcClientSecret()
```

##### `ResetOidcDiscoveryCaPem` <a name="ResetOidcDiscoveryCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryCaPem"></a>

```go
func ResetOidcDiscoveryCaPem()
```

##### `ResetOidcDiscoveryUrl` <a name="ResetOidcDiscoveryUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryUrl"></a>

```go
func ResetOidcDiscoveryUrl()
```

##### `ResetOidcResponseMode` <a name="ResetOidcResponseMode" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseMode"></a>

```go
func ResetOidcResponseMode()
```

##### `ResetOidcResponseTypes` <a name="ResetOidcResponseTypes" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseTypes"></a>

```go
func ResetOidcResponseTypes()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetPath"></a>

```go
func ResetPath()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetTune` <a name="ResetTune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetTune"></a>

```go
func ResetTune()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/jwtauthbackend"

jwtauthbackend.JwtAuthBackend_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/jwtauthbackend"

jwtauthbackend.JwtAuthBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/jwtauthbackend"

jwtauthbackend.JwtAuthBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.accessor">Accessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tune">Tune</a></code> | <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList">JwtAuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuerInput">BoundIssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRoleInput">DefaultRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPemInput">JwksCaPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrlInput">JwksUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgsInput">JwtSupportedAlgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeysInput">JwtValidationPubkeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.localInput">LocalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInStateInput">NamespaceInStateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientIdInput">OidcClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretInput">OidcClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPemInput">OidcDiscoveryCaPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrlInput">OidcDiscoveryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseModeInput">OidcResponseModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypesInput">OidcResponseTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfigInput">ProviderConfigInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tuneInput">TuneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuer">BoundIssuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRole">DefaultRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPem">JwksCaPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrl">JwksUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgs">JwtSupportedAlgs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeys">JwtValidationPubkeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.local">Local</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInState">NamespaceInState</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientId">OidcClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecret">OidcClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPem">OidcDiscoveryCaPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrl">OidcDiscoveryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseMode">OidcResponseMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypes">OidcResponseTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfig">ProviderConfig</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.accessor"></a>

```go
func Accessor() *string
```

- *Type:* *string

---

##### `Tune`<sup>Required</sup> <a name="Tune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tune"></a>

```go
func Tune() JwtAuthBackendTuneList
```

- *Type:* <a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList">JwtAuthBackendTuneList</a>

---

##### `BoundIssuerInput`<sup>Optional</sup> <a name="BoundIssuerInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuerInput"></a>

```go
func BoundIssuerInput() *string
```

- *Type:* *string

---

##### `DefaultRoleInput`<sup>Optional</sup> <a name="DefaultRoleInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRoleInput"></a>

```go
func DefaultRoleInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemountInput"></a>

```go
func DisableRemountInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JwksCaPemInput`<sup>Optional</sup> <a name="JwksCaPemInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPemInput"></a>

```go
func JwksCaPemInput() *string
```

- *Type:* *string

---

##### `JwksUrlInput`<sup>Optional</sup> <a name="JwksUrlInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrlInput"></a>

```go
func JwksUrlInput() *string
```

- *Type:* *string

---

##### `JwtSupportedAlgsInput`<sup>Optional</sup> <a name="JwtSupportedAlgsInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgsInput"></a>

```go
func JwtSupportedAlgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `JwtValidationPubkeysInput`<sup>Optional</sup> <a name="JwtValidationPubkeysInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeysInput"></a>

```go
func JwtValidationPubkeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.localInput"></a>

```go
func LocalInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NamespaceInStateInput`<sup>Optional</sup> <a name="NamespaceInStateInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInStateInput"></a>

```go
func NamespaceInStateInput() interface{}
```

- *Type:* interface{}

---

##### `OidcClientIdInput`<sup>Optional</sup> <a name="OidcClientIdInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientIdInput"></a>

```go
func OidcClientIdInput() *string
```

- *Type:* *string

---

##### `OidcClientSecretInput`<sup>Optional</sup> <a name="OidcClientSecretInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretInput"></a>

```go
func OidcClientSecretInput() *string
```

- *Type:* *string

---

##### `OidcDiscoveryCaPemInput`<sup>Optional</sup> <a name="OidcDiscoveryCaPemInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPemInput"></a>

```go
func OidcDiscoveryCaPemInput() *string
```

- *Type:* *string

---

##### `OidcDiscoveryUrlInput`<sup>Optional</sup> <a name="OidcDiscoveryUrlInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrlInput"></a>

```go
func OidcDiscoveryUrlInput() *string
```

- *Type:* *string

---

##### `OidcResponseModeInput`<sup>Optional</sup> <a name="OidcResponseModeInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseModeInput"></a>

```go
func OidcResponseModeInput() *string
```

- *Type:* *string

---

##### `OidcResponseTypesInput`<sup>Optional</sup> <a name="OidcResponseTypesInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypesInput"></a>

```go
func OidcResponseTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfigInput"></a>

```go
func ProviderConfigInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TuneInput`<sup>Optional</sup> <a name="TuneInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tuneInput"></a>

```go
func TuneInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `BoundIssuer`<sup>Required</sup> <a name="BoundIssuer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuer"></a>

```go
func BoundIssuer() *string
```

- *Type:* *string

---

##### `DefaultRole`<sup>Required</sup> <a name="DefaultRole" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRole"></a>

```go
func DefaultRole() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemount"></a>

```go
func DisableRemount() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JwksCaPem`<sup>Required</sup> <a name="JwksCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPem"></a>

```go
func JwksCaPem() *string
```

- *Type:* *string

---

##### `JwksUrl`<sup>Required</sup> <a name="JwksUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrl"></a>

```go
func JwksUrl() *string
```

- *Type:* *string

---

##### `JwtSupportedAlgs`<sup>Required</sup> <a name="JwtSupportedAlgs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgs"></a>

```go
func JwtSupportedAlgs() *[]*string
```

- *Type:* *[]*string

---

##### `JwtValidationPubkeys`<sup>Required</sup> <a name="JwtValidationPubkeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeys"></a>

```go
func JwtValidationPubkeys() *[]*string
```

- *Type:* *[]*string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.local"></a>

```go
func Local() interface{}
```

- *Type:* interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NamespaceInState`<sup>Required</sup> <a name="NamespaceInState" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInState"></a>

```go
func NamespaceInState() interface{}
```

- *Type:* interface{}

---

##### `OidcClientId`<sup>Required</sup> <a name="OidcClientId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientId"></a>

```go
func OidcClientId() *string
```

- *Type:* *string

---

##### `OidcClientSecret`<sup>Required</sup> <a name="OidcClientSecret" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecret"></a>

```go
func OidcClientSecret() *string
```

- *Type:* *string

---

##### `OidcDiscoveryCaPem`<sup>Required</sup> <a name="OidcDiscoveryCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPem"></a>

```go
func OidcDiscoveryCaPem() *string
```

- *Type:* *string

---

##### `OidcDiscoveryUrl`<sup>Required</sup> <a name="OidcDiscoveryUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrl"></a>

```go
func OidcDiscoveryUrl() *string
```

- *Type:* *string

---

##### `OidcResponseMode`<sup>Required</sup> <a name="OidcResponseMode" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseMode"></a>

```go
func OidcResponseMode() *string
```

- *Type:* *string

---

##### `OidcResponseTypes`<sup>Required</sup> <a name="OidcResponseTypes" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypes"></a>

```go
func OidcResponseTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfig"></a>

```go
func ProviderConfig() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### JwtAuthBackendConfig <a name="JwtAuthBackendConfig" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/jwtauthbackend"

&jwtauthbackend.JwtAuthBackendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BoundIssuer: *string,
	DefaultRole: *string,
	Description: *string,
	DisableRemount: interface{},
	Id: *string,
	JwksCaPem: *string,
	JwksUrl: *string,
	JwtSupportedAlgs: *[]*string,
	JwtValidationPubkeys: *[]*string,
	Local: interface{},
	Namespace: *string,
	NamespaceInState: interface{},
	OidcClientId: *string,
	OidcClientSecret: *string,
	OidcDiscoveryCaPem: *string,
	OidcDiscoveryUrl: *string,
	OidcResponseMode: *string,
	OidcResponseTypes: *[]*string,
	Path: *string,
	ProviderConfig: *map[string]*string,
	Tune: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.boundIssuer">BoundIssuer</a></code> | <code>*string</code> | The value against which to match the iss claim in a JWT. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.defaultRole">DefaultRole</a></code> | <code>*string</code> | The default role to use if none is provided during login. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.description">Description</a></code> | <code>*string</code> | The description of the auth backend. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#id JwtAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksCaPem">JwksCaPem</a></code> | <code>*string</code> | The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksUrl">JwksUrl</a></code> | <code>*string</code> | JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtSupportedAlgs">JwtSupportedAlgs</a></code> | <code>*[]*string</code> | A list of supported signing algorithms. Defaults to [RS256]. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtValidationPubkeys">JwtValidationPubkeys</a></code> | <code>*[]*string</code> | A list of PEM-encoded public keys to use to authenticate signatures locally. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.local">Local</a></code> | <code>interface{}</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespaceInState">NamespaceInState</a></code> | <code>interface{}</code> | Pass namespace in the OIDC state parameter instead of as a separate query parameter. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientId">OidcClientId</a></code> | <code>*string</code> | Client ID used for OIDC. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientSecret">OidcClientSecret</a></code> | <code>*string</code> | Client Secret used for OIDC. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryCaPem">OidcDiscoveryCaPem</a></code> | <code>*string</code> | The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryUrl">OidcDiscoveryUrl</a></code> | <code>*string</code> | The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or 'jwt_validation_pubkeys'. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseMode">OidcResponseMode</a></code> | <code>*string</code> | The response mode to be used in the OAuth2 request. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseTypes">OidcResponseTypes</a></code> | <code>*[]*string</code> | The response types to request. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.path">Path</a></code> | <code>*string</code> | path to mount the backend. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.providerConfig">ProviderConfig</a></code> | <code>*map[string]*string</code> | Provider specific handling configuration. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.tune">Tune</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#tune JwtAuthBackend#tune}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.type">Type</a></code> | <code>*string</code> | Type of backend. Can be either 'jwt' or 'oidc'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BoundIssuer`<sup>Optional</sup> <a name="BoundIssuer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.boundIssuer"></a>

```go
BoundIssuer *string
```

- *Type:* *string

The value against which to match the iss claim in a JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#bound_issuer JwtAuthBackend#bound_issuer}

---

##### `DefaultRole`<sup>Optional</sup> <a name="DefaultRole" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.defaultRole"></a>

```go
DefaultRole *string
```

- *Type:* *string

The default role to use if none is provided during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#default_role JwtAuthBackend#default_role}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#description JwtAuthBackend#description}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.disableRemount"></a>

```go
DisableRemount interface{}
```

- *Type:* interface{}

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#disable_remount JwtAuthBackend#disable_remount}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#id JwtAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JwksCaPem`<sup>Optional</sup> <a name="JwksCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksCaPem"></a>

```go
JwksCaPem *string
```

- *Type:* *string

The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL.

If not set, system certificates are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#jwks_ca_pem JwtAuthBackend#jwks_ca_pem}

---

##### `JwksUrl`<sup>Optional</sup> <a name="JwksUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksUrl"></a>

```go
JwksUrl *string
```

- *Type:* *string

JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#jwks_url JwtAuthBackend#jwks_url}

---

##### `JwtSupportedAlgs`<sup>Optional</sup> <a name="JwtSupportedAlgs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtSupportedAlgs"></a>

```go
JwtSupportedAlgs *[]*string
```

- *Type:* *[]*string

A list of supported signing algorithms. Defaults to [RS256].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#jwt_supported_algs JwtAuthBackend#jwt_supported_algs}

---

##### `JwtValidationPubkeys`<sup>Optional</sup> <a name="JwtValidationPubkeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtValidationPubkeys"></a>

```go
JwtValidationPubkeys *[]*string
```

- *Type:* *[]*string

A list of PEM-encoded public keys to use to authenticate signatures locally.

Cannot be used with 'jwks_url' or 'oidc_discovery_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#jwt_validation_pubkeys JwtAuthBackend#jwt_validation_pubkeys}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.local"></a>

```go
Local interface{}
```

- *Type:* interface{}

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#local JwtAuthBackend#local}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#namespace JwtAuthBackend#namespace}

---

##### `NamespaceInState`<sup>Optional</sup> <a name="NamespaceInState" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespaceInState"></a>

```go
NamespaceInState interface{}
```

- *Type:* interface{}

Pass namespace in the OIDC state parameter instead of as a separate query parameter.

With this setting, the allowed redirect URL(s) in Vault and on the provider side should not contain a namespace query parameter. This means only one redirect URL entry needs to be maintained on the OIDC provider side for all vault namespaces that will be authenticating against it. Defaults to true for new configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#namespace_in_state JwtAuthBackend#namespace_in_state}

---

##### `OidcClientId`<sup>Optional</sup> <a name="OidcClientId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientId"></a>

```go
OidcClientId *string
```

- *Type:* *string

Client ID used for OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#oidc_client_id JwtAuthBackend#oidc_client_id}

---

##### `OidcClientSecret`<sup>Optional</sup> <a name="OidcClientSecret" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientSecret"></a>

```go
OidcClientSecret *string
```

- *Type:* *string

Client Secret used for OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#oidc_client_secret JwtAuthBackend#oidc_client_secret}

---

##### `OidcDiscoveryCaPem`<sup>Optional</sup> <a name="OidcDiscoveryCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryCaPem"></a>

```go
OidcDiscoveryCaPem *string
```

- *Type:* *string

The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL.

If not set, system certificates are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#oidc_discovery_ca_pem JwtAuthBackend#oidc_discovery_ca_pem}

---

##### `OidcDiscoveryUrl`<sup>Optional</sup> <a name="OidcDiscoveryUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryUrl"></a>

```go
OidcDiscoveryUrl *string
```

- *Type:* *string

The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or 'jwt_validation_pubkeys'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#oidc_discovery_url JwtAuthBackend#oidc_discovery_url}

---

##### `OidcResponseMode`<sup>Optional</sup> <a name="OidcResponseMode" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseMode"></a>

```go
OidcResponseMode *string
```

- *Type:* *string

The response mode to be used in the OAuth2 request.

Allowed values are 'query' and 'form_post'. Defaults to 'query'. If using Vault namespaces, and oidc_response_mode is 'form_post', then 'namespace_in_state' should be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#oidc_response_mode JwtAuthBackend#oidc_response_mode}

---

##### `OidcResponseTypes`<sup>Optional</sup> <a name="OidcResponseTypes" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseTypes"></a>

```go
OidcResponseTypes *[]*string
```

- *Type:* *[]*string

The response types to request.

Allowed values are 'code' and 'id_token'. Defaults to 'code'. Note: 'id_token' may only be used if 'oidc_response_mode' is set to 'form_post'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#oidc_response_types JwtAuthBackend#oidc_response_types}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

path to mount the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#path JwtAuthBackend#path}

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.providerConfig"></a>

```go
ProviderConfig *map[string]*string
```

- *Type:* *map[string]*string

Provider specific handling configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#provider_config JwtAuthBackend#provider_config}

---

##### `Tune`<sup>Optional</sup> <a name="Tune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.tune"></a>

```go
Tune interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#tune JwtAuthBackend#tune}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of backend. Can be either 'jwt' or 'oidc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#type JwtAuthBackend#type}

---

### JwtAuthBackendTune <a name="JwtAuthBackendTune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/jwtauthbackend"

&jwtauthbackend.JwtAuthBackendTune {
	AllowedResponseHeaders: *[]*string,
	AuditNonHmacRequestKeys: *[]*string,
	AuditNonHmacResponseKeys: *[]*string,
	DefaultLeaseTtl: *string,
	ListingVisibility: *string,
	MaxLeaseTtl: *string,
	PassthroughRequestHeaders: *[]*string,
	TokenType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#allowed_response_headers JwtAuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#audit_non_hmac_request_keys JwtAuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#audit_non_hmac_response_keys JwtAuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#default_lease_ttl JwtAuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.listingVisibility">ListingVisibility</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#listing_visibility JwtAuthBackend#listing_visibility}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#max_lease_ttl JwtAuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#passthrough_request_headers JwtAuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.tokenType">TokenType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#token_type JwtAuthBackend#token_type}. |

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.allowedResponseHeaders"></a>

```go
AllowedResponseHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#allowed_response_headers JwtAuthBackend#allowed_response_headers}.

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacRequestKeys"></a>

```go
AuditNonHmacRequestKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#audit_non_hmac_request_keys JwtAuthBackend#audit_non_hmac_request_keys}.

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacResponseKeys"></a>

```go
AuditNonHmacResponseKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#audit_non_hmac_response_keys JwtAuthBackend#audit_non_hmac_response_keys}.

---

##### `DefaultLeaseTtl`<sup>Optional</sup> <a name="DefaultLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.defaultLeaseTtl"></a>

```go
DefaultLeaseTtl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#default_lease_ttl JwtAuthBackend#default_lease_ttl}.

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.listingVisibility"></a>

```go
ListingVisibility *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#listing_visibility JwtAuthBackend#listing_visibility}.

---

##### `MaxLeaseTtl`<sup>Optional</sup> <a name="MaxLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.maxLeaseTtl"></a>

```go
MaxLeaseTtl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#max_lease_ttl JwtAuthBackend#max_lease_ttl}.

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.passthroughRequestHeaders"></a>

```go
PassthroughRequestHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#passthrough_request_headers JwtAuthBackend#passthrough_request_headers}.

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/jwt_auth_backend#token_type JwtAuthBackend#token_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### JwtAuthBackendTuneList <a name="JwtAuthBackendTuneList" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/jwtauthbackend"

jwtauthbackend.NewJwtAuthBackendTuneList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) JwtAuthBackendTuneList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.get"></a>

```go
func Get(index *f64) JwtAuthBackendTuneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### JwtAuthBackendTuneOutputReference <a name="JwtAuthBackendTuneOutputReference" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/jwtauthbackend"

jwtauthbackend.NewJwtAuthBackendTuneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) JwtAuthBackendTuneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetDefaultLeaseTtl">ResetDefaultLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetMaxLeaseTtl">ResetMaxLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```go
func ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```go
func ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```go
func ResetAuditNonHmacResponseKeys()
```

##### `ResetDefaultLeaseTtl` <a name="ResetDefaultLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```go
func ResetDefaultLeaseTtl()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetListingVisibility"></a>

```go
func ResetListingVisibility()
```

##### `ResetMaxLeaseTtl` <a name="ResetMaxLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```go
func ResetMaxLeaseTtl()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```go
func ResetPassthroughRequestHeaders()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetTokenType"></a>

```go
func ResetTokenType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtlInput">DefaultLeaseTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtlInput">MaxLeaseTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibility">ListingVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```go
func AllowedResponseHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```go
func AuditNonHmacRequestKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```go
func AuditNonHmacResponseKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultLeaseTtlInput`<sup>Optional</sup> <a name="DefaultLeaseTtlInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```go
func DefaultLeaseTtlInput() *string
```

- *Type:* *string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```go
func ListingVisibilityInput() *string
```

- *Type:* *string

---

##### `MaxLeaseTtlInput`<sup>Optional</sup> <a name="MaxLeaseTtlInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```go
func MaxLeaseTtlInput() *string
```

- *Type:* *string

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```go
func PassthroughRequestHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```go
func AllowedResponseHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```go
func AuditNonHmacRequestKeys() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```go
func AuditNonHmacResponseKeys() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultLeaseTtl`<sup>Required</sup> <a name="DefaultLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```go
func DefaultLeaseTtl() *string
```

- *Type:* *string

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibility"></a>

```go
func ListingVisibility() *string
```

- *Type:* *string

---

##### `MaxLeaseTtl`<sup>Required</sup> <a name="MaxLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```go
func MaxLeaseTtl() *string
```

- *Type:* *string

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```go
func PassthroughRequestHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



