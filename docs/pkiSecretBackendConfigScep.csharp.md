# `pkiSecretBackendConfigScep` Submodule <a name="`pkiSecretBackendConfigScep` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigScep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigScep <a name="PkiSecretBackendConfigScep" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep vault_pki_secret_backend_config_scep}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigScep(Construct Scope, string Id, PkiSecretBackendConfigScepConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig">PkiSecretBackendConfigScepConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig">PkiSecretBackendConfigScepConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putAuthenticators">PutAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putExternalValidation">PutExternalValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAllowedDigestAlgorithms">ResetAllowedDigestAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAllowedEncryptionAlgorithms">ResetAllowedEncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAuthenticators">ResetAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetDefaultPathPolicy">ResetDefaultPathPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetExternalValidation">ResetExternalValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetRestrictCaChainToIssuer">ResetRestrictCaChainToIssuer</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthenticators` <a name="PutAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putAuthenticators"></a>

```csharp
private void PutAuthenticators(PkiSecretBackendConfigScepAuthenticators Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putAuthenticators.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a>

---

##### `PutExternalValidation` <a name="PutExternalValidation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putExternalValidation"></a>

```csharp
private void PutExternalValidation(IResolvable|PkiSecretBackendConfigScepExternalValidation[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putExternalValidation.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>[]

---

##### `ResetAllowedDigestAlgorithms` <a name="ResetAllowedDigestAlgorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAllowedDigestAlgorithms"></a>

```csharp
private void ResetAllowedDigestAlgorithms()
```

##### `ResetAllowedEncryptionAlgorithms` <a name="ResetAllowedEncryptionAlgorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAllowedEncryptionAlgorithms"></a>

```csharp
private void ResetAllowedEncryptionAlgorithms()
```

##### `ResetAuthenticators` <a name="ResetAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAuthenticators"></a>

```csharp
private void ResetAuthenticators()
```

##### `ResetDefaultPathPolicy` <a name="ResetDefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetDefaultPathPolicy"></a>

```csharp
private void ResetDefaultPathPolicy()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetExternalValidation` <a name="ResetExternalValidation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetExternalValidation"></a>

```csharp
private void ResetExternalValidation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRestrictCaChainToIssuer` <a name="ResetRestrictCaChainToIssuer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetRestrictCaChainToIssuer"></a>

```csharp
private void ResetRestrictCaChainToIssuer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigScep resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigScep.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigScep.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigScep.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigScep.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PkiSecretBackendConfigScep resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendConfigScep to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendConfigScep that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigScep to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.authenticators">Authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference">PkiSecretBackendConfigScepAuthenticatorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.externalValidation">ExternalValidation</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList">PkiSecretBackendConfigScepExternalValidationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.lastUpdated">LastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedDigestAlgorithmsInput">AllowedDigestAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedEncryptionAlgorithmsInput">AllowedEncryptionAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.authenticatorsInput">AuthenticatorsInput</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.defaultPathPolicyInput">DefaultPathPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.externalValidationInput">ExternalValidationInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.restrictCaChainToIssuerInput">RestrictCaChainToIssuerInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedDigestAlgorithms">AllowedDigestAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedEncryptionAlgorithms">AllowedEncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.defaultPathPolicy">DefaultPathPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.restrictCaChainToIssuer">RestrictCaChainToIssuer</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Authenticators`<sup>Required</sup> <a name="Authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.authenticators"></a>

```csharp
public PkiSecretBackendConfigScepAuthenticatorsOutputReference Authenticators { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference">PkiSecretBackendConfigScepAuthenticatorsOutputReference</a>

---

##### `ExternalValidation`<sup>Required</sup> <a name="ExternalValidation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.externalValidation"></a>

```csharp
public PkiSecretBackendConfigScepExternalValidationList ExternalValidation { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList">PkiSecretBackendConfigScepExternalValidationList</a>

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.lastUpdated"></a>

```csharp
public string LastUpdated { get; }
```

- *Type:* string

---

##### `AllowedDigestAlgorithmsInput`<sup>Optional</sup> <a name="AllowedDigestAlgorithmsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedDigestAlgorithmsInput"></a>

```csharp
public string[] AllowedDigestAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `AllowedEncryptionAlgorithmsInput`<sup>Optional</sup> <a name="AllowedEncryptionAlgorithmsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedEncryptionAlgorithmsInput"></a>

```csharp
public string[] AllowedEncryptionAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `AuthenticatorsInput`<sup>Optional</sup> <a name="AuthenticatorsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.authenticatorsInput"></a>

```csharp
public PkiSecretBackendConfigScepAuthenticators AuthenticatorsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a>

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `DefaultPathPolicyInput`<sup>Optional</sup> <a name="DefaultPathPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.defaultPathPolicyInput"></a>

```csharp
public string DefaultPathPolicyInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ExternalValidationInput`<sup>Optional</sup> <a name="ExternalValidationInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.externalValidationInput"></a>

```csharp
public IResolvable|PkiSecretBackendConfigScepExternalValidation[] ExternalValidationInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RestrictCaChainToIssuerInput`<sup>Optional</sup> <a name="RestrictCaChainToIssuerInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.restrictCaChainToIssuerInput"></a>

```csharp
public bool|IResolvable RestrictCaChainToIssuerInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AllowedDigestAlgorithms`<sup>Required</sup> <a name="AllowedDigestAlgorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedDigestAlgorithms"></a>

```csharp
public string[] AllowedDigestAlgorithms { get; }
```

- *Type:* string[]

---

##### `AllowedEncryptionAlgorithms`<sup>Required</sup> <a name="AllowedEncryptionAlgorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedEncryptionAlgorithms"></a>

```csharp
public string[] AllowedEncryptionAlgorithms { get; }
```

- *Type:* string[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `DefaultPathPolicy`<sup>Required</sup> <a name="DefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.defaultPathPolicy"></a>

```csharp
public string DefaultPathPolicy { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RestrictCaChainToIssuer`<sup>Required</sup> <a name="RestrictCaChainToIssuer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.restrictCaChainToIssuer"></a>

```csharp
public bool|IResolvable RestrictCaChainToIssuer { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigScepAuthenticators <a name="PkiSecretBackendConfigScepAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigScepAuthenticators {
    System.Collections.Generic.IDictionary<string, string> Cert = null,
    System.Collections.Generic.IDictionary<string, string> Scep = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators.property.cert">Cert</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The accessor and cert_role properties for cert auth backends. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators.property.scep">Scep</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The accessor property for SCEP auth backends. |

---

##### `Cert`<sup>Optional</sup> <a name="Cert" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators.property.cert"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Cert { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The accessor and cert_role properties for cert auth backends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#cert PkiSecretBackendConfigScep#cert}

---

##### `Scep`<sup>Optional</sup> <a name="Scep" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators.property.scep"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Scep { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The accessor property for SCEP auth backends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#scep PkiSecretBackendConfigScep#scep}

---

### PkiSecretBackendConfigScepConfig <a name="PkiSecretBackendConfigScepConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigScepConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Backend,
    string[] AllowedDigestAlgorithms = null,
    string[] AllowedEncryptionAlgorithms = null,
    PkiSecretBackendConfigScepAuthenticators Authenticators = null,
    string DefaultPathPolicy = null,
    bool|IResolvable Enabled = null,
    IResolvable|PkiSecretBackendConfigScepExternalValidation[] ExternalValidation = null,
    string Id = null,
    string LogLevel = null,
    string Namespace = null,
    bool|IResolvable RestrictCaChainToIssuer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.backend">Backend</a></code> | <code>string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.allowedDigestAlgorithms">AllowedDigestAlgorithms</a></code> | <code>string[]</code> | List of allowed digest algorithms for SCEP requests. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.allowedEncryptionAlgorithms">AllowedEncryptionAlgorithms</a></code> | <code>string[]</code> | List of allowed encryption algorithms for SCEP requests. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.authenticators">Authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.defaultPathPolicy">DefaultPathPolicy</a></code> | <code>string</code> | Specifies the behavior for requests using the default SCEP label. Can be sign-verbatim or a role given by role:<role_name>. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Specifies whether SCEP is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.externalValidation">ExternalValidation</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>[]</code> | external_validation block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#id PkiSecretBackendConfigScep#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.logLevel">LogLevel</a></code> | <code>string</code> | The level of logging verbosity, affects only SCEP logs on this mount. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.restrictCaChainToIssuer">RestrictCaChainToIssuer</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If true, only return the issuer CA, otherwise the entire CA certificate chain will be returned if available from the PKI mount. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#backend PkiSecretBackendConfigScep#backend}

---

##### `AllowedDigestAlgorithms`<sup>Optional</sup> <a name="AllowedDigestAlgorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.allowedDigestAlgorithms"></a>

```csharp
public string[] AllowedDigestAlgorithms { get; set; }
```

- *Type:* string[]

List of allowed digest algorithms for SCEP requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#allowed_digest_algorithms PkiSecretBackendConfigScep#allowed_digest_algorithms}

---

##### `AllowedEncryptionAlgorithms`<sup>Optional</sup> <a name="AllowedEncryptionAlgorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.allowedEncryptionAlgorithms"></a>

```csharp
public string[] AllowedEncryptionAlgorithms { get; set; }
```

- *Type:* string[]

List of allowed encryption algorithms for SCEP requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#allowed_encryption_algorithms PkiSecretBackendConfigScep#allowed_encryption_algorithms}

---

##### `Authenticators`<sup>Optional</sup> <a name="Authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.authenticators"></a>

```csharp
public PkiSecretBackendConfigScepAuthenticators Authenticators { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#authenticators PkiSecretBackendConfigScep#authenticators}

---

##### `DefaultPathPolicy`<sup>Optional</sup> <a name="DefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.defaultPathPolicy"></a>

```csharp
public string DefaultPathPolicy { get; set; }
```

- *Type:* string

Specifies the behavior for requests using the default SCEP label. Can be sign-verbatim or a role given by role:<role_name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#default_path_policy PkiSecretBackendConfigScep#default_path_policy}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Specifies whether SCEP is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#enabled PkiSecretBackendConfigScep#enabled}

---

##### `ExternalValidation`<sup>Optional</sup> <a name="ExternalValidation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.externalValidation"></a>

```csharp
public IResolvable|PkiSecretBackendConfigScepExternalValidation[] ExternalValidation { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>[]

external_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#external_validation PkiSecretBackendConfigScep#external_validation}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#id PkiSecretBackendConfigScep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

The level of logging verbosity, affects only SCEP logs on this mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#log_level PkiSecretBackendConfigScep#log_level}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#namespace PkiSecretBackendConfigScep#namespace}

---

##### `RestrictCaChainToIssuer`<sup>Optional</sup> <a name="RestrictCaChainToIssuer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.restrictCaChainToIssuer"></a>

```csharp
public bool|IResolvable RestrictCaChainToIssuer { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If true, only return the issuer CA, otherwise the entire CA certificate chain will be returned if available from the PKI mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#restrict_ca_chain_to_issuer PkiSecretBackendConfigScep#restrict_ca_chain_to_issuer}

---

### PkiSecretBackendConfigScepExternalValidation <a name="PkiSecretBackendConfigScepExternalValidation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigScepExternalValidation {
    System.Collections.Generic.IDictionary<string, string> Intune = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation.property.intune">Intune</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The credentials to enable Microsoft Intune validation of SCEP requests. |

---

##### `Intune`<sup>Optional</sup> <a name="Intune" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation.property.intune"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Intune { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The credentials to enable Microsoft Intune validation of SCEP requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_scep#intune PkiSecretBackendConfigScep#intune}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendConfigScepAuthenticatorsOutputReference <a name="PkiSecretBackendConfigScepAuthenticatorsOutputReference" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigScepAuthenticatorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resetCert">ResetCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resetScep">ResetScep</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCert` <a name="ResetCert" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resetCert"></a>

```csharp
private void ResetCert()
```

##### `ResetScep` <a name="ResetScep" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resetScep"></a>

```csharp
private void ResetScep()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.certInput">CertInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scepInput">ScepInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.cert">Cert</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scep">Scep</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.certInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CertInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ScepInput`<sup>Optional</sup> <a name="ScepInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scepInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScepInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.cert"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Cert { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Scep`<sup>Required</sup> <a name="Scep" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scep"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Scep { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.internalValue"></a>

```csharp
public PkiSecretBackendConfigScepAuthenticators InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a>

---


### PkiSecretBackendConfigScepExternalValidationList <a name="PkiSecretBackendConfigScepExternalValidationList" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigScepExternalValidationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.get"></a>

```csharp
private PkiSecretBackendConfigScepExternalValidationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.internalValue"></a>

```csharp
public IResolvable|PkiSecretBackendConfigScepExternalValidation[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>[]

---


### PkiSecretBackendConfigScepExternalValidationOutputReference <a name="PkiSecretBackendConfigScepExternalValidationOutputReference" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigScepExternalValidationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.resetIntune">ResetIntune</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntune` <a name="ResetIntune" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.resetIntune"></a>

```csharp
private void ResetIntune()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.intuneInput">IntuneInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.intune">Intune</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntuneInput`<sup>Optional</sup> <a name="IntuneInput" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.intuneInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IntuneInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Intune`<sup>Required</sup> <a name="Intune" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.intune"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Intune { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PkiSecretBackendConfigScepExternalValidation InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>

---



