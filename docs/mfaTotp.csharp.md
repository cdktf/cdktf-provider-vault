# `mfaTotp` Submodule <a name="`mfaTotp` Submodule" id="@cdktf/provider-vault.mfaTotp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaTotp <a name="MfaTotp" id="@cdktf/provider-vault.mfaTotp.MfaTotp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mfa_totp vault_mfa_totp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new MfaTotp(Construct Scope, string Id, MfaTotpConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig">MfaTotpConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig">MfaTotpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetDigits">ResetDigits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetKeySize">ResetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetQrSize">ResetQrSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetSkew">ResetSkew</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.mfaTotp.MfaTotp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.mfaTotp.MfaTotp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.mfaTotp.MfaTotp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.mfaTotp.MfaTotp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.mfaTotp.MfaTotp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.mfaTotp.MfaTotp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.mfaTotp.MfaTotp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.mfaTotp.MfaTotp.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.mfaTotp.MfaTotp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.mfaTotp.MfaTotp.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.mfaTotp.MfaTotp.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.mfaTotp.MfaTotp.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.mfaTotp.MfaTotp.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.mfaTotp.MfaTotp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.mfaTotp.MfaTotp.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetDigits` <a name="ResetDigits" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetDigits"></a>

```csharp
private void ResetDigits()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeySize` <a name="ResetKeySize" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetKeySize"></a>

```csharp
private void ResetKeySize()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetQrSize` <a name="ResetQrSize" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetQrSize"></a>

```csharp
private void ResetQrSize()
```

##### `ResetSkew` <a name="ResetSkew" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetSkew"></a>

```csharp
private void ResetSkew()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MfaTotp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

MfaTotp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

MfaTotp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

MfaTotp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.mfaTotp.MfaTotp.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

MfaTotp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MfaTotp resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MfaTotp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MfaTotp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mfa_totp#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MfaTotp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.digitsInput">DigitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.keySizeInput">KeySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.qrSizeInput">QrSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.skewInput">SkewInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.digits">Digits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.keySize">KeySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.qrSize">QrSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.skew">Skew</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `DigitsInput`<sup>Optional</sup> <a name="DigitsInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.digitsInput"></a>

```csharp
public double DigitsInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.keySizeInput"></a>

```csharp
public double KeySizeInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `QrSizeInput`<sup>Optional</sup> <a name="QrSizeInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.qrSizeInput"></a>

```csharp
public double QrSizeInput { get; }
```

- *Type:* double

---

##### `SkewInput`<sup>Optional</sup> <a name="SkewInput" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.skewInput"></a>

```csharp
public double SkewInput { get; }
```

- *Type:* double

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `Digits`<sup>Required</sup> <a name="Digits" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.digits"></a>

```csharp
public double Digits { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.keySize"></a>

```csharp
public double KeySize { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `QrSize`<sup>Required</sup> <a name="QrSize" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.qrSize"></a>

```csharp
public double QrSize { get; }
```

- *Type:* double

---

##### `Skew`<sup>Required</sup> <a name="Skew" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.skew"></a>

```csharp
public double Skew { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MfaTotpConfig <a name="MfaTotpConfig" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new MfaTotpConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Issuer,
    string Name,
    string Algorithm = null,
    double Digits = null,
    string Id = null,
    double KeySize = null,
    string Namespace = null,
    double Period = null,
    double QrSize = null,
    double Skew = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.issuer">Issuer</a></code> | <code>string</code> | The name of the key's issuing organization. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.name">Name</a></code> | <code>string</code> | Name of the MFA method. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.algorithm">Algorithm</a></code> | <code>string</code> | Specifies the hashing algorithm used to generate the TOTP code. Options include 'SHA1', 'SHA256' and 'SHA512'. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.digits">Digits</a></code> | <code>double</code> | The number of digits in the generated TOTP token. This value can either be 6 or 8. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.id">Id</a></code> | <code>string</code> | ID computed by Vault. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.keySize">KeySize</a></code> | <code>double</code> | Specifies the size in bytes of the generated key. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.period">Period</a></code> | <code>double</code> | The length of time used to generate a counter for the TOTP token calculation. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.qrSize">QrSize</a></code> | <code>double</code> | The pixel size of the generated square QR code. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.skew">Skew</a></code> | <code>double</code> | The number of delay periods that are allowed when validating a TOTP token. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

The name of the key's issuing organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mfa_totp#issuer MfaTotp#issuer}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the MFA method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mfa_totp#name MfaTotp#name}

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Specifies the hashing algorithm used to generate the TOTP code. Options include 'SHA1', 'SHA256' and 'SHA512'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mfa_totp#algorithm MfaTotp#algorithm}

---

##### `Digits`<sup>Optional</sup> <a name="Digits" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.digits"></a>

```csharp
public double Digits { get; set; }
```

- *Type:* double

The number of digits in the generated TOTP token. This value can either be 6 or 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mfa_totp#digits MfaTotp#digits}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

ID computed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mfa_totp#id MfaTotp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.keySize"></a>

```csharp
public double KeySize { get; set; }
```

- *Type:* double

Specifies the size in bytes of the generated key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mfa_totp#key_size MfaTotp#key_size}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mfa_totp#namespace MfaTotp#namespace}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

The length of time used to generate a counter for the TOTP token calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mfa_totp#period MfaTotp#period}

---

##### `QrSize`<sup>Optional</sup> <a name="QrSize" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.qrSize"></a>

```csharp
public double QrSize { get; set; }
```

- *Type:* double

The pixel size of the generated square QR code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mfa_totp#qr_size MfaTotp#qr_size}

---

##### `Skew`<sup>Optional</sup> <a name="Skew" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.skew"></a>

```csharp
public double Skew { get; set; }
```

- *Type:* double

The number of delay periods that are allowed when validating a TOTP token.

This value can either be 0 or 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/mfa_totp#skew MfaTotp#skew}

---



