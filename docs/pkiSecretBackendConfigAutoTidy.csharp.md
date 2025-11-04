# `pkiSecretBackendConfigAutoTidy` Submodule <a name="`pkiSecretBackendConfigAutoTidy` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigAutoTidy <a name="PkiSecretBackendConfigAutoTidy" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy vault_pki_secret_backend_config_auto_tidy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigAutoTidy(Construct Scope, string Id, PkiSecretBackendConfigAutoTidyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig">PkiSecretBackendConfigAutoTidyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig">PkiSecretBackendConfigAutoTidyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetAcmeAccountSafetyBuffer">ResetAcmeAccountSafetyBuffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIntervalDuration">ResetIntervalDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIssuerSafetyBuffer">ResetIssuerSafetyBuffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaintainStoredCertificateCounts">ResetMaintainStoredCertificateCounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaxStartupBackoffDuration">ResetMaxStartupBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMinStartupBackoffDuration">ResetMinStartupBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPauseDuration">ResetPauseDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPublishStoredCertificateCountMetrics">ResetPublishStoredCertificateCountMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetRevocationQueueSafetyBuffer">ResetRevocationQueueSafetyBuffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetSafetyBuffer">ResetSafetyBuffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyAcme">ResetTidyAcme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertMetadata">ResetTidyCertMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertStore">ResetTidyCertStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCmpv2NonceStore">ResetTidyCmpv2NonceStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCrossClusterRevokedCerts">ResetTidyCrossClusterRevokedCerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyExpiredIssuers">ResetTidyExpiredIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyMoveLegacyCaBundle">ResetTidyMoveLegacyCaBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevocationQueue">ResetTidyRevocationQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCertIssuerAssociations">ResetTidyRevokedCertIssuerAssociations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCerts">ResetTidyRevokedCerts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAcmeAccountSafetyBuffer` <a name="ResetAcmeAccountSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetAcmeAccountSafetyBuffer"></a>

```csharp
private void ResetAcmeAccountSafetyBuffer()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIntervalDuration` <a name="ResetIntervalDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIntervalDuration"></a>

```csharp
private void ResetIntervalDuration()
```

##### `ResetIssuerSafetyBuffer` <a name="ResetIssuerSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIssuerSafetyBuffer"></a>

```csharp
private void ResetIssuerSafetyBuffer()
```

##### `ResetMaintainStoredCertificateCounts` <a name="ResetMaintainStoredCertificateCounts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaintainStoredCertificateCounts"></a>

```csharp
private void ResetMaintainStoredCertificateCounts()
```

##### `ResetMaxStartupBackoffDuration` <a name="ResetMaxStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaxStartupBackoffDuration"></a>

```csharp
private void ResetMaxStartupBackoffDuration()
```

##### `ResetMinStartupBackoffDuration` <a name="ResetMinStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMinStartupBackoffDuration"></a>

```csharp
private void ResetMinStartupBackoffDuration()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPauseDuration` <a name="ResetPauseDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPauseDuration"></a>

```csharp
private void ResetPauseDuration()
```

##### `ResetPublishStoredCertificateCountMetrics` <a name="ResetPublishStoredCertificateCountMetrics" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPublishStoredCertificateCountMetrics"></a>

```csharp
private void ResetPublishStoredCertificateCountMetrics()
```

##### `ResetRevocationQueueSafetyBuffer` <a name="ResetRevocationQueueSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetRevocationQueueSafetyBuffer"></a>

```csharp
private void ResetRevocationQueueSafetyBuffer()
```

##### `ResetSafetyBuffer` <a name="ResetSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetSafetyBuffer"></a>

```csharp
private void ResetSafetyBuffer()
```

##### `ResetTidyAcme` <a name="ResetTidyAcme" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyAcme"></a>

```csharp
private void ResetTidyAcme()
```

##### `ResetTidyCertMetadata` <a name="ResetTidyCertMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertMetadata"></a>

```csharp
private void ResetTidyCertMetadata()
```

##### `ResetTidyCertStore` <a name="ResetTidyCertStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertStore"></a>

```csharp
private void ResetTidyCertStore()
```

##### `ResetTidyCmpv2NonceStore` <a name="ResetTidyCmpv2NonceStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCmpv2NonceStore"></a>

```csharp
private void ResetTidyCmpv2NonceStore()
```

##### `ResetTidyCrossClusterRevokedCerts` <a name="ResetTidyCrossClusterRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCrossClusterRevokedCerts"></a>

```csharp
private void ResetTidyCrossClusterRevokedCerts()
```

##### `ResetTidyExpiredIssuers` <a name="ResetTidyExpiredIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyExpiredIssuers"></a>

```csharp
private void ResetTidyExpiredIssuers()
```

##### `ResetTidyMoveLegacyCaBundle` <a name="ResetTidyMoveLegacyCaBundle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyMoveLegacyCaBundle"></a>

```csharp
private void ResetTidyMoveLegacyCaBundle()
```

##### `ResetTidyRevocationQueue` <a name="ResetTidyRevocationQueue" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevocationQueue"></a>

```csharp
private void ResetTidyRevocationQueue()
```

##### `ResetTidyRevokedCertIssuerAssociations` <a name="ResetTidyRevokedCertIssuerAssociations" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCertIssuerAssociations"></a>

```csharp
private void ResetTidyRevokedCertIssuerAssociations()
```

##### `ResetTidyRevokedCerts` <a name="ResetTidyRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCerts"></a>

```csharp
private void ResetTidyRevokedCerts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigAutoTidy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigAutoTidy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigAutoTidy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigAutoTidy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigAutoTidy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PkiSecretBackendConfigAutoTidy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendConfigAutoTidy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendConfigAutoTidy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigAutoTidy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBufferInput">AcmeAccountSafetyBufferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDurationInput">IntervalDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBufferInput">IssuerSafetyBufferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCountsInput">MaintainStoredCertificateCountsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDurationInput">MaxStartupBackoffDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDurationInput">MinStartupBackoffDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDurationInput">PauseDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetricsInput">PublishStoredCertificateCountMetricsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBufferInput">RevocationQueueSafetyBufferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBufferInput">SafetyBufferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcmeInput">TidyAcmeInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadataInput">TidyCertMetadataInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStoreInput">TidyCertStoreInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStoreInput">TidyCmpv2NonceStoreInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCertsInput">TidyCrossClusterRevokedCertsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuersInput">TidyExpiredIssuersInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundleInput">TidyMoveLegacyCaBundleInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueueInput">TidyRevocationQueueInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociationsInput">TidyRevokedCertIssuerAssociationsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertsInput">TidyRevokedCertsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBuffer">AcmeAccountSafetyBuffer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDuration">IntervalDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBuffer">IssuerSafetyBuffer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCounts">MaintainStoredCertificateCounts</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDuration">MaxStartupBackoffDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDuration">MinStartupBackoffDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDuration">PauseDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetrics">PublishStoredCertificateCountMetrics</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBuffer">RevocationQueueSafetyBuffer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBuffer">SafetyBuffer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcme">TidyAcme</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadata">TidyCertMetadata</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStore">TidyCertStore</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStore">TidyCmpv2NonceStore</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCerts">TidyCrossClusterRevokedCerts</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuers">TidyExpiredIssuers</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundle">TidyMoveLegacyCaBundle</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueue">TidyRevocationQueue</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociations">TidyRevokedCertIssuerAssociations</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCerts">TidyRevokedCerts</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AcmeAccountSafetyBufferInput`<sup>Optional</sup> <a name="AcmeAccountSafetyBufferInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBufferInput"></a>

```csharp
public string AcmeAccountSafetyBufferInput { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntervalDurationInput`<sup>Optional</sup> <a name="IntervalDurationInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDurationInput"></a>

```csharp
public string IntervalDurationInput { get; }
```

- *Type:* string

---

##### `IssuerSafetyBufferInput`<sup>Optional</sup> <a name="IssuerSafetyBufferInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBufferInput"></a>

```csharp
public string IssuerSafetyBufferInput { get; }
```

- *Type:* string

---

##### `MaintainStoredCertificateCountsInput`<sup>Optional</sup> <a name="MaintainStoredCertificateCountsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCountsInput"></a>

```csharp
public bool|IResolvable MaintainStoredCertificateCountsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MaxStartupBackoffDurationInput`<sup>Optional</sup> <a name="MaxStartupBackoffDurationInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDurationInput"></a>

```csharp
public string MaxStartupBackoffDurationInput { get; }
```

- *Type:* string

---

##### `MinStartupBackoffDurationInput`<sup>Optional</sup> <a name="MinStartupBackoffDurationInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDurationInput"></a>

```csharp
public string MinStartupBackoffDurationInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PauseDurationInput`<sup>Optional</sup> <a name="PauseDurationInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDurationInput"></a>

```csharp
public string PauseDurationInput { get; }
```

- *Type:* string

---

##### `PublishStoredCertificateCountMetricsInput`<sup>Optional</sup> <a name="PublishStoredCertificateCountMetricsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetricsInput"></a>

```csharp
public bool|IResolvable PublishStoredCertificateCountMetricsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RevocationQueueSafetyBufferInput`<sup>Optional</sup> <a name="RevocationQueueSafetyBufferInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBufferInput"></a>

```csharp
public string RevocationQueueSafetyBufferInput { get; }
```

- *Type:* string

---

##### `SafetyBufferInput`<sup>Optional</sup> <a name="SafetyBufferInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBufferInput"></a>

```csharp
public string SafetyBufferInput { get; }
```

- *Type:* string

---

##### `TidyAcmeInput`<sup>Optional</sup> <a name="TidyAcmeInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcmeInput"></a>

```csharp
public bool|IResolvable TidyAcmeInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyCertMetadataInput`<sup>Optional</sup> <a name="TidyCertMetadataInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadataInput"></a>

```csharp
public bool|IResolvable TidyCertMetadataInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyCertStoreInput`<sup>Optional</sup> <a name="TidyCertStoreInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStoreInput"></a>

```csharp
public bool|IResolvable TidyCertStoreInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyCmpv2NonceStoreInput`<sup>Optional</sup> <a name="TidyCmpv2NonceStoreInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStoreInput"></a>

```csharp
public bool|IResolvable TidyCmpv2NonceStoreInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyCrossClusterRevokedCertsInput`<sup>Optional</sup> <a name="TidyCrossClusterRevokedCertsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCertsInput"></a>

```csharp
public bool|IResolvable TidyCrossClusterRevokedCertsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyExpiredIssuersInput`<sup>Optional</sup> <a name="TidyExpiredIssuersInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuersInput"></a>

```csharp
public bool|IResolvable TidyExpiredIssuersInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyMoveLegacyCaBundleInput`<sup>Optional</sup> <a name="TidyMoveLegacyCaBundleInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundleInput"></a>

```csharp
public bool|IResolvable TidyMoveLegacyCaBundleInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyRevocationQueueInput`<sup>Optional</sup> <a name="TidyRevocationQueueInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueueInput"></a>

```csharp
public bool|IResolvable TidyRevocationQueueInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyRevokedCertIssuerAssociationsInput`<sup>Optional</sup> <a name="TidyRevokedCertIssuerAssociationsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociationsInput"></a>

```csharp
public bool|IResolvable TidyRevokedCertIssuerAssociationsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyRevokedCertsInput`<sup>Optional</sup> <a name="TidyRevokedCertsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertsInput"></a>

```csharp
public bool|IResolvable TidyRevokedCertsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AcmeAccountSafetyBuffer`<sup>Required</sup> <a name="AcmeAccountSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBuffer"></a>

```csharp
public string AcmeAccountSafetyBuffer { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntervalDuration`<sup>Required</sup> <a name="IntervalDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDuration"></a>

```csharp
public string IntervalDuration { get; }
```

- *Type:* string

---

##### `IssuerSafetyBuffer`<sup>Required</sup> <a name="IssuerSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBuffer"></a>

```csharp
public string IssuerSafetyBuffer { get; }
```

- *Type:* string

---

##### `MaintainStoredCertificateCounts`<sup>Required</sup> <a name="MaintainStoredCertificateCounts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCounts"></a>

```csharp
public bool|IResolvable MaintainStoredCertificateCounts { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MaxStartupBackoffDuration`<sup>Required</sup> <a name="MaxStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDuration"></a>

```csharp
public string MaxStartupBackoffDuration { get; }
```

- *Type:* string

---

##### `MinStartupBackoffDuration`<sup>Required</sup> <a name="MinStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDuration"></a>

```csharp
public string MinStartupBackoffDuration { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PauseDuration`<sup>Required</sup> <a name="PauseDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDuration"></a>

```csharp
public string PauseDuration { get; }
```

- *Type:* string

---

##### `PublishStoredCertificateCountMetrics`<sup>Required</sup> <a name="PublishStoredCertificateCountMetrics" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetrics"></a>

```csharp
public bool|IResolvable PublishStoredCertificateCountMetrics { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RevocationQueueSafetyBuffer`<sup>Required</sup> <a name="RevocationQueueSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBuffer"></a>

```csharp
public string RevocationQueueSafetyBuffer { get; }
```

- *Type:* string

---

##### `SafetyBuffer`<sup>Required</sup> <a name="SafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBuffer"></a>

```csharp
public string SafetyBuffer { get; }
```

- *Type:* string

---

##### `TidyAcme`<sup>Required</sup> <a name="TidyAcme" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcme"></a>

```csharp
public bool|IResolvable TidyAcme { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyCertMetadata`<sup>Required</sup> <a name="TidyCertMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadata"></a>

```csharp
public bool|IResolvable TidyCertMetadata { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyCertStore`<sup>Required</sup> <a name="TidyCertStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStore"></a>

```csharp
public bool|IResolvable TidyCertStore { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyCmpv2NonceStore`<sup>Required</sup> <a name="TidyCmpv2NonceStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStore"></a>

```csharp
public bool|IResolvable TidyCmpv2NonceStore { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyCrossClusterRevokedCerts`<sup>Required</sup> <a name="TidyCrossClusterRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCerts"></a>

```csharp
public bool|IResolvable TidyCrossClusterRevokedCerts { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyExpiredIssuers`<sup>Required</sup> <a name="TidyExpiredIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuers"></a>

```csharp
public bool|IResolvable TidyExpiredIssuers { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyMoveLegacyCaBundle`<sup>Required</sup> <a name="TidyMoveLegacyCaBundle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundle"></a>

```csharp
public bool|IResolvable TidyMoveLegacyCaBundle { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyRevocationQueue`<sup>Required</sup> <a name="TidyRevocationQueue" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueue"></a>

```csharp
public bool|IResolvable TidyRevocationQueue { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyRevokedCertIssuerAssociations`<sup>Required</sup> <a name="TidyRevokedCertIssuerAssociations" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociations"></a>

```csharp
public bool|IResolvable TidyRevokedCertIssuerAssociations { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TidyRevokedCerts`<sup>Required</sup> <a name="TidyRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCerts"></a>

```csharp
public bool|IResolvable TidyRevokedCerts { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigAutoTidyConfig <a name="PkiSecretBackendConfigAutoTidyConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigAutoTidyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Backend,
    bool|IResolvable Enabled,
    string AcmeAccountSafetyBuffer = null,
    string Id = null,
    string IntervalDuration = null,
    string IssuerSafetyBuffer = null,
    bool|IResolvable MaintainStoredCertificateCounts = null,
    string MaxStartupBackoffDuration = null,
    string MinStartupBackoffDuration = null,
    string Namespace = null,
    string PauseDuration = null,
    bool|IResolvable PublishStoredCertificateCountMetrics = null,
    string RevocationQueueSafetyBuffer = null,
    string SafetyBuffer = null,
    bool|IResolvable TidyAcme = null,
    bool|IResolvable TidyCertMetadata = null,
    bool|IResolvable TidyCertStore = null,
    bool|IResolvable TidyCmpv2NonceStore = null,
    bool|IResolvable TidyCrossClusterRevokedCerts = null,
    bool|IResolvable TidyExpiredIssuers = null,
    bool|IResolvable TidyMoveLegacyCaBundle = null,
    bool|IResolvable TidyRevocationQueue = null,
    bool|IResolvable TidyRevokedCertIssuerAssociations = null,
    bool|IResolvable TidyRevokedCerts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.backend">Backend</a></code> | <code>string</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Specifies whether automatic tidy is enabled or not. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.acmeAccountSafetyBuffer">AcmeAccountSafetyBuffer</a></code> | <code>string</code> | The amount of time that must pass after creation that an account with no orders is marked revoked, and the amount of time after being marked revoked or deactivated. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#id PkiSecretBackendConfigAutoTidy#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.intervalDuration">IntervalDuration</a></code> | <code>string</code> | Interval at which to run an auto-tidy operation. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.issuerSafetyBuffer">IssuerSafetyBuffer</a></code> | <code>string</code> | The amount of extra time that must have passed beyond issuer's expiration before it is removed from the backend storage. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maintainStoredCertificateCounts">MaintainStoredCertificateCounts</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | This configures whether stored certificate are counted upon initialization of the backend, and whether during normal operation, a running count of certificates stored is maintained. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maxStartupBackoffDuration">MaxStartupBackoffDuration</a></code> | <code>string</code> | The maximum amount of time auto-tidy will be delayed after startup. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.minStartupBackoffDuration">MinStartupBackoffDuration</a></code> | <code>string</code> | The minimum amount of time auto-tidy will be delayed after startup. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.pauseDuration">PauseDuration</a></code> | <code>string</code> | The amount of time to wait between processing certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.publishStoredCertificateCountMetrics">PublishStoredCertificateCountMetrics</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | This configures whether the stored certificate count is published to the metrics consumer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.revocationQueueSafetyBuffer">RevocationQueueSafetyBuffer</a></code> | <code>string</code> | The amount of time that must pass from the cross-cluster revocation request being initiated to when it will be slated for removal. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.safetyBuffer">SafetyBuffer</a></code> | <code>string</code> | The amount of extra time that must have passed beyond certificate expiration before it is removed from the backend storage and/or revocation list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyAcme">TidyAcme</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set to true to enable tidying ACME accounts, orders and authorizations. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertMetadata">TidyCertMetadata</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set to true to enable tidying up certificate metadata. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertStore">TidyCertStore</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set to true to enable tidying up the certificate store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCmpv2NonceStore">TidyCmpv2NonceStore</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set to true to enable tidying up the CMPv2 nonce store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCrossClusterRevokedCerts">TidyCrossClusterRevokedCerts</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set to true to enable tidying up the cross-cluster revoked certificate store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyExpiredIssuers">TidyExpiredIssuers</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set to true to automatically remove expired issuers past the issuer_safety_buffer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyMoveLegacyCaBundle">TidyMoveLegacyCaBundle</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set to true to move the legacy ca_bundle from /config/ca_bundle to /config/ca_bundle.bak. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevocationQueue">TidyRevocationQueue</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set to true to remove stale revocation queue entries that haven't been confirmed by any active cluster. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCertIssuerAssociations">TidyRevokedCertIssuerAssociations</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set to true to validate issuer associations on revocation entries. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCerts">TidyRevokedCerts</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set to true to remove all invalid and expired certificates from storage. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#backend PkiSecretBackendConfigAutoTidy#backend}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Specifies whether automatic tidy is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#enabled PkiSecretBackendConfigAutoTidy#enabled}

---

##### `AcmeAccountSafetyBuffer`<sup>Optional</sup> <a name="AcmeAccountSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.acmeAccountSafetyBuffer"></a>

```csharp
public string AcmeAccountSafetyBuffer { get; set; }
```

- *Type:* string

The amount of time that must pass after creation that an account with no orders is marked revoked, and the amount of time after being marked revoked or deactivated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#acme_account_safety_buffer PkiSecretBackendConfigAutoTidy#acme_account_safety_buffer}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#id PkiSecretBackendConfigAutoTidy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntervalDuration`<sup>Optional</sup> <a name="IntervalDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.intervalDuration"></a>

```csharp
public string IntervalDuration { get; set; }
```

- *Type:* string

Interval at which to run an auto-tidy operation.

This is the time between tidy invocations (after one finishes to the start of the next).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#interval_duration PkiSecretBackendConfigAutoTidy#interval_duration}

---

##### `IssuerSafetyBuffer`<sup>Optional</sup> <a name="IssuerSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.issuerSafetyBuffer"></a>

```csharp
public string IssuerSafetyBuffer { get; set; }
```

- *Type:* string

The amount of extra time that must have passed beyond issuer's expiration before it is removed from the backend storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#issuer_safety_buffer PkiSecretBackendConfigAutoTidy#issuer_safety_buffer}

---

##### `MaintainStoredCertificateCounts`<sup>Optional</sup> <a name="MaintainStoredCertificateCounts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maintainStoredCertificateCounts"></a>

```csharp
public bool|IResolvable MaintainStoredCertificateCounts { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

This configures whether stored certificate are counted upon initialization of the backend, and whether during normal operation, a running count of certificates stored is maintained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#maintain_stored_certificate_counts PkiSecretBackendConfigAutoTidy#maintain_stored_certificate_counts}

---

##### `MaxStartupBackoffDuration`<sup>Optional</sup> <a name="MaxStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maxStartupBackoffDuration"></a>

```csharp
public string MaxStartupBackoffDuration { get; set; }
```

- *Type:* string

The maximum amount of time auto-tidy will be delayed after startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#max_startup_backoff_duration PkiSecretBackendConfigAutoTidy#max_startup_backoff_duration}

---

##### `MinStartupBackoffDuration`<sup>Optional</sup> <a name="MinStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.minStartupBackoffDuration"></a>

```csharp
public string MinStartupBackoffDuration { get; set; }
```

- *Type:* string

The minimum amount of time auto-tidy will be delayed after startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#min_startup_backoff_duration PkiSecretBackendConfigAutoTidy#min_startup_backoff_duration}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#namespace PkiSecretBackendConfigAutoTidy#namespace}

---

##### `PauseDuration`<sup>Optional</sup> <a name="PauseDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.pauseDuration"></a>

```csharp
public string PauseDuration { get; set; }
```

- *Type:* string

The amount of time to wait between processing certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#pause_duration PkiSecretBackendConfigAutoTidy#pause_duration}

---

##### `PublishStoredCertificateCountMetrics`<sup>Optional</sup> <a name="PublishStoredCertificateCountMetrics" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.publishStoredCertificateCountMetrics"></a>

```csharp
public bool|IResolvable PublishStoredCertificateCountMetrics { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

This configures whether the stored certificate count is published to the metrics consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#publish_stored_certificate_count_metrics PkiSecretBackendConfigAutoTidy#publish_stored_certificate_count_metrics}

---

##### `RevocationQueueSafetyBuffer`<sup>Optional</sup> <a name="RevocationQueueSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.revocationQueueSafetyBuffer"></a>

```csharp
public string RevocationQueueSafetyBuffer { get; set; }
```

- *Type:* string

The amount of time that must pass from the cross-cluster revocation request being initiated to when it will be slated for removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#revocation_queue_safety_buffer PkiSecretBackendConfigAutoTidy#revocation_queue_safety_buffer}

---

##### `SafetyBuffer`<sup>Optional</sup> <a name="SafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.safetyBuffer"></a>

```csharp
public string SafetyBuffer { get; set; }
```

- *Type:* string

The amount of extra time that must have passed beyond certificate expiration before it is removed from the backend storage and/or revocation list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#safety_buffer PkiSecretBackendConfigAutoTidy#safety_buffer}

---

##### `TidyAcme`<sup>Optional</sup> <a name="TidyAcme" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyAcme"></a>

```csharp
public bool|IResolvable TidyAcme { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set to true to enable tidying ACME accounts, orders and authorizations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_acme PkiSecretBackendConfigAutoTidy#tidy_acme}

---

##### `TidyCertMetadata`<sup>Optional</sup> <a name="TidyCertMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertMetadata"></a>

```csharp
public bool|IResolvable TidyCertMetadata { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set to true to enable tidying up certificate metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cert_metadata PkiSecretBackendConfigAutoTidy#tidy_cert_metadata}

---

##### `TidyCertStore`<sup>Optional</sup> <a name="TidyCertStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertStore"></a>

```csharp
public bool|IResolvable TidyCertStore { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set to true to enable tidying up the certificate store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cert_store PkiSecretBackendConfigAutoTidy#tidy_cert_store}

---

##### `TidyCmpv2NonceStore`<sup>Optional</sup> <a name="TidyCmpv2NonceStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCmpv2NonceStore"></a>

```csharp
public bool|IResolvable TidyCmpv2NonceStore { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set to true to enable tidying up the CMPv2 nonce store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cmpv2_nonce_store PkiSecretBackendConfigAutoTidy#tidy_cmpv2_nonce_store}

---

##### `TidyCrossClusterRevokedCerts`<sup>Optional</sup> <a name="TidyCrossClusterRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCrossClusterRevokedCerts"></a>

```csharp
public bool|IResolvable TidyCrossClusterRevokedCerts { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set to true to enable tidying up the cross-cluster revoked certificate store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cross_cluster_revoked_certs PkiSecretBackendConfigAutoTidy#tidy_cross_cluster_revoked_certs}

---

##### `TidyExpiredIssuers`<sup>Optional</sup> <a name="TidyExpiredIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyExpiredIssuers"></a>

```csharp
public bool|IResolvable TidyExpiredIssuers { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set to true to automatically remove expired issuers past the issuer_safety_buffer.

No keys will be removed as part of this operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_expired_issuers PkiSecretBackendConfigAutoTidy#tidy_expired_issuers}

---

##### `TidyMoveLegacyCaBundle`<sup>Optional</sup> <a name="TidyMoveLegacyCaBundle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyMoveLegacyCaBundle"></a>

```csharp
public bool|IResolvable TidyMoveLegacyCaBundle { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set to true to move the legacy ca_bundle from /config/ca_bundle to /config/ca_bundle.bak.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_move_legacy_ca_bundle PkiSecretBackendConfigAutoTidy#tidy_move_legacy_ca_bundle}

---

##### `TidyRevocationQueue`<sup>Optional</sup> <a name="TidyRevocationQueue" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevocationQueue"></a>

```csharp
public bool|IResolvable TidyRevocationQueue { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set to true to remove stale revocation queue entries that haven't been confirmed by any active cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revocation_queue PkiSecretBackendConfigAutoTidy#tidy_revocation_queue}

---

##### `TidyRevokedCertIssuerAssociations`<sup>Optional</sup> <a name="TidyRevokedCertIssuerAssociations" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCertIssuerAssociations"></a>

```csharp
public bool|IResolvable TidyRevokedCertIssuerAssociations { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set to true to validate issuer associations on revocation entries.

This helps increase the performance of CRL building and OCSP responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revoked_cert_issuer_associations PkiSecretBackendConfigAutoTidy#tidy_revoked_cert_issuer_associations}

---

##### `TidyRevokedCerts`<sup>Optional</sup> <a name="TidyRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCerts"></a>

```csharp
public bool|IResolvable TidyRevokedCerts { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set to true to remove all invalid and expired certificates from storage.

A revoked storage entry is considered invalid if the entry is empty, or the value within the entry is empty. If a certificate is removed due to expiry, the entry will also be removed from the CRL, and the CRL will be rotated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revoked_certs PkiSecretBackendConfigAutoTidy#tidy_revoked_certs}

---



