# `vault_ad_secret_backend`

Refer to the Terraform Registory for docs: [`vault_ad_secret_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend).

# `adSecretBackend` Submodule <a name="`adSecretBackend` Submodule" id="@cdktf/provider-vault.adSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdSecretBackend <a name="AdSecretBackend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend vault_ad_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/adsecretbackend"

adsecretbackend.NewAdSecretBackend(scope Construct, id *string, config AdSecretBackendConfig) AdSecretBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig">AdSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig">AdSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetAnonymousGroupSearch">ResetAnonymousGroupSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCaseSensitiveNames">ResetCaseSensitiveNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsCert">ResetClientTlsCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsKey">ResetClientTlsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDenyNullBind">ResetDenyNullBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDiscoverdn">ResetDiscoverdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetFormatter">ResetFormatter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupattr">ResetGroupattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupdn">ResetGroupdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupfilter">ResetGroupfilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLastRotationTolerance">ResetLastRotationTolerance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLength">ResetLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetStarttls">ResetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMaxVersion">ResetTlsMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMinVersion">ResetTlsMinVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUpndomain">ResetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUsePre111GroupCnBehavior">ResetUsePre111GroupCnBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserattr">ResetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserdn">ResetUserdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUseTokenGroups">ResetUseTokenGroups</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAnonymousGroupSearch` <a name="ResetAnonymousGroupSearch" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetAnonymousGroupSearch"></a>

```go
func ResetAnonymousGroupSearch()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetCaseSensitiveNames` <a name="ResetCaseSensitiveNames" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCaseSensitiveNames"></a>

```go
func ResetCaseSensitiveNames()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetClientTlsCert` <a name="ResetClientTlsCert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsCert"></a>

```go
func ResetClientTlsCert()
```

##### `ResetClientTlsKey` <a name="ResetClientTlsKey" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsKey"></a>

```go
func ResetClientTlsKey()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```go
func ResetDefaultLeaseTtlSeconds()
```

##### `ResetDenyNullBind` <a name="ResetDenyNullBind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDenyNullBind"></a>

```go
func ResetDenyNullBind()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDisableRemount"></a>

```go
func ResetDisableRemount()
```

##### `ResetDiscoverdn` <a name="ResetDiscoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDiscoverdn"></a>

```go
func ResetDiscoverdn()
```

##### `ResetFormatter` <a name="ResetFormatter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetFormatter"></a>

```go
func ResetFormatter()
```

##### `ResetGroupattr` <a name="ResetGroupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupattr"></a>

```go
func ResetGroupattr()
```

##### `ResetGroupdn` <a name="ResetGroupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupdn"></a>

```go
func ResetGroupdn()
```

##### `ResetGroupfilter` <a name="ResetGroupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupfilter"></a>

```go
func ResetGroupfilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetId"></a>

```go
func ResetId()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetInsecureTls"></a>

```go
func ResetInsecureTls()
```

##### `ResetLastRotationTolerance` <a name="ResetLastRotationTolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLastRotationTolerance"></a>

```go
func ResetLastRotationTolerance()
```

##### `ResetLength` <a name="ResetLength" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLength"></a>

```go
func ResetLength()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLocal"></a>

```go
func ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxLeaseTtlSeconds"></a>

```go
func ResetMaxLeaseTtlSeconds()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetPasswordPolicy"></a>

```go
func ResetPasswordPolicy()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetRequestTimeout"></a>

```go
func ResetRequestTimeout()
```

##### `ResetStarttls` <a name="ResetStarttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetStarttls"></a>

```go
func ResetStarttls()
```

##### `ResetTlsMaxVersion` <a name="ResetTlsMaxVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMaxVersion"></a>

```go
func ResetTlsMaxVersion()
```

##### `ResetTlsMinVersion` <a name="ResetTlsMinVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMinVersion"></a>

```go
func ResetTlsMinVersion()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetUpndomain` <a name="ResetUpndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUpndomain"></a>

```go
func ResetUpndomain()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUsePre111GroupCnBehavior` <a name="ResetUsePre111GroupCnBehavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUsePre111GroupCnBehavior"></a>

```go
func ResetUsePre111GroupCnBehavior()
```

##### `ResetUserattr` <a name="ResetUserattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserattr"></a>

```go
func ResetUserattr()
```

##### `ResetUserdn` <a name="ResetUserdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserdn"></a>

```go
func ResetUserdn()
```

##### `ResetUseTokenGroups` <a name="ResetUseTokenGroups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUseTokenGroups"></a>

```go
func ResetUseTokenGroups()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/adsecretbackend"

adsecretbackend.AdSecretBackend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/adsecretbackend"

adsecretbackend.AdSecretBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/adsecretbackend"

adsecretbackend.AdSecretBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearchInput">AnonymousGroupSearchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddnInput">BinddnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpassInput">BindpassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNamesInput">CaseSensitiveNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCertInput">ClientTlsCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKeyInput">ClientTlsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBindInput">DenyNullBindInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdnInput">DiscoverdnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.formatterInput">FormatterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattrInput">GroupattrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdnInput">GroupdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilterInput">GroupfilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationToleranceInput">LastRotationToleranceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lengthInput">LengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.localInput">LocalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtlInput">MaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttlsInput">StarttlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersionInput">TlsMaxVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersionInput">TlsMinVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomainInput">UpndomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehaviorInput">UsePre111GroupCnBehaviorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattrInput">UserattrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdnInput">UserdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroupsInput">UseTokenGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearch">AnonymousGroupSearch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddn">Binddn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpass">Bindpass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCert">ClientTlsCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKey">ClientTlsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBind">DenyNullBind</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdn">Discoverdn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.formatter">Formatter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattr">Groupattr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdn">Groupdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilter">Groupfilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationTolerance">LastRotationTolerance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.length">Length</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.local">Local</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicy">PasswordPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeout">RequestTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttls">Starttls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersion">TlsMinVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomain">Upndomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehavior">UsePre111GroupCnBehavior</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattr">Userattr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdn">Userdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroups">UseTokenGroups</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnonymousGroupSearchInput`<sup>Optional</sup> <a name="AnonymousGroupSearchInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearchInput"></a>

```go
func AnonymousGroupSearchInput() interface{}
```

- *Type:* interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `BinddnInput`<sup>Optional</sup> <a name="BinddnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddnInput"></a>

```go
func BinddnInput() *string
```

- *Type:* *string

---

##### `BindpassInput`<sup>Optional</sup> <a name="BindpassInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpassInput"></a>

```go
func BindpassInput() *string
```

- *Type:* *string

---

##### `CaseSensitiveNamesInput`<sup>Optional</sup> <a name="CaseSensitiveNamesInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNamesInput"></a>

```go
func CaseSensitiveNamesInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `ClientTlsCertInput`<sup>Optional</sup> <a name="ClientTlsCertInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCertInput"></a>

```go
func ClientTlsCertInput() *string
```

- *Type:* *string

---

##### `ClientTlsKeyInput`<sup>Optional</sup> <a name="ClientTlsKeyInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKeyInput"></a>

```go
func ClientTlsKeyInput() *string
```

- *Type:* *string

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```go
func DefaultLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `DenyNullBindInput`<sup>Optional</sup> <a name="DenyNullBindInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBindInput"></a>

```go
func DenyNullBindInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemountInput"></a>

```go
func DisableRemountInput() interface{}
```

- *Type:* interface{}

---

##### `DiscoverdnInput`<sup>Optional</sup> <a name="DiscoverdnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdnInput"></a>

```go
func DiscoverdnInput() interface{}
```

- *Type:* interface{}

---

##### `FormatterInput`<sup>Optional</sup> <a name="FormatterInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.formatterInput"></a>

```go
func FormatterInput() *string
```

- *Type:* *string

---

##### `GroupattrInput`<sup>Optional</sup> <a name="GroupattrInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattrInput"></a>

```go
func GroupattrInput() *string
```

- *Type:* *string

---

##### `GroupdnInput`<sup>Optional</sup> <a name="GroupdnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdnInput"></a>

```go
func GroupdnInput() *string
```

- *Type:* *string

---

##### `GroupfilterInput`<sup>Optional</sup> <a name="GroupfilterInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilterInput"></a>

```go
func GroupfilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTlsInput"></a>

```go
func InsecureTlsInput() interface{}
```

- *Type:* interface{}

---

##### `LastRotationToleranceInput`<sup>Optional</sup> <a name="LastRotationToleranceInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationToleranceInput"></a>

```go
func LastRotationToleranceInput() *f64
```

- *Type:* *f64

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lengthInput"></a>

```go
func LengthInput() *f64
```

- *Type:* *f64

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.localInput"></a>

```go
func LocalInput() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```go
func MaxLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtlInput"></a>

```go
func MaxTtlInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicyInput"></a>

```go
func PasswordPolicyInput() *string
```

- *Type:* *string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeoutInput"></a>

```go
func RequestTimeoutInput() *f64
```

- *Type:* *f64

---

##### `StarttlsInput`<sup>Optional</sup> <a name="StarttlsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttlsInput"></a>

```go
func StarttlsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsMaxVersionInput`<sup>Optional</sup> <a name="TlsMaxVersionInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersionInput"></a>

```go
func TlsMaxVersionInput() *string
```

- *Type:* *string

---

##### `TlsMinVersionInput`<sup>Optional</sup> <a name="TlsMinVersionInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersionInput"></a>

```go
func TlsMinVersionInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `UpndomainInput`<sup>Optional</sup> <a name="UpndomainInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomainInput"></a>

```go
func UpndomainInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UsePre111GroupCnBehaviorInput`<sup>Optional</sup> <a name="UsePre111GroupCnBehaviorInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehaviorInput"></a>

```go
func UsePre111GroupCnBehaviorInput() interface{}
```

- *Type:* interface{}

---

##### `UserattrInput`<sup>Optional</sup> <a name="UserattrInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattrInput"></a>

```go
func UserattrInput() *string
```

- *Type:* *string

---

##### `UserdnInput`<sup>Optional</sup> <a name="UserdnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdnInput"></a>

```go
func UserdnInput() *string
```

- *Type:* *string

---

##### `UseTokenGroupsInput`<sup>Optional</sup> <a name="UseTokenGroupsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroupsInput"></a>

```go
func UseTokenGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `AnonymousGroupSearch`<sup>Required</sup> <a name="AnonymousGroupSearch" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearch"></a>

```go
func AnonymousGroupSearch() interface{}
```

- *Type:* interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Binddn`<sup>Required</sup> <a name="Binddn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddn"></a>

```go
func Binddn() *string
```

- *Type:* *string

---

##### `Bindpass`<sup>Required</sup> <a name="Bindpass" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpass"></a>

```go
func Bindpass() *string
```

- *Type:* *string

---

##### `CaseSensitiveNames`<sup>Required</sup> <a name="CaseSensitiveNames" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNames"></a>

```go
func CaseSensitiveNames() interface{}
```

- *Type:* interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `ClientTlsCert`<sup>Required</sup> <a name="ClientTlsCert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCert"></a>

```go
func ClientTlsCert() *string
```

- *Type:* *string

---

##### `ClientTlsKey`<sup>Required</sup> <a name="ClientTlsKey" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKey"></a>

```go
func ClientTlsKey() *string
```

- *Type:* *string

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSeconds"></a>

```go
func DefaultLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `DenyNullBind`<sup>Required</sup> <a name="DenyNullBind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBind"></a>

```go
func DenyNullBind() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemount"></a>

```go
func DisableRemount() interface{}
```

- *Type:* interface{}

---

##### `Discoverdn`<sup>Required</sup> <a name="Discoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdn"></a>

```go
func Discoverdn() interface{}
```

- *Type:* interface{}

---

##### `Formatter`<sup>Required</sup> <a name="Formatter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.formatter"></a>

```go
func Formatter() *string
```

- *Type:* *string

---

##### `Groupattr`<sup>Required</sup> <a name="Groupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattr"></a>

```go
func Groupattr() *string
```

- *Type:* *string

---

##### `Groupdn`<sup>Required</sup> <a name="Groupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdn"></a>

```go
func Groupdn() *string
```

- *Type:* *string

---

##### `Groupfilter`<sup>Required</sup> <a name="Groupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilter"></a>

```go
func Groupfilter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTls"></a>

```go
func InsecureTls() interface{}
```

- *Type:* interface{}

---

##### `LastRotationTolerance`<sup>Required</sup> <a name="LastRotationTolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationTolerance"></a>

```go
func LastRotationTolerance() *f64
```

- *Type:* *f64

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.local"></a>

```go
func Local() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSeconds"></a>

```go
func MaxLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtl"></a>

```go
func MaxTtl() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicy"></a>

```go
func PasswordPolicy() *string
```

- *Type:* *string

---

##### `RequestTimeout`<sup>Required</sup> <a name="RequestTimeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeout"></a>

```go
func RequestTimeout() *f64
```

- *Type:* *f64

---

##### `Starttls`<sup>Required</sup> <a name="Starttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttls"></a>

```go
func Starttls() interface{}
```

- *Type:* interface{}

---

##### `TlsMaxVersion`<sup>Required</sup> <a name="TlsMaxVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersion"></a>

```go
func TlsMaxVersion() *string
```

- *Type:* *string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersion"></a>

```go
func TlsMinVersion() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Upndomain`<sup>Required</sup> <a name="Upndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomain"></a>

```go
func Upndomain() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UsePre111GroupCnBehavior`<sup>Required</sup> <a name="UsePre111GroupCnBehavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehavior"></a>

```go
func UsePre111GroupCnBehavior() interface{}
```

- *Type:* interface{}

---

##### `Userattr`<sup>Required</sup> <a name="Userattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattr"></a>

```go
func Userattr() *string
```

- *Type:* *string

---

##### `Userdn`<sup>Required</sup> <a name="Userdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdn"></a>

```go
func Userdn() *string
```

- *Type:* *string

---

##### `UseTokenGroups`<sup>Required</sup> <a name="UseTokenGroups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroups"></a>

```go
func UseTokenGroups() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AdSecretBackendConfig <a name="AdSecretBackendConfig" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v10/adsecretbackend"

&adsecretbackend.AdSecretBackendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Binddn: *string,
	Bindpass: *string,
	AnonymousGroupSearch: interface{},
	Backend: *string,
	CaseSensitiveNames: interface{},
	Certificate: *string,
	ClientTlsCert: *string,
	ClientTlsKey: *string,
	DefaultLeaseTtlSeconds: *f64,
	DenyNullBind: interface{},
	Description: *string,
	DisableRemount: interface{},
	Discoverdn: interface{},
	Formatter: *string,
	Groupattr: *string,
	Groupdn: *string,
	Groupfilter: *string,
	Id: *string,
	InsecureTls: interface{},
	LastRotationTolerance: *f64,
	Length: *f64,
	Local: interface{},
	MaxLeaseTtlSeconds: *f64,
	MaxTtl: *f64,
	Namespace: *string,
	PasswordPolicy: *string,
	RequestTimeout: *f64,
	Starttls: interface{},
	TlsMaxVersion: *string,
	TlsMinVersion: *string,
	Ttl: *f64,
	Upndomain: *string,
	Url: *string,
	UsePre111GroupCnBehavior: interface{},
	Userattr: *string,
	Userdn: *string,
	UseTokenGroups: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.binddn">Binddn</a></code> | <code>*string</code> | Distinguished name of object to bind when performing user and group search. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.bindpass">Bindpass</a></code> | <code>*string</code> | LDAP password for searching for the user DN. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.anonymousGroupSearch">AnonymousGroupSearch</a></code> | <code>interface{}</code> | Use anonymous binds when performing LDAP group searches (if true the initial credentials will still be used for the initial connection test). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.backend">Backend</a></code> | <code>*string</code> | The mount path for a backend, for example, the path given in "$ vault auth enable -path=my-ad ad". |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>interface{}</code> | If true, case sensitivity will be used when comparing usernames and groups for matching policies. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.certificate">Certificate</a></code> | <code>*string</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsCert">ClientTlsCert</a></code> | <code>*string</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsKey">ClientTlsKey</a></code> | <code>*string</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.denyNullBind">DenyNullBind</a></code> | <code>interface{}</code> | Denies an unauthenticated LDAP bind request if the user's password is empty; defaults to true. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.description">Description</a></code> | <code>*string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.discoverdn">Discoverdn</a></code> | <code>interface{}</code> | Use anonymous bind to discover the bind DN of a user. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.formatter">Formatter</a></code> | <code>*string</code> | Text to insert the password into, ex. "customPrefix{{PASSWORD}}customSuffix". |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupattr">Groupattr</a></code> | <code>*string</code> | LDAP attribute to follow on objects returned by <groupfilter> in order to enumerate user group membership. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupdn">Groupdn</a></code> | <code>*string</code> | LDAP search base to use for group membership search (eg: ou=Groups,dc=example,dc=org). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupfilter">Groupfilter</a></code> | <code>*string</code> | Go template for querying group membership of user. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#id AdSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | Skip LDAP server SSL Certificate verification - insecure and not recommended for production use. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lastRotationTolerance">LastRotationTolerance</a></code> | <code>*f64</code> | The number of seconds after a Vault rotation where, if Active Directory shows a later rotation, it should be considered out-of-band. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.length">Length</a></code> | <code>*f64</code> | The desired length of passwords that Vault generates. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.local">Local</a></code> | <code>interface{}</code> | Mark the secrets engine as local-only. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | In seconds, the maximum password time-to-live. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code>*string</code> | Name of the password policy to use to generate passwords. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.requestTimeout">RequestTimeout</a></code> | <code>*f64</code> | Timeout, in seconds, for the connection when making requests against the server before returning back an error. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.starttls">Starttls</a></code> | <code>interface{}</code> | Issue a StartTLS command after establishing unencrypted connection. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>*string</code> | Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>*string</code> | Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | In seconds, the default password time-to-live. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.upndomain">Upndomain</a></code> | <code>*string</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.url">Url</a></code> | <code>*string</code> | LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.usePre111GroupCnBehavior">UsePre111GroupCnBehavior</a></code> | <code>interface{}</code> | In Vault 1.1.1 a fix for handling group CN values of different cases unfortunately introduced a regression that could cause previously defined groups to not be found due to a change in the resulting name. If set true, the pre-1.1.1 behavior for matching group CNs will be used. This is only needed in some upgrade scenarios for backwards compatibility. It is enabled by default if the config is upgraded but disabled by default on new configurations. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userattr">Userattr</a></code> | <code>*string</code> | Attribute used for users (default: cn). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userdn">Userdn</a></code> | <code>*string</code> | LDAP domain to use for users (eg: ou=People,dc=example,dc=org). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.useTokenGroups">UseTokenGroups</a></code> | <code>interface{}</code> | If true, use the Active Directory tokenGroups constructed attribute of the user to find the group memberships. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Binddn`<sup>Required</sup> <a name="Binddn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.binddn"></a>

```go
Binddn *string
```

- *Type:* *string

Distinguished name of object to bind when performing user and group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#binddn AdSecretBackend#binddn}

---

##### `Bindpass`<sup>Required</sup> <a name="Bindpass" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.bindpass"></a>

```go
Bindpass *string
```

- *Type:* *string

LDAP password for searching for the user DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#bindpass AdSecretBackend#bindpass}

---

##### `AnonymousGroupSearch`<sup>Optional</sup> <a name="AnonymousGroupSearch" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.anonymousGroupSearch"></a>

```go
AnonymousGroupSearch interface{}
```

- *Type:* interface{}

Use anonymous binds when performing LDAP group searches (if true the initial credentials will still be used for the initial connection test).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#anonymous_group_search AdSecretBackend#anonymous_group_search}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The mount path for a backend, for example, the path given in "$ vault auth enable -path=my-ad ad".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#backend AdSecretBackend#backend}

---

##### `CaseSensitiveNames`<sup>Optional</sup> <a name="CaseSensitiveNames" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.caseSensitiveNames"></a>

```go
CaseSensitiveNames interface{}
```

- *Type:* interface{}

If true, case sensitivity will be used when comparing usernames and groups for matching policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#case_sensitive_names AdSecretBackend#case_sensitive_names}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#certificate AdSecretBackend#certificate}

---

##### `ClientTlsCert`<sup>Optional</sup> <a name="ClientTlsCert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsCert"></a>

```go
ClientTlsCert *string
```

- *Type:* *string

Client certificate to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#client_tls_cert AdSecretBackend#client_tls_cert}

---

##### `ClientTlsKey`<sup>Optional</sup> <a name="ClientTlsKey" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsKey"></a>

```go
ClientTlsKey *string
```

- *Type:* *string

Client certificate key to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#client_tls_key AdSecretBackend#client_tls_key}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```go
DefaultLeaseTtlSeconds *f64
```

- *Type:* *f64

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#default_lease_ttl_seconds AdSecretBackend#default_lease_ttl_seconds}

---

##### `DenyNullBind`<sup>Optional</sup> <a name="DenyNullBind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.denyNullBind"></a>

```go
DenyNullBind interface{}
```

- *Type:* interface{}

Denies an unauthenticated LDAP bind request if the user's password is empty; defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#deny_null_bind AdSecretBackend#deny_null_bind}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#description AdSecretBackend#description}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.disableRemount"></a>

```go
DisableRemount interface{}
```

- *Type:* interface{}

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#disable_remount AdSecretBackend#disable_remount}

---

##### `Discoverdn`<sup>Optional</sup> <a name="Discoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.discoverdn"></a>

```go
Discoverdn interface{}
```

- *Type:* interface{}

Use anonymous bind to discover the bind DN of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#discoverdn AdSecretBackend#discoverdn}

---

##### `Formatter`<sup>Optional</sup> <a name="Formatter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.formatter"></a>

```go
Formatter *string
```

- *Type:* *string

Text to insert the password into, ex. "customPrefix{{PASSWORD}}customSuffix".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#formatter AdSecretBackend#formatter}

---

##### `Groupattr`<sup>Optional</sup> <a name="Groupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupattr"></a>

```go
Groupattr *string
```

- *Type:* *string

LDAP attribute to follow on objects returned by <groupfilter> in order to enumerate user group membership.

Examples: "cn" or "memberOf", etc. Default: cn

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#groupattr AdSecretBackend#groupattr}

---

##### `Groupdn`<sup>Optional</sup> <a name="Groupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupdn"></a>

```go
Groupdn *string
```

- *Type:* *string

LDAP search base to use for group membership search (eg: ou=Groups,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#groupdn AdSecretBackend#groupdn}

---

##### `Groupfilter`<sup>Optional</sup> <a name="Groupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupfilter"></a>

```go
Groupfilter *string
```

- *Type:* *string

Go template for querying group membership of user.

The template can access the following context variables: UserDN, Username Example: (&(objectClass=group)(member:1.2.840.113556.1.4.1941:={{.UserDN}})) Default: (|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#groupfilter AdSecretBackend#groupfilter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#id AdSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.insecureTls"></a>

```go
InsecureTls interface{}
```

- *Type:* interface{}

Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#insecure_tls AdSecretBackend#insecure_tls}

---

##### `LastRotationTolerance`<sup>Optional</sup> <a name="LastRotationTolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lastRotationTolerance"></a>

```go
LastRotationTolerance *f64
```

- *Type:* *f64

The number of seconds after a Vault rotation where, if Active Directory shows a later rotation, it should be considered out-of-band.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#last_rotation_tolerance AdSecretBackend#last_rotation_tolerance}

---

##### `Length`<sup>Optional</sup> <a name="Length" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.length"></a>

```go
Length *f64
```

- *Type:* *f64

The desired length of passwords that Vault generates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#length AdSecretBackend#length}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.local"></a>

```go
Local interface{}
```

- *Type:* interface{}

Mark the secrets engine as local-only.

Local engines are not replicated or removed by replication.Tolerance duration to use when checking the last rotation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#local AdSecretBackend#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```go
MaxLeaseTtlSeconds *f64
```

- *Type:* *f64

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#max_lease_ttl_seconds AdSecretBackend#max_lease_ttl_seconds}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxTtl"></a>

```go
MaxTtl *f64
```

- *Type:* *f64

In seconds, the maximum password time-to-live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#max_ttl AdSecretBackend#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#namespace AdSecretBackend#namespace}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.passwordPolicy"></a>

```go
PasswordPolicy *string
```

- *Type:* *string

Name of the password policy to use to generate passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#password_policy AdSecretBackend#password_policy}

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.requestTimeout"></a>

```go
RequestTimeout *f64
```

- *Type:* *f64

Timeout, in seconds, for the connection when making requests against the server before returning back an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#request_timeout AdSecretBackend#request_timeout}

---

##### `Starttls`<sup>Optional</sup> <a name="Starttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.starttls"></a>

```go
Starttls interface{}
```

- *Type:* interface{}

Issue a StartTLS command after establishing unencrypted connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#starttls AdSecretBackend#starttls}

---

##### `TlsMaxVersion`<sup>Optional</sup> <a name="TlsMaxVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMaxVersion"></a>

```go
TlsMaxVersion *string
```

- *Type:* *string

Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#tls_max_version AdSecretBackend#tls_max_version}

---

##### `TlsMinVersion`<sup>Optional</sup> <a name="TlsMinVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMinVersion"></a>

```go
TlsMinVersion *string
```

- *Type:* *string

Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#tls_min_version AdSecretBackend#tls_min_version}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

In seconds, the default password time-to-live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#ttl AdSecretBackend#ttl}

---

##### `Upndomain`<sup>Optional</sup> <a name="Upndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.upndomain"></a>

```go
Upndomain *string
```

- *Type:* *string

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#upndomain AdSecretBackend#upndomain}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#url AdSecretBackend#url}

---

##### `UsePre111GroupCnBehavior`<sup>Optional</sup> <a name="UsePre111GroupCnBehavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.usePre111GroupCnBehavior"></a>

```go
UsePre111GroupCnBehavior interface{}
```

- *Type:* interface{}

In Vault 1.1.1 a fix for handling group CN values of different cases unfortunately introduced a regression that could cause previously defined groups to not be found due to a change in the resulting name. If set true, the pre-1.1.1 behavior for matching group CNs will be used. This is only needed in some upgrade scenarios for backwards compatibility. It is enabled by default if the config is upgraded but disabled by default on new configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#use_pre111_group_cn_behavior AdSecretBackend#use_pre111_group_cn_behavior}

---

##### `Userattr`<sup>Optional</sup> <a name="Userattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userattr"></a>

```go
Userattr *string
```

- *Type:* *string

Attribute used for users (default: cn).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#userattr AdSecretBackend#userattr}

---

##### `Userdn`<sup>Optional</sup> <a name="Userdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userdn"></a>

```go
Userdn *string
```

- *Type:* *string

LDAP domain to use for users (eg: ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#userdn AdSecretBackend#userdn}

---

##### `UseTokenGroups`<sup>Optional</sup> <a name="UseTokenGroups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.useTokenGroups"></a>

```go
UseTokenGroups interface{}
```

- *Type:* interface{}

If true, use the Active Directory tokenGroups constructed attribute of the user to find the group memberships.

This will find all security groups including nested ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ad_secret_backend#use_token_groups AdSecretBackend#use_token_groups}

---



