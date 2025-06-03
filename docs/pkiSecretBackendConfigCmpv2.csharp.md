# `pkiSecretBackendConfigCmpv2` Submodule <a name="`pkiSecretBackendConfigCmpv2` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigCmpv2 <a name="PkiSecretBackendConfigCmpv2" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_cmpv2 vault_pki_secret_backend_config_cmpv2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigCmpv2(Construct Scope, string Id, PkiSecretBackendConfigCmpv2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config">PkiSecretBackendConfigCmpv2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config">PkiSecretBackendConfigCmpv2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.putAuthenticators">PutAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuditFields">ResetAuditFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuthenticators">ResetAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDefaultPathPolicy">ResetDefaultPathPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDisabledValidations">ResetDisabledValidations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnableSentinelParsing">ResetEnableSentinelParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthenticators` <a name="PutAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.putAuthenticators"></a>

```csharp
private void PutAuthenticators(PkiSecretBackendConfigCmpv2Authenticators Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.putAuthenticators.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

---

##### `ResetAuditFields` <a name="ResetAuditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuditFields"></a>

```csharp
private void ResetAuditFields()
```

##### `ResetAuthenticators` <a name="ResetAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuthenticators"></a>

```csharp
private void ResetAuthenticators()
```

##### `ResetDefaultPathPolicy` <a name="ResetDefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDefaultPathPolicy"></a>

```csharp
private void ResetDefaultPathPolicy()
```

##### `ResetDisabledValidations` <a name="ResetDisabledValidations" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDisabledValidations"></a>

```csharp
private void ResetDisabledValidations()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEnableSentinelParsing` <a name="ResetEnableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnableSentinelParsing"></a>

```csharp
private void ResetEnableSentinelParsing()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigCmpv2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigCmpv2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigCmpv2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigCmpv2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigCmpv2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PkiSecretBackendConfigCmpv2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendConfigCmpv2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendConfigCmpv2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_cmpv2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigCmpv2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticators">Authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference">PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lastUpdated">LastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFieldsInput">AuditFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticatorsInput">AuthenticatorsInput</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicyInput">DefaultPathPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidationsInput">DisabledValidationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsingInput">EnableSentinelParsingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFields">AuditFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicy">DefaultPathPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidations">DisabledValidations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsing">EnableSentinelParsing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Authenticators`<sup>Required</sup> <a name="Authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticators"></a>

```csharp
public PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference Authenticators { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference">PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference</a>

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lastUpdated"></a>

```csharp
public string LastUpdated { get; }
```

- *Type:* string

---

##### `AuditFieldsInput`<sup>Optional</sup> <a name="AuditFieldsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFieldsInput"></a>

```csharp
public string[] AuditFieldsInput { get; }
```

- *Type:* string[]

---

##### `AuthenticatorsInput`<sup>Optional</sup> <a name="AuthenticatorsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticatorsInput"></a>

```csharp
public PkiSecretBackendConfigCmpv2Authenticators AuthenticatorsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `DefaultPathPolicyInput`<sup>Optional</sup> <a name="DefaultPathPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicyInput"></a>

```csharp
public string DefaultPathPolicyInput { get; }
```

- *Type:* string

---

##### `DisabledValidationsInput`<sup>Optional</sup> <a name="DisabledValidationsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidationsInput"></a>

```csharp
public string[] DisabledValidationsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EnableSentinelParsingInput`<sup>Optional</sup> <a name="EnableSentinelParsingInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsingInput"></a>

```csharp
public object EnableSentinelParsingInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `AuditFields`<sup>Required</sup> <a name="AuditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFields"></a>

```csharp
public string[] AuditFields { get; }
```

- *Type:* string[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `DefaultPathPolicy`<sup>Required</sup> <a name="DefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicy"></a>

```csharp
public string DefaultPathPolicy { get; }
```

- *Type:* string

---

##### `DisabledValidations`<sup>Required</sup> <a name="DisabledValidations" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidations"></a>

```csharp
public string[] DisabledValidations { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `EnableSentinelParsing`<sup>Required</sup> <a name="EnableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsing"></a>

```csharp
public object EnableSentinelParsing { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigCmpv2Authenticators <a name="PkiSecretBackendConfigCmpv2Authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigCmpv2Authenticators {
    System.Collections.Generic.IDictionary<string, string> Cert = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators.property.cert">Cert</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_cmpv2#cert PkiSecretBackendConfigCmpv2#cert}. |

---

##### `Cert`<sup>Optional</sup> <a name="Cert" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators.property.cert"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Cert { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_cmpv2#cert PkiSecretBackendConfigCmpv2#cert}.

---

### PkiSecretBackendConfigCmpv2Config <a name="PkiSecretBackendConfigCmpv2Config" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigCmpv2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string[] AuditFields = null,
    PkiSecretBackendConfigCmpv2Authenticators Authenticators = null,
    string DefaultPathPolicy = null,
    string[] DisabledValidations = null,
    object Enabled = null,
    object EnableSentinelParsing = null,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.backend">Backend</a></code> | <code>string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.auditFields">AuditFields</a></code> | <code>string[]</code> | Fields parsed from the CSR that appear in the audit and can be used by sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.authenticators">Authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.defaultPathPolicy">DefaultPathPolicy</a></code> | <code>string</code> | Can be sign-verbatim or a role given by role:<role_name>. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.disabledValidations">DisabledValidations</a></code> | <code>string[]</code> | A comma-separated list of validations not to perform on CMPv2 messages. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enabled">Enabled</a></code> | <code>object</code> | Specifies whether CMPv2 is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enableSentinelParsing">EnableSentinelParsing</a></code> | <code>object</code> | If set, parse out fields from the provided CSR making them available for Sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_cmpv2#id PkiSecretBackendConfigCmpv2#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_cmpv2#backend PkiSecretBackendConfigCmpv2#backend}

---

##### `AuditFields`<sup>Optional</sup> <a name="AuditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.auditFields"></a>

```csharp
public string[] AuditFields { get; set; }
```

- *Type:* string[]

Fields parsed from the CSR that appear in the audit and can be used by sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_cmpv2#audit_fields PkiSecretBackendConfigCmpv2#audit_fields}

---

##### `Authenticators`<sup>Optional</sup> <a name="Authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.authenticators"></a>

```csharp
public PkiSecretBackendConfigCmpv2Authenticators Authenticators { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_cmpv2#authenticators PkiSecretBackendConfigCmpv2#authenticators}

---

##### `DefaultPathPolicy`<sup>Optional</sup> <a name="DefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.defaultPathPolicy"></a>

```csharp
public string DefaultPathPolicy { get; set; }
```

- *Type:* string

Can be sign-verbatim or a role given by role:<role_name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_cmpv2#default_path_policy PkiSecretBackendConfigCmpv2#default_path_policy}

---

##### `DisabledValidations`<sup>Optional</sup> <a name="DisabledValidations" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.disabledValidations"></a>

```csharp
public string[] DisabledValidations { get; set; }
```

- *Type:* string[]

A comma-separated list of validations not to perform on CMPv2 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_cmpv2#disabled_validations PkiSecretBackendConfigCmpv2#disabled_validations}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Specifies whether CMPv2 is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_cmpv2#enabled PkiSecretBackendConfigCmpv2#enabled}

---

##### `EnableSentinelParsing`<sup>Optional</sup> <a name="EnableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enableSentinelParsing"></a>

```csharp
public object EnableSentinelParsing { get; set; }
```

- *Type:* object

If set, parse out fields from the provided CSR making them available for Sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_cmpv2#enable_sentinel_parsing PkiSecretBackendConfigCmpv2#enable_sentinel_parsing}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_cmpv2#id PkiSecretBackendConfigCmpv2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_cmpv2#namespace PkiSecretBackendConfigCmpv2#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference <a name="PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resetCert">ResetCert</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCert` <a name="ResetCert" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resetCert"></a>

```csharp
private void ResetCert()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.certInput">CertInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.cert">Cert</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.certInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CertInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.cert"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Cert { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.internalValue"></a>

```csharp
public PkiSecretBackendConfigCmpv2Authenticators InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

---



