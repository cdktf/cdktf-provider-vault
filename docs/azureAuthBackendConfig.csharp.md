# `azureAuthBackendConfig` Submodule <a name="`azureAuthBackendConfig` Submodule" id="@cdktf/provider-vault.azureAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureAuthBackendConfig <a name="AzureAuthBackendConfig" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config vault_azure_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AzureAuthBackendConfig(Construct Scope, string Id, AzureAuthBackendConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig">AzureAuthBackendConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig">AzureAuthBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetDisableAutomatedRotation">ResetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetIdentityTokenAudience">ResetIdentityTokenAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetIdentityTokenTtl">ResetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetDisableAutomatedRotation` <a name="ResetDisableAutomatedRotation" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetDisableAutomatedRotation"></a>

```csharp
private void ResetDisableAutomatedRotation()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityTokenAudience` <a name="ResetIdentityTokenAudience" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetIdentityTokenAudience"></a>

```csharp
private void ResetIdentityTokenAudience()
```

##### `ResetIdentityTokenTtl` <a name="ResetIdentityTokenTtl" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetIdentityTokenTtl"></a>

```csharp
private void ResetIdentityTokenTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetRotationSchedule"></a>

```csharp
private void ResetRotationSchedule()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetRotationWindow"></a>

```csharp
private void ResetRotationWindow()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AzureAuthBackendConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AzureAuthBackendConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AzureAuthBackendConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AzureAuthBackendConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AzureAuthBackendConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AzureAuthBackendConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AzureAuthBackendConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AzureAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AzureAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.disableAutomatedRotationInput">DisableAutomatedRotationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenAudienceInput">IdentityTokenAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenTtlInput">IdentityTokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationWindowInput">RotationWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenAudience">IdentityTokenAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DisableAutomatedRotationInput`<sup>Optional</sup> <a name="DisableAutomatedRotationInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.disableAutomatedRotationInput"></a>

```csharp
public object DisableAutomatedRotationInput { get; }
```

- *Type:* object

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdentityTokenAudienceInput`<sup>Optional</sup> <a name="IdentityTokenAudienceInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenAudienceInput"></a>

```csharp
public string IdentityTokenAudienceInput { get; }
```

- *Type:* string

---

##### `IdentityTokenTtlInput`<sup>Optional</sup> <a name="IdentityTokenTtlInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenTtlInput"></a>

```csharp
public double IdentityTokenTtlInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationPeriodInput"></a>

```csharp
public double RotationPeriodInput { get; }
```

- *Type:* double

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationScheduleInput"></a>

```csharp
public string RotationScheduleInput { get; }
```

- *Type:* string

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationWindowInput"></a>

```csharp
public double RotationWindowInput { get; }
```

- *Type:* double

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `DisableAutomatedRotation`<sup>Required</sup> <a name="DisableAutomatedRotation" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.disableAutomatedRotation"></a>

```csharp
public object DisableAutomatedRotation { get; }
```

- *Type:* object

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityTokenAudience`<sup>Required</sup> <a name="IdentityTokenAudience" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenAudience"></a>

```csharp
public string IdentityTokenAudience { get; }
```

- *Type:* string

---

##### `IdentityTokenTtl`<sup>Required</sup> <a name="IdentityTokenTtl" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenTtl"></a>

```csharp
public double IdentityTokenTtl { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; }
```

- *Type:* double

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; }
```

- *Type:* string

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; }
```

- *Type:* double

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureAuthBackendConfigConfig <a name="AzureAuthBackendConfigConfig" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AzureAuthBackendConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Resource,
    string TenantId,
    string Backend = null,
    string ClientId = null,
    string ClientSecret = null,
    object DisableAutomatedRotation = null,
    string Environment = null,
    string Id = null,
    string IdentityTokenAudience = null,
    double IdentityTokenTtl = null,
    string Namespace = null,
    double RotationPeriod = null,
    string RotationSchedule = null,
    double RotationWindow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.resource">Resource</a></code> | <code>string</code> | The configured URL for the application registered in Azure Active Directory. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.tenantId">TenantId</a></code> | <code>string</code> | The tenant id for the Azure Active Directory organization. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.backend">Backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The client secret for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>object</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.environment">Environment</a></code> | <code>string</code> | The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#id AzureAuthBackendConfig#id}. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.identityTokenAudience">IdentityTokenAudience</a></code> | <code>string</code> | The audience claim value. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>double</code> | The TTL of generated identity tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

The configured URL for the application registered in Azure Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#resource AzureAuthBackendConfig#resource}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The tenant id for the Azure Active Directory organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#tenant_id AzureAuthBackendConfig#tenant_id}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#backend AzureAuthBackendConfig#backend}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#client_id AzureAuthBackendConfig#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The client secret for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#client_secret AzureAuthBackendConfig#client_secret}

---

##### `DisableAutomatedRotation`<sup>Optional</sup> <a name="DisableAutomatedRotation" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.disableAutomatedRotation"></a>

```csharp
public object DisableAutomatedRotation { get; set; }
```

- *Type:* object

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#disable_automated_rotation AzureAuthBackendConfig#disable_automated_rotation}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#environment AzureAuthBackendConfig#environment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#id AzureAuthBackendConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityTokenAudience`<sup>Optional</sup> <a name="IdentityTokenAudience" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.identityTokenAudience"></a>

```csharp
public string IdentityTokenAudience { get; set; }
```

- *Type:* string

The audience claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#identity_token_audience AzureAuthBackendConfig#identity_token_audience}

---

##### `IdentityTokenTtl`<sup>Optional</sup> <a name="IdentityTokenTtl" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.identityTokenTtl"></a>

```csharp
public double IdentityTokenTtl { get; set; }
```

- *Type:* double

The TTL of generated identity tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#identity_token_ttl AzureAuthBackendConfig#identity_token_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#namespace AzureAuthBackendConfig#namespace}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; set; }
```

- *Type:* double

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#rotation_period AzureAuthBackendConfig#rotation_period}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; set; }
```

- *Type:* string

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#rotation_schedule AzureAuthBackendConfig#rotation_schedule}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktf/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; set; }
```

- *Type:* double

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/azure_auth_backend_config#rotation_window AzureAuthBackendConfig#rotation_window}

---



