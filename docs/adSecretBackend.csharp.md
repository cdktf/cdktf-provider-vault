# `adSecretBackend` Submodule <a name="`adSecretBackend` Submodule" id="@cdktf/provider-vault.adSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdSecretBackend <a name="AdSecretBackend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend vault_ad_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AdSecretBackend(Construct Scope, string Id, AdSecretBackendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig">AdSecretBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig">AdSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupattr">ResetGroupattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupdn">ResetGroupdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupfilter">ResetGroupfilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLastRotationTolerance">ResetLastRotationTolerance</a></code> | *No description.* |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAnonymousGroupSearch` <a name="ResetAnonymousGroupSearch" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetAnonymousGroupSearch"></a>

```csharp
private void ResetAnonymousGroupSearch()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetCaseSensitiveNames` <a name="ResetCaseSensitiveNames" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCaseSensitiveNames"></a>

```csharp
private void ResetCaseSensitiveNames()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetClientTlsCert` <a name="ResetClientTlsCert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsCert"></a>

```csharp
private void ResetClientTlsCert()
```

##### `ResetClientTlsKey` <a name="ResetClientTlsKey" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsKey"></a>

```csharp
private void ResetClientTlsKey()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```csharp
private void ResetDefaultLeaseTtlSeconds()
```

##### `ResetDenyNullBind` <a name="ResetDenyNullBind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDenyNullBind"></a>

```csharp
private void ResetDenyNullBind()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDisableRemount"></a>

```csharp
private void ResetDisableRemount()
```

##### `ResetDiscoverdn` <a name="ResetDiscoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDiscoverdn"></a>

```csharp
private void ResetDiscoverdn()
```

##### `ResetGroupattr` <a name="ResetGroupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupattr"></a>

```csharp
private void ResetGroupattr()
```

##### `ResetGroupdn` <a name="ResetGroupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupdn"></a>

```csharp
private void ResetGroupdn()
```

##### `ResetGroupfilter` <a name="ResetGroupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupfilter"></a>

```csharp
private void ResetGroupfilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetInsecureTls"></a>

```csharp
private void ResetInsecureTls()
```

##### `ResetLastRotationTolerance` <a name="ResetLastRotationTolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLastRotationTolerance"></a>

```csharp
private void ResetLastRotationTolerance()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxLeaseTtlSeconds"></a>

```csharp
private void ResetMaxLeaseTtlSeconds()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetPasswordPolicy"></a>

```csharp
private void ResetPasswordPolicy()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetRequestTimeout"></a>

```csharp
private void ResetRequestTimeout()
```

##### `ResetStarttls` <a name="ResetStarttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetStarttls"></a>

```csharp
private void ResetStarttls()
```

##### `ResetTlsMaxVersion` <a name="ResetTlsMaxVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMaxVersion"></a>

```csharp
private void ResetTlsMaxVersion()
```

##### `ResetTlsMinVersion` <a name="ResetTlsMinVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMinVersion"></a>

```csharp
private void ResetTlsMinVersion()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetUpndomain` <a name="ResetUpndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUpndomain"></a>

```csharp
private void ResetUpndomain()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUsePre111GroupCnBehavior` <a name="ResetUsePre111GroupCnBehavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUsePre111GroupCnBehavior"></a>

```csharp
private void ResetUsePre111GroupCnBehavior()
```

##### `ResetUserattr` <a name="ResetUserattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserattr"></a>

```csharp
private void ResetUserattr()
```

##### `ResetUserdn` <a name="ResetUserdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserdn"></a>

```csharp
private void ResetUserdn()
```

##### `ResetUseTokenGroups` <a name="ResetUseTokenGroups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUseTokenGroups"></a>

```csharp
private void ResetUseTokenGroups()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AdSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AdSecretBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AdSecretBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AdSecretBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AdSecretBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AdSecretBackend resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AdSecretBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AdSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AdSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearchInput">AnonymousGroupSearchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddnInput">BinddnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpassInput">BindpassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNamesInput">CaseSensitiveNamesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCertInput">ClientTlsCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKeyInput">ClientTlsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBindInput">DenyNullBindInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdnInput">DiscoverdnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattrInput">GroupattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdnInput">GroupdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilterInput">GroupfilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationToleranceInput">LastRotationToleranceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.localInput">LocalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtlInput">MaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttlsInput">StarttlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersionInput">TlsMaxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersionInput">TlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomainInput">UpndomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehaviorInput">UsePre111GroupCnBehaviorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattrInput">UserattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdnInput">UserdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroupsInput">UseTokenGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearch">AnonymousGroupSearch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddn">Binddn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpass">Bindpass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCert">ClientTlsCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKey">ClientTlsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBind">DenyNullBind</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemount">DisableRemount</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdn">Discoverdn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattr">Groupattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdn">Groupdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilter">Groupfilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTls">InsecureTls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationTolerance">LastRotationTolerance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.local">Local</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtl">MaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicy">PasswordPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeout">RequestTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttls">Starttls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomain">Upndomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehavior">UsePre111GroupCnBehavior</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattr">Userattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdn">Userdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroups">UseTokenGroups</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AnonymousGroupSearchInput`<sup>Optional</sup> <a name="AnonymousGroupSearchInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearchInput"></a>

```csharp
public object AnonymousGroupSearchInput { get; }
```

- *Type:* object

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `BinddnInput`<sup>Optional</sup> <a name="BinddnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddnInput"></a>

```csharp
public string BinddnInput { get; }
```

- *Type:* string

---

##### `BindpassInput`<sup>Optional</sup> <a name="BindpassInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpassInput"></a>

```csharp
public string BindpassInput { get; }
```

- *Type:* string

---

##### `CaseSensitiveNamesInput`<sup>Optional</sup> <a name="CaseSensitiveNamesInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNamesInput"></a>

```csharp
public object CaseSensitiveNamesInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `ClientTlsCertInput`<sup>Optional</sup> <a name="ClientTlsCertInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCertInput"></a>

```csharp
public string ClientTlsCertInput { get; }
```

- *Type:* string

---

##### `ClientTlsKeyInput`<sup>Optional</sup> <a name="ClientTlsKeyInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKeyInput"></a>

```csharp
public string ClientTlsKeyInput { get; }
```

- *Type:* string

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```csharp
public double DefaultLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `DenyNullBindInput`<sup>Optional</sup> <a name="DenyNullBindInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBindInput"></a>

```csharp
public object DenyNullBindInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemountInput"></a>

```csharp
public object DisableRemountInput { get; }
```

- *Type:* object

---

##### `DiscoverdnInput`<sup>Optional</sup> <a name="DiscoverdnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdnInput"></a>

```csharp
public object DiscoverdnInput { get; }
```

- *Type:* object

---

##### `GroupattrInput`<sup>Optional</sup> <a name="GroupattrInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattrInput"></a>

```csharp
public string GroupattrInput { get; }
```

- *Type:* string

---

##### `GroupdnInput`<sup>Optional</sup> <a name="GroupdnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdnInput"></a>

```csharp
public string GroupdnInput { get; }
```

- *Type:* string

---

##### `GroupfilterInput`<sup>Optional</sup> <a name="GroupfilterInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilterInput"></a>

```csharp
public string GroupfilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTlsInput"></a>

```csharp
public object InsecureTlsInput { get; }
```

- *Type:* object

---

##### `LastRotationToleranceInput`<sup>Optional</sup> <a name="LastRotationToleranceInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationToleranceInput"></a>

```csharp
public double LastRotationToleranceInput { get; }
```

- *Type:* double

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.localInput"></a>

```csharp
public object LocalInput { get; }
```

- *Type:* object

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```csharp
public double MaxLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtlInput"></a>

```csharp
public double MaxTtlInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicyInput"></a>

```csharp
public string PasswordPolicyInput { get; }
```

- *Type:* string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeoutInput"></a>

```csharp
public double RequestTimeoutInput { get; }
```

- *Type:* double

---

##### `StarttlsInput`<sup>Optional</sup> <a name="StarttlsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttlsInput"></a>

```csharp
public object StarttlsInput { get; }
```

- *Type:* object

---

##### `TlsMaxVersionInput`<sup>Optional</sup> <a name="TlsMaxVersionInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersionInput"></a>

```csharp
public string TlsMaxVersionInput { get; }
```

- *Type:* string

---

##### `TlsMinVersionInput`<sup>Optional</sup> <a name="TlsMinVersionInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersionInput"></a>

```csharp
public string TlsMinVersionInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `UpndomainInput`<sup>Optional</sup> <a name="UpndomainInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomainInput"></a>

```csharp
public string UpndomainInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UsePre111GroupCnBehaviorInput`<sup>Optional</sup> <a name="UsePre111GroupCnBehaviorInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehaviorInput"></a>

```csharp
public object UsePre111GroupCnBehaviorInput { get; }
```

- *Type:* object

---

##### `UserattrInput`<sup>Optional</sup> <a name="UserattrInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattrInput"></a>

```csharp
public string UserattrInput { get; }
```

- *Type:* string

---

##### `UserdnInput`<sup>Optional</sup> <a name="UserdnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdnInput"></a>

```csharp
public string UserdnInput { get; }
```

- *Type:* string

---

##### `UseTokenGroupsInput`<sup>Optional</sup> <a name="UseTokenGroupsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroupsInput"></a>

```csharp
public object UseTokenGroupsInput { get; }
```

- *Type:* object

---

##### `AnonymousGroupSearch`<sup>Required</sup> <a name="AnonymousGroupSearch" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearch"></a>

```csharp
public object AnonymousGroupSearch { get; }
```

- *Type:* object

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Binddn`<sup>Required</sup> <a name="Binddn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddn"></a>

```csharp
public string Binddn { get; }
```

- *Type:* string

---

##### `Bindpass`<sup>Required</sup> <a name="Bindpass" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpass"></a>

```csharp
public string Bindpass { get; }
```

- *Type:* string

---

##### `CaseSensitiveNames`<sup>Required</sup> <a name="CaseSensitiveNames" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNames"></a>

```csharp
public object CaseSensitiveNames { get; }
```

- *Type:* object

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `ClientTlsCert`<sup>Required</sup> <a name="ClientTlsCert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCert"></a>

```csharp
public string ClientTlsCert { get; }
```

- *Type:* string

---

##### `ClientTlsKey`<sup>Required</sup> <a name="ClientTlsKey" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKey"></a>

```csharp
public string ClientTlsKey { get; }
```

- *Type:* string

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `DenyNullBind`<sup>Required</sup> <a name="DenyNullBind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBind"></a>

```csharp
public object DenyNullBind { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemount"></a>

```csharp
public object DisableRemount { get; }
```

- *Type:* object

---

##### `Discoverdn`<sup>Required</sup> <a name="Discoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdn"></a>

```csharp
public object Discoverdn { get; }
```

- *Type:* object

---

##### `Groupattr`<sup>Required</sup> <a name="Groupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattr"></a>

```csharp
public string Groupattr { get; }
```

- *Type:* string

---

##### `Groupdn`<sup>Required</sup> <a name="Groupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdn"></a>

```csharp
public string Groupdn { get; }
```

- *Type:* string

---

##### `Groupfilter`<sup>Required</sup> <a name="Groupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilter"></a>

```csharp
public string Groupfilter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTls"></a>

```csharp
public object InsecureTls { get; }
```

- *Type:* object

---

##### `LastRotationTolerance`<sup>Required</sup> <a name="LastRotationTolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationTolerance"></a>

```csharp
public double LastRotationTolerance { get; }
```

- *Type:* double

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.local"></a>

```csharp
public object Local { get; }
```

- *Type:* object

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtl"></a>

```csharp
public double MaxTtl { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicy"></a>

```csharp
public string PasswordPolicy { get; }
```

- *Type:* string

---

##### `RequestTimeout`<sup>Required</sup> <a name="RequestTimeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeout"></a>

```csharp
public double RequestTimeout { get; }
```

- *Type:* double

---

##### `Starttls`<sup>Required</sup> <a name="Starttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttls"></a>

```csharp
public object Starttls { get; }
```

- *Type:* object

---

##### `TlsMaxVersion`<sup>Required</sup> <a name="TlsMaxVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersion"></a>

```csharp
public string TlsMaxVersion { get; }
```

- *Type:* string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Upndomain`<sup>Required</sup> <a name="Upndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomain"></a>

```csharp
public string Upndomain { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UsePre111GroupCnBehavior`<sup>Required</sup> <a name="UsePre111GroupCnBehavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehavior"></a>

```csharp
public object UsePre111GroupCnBehavior { get; }
```

- *Type:* object

---

##### `Userattr`<sup>Required</sup> <a name="Userattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattr"></a>

```csharp
public string Userattr { get; }
```

- *Type:* string

---

##### `Userdn`<sup>Required</sup> <a name="Userdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdn"></a>

```csharp
public string Userdn { get; }
```

- *Type:* string

---

##### `UseTokenGroups`<sup>Required</sup> <a name="UseTokenGroups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroups"></a>

```csharp
public object UseTokenGroups { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AdSecretBackendConfig <a name="AdSecretBackendConfig" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AdSecretBackendConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Binddn,
    string Bindpass,
    object AnonymousGroupSearch = null,
    string Backend = null,
    object CaseSensitiveNames = null,
    string Certificate = null,
    string ClientTlsCert = null,
    string ClientTlsKey = null,
    double DefaultLeaseTtlSeconds = null,
    object DenyNullBind = null,
    string Description = null,
    object DisableRemount = null,
    object Discoverdn = null,
    string Groupattr = null,
    string Groupdn = null,
    string Groupfilter = null,
    string Id = null,
    object InsecureTls = null,
    double LastRotationTolerance = null,
    object Local = null,
    double MaxLeaseTtlSeconds = null,
    double MaxTtl = null,
    string Namespace = null,
    string PasswordPolicy = null,
    double RequestTimeout = null,
    object Starttls = null,
    string TlsMaxVersion = null,
    string TlsMinVersion = null,
    double Ttl = null,
    string Upndomain = null,
    string Url = null,
    object UsePre111GroupCnBehavior = null,
    string Userattr = null,
    string Userdn = null,
    object UseTokenGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.binddn">Binddn</a></code> | <code>string</code> | Distinguished name of object to bind when performing user and group search. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.bindpass">Bindpass</a></code> | <code>string</code> | LDAP password for searching for the user DN. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.anonymousGroupSearch">AnonymousGroupSearch</a></code> | <code>object</code> | Use anonymous binds when performing LDAP group searches (if true the initial credentials will still be used for the initial connection test). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.backend">Backend</a></code> | <code>string</code> | The mount path for a backend, for example, the path given in "$ vault auth enable -path=my-ad ad". |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>object</code> | If true, case sensitivity will be used when comparing usernames and groups for matching policies. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.certificate">Certificate</a></code> | <code>string</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsCert">ClientTlsCert</a></code> | <code>string</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsKey">ClientTlsKey</a></code> | <code>string</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.denyNullBind">DenyNullBind</a></code> | <code>object</code> | Denies an unauthenticated LDAP bind request if the user's password is empty; defaults to true. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.description">Description</a></code> | <code>string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>object</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.discoverdn">Discoverdn</a></code> | <code>object</code> | Use anonymous bind to discover the bind DN of a user. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupattr">Groupattr</a></code> | <code>string</code> | LDAP attribute to follow on objects returned by <groupfilter> in order to enumerate user group membership. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupdn">Groupdn</a></code> | <code>string</code> | LDAP search base to use for group membership search (eg: ou=Groups,dc=example,dc=org). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupfilter">Groupfilter</a></code> | <code>string</code> | Go template for querying group membership of user. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#id AdSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.insecureTls">InsecureTls</a></code> | <code>object</code> | Skip LDAP server SSL Certificate verification - insecure and not recommended for production use. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lastRotationTolerance">LastRotationTolerance</a></code> | <code>double</code> | The number of seconds after a Vault rotation where, if Active Directory shows a later rotation, it should be considered out-of-band. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.local">Local</a></code> | <code>object</code> | Mark the secrets engine as local-only. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxTtl">MaxTtl</a></code> | <code>double</code> | In seconds, the maximum password time-to-live. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code>string</code> | Name of the password policy to use to generate passwords. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.requestTimeout">RequestTimeout</a></code> | <code>double</code> | Timeout, in seconds, for the connection when making requests against the server before returning back an error. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.starttls">Starttls</a></code> | <code>object</code> | Issue a StartTLS command after establishing unencrypted connection. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>string</code> | Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.ttl">Ttl</a></code> | <code>double</code> | In seconds, the default password time-to-live. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.upndomain">Upndomain</a></code> | <code>string</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.url">Url</a></code> | <code>string</code> | LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.usePre111GroupCnBehavior">UsePre111GroupCnBehavior</a></code> | <code>object</code> | In Vault 1.1.1 a fix for handling group CN values of different cases unfortunately introduced a regression that could cause previously defined groups to not be found due to a change in the resulting name. If set true, the pre-1.1.1 behavior for matching group CNs will be used. This is only needed in some upgrade scenarios for backwards compatibility. It is enabled by default if the config is upgraded but disabled by default on new configurations. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userattr">Userattr</a></code> | <code>string</code> | Attribute used for users (default: cn). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userdn">Userdn</a></code> | <code>string</code> | LDAP domain to use for users (eg: ou=People,dc=example,dc=org). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.useTokenGroups">UseTokenGroups</a></code> | <code>object</code> | If true, use the Active Directory tokenGroups constructed attribute of the user to find the group memberships. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Binddn`<sup>Required</sup> <a name="Binddn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.binddn"></a>

```csharp
public string Binddn { get; set; }
```

- *Type:* string

Distinguished name of object to bind when performing user and group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#binddn AdSecretBackend#binddn}

---

##### `Bindpass`<sup>Required</sup> <a name="Bindpass" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.bindpass"></a>

```csharp
public string Bindpass { get; set; }
```

- *Type:* string

LDAP password for searching for the user DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#bindpass AdSecretBackend#bindpass}

---

##### `AnonymousGroupSearch`<sup>Optional</sup> <a name="AnonymousGroupSearch" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.anonymousGroupSearch"></a>

```csharp
public object AnonymousGroupSearch { get; set; }
```

- *Type:* object

Use anonymous binds when performing LDAP group searches (if true the initial credentials will still be used for the initial connection test).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#anonymous_group_search AdSecretBackend#anonymous_group_search}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The mount path for a backend, for example, the path given in "$ vault auth enable -path=my-ad ad".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#backend AdSecretBackend#backend}

---

##### `CaseSensitiveNames`<sup>Optional</sup> <a name="CaseSensitiveNames" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.caseSensitiveNames"></a>

```csharp
public object CaseSensitiveNames { get; set; }
```

- *Type:* object

If true, case sensitivity will be used when comparing usernames and groups for matching policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#case_sensitive_names AdSecretBackend#case_sensitive_names}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#certificate AdSecretBackend#certificate}

---

##### `ClientTlsCert`<sup>Optional</sup> <a name="ClientTlsCert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsCert"></a>

```csharp
public string ClientTlsCert { get; set; }
```

- *Type:* string

Client certificate to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#client_tls_cert AdSecretBackend#client_tls_cert}

---

##### `ClientTlsKey`<sup>Optional</sup> <a name="ClientTlsKey" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsKey"></a>

```csharp
public string ClientTlsKey { get; set; }
```

- *Type:* string

Client certificate key to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#client_tls_key AdSecretBackend#client_tls_key}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; set; }
```

- *Type:* double

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#default_lease_ttl_seconds AdSecretBackend#default_lease_ttl_seconds}

---

##### `DenyNullBind`<sup>Optional</sup> <a name="DenyNullBind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.denyNullBind"></a>

```csharp
public object DenyNullBind { get; set; }
```

- *Type:* object

Denies an unauthenticated LDAP bind request if the user's password is empty; defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#deny_null_bind AdSecretBackend#deny_null_bind}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#description AdSecretBackend#description}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.disableRemount"></a>

```csharp
public object DisableRemount { get; set; }
```

- *Type:* object

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#disable_remount AdSecretBackend#disable_remount}

---

##### `Discoverdn`<sup>Optional</sup> <a name="Discoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.discoverdn"></a>

```csharp
public object Discoverdn { get; set; }
```

- *Type:* object

Use anonymous bind to discover the bind DN of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#discoverdn AdSecretBackend#discoverdn}

---

##### `Groupattr`<sup>Optional</sup> <a name="Groupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupattr"></a>

```csharp
public string Groupattr { get; set; }
```

- *Type:* string

LDAP attribute to follow on objects returned by <groupfilter> in order to enumerate user group membership.

Examples: "cn" or "memberOf", etc. Default: cn

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#groupattr AdSecretBackend#groupattr}

---

##### `Groupdn`<sup>Optional</sup> <a name="Groupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupdn"></a>

```csharp
public string Groupdn { get; set; }
```

- *Type:* string

LDAP search base to use for group membership search (eg: ou=Groups,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#groupdn AdSecretBackend#groupdn}

---

##### `Groupfilter`<sup>Optional</sup> <a name="Groupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupfilter"></a>

```csharp
public string Groupfilter { get; set; }
```

- *Type:* string

Go template for querying group membership of user.

The template can access the following context variables: UserDN, Username Example: (&(objectClass=group)(member:1.2.840.113556.1.4.1941:={{.UserDN}})) Default: (|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#groupfilter AdSecretBackend#groupfilter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#id AdSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.insecureTls"></a>

```csharp
public object InsecureTls { get; set; }
```

- *Type:* object

Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#insecure_tls AdSecretBackend#insecure_tls}

---

##### `LastRotationTolerance`<sup>Optional</sup> <a name="LastRotationTolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lastRotationTolerance"></a>

```csharp
public double LastRotationTolerance { get; set; }
```

- *Type:* double

The number of seconds after a Vault rotation where, if Active Directory shows a later rotation, it should be considered out-of-band.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#last_rotation_tolerance AdSecretBackend#last_rotation_tolerance}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.local"></a>

```csharp
public object Local { get; set; }
```

- *Type:* object

Mark the secrets engine as local-only.

Local engines are not replicated or removed by replication.Tolerance duration to use when checking the last rotation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#local AdSecretBackend#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; set; }
```

- *Type:* double

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#max_lease_ttl_seconds AdSecretBackend#max_lease_ttl_seconds}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxTtl"></a>

```csharp
public double MaxTtl { get; set; }
```

- *Type:* double

In seconds, the maximum password time-to-live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#max_ttl AdSecretBackend#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#namespace AdSecretBackend#namespace}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.passwordPolicy"></a>

```csharp
public string PasswordPolicy { get; set; }
```

- *Type:* string

Name of the password policy to use to generate passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#password_policy AdSecretBackend#password_policy}

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.requestTimeout"></a>

```csharp
public double RequestTimeout { get; set; }
```

- *Type:* double

Timeout, in seconds, for the connection when making requests against the server before returning back an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#request_timeout AdSecretBackend#request_timeout}

---

##### `Starttls`<sup>Optional</sup> <a name="Starttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.starttls"></a>

```csharp
public object Starttls { get; set; }
```

- *Type:* object

Issue a StartTLS command after establishing unencrypted connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#starttls AdSecretBackend#starttls}

---

##### `TlsMaxVersion`<sup>Optional</sup> <a name="TlsMaxVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMaxVersion"></a>

```csharp
public string TlsMaxVersion { get; set; }
```

- *Type:* string

Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#tls_max_version AdSecretBackend#tls_max_version}

---

##### `TlsMinVersion`<sup>Optional</sup> <a name="TlsMinVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; set; }
```

- *Type:* string

Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#tls_min_version AdSecretBackend#tls_min_version}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

In seconds, the default password time-to-live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#ttl AdSecretBackend#ttl}

---

##### `Upndomain`<sup>Optional</sup> <a name="Upndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.upndomain"></a>

```csharp
public string Upndomain { get; set; }
```

- *Type:* string

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#upndomain AdSecretBackend#upndomain}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#url AdSecretBackend#url}

---

##### `UsePre111GroupCnBehavior`<sup>Optional</sup> <a name="UsePre111GroupCnBehavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.usePre111GroupCnBehavior"></a>

```csharp
public object UsePre111GroupCnBehavior { get; set; }
```

- *Type:* object

In Vault 1.1.1 a fix for handling group CN values of different cases unfortunately introduced a regression that could cause previously defined groups to not be found due to a change in the resulting name. If set true, the pre-1.1.1 behavior for matching group CNs will be used. This is only needed in some upgrade scenarios for backwards compatibility. It is enabled by default if the config is upgraded but disabled by default on new configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#use_pre111_group_cn_behavior AdSecretBackend#use_pre111_group_cn_behavior}

---

##### `Userattr`<sup>Optional</sup> <a name="Userattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userattr"></a>

```csharp
public string Userattr { get; set; }
```

- *Type:* string

Attribute used for users (default: cn).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#userattr AdSecretBackend#userattr}

---

##### `Userdn`<sup>Optional</sup> <a name="Userdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userdn"></a>

```csharp
public string Userdn { get; set; }
```

- *Type:* string

LDAP domain to use for users (eg: ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#userdn AdSecretBackend#userdn}

---

##### `UseTokenGroups`<sup>Optional</sup> <a name="UseTokenGroups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.useTokenGroups"></a>

```csharp
public object UseTokenGroups { get; set; }
```

- *Type:* object

If true, use the Active Directory tokenGroups constructed attribute of the user to find the group memberships.

This will find all security groups including nested ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/ad_secret_backend#use_token_groups AdSecretBackend#use_token_groups}

---



