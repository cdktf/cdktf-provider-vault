# `azureSecretBackend` Submodule <a name="`azureSecretBackend` Submodule" id="@cdktf/provider-vault.azureSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureSecretBackend <a name="AzureSecretBackend" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend vault_azure_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AzureSecretBackend(Construct Scope, string Id, AzureSecretBackendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig">AzureSecretBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig">AzureSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAllowedManagedKeys">ResetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDelegatedAuthAccessors">ResetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDisableAutomatedRotation">ResetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetExternalEntropyAccess">ResetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetForceNoCache">ResetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetIdentityTokenAudience">ResetIdentityTokenAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetIdentityTokenKey">ResetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetIdentityTokenTtl">ResetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetPluginVersion">ResetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRootPasswordTtl">ResetRootPasswordTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetSealWrap">ResetSealWrap</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedManagedKeys` <a name="ResetAllowedManagedKeys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAllowedManagedKeys"></a>

```csharp
private void ResetAllowedManagedKeys()
```

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAllowedResponseHeaders"></a>

```csharp
private void ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAuditNonHmacRequestKeys"></a>

```csharp
private void ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetAuditNonHmacResponseKeys"></a>

```csharp
private void ResetAuditNonHmacResponseKeys()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```csharp
private void ResetDefaultLeaseTtlSeconds()
```

##### `ResetDelegatedAuthAccessors` <a name="ResetDelegatedAuthAccessors" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDelegatedAuthAccessors"></a>

```csharp
private void ResetDelegatedAuthAccessors()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableAutomatedRotation` <a name="ResetDisableAutomatedRotation" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDisableAutomatedRotation"></a>

```csharp
private void ResetDisableAutomatedRotation()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDisableRemount"></a>

```csharp
private void ResetDisableRemount()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetExternalEntropyAccess` <a name="ResetExternalEntropyAccess" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetExternalEntropyAccess"></a>

```csharp
private void ResetExternalEntropyAccess()
```

##### `ResetForceNoCache` <a name="ResetForceNoCache" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetForceNoCache"></a>

```csharp
private void ResetForceNoCache()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityTokenAudience` <a name="ResetIdentityTokenAudience" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetIdentityTokenAudience"></a>

```csharp
private void ResetIdentityTokenAudience()
```

##### `ResetIdentityTokenKey` <a name="ResetIdentityTokenKey" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetIdentityTokenKey"></a>

```csharp
private void ResetIdentityTokenKey()
```

##### `ResetIdentityTokenTtl` <a name="ResetIdentityTokenTtl" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetIdentityTokenTtl"></a>

```csharp
private void ResetIdentityTokenTtl()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetListingVisibility"></a>

```csharp
private void ResetListingVisibility()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetMaxLeaseTtlSeconds"></a>

```csharp
private void ResetMaxLeaseTtlSeconds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetPassthroughRequestHeaders"></a>

```csharp
private void ResetPassthroughRequestHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPluginVersion` <a name="ResetPluginVersion" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetPluginVersion"></a>

```csharp
private void ResetPluginVersion()
```

##### `ResetRootPasswordTtl` <a name="ResetRootPasswordTtl" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRootPasswordTtl"></a>

```csharp
private void ResetRootPasswordTtl()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRotationSchedule"></a>

```csharp
private void ResetRotationSchedule()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetRotationWindow"></a>

```csharp
private void ResetRotationWindow()
```

##### `ResetSealWrap` <a name="ResetSealWrap" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetSealWrap"></a>

```csharp
private void ResetSealWrap()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AzureSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AzureSecretBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AzureSecretBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AzureSecretBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AzureSecretBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AzureSecretBackend resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AzureSecretBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AzureSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AzureSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedManagedKeysInput">AllowedManagedKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.delegatedAuthAccessorsInput">DelegatedAuthAccessorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableAutomatedRotationInput">DisableAutomatedRotationInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.externalEntropyAccessInput">ExternalEntropyAccessInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.forceNoCacheInput">ForceNoCacheInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenAudienceInput">IdentityTokenAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenKeyInput">IdentityTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenTtlInput">IdentityTokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.localInput">LocalInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.pluginVersionInput">PluginVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rootPasswordTtlInput">RootPasswordTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationWindowInput">RotationWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.sealWrapInput">SealWrapInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableRemount">DisableRemount</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.forceNoCache">ForceNoCache</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenAudience">IdentityTokenAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenKey">IdentityTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.local">Local</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.pluginVersion">PluginVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rootPasswordTtl">RootPasswordTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.sealWrap">SealWrap</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `AllowedManagedKeysInput`<sup>Optional</sup> <a name="AllowedManagedKeysInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedManagedKeysInput"></a>

```csharp
public string[] AllowedManagedKeysInput { get; }
```

- *Type:* string[]

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedResponseHeadersInput"></a>

```csharp
public string[] AllowedResponseHeadersInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```csharp
public string[] AuditNonHmacRequestKeysInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```csharp
public string[] AuditNonHmacResponseKeysInput { get; }
```

- *Type:* string[]

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```csharp
public double DefaultLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `DelegatedAuthAccessorsInput`<sup>Optional</sup> <a name="DelegatedAuthAccessorsInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.delegatedAuthAccessorsInput"></a>

```csharp
public string[] DelegatedAuthAccessorsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableAutomatedRotationInput`<sup>Optional</sup> <a name="DisableAutomatedRotationInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableAutomatedRotationInput"></a>

```csharp
public bool|IResolvable DisableAutomatedRotationInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableRemountInput"></a>

```csharp
public bool|IResolvable DisableRemountInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `ExternalEntropyAccessInput`<sup>Optional</sup> <a name="ExternalEntropyAccessInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.externalEntropyAccessInput"></a>

```csharp
public bool|IResolvable ExternalEntropyAccessInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ForceNoCacheInput`<sup>Optional</sup> <a name="ForceNoCacheInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.forceNoCacheInput"></a>

```csharp
public bool|IResolvable ForceNoCacheInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IdentityTokenAudienceInput`<sup>Optional</sup> <a name="IdentityTokenAudienceInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenAudienceInput"></a>

```csharp
public string IdentityTokenAudienceInput { get; }
```

- *Type:* string

---

##### `IdentityTokenKeyInput`<sup>Optional</sup> <a name="IdentityTokenKeyInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenKeyInput"></a>

```csharp
public string IdentityTokenKeyInput { get; }
```

- *Type:* string

---

##### `IdentityTokenTtlInput`<sup>Optional</sup> <a name="IdentityTokenTtlInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenTtlInput"></a>

```csharp
public double IdentityTokenTtlInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.listingVisibilityInput"></a>

```csharp
public string ListingVisibilityInput { get; }
```

- *Type:* string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.localInput"></a>

```csharp
public bool|IResolvable LocalInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```csharp
public double MaxLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.passthroughRequestHeadersInput"></a>

```csharp
public string[] PassthroughRequestHeadersInput { get; }
```

- *Type:* string[]

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PluginVersionInput`<sup>Optional</sup> <a name="PluginVersionInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.pluginVersionInput"></a>

```csharp
public string PluginVersionInput { get; }
```

- *Type:* string

---

##### `RootPasswordTtlInput`<sup>Optional</sup> <a name="RootPasswordTtlInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rootPasswordTtlInput"></a>

```csharp
public double RootPasswordTtlInput { get; }
```

- *Type:* double

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationPeriodInput"></a>

```csharp
public double RotationPeriodInput { get; }
```

- *Type:* double

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationScheduleInput"></a>

```csharp
public string RotationScheduleInput { get; }
```

- *Type:* string

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationWindowInput"></a>

```csharp
public double RotationWindowInput { get; }
```

- *Type:* double

---

##### `SealWrapInput`<sup>Optional</sup> <a name="SealWrapInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.sealWrapInput"></a>

```csharp
public bool|IResolvable SealWrapInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `AllowedManagedKeys`<sup>Required</sup> <a name="AllowedManagedKeys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; }
```

- *Type:* string[]

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `DelegatedAuthAccessors`<sup>Required</sup> <a name="DelegatedAuthAccessors" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.delegatedAuthAccessors"></a>

```csharp
public string[] DelegatedAuthAccessors { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableAutomatedRotation`<sup>Required</sup> <a name="DisableAutomatedRotation" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableAutomatedRotation"></a>

```csharp
public bool|IResolvable DisableAutomatedRotation { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `ExternalEntropyAccess`<sup>Required</sup> <a name="ExternalEntropyAccess" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.externalEntropyAccess"></a>

```csharp
public bool|IResolvable ExternalEntropyAccess { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ForceNoCache`<sup>Required</sup> <a name="ForceNoCache" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.forceNoCache"></a>

```csharp
public bool|IResolvable ForceNoCache { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityTokenAudience`<sup>Required</sup> <a name="IdentityTokenAudience" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenAudience"></a>

```csharp
public string IdentityTokenAudience { get; }
```

- *Type:* string

---

##### `IdentityTokenKey`<sup>Required</sup> <a name="IdentityTokenKey" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenKey"></a>

```csharp
public string IdentityTokenKey { get; }
```

- *Type:* string

---

##### `IdentityTokenTtl`<sup>Required</sup> <a name="IdentityTokenTtl" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.identityTokenTtl"></a>

```csharp
public double IdentityTokenTtl { get; }
```

- *Type:* double

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; }
```

- *Type:* string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.local"></a>

```csharp
public bool|IResolvable Local { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; }
```

- *Type:* string[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PluginVersion`<sup>Required</sup> <a name="PluginVersion" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.pluginVersion"></a>

```csharp
public string PluginVersion { get; }
```

- *Type:* string

---

##### `RootPasswordTtl`<sup>Required</sup> <a name="RootPasswordTtl" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rootPasswordTtl"></a>

```csharp
public double RootPasswordTtl { get; }
```

- *Type:* double

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; }
```

- *Type:* double

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; }
```

- *Type:* string

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; }
```

- *Type:* double

---

##### `SealWrap`<sup>Required</sup> <a name="SealWrap" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.sealWrap"></a>

```csharp
public bool|IResolvable SealWrap { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureSecretBackendConfig <a name="AzureSecretBackendConfig" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AzureSecretBackendConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SubscriptionId,
    string TenantId,
    string[] AllowedManagedKeys = null,
    string[] AllowedResponseHeaders = null,
    string[] AuditNonHmacRequestKeys = null,
    string[] AuditNonHmacResponseKeys = null,
    string ClientId = null,
    string ClientSecret = null,
    double DefaultLeaseTtlSeconds = null,
    string[] DelegatedAuthAccessors = null,
    string Description = null,
    bool|IResolvable DisableAutomatedRotation = null,
    bool|IResolvable DisableRemount = null,
    string Environment = null,
    bool|IResolvable ExternalEntropyAccess = null,
    bool|IResolvable ForceNoCache = null,
    string Id = null,
    string IdentityTokenAudience = null,
    string IdentityTokenKey = null,
    double IdentityTokenTtl = null,
    string ListingVisibility = null,
    bool|IResolvable Local = null,
    double MaxLeaseTtlSeconds = null,
    string Namespace = null,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    string[] PassthroughRequestHeaders = null,
    string Path = null,
    string PluginVersion = null,
    double RootPasswordTtl = null,
    double RotationPeriod = null,
    string RotationSchedule = null,
    double RotationWindow = null,
    bool|IResolvable SealWrap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | The subscription id for the Azure Active Directory. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.tenantId">TenantId</a></code> | <code>string</code> | The tenant id for the Azure Active Directory organization. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The client secret for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.description">Description</a></code> | <code>string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.environment">Environment</a></code> | <code>string</code> | The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.forceNoCache">ForceNoCache</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#id AzureSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.identityTokenAudience">IdentityTokenAudience</a></code> | <code>string</code> | The audience claim value. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.identityTokenKey">IdentityTokenKey</a></code> | <code>string</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>double</code> | The TTL of generated identity tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.local">Local</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.path">Path</a></code> | <code>string</code> | Path to mount the backend at. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.pluginVersion">PluginVersion</a></code> | <code>string</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rootPasswordTtl">RootPasswordTtl</a></code> | <code>double</code> | The TTL in seconds of the root password in Azure when rotate-root generates a new client secret. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.sealWrap">SealWrap</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

The subscription id for the Azure Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#subscription_id AzureSecretBackend#subscription_id}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The tenant id for the Azure Active Directory organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#tenant_id AzureSecretBackend#tenant_id}

---

##### `AllowedManagedKeys`<sup>Optional</sup> <a name="AllowedManagedKeys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; set; }
```

- *Type:* string[]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#allowed_managed_keys AzureSecretBackend#allowed_managed_keys}

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#allowed_response_headers AzureSecretBackend#allowed_response_headers}

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#audit_non_hmac_request_keys AzureSecretBackend#audit_non_hmac_request_keys}

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#audit_non_hmac_response_keys AzureSecretBackend#audit_non_hmac_response_keys}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#client_id AzureSecretBackend#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The client secret for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#client_secret AzureSecretBackend#client_secret}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; set; }
```

- *Type:* double

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#default_lease_ttl_seconds AzureSecretBackend#default_lease_ttl_seconds}

---

##### `DelegatedAuthAccessors`<sup>Optional</sup> <a name="DelegatedAuthAccessors" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.delegatedAuthAccessors"></a>

```csharp
public string[] DelegatedAuthAccessors { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#delegated_auth_accessors AzureSecretBackend#delegated_auth_accessors}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#description AzureSecretBackend#description}

---

##### `DisableAutomatedRotation`<sup>Optional</sup> <a name="DisableAutomatedRotation" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.disableAutomatedRotation"></a>

```csharp
public bool|IResolvable DisableAutomatedRotation { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#disable_automated_rotation AzureSecretBackend#disable_automated_rotation}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#disable_remount AzureSecretBackend#disable_remount}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#environment AzureSecretBackend#environment}

---

##### `ExternalEntropyAccess`<sup>Optional</sup> <a name="ExternalEntropyAccess" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.externalEntropyAccess"></a>

```csharp
public bool|IResolvable ExternalEntropyAccess { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#external_entropy_access AzureSecretBackend#external_entropy_access}

---

##### `ForceNoCache`<sup>Optional</sup> <a name="ForceNoCache" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.forceNoCache"></a>

```csharp
public bool|IResolvable ForceNoCache { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#force_no_cache AzureSecretBackend#force_no_cache}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#id AzureSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityTokenAudience`<sup>Optional</sup> <a name="IdentityTokenAudience" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.identityTokenAudience"></a>

```csharp
public string IdentityTokenAudience { get; set; }
```

- *Type:* string

The audience claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#identity_token_audience AzureSecretBackend#identity_token_audience}

---

##### `IdentityTokenKey`<sup>Optional</sup> <a name="IdentityTokenKey" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.identityTokenKey"></a>

```csharp
public string IdentityTokenKey { get; set; }
```

- *Type:* string

The key to use for signing identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#identity_token_key AzureSecretBackend#identity_token_key}

---

##### `IdentityTokenTtl`<sup>Optional</sup> <a name="IdentityTokenTtl" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.identityTokenTtl"></a>

```csharp
public double IdentityTokenTtl { get; set; }
```

- *Type:* double

The TTL of generated identity tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#identity_token_ttl AzureSecretBackend#identity_token_ttl}

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; set; }
```

- *Type:* string

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#listing_visibility AzureSecretBackend#listing_visibility}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.local"></a>

```csharp
public bool|IResolvable Local { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#local AzureSecretBackend#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; set; }
```

- *Type:* double

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#max_lease_ttl_seconds AzureSecretBackend#max_lease_ttl_seconds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#namespace AzureSecretBackend#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#options AzureSecretBackend#options}

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#passthrough_request_headers AzureSecretBackend#passthrough_request_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path to mount the backend at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#path AzureSecretBackend#path}

---

##### `PluginVersion`<sup>Optional</sup> <a name="PluginVersion" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.pluginVersion"></a>

```csharp
public string PluginVersion { get; set; }
```

- *Type:* string

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#plugin_version AzureSecretBackend#plugin_version}

---

##### `RootPasswordTtl`<sup>Optional</sup> <a name="RootPasswordTtl" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rootPasswordTtl"></a>

```csharp
public double RootPasswordTtl { get; set; }
```

- *Type:* double

The TTL in seconds of the root password in Azure when rotate-root generates a new client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#root_password_ttl AzureSecretBackend#root_password_ttl}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; set; }
```

- *Type:* double

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#rotation_period AzureSecretBackend#rotation_period}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; set; }
```

- *Type:* string

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#rotation_schedule AzureSecretBackend#rotation_schedule}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; set; }
```

- *Type:* double

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#rotation_window AzureSecretBackend#rotation_window}

---

##### `SealWrap`<sup>Optional</sup> <a name="SealWrap" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.sealWrap"></a>

```csharp
public bool|IResolvable SealWrap { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_secret_backend#seal_wrap AzureSecretBackend#seal_wrap}

---



