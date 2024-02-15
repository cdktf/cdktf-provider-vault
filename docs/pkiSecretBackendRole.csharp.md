# `pkiSecretBackendRole` Submodule <a name="`pkiSecretBackendRole` Submodule" id="@cdktf/provider-vault.pkiSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendRole <a name="PkiSecretBackendRole" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role vault_pki_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendRole(Construct Scope, string Id, PkiSecretBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig">PkiSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNotBeforeDuration">ResetNotBeforeDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOu">ResetOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifier">ResetPolicyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifiers">ResetPolicyIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetRequireCn">ResetRequireCn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetServerFlag">ResetServerFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetStreetAddress">ResetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrCommonName">ResetUseCsrCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrSans">ResetUseCsrSans</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicyIdentifier` <a name="PutPolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.putPolicyIdentifier"></a>

```csharp
private void PutPolicyIdentifier(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.putPolicyIdentifier.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowAnyName` <a name="ResetAllowAnyName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowAnyName"></a>

```csharp
private void ResetAllowAnyName()
```

##### `ResetAllowBareDomains` <a name="ResetAllowBareDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowBareDomains"></a>

```csharp
private void ResetAllowBareDomains()
```

##### `ResetAllowedDomains` <a name="ResetAllowedDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomains"></a>

```csharp
private void ResetAllowedDomains()
```

##### `ResetAllowedDomainsTemplate` <a name="ResetAllowedDomainsTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomainsTemplate"></a>

```csharp
private void ResetAllowedDomainsTemplate()
```

##### `ResetAllowedOtherSans` <a name="ResetAllowedOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedOtherSans"></a>

```csharp
private void ResetAllowedOtherSans()
```

##### `ResetAllowedSerialNumbers` <a name="ResetAllowedSerialNumbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedSerialNumbers"></a>

```csharp
private void ResetAllowedSerialNumbers()
```

##### `ResetAllowedUriSans` <a name="ResetAllowedUriSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSans"></a>

```csharp
private void ResetAllowedUriSans()
```

##### `ResetAllowedUriSansTemplate` <a name="ResetAllowedUriSansTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSansTemplate"></a>

```csharp
private void ResetAllowedUriSansTemplate()
```

##### `ResetAllowedUserIds` <a name="ResetAllowedUserIds" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUserIds"></a>

```csharp
private void ResetAllowedUserIds()
```

##### `ResetAllowGlobDomains` <a name="ResetAllowGlobDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowGlobDomains"></a>

```csharp
private void ResetAllowGlobDomains()
```

##### `ResetAllowIpSans` <a name="ResetAllowIpSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowIpSans"></a>

```csharp
private void ResetAllowIpSans()
```

##### `ResetAllowLocalhost` <a name="ResetAllowLocalhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowLocalhost"></a>

```csharp
private void ResetAllowLocalhost()
```

##### `ResetAllowSubdomains` <a name="ResetAllowSubdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowSubdomains"></a>

```csharp
private void ResetAllowSubdomains()
```

##### `ResetAllowWildcardCertificates` <a name="ResetAllowWildcardCertificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowWildcardCertificates"></a>

```csharp
private void ResetAllowWildcardCertificates()
```

##### `ResetBasicConstraintsValidForNonCa` <a name="ResetBasicConstraintsValidForNonCa" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetBasicConstraintsValidForNonCa"></a>

```csharp
private void ResetBasicConstraintsValidForNonCa()
```

##### `ResetClientFlag` <a name="ResetClientFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetClientFlag"></a>

```csharp
private void ResetClientFlag()
```

##### `ResetCodeSigningFlag` <a name="ResetCodeSigningFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCodeSigningFlag"></a>

```csharp
private void ResetCodeSigningFlag()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetEmailProtectionFlag` <a name="ResetEmailProtectionFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEmailProtectionFlag"></a>

```csharp
private void ResetEmailProtectionFlag()
```

##### `ResetEnforceHostnames` <a name="ResetEnforceHostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEnforceHostnames"></a>

```csharp
private void ResetEnforceHostnames()
```

##### `ResetExtKeyUsage` <a name="ResetExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetExtKeyUsage"></a>

```csharp
private void ResetExtKeyUsage()
```

##### `ResetExtKeyUsageOids` <a name="ResetExtKeyUsageOids" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetExtKeyUsageOids"></a>

```csharp
private void ResetExtKeyUsageOids()
```

##### `ResetGenerateLease` <a name="ResetGenerateLease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetGenerateLease"></a>

```csharp
private void ResetGenerateLease()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIssuerRef` <a name="ResetIssuerRef" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetIssuerRef"></a>

```csharp
private void ResetIssuerRef()
```

##### `ResetKeyBits` <a name="ResetKeyBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyBits"></a>

```csharp
private void ResetKeyBits()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyType"></a>

```csharp
private void ResetKeyType()
```

##### `ResetKeyUsage` <a name="ResetKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyUsage"></a>

```csharp
private void ResetKeyUsage()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetLocality"></a>

```csharp
private void ResetLocality()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNoStore` <a name="ResetNoStore" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNoStore"></a>

```csharp
private void ResetNoStore()
```

##### `ResetNotBeforeDuration` <a name="ResetNotBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNotBeforeDuration"></a>

```csharp
private void ResetNotBeforeDuration()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetOu` <a name="ResetOu" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOu"></a>

```csharp
private void ResetOu()
```

##### `ResetPolicyIdentifier` <a name="ResetPolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifier"></a>

```csharp
private void ResetPolicyIdentifier()
```

##### `ResetPolicyIdentifiers` <a name="ResetPolicyIdentifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifiers"></a>

```csharp
private void ResetPolicyIdentifiers()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetProvince"></a>

```csharp
private void ResetProvince()
```

##### `ResetRequireCn` <a name="ResetRequireCn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetRequireCn"></a>

```csharp
private void ResetRequireCn()
```

##### `ResetServerFlag` <a name="ResetServerFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetServerFlag"></a>

```csharp
private void ResetServerFlag()
```

##### `ResetStreetAddress` <a name="ResetStreetAddress" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetStreetAddress"></a>

```csharp
private void ResetStreetAddress()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetUseCsrCommonName` <a name="ResetUseCsrCommonName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrCommonName"></a>

```csharp
private void ResetUseCsrCommonName()
```

##### `ResetUseCsrSans` <a name="ResetUseCsrSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrSans"></a>

```csharp
private void ResetUseCsrSans()
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

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PkiSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifier">PolicyIdentifier</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList">PkiSecretBackendRolePolicyIdentifierList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyNameInput">AllowAnyNameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomainsInput">AllowBareDomainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsInput">AllowedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplateInput">AllowedDomainsTemplateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSansInput">AllowedOtherSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbersInput">AllowedSerialNumbersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansInput">AllowedUriSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplateInput">AllowedUriSansTemplateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIdsInput">AllowedUserIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomainsInput">AllowGlobDomainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSansInput">AllowIpSansInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhostInput">AllowLocalhostInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomainsInput">AllowSubdomainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificatesInput">AllowWildcardCertificatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCaInput">BasicConstraintsValidForNonCaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlagInput">ClientFlagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlagInput">CodeSigningFlagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.countryInput">CountryInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlagInput">EmailProtectionFlagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnamesInput">EnforceHostnamesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageInput">ExtKeyUsageInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageOidsInput">ExtKeyUsageOidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLeaseInput">GenerateLeaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRefInput">IssuerRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBitsInput">KeyBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsageInput">KeyUsageInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.localityInput">LocalityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtlInput">MaxTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStoreInput">NoStoreInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDurationInput">NotBeforeDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organizationInput">OrganizationInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ouInput">OuInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifierInput">PolicyIdentifierInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiersInput">PolicyIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCodeInput">PostalCodeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provinceInput">ProvinceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCnInput">RequireCnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlagInput">ServerFlagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddressInput">StreetAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonNameInput">UseCsrCommonNameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSansInput">UseCsrSansInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyName">AllowAnyName</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomains">AllowBareDomains</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomains">AllowedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplate">AllowedDomainsTemplate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSans">AllowedOtherSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbers">AllowedSerialNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSans">AllowedUriSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplate">AllowedUriSansTemplate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIds">AllowedUserIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomains">AllowGlobDomains</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSans">AllowIpSans</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhost">AllowLocalhost</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomains">AllowSubdomains</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificates">AllowWildcardCertificates</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCa">BasicConstraintsValidForNonCa</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlag">ClientFlag</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlag">CodeSigningFlag</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.country">Country</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlag">EmailProtectionFlag</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnames">EnforceHostnames</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsage">ExtKeyUsage</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageOids">ExtKeyUsageOids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLease">GenerateLease</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRef">IssuerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBits">KeyBits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsage">KeyUsage</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.locality">Locality</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtl">MaxTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStore">NoStore</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDuration">NotBeforeDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organization">Organization</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ou">Ou</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiers">PolicyIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCode">PostalCode</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.province">Province</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCn">RequireCn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlag">ServerFlag</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddress">StreetAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonName">UseCsrCommonName</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSans">UseCsrSans</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PolicyIdentifier`<sup>Required</sup> <a name="PolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifier"></a>

```csharp
public PkiSecretBackendRolePolicyIdentifierList PolicyIdentifier { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList">PkiSecretBackendRolePolicyIdentifierList</a>

---

##### `AllowAnyNameInput`<sup>Optional</sup> <a name="AllowAnyNameInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyNameInput"></a>

```csharp
public object AllowAnyNameInput { get; }
```

- *Type:* object

---

##### `AllowBareDomainsInput`<sup>Optional</sup> <a name="AllowBareDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomainsInput"></a>

```csharp
public object AllowBareDomainsInput { get; }
```

- *Type:* object

---

##### `AllowedDomainsInput`<sup>Optional</sup> <a name="AllowedDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsInput"></a>

```csharp
public string[] AllowedDomainsInput { get; }
```

- *Type:* string[]

---

##### `AllowedDomainsTemplateInput`<sup>Optional</sup> <a name="AllowedDomainsTemplateInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplateInput"></a>

```csharp
public object AllowedDomainsTemplateInput { get; }
```

- *Type:* object

---

##### `AllowedOtherSansInput`<sup>Optional</sup> <a name="AllowedOtherSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSansInput"></a>

```csharp
public string[] AllowedOtherSansInput { get; }
```

- *Type:* string[]

---

##### `AllowedSerialNumbersInput`<sup>Optional</sup> <a name="AllowedSerialNumbersInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbersInput"></a>

```csharp
public string[] AllowedSerialNumbersInput { get; }
```

- *Type:* string[]

---

##### `AllowedUriSansInput`<sup>Optional</sup> <a name="AllowedUriSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansInput"></a>

```csharp
public string[] AllowedUriSansInput { get; }
```

- *Type:* string[]

---

##### `AllowedUriSansTemplateInput`<sup>Optional</sup> <a name="AllowedUriSansTemplateInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplateInput"></a>

```csharp
public object AllowedUriSansTemplateInput { get; }
```

- *Type:* object

---

##### `AllowedUserIdsInput`<sup>Optional</sup> <a name="AllowedUserIdsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIdsInput"></a>

```csharp
public string[] AllowedUserIdsInput { get; }
```

- *Type:* string[]

---

##### `AllowGlobDomainsInput`<sup>Optional</sup> <a name="AllowGlobDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomainsInput"></a>

```csharp
public object AllowGlobDomainsInput { get; }
```

- *Type:* object

---

##### `AllowIpSansInput`<sup>Optional</sup> <a name="AllowIpSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSansInput"></a>

```csharp
public object AllowIpSansInput { get; }
```

- *Type:* object

---

##### `AllowLocalhostInput`<sup>Optional</sup> <a name="AllowLocalhostInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhostInput"></a>

```csharp
public object AllowLocalhostInput { get; }
```

- *Type:* object

---

##### `AllowSubdomainsInput`<sup>Optional</sup> <a name="AllowSubdomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomainsInput"></a>

```csharp
public object AllowSubdomainsInput { get; }
```

- *Type:* object

---

##### `AllowWildcardCertificatesInput`<sup>Optional</sup> <a name="AllowWildcardCertificatesInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificatesInput"></a>

```csharp
public object AllowWildcardCertificatesInput { get; }
```

- *Type:* object

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `BasicConstraintsValidForNonCaInput`<sup>Optional</sup> <a name="BasicConstraintsValidForNonCaInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCaInput"></a>

```csharp
public object BasicConstraintsValidForNonCaInput { get; }
```

- *Type:* object

---

##### `ClientFlagInput`<sup>Optional</sup> <a name="ClientFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlagInput"></a>

```csharp
public object ClientFlagInput { get; }
```

- *Type:* object

---

##### `CodeSigningFlagInput`<sup>Optional</sup> <a name="CodeSigningFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlagInput"></a>

```csharp
public object CodeSigningFlagInput { get; }
```

- *Type:* object

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.countryInput"></a>

```csharp
public string[] CountryInput { get; }
```

- *Type:* string[]

---

##### `EmailProtectionFlagInput`<sup>Optional</sup> <a name="EmailProtectionFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlagInput"></a>

```csharp
public object EmailProtectionFlagInput { get; }
```

- *Type:* object

---

##### `EnforceHostnamesInput`<sup>Optional</sup> <a name="EnforceHostnamesInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnamesInput"></a>

```csharp
public object EnforceHostnamesInput { get; }
```

- *Type:* object

---

##### `ExtKeyUsageInput`<sup>Optional</sup> <a name="ExtKeyUsageInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageInput"></a>

```csharp
public string[] ExtKeyUsageInput { get; }
```

- *Type:* string[]

---

##### `ExtKeyUsageOidsInput`<sup>Optional</sup> <a name="ExtKeyUsageOidsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageOidsInput"></a>

```csharp
public string[] ExtKeyUsageOidsInput { get; }
```

- *Type:* string[]

---

##### `GenerateLeaseInput`<sup>Optional</sup> <a name="GenerateLeaseInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLeaseInput"></a>

```csharp
public object GenerateLeaseInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerRefInput`<sup>Optional</sup> <a name="IssuerRefInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRefInput"></a>

```csharp
public string IssuerRefInput { get; }
```

- *Type:* string

---

##### `KeyBitsInput`<sup>Optional</sup> <a name="KeyBitsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBitsInput"></a>

```csharp
public double KeyBitsInput { get; }
```

- *Type:* double

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsageInput"></a>

```csharp
public string[] KeyUsageInput { get; }
```

- *Type:* string[]

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.localityInput"></a>

```csharp
public string[] LocalityInput { get; }
```

- *Type:* string[]

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtlInput"></a>

```csharp
public string MaxTtlInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NoStoreInput`<sup>Optional</sup> <a name="NoStoreInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStoreInput"></a>

```csharp
public object NoStoreInput { get; }
```

- *Type:* object

---

##### `NotBeforeDurationInput`<sup>Optional</sup> <a name="NotBeforeDurationInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDurationInput"></a>

```csharp
public string NotBeforeDurationInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organizationInput"></a>

```csharp
public string[] OrganizationInput { get; }
```

- *Type:* string[]

---

##### `OuInput`<sup>Optional</sup> <a name="OuInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ouInput"></a>

```csharp
public string[] OuInput { get; }
```

- *Type:* string[]

---

##### `PolicyIdentifierInput`<sup>Optional</sup> <a name="PolicyIdentifierInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifierInput"></a>

```csharp
public object PolicyIdentifierInput { get; }
```

- *Type:* object

---

##### `PolicyIdentifiersInput`<sup>Optional</sup> <a name="PolicyIdentifiersInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiersInput"></a>

```csharp
public string[] PolicyIdentifiersInput { get; }
```

- *Type:* string[]

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCodeInput"></a>

```csharp
public string[] PostalCodeInput { get; }
```

- *Type:* string[]

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provinceInput"></a>

```csharp
public string[] ProvinceInput { get; }
```

- *Type:* string[]

---

##### `RequireCnInput`<sup>Optional</sup> <a name="RequireCnInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCnInput"></a>

```csharp
public object RequireCnInput { get; }
```

- *Type:* object

---

##### `ServerFlagInput`<sup>Optional</sup> <a name="ServerFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlagInput"></a>

```csharp
public object ServerFlagInput { get; }
```

- *Type:* object

---

##### `StreetAddressInput`<sup>Optional</sup> <a name="StreetAddressInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddressInput"></a>

```csharp
public string[] StreetAddressInput { get; }
```

- *Type:* string[]

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `UseCsrCommonNameInput`<sup>Optional</sup> <a name="UseCsrCommonNameInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonNameInput"></a>

```csharp
public object UseCsrCommonNameInput { get; }
```

- *Type:* object

---

##### `UseCsrSansInput`<sup>Optional</sup> <a name="UseCsrSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSansInput"></a>

```csharp
public object UseCsrSansInput { get; }
```

- *Type:* object

---

##### `AllowAnyName`<sup>Required</sup> <a name="AllowAnyName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyName"></a>

```csharp
public object AllowAnyName { get; }
```

- *Type:* object

---

##### `AllowBareDomains`<sup>Required</sup> <a name="AllowBareDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomains"></a>

```csharp
public object AllowBareDomains { get; }
```

- *Type:* object

---

##### `AllowedDomains`<sup>Required</sup> <a name="AllowedDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomains"></a>

```csharp
public string[] AllowedDomains { get; }
```

- *Type:* string[]

---

##### `AllowedDomainsTemplate`<sup>Required</sup> <a name="AllowedDomainsTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplate"></a>

```csharp
public object AllowedDomainsTemplate { get; }
```

- *Type:* object

---

##### `AllowedOtherSans`<sup>Required</sup> <a name="AllowedOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSans"></a>

```csharp
public string[] AllowedOtherSans { get; }
```

- *Type:* string[]

---

##### `AllowedSerialNumbers`<sup>Required</sup> <a name="AllowedSerialNumbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbers"></a>

```csharp
public string[] AllowedSerialNumbers { get; }
```

- *Type:* string[]

---

##### `AllowedUriSans`<sup>Required</sup> <a name="AllowedUriSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSans"></a>

```csharp
public string[] AllowedUriSans { get; }
```

- *Type:* string[]

---

##### `AllowedUriSansTemplate`<sup>Required</sup> <a name="AllowedUriSansTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplate"></a>

```csharp
public object AllowedUriSansTemplate { get; }
```

- *Type:* object

---

##### `AllowedUserIds`<sup>Required</sup> <a name="AllowedUserIds" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIds"></a>

```csharp
public string[] AllowedUserIds { get; }
```

- *Type:* string[]

---

##### `AllowGlobDomains`<sup>Required</sup> <a name="AllowGlobDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomains"></a>

```csharp
public object AllowGlobDomains { get; }
```

- *Type:* object

---

##### `AllowIpSans`<sup>Required</sup> <a name="AllowIpSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSans"></a>

```csharp
public object AllowIpSans { get; }
```

- *Type:* object

---

##### `AllowLocalhost`<sup>Required</sup> <a name="AllowLocalhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhost"></a>

```csharp
public object AllowLocalhost { get; }
```

- *Type:* object

---

##### `AllowSubdomains`<sup>Required</sup> <a name="AllowSubdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomains"></a>

```csharp
public object AllowSubdomains { get; }
```

- *Type:* object

---

##### `AllowWildcardCertificates`<sup>Required</sup> <a name="AllowWildcardCertificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificates"></a>

```csharp
public object AllowWildcardCertificates { get; }
```

- *Type:* object

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `BasicConstraintsValidForNonCa`<sup>Required</sup> <a name="BasicConstraintsValidForNonCa" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCa"></a>

```csharp
public object BasicConstraintsValidForNonCa { get; }
```

- *Type:* object

---

##### `ClientFlag`<sup>Required</sup> <a name="ClientFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlag"></a>

```csharp
public object ClientFlag { get; }
```

- *Type:* object

---

##### `CodeSigningFlag`<sup>Required</sup> <a name="CodeSigningFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlag"></a>

```csharp
public object CodeSigningFlag { get; }
```

- *Type:* object

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.country"></a>

```csharp
public string[] Country { get; }
```

- *Type:* string[]

---

##### `EmailProtectionFlag`<sup>Required</sup> <a name="EmailProtectionFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlag"></a>

```csharp
public object EmailProtectionFlag { get; }
```

- *Type:* object

---

##### `EnforceHostnames`<sup>Required</sup> <a name="EnforceHostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnames"></a>

```csharp
public object EnforceHostnames { get; }
```

- *Type:* object

---

##### `ExtKeyUsage`<sup>Required</sup> <a name="ExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsage"></a>

```csharp
public string[] ExtKeyUsage { get; }
```

- *Type:* string[]

---

##### `ExtKeyUsageOids`<sup>Required</sup> <a name="ExtKeyUsageOids" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageOids"></a>

```csharp
public string[] ExtKeyUsageOids { get; }
```

- *Type:* string[]

---

##### `GenerateLease`<sup>Required</sup> <a name="GenerateLease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLease"></a>

```csharp
public object GenerateLease { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssuerRef`<sup>Required</sup> <a name="IssuerRef" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRef"></a>

```csharp
public string IssuerRef { get; }
```

- *Type:* string

---

##### `KeyBits`<sup>Required</sup> <a name="KeyBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBits"></a>

```csharp
public double KeyBits { get; }
```

- *Type:* double

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsage"></a>

```csharp
public string[] KeyUsage { get; }
```

- *Type:* string[]

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.locality"></a>

```csharp
public string[] Locality { get; }
```

- *Type:* string[]

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtl"></a>

```csharp
public string MaxTtl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NoStore`<sup>Required</sup> <a name="NoStore" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStore"></a>

```csharp
public object NoStore { get; }
```

- *Type:* object

---

##### `NotBeforeDuration`<sup>Required</sup> <a name="NotBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDuration"></a>

```csharp
public string NotBeforeDuration { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organization"></a>

```csharp
public string[] Organization { get; }
```

- *Type:* string[]

---

##### `Ou`<sup>Required</sup> <a name="Ou" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ou"></a>

```csharp
public string[] Ou { get; }
```

- *Type:* string[]

---

##### `PolicyIdentifiers`<sup>Required</sup> <a name="PolicyIdentifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiers"></a>

```csharp
public string[] PolicyIdentifiers { get; }
```

- *Type:* string[]

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCode"></a>

```csharp
public string[] PostalCode { get; }
```

- *Type:* string[]

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.province"></a>

```csharp
public string[] Province { get; }
```

- *Type:* string[]

---

##### `RequireCn`<sup>Required</sup> <a name="RequireCn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCn"></a>

```csharp
public object RequireCn { get; }
```

- *Type:* object

---

##### `ServerFlag`<sup>Required</sup> <a name="ServerFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlag"></a>

```csharp
public object ServerFlag { get; }
```

- *Type:* object

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddress"></a>

```csharp
public string[] StreetAddress { get; }
```

- *Type:* string[]

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `UseCsrCommonName`<sup>Required</sup> <a name="UseCsrCommonName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonName"></a>

```csharp
public object UseCsrCommonName { get; }
```

- *Type:* object

---

##### `UseCsrSans`<sup>Required</sup> <a name="UseCsrSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSans"></a>

```csharp
public object UseCsrSans { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendRoleConfig <a name="PkiSecretBackendRoleConfig" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendRoleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string Name,
    object AllowAnyName = null,
    object AllowBareDomains = null,
    string[] AllowedDomains = null,
    object AllowedDomainsTemplate = null,
    string[] AllowedOtherSans = null,
    string[] AllowedSerialNumbers = null,
    string[] AllowedUriSans = null,
    object AllowedUriSansTemplate = null,
    string[] AllowedUserIds = null,
    object AllowGlobDomains = null,
    object AllowIpSans = null,
    object AllowLocalhost = null,
    object AllowSubdomains = null,
    object AllowWildcardCertificates = null,
    object BasicConstraintsValidForNonCa = null,
    object ClientFlag = null,
    object CodeSigningFlag = null,
    string[] Country = null,
    object EmailProtectionFlag = null,
    object EnforceHostnames = null,
    string[] ExtKeyUsage = null,
    string[] ExtKeyUsageOids = null,
    object GenerateLease = null,
    string Id = null,
    string IssuerRef = null,
    double KeyBits = null,
    string KeyType = null,
    string[] KeyUsage = null,
    string[] Locality = null,
    string MaxTtl = null,
    string Namespace = null,
    object NoStore = null,
    string NotBeforeDuration = null,
    string[] Organization = null,
    string[] Ou = null,
    object PolicyIdentifier = null,
    string[] PolicyIdentifiers = null,
    string[] PostalCode = null,
    string[] Province = null,
    object RequireCn = null,
    object ServerFlag = null,
    string[] StreetAddress = null,
    string Ttl = null,
    object UseCsrCommonName = null,
    object UseCsrSans = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.backend">Backend</a></code> | <code>string</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.name">Name</a></code> | <code>string</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowAnyName">AllowAnyName</a></code> | <code>object</code> | Flag to allow any name. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowBareDomains">AllowBareDomains</a></code> | <code>object</code> | Flag to allow certificates matching the actual domain. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomains">AllowedDomains</a></code> | <code>string[]</code> | The domains of the role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomainsTemplate">AllowedDomainsTemplate</a></code> | <code>object</code> | Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedOtherSans">AllowedOtherSans</a></code> | <code>string[]</code> | Defines allowed custom SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedSerialNumbers">AllowedSerialNumbers</a></code> | <code>string[]</code> | Defines allowed Subject serial numbers. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSans">AllowedUriSans</a></code> | <code>string[]</code> | Defines allowed URI SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSansTemplate">AllowedUriSansTemplate</a></code> | <code>object</code> | Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUserIds">AllowedUserIds</a></code> | <code>string[]</code> | The allowed User ID's. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowGlobDomains">AllowGlobDomains</a></code> | <code>object</code> | Flag to allow names containing glob patterns. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowIpSans">AllowIpSans</a></code> | <code>object</code> | Flag to allow IP SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowLocalhost">AllowLocalhost</a></code> | <code>object</code> | Flag to allow certificates for localhost. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowSubdomains">AllowSubdomains</a></code> | <code>object</code> | Flag to allow certificates matching subdomains. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowWildcardCertificates">AllowWildcardCertificates</a></code> | <code>object</code> | Flag to allow wildcard certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.basicConstraintsValidForNonCa">BasicConstraintsValidForNonCa</a></code> | <code>object</code> | Flag to mark basic constraints valid when issuing non-CA certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.clientFlag">ClientFlag</a></code> | <code>object</code> | Flag to specify certificates for client use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.codeSigningFlag">CodeSigningFlag</a></code> | <code>object</code> | Flag to specify certificates for code signing use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.country">Country</a></code> | <code>string[]</code> | The country of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.emailProtectionFlag">EmailProtectionFlag</a></code> | <code>object</code> | Flag to specify certificates for email protection use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.enforceHostnames">EnforceHostnames</a></code> | <code>object</code> | Flag to allow only valid host names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsage">ExtKeyUsage</a></code> | <code>string[]</code> | Specify the allowed extended key usage constraint on issued certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsageOids">ExtKeyUsageOids</a></code> | <code>string[]</code> | A list of extended key usage OIDs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.generateLease">GenerateLease</a></code> | <code>object</code> | Flag to generate leases with certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#id PkiSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.issuerRef">IssuerRef</a></code> | <code>string</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyBits">KeyBits</a></code> | <code>double</code> | The number of bits of generated keys. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyType">KeyType</a></code> | <code>string</code> | The generated key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyUsage">KeyUsage</a></code> | <code>string[]</code> | Specify the allowed key usage constraint on issued certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.locality">Locality</a></code> | <code>string[]</code> | The locality of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.maxTtl">MaxTtl</a></code> | <code>string</code> | The maximum TTL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.noStore">NoStore</a></code> | <code>object</code> | Flag to not store certificates in the storage backend. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.notBeforeDuration">NotBeforeDuration</a></code> | <code>string</code> | Specifies the duration by which to backdate the NotBefore property. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.organization">Organization</a></code> | <code>string[]</code> | The organization of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ou">Ou</a></code> | <code>string[]</code> | The organization unit of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifier">PolicyIdentifier</a></code> | <code>object</code> | policy_identifier block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifiers">PolicyIdentifiers</a></code> | <code>string[]</code> | Specify the list of allowed policies OIDs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.postalCode">PostalCode</a></code> | <code>string[]</code> | The postal code of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.province">Province</a></code> | <code>string[]</code> | The province of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.requireCn">RequireCn</a></code> | <code>object</code> | Flag to force CN usage. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.serverFlag">ServerFlag</a></code> | <code>object</code> | Flag to specify certificates for server use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.streetAddress">StreetAddress</a></code> | <code>string[]</code> | The street address of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ttl">Ttl</a></code> | <code>string</code> | The TTL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrCommonName">UseCsrCommonName</a></code> | <code>object</code> | Flag to use the CN in the CSR. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrSans">UseCsrSans</a></code> | <code>object</code> | Flag to use the SANs in the CSR. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#backend PkiSecretBackendRole#backend}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#name PkiSecretBackendRole#name}

---

##### `AllowAnyName`<sup>Optional</sup> <a name="AllowAnyName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowAnyName"></a>

```csharp
public object AllowAnyName { get; set; }
```

- *Type:* object

Flag to allow any name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#allow_any_name PkiSecretBackendRole#allow_any_name}

---

##### `AllowBareDomains`<sup>Optional</sup> <a name="AllowBareDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowBareDomains"></a>

```csharp
public object AllowBareDomains { get; set; }
```

- *Type:* object

Flag to allow certificates matching the actual domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#allow_bare_domains PkiSecretBackendRole#allow_bare_domains}

---

##### `AllowedDomains`<sup>Optional</sup> <a name="AllowedDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomains"></a>

```csharp
public string[] AllowedDomains { get; set; }
```

- *Type:* string[]

The domains of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#allowed_domains PkiSecretBackendRole#allowed_domains}

---

##### `AllowedDomainsTemplate`<sup>Optional</sup> <a name="AllowedDomainsTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomainsTemplate"></a>

```csharp
public object AllowedDomainsTemplate { get; set; }
```

- *Type:* object

Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#allowed_domains_template PkiSecretBackendRole#allowed_domains_template}

---

##### `AllowedOtherSans`<sup>Optional</sup> <a name="AllowedOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedOtherSans"></a>

```csharp
public string[] AllowedOtherSans { get; set; }
```

- *Type:* string[]

Defines allowed custom SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#allowed_other_sans PkiSecretBackendRole#allowed_other_sans}

---

##### `AllowedSerialNumbers`<sup>Optional</sup> <a name="AllowedSerialNumbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedSerialNumbers"></a>

```csharp
public string[] AllowedSerialNumbers { get; set; }
```

- *Type:* string[]

Defines allowed Subject serial numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#allowed_serial_numbers PkiSecretBackendRole#allowed_serial_numbers}

---

##### `AllowedUriSans`<sup>Optional</sup> <a name="AllowedUriSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSans"></a>

```csharp
public string[] AllowedUriSans { get; set; }
```

- *Type:* string[]

Defines allowed URI SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#allowed_uri_sans PkiSecretBackendRole#allowed_uri_sans}

---

##### `AllowedUriSansTemplate`<sup>Optional</sup> <a name="AllowedUriSansTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSansTemplate"></a>

```csharp
public object AllowedUriSansTemplate { get; set; }
```

- *Type:* object

Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#allowed_uri_sans_template PkiSecretBackendRole#allowed_uri_sans_template}

---

##### `AllowedUserIds`<sup>Optional</sup> <a name="AllowedUserIds" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUserIds"></a>

```csharp
public string[] AllowedUserIds { get; set; }
```

- *Type:* string[]

The allowed User ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#allowed_user_ids PkiSecretBackendRole#allowed_user_ids}

---

##### `AllowGlobDomains`<sup>Optional</sup> <a name="AllowGlobDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowGlobDomains"></a>

```csharp
public object AllowGlobDomains { get; set; }
```

- *Type:* object

Flag to allow names containing glob patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#allow_glob_domains PkiSecretBackendRole#allow_glob_domains}

---

##### `AllowIpSans`<sup>Optional</sup> <a name="AllowIpSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowIpSans"></a>

```csharp
public object AllowIpSans { get; set; }
```

- *Type:* object

Flag to allow IP SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#allow_ip_sans PkiSecretBackendRole#allow_ip_sans}

---

##### `AllowLocalhost`<sup>Optional</sup> <a name="AllowLocalhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowLocalhost"></a>

```csharp
public object AllowLocalhost { get; set; }
```

- *Type:* object

Flag to allow certificates for localhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#allow_localhost PkiSecretBackendRole#allow_localhost}

---

##### `AllowSubdomains`<sup>Optional</sup> <a name="AllowSubdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowSubdomains"></a>

```csharp
public object AllowSubdomains { get; set; }
```

- *Type:* object

Flag to allow certificates matching subdomains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#allow_subdomains PkiSecretBackendRole#allow_subdomains}

---

##### `AllowWildcardCertificates`<sup>Optional</sup> <a name="AllowWildcardCertificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowWildcardCertificates"></a>

```csharp
public object AllowWildcardCertificates { get; set; }
```

- *Type:* object

Flag to allow wildcard certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#allow_wildcard_certificates PkiSecretBackendRole#allow_wildcard_certificates}

---

##### `BasicConstraintsValidForNonCa`<sup>Optional</sup> <a name="BasicConstraintsValidForNonCa" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.basicConstraintsValidForNonCa"></a>

```csharp
public object BasicConstraintsValidForNonCa { get; set; }
```

- *Type:* object

Flag to mark basic constraints valid when issuing non-CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#basic_constraints_valid_for_non_ca PkiSecretBackendRole#basic_constraints_valid_for_non_ca}

---

##### `ClientFlag`<sup>Optional</sup> <a name="ClientFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.clientFlag"></a>

```csharp
public object ClientFlag { get; set; }
```

- *Type:* object

Flag to specify certificates for client use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#client_flag PkiSecretBackendRole#client_flag}

---

##### `CodeSigningFlag`<sup>Optional</sup> <a name="CodeSigningFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.codeSigningFlag"></a>

```csharp
public object CodeSigningFlag { get; set; }
```

- *Type:* object

Flag to specify certificates for code signing use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#code_signing_flag PkiSecretBackendRole#code_signing_flag}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.country"></a>

```csharp
public string[] Country { get; set; }
```

- *Type:* string[]

The country of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#country PkiSecretBackendRole#country}

---

##### `EmailProtectionFlag`<sup>Optional</sup> <a name="EmailProtectionFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.emailProtectionFlag"></a>

```csharp
public object EmailProtectionFlag { get; set; }
```

- *Type:* object

Flag to specify certificates for email protection use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#email_protection_flag PkiSecretBackendRole#email_protection_flag}

---

##### `EnforceHostnames`<sup>Optional</sup> <a name="EnforceHostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.enforceHostnames"></a>

```csharp
public object EnforceHostnames { get; set; }
```

- *Type:* object

Flag to allow only valid host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#enforce_hostnames PkiSecretBackendRole#enforce_hostnames}

---

##### `ExtKeyUsage`<sup>Optional</sup> <a name="ExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsage"></a>

```csharp
public string[] ExtKeyUsage { get; set; }
```

- *Type:* string[]

Specify the allowed extended key usage constraint on issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#ext_key_usage PkiSecretBackendRole#ext_key_usage}

---

##### `ExtKeyUsageOids`<sup>Optional</sup> <a name="ExtKeyUsageOids" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsageOids"></a>

```csharp
public string[] ExtKeyUsageOids { get; set; }
```

- *Type:* string[]

A list of extended key usage OIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#ext_key_usage_oids PkiSecretBackendRole#ext_key_usage_oids}

---

##### `GenerateLease`<sup>Optional</sup> <a name="GenerateLease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.generateLease"></a>

```csharp
public object GenerateLease { get; set; }
```

- *Type:* object

Flag to generate leases with certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#generate_lease PkiSecretBackendRole#generate_lease}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#id PkiSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuerRef`<sup>Optional</sup> <a name="IssuerRef" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.issuerRef"></a>

```csharp
public string IssuerRef { get; set; }
```

- *Type:* string

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#issuer_ref PkiSecretBackendRole#issuer_ref}

---

##### `KeyBits`<sup>Optional</sup> <a name="KeyBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyBits"></a>

```csharp
public double KeyBits { get; set; }
```

- *Type:* double

The number of bits of generated keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#key_bits PkiSecretBackendRole#key_bits}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

The generated key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#key_type PkiSecretBackendRole#key_type}

---

##### `KeyUsage`<sup>Optional</sup> <a name="KeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyUsage"></a>

```csharp
public string[] KeyUsage { get; set; }
```

- *Type:* string[]

Specify the allowed key usage constraint on issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#key_usage PkiSecretBackendRole#key_usage}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.locality"></a>

```csharp
public string[] Locality { get; set; }
```

- *Type:* string[]

The locality of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#locality PkiSecretBackendRole#locality}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.maxTtl"></a>

```csharp
public string MaxTtl { get; set; }
```

- *Type:* string

The maximum TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#max_ttl PkiSecretBackendRole#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#namespace PkiSecretBackendRole#namespace}

---

##### `NoStore`<sup>Optional</sup> <a name="NoStore" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.noStore"></a>

```csharp
public object NoStore { get; set; }
```

- *Type:* object

Flag to not store certificates in the storage backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#no_store PkiSecretBackendRole#no_store}

---

##### `NotBeforeDuration`<sup>Optional</sup> <a name="NotBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.notBeforeDuration"></a>

```csharp
public string NotBeforeDuration { get; set; }
```

- *Type:* string

Specifies the duration by which to backdate the NotBefore property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#not_before_duration PkiSecretBackendRole#not_before_duration}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.organization"></a>

```csharp
public string[] Organization { get; set; }
```

- *Type:* string[]

The organization of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#organization PkiSecretBackendRole#organization}

---

##### `Ou`<sup>Optional</sup> <a name="Ou" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ou"></a>

```csharp
public string[] Ou { get; set; }
```

- *Type:* string[]

The organization unit of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#ou PkiSecretBackendRole#ou}

---

##### `PolicyIdentifier`<sup>Optional</sup> <a name="PolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifier"></a>

```csharp
public object PolicyIdentifier { get; set; }
```

- *Type:* object

policy_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#policy_identifier PkiSecretBackendRole#policy_identifier}

---

##### `PolicyIdentifiers`<sup>Optional</sup> <a name="PolicyIdentifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifiers"></a>

```csharp
public string[] PolicyIdentifiers { get; set; }
```

- *Type:* string[]

Specify the list of allowed policies OIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#policy_identifiers PkiSecretBackendRole#policy_identifiers}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.postalCode"></a>

```csharp
public string[] PostalCode { get; set; }
```

- *Type:* string[]

The postal code of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#postal_code PkiSecretBackendRole#postal_code}

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.province"></a>

```csharp
public string[] Province { get; set; }
```

- *Type:* string[]

The province of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#province PkiSecretBackendRole#province}

---

##### `RequireCn`<sup>Optional</sup> <a name="RequireCn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.requireCn"></a>

```csharp
public object RequireCn { get; set; }
```

- *Type:* object

Flag to force CN usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#require_cn PkiSecretBackendRole#require_cn}

---

##### `ServerFlag`<sup>Optional</sup> <a name="ServerFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.serverFlag"></a>

```csharp
public object ServerFlag { get; set; }
```

- *Type:* object

Flag to specify certificates for server use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#server_flag PkiSecretBackendRole#server_flag}

---

##### `StreetAddress`<sup>Optional</sup> <a name="StreetAddress" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.streetAddress"></a>

```csharp
public string[] StreetAddress { get; set; }
```

- *Type:* string[]

The street address of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#street_address PkiSecretBackendRole#street_address}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

The TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#ttl PkiSecretBackendRole#ttl}

---

##### `UseCsrCommonName`<sup>Optional</sup> <a name="UseCsrCommonName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrCommonName"></a>

```csharp
public object UseCsrCommonName { get; set; }
```

- *Type:* object

Flag to use the CN in the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#use_csr_common_name PkiSecretBackendRole#use_csr_common_name}

---

##### `UseCsrSans`<sup>Optional</sup> <a name="UseCsrSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrSans"></a>

```csharp
public object UseCsrSans { get; set; }
```

- *Type:* object

Flag to use the SANs in the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#use_csr_sans PkiSecretBackendRole#use_csr_sans}

---

### PkiSecretBackendRolePolicyIdentifier <a name="PkiSecretBackendRolePolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendRolePolicyIdentifier {
    string Oid,
    string Cps = null,
    string Notice = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.oid">Oid</a></code> | <code>string</code> | OID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.cps">Cps</a></code> | <code>string</code> | Optional CPS URL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.notice">Notice</a></code> | <code>string</code> | Optional notice. |

---

##### `Oid`<sup>Required</sup> <a name="Oid" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.oid"></a>

```csharp
public string Oid { get; set; }
```

- *Type:* string

OID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#oid PkiSecretBackendRole#oid}

---

##### `Cps`<sup>Optional</sup> <a name="Cps" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.cps"></a>

```csharp
public string Cps { get; set; }
```

- *Type:* string

Optional CPS URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#cps PkiSecretBackendRole#cps}

---

##### `Notice`<sup>Optional</sup> <a name="Notice" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.notice"></a>

```csharp
public string Notice { get; set; }
```

- *Type:* string

Optional notice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_role#notice PkiSecretBackendRole#notice}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendRolePolicyIdentifierList <a name="PkiSecretBackendRolePolicyIdentifierList" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendRolePolicyIdentifierList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.get"></a>

```csharp
private PkiSecretBackendRolePolicyIdentifierOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PkiSecretBackendRolePolicyIdentifierOutputReference <a name="PkiSecretBackendRolePolicyIdentifierOutputReference" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendRolePolicyIdentifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCps` <a name="ResetCps" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetCps"></a>

```csharp
private void ResetCps()
```

##### `ResetNotice` <a name="ResetNotice" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetNotice"></a>

```csharp
private void ResetNotice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cpsInput">CpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.noticeInput">NoticeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oidInput">OidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cps">Cps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.notice">Notice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oid">Oid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpsInput`<sup>Optional</sup> <a name="CpsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cpsInput"></a>

```csharp
public string CpsInput { get; }
```

- *Type:* string

---

##### `NoticeInput`<sup>Optional</sup> <a name="NoticeInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.noticeInput"></a>

```csharp
public string NoticeInput { get; }
```

- *Type:* string

---

##### `OidInput`<sup>Optional</sup> <a name="OidInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oidInput"></a>

```csharp
public string OidInput { get; }
```

- *Type:* string

---

##### `Cps`<sup>Required</sup> <a name="Cps" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cps"></a>

```csharp
public string Cps { get; }
```

- *Type:* string

---

##### `Notice`<sup>Required</sup> <a name="Notice" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.notice"></a>

```csharp
public string Notice { get; }
```

- *Type:* string

---

##### `Oid`<sup>Required</sup> <a name="Oid" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oid"></a>

```csharp
public string Oid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



