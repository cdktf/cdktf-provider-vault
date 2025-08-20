# `databaseSecretBackendStaticRole` Submodule <a name="`databaseSecretBackendStaticRole` Submodule" id="@cdktf/provider-vault.databaseSecretBackendStaticRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSecretBackendStaticRole <a name="DatabaseSecretBackendStaticRole" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role vault_database_secret_backend_static_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretBackendStaticRole(Construct Scope, string Id, DatabaseSecretBackendStaticRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig">DatabaseSecretBackendStaticRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig">DatabaseSecretBackendStaticRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetCredentialConfig">ResetCredentialConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetCredentialType">ResetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationStatements">ResetRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetSelfManagedPassword">ResetSelfManagedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetSkipImportRotation">ResetSkipImportRotation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCredentialConfig` <a name="ResetCredentialConfig" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetCredentialConfig"></a>

```csharp
private void ResetCredentialConfig()
```

##### `ResetCredentialType` <a name="ResetCredentialType" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetCredentialType"></a>

```csharp
private void ResetCredentialType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationSchedule"></a>

```csharp
private void ResetRotationSchedule()
```

##### `ResetRotationStatements` <a name="ResetRotationStatements" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationStatements"></a>

```csharp
private void ResetRotationStatements()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetRotationWindow"></a>

```csharp
private void ResetRotationWindow()
```

##### `ResetSelfManagedPassword` <a name="ResetSelfManagedPassword" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetSelfManagedPassword"></a>

```csharp
private void ResetSelfManagedPassword()
```

##### `ResetSkipImportRotation` <a name="ResetSkipImportRotation" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.resetSkipImportRotation"></a>

```csharp
private void ResetSkipImportRotation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseSecretBackendStaticRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DatabaseSecretBackendStaticRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DatabaseSecretBackendStaticRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DatabaseSecretBackendStaticRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DatabaseSecretBackendStaticRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseSecretBackendStaticRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseSecretBackendStaticRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseSecretBackendStaticRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseSecretBackendStaticRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.credentialConfigInput">CredentialConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dbNameInput">DbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationStatementsInput">RotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationWindowInput">RotationWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.selfManagedPasswordInput">SelfManagedPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.skipImportRotationInput">SkipImportRotationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.credentialConfig">CredentialConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationStatements">RotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.selfManagedPassword">SelfManagedPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.skipImportRotation">SkipImportRotation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `CredentialConfigInput`<sup>Optional</sup> <a name="CredentialConfigInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.credentialConfigInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CredentialConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.credentialTypeInput"></a>

```csharp
public string CredentialTypeInput { get; }
```

- *Type:* string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dbNameInput"></a>

```csharp
public string DbNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationPeriodInput"></a>

```csharp
public double RotationPeriodInput { get; }
```

- *Type:* double

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationScheduleInput"></a>

```csharp
public string RotationScheduleInput { get; }
```

- *Type:* string

---

##### `RotationStatementsInput`<sup>Optional</sup> <a name="RotationStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationStatementsInput"></a>

```csharp
public string[] RotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationWindowInput"></a>

```csharp
public double RotationWindowInput { get; }
```

- *Type:* double

---

##### `SelfManagedPasswordInput`<sup>Optional</sup> <a name="SelfManagedPasswordInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.selfManagedPasswordInput"></a>

```csharp
public string SelfManagedPasswordInput { get; }
```

- *Type:* string

---

##### `SkipImportRotationInput`<sup>Optional</sup> <a name="SkipImportRotationInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.skipImportRotationInput"></a>

```csharp
public object SkipImportRotationInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `CredentialConfig`<sup>Required</sup> <a name="CredentialConfig" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.credentialConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CredentialConfig { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; }
```

- *Type:* double

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; }
```

- *Type:* string

---

##### `RotationStatements`<sup>Required</sup> <a name="RotationStatements" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationStatements"></a>

```csharp
public string[] RotationStatements { get; }
```

- *Type:* string[]

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; }
```

- *Type:* double

---

##### `SelfManagedPassword`<sup>Required</sup> <a name="SelfManagedPassword" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.selfManagedPassword"></a>

```csharp
public string SelfManagedPassword { get; }
```

- *Type:* string

---

##### `SkipImportRotation`<sup>Required</sup> <a name="SkipImportRotation" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.skipImportRotation"></a>

```csharp
public object SkipImportRotation { get; }
```

- *Type:* object

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSecretBackendStaticRoleConfig <a name="DatabaseSecretBackendStaticRoleConfig" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretBackendStaticRoleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string DbName,
    string Name,
    string Username,
    System.Collections.Generic.IDictionary<string, string> CredentialConfig = null,
    string CredentialType = null,
    string Id = null,
    string Namespace = null,
    double RotationPeriod = null,
    string RotationSchedule = null,
    string[] RotationStatements = null,
    double RotationWindow = null,
    string SelfManagedPassword = null,
    object SkipImportRotation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.backend">Backend</a></code> | <code>string</code> | The path of the Database Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.dbName">DbName</a></code> | <code>string</code> | Database connection to use for this role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.name">Name</a></code> | <code>string</code> | Unique name for the static role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.username">Username</a></code> | <code>string</code> | The database username that this role corresponds to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.credentialConfig">CredentialConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The configuration for the credential type.Full documentation for the allowed values can be found under "https://developer.hashicorp.com/vault/api-docs/secret/databases#credential_config". |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.credentialType">CredentialType</a></code> | <code>string</code> | The credential type for the user, can be one of "password", "rsa_private_key" or "client_certificate".The configuration can be done in `credential_config`. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#id DatabaseSecretBackendStaticRole#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | The amount of time Vault should wait before rotating the password, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | A cron-style string that will define the schedule on which rotations should occur. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationStatements">RotationStatements</a></code> | <code>string[]</code> | Database statements to execute to rotate the password for the configured database user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | The amount of time in seconds in which the rotations are allowed to occur starting from a given rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.selfManagedPassword">SelfManagedPassword</a></code> | <code>string</code> | The password corresponding to the username in the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.skipImportRotation">SkipImportRotation</a></code> | <code>object</code> | Skip rotation of the password on import. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The path of the Database Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#backend DatabaseSecretBackendStaticRole#backend}

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.dbName"></a>

```csharp
public string DbName { get; set; }
```

- *Type:* string

Database connection to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#db_name DatabaseSecretBackendStaticRole#db_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for the static role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#name DatabaseSecretBackendStaticRole#name}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The database username that this role corresponds to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#username DatabaseSecretBackendStaticRole#username}

---

##### `CredentialConfig`<sup>Optional</sup> <a name="CredentialConfig" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.credentialConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CredentialConfig { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The configuration for the credential type.Full documentation for the allowed values can be found under "https://developer.hashicorp.com/vault/api-docs/secret/databases#credential_config".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#credential_config DatabaseSecretBackendStaticRole#credential_config}

---

##### `CredentialType`<sup>Optional</sup> <a name="CredentialType" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.credentialType"></a>

```csharp
public string CredentialType { get; set; }
```

- *Type:* string

The credential type for the user, can be one of "password", "rsa_private_key" or "client_certificate".The configuration can be done in `credential_config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#credential_type DatabaseSecretBackendStaticRole#credential_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#id DatabaseSecretBackendStaticRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#namespace DatabaseSecretBackendStaticRole#namespace}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; set; }
```

- *Type:* double

The amount of time Vault should wait before rotating the password, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#rotation_period DatabaseSecretBackendStaticRole#rotation_period}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; set; }
```

- *Type:* string

A cron-style string that will define the schedule on which rotations should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#rotation_schedule DatabaseSecretBackendStaticRole#rotation_schedule}

---

##### `RotationStatements`<sup>Optional</sup> <a name="RotationStatements" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationStatements"></a>

```csharp
public string[] RotationStatements { get; set; }
```

- *Type:* string[]

Database statements to execute to rotate the password for the configured database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#rotation_statements DatabaseSecretBackendStaticRole#rotation_statements}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; set; }
```

- *Type:* double

The amount of time in seconds in which the rotations are allowed to occur starting from a given rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#rotation_window DatabaseSecretBackendStaticRole#rotation_window}

---

##### `SelfManagedPassword`<sup>Optional</sup> <a name="SelfManagedPassword" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.selfManagedPassword"></a>

```csharp
public string SelfManagedPassword { get; set; }
```

- *Type:* string

The password corresponding to the username in the database.

Required when using the Rootless Password Rotation workflow for static roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#self_managed_password DatabaseSecretBackendStaticRole#self_managed_password}

---

##### `SkipImportRotation`<sup>Optional</sup> <a name="SkipImportRotation" id="@cdktf/provider-vault.databaseSecretBackendStaticRole.DatabaseSecretBackendStaticRoleConfig.property.skipImportRotation"></a>

```csharp
public object SkipImportRotation { get; set; }
```

- *Type:* object

Skip rotation of the password on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_static_role#skip_import_rotation DatabaseSecretBackendStaticRole#skip_import_rotation}

---



