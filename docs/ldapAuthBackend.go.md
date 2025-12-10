# `ldapAuthBackend` Submodule <a name="`ldapAuthBackend` Submodule" id="@cdktf/provider-vault.ldapAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapAuthBackend <a name="LdapAuthBackend" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend vault_ldap_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/ldapauthbackend"

ldapauthbackend.NewLdapAuthBackend(scope Construct, id *string, config LdapAuthBackendConfig) LdapAuthBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig">LdapAuthBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig">LdapAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.putTune">PutTune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetAliasMetadata">ResetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetAnonymousGroupSearch">ResetAnonymousGroupSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBinddn">ResetBinddn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBindpass">ResetBindpass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCaseSensitiveNames">ResetCaseSensitiveNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsCert">ResetClientTlsCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsKey">ResetClientTlsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetConnectionTimeout">ResetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDenyNullBind">ResetDenyNullBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDereferenceAliases">ResetDereferenceAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableAutomatedRotation">ResetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDiscoverdn">ResetDiscoverdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetEnableSamaccountnameLogin">ResetEnableSamaccountnameLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupattr">ResetGroupattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupdn">ResetGroupdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupfilter">ResetGroupfilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetMaxPageSize">ResetMaxPageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetStarttls">ResetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMaxVersion">ResetTlsMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMinVersion">ResetTlsMinVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenType">ResetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTune">ResetTune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUpndomain">ResetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserattr">ResetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserdn">ResetUserdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserfilter">ResetUserfilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUsernameAsAlias">ResetUsernameAsAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUseTokenGroups">ResetUseTokenGroups</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTune` <a name="PutTune" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.putTune"></a>

```go
func PutTune(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.putTune.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAliasMetadata` <a name="ResetAliasMetadata" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetAliasMetadata"></a>

```go
func ResetAliasMetadata()
```

##### `ResetAnonymousGroupSearch` <a name="ResetAnonymousGroupSearch" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetAnonymousGroupSearch"></a>

```go
func ResetAnonymousGroupSearch()
```

##### `ResetBinddn` <a name="ResetBinddn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBinddn"></a>

```go
func ResetBinddn()
```

##### `ResetBindpass` <a name="ResetBindpass" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBindpass"></a>

```go
func ResetBindpass()
```

##### `ResetCaseSensitiveNames` <a name="ResetCaseSensitiveNames" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCaseSensitiveNames"></a>

```go
func ResetCaseSensitiveNames()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetClientTlsCert` <a name="ResetClientTlsCert" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsCert"></a>

```go
func ResetClientTlsCert()
```

##### `ResetClientTlsKey` <a name="ResetClientTlsKey" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsKey"></a>

```go
func ResetClientTlsKey()
```

##### `ResetConnectionTimeout` <a name="ResetConnectionTimeout" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetConnectionTimeout"></a>

```go
func ResetConnectionTimeout()
```

##### `ResetDenyNullBind` <a name="ResetDenyNullBind" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDenyNullBind"></a>

```go
func ResetDenyNullBind()
```

##### `ResetDereferenceAliases` <a name="ResetDereferenceAliases" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDereferenceAliases"></a>

```go
func ResetDereferenceAliases()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableAutomatedRotation` <a name="ResetDisableAutomatedRotation" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableAutomatedRotation"></a>

```go
func ResetDisableAutomatedRotation()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableRemount"></a>

```go
func ResetDisableRemount()
```

##### `ResetDiscoverdn` <a name="ResetDiscoverdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDiscoverdn"></a>

```go
func ResetDiscoverdn()
```

##### `ResetEnableSamaccountnameLogin` <a name="ResetEnableSamaccountnameLogin" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetEnableSamaccountnameLogin"></a>

```go
func ResetEnableSamaccountnameLogin()
```

##### `ResetGroupattr` <a name="ResetGroupattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupattr"></a>

```go
func ResetGroupattr()
```

##### `ResetGroupdn` <a name="ResetGroupdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupdn"></a>

```go
func ResetGroupdn()
```

##### `ResetGroupfilter` <a name="ResetGroupfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupfilter"></a>

```go
func ResetGroupfilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetId"></a>

```go
func ResetId()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetInsecureTls"></a>

```go
func ResetInsecureTls()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetLocal"></a>

```go
func ResetLocal()
```

##### `ResetMaxPageSize` <a name="ResetMaxPageSize" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetMaxPageSize"></a>

```go
func ResetMaxPageSize()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRequestTimeout"></a>

```go
func ResetRequestTimeout()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationPeriod"></a>

```go
func ResetRotationPeriod()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationSchedule"></a>

```go
func ResetRotationSchedule()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationWindow"></a>

```go
func ResetRotationWindow()
```

##### `ResetStarttls` <a name="ResetStarttls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetStarttls"></a>

```go
func ResetStarttls()
```

##### `ResetTlsMaxVersion` <a name="ResetTlsMaxVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMaxVersion"></a>

```go
func ResetTlsMaxVersion()
```

##### `ResetTlsMinVersion` <a name="ResetTlsMinVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMinVersion"></a>

```go
func ResetTlsMinVersion()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenBoundCidrs"></a>

```go
func ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenExplicitMaxTtl"></a>

```go
func ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenMaxTtl"></a>

```go
func ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNoDefaultPolicy"></a>

```go
func ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNumUses"></a>

```go
func ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPeriod"></a>

```go
func ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPolicies"></a>

```go
func ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenTtl"></a>

```go
func ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenType"></a>

```go
func ResetTokenType()
```

##### `ResetTune` <a name="ResetTune" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTune"></a>

```go
func ResetTune()
```

##### `ResetUpndomain` <a name="ResetUpndomain" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUpndomain"></a>

```go
func ResetUpndomain()
```

##### `ResetUserattr` <a name="ResetUserattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserattr"></a>

```go
func ResetUserattr()
```

##### `ResetUserdn` <a name="ResetUserdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserdn"></a>

```go
func ResetUserdn()
```

##### `ResetUserfilter` <a name="ResetUserfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserfilter"></a>

```go
func ResetUserfilter()
```

##### `ResetUsernameAsAlias` <a name="ResetUsernameAsAlias" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUsernameAsAlias"></a>

```go
func ResetUsernameAsAlias()
```

##### `ResetUseTokenGroups` <a name="ResetUseTokenGroups" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUseTokenGroups"></a>

```go
func ResetUseTokenGroups()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LdapAuthBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/ldapauthbackend"

ldapauthbackend.LdapAuthBackend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/ldapauthbackend"

ldapauthbackend.LdapAuthBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/ldapauthbackend"

ldapauthbackend.LdapAuthBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/ldapauthbackend"

ldapauthbackend.LdapAuthBackend_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LdapAuthBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LdapAuthBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LdapAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LdapAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.accessor">Accessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tune">Tune</a></code> | <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList">LdapAuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.aliasMetadataInput">AliasMetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.anonymousGroupSearchInput">AnonymousGroupSearchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddnInput">BinddnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassInput">BindpassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNamesInput">CaseSensitiveNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCertInput">ClientTlsCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKeyInput">ClientTlsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connectionTimeoutInput">ConnectionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBindInput">DenyNullBindInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dereferenceAliasesInput">DereferenceAliasesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableAutomatedRotationInput">DisableAutomatedRotationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdnInput">DiscoverdnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.enableSamaccountnameLoginInput">EnableSamaccountnameLoginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattrInput">GroupattrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdnInput">GroupdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilterInput">GroupfilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.localInput">LocalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSizeInput">MaxPageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationWindowInput">RotationWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttlsInput">StarttlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersionInput">TlsMaxVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersionInput">TlsMinVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtlInput">TokenTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tuneInput">TuneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomainInput">UpndomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattrInput">UserattrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdnInput">UserdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilterInput">UserfilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAliasInput">UsernameAsAliasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroupsInput">UseTokenGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.aliasMetadata">AliasMetadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.anonymousGroupSearch">AnonymousGroupSearch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddn">Binddn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpass">Bindpass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCert">ClientTlsCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKey">ClientTlsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connectionTimeout">ConnectionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBind">DenyNullBind</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dereferenceAliases">DereferenceAliases</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdn">Discoverdn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.enableSamaccountnameLogin">EnableSamaccountnameLogin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattr">Groupattr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdn">Groupdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilter">Groupfilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.local">Local</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSize">MaxPageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.requestTimeout">RequestTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationPeriod">RotationPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationSchedule">RotationSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationWindow">RotationWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttls">Starttls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersion">TlsMinVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomain">Upndomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattr">Userattr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdn">Userdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilter">Userfilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAlias">UsernameAsAlias</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroups">UseTokenGroups</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.accessor"></a>

```go
func Accessor() *string
```

- *Type:* *string

---

##### `Tune`<sup>Required</sup> <a name="Tune" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tune"></a>

```go
func Tune() LdapAuthBackendTuneList
```

- *Type:* <a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList">LdapAuthBackendTuneList</a>

---

##### `AliasMetadataInput`<sup>Optional</sup> <a name="AliasMetadataInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.aliasMetadataInput"></a>

```go
func AliasMetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AnonymousGroupSearchInput`<sup>Optional</sup> <a name="AnonymousGroupSearchInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.anonymousGroupSearchInput"></a>

```go
func AnonymousGroupSearchInput() interface{}
```

- *Type:* interface{}

---

##### `BinddnInput`<sup>Optional</sup> <a name="BinddnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddnInput"></a>

```go
func BinddnInput() *string
```

- *Type:* *string

---

##### `BindpassInput`<sup>Optional</sup> <a name="BindpassInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassInput"></a>

```go
func BindpassInput() *string
```

- *Type:* *string

---

##### `CaseSensitiveNamesInput`<sup>Optional</sup> <a name="CaseSensitiveNamesInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNamesInput"></a>

```go
func CaseSensitiveNamesInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `ClientTlsCertInput`<sup>Optional</sup> <a name="ClientTlsCertInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCertInput"></a>

```go
func ClientTlsCertInput() *string
```

- *Type:* *string

---

##### `ClientTlsKeyInput`<sup>Optional</sup> <a name="ClientTlsKeyInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKeyInput"></a>

```go
func ClientTlsKeyInput() *string
```

- *Type:* *string

---

##### `ConnectionTimeoutInput`<sup>Optional</sup> <a name="ConnectionTimeoutInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connectionTimeoutInput"></a>

```go
func ConnectionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `DenyNullBindInput`<sup>Optional</sup> <a name="DenyNullBindInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBindInput"></a>

```go
func DenyNullBindInput() interface{}
```

- *Type:* interface{}

---

##### `DereferenceAliasesInput`<sup>Optional</sup> <a name="DereferenceAliasesInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dereferenceAliasesInput"></a>

```go
func DereferenceAliasesInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableAutomatedRotationInput`<sup>Optional</sup> <a name="DisableAutomatedRotationInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableAutomatedRotationInput"></a>

```go
func DisableAutomatedRotationInput() interface{}
```

- *Type:* interface{}

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemountInput"></a>

```go
func DisableRemountInput() interface{}
```

- *Type:* interface{}

---

##### `DiscoverdnInput`<sup>Optional</sup> <a name="DiscoverdnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdnInput"></a>

```go
func DiscoverdnInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSamaccountnameLoginInput`<sup>Optional</sup> <a name="EnableSamaccountnameLoginInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.enableSamaccountnameLoginInput"></a>

```go
func EnableSamaccountnameLoginInput() interface{}
```

- *Type:* interface{}

---

##### `GroupattrInput`<sup>Optional</sup> <a name="GroupattrInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattrInput"></a>

```go
func GroupattrInput() *string
```

- *Type:* *string

---

##### `GroupdnInput`<sup>Optional</sup> <a name="GroupdnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdnInput"></a>

```go
func GroupdnInput() *string
```

- *Type:* *string

---

##### `GroupfilterInput`<sup>Optional</sup> <a name="GroupfilterInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilterInput"></a>

```go
func GroupfilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTlsInput"></a>

```go
func InsecureTlsInput() interface{}
```

- *Type:* interface{}

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.localInput"></a>

```go
func LocalInput() interface{}
```

- *Type:* interface{}

---

##### `MaxPageSizeInput`<sup>Optional</sup> <a name="MaxPageSizeInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSizeInput"></a>

```go
func MaxPageSizeInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.requestTimeoutInput"></a>

```go
func RequestTimeoutInput() *f64
```

- *Type:* *f64

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationPeriodInput"></a>

```go
func RotationPeriodInput() *f64
```

- *Type:* *f64

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationScheduleInput"></a>

```go
func RotationScheduleInput() *string
```

- *Type:* *string

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationWindowInput"></a>

```go
func RotationWindowInput() *f64
```

- *Type:* *f64

---

##### `StarttlsInput`<sup>Optional</sup> <a name="StarttlsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttlsInput"></a>

```go
func StarttlsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsMaxVersionInput`<sup>Optional</sup> <a name="TlsMaxVersionInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersionInput"></a>

```go
func TlsMaxVersionInput() *string
```

- *Type:* *string

---

##### `TlsMinVersionInput`<sup>Optional</sup> <a name="TlsMinVersionInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersionInput"></a>

```go
func TlsMinVersionInput() *string
```

- *Type:* *string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrsInput"></a>

```go
func TokenBoundCidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtlInput"></a>

```go
func TokenExplicitMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtlInput"></a>

```go
func TokenMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicyInput"></a>

```go
func TokenNoDefaultPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUsesInput"></a>

```go
func TokenNumUsesInput() *f64
```

- *Type:* *f64

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriodInput"></a>

```go
func TokenPeriodInput() *f64
```

- *Type:* *f64

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPoliciesInput"></a>

```go
func TokenPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtlInput"></a>

```go
func TokenTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `TuneInput`<sup>Optional</sup> <a name="TuneInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tuneInput"></a>

```go
func TuneInput() interface{}
```

- *Type:* interface{}

---

##### `UpndomainInput`<sup>Optional</sup> <a name="UpndomainInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomainInput"></a>

```go
func UpndomainInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UserattrInput`<sup>Optional</sup> <a name="UserattrInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattrInput"></a>

```go
func UserattrInput() *string
```

- *Type:* *string

---

##### `UserdnInput`<sup>Optional</sup> <a name="UserdnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdnInput"></a>

```go
func UserdnInput() *string
```

- *Type:* *string

---

##### `UserfilterInput`<sup>Optional</sup> <a name="UserfilterInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilterInput"></a>

```go
func UserfilterInput() *string
```

- *Type:* *string

---

##### `UsernameAsAliasInput`<sup>Optional</sup> <a name="UsernameAsAliasInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAliasInput"></a>

```go
func UsernameAsAliasInput() interface{}
```

- *Type:* interface{}

---

##### `UseTokenGroupsInput`<sup>Optional</sup> <a name="UseTokenGroupsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroupsInput"></a>

```go
func UseTokenGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `AliasMetadata`<sup>Required</sup> <a name="AliasMetadata" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.aliasMetadata"></a>

```go
func AliasMetadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AnonymousGroupSearch`<sup>Required</sup> <a name="AnonymousGroupSearch" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.anonymousGroupSearch"></a>

```go
func AnonymousGroupSearch() interface{}
```

- *Type:* interface{}

---

##### `Binddn`<sup>Required</sup> <a name="Binddn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddn"></a>

```go
func Binddn() *string
```

- *Type:* *string

---

##### `Bindpass`<sup>Required</sup> <a name="Bindpass" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpass"></a>

```go
func Bindpass() *string
```

- *Type:* *string

---

##### `CaseSensitiveNames`<sup>Required</sup> <a name="CaseSensitiveNames" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNames"></a>

```go
func CaseSensitiveNames() interface{}
```

- *Type:* interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `ClientTlsCert`<sup>Required</sup> <a name="ClientTlsCert" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCert"></a>

```go
func ClientTlsCert() *string
```

- *Type:* *string

---

##### `ClientTlsKey`<sup>Required</sup> <a name="ClientTlsKey" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKey"></a>

```go
func ClientTlsKey() *string
```

- *Type:* *string

---

##### `ConnectionTimeout`<sup>Required</sup> <a name="ConnectionTimeout" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connectionTimeout"></a>

```go
func ConnectionTimeout() *f64
```

- *Type:* *f64

---

##### `DenyNullBind`<sup>Required</sup> <a name="DenyNullBind" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBind"></a>

```go
func DenyNullBind() interface{}
```

- *Type:* interface{}

---

##### `DereferenceAliases`<sup>Required</sup> <a name="DereferenceAliases" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dereferenceAliases"></a>

```go
func DereferenceAliases() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableAutomatedRotation`<sup>Required</sup> <a name="DisableAutomatedRotation" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableAutomatedRotation"></a>

```go
func DisableAutomatedRotation() interface{}
```

- *Type:* interface{}

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemount"></a>

```go
func DisableRemount() interface{}
```

- *Type:* interface{}

---

##### `Discoverdn`<sup>Required</sup> <a name="Discoverdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdn"></a>

```go
func Discoverdn() interface{}
```

- *Type:* interface{}

---

##### `EnableSamaccountnameLogin`<sup>Required</sup> <a name="EnableSamaccountnameLogin" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.enableSamaccountnameLogin"></a>

```go
func EnableSamaccountnameLogin() interface{}
```

- *Type:* interface{}

---

##### `Groupattr`<sup>Required</sup> <a name="Groupattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattr"></a>

```go
func Groupattr() *string
```

- *Type:* *string

---

##### `Groupdn`<sup>Required</sup> <a name="Groupdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdn"></a>

```go
func Groupdn() *string
```

- *Type:* *string

---

##### `Groupfilter`<sup>Required</sup> <a name="Groupfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilter"></a>

```go
func Groupfilter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTls"></a>

```go
func InsecureTls() interface{}
```

- *Type:* interface{}

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.local"></a>

```go
func Local() interface{}
```

- *Type:* interface{}

---

##### `MaxPageSize`<sup>Required</sup> <a name="MaxPageSize" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSize"></a>

```go
func MaxPageSize() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `RequestTimeout`<sup>Required</sup> <a name="RequestTimeout" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.requestTimeout"></a>

```go
func RequestTimeout() *f64
```

- *Type:* *f64

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationPeriod"></a>

```go
func RotationPeriod() *f64
```

- *Type:* *f64

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationSchedule"></a>

```go
func RotationSchedule() *string
```

- *Type:* *string

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationWindow"></a>

```go
func RotationWindow() *f64
```

- *Type:* *f64

---

##### `Starttls`<sup>Required</sup> <a name="Starttls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttls"></a>

```go
func Starttls() interface{}
```

- *Type:* interface{}

---

##### `TlsMaxVersion`<sup>Required</sup> <a name="TlsMaxVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersion"></a>

```go
func TlsMaxVersion() *string
```

- *Type:* *string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersion"></a>

```go
func TlsMinVersion() *string
```

- *Type:* *string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrs"></a>

```go
func TokenBoundCidrs() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtl"></a>

```go
func TokenExplicitMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtl"></a>

```go
func TokenMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicy"></a>

```go
func TokenNoDefaultPolicy() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUses"></a>

```go
func TokenNumUses() *f64
```

- *Type:* *f64

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriod"></a>

```go
func TokenPeriod() *f64
```

- *Type:* *f64

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPolicies"></a>

```go
func TokenPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtl"></a>

```go
func TokenTtl() *f64
```

- *Type:* *f64

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

##### `Upndomain`<sup>Required</sup> <a name="Upndomain" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomain"></a>

```go
func Upndomain() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Userattr`<sup>Required</sup> <a name="Userattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattr"></a>

```go
func Userattr() *string
```

- *Type:* *string

---

##### `Userdn`<sup>Required</sup> <a name="Userdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdn"></a>

```go
func Userdn() *string
```

- *Type:* *string

---

##### `Userfilter`<sup>Required</sup> <a name="Userfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilter"></a>

```go
func Userfilter() *string
```

- *Type:* *string

---

##### `UsernameAsAlias`<sup>Required</sup> <a name="UsernameAsAlias" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAlias"></a>

```go
func UsernameAsAlias() interface{}
```

- *Type:* interface{}

---

##### `UseTokenGroups`<sup>Required</sup> <a name="UseTokenGroups" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroups"></a>

```go
func UseTokenGroups() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapAuthBackendConfig <a name="LdapAuthBackendConfig" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/ldapauthbackend"

&ldapauthbackend.LdapAuthBackendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Url: *string,
	AliasMetadata: *map[string]*string,
	AnonymousGroupSearch: interface{},
	Binddn: *string,
	Bindpass: *string,
	CaseSensitiveNames: interface{},
	Certificate: *string,
	ClientTlsCert: *string,
	ClientTlsKey: *string,
	ConnectionTimeout: *f64,
	DenyNullBind: interface{},
	DereferenceAliases: *string,
	Description: *string,
	DisableAutomatedRotation: interface{},
	DisableRemount: interface{},
	Discoverdn: interface{},
	EnableSamaccountnameLogin: interface{},
	Groupattr: *string,
	Groupdn: *string,
	Groupfilter: *string,
	Id: *string,
	InsecureTls: interface{},
	Local: interface{},
	MaxPageSize: *f64,
	Namespace: *string,
	Path: *string,
	RequestTimeout: *f64,
	RotationPeriod: *f64,
	RotationSchedule: *string,
	RotationWindow: *f64,
	Starttls: interface{},
	TlsMaxVersion: *string,
	TlsMinVersion: *string,
	TokenBoundCidrs: *[]*string,
	TokenExplicitMaxTtl: *f64,
	TokenMaxTtl: *f64,
	TokenNoDefaultPolicy: interface{},
	TokenNumUses: *f64,
	TokenPeriod: *f64,
	TokenPolicies: *[]*string,
	TokenTtl: *f64,
	TokenType: *string,
	Tune: interface{},
	Upndomain: *string,
	Userattr: *string,
	Userdn: *string,
	Userfilter: *string,
	UsernameAsAlias: interface{},
	UseTokenGroups: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#url LdapAuthBackend#url}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>*map[string]*string</code> | The metadata to be tied to generated entity alias. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.anonymousGroupSearch">AnonymousGroupSearch</a></code> | <code>interface{}</code> | Allows anonymous group searches. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.binddn">Binddn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#binddn LdapAuthBackend#binddn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.bindpass">Bindpass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#bindpass LdapAuthBackend#bindpass}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#case_sensitive_names LdapAuthBackend#case_sensitive_names}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#certificate LdapAuthBackend#certificate}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsCert">ClientTlsCert</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#client_tls_cert LdapAuthBackend#client_tls_cert}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsKey">ClientTlsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#client_tls_key LdapAuthBackend#client_tls_key}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connectionTimeout">ConnectionTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#connection_timeout LdapAuthBackend#connection_timeout}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.denyNullBind">DenyNullBind</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#deny_null_bind LdapAuthBackend#deny_null_bind}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dereferenceAliases">DereferenceAliases</a></code> | <code>*string</code> | Specifies how aliases are dereferenced during LDAP searches. Valid values are 'never','searching','finding', and 'always'. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#description LdapAuthBackend#description}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>interface{}</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.discoverdn">Discoverdn</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#discoverdn LdapAuthBackend#discoverdn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.enableSamaccountnameLogin">EnableSamaccountnameLogin</a></code> | <code>interface{}</code> | Enables login using the sAMAccountName attribute. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupattr">Groupattr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#groupattr LdapAuthBackend#groupattr}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupdn">Groupdn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#groupdn LdapAuthBackend#groupdn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupfilter">Groupfilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#groupfilter LdapAuthBackend#groupfilter}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#id LdapAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#insecure_tls LdapAuthBackend#insecure_tls}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.local">Local</a></code> | <code>interface{}</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.maxPageSize">MaxPageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#max_page_size LdapAuthBackend#max_page_size}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#path LdapAuthBackend#path}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.requestTimeout">RequestTimeout</a></code> | <code>*f64</code> | The timeout(in sec) for requests to the LDAP server. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>*f64</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>*string</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationWindow">RotationWindow</a></code> | <code>*f64</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.starttls">Starttls</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#starttls LdapAuthBackend#starttls}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#tls_max_version LdapAuthBackend#tls_max_version}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#tls_min_version LdapAuthBackend#tls_min_version}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenType">TokenType</a></code> | <code>*string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tune">Tune</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#tune LdapAuthBackend#tune}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.upndomain">Upndomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#upndomain LdapAuthBackend#upndomain}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userattr">Userattr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#userattr LdapAuthBackend#userattr}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userdn">Userdn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#userdn LdapAuthBackend#userdn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userfilter">Userfilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#userfilter LdapAuthBackend#userfilter}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.usernameAsAlias">UsernameAsAlias</a></code> | <code>interface{}</code> | Force the auth method to use the username passed by the user as the alias name. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.useTokenGroups">UseTokenGroups</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#use_token_groups LdapAuthBackend#use_token_groups}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#url LdapAuthBackend#url}.

---

##### `AliasMetadata`<sup>Optional</sup> <a name="AliasMetadata" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.aliasMetadata"></a>

```go
AliasMetadata *map[string]*string
```

- *Type:* *map[string]*string

The metadata to be tied to generated entity alias.

This should be a list or map containing the metadata in key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#alias_metadata LdapAuthBackend#alias_metadata}

---

##### `AnonymousGroupSearch`<sup>Optional</sup> <a name="AnonymousGroupSearch" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.anonymousGroupSearch"></a>

```go
AnonymousGroupSearch interface{}
```

- *Type:* interface{}

Allows anonymous group searches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#anonymous_group_search LdapAuthBackend#anonymous_group_search}

---

##### `Binddn`<sup>Optional</sup> <a name="Binddn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.binddn"></a>

```go
Binddn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#binddn LdapAuthBackend#binddn}.

---

##### `Bindpass`<sup>Optional</sup> <a name="Bindpass" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.bindpass"></a>

```go
Bindpass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#bindpass LdapAuthBackend#bindpass}.

---

##### `CaseSensitiveNames`<sup>Optional</sup> <a name="CaseSensitiveNames" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.caseSensitiveNames"></a>

```go
CaseSensitiveNames interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#case_sensitive_names LdapAuthBackend#case_sensitive_names}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#certificate LdapAuthBackend#certificate}.

---

##### `ClientTlsCert`<sup>Optional</sup> <a name="ClientTlsCert" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsCert"></a>

```go
ClientTlsCert *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#client_tls_cert LdapAuthBackend#client_tls_cert}.

---

##### `ClientTlsKey`<sup>Optional</sup> <a name="ClientTlsKey" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsKey"></a>

```go
ClientTlsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#client_tls_key LdapAuthBackend#client_tls_key}.

---

##### `ConnectionTimeout`<sup>Optional</sup> <a name="ConnectionTimeout" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connectionTimeout"></a>

```go
ConnectionTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#connection_timeout LdapAuthBackend#connection_timeout}.

---

##### `DenyNullBind`<sup>Optional</sup> <a name="DenyNullBind" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.denyNullBind"></a>

```go
DenyNullBind interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#deny_null_bind LdapAuthBackend#deny_null_bind}.

---

##### `DereferenceAliases`<sup>Optional</sup> <a name="DereferenceAliases" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dereferenceAliases"></a>

```go
DereferenceAliases *string
```

- *Type:* *string

Specifies how aliases are dereferenced during LDAP searches. Valid values are 'never','searching','finding', and 'always'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#dereference_aliases LdapAuthBackend#dereference_aliases}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#description LdapAuthBackend#description}.

---

##### `DisableAutomatedRotation`<sup>Optional</sup> <a name="DisableAutomatedRotation" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableAutomatedRotation"></a>

```go
DisableAutomatedRotation interface{}
```

- *Type:* interface{}

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#disable_automated_rotation LdapAuthBackend#disable_automated_rotation}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableRemount"></a>

```go
DisableRemount interface{}
```

- *Type:* interface{}

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#disable_remount LdapAuthBackend#disable_remount}

---

##### `Discoverdn`<sup>Optional</sup> <a name="Discoverdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.discoverdn"></a>

```go
Discoverdn interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#discoverdn LdapAuthBackend#discoverdn}.

---

##### `EnableSamaccountnameLogin`<sup>Optional</sup> <a name="EnableSamaccountnameLogin" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.enableSamaccountnameLogin"></a>

```go
EnableSamaccountnameLogin interface{}
```

- *Type:* interface{}

Enables login using the sAMAccountName attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#enable_samaccountname_login LdapAuthBackend#enable_samaccountname_login}

---

##### `Groupattr`<sup>Optional</sup> <a name="Groupattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupattr"></a>

```go
Groupattr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#groupattr LdapAuthBackend#groupattr}.

---

##### `Groupdn`<sup>Optional</sup> <a name="Groupdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupdn"></a>

```go
Groupdn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#groupdn LdapAuthBackend#groupdn}.

---

##### `Groupfilter`<sup>Optional</sup> <a name="Groupfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupfilter"></a>

```go
Groupfilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#groupfilter LdapAuthBackend#groupfilter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#id LdapAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.insecureTls"></a>

```go
InsecureTls interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#insecure_tls LdapAuthBackend#insecure_tls}.

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.local"></a>

```go
Local interface{}
```

- *Type:* interface{}

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#local LdapAuthBackend#local}

---

##### `MaxPageSize`<sup>Optional</sup> <a name="MaxPageSize" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.maxPageSize"></a>

```go
MaxPageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#max_page_size LdapAuthBackend#max_page_size}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#namespace LdapAuthBackend#namespace}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#path LdapAuthBackend#path}.

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.requestTimeout"></a>

```go
RequestTimeout *f64
```

- *Type:* *f64

The timeout(in sec) for requests to the LDAP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#request_timeout LdapAuthBackend#request_timeout}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationPeriod"></a>

```go
RotationPeriod *f64
```

- *Type:* *f64

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#rotation_period LdapAuthBackend#rotation_period}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationSchedule"></a>

```go
RotationSchedule *string
```

- *Type:* *string

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#rotation_schedule LdapAuthBackend#rotation_schedule}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationWindow"></a>

```go
RotationWindow *f64
```

- *Type:* *f64

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#rotation_window LdapAuthBackend#rotation_window}

---

##### `Starttls`<sup>Optional</sup> <a name="Starttls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.starttls"></a>

```go
Starttls interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#starttls LdapAuthBackend#starttls}.

---

##### `TlsMaxVersion`<sup>Optional</sup> <a name="TlsMaxVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMaxVersion"></a>

```go
TlsMaxVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#tls_max_version LdapAuthBackend#tls_max_version}.

---

##### `TlsMinVersion`<sup>Optional</sup> <a name="TlsMinVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMinVersion"></a>

```go
TlsMinVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#tls_min_version LdapAuthBackend#tls_min_version}.

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenBoundCidrs"></a>

```go
TokenBoundCidrs *[]*string
```

- *Type:* *[]*string

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_bound_cidrs LdapAuthBackend#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenExplicitMaxTtl"></a>

```go
TokenExplicitMaxTtl *f64
```

- *Type:* *f64

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_explicit_max_ttl LdapAuthBackend#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenMaxTtl"></a>

```go
TokenMaxTtl *f64
```

- *Type:* *f64

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_max_ttl LdapAuthBackend#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNoDefaultPolicy"></a>

```go
TokenNoDefaultPolicy interface{}
```

- *Type:* interface{}

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_no_default_policy LdapAuthBackend#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNumUses"></a>

```go
TokenNumUses *f64
```

- *Type:* *f64

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_num_uses LdapAuthBackend#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPeriod"></a>

```go
TokenPeriod *f64
```

- *Type:* *f64

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_period LdapAuthBackend#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPolicies"></a>

```go
TokenPolicies *[]*string
```

- *Type:* *[]*string

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_policies LdapAuthBackend#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenTtl"></a>

```go
TokenTtl *f64
```

- *Type:* *f64

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_ttl LdapAuthBackend#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_type LdapAuthBackend#token_type}

---

##### `Tune`<sup>Optional</sup> <a name="Tune" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tune"></a>

```go
Tune interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#tune LdapAuthBackend#tune}.

---

##### `Upndomain`<sup>Optional</sup> <a name="Upndomain" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.upndomain"></a>

```go
Upndomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#upndomain LdapAuthBackend#upndomain}.

---

##### `Userattr`<sup>Optional</sup> <a name="Userattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userattr"></a>

```go
Userattr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#userattr LdapAuthBackend#userattr}.

---

##### `Userdn`<sup>Optional</sup> <a name="Userdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userdn"></a>

```go
Userdn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#userdn LdapAuthBackend#userdn}.

---

##### `Userfilter`<sup>Optional</sup> <a name="Userfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userfilter"></a>

```go
Userfilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#userfilter LdapAuthBackend#userfilter}.

---

##### `UsernameAsAlias`<sup>Optional</sup> <a name="UsernameAsAlias" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.usernameAsAlias"></a>

```go
UsernameAsAlias interface{}
```

- *Type:* interface{}

Force the auth method to use the username passed by the user as the alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#username_as_alias LdapAuthBackend#username_as_alias}

---

##### `UseTokenGroups`<sup>Optional</sup> <a name="UseTokenGroups" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.useTokenGroups"></a>

```go
UseTokenGroups interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#use_token_groups LdapAuthBackend#use_token_groups}.

---

### LdapAuthBackendTune <a name="LdapAuthBackendTune" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/ldapauthbackend"

&ldapauthbackend.LdapAuthBackendTune {
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
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#allowed_response_headers LdapAuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#audit_non_hmac_request_keys LdapAuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#audit_non_hmac_response_keys LdapAuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#default_lease_ttl LdapAuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.listingVisibility">ListingVisibility</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#listing_visibility LdapAuthBackend#listing_visibility}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#max_lease_ttl LdapAuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#passthrough_request_headers LdapAuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.tokenType">TokenType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_type LdapAuthBackend#token_type}. |

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.allowedResponseHeaders"></a>

```go
AllowedResponseHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#allowed_response_headers LdapAuthBackend#allowed_response_headers}.

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.auditNonHmacRequestKeys"></a>

```go
AuditNonHmacRequestKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#audit_non_hmac_request_keys LdapAuthBackend#audit_non_hmac_request_keys}.

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.auditNonHmacResponseKeys"></a>

```go
AuditNonHmacResponseKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#audit_non_hmac_response_keys LdapAuthBackend#audit_non_hmac_response_keys}.

---

##### `DefaultLeaseTtl`<sup>Optional</sup> <a name="DefaultLeaseTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.defaultLeaseTtl"></a>

```go
DefaultLeaseTtl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#default_lease_ttl LdapAuthBackend#default_lease_ttl}.

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.listingVisibility"></a>

```go
ListingVisibility *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#listing_visibility LdapAuthBackend#listing_visibility}.

---

##### `MaxLeaseTtl`<sup>Optional</sup> <a name="MaxLeaseTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.maxLeaseTtl"></a>

```go
MaxLeaseTtl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#max_lease_ttl LdapAuthBackend#max_lease_ttl}.

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.passthroughRequestHeaders"></a>

```go
PassthroughRequestHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#passthrough_request_headers LdapAuthBackend#passthrough_request_headers}.

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_type LdapAuthBackend#token_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LdapAuthBackendTuneList <a name="LdapAuthBackendTuneList" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/ldapauthbackend"

ldapauthbackend.NewLdapAuthBackendTuneList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LdapAuthBackendTuneList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.get"></a>

```go
func Get(index *f64) LdapAuthBackendTuneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LdapAuthBackendTuneOutputReference <a name="LdapAuthBackendTuneOutputReference" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/ldapauthbackend"

ldapauthbackend.NewLdapAuthBackendTuneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LdapAuthBackendTuneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetDefaultLeaseTtl">ResetDefaultLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetMaxLeaseTtl">ResetMaxLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```go
func ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```go
func ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```go
func ResetAuditNonHmacResponseKeys()
```

##### `ResetDefaultLeaseTtl` <a name="ResetDefaultLeaseTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```go
func ResetDefaultLeaseTtl()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetListingVisibility"></a>

```go
func ResetListingVisibility()
```

##### `ResetMaxLeaseTtl` <a name="ResetMaxLeaseTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```go
func ResetMaxLeaseTtl()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```go
func ResetPassthroughRequestHeaders()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetTokenType"></a>

```go
func ResetTokenType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.defaultLeaseTtlInput">DefaultLeaseTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.maxLeaseTtlInput">MaxLeaseTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.listingVisibility">ListingVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```go
func AllowedResponseHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```go
func AuditNonHmacRequestKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```go
func AuditNonHmacResponseKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultLeaseTtlInput`<sup>Optional</sup> <a name="DefaultLeaseTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```go
func DefaultLeaseTtlInput() *string
```

- *Type:* *string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```go
func ListingVisibilityInput() *string
```

- *Type:* *string

---

##### `MaxLeaseTtlInput`<sup>Optional</sup> <a name="MaxLeaseTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```go
func MaxLeaseTtlInput() *string
```

- *Type:* *string

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```go
func PassthroughRequestHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```go
func AllowedResponseHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```go
func AuditNonHmacRequestKeys() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```go
func AuditNonHmacResponseKeys() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultLeaseTtl`<sup>Required</sup> <a name="DefaultLeaseTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```go
func DefaultLeaseTtl() *string
```

- *Type:* *string

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.listingVisibility"></a>

```go
func ListingVisibility() *string
```

- *Type:* *string

---

##### `MaxLeaseTtl`<sup>Required</sup> <a name="MaxLeaseTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```go
func MaxLeaseTtl() *string
```

- *Type:* *string

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```go
func PassthroughRequestHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



