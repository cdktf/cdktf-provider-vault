# `jwtAuthBackendRole` Submodule <a name="`jwtAuthBackendRole` Submodule" id="@cdktf/provider-vault.jwtAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JwtAuthBackendRole <a name="JwtAuthBackendRole" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role vault_jwt_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new JwtAuthBackendRole(Construct Scope, string Id, JwtAuthBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig">JwtAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig">JwtAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetAllowedRedirectUris">ResetAllowedRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundAudiences">ResetBoundAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaims">ResetBoundClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaimsType">ResetBoundClaimsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundSubject">ResetBoundSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClaimMappings">ResetClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClockSkewLeeway">ResetClockSkewLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetDisableBoundClaimsParsing">ResetDisableBoundClaimsParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetExpirationLeeway">ResetExpirationLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetGroupsClaim">ResetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetMaxAge">ResetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNotBeforeLeeway">ResetNotBeforeLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOidcScopes">ResetOidcScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetRoleType">ResetRoleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenType">ResetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetUserClaimJsonPointer">ResetUserClaimJsonPointer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetVerboseOidcLogging">ResetVerboseOidcLogging</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedRedirectUris` <a name="ResetAllowedRedirectUris" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetAllowedRedirectUris"></a>

```csharp
private void ResetAllowedRedirectUris()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetBoundAudiences` <a name="ResetBoundAudiences" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundAudiences"></a>

```csharp
private void ResetBoundAudiences()
```

##### `ResetBoundClaims` <a name="ResetBoundClaims" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaims"></a>

```csharp
private void ResetBoundClaims()
```

##### `ResetBoundClaimsType` <a name="ResetBoundClaimsType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaimsType"></a>

```csharp
private void ResetBoundClaimsType()
```

##### `ResetBoundSubject` <a name="ResetBoundSubject" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundSubject"></a>

```csharp
private void ResetBoundSubject()
```

##### `ResetClaimMappings` <a name="ResetClaimMappings" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClaimMappings"></a>

```csharp
private void ResetClaimMappings()
```

##### `ResetClockSkewLeeway` <a name="ResetClockSkewLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClockSkewLeeway"></a>

```csharp
private void ResetClockSkewLeeway()
```

##### `ResetDisableBoundClaimsParsing` <a name="ResetDisableBoundClaimsParsing" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetDisableBoundClaimsParsing"></a>

```csharp
private void ResetDisableBoundClaimsParsing()
```

##### `ResetExpirationLeeway` <a name="ResetExpirationLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetExpirationLeeway"></a>

```csharp
private void ResetExpirationLeeway()
```

##### `ResetGroupsClaim` <a name="ResetGroupsClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetGroupsClaim"></a>

```csharp
private void ResetGroupsClaim()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetMaxAge"></a>

```csharp
private void ResetMaxAge()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNotBeforeLeeway` <a name="ResetNotBeforeLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNotBeforeLeeway"></a>

```csharp
private void ResetNotBeforeLeeway()
```

##### `ResetOidcScopes` <a name="ResetOidcScopes" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOidcScopes"></a>

```csharp
private void ResetOidcScopes()
```

##### `ResetRoleType` <a name="ResetRoleType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetRoleType"></a>

```csharp
private void ResetRoleType()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenBoundCidrs"></a>

```csharp
private void ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```csharp
private void ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenMaxTtl"></a>

```csharp
private void ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```csharp
private void ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNumUses"></a>

```csharp
private void ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPeriod"></a>

```csharp
private void ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPolicies"></a>

```csharp
private void ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenTtl"></a>

```csharp
private void ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenType"></a>

```csharp
private void ResetTokenType()
```

##### `ResetUserClaimJsonPointer` <a name="ResetUserClaimJsonPointer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetUserClaimJsonPointer"></a>

```csharp
private void ResetUserClaimJsonPointer()
```

##### `ResetVerboseOidcLogging` <a name="ResetVerboseOidcLogging" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetVerboseOidcLogging"></a>

```csharp
private void ResetVerboseOidcLogging()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a JwtAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

JwtAuthBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

JwtAuthBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

JwtAuthBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

JwtAuthBackendRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a JwtAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the JwtAuthBackendRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing JwtAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the JwtAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUrisInput">AllowedRedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiencesInput">BoundAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsInput">BoundClaimsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsTypeInput">BoundClaimsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubjectInput">BoundSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappingsInput">ClaimMappingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeewayInput">ClockSkewLeewayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsingInput">DisableBoundClaimsParsingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeewayInput">ExpirationLeewayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaimInput">GroupsClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAgeInput">MaxAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeewayInput">NotBeforeLeewayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopesInput">OidcScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleTypeInput">RoleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtlInput">TokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimInput">UserClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointerInput">UserClaimJsonPointerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLoggingInput">VerboseOidcLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUris">AllowedRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiences">BoundAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaims">BoundClaims</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsType">BoundClaimsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubject">BoundSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappings">ClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeeway">ClockSkewLeeway</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsing">DisableBoundClaimsParsing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeeway">ExpirationLeeway</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaim">GroupsClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeeway">NotBeforeLeeway</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopes">OidcScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleType">RoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaim">UserClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointer">UserClaimJsonPointer</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLogging">VerboseOidcLogging</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowedRedirectUrisInput`<sup>Optional</sup> <a name="AllowedRedirectUrisInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUrisInput"></a>

```csharp
public string[] AllowedRedirectUrisInput { get; }
```

- *Type:* string[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `BoundAudiencesInput`<sup>Optional</sup> <a name="BoundAudiencesInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiencesInput"></a>

```csharp
public string[] BoundAudiencesInput { get; }
```

- *Type:* string[]

---

##### `BoundClaimsInput`<sup>Optional</sup> <a name="BoundClaimsInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BoundClaimsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BoundClaimsTypeInput`<sup>Optional</sup> <a name="BoundClaimsTypeInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsTypeInput"></a>

```csharp
public string BoundClaimsTypeInput { get; }
```

- *Type:* string

---

##### `BoundSubjectInput`<sup>Optional</sup> <a name="BoundSubjectInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubjectInput"></a>

```csharp
public string BoundSubjectInput { get; }
```

- *Type:* string

---

##### `ClaimMappingsInput`<sup>Optional</sup> <a name="ClaimMappingsInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClockSkewLeewayInput`<sup>Optional</sup> <a name="ClockSkewLeewayInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeewayInput"></a>

```csharp
public double ClockSkewLeewayInput { get; }
```

- *Type:* double

---

##### `DisableBoundClaimsParsingInput`<sup>Optional</sup> <a name="DisableBoundClaimsParsingInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsingInput"></a>

```csharp
public object DisableBoundClaimsParsingInput { get; }
```

- *Type:* object

---

##### `ExpirationLeewayInput`<sup>Optional</sup> <a name="ExpirationLeewayInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeewayInput"></a>

```csharp
public double ExpirationLeewayInput { get; }
```

- *Type:* double

---

##### `GroupsClaimInput`<sup>Optional</sup> <a name="GroupsClaimInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaimInput"></a>

```csharp
public string GroupsClaimInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAgeInput"></a>

```csharp
public double MaxAgeInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NotBeforeLeewayInput`<sup>Optional</sup> <a name="NotBeforeLeewayInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeewayInput"></a>

```csharp
public double NotBeforeLeewayInput { get; }
```

- *Type:* double

---

##### `OidcScopesInput`<sup>Optional</sup> <a name="OidcScopesInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopesInput"></a>

```csharp
public string[] OidcScopesInput { get; }
```

- *Type:* string[]

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `RoleTypeInput`<sup>Optional</sup> <a name="RoleTypeInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleTypeInput"></a>

```csharp
public string RoleTypeInput { get; }
```

- *Type:* string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrsInput"></a>

```csharp
public string[] TokenBoundCidrsInput { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```csharp
public double TokenExplicitMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtlInput"></a>

```csharp
public double TokenMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```csharp
public object TokenNoDefaultPolicyInput { get; }
```

- *Type:* object

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUsesInput"></a>

```csharp
public double TokenNumUsesInput { get; }
```

- *Type:* double

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriodInput"></a>

```csharp
public double TokenPeriodInput { get; }
```

- *Type:* double

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPoliciesInput"></a>

```csharp
public string[] TokenPoliciesInput { get; }
```

- *Type:* string[]

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtlInput"></a>

```csharp
public double TokenTtlInput { get; }
```

- *Type:* double

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `UserClaimInput`<sup>Optional</sup> <a name="UserClaimInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimInput"></a>

```csharp
public string UserClaimInput { get; }
```

- *Type:* string

---

##### `UserClaimJsonPointerInput`<sup>Optional</sup> <a name="UserClaimJsonPointerInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointerInput"></a>

```csharp
public object UserClaimJsonPointerInput { get; }
```

- *Type:* object

---

##### `VerboseOidcLoggingInput`<sup>Optional</sup> <a name="VerboseOidcLoggingInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLoggingInput"></a>

```csharp
public object VerboseOidcLoggingInput { get; }
```

- *Type:* object

---

##### `AllowedRedirectUris`<sup>Required</sup> <a name="AllowedRedirectUris" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUris"></a>

```csharp
public string[] AllowedRedirectUris { get; }
```

- *Type:* string[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `BoundAudiences`<sup>Required</sup> <a name="BoundAudiences" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiences"></a>

```csharp
public string[] BoundAudiences { get; }
```

- *Type:* string[]

---

##### `BoundClaims`<sup>Required</sup> <a name="BoundClaims" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaims"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BoundClaims { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BoundClaimsType`<sup>Required</sup> <a name="BoundClaimsType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsType"></a>

```csharp
public string BoundClaimsType { get; }
```

- *Type:* string

---

##### `BoundSubject`<sup>Required</sup> <a name="BoundSubject" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubject"></a>

```csharp
public string BoundSubject { get; }
```

- *Type:* string

---

##### `ClaimMappings`<sup>Required</sup> <a name="ClaimMappings" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClockSkewLeeway`<sup>Required</sup> <a name="ClockSkewLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeeway"></a>

```csharp
public double ClockSkewLeeway { get; }
```

- *Type:* double

---

##### `DisableBoundClaimsParsing`<sup>Required</sup> <a name="DisableBoundClaimsParsing" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsing"></a>

```csharp
public object DisableBoundClaimsParsing { get; }
```

- *Type:* object

---

##### `ExpirationLeeway`<sup>Required</sup> <a name="ExpirationLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeeway"></a>

```csharp
public double ExpirationLeeway { get; }
```

- *Type:* double

---

##### `GroupsClaim`<sup>Required</sup> <a name="GroupsClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaim"></a>

```csharp
public string GroupsClaim { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NotBeforeLeeway`<sup>Required</sup> <a name="NotBeforeLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeeway"></a>

```csharp
public double NotBeforeLeeway { get; }
```

- *Type:* double

---

##### `OidcScopes`<sup>Required</sup> <a name="OidcScopes" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopes"></a>

```csharp
public string[] OidcScopes { get; }
```

- *Type:* string[]

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleType"></a>

```csharp
public string RoleType { get; }
```

- *Type:* string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; }
```

- *Type:* double

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```csharp
public object TokenNoDefaultPolicy { get; }
```

- *Type:* object

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; }
```

- *Type:* double

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; }
```

- *Type:* double

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; }
```

- *Type:* double

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `UserClaim`<sup>Required</sup> <a name="UserClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaim"></a>

```csharp
public string UserClaim { get; }
```

- *Type:* string

---

##### `UserClaimJsonPointer`<sup>Required</sup> <a name="UserClaimJsonPointer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointer"></a>

```csharp
public object UserClaimJsonPointer { get; }
```

- *Type:* object

---

##### `VerboseOidcLogging`<sup>Required</sup> <a name="VerboseOidcLogging" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLogging"></a>

```csharp
public object VerboseOidcLogging { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JwtAuthBackendRoleConfig <a name="JwtAuthBackendRoleConfig" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new JwtAuthBackendRoleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RoleName,
    string UserClaim,
    string[] AllowedRedirectUris = null,
    string Backend = null,
    string[] BoundAudiences = null,
    System.Collections.Generic.IDictionary<string, string> BoundClaims = null,
    string BoundClaimsType = null,
    string BoundSubject = null,
    System.Collections.Generic.IDictionary<string, string> ClaimMappings = null,
    double ClockSkewLeeway = null,
    object DisableBoundClaimsParsing = null,
    double ExpirationLeeway = null,
    string GroupsClaim = null,
    string Id = null,
    double MaxAge = null,
    string Namespace = null,
    double NotBeforeLeeway = null,
    string[] OidcScopes = null,
    string RoleType = null,
    string[] TokenBoundCidrs = null,
    double TokenExplicitMaxTtl = null,
    double TokenMaxTtl = null,
    object TokenNoDefaultPolicy = null,
    double TokenNumUses = null,
    double TokenPeriod = null,
    string[] TokenPolicies = null,
    double TokenTtl = null,
    string TokenType = null,
    object UserClaimJsonPointer = null,
    object VerboseOidcLogging = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleName">RoleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaim">UserClaim</a></code> | <code>string</code> | The claim to use to uniquely identify the user; |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.allowedRedirectUris">AllowedRedirectUris</a></code> | <code>string[]</code> | The list of allowed values for redirect_uri during OIDC logins. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.backend">Backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundAudiences">BoundAudiences</a></code> | <code>string[]</code> | List of aud claims to match against. Any match is sufficient. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaims">BoundClaims</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of claims/values to match against. The expected value may be a single string or a comma-separated string list. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaimsType">BoundClaimsType</a></code> | <code>string</code> | How to interpret values in the claims/values map: can be either "string" (exact match) or "glob" (wildcard match). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundSubject">BoundSubject</a></code> | <code>string</code> | If set, requires that the sub claim matches this value. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.claimMappings">ClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of claims (keys) to be copied to specified metadata fields (values). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.clockSkewLeeway">ClockSkewLeeway</a></code> | <code>double</code> | The amount of leeway to add to all claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.disableBoundClaimsParsing">DisableBoundClaimsParsing</a></code> | <code>object</code> | Disable bound claim value parsing. Useful when values contain commas. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.expirationLeeway">ExpirationLeeway</a></code> | <code>double</code> | The amount of leeway to add to expiration (exp) claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.groupsClaim">GroupsClaim</a></code> | <code>string</code> | The claim to use to uniquely identify the set of groups to which the user belongs; |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#id JwtAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.maxAge">MaxAge</a></code> | <code>double</code> | Specifies the allowable elapsed time in seconds since the last time the user was actively authenticated. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.notBeforeLeeway">NotBeforeLeeway</a></code> | <code>double</code> | The amount of leeway to add to not before (nbf) claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.oidcScopes">OidcScopes</a></code> | <code>string[]</code> | List of OIDC scopes to be used with an OIDC role. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleType">RoleType</a></code> | <code>string</code> | Type of role, either "oidc" (default) or "jwt". |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>object</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenType">TokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaimJsonPointer">UserClaimJsonPointer</a></code> | <code>object</code> | Specifies if the user_claim value uses JSON pointer syntax for referencing claims. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.verboseOidcLogging">VerboseOidcLogging</a></code> | <code>object</code> | Log received OIDC tokens and claims when debug-level logging is active. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#role_name JwtAuthBackendRole#role_name}

---

##### `UserClaim`<sup>Required</sup> <a name="UserClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaim"></a>

```csharp
public string UserClaim { get; set; }
```

- *Type:* string

The claim to use to uniquely identify the user;

this will be used as the name for the Identity entity alias created due to a successful login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#user_claim JwtAuthBackendRole#user_claim}

---

##### `AllowedRedirectUris`<sup>Optional</sup> <a name="AllowedRedirectUris" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.allowedRedirectUris"></a>

```csharp
public string[] AllowedRedirectUris { get; set; }
```

- *Type:* string[]

The list of allowed values for redirect_uri during OIDC logins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#allowed_redirect_uris JwtAuthBackendRole#allowed_redirect_uris}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#backend JwtAuthBackendRole#backend}

---

##### `BoundAudiences`<sup>Optional</sup> <a name="BoundAudiences" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundAudiences"></a>

```csharp
public string[] BoundAudiences { get; set; }
```

- *Type:* string[]

List of aud claims to match against. Any match is sufficient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#bound_audiences JwtAuthBackendRole#bound_audiences}

---

##### `BoundClaims`<sup>Optional</sup> <a name="BoundClaims" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaims"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BoundClaims { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of claims/values to match against. The expected value may be a single string or a comma-separated string list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#bound_claims JwtAuthBackendRole#bound_claims}

---

##### `BoundClaimsType`<sup>Optional</sup> <a name="BoundClaimsType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaimsType"></a>

```csharp
public string BoundClaimsType { get; set; }
```

- *Type:* string

How to interpret values in the claims/values map: can be either "string" (exact match) or "glob" (wildcard match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#bound_claims_type JwtAuthBackendRole#bound_claims_type}

---

##### `BoundSubject`<sup>Optional</sup> <a name="BoundSubject" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundSubject"></a>

```csharp
public string BoundSubject { get; set; }
```

- *Type:* string

If set, requires that the sub claim matches this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#bound_subject JwtAuthBackendRole#bound_subject}

---

##### `ClaimMappings`<sup>Optional</sup> <a name="ClaimMappings" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.claimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of claims (keys) to be copied to specified metadata fields (values).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#claim_mappings JwtAuthBackendRole#claim_mappings}

---

##### `ClockSkewLeeway`<sup>Optional</sup> <a name="ClockSkewLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.clockSkewLeeway"></a>

```csharp
public double ClockSkewLeeway { get; set; }
```

- *Type:* double

The amount of leeway to add to all claims to account for clock skew, in seconds.

Defaults to 60 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#clock_skew_leeway JwtAuthBackendRole#clock_skew_leeway}

---

##### `DisableBoundClaimsParsing`<sup>Optional</sup> <a name="DisableBoundClaimsParsing" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.disableBoundClaimsParsing"></a>

```csharp
public object DisableBoundClaimsParsing { get; set; }
```

- *Type:* object

Disable bound claim value parsing. Useful when values contain commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#disable_bound_claims_parsing JwtAuthBackendRole#disable_bound_claims_parsing}

---

##### `ExpirationLeeway`<sup>Optional</sup> <a name="ExpirationLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.expirationLeeway"></a>

```csharp
public double ExpirationLeeway { get; set; }
```

- *Type:* double

The amount of leeway to add to expiration (exp) claims to account for clock skew, in seconds.

Defaults to 60 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#expiration_leeway JwtAuthBackendRole#expiration_leeway}

---

##### `GroupsClaim`<sup>Optional</sup> <a name="GroupsClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.groupsClaim"></a>

```csharp
public string GroupsClaim { get; set; }
```

- *Type:* string

The claim to use to uniquely identify the set of groups to which the user belongs;

this will be used as the names for the Identity group aliases created due to a successful login. The claim value must be a list of strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#groups_claim JwtAuthBackendRole#groups_claim}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#id JwtAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.maxAge"></a>

```csharp
public double MaxAge { get; set; }
```

- *Type:* double

Specifies the allowable elapsed time in seconds since the last time the user was actively authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#max_age JwtAuthBackendRole#max_age}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#namespace JwtAuthBackendRole#namespace}

---

##### `NotBeforeLeeway`<sup>Optional</sup> <a name="NotBeforeLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.notBeforeLeeway"></a>

```csharp
public double NotBeforeLeeway { get; set; }
```

- *Type:* double

The amount of leeway to add to not before (nbf) claims to account for clock skew, in seconds.

Defaults to 150 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#not_before_leeway JwtAuthBackendRole#not_before_leeway}

---

##### `OidcScopes`<sup>Optional</sup> <a name="OidcScopes" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.oidcScopes"></a>

```csharp
public string[] OidcScopes { get; set; }
```

- *Type:* string[]

List of OIDC scopes to be used with an OIDC role.

The standard scope "openid" is automatically included and need not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#oidc_scopes JwtAuthBackendRole#oidc_scopes}

---

##### `RoleType`<sup>Optional</sup> <a name="RoleType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleType"></a>

```csharp
public string RoleType { get; set; }
```

- *Type:* string

Type of role, either "oidc" (default) or "jwt".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#role_type JwtAuthBackendRole#role_type}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; set; }
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#token_bound_cidrs JwtAuthBackendRole#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; set; }
```

- *Type:* double

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#token_explicit_max_ttl JwtAuthBackendRole#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; set; }
```

- *Type:* double

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#token_max_ttl JwtAuthBackendRole#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```csharp
public object TokenNoDefaultPolicy { get; set; }
```

- *Type:* object

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#token_no_default_policy JwtAuthBackendRole#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; set; }
```

- *Type:* double

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#token_num_uses JwtAuthBackendRole#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; set; }
```

- *Type:* double

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#token_period JwtAuthBackendRole#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; set; }
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#token_policies JwtAuthBackendRole#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; set; }
```

- *Type:* double

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#token_ttl JwtAuthBackendRole#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#token_type JwtAuthBackendRole#token_type}

---

##### `UserClaimJsonPointer`<sup>Optional</sup> <a name="UserClaimJsonPointer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaimJsonPointer"></a>

```csharp
public object UserClaimJsonPointer { get; set; }
```

- *Type:* object

Specifies if the user_claim value uses JSON pointer syntax for referencing claims.

By default, the user_claim value will not use JSON pointer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#user_claim_json_pointer JwtAuthBackendRole#user_claim_json_pointer}

---

##### `VerboseOidcLogging`<sup>Optional</sup> <a name="VerboseOidcLogging" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.verboseOidcLogging"></a>

```csharp
public object VerboseOidcLogging { get; set; }
```

- *Type:* object

Log received OIDC tokens and claims when debug-level logging is active.

Not recommended in production since sensitive information may be present in OIDC responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/jwt_auth_backend_role#verbose_oidc_logging JwtAuthBackendRole#verbose_oidc_logging}

---



