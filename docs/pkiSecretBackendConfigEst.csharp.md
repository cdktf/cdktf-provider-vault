# `pkiSecretBackendConfigEst` Submodule <a name="`pkiSecretBackendConfigEst` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigEst"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigEst <a name="PkiSecretBackendConfigEst" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est vault_pki_secret_backend_config_est}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigEst(Construct Scope, string Id, PkiSecretBackendConfigEstConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig">PkiSecretBackendConfigEstConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig">PkiSecretBackendConfigEstConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.putAuthenticators">PutAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuditFields">ResetAuditFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuthenticators">ResetAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultMount">ResetDefaultMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultPathPolicy">ResetDefaultPathPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnableSentinelParsing">ResetEnableSentinelParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetLabelToPathPolicy">ResetLabelToPathPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthenticators` <a name="PutAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.putAuthenticators"></a>

```csharp
private void PutAuthenticators(PkiSecretBackendConfigEstAuthenticators Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.putAuthenticators.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

---

##### `ResetAuditFields` <a name="ResetAuditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuditFields"></a>

```csharp
private void ResetAuditFields()
```

##### `ResetAuthenticators` <a name="ResetAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuthenticators"></a>

```csharp
private void ResetAuthenticators()
```

##### `ResetDefaultMount` <a name="ResetDefaultMount" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultMount"></a>

```csharp
private void ResetDefaultMount()
```

##### `ResetDefaultPathPolicy` <a name="ResetDefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultPathPolicy"></a>

```csharp
private void ResetDefaultPathPolicy()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEnableSentinelParsing` <a name="ResetEnableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnableSentinelParsing"></a>

```csharp
private void ResetEnableSentinelParsing()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabelToPathPolicy` <a name="ResetLabelToPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetLabelToPathPolicy"></a>

```csharp
private void ResetLabelToPathPolicy()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigEst resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigEst.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigEst.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigEst.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigEst.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PkiSecretBackendConfigEst resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendConfigEst to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendConfigEst that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigEst to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticators">Authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference">PkiSecretBackendConfigEstAuthenticatorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lastUpdated">LastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFieldsInput">AuditFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticatorsInput">AuthenticatorsInput</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMountInput">DefaultMountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicyInput">DefaultPathPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsingInput">EnableSentinelParsingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicyInput">LabelToPathPolicyInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFields">AuditFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMount">DefaultMount</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicy">DefaultPathPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsing">EnableSentinelParsing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicy">LabelToPathPolicy</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Authenticators`<sup>Required</sup> <a name="Authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticators"></a>

```csharp
public PkiSecretBackendConfigEstAuthenticatorsOutputReference Authenticators { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference">PkiSecretBackendConfigEstAuthenticatorsOutputReference</a>

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lastUpdated"></a>

```csharp
public string LastUpdated { get; }
```

- *Type:* string

---

##### `AuditFieldsInput`<sup>Optional</sup> <a name="AuditFieldsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFieldsInput"></a>

```csharp
public string[] AuditFieldsInput { get; }
```

- *Type:* string[]

---

##### `AuthenticatorsInput`<sup>Optional</sup> <a name="AuthenticatorsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticatorsInput"></a>

```csharp
public PkiSecretBackendConfigEstAuthenticators AuthenticatorsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `DefaultMountInput`<sup>Optional</sup> <a name="DefaultMountInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMountInput"></a>

```csharp
public object DefaultMountInput { get; }
```

- *Type:* object

---

##### `DefaultPathPolicyInput`<sup>Optional</sup> <a name="DefaultPathPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicyInput"></a>

```csharp
public string DefaultPathPolicyInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EnableSentinelParsingInput`<sup>Optional</sup> <a name="EnableSentinelParsingInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsingInput"></a>

```csharp
public object EnableSentinelParsingInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelToPathPolicyInput`<sup>Optional</sup> <a name="LabelToPathPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicyInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelToPathPolicyInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `AuditFields`<sup>Required</sup> <a name="AuditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFields"></a>

```csharp
public string[] AuditFields { get; }
```

- *Type:* string[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `DefaultMount`<sup>Required</sup> <a name="DefaultMount" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMount"></a>

```csharp
public object DefaultMount { get; }
```

- *Type:* object

---

##### `DefaultPathPolicy`<sup>Required</sup> <a name="DefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicy"></a>

```csharp
public string DefaultPathPolicy { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `EnableSentinelParsing`<sup>Required</sup> <a name="EnableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsing"></a>

```csharp
public object EnableSentinelParsing { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LabelToPathPolicy`<sup>Required</sup> <a name="LabelToPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicy"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelToPathPolicy { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigEstAuthenticators <a name="PkiSecretBackendConfigEstAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigEstAuthenticators {
    System.Collections.Generic.IDictionary<string, string> Cert = null,
    System.Collections.Generic.IDictionary<string, string> Userpass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.cert">Cert</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#cert PkiSecretBackendConfigEst#cert}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.userpass">Userpass</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#userpass PkiSecretBackendConfigEst#userpass}. |

---

##### `Cert`<sup>Optional</sup> <a name="Cert" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.cert"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Cert { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#cert PkiSecretBackendConfigEst#cert}.

---

##### `Userpass`<sup>Optional</sup> <a name="Userpass" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.userpass"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Userpass { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#userpass PkiSecretBackendConfigEst#userpass}.

---

### PkiSecretBackendConfigEstConfig <a name="PkiSecretBackendConfigEstConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigEstConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string[] AuditFields = null,
    PkiSecretBackendConfigEstAuthenticators Authenticators = null,
    object DefaultMount = null,
    string DefaultPathPolicy = null,
    object Enabled = null,
    object EnableSentinelParsing = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> LabelToPathPolicy = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.backend">Backend</a></code> | <code>string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.auditFields">AuditFields</a></code> | <code>string[]</code> | Fields parsed from the CSR that appear in the audit and can be used by sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.authenticators">Authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultMount">DefaultMount</a></code> | <code>object</code> | If set, this mount will register the default `.well-known/est` URL path. Only a single mount can enable this across a Vault cluster. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultPathPolicy">DefaultPathPolicy</a></code> | <code>string</code> | Required to be set if default_mount is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enabled">Enabled</a></code> | <code>object</code> | Specifies whether EST is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enableSentinelParsing">EnableSentinelParsing</a></code> | <code>object</code> | If set, parse out fields from the provided CSR making them available for Sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#id PkiSecretBackendConfigEst#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.labelToPathPolicy">LabelToPathPolicy</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Configures a pairing of an EST label with the redirected behavior for requests hitting that role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#backend PkiSecretBackendConfigEst#backend}

---

##### `AuditFields`<sup>Optional</sup> <a name="AuditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.auditFields"></a>

```csharp
public string[] AuditFields { get; set; }
```

- *Type:* string[]

Fields parsed from the CSR that appear in the audit and can be used by sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#audit_fields PkiSecretBackendConfigEst#audit_fields}

---

##### `Authenticators`<sup>Optional</sup> <a name="Authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.authenticators"></a>

```csharp
public PkiSecretBackendConfigEstAuthenticators Authenticators { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#authenticators PkiSecretBackendConfigEst#authenticators}

---

##### `DefaultMount`<sup>Optional</sup> <a name="DefaultMount" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultMount"></a>

```csharp
public object DefaultMount { get; set; }
```

- *Type:* object

If set, this mount will register the default `.well-known/est` URL path. Only a single mount can enable this across a Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#default_mount PkiSecretBackendConfigEst#default_mount}

---

##### `DefaultPathPolicy`<sup>Optional</sup> <a name="DefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultPathPolicy"></a>

```csharp
public string DefaultPathPolicy { get; set; }
```

- *Type:* string

Required to be set if default_mount is enabled.

Specifies the behavior for requests using the default EST label. Can be sign-verbatim or a role given by role:<role_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#default_path_policy PkiSecretBackendConfigEst#default_path_policy}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Specifies whether EST is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#enabled PkiSecretBackendConfigEst#enabled}

---

##### `EnableSentinelParsing`<sup>Optional</sup> <a name="EnableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enableSentinelParsing"></a>

```csharp
public object EnableSentinelParsing { get; set; }
```

- *Type:* object

If set, parse out fields from the provided CSR making them available for Sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#enable_sentinel_parsing PkiSecretBackendConfigEst#enable_sentinel_parsing}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#id PkiSecretBackendConfigEst#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LabelToPathPolicy`<sup>Optional</sup> <a name="LabelToPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.labelToPathPolicy"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelToPathPolicy { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Configures a pairing of an EST label with the redirected behavior for requests hitting that role.

The path policy can be sign-verbatim or a role given by role:<role_name>. Labels must be unique across Vault cluster, and will register .well-known/est/<label> URL paths

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#label_to_path_policy PkiSecretBackendConfigEst#label_to_path_policy}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#namespace PkiSecretBackendConfigEst#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendConfigEstAuthenticatorsOutputReference <a name="PkiSecretBackendConfigEstAuthenticatorsOutputReference" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigEstAuthenticatorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetCert">ResetCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetUserpass">ResetUserpass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCert` <a name="ResetCert" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetCert"></a>

```csharp
private void ResetCert()
```

##### `ResetUserpass` <a name="ResetUserpass" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetUserpass"></a>

```csharp
private void ResetUserpass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.certInput">CertInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpassInput">UserpassInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.cert">Cert</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpass">Userpass</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.certInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CertInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserpassInput`<sup>Optional</sup> <a name="UserpassInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpassInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserpassInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.cert"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Cert { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Userpass`<sup>Required</sup> <a name="Userpass" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpass"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Userpass { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.internalValue"></a>

```csharp
public PkiSecretBackendConfigEstAuthenticators InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

---



