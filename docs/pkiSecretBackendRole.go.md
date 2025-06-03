# `pkiSecretBackendRole` Submodule <a name="`pkiSecretBackendRole` Submodule" id="@cdktf/provider-vault.pkiSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendRole <a name="PkiSecretBackendRole" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role vault_pki_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendrole"

pkisecretbackendrole.NewPkiSecretBackendRole(scope Construct, id *string, config PkiSecretBackendRoleConfig) PkiSecretBackendRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig">PkiSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig">PkiSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.putPolicyIdentifier">PutPolicyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowAnyName">ResetAllowAnyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowBareDomains">ResetAllowBareDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomains">ResetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomainsTemplate">ResetAllowedDomainsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedOtherSans">ResetAllowedOtherSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedSerialNumbers">ResetAllowedSerialNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSans">ResetAllowedUriSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSansTemplate">ResetAllowedUriSansTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUserIds">ResetAllowedUserIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowGlobDomains">ResetAllowGlobDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowIpSans">ResetAllowIpSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowLocalhost">ResetAllowLocalhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowSubdomains">ResetAllowSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowWildcardCertificates">ResetAllowWildcardCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetBasicConstraintsValidForNonCa">ResetBasicConstraintsValidForNonCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetClientFlag">ResetClientFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCnValidations">ResetCnValidations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCodeSigningFlag">ResetCodeSigningFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEmailProtectionFlag">ResetEmailProtectionFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEnforceHostnames">ResetEnforceHostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetExtKeyUsage">ResetExtKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetExtKeyUsageOids">ResetExtKeyUsageOids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetGenerateLease">ResetGenerateLease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetIssuerRef">ResetIssuerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyBits">ResetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyUsage">ResetKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNoStore">ResetNoStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNoStoreMetadata">ResetNoStoreMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNotAfter">ResetNotAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNotBeforeDuration">ResetNotBeforeDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOu">ResetOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifier">ResetPolicyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifiers">ResetPolicyIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetRequireCn">ResetRequireCn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetSerialNumberSource">ResetSerialNumberSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetServerFlag">ResetServerFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetSignatureBits">ResetSignatureBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetStreetAddress">ResetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrCommonName">ResetUseCsrCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrSans">ResetUseCsrSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUsePss">ResetUsePss</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicyIdentifier` <a name="PutPolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.putPolicyIdentifier"></a>

```go
func PutPolicyIdentifier(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.putPolicyIdentifier.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowAnyName` <a name="ResetAllowAnyName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowAnyName"></a>

```go
func ResetAllowAnyName()
```

##### `ResetAllowBareDomains` <a name="ResetAllowBareDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowBareDomains"></a>

```go
func ResetAllowBareDomains()
```

##### `ResetAllowedDomains` <a name="ResetAllowedDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomains"></a>

```go
func ResetAllowedDomains()
```

##### `ResetAllowedDomainsTemplate` <a name="ResetAllowedDomainsTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomainsTemplate"></a>

```go
func ResetAllowedDomainsTemplate()
```

##### `ResetAllowedOtherSans` <a name="ResetAllowedOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedOtherSans"></a>

```go
func ResetAllowedOtherSans()
```

##### `ResetAllowedSerialNumbers` <a name="ResetAllowedSerialNumbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedSerialNumbers"></a>

```go
func ResetAllowedSerialNumbers()
```

##### `ResetAllowedUriSans` <a name="ResetAllowedUriSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSans"></a>

```go
func ResetAllowedUriSans()
```

##### `ResetAllowedUriSansTemplate` <a name="ResetAllowedUriSansTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSansTemplate"></a>

```go
func ResetAllowedUriSansTemplate()
```

##### `ResetAllowedUserIds` <a name="ResetAllowedUserIds" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUserIds"></a>

```go
func ResetAllowedUserIds()
```

##### `ResetAllowGlobDomains` <a name="ResetAllowGlobDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowGlobDomains"></a>

```go
func ResetAllowGlobDomains()
```

##### `ResetAllowIpSans` <a name="ResetAllowIpSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowIpSans"></a>

```go
func ResetAllowIpSans()
```

##### `ResetAllowLocalhost` <a name="ResetAllowLocalhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowLocalhost"></a>

```go
func ResetAllowLocalhost()
```

##### `ResetAllowSubdomains` <a name="ResetAllowSubdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowSubdomains"></a>

```go
func ResetAllowSubdomains()
```

##### `ResetAllowWildcardCertificates` <a name="ResetAllowWildcardCertificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowWildcardCertificates"></a>

```go
func ResetAllowWildcardCertificates()
```

##### `ResetBasicConstraintsValidForNonCa` <a name="ResetBasicConstraintsValidForNonCa" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetBasicConstraintsValidForNonCa"></a>

```go
func ResetBasicConstraintsValidForNonCa()
```

##### `ResetClientFlag` <a name="ResetClientFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetClientFlag"></a>

```go
func ResetClientFlag()
```

##### `ResetCnValidations` <a name="ResetCnValidations" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCnValidations"></a>

```go
func ResetCnValidations()
```

##### `ResetCodeSigningFlag` <a name="ResetCodeSigningFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCodeSigningFlag"></a>

```go
func ResetCodeSigningFlag()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetEmailProtectionFlag` <a name="ResetEmailProtectionFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEmailProtectionFlag"></a>

```go
func ResetEmailProtectionFlag()
```

##### `ResetEnforceHostnames` <a name="ResetEnforceHostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEnforceHostnames"></a>

```go
func ResetEnforceHostnames()
```

##### `ResetExtKeyUsage` <a name="ResetExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetExtKeyUsage"></a>

```go
func ResetExtKeyUsage()
```

##### `ResetExtKeyUsageOids` <a name="ResetExtKeyUsageOids" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetExtKeyUsageOids"></a>

```go
func ResetExtKeyUsageOids()
```

##### `ResetGenerateLease` <a name="ResetGenerateLease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetGenerateLease"></a>

```go
func ResetGenerateLease()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetId"></a>

```go
func ResetId()
```

##### `ResetIssuerRef` <a name="ResetIssuerRef" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetIssuerRef"></a>

```go
func ResetIssuerRef()
```

##### `ResetKeyBits` <a name="ResetKeyBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyBits"></a>

```go
func ResetKeyBits()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyType"></a>

```go
func ResetKeyType()
```

##### `ResetKeyUsage` <a name="ResetKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyUsage"></a>

```go
func ResetKeyUsage()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetLocality"></a>

```go
func ResetLocality()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNoStore` <a name="ResetNoStore" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNoStore"></a>

```go
func ResetNoStore()
```

##### `ResetNoStoreMetadata` <a name="ResetNoStoreMetadata" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNoStoreMetadata"></a>

```go
func ResetNoStoreMetadata()
```

##### `ResetNotAfter` <a name="ResetNotAfter" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNotAfter"></a>

```go
func ResetNotAfter()
```

##### `ResetNotBeforeDuration` <a name="ResetNotBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNotBeforeDuration"></a>

```go
func ResetNotBeforeDuration()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetOu` <a name="ResetOu" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOu"></a>

```go
func ResetOu()
```

##### `ResetPolicyIdentifier` <a name="ResetPolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifier"></a>

```go
func ResetPolicyIdentifier()
```

##### `ResetPolicyIdentifiers` <a name="ResetPolicyIdentifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifiers"></a>

```go
func ResetPolicyIdentifiers()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetProvince"></a>

```go
func ResetProvince()
```

##### `ResetRequireCn` <a name="ResetRequireCn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetRequireCn"></a>

```go
func ResetRequireCn()
```

##### `ResetSerialNumberSource` <a name="ResetSerialNumberSource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetSerialNumberSource"></a>

```go
func ResetSerialNumberSource()
```

##### `ResetServerFlag` <a name="ResetServerFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetServerFlag"></a>

```go
func ResetServerFlag()
```

##### `ResetSignatureBits` <a name="ResetSignatureBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetSignatureBits"></a>

```go
func ResetSignatureBits()
```

##### `ResetStreetAddress` <a name="ResetStreetAddress" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetStreetAddress"></a>

```go
func ResetStreetAddress()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetUseCsrCommonName` <a name="ResetUseCsrCommonName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrCommonName"></a>

```go
func ResetUseCsrCommonName()
```

##### `ResetUseCsrSans` <a name="ResetUseCsrSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrSans"></a>

```go
func ResetUseCsrSans()
```

##### `ResetUsePss` <a name="ResetUsePss" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUsePss"></a>

```go
func ResetUsePss()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendrole"

pkisecretbackendrole.PkiSecretBackendRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendrole"

pkisecretbackendrole.PkiSecretBackendRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendrole"

pkisecretbackendrole.PkiSecretBackendRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendrole"

pkisecretbackendrole.PkiSecretBackendRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PkiSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifier">PolicyIdentifier</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList">PkiSecretBackendRolePolicyIdentifierList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyNameInput">AllowAnyNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomainsInput">AllowBareDomainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsInput">AllowedDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplateInput">AllowedDomainsTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSansInput">AllowedOtherSansInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbersInput">AllowedSerialNumbersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansInput">AllowedUriSansInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplateInput">AllowedUriSansTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIdsInput">AllowedUserIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomainsInput">AllowGlobDomainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSansInput">AllowIpSansInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhostInput">AllowLocalhostInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomainsInput">AllowSubdomainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificatesInput">AllowWildcardCertificatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCaInput">BasicConstraintsValidForNonCaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlagInput">ClientFlagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.cnValidationsInput">CnValidationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlagInput">CodeSigningFlagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.countryInput">CountryInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlagInput">EmailProtectionFlagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnamesInput">EnforceHostnamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageInput">ExtKeyUsageInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageOidsInput">ExtKeyUsageOidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLeaseInput">GenerateLeaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRefInput">IssuerRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBitsInput">KeyBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsageInput">KeyUsageInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.localityInput">LocalityInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtlInput">MaxTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStoreInput">NoStoreInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStoreMetadataInput">NoStoreMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notAfterInput">NotAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDurationInput">NotBeforeDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organizationInput">OrganizationInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ouInput">OuInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifierInput">PolicyIdentifierInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiersInput">PolicyIdentifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCodeInput">PostalCodeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provinceInput">ProvinceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCnInput">RequireCnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serialNumberSourceInput">SerialNumberSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlagInput">ServerFlagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.signatureBitsInput">SignatureBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddressInput">StreetAddressInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonNameInput">UseCsrCommonNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSansInput">UseCsrSansInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.usePssInput">UsePssInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyName">AllowAnyName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomains">AllowBareDomains</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomains">AllowedDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplate">AllowedDomainsTemplate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSans">AllowedOtherSans</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbers">AllowedSerialNumbers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSans">AllowedUriSans</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplate">AllowedUriSansTemplate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIds">AllowedUserIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomains">AllowGlobDomains</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSans">AllowIpSans</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhost">AllowLocalhost</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomains">AllowSubdomains</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificates">AllowWildcardCertificates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCa">BasicConstraintsValidForNonCa</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlag">ClientFlag</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.cnValidations">CnValidations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlag">CodeSigningFlag</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.country">Country</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlag">EmailProtectionFlag</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnames">EnforceHostnames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsage">ExtKeyUsage</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageOids">ExtKeyUsageOids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLease">GenerateLease</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRef">IssuerRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBits">KeyBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsage">KeyUsage</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.locality">Locality</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtl">MaxTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStore">NoStore</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStoreMetadata">NoStoreMetadata</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notAfter">NotAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDuration">NotBeforeDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organization">Organization</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ou">Ou</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiers">PolicyIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCode">PostalCode</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.province">Province</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCn">RequireCn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serialNumberSource">SerialNumberSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlag">ServerFlag</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.signatureBits">SignatureBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddress">StreetAddress</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonName">UseCsrCommonName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSans">UseCsrSans</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.usePss">UsePss</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyIdentifier`<sup>Required</sup> <a name="PolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifier"></a>

```go
func PolicyIdentifier() PkiSecretBackendRolePolicyIdentifierList
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList">PkiSecretBackendRolePolicyIdentifierList</a>

---

##### `AllowAnyNameInput`<sup>Optional</sup> <a name="AllowAnyNameInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyNameInput"></a>

```go
func AllowAnyNameInput() interface{}
```

- *Type:* interface{}

---

##### `AllowBareDomainsInput`<sup>Optional</sup> <a name="AllowBareDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomainsInput"></a>

```go
func AllowBareDomainsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedDomainsInput`<sup>Optional</sup> <a name="AllowedDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsInput"></a>

```go
func AllowedDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedDomainsTemplateInput`<sup>Optional</sup> <a name="AllowedDomainsTemplateInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplateInput"></a>

```go
func AllowedDomainsTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedOtherSansInput`<sup>Optional</sup> <a name="AllowedOtherSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSansInput"></a>

```go
func AllowedOtherSansInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedSerialNumbersInput`<sup>Optional</sup> <a name="AllowedSerialNumbersInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbersInput"></a>

```go
func AllowedSerialNumbersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedUriSansInput`<sup>Optional</sup> <a name="AllowedUriSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansInput"></a>

```go
func AllowedUriSansInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedUriSansTemplateInput`<sup>Optional</sup> <a name="AllowedUriSansTemplateInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplateInput"></a>

```go
func AllowedUriSansTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedUserIdsInput`<sup>Optional</sup> <a name="AllowedUserIdsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIdsInput"></a>

```go
func AllowedUserIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowGlobDomainsInput`<sup>Optional</sup> <a name="AllowGlobDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomainsInput"></a>

```go
func AllowGlobDomainsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowIpSansInput`<sup>Optional</sup> <a name="AllowIpSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSansInput"></a>

```go
func AllowIpSansInput() interface{}
```

- *Type:* interface{}

---

##### `AllowLocalhostInput`<sup>Optional</sup> <a name="AllowLocalhostInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhostInput"></a>

```go
func AllowLocalhostInput() interface{}
```

- *Type:* interface{}

---

##### `AllowSubdomainsInput`<sup>Optional</sup> <a name="AllowSubdomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomainsInput"></a>

```go
func AllowSubdomainsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowWildcardCertificatesInput`<sup>Optional</sup> <a name="AllowWildcardCertificatesInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificatesInput"></a>

```go
func AllowWildcardCertificatesInput() interface{}
```

- *Type:* interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `BasicConstraintsValidForNonCaInput`<sup>Optional</sup> <a name="BasicConstraintsValidForNonCaInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCaInput"></a>

```go
func BasicConstraintsValidForNonCaInput() interface{}
```

- *Type:* interface{}

---

##### `ClientFlagInput`<sup>Optional</sup> <a name="ClientFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlagInput"></a>

```go
func ClientFlagInput() interface{}
```

- *Type:* interface{}

---

##### `CnValidationsInput`<sup>Optional</sup> <a name="CnValidationsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.cnValidationsInput"></a>

```go
func CnValidationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CodeSigningFlagInput`<sup>Optional</sup> <a name="CodeSigningFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlagInput"></a>

```go
func CodeSigningFlagInput() interface{}
```

- *Type:* interface{}

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.countryInput"></a>

```go
func CountryInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailProtectionFlagInput`<sup>Optional</sup> <a name="EmailProtectionFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlagInput"></a>

```go
func EmailProtectionFlagInput() interface{}
```

- *Type:* interface{}

---

##### `EnforceHostnamesInput`<sup>Optional</sup> <a name="EnforceHostnamesInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnamesInput"></a>

```go
func EnforceHostnamesInput() interface{}
```

- *Type:* interface{}

---

##### `ExtKeyUsageInput`<sup>Optional</sup> <a name="ExtKeyUsageInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageInput"></a>

```go
func ExtKeyUsageInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExtKeyUsageOidsInput`<sup>Optional</sup> <a name="ExtKeyUsageOidsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageOidsInput"></a>

```go
func ExtKeyUsageOidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `GenerateLeaseInput`<sup>Optional</sup> <a name="GenerateLeaseInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLeaseInput"></a>

```go
func GenerateLeaseInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuerRefInput`<sup>Optional</sup> <a name="IssuerRefInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRefInput"></a>

```go
func IssuerRefInput() *string
```

- *Type:* *string

---

##### `KeyBitsInput`<sup>Optional</sup> <a name="KeyBitsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBitsInput"></a>

```go
func KeyBitsInput() *f64
```

- *Type:* *f64

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsageInput"></a>

```go
func KeyUsageInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.localityInput"></a>

```go
func LocalityInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtlInput"></a>

```go
func MaxTtlInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NoStoreInput`<sup>Optional</sup> <a name="NoStoreInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStoreInput"></a>

```go
func NoStoreInput() interface{}
```

- *Type:* interface{}

---

##### `NoStoreMetadataInput`<sup>Optional</sup> <a name="NoStoreMetadataInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStoreMetadataInput"></a>

```go
func NoStoreMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `NotAfterInput`<sup>Optional</sup> <a name="NotAfterInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notAfterInput"></a>

```go
func NotAfterInput() *string
```

- *Type:* *string

---

##### `NotBeforeDurationInput`<sup>Optional</sup> <a name="NotBeforeDurationInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDurationInput"></a>

```go
func NotBeforeDurationInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organizationInput"></a>

```go
func OrganizationInput() *[]*string
```

- *Type:* *[]*string

---

##### `OuInput`<sup>Optional</sup> <a name="OuInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ouInput"></a>

```go
func OuInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyIdentifierInput`<sup>Optional</sup> <a name="PolicyIdentifierInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifierInput"></a>

```go
func PolicyIdentifierInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyIdentifiersInput`<sup>Optional</sup> <a name="PolicyIdentifiersInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiersInput"></a>

```go
func PolicyIdentifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCodeInput"></a>

```go
func PostalCodeInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provinceInput"></a>

```go
func ProvinceInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequireCnInput`<sup>Optional</sup> <a name="RequireCnInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCnInput"></a>

```go
func RequireCnInput() interface{}
```

- *Type:* interface{}

---

##### `SerialNumberSourceInput`<sup>Optional</sup> <a name="SerialNumberSourceInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serialNumberSourceInput"></a>

```go
func SerialNumberSourceInput() *string
```

- *Type:* *string

---

##### `ServerFlagInput`<sup>Optional</sup> <a name="ServerFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlagInput"></a>

```go
func ServerFlagInput() interface{}
```

- *Type:* interface{}

---

##### `SignatureBitsInput`<sup>Optional</sup> <a name="SignatureBitsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.signatureBitsInput"></a>

```go
func SignatureBitsInput() *f64
```

- *Type:* *f64

---

##### `StreetAddressInput`<sup>Optional</sup> <a name="StreetAddressInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddressInput"></a>

```go
func StreetAddressInput() *[]*string
```

- *Type:* *[]*string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `UseCsrCommonNameInput`<sup>Optional</sup> <a name="UseCsrCommonNameInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonNameInput"></a>

```go
func UseCsrCommonNameInput() interface{}
```

- *Type:* interface{}

---

##### `UseCsrSansInput`<sup>Optional</sup> <a name="UseCsrSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSansInput"></a>

```go
func UseCsrSansInput() interface{}
```

- *Type:* interface{}

---

##### `UsePssInput`<sup>Optional</sup> <a name="UsePssInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.usePssInput"></a>

```go
func UsePssInput() interface{}
```

- *Type:* interface{}

---

##### `AllowAnyName`<sup>Required</sup> <a name="AllowAnyName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyName"></a>

```go
func AllowAnyName() interface{}
```

- *Type:* interface{}

---

##### `AllowBareDomains`<sup>Required</sup> <a name="AllowBareDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomains"></a>

```go
func AllowBareDomains() interface{}
```

- *Type:* interface{}

---

##### `AllowedDomains`<sup>Required</sup> <a name="AllowedDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomains"></a>

```go
func AllowedDomains() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedDomainsTemplate`<sup>Required</sup> <a name="AllowedDomainsTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplate"></a>

```go
func AllowedDomainsTemplate() interface{}
```

- *Type:* interface{}

---

##### `AllowedOtherSans`<sup>Required</sup> <a name="AllowedOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSans"></a>

```go
func AllowedOtherSans() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedSerialNumbers`<sup>Required</sup> <a name="AllowedSerialNumbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbers"></a>

```go
func AllowedSerialNumbers() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedUriSans`<sup>Required</sup> <a name="AllowedUriSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSans"></a>

```go
func AllowedUriSans() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedUriSansTemplate`<sup>Required</sup> <a name="AllowedUriSansTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplate"></a>

```go
func AllowedUriSansTemplate() interface{}
```

- *Type:* interface{}

---

##### `AllowedUserIds`<sup>Required</sup> <a name="AllowedUserIds" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIds"></a>

```go
func AllowedUserIds() *[]*string
```

- *Type:* *[]*string

---

##### `AllowGlobDomains`<sup>Required</sup> <a name="AllowGlobDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomains"></a>

```go
func AllowGlobDomains() interface{}
```

- *Type:* interface{}

---

##### `AllowIpSans`<sup>Required</sup> <a name="AllowIpSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSans"></a>

```go
func AllowIpSans() interface{}
```

- *Type:* interface{}

---

##### `AllowLocalhost`<sup>Required</sup> <a name="AllowLocalhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhost"></a>

```go
func AllowLocalhost() interface{}
```

- *Type:* interface{}

---

##### `AllowSubdomains`<sup>Required</sup> <a name="AllowSubdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomains"></a>

```go
func AllowSubdomains() interface{}
```

- *Type:* interface{}

---

##### `AllowWildcardCertificates`<sup>Required</sup> <a name="AllowWildcardCertificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificates"></a>

```go
func AllowWildcardCertificates() interface{}
```

- *Type:* interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `BasicConstraintsValidForNonCa`<sup>Required</sup> <a name="BasicConstraintsValidForNonCa" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCa"></a>

```go
func BasicConstraintsValidForNonCa() interface{}
```

- *Type:* interface{}

---

##### `ClientFlag`<sup>Required</sup> <a name="ClientFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlag"></a>

```go
func ClientFlag() interface{}
```

- *Type:* interface{}

---

##### `CnValidations`<sup>Required</sup> <a name="CnValidations" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.cnValidations"></a>

```go
func CnValidations() *[]*string
```

- *Type:* *[]*string

---

##### `CodeSigningFlag`<sup>Required</sup> <a name="CodeSigningFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlag"></a>

```go
func CodeSigningFlag() interface{}
```

- *Type:* interface{}

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.country"></a>

```go
func Country() *[]*string
```

- *Type:* *[]*string

---

##### `EmailProtectionFlag`<sup>Required</sup> <a name="EmailProtectionFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlag"></a>

```go
func EmailProtectionFlag() interface{}
```

- *Type:* interface{}

---

##### `EnforceHostnames`<sup>Required</sup> <a name="EnforceHostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnames"></a>

```go
func EnforceHostnames() interface{}
```

- *Type:* interface{}

---

##### `ExtKeyUsage`<sup>Required</sup> <a name="ExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsage"></a>

```go
func ExtKeyUsage() *[]*string
```

- *Type:* *[]*string

---

##### `ExtKeyUsageOids`<sup>Required</sup> <a name="ExtKeyUsageOids" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageOids"></a>

```go
func ExtKeyUsageOids() *[]*string
```

- *Type:* *[]*string

---

##### `GenerateLease`<sup>Required</sup> <a name="GenerateLease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLease"></a>

```go
func GenerateLease() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IssuerRef`<sup>Required</sup> <a name="IssuerRef" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRef"></a>

```go
func IssuerRef() *string
```

- *Type:* *string

---

##### `KeyBits`<sup>Required</sup> <a name="KeyBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBits"></a>

```go
func KeyBits() *f64
```

- *Type:* *f64

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsage"></a>

```go
func KeyUsage() *[]*string
```

- *Type:* *[]*string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.locality"></a>

```go
func Locality() *[]*string
```

- *Type:* *[]*string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtl"></a>

```go
func MaxTtl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NoStore`<sup>Required</sup> <a name="NoStore" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStore"></a>

```go
func NoStore() interface{}
```

- *Type:* interface{}

---

##### `NoStoreMetadata`<sup>Required</sup> <a name="NoStoreMetadata" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStoreMetadata"></a>

```go
func NoStoreMetadata() interface{}
```

- *Type:* interface{}

---

##### `NotAfter`<sup>Required</sup> <a name="NotAfter" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notAfter"></a>

```go
func NotAfter() *string
```

- *Type:* *string

---

##### `NotBeforeDuration`<sup>Required</sup> <a name="NotBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDuration"></a>

```go
func NotBeforeDuration() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organization"></a>

```go
func Organization() *[]*string
```

- *Type:* *[]*string

---

##### `Ou`<sup>Required</sup> <a name="Ou" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ou"></a>

```go
func Ou() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyIdentifiers`<sup>Required</sup> <a name="PolicyIdentifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiers"></a>

```go
func PolicyIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCode"></a>

```go
func PostalCode() *[]*string
```

- *Type:* *[]*string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.province"></a>

```go
func Province() *[]*string
```

- *Type:* *[]*string

---

##### `RequireCn`<sup>Required</sup> <a name="RequireCn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCn"></a>

```go
func RequireCn() interface{}
```

- *Type:* interface{}

---

##### `SerialNumberSource`<sup>Required</sup> <a name="SerialNumberSource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serialNumberSource"></a>

```go
func SerialNumberSource() *string
```

- *Type:* *string

---

##### `ServerFlag`<sup>Required</sup> <a name="ServerFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlag"></a>

```go
func ServerFlag() interface{}
```

- *Type:* interface{}

---

##### `SignatureBits`<sup>Required</sup> <a name="SignatureBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.signatureBits"></a>

```go
func SignatureBits() *f64
```

- *Type:* *f64

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddress"></a>

```go
func StreetAddress() *[]*string
```

- *Type:* *[]*string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `UseCsrCommonName`<sup>Required</sup> <a name="UseCsrCommonName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonName"></a>

```go
func UseCsrCommonName() interface{}
```

- *Type:* interface{}

---

##### `UseCsrSans`<sup>Required</sup> <a name="UseCsrSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSans"></a>

```go
func UseCsrSans() interface{}
```

- *Type:* interface{}

---

##### `UsePss`<sup>Required</sup> <a name="UsePss" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.usePss"></a>

```go
func UsePss() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendRoleConfig <a name="PkiSecretBackendRoleConfig" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendrole"

&pkisecretbackendrole.PkiSecretBackendRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	Name: *string,
	AllowAnyName: interface{},
	AllowBareDomains: interface{},
	AllowedDomains: *[]*string,
	AllowedDomainsTemplate: interface{},
	AllowedOtherSans: *[]*string,
	AllowedSerialNumbers: *[]*string,
	AllowedUriSans: *[]*string,
	AllowedUriSansTemplate: interface{},
	AllowedUserIds: *[]*string,
	AllowGlobDomains: interface{},
	AllowIpSans: interface{},
	AllowLocalhost: interface{},
	AllowSubdomains: interface{},
	AllowWildcardCertificates: interface{},
	BasicConstraintsValidForNonCa: interface{},
	ClientFlag: interface{},
	CnValidations: *[]*string,
	CodeSigningFlag: interface{},
	Country: *[]*string,
	EmailProtectionFlag: interface{},
	EnforceHostnames: interface{},
	ExtKeyUsage: *[]*string,
	ExtKeyUsageOids: *[]*string,
	GenerateLease: interface{},
	Id: *string,
	IssuerRef: *string,
	KeyBits: *f64,
	KeyType: *string,
	KeyUsage: *[]*string,
	Locality: *[]*string,
	MaxTtl: *string,
	Namespace: *string,
	NoStore: interface{},
	NoStoreMetadata: interface{},
	NotAfter: *string,
	NotBeforeDuration: *string,
	Organization: *[]*string,
	Ou: *[]*string,
	PolicyIdentifier: interface{},
	PolicyIdentifiers: *[]*string,
	PostalCode: *[]*string,
	Province: *[]*string,
	RequireCn: interface{},
	SerialNumberSource: *string,
	ServerFlag: interface{},
	SignatureBits: *f64,
	StreetAddress: *[]*string,
	Ttl: *string,
	UseCsrCommonName: interface{},
	UseCsrSans: interface{},
	UsePss: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.backend">Backend</a></code> | <code>*string</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.name">Name</a></code> | <code>*string</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowAnyName">AllowAnyName</a></code> | <code>interface{}</code> | Flag to allow any name. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowBareDomains">AllowBareDomains</a></code> | <code>interface{}</code> | Flag to allow certificates matching the actual domain. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomains">AllowedDomains</a></code> | <code>*[]*string</code> | The domains of the role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomainsTemplate">AllowedDomainsTemplate</a></code> | <code>interface{}</code> | Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedOtherSans">AllowedOtherSans</a></code> | <code>*[]*string</code> | Defines allowed custom SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedSerialNumbers">AllowedSerialNumbers</a></code> | <code>*[]*string</code> | Defines allowed Subject serial numbers. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSans">AllowedUriSans</a></code> | <code>*[]*string</code> | Defines allowed URI SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSansTemplate">AllowedUriSansTemplate</a></code> | <code>interface{}</code> | Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUserIds">AllowedUserIds</a></code> | <code>*[]*string</code> | The allowed User ID's. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowGlobDomains">AllowGlobDomains</a></code> | <code>interface{}</code> | Flag to allow names containing glob patterns. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowIpSans">AllowIpSans</a></code> | <code>interface{}</code> | Flag to allow IP SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowLocalhost">AllowLocalhost</a></code> | <code>interface{}</code> | Flag to allow certificates for localhost. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowSubdomains">AllowSubdomains</a></code> | <code>interface{}</code> | Flag to allow certificates matching subdomains. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowWildcardCertificates">AllowWildcardCertificates</a></code> | <code>interface{}</code> | Flag to allow wildcard certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.basicConstraintsValidForNonCa">BasicConstraintsValidForNonCa</a></code> | <code>interface{}</code> | Flag to mark basic constraints valid when issuing non-CA certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.clientFlag">ClientFlag</a></code> | <code>interface{}</code> | Flag to specify certificates for client use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.cnValidations">CnValidations</a></code> | <code>*[]*string</code> | Specify validations to run on the Common Name field of the certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.codeSigningFlag">CodeSigningFlag</a></code> | <code>interface{}</code> | Flag to specify certificates for code signing use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.country">Country</a></code> | <code>*[]*string</code> | The country of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.emailProtectionFlag">EmailProtectionFlag</a></code> | <code>interface{}</code> | Flag to specify certificates for email protection use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.enforceHostnames">EnforceHostnames</a></code> | <code>interface{}</code> | Flag to allow only valid host names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsage">ExtKeyUsage</a></code> | <code>*[]*string</code> | Specify the allowed extended key usage constraint on issued certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsageOids">ExtKeyUsageOids</a></code> | <code>*[]*string</code> | A list of extended key usage OIDs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.generateLease">GenerateLease</a></code> | <code>interface{}</code> | Flag to generate leases with certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#id PkiSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.issuerRef">IssuerRef</a></code> | <code>*string</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyBits">KeyBits</a></code> | <code>*f64</code> | The number of bits of generated keys. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyType">KeyType</a></code> | <code>*string</code> | The generated key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyUsage">KeyUsage</a></code> | <code>*[]*string</code> | Specify the allowed key usage constraint on issued certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.locality">Locality</a></code> | <code>*[]*string</code> | The locality of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.maxTtl">MaxTtl</a></code> | <code>*string</code> | The maximum TTL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.noStore">NoStore</a></code> | <code>interface{}</code> | Flag to not store certificates in the storage backend. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.noStoreMetadata">NoStoreMetadata</a></code> | <code>interface{}</code> | Allows metadata to be stored keyed on the certificate's serial number. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.notAfter">NotAfter</a></code> | <code>*string</code> | Set the Not After field of the certificate with specified date value. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.notBeforeDuration">NotBeforeDuration</a></code> | <code>*string</code> | Specifies the duration by which to backdate the NotBefore property. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.organization">Organization</a></code> | <code>*[]*string</code> | The organization of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ou">Ou</a></code> | <code>*[]*string</code> | The organization unit of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifier">PolicyIdentifier</a></code> | <code>interface{}</code> | policy_identifier block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifiers">PolicyIdentifiers</a></code> | <code>*[]*string</code> | Specify the list of allowed policies OIDs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.postalCode">PostalCode</a></code> | <code>*[]*string</code> | The postal code of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.province">Province</a></code> | <code>*[]*string</code> | The province of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.requireCn">RequireCn</a></code> | <code>interface{}</code> | Flag to force CN usage. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.serialNumberSource">SerialNumberSource</a></code> | <code>*string</code> | Specifies the source of the subject serial number. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.serverFlag">ServerFlag</a></code> | <code>interface{}</code> | Flag to specify certificates for server use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.signatureBits">SignatureBits</a></code> | <code>*f64</code> | The number of bits to use in the signature algorithm. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.streetAddress">StreetAddress</a></code> | <code>*[]*string</code> | The street address of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ttl">Ttl</a></code> | <code>*string</code> | The TTL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrCommonName">UseCsrCommonName</a></code> | <code>interface{}</code> | Flag to use the CN in the CSR. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrSans">UseCsrSans</a></code> | <code>interface{}</code> | Flag to use the SANs in the CSR. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.usePss">UsePss</a></code> | <code>interface{}</code> | Specifies whether or not to use PSS signatures over PKCS#1v1.5 signatures when a RSA-type issuer is used. Ignored for ECDSA/Ed25519 issuers. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#backend PkiSecretBackendRole#backend}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#name PkiSecretBackendRole#name}

---

##### `AllowAnyName`<sup>Optional</sup> <a name="AllowAnyName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowAnyName"></a>

```go
AllowAnyName interface{}
```

- *Type:* interface{}

Flag to allow any name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#allow_any_name PkiSecretBackendRole#allow_any_name}

---

##### `AllowBareDomains`<sup>Optional</sup> <a name="AllowBareDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowBareDomains"></a>

```go
AllowBareDomains interface{}
```

- *Type:* interface{}

Flag to allow certificates matching the actual domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#allow_bare_domains PkiSecretBackendRole#allow_bare_domains}

---

##### `AllowedDomains`<sup>Optional</sup> <a name="AllowedDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomains"></a>

```go
AllowedDomains *[]*string
```

- *Type:* *[]*string

The domains of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#allowed_domains PkiSecretBackendRole#allowed_domains}

---

##### `AllowedDomainsTemplate`<sup>Optional</sup> <a name="AllowedDomainsTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomainsTemplate"></a>

```go
AllowedDomainsTemplate interface{}
```

- *Type:* interface{}

Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#allowed_domains_template PkiSecretBackendRole#allowed_domains_template}

---

##### `AllowedOtherSans`<sup>Optional</sup> <a name="AllowedOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedOtherSans"></a>

```go
AllowedOtherSans *[]*string
```

- *Type:* *[]*string

Defines allowed custom SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#allowed_other_sans PkiSecretBackendRole#allowed_other_sans}

---

##### `AllowedSerialNumbers`<sup>Optional</sup> <a name="AllowedSerialNumbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedSerialNumbers"></a>

```go
AllowedSerialNumbers *[]*string
```

- *Type:* *[]*string

Defines allowed Subject serial numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#allowed_serial_numbers PkiSecretBackendRole#allowed_serial_numbers}

---

##### `AllowedUriSans`<sup>Optional</sup> <a name="AllowedUriSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSans"></a>

```go
AllowedUriSans *[]*string
```

- *Type:* *[]*string

Defines allowed URI SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#allowed_uri_sans PkiSecretBackendRole#allowed_uri_sans}

---

##### `AllowedUriSansTemplate`<sup>Optional</sup> <a name="AllowedUriSansTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSansTemplate"></a>

```go
AllowedUriSansTemplate interface{}
```

- *Type:* interface{}

Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#allowed_uri_sans_template PkiSecretBackendRole#allowed_uri_sans_template}

---

##### `AllowedUserIds`<sup>Optional</sup> <a name="AllowedUserIds" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUserIds"></a>

```go
AllowedUserIds *[]*string
```

- *Type:* *[]*string

The allowed User ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#allowed_user_ids PkiSecretBackendRole#allowed_user_ids}

---

##### `AllowGlobDomains`<sup>Optional</sup> <a name="AllowGlobDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowGlobDomains"></a>

```go
AllowGlobDomains interface{}
```

- *Type:* interface{}

Flag to allow names containing glob patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#allow_glob_domains PkiSecretBackendRole#allow_glob_domains}

---

##### `AllowIpSans`<sup>Optional</sup> <a name="AllowIpSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowIpSans"></a>

```go
AllowIpSans interface{}
```

- *Type:* interface{}

Flag to allow IP SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#allow_ip_sans PkiSecretBackendRole#allow_ip_sans}

---

##### `AllowLocalhost`<sup>Optional</sup> <a name="AllowLocalhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowLocalhost"></a>

```go
AllowLocalhost interface{}
```

- *Type:* interface{}

Flag to allow certificates for localhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#allow_localhost PkiSecretBackendRole#allow_localhost}

---

##### `AllowSubdomains`<sup>Optional</sup> <a name="AllowSubdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowSubdomains"></a>

```go
AllowSubdomains interface{}
```

- *Type:* interface{}

Flag to allow certificates matching subdomains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#allow_subdomains PkiSecretBackendRole#allow_subdomains}

---

##### `AllowWildcardCertificates`<sup>Optional</sup> <a name="AllowWildcardCertificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowWildcardCertificates"></a>

```go
AllowWildcardCertificates interface{}
```

- *Type:* interface{}

Flag to allow wildcard certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#allow_wildcard_certificates PkiSecretBackendRole#allow_wildcard_certificates}

---

##### `BasicConstraintsValidForNonCa`<sup>Optional</sup> <a name="BasicConstraintsValidForNonCa" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.basicConstraintsValidForNonCa"></a>

```go
BasicConstraintsValidForNonCa interface{}
```

- *Type:* interface{}

Flag to mark basic constraints valid when issuing non-CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#basic_constraints_valid_for_non_ca PkiSecretBackendRole#basic_constraints_valid_for_non_ca}

---

##### `ClientFlag`<sup>Optional</sup> <a name="ClientFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.clientFlag"></a>

```go
ClientFlag interface{}
```

- *Type:* interface{}

Flag to specify certificates for client use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#client_flag PkiSecretBackendRole#client_flag}

---

##### `CnValidations`<sup>Optional</sup> <a name="CnValidations" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.cnValidations"></a>

```go
CnValidations *[]*string
```

- *Type:* *[]*string

Specify validations to run on the Common Name field of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#cn_validations PkiSecretBackendRole#cn_validations}

---

##### `CodeSigningFlag`<sup>Optional</sup> <a name="CodeSigningFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.codeSigningFlag"></a>

```go
CodeSigningFlag interface{}
```

- *Type:* interface{}

Flag to specify certificates for code signing use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#code_signing_flag PkiSecretBackendRole#code_signing_flag}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.country"></a>

```go
Country *[]*string
```

- *Type:* *[]*string

The country of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#country PkiSecretBackendRole#country}

---

##### `EmailProtectionFlag`<sup>Optional</sup> <a name="EmailProtectionFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.emailProtectionFlag"></a>

```go
EmailProtectionFlag interface{}
```

- *Type:* interface{}

Flag to specify certificates for email protection use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#email_protection_flag PkiSecretBackendRole#email_protection_flag}

---

##### `EnforceHostnames`<sup>Optional</sup> <a name="EnforceHostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.enforceHostnames"></a>

```go
EnforceHostnames interface{}
```

- *Type:* interface{}

Flag to allow only valid host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#enforce_hostnames PkiSecretBackendRole#enforce_hostnames}

---

##### `ExtKeyUsage`<sup>Optional</sup> <a name="ExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsage"></a>

```go
ExtKeyUsage *[]*string
```

- *Type:* *[]*string

Specify the allowed extended key usage constraint on issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#ext_key_usage PkiSecretBackendRole#ext_key_usage}

---

##### `ExtKeyUsageOids`<sup>Optional</sup> <a name="ExtKeyUsageOids" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsageOids"></a>

```go
ExtKeyUsageOids *[]*string
```

- *Type:* *[]*string

A list of extended key usage OIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#ext_key_usage_oids PkiSecretBackendRole#ext_key_usage_oids}

---

##### `GenerateLease`<sup>Optional</sup> <a name="GenerateLease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.generateLease"></a>

```go
GenerateLease interface{}
```

- *Type:* interface{}

Flag to generate leases with certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#generate_lease PkiSecretBackendRole#generate_lease}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#id PkiSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuerRef`<sup>Optional</sup> <a name="IssuerRef" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.issuerRef"></a>

```go
IssuerRef *string
```

- *Type:* *string

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#issuer_ref PkiSecretBackendRole#issuer_ref}

---

##### `KeyBits`<sup>Optional</sup> <a name="KeyBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyBits"></a>

```go
KeyBits *f64
```

- *Type:* *f64

The number of bits of generated keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#key_bits PkiSecretBackendRole#key_bits}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

The generated key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#key_type PkiSecretBackendRole#key_type}

---

##### `KeyUsage`<sup>Optional</sup> <a name="KeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyUsage"></a>

```go
KeyUsage *[]*string
```

- *Type:* *[]*string

Specify the allowed key usage constraint on issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#key_usage PkiSecretBackendRole#key_usage}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.locality"></a>

```go
Locality *[]*string
```

- *Type:* *[]*string

The locality of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#locality PkiSecretBackendRole#locality}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.maxTtl"></a>

```go
MaxTtl *string
```

- *Type:* *string

The maximum TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#max_ttl PkiSecretBackendRole#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#namespace PkiSecretBackendRole#namespace}

---

##### `NoStore`<sup>Optional</sup> <a name="NoStore" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.noStore"></a>

```go
NoStore interface{}
```

- *Type:* interface{}

Flag to not store certificates in the storage backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#no_store PkiSecretBackendRole#no_store}

---

##### `NoStoreMetadata`<sup>Optional</sup> <a name="NoStoreMetadata" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.noStoreMetadata"></a>

```go
NoStoreMetadata interface{}
```

- *Type:* interface{}

Allows metadata to be stored keyed on the certificate's serial number.

The field is independent of no_store, allowing metadata storage regardless of whether certificates are stored. If true, metadata is not stored and an error is returned if the metadata field is specified on issuance APIs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#no_store_metadata PkiSecretBackendRole#no_store_metadata}

---

##### `NotAfter`<sup>Optional</sup> <a name="NotAfter" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.notAfter"></a>

```go
NotAfter *string
```

- *Type:* *string

Set the Not After field of the certificate with specified date value.

The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ. Supports the Y10K end date for IEEE 802.1AR-2018 standard devices, 9999-12-31T23:59:59Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#not_after PkiSecretBackendRole#not_after}

---

##### `NotBeforeDuration`<sup>Optional</sup> <a name="NotBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.notBeforeDuration"></a>

```go
NotBeforeDuration *string
```

- *Type:* *string

Specifies the duration by which to backdate the NotBefore property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#not_before_duration PkiSecretBackendRole#not_before_duration}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.organization"></a>

```go
Organization *[]*string
```

- *Type:* *[]*string

The organization of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#organization PkiSecretBackendRole#organization}

---

##### `Ou`<sup>Optional</sup> <a name="Ou" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ou"></a>

```go
Ou *[]*string
```

- *Type:* *[]*string

The organization unit of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#ou PkiSecretBackendRole#ou}

---

##### `PolicyIdentifier`<sup>Optional</sup> <a name="PolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifier"></a>

```go
PolicyIdentifier interface{}
```

- *Type:* interface{}

policy_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#policy_identifier PkiSecretBackendRole#policy_identifier}

---

##### `PolicyIdentifiers`<sup>Optional</sup> <a name="PolicyIdentifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifiers"></a>

```go
PolicyIdentifiers *[]*string
```

- *Type:* *[]*string

Specify the list of allowed policies OIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#policy_identifiers PkiSecretBackendRole#policy_identifiers}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.postalCode"></a>

```go
PostalCode *[]*string
```

- *Type:* *[]*string

The postal code of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#postal_code PkiSecretBackendRole#postal_code}

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.province"></a>

```go
Province *[]*string
```

- *Type:* *[]*string

The province of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#province PkiSecretBackendRole#province}

---

##### `RequireCn`<sup>Optional</sup> <a name="RequireCn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.requireCn"></a>

```go
RequireCn interface{}
```

- *Type:* interface{}

Flag to force CN usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#require_cn PkiSecretBackendRole#require_cn}

---

##### `SerialNumberSource`<sup>Optional</sup> <a name="SerialNumberSource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.serialNumberSource"></a>

```go
SerialNumberSource *string
```

- *Type:* *string

Specifies the source of the subject serial number.

Valid values are json-csr (default) or json. When set to json-csr, the subject serial number is taken from the serial_number parameter and falls back to the serial number in the CSR. When set to json, the subject serial number is taken from the serial_number parameter but will ignore any value in the CSR. For backwards compatibility an empty value for this field will default to the json-csr behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#serial_number_source PkiSecretBackendRole#serial_number_source}

---

##### `ServerFlag`<sup>Optional</sup> <a name="ServerFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.serverFlag"></a>

```go
ServerFlag interface{}
```

- *Type:* interface{}

Flag to specify certificates for server use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#server_flag PkiSecretBackendRole#server_flag}

---

##### `SignatureBits`<sup>Optional</sup> <a name="SignatureBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.signatureBits"></a>

```go
SignatureBits *f64
```

- *Type:* *f64

The number of bits to use in the signature algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#signature_bits PkiSecretBackendRole#signature_bits}

---

##### `StreetAddress`<sup>Optional</sup> <a name="StreetAddress" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.streetAddress"></a>

```go
StreetAddress *[]*string
```

- *Type:* *[]*string

The street address of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#street_address PkiSecretBackendRole#street_address}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

The TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#ttl PkiSecretBackendRole#ttl}

---

##### `UseCsrCommonName`<sup>Optional</sup> <a name="UseCsrCommonName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrCommonName"></a>

```go
UseCsrCommonName interface{}
```

- *Type:* interface{}

Flag to use the CN in the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#use_csr_common_name PkiSecretBackendRole#use_csr_common_name}

---

##### `UseCsrSans`<sup>Optional</sup> <a name="UseCsrSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrSans"></a>

```go
UseCsrSans interface{}
```

- *Type:* interface{}

Flag to use the SANs in the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#use_csr_sans PkiSecretBackendRole#use_csr_sans}

---

##### `UsePss`<sup>Optional</sup> <a name="UsePss" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.usePss"></a>

```go
UsePss interface{}
```

- *Type:* interface{}

Specifies whether or not to use PSS signatures over PKCS#1v1.5 signatures when a RSA-type issuer is used. Ignored for ECDSA/Ed25519 issuers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#use_pss PkiSecretBackendRole#use_pss}

---

### PkiSecretBackendRolePolicyIdentifier <a name="PkiSecretBackendRolePolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendrole"

&pkisecretbackendrole.PkiSecretBackendRolePolicyIdentifier {
	Oid: *string,
	Cps: *string,
	Notice: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.oid">Oid</a></code> | <code>*string</code> | OID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.cps">Cps</a></code> | <code>*string</code> | Optional CPS URL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.notice">Notice</a></code> | <code>*string</code> | Optional notice. |

---

##### `Oid`<sup>Required</sup> <a name="Oid" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.oid"></a>

```go
Oid *string
```

- *Type:* *string

OID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#oid PkiSecretBackendRole#oid}

---

##### `Cps`<sup>Optional</sup> <a name="Cps" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.cps"></a>

```go
Cps *string
```

- *Type:* *string

Optional CPS URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#cps PkiSecretBackendRole#cps}

---

##### `Notice`<sup>Optional</sup> <a name="Notice" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.notice"></a>

```go
Notice *string
```

- *Type:* *string

Optional notice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_role#notice PkiSecretBackendRole#notice}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendRolePolicyIdentifierList <a name="PkiSecretBackendRolePolicyIdentifierList" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendrole"

pkisecretbackendrole.NewPkiSecretBackendRolePolicyIdentifierList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PkiSecretBackendRolePolicyIdentifierList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.get"></a>

```go
func Get(index *f64) PkiSecretBackendRolePolicyIdentifierOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PkiSecretBackendRolePolicyIdentifierOutputReference <a name="PkiSecretBackendRolePolicyIdentifierOutputReference" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendrole"

pkisecretbackendrole.NewPkiSecretBackendRolePolicyIdentifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PkiSecretBackendRolePolicyIdentifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetCps">ResetCps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetNotice">ResetNotice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCps` <a name="ResetCps" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetCps"></a>

```go
func ResetCps()
```

##### `ResetNotice` <a name="ResetNotice" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetNotice"></a>

```go
func ResetNotice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cpsInput">CpsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.noticeInput">NoticeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oidInput">OidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cps">Cps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.notice">Notice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oid">Oid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpsInput`<sup>Optional</sup> <a name="CpsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cpsInput"></a>

```go
func CpsInput() *string
```

- *Type:* *string

---

##### `NoticeInput`<sup>Optional</sup> <a name="NoticeInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.noticeInput"></a>

```go
func NoticeInput() *string
```

- *Type:* *string

---

##### `OidInput`<sup>Optional</sup> <a name="OidInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oidInput"></a>

```go
func OidInput() *string
```

- *Type:* *string

---

##### `Cps`<sup>Required</sup> <a name="Cps" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cps"></a>

```go
func Cps() *string
```

- *Type:* *string

---

##### `Notice`<sup>Required</sup> <a name="Notice" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.notice"></a>

```go
func Notice() *string
```

- *Type:* *string

---

##### `Oid`<sup>Required</sup> <a name="Oid" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oid"></a>

```go
func Oid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



