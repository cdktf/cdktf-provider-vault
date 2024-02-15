# `identityMfaLoginEnforcement` Submodule <a name="`identityMfaLoginEnforcement` Submodule" id="@cdktf/provider-vault.identityMfaLoginEnforcement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaLoginEnforcement <a name="IdentityMfaLoginEnforcement" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_login_enforcement vault_identity_mfa_login_enforcement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new IdentityMfaLoginEnforcement(Construct Scope, string Id, IdentityMfaLoginEnforcementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig">IdentityMfaLoginEnforcementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig">IdentityMfaLoginEnforcementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodAccessors">ResetAuthMethodAccessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodTypes">ResetAuthMethodTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityEntityIds">ResetIdentityEntityIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityGroupIds">ResetIdentityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAuthMethodAccessors` <a name="ResetAuthMethodAccessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodAccessors"></a>

```csharp
private void ResetAuthMethodAccessors()
```

##### `ResetAuthMethodTypes` <a name="ResetAuthMethodTypes" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodTypes"></a>

```csharp
private void ResetAuthMethodTypes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityEntityIds` <a name="ResetIdentityEntityIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityEntityIds"></a>

```csharp
private void ResetIdentityEntityIds()
```

##### `ResetIdentityGroupIds` <a name="ResetIdentityGroupIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityGroupIds"></a>

```csharp
private void ResetIdentityGroupIds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityMfaLoginEnforcement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityMfaLoginEnforcement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityMfaLoginEnforcement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityMfaLoginEnforcement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityMfaLoginEnforcement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityMfaLoginEnforcement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityMfaLoginEnforcement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityMfaLoginEnforcement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_login_enforcement#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityMfaLoginEnforcement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespacePath">NamespacePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessorsInput">AuthMethodAccessorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypesInput">AuthMethodTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIdsInput">IdentityEntityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIdsInput">IdentityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIdsInput">MfaMethodIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessors">AuthMethodAccessors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypes">AuthMethodTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIds">IdentityEntityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIds">IdentityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIds">MfaMethodIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespacePath"></a>

```csharp
public string NamespacePath { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `AuthMethodAccessorsInput`<sup>Optional</sup> <a name="AuthMethodAccessorsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessorsInput"></a>

```csharp
public string[] AuthMethodAccessorsInput { get; }
```

- *Type:* string[]

---

##### `AuthMethodTypesInput`<sup>Optional</sup> <a name="AuthMethodTypesInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypesInput"></a>

```csharp
public string[] AuthMethodTypesInput { get; }
```

- *Type:* string[]

---

##### `IdentityEntityIdsInput`<sup>Optional</sup> <a name="IdentityEntityIdsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIdsInput"></a>

```csharp
public string[] IdentityEntityIdsInput { get; }
```

- *Type:* string[]

---

##### `IdentityGroupIdsInput`<sup>Optional</sup> <a name="IdentityGroupIdsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIdsInput"></a>

```csharp
public string[] IdentityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MfaMethodIdsInput`<sup>Optional</sup> <a name="MfaMethodIdsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIdsInput"></a>

```csharp
public string[] MfaMethodIdsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `AuthMethodAccessors`<sup>Required</sup> <a name="AuthMethodAccessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessors"></a>

```csharp
public string[] AuthMethodAccessors { get; }
```

- *Type:* string[]

---

##### `AuthMethodTypes`<sup>Required</sup> <a name="AuthMethodTypes" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypes"></a>

```csharp
public string[] AuthMethodTypes { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityEntityIds`<sup>Required</sup> <a name="IdentityEntityIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIds"></a>

```csharp
public string[] IdentityEntityIds { get; }
```

- *Type:* string[]

---

##### `IdentityGroupIds`<sup>Required</sup> <a name="IdentityGroupIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIds"></a>

```csharp
public string[] IdentityGroupIds { get; }
```

- *Type:* string[]

---

##### `MfaMethodIds`<sup>Required</sup> <a name="MfaMethodIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIds"></a>

```csharp
public string[] MfaMethodIds { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaLoginEnforcementConfig <a name="IdentityMfaLoginEnforcementConfig" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new IdentityMfaLoginEnforcementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] MfaMethodIds,
    string Name,
    string[] AuthMethodAccessors = null,
    string[] AuthMethodTypes = null,
    string Id = null,
    string[] IdentityEntityIds = null,
    string[] IdentityGroupIds = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.mfaMethodIds">MfaMethodIds</a></code> | <code>string[]</code> | Set of MFA method UUIDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.name">Name</a></code> | <code>string</code> | Login enforcement name. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodAccessors">AuthMethodAccessors</a></code> | <code>string[]</code> | Set of auth method accessor IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodTypes">AuthMethodTypes</a></code> | <code>string[]</code> | Set of auth method types. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_login_enforcement#id IdentityMfaLoginEnforcement#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityEntityIds">IdentityEntityIds</a></code> | <code>string[]</code> | Set of identity entity IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityGroupIds">IdentityGroupIds</a></code> | <code>string[]</code> | Set of identity group IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MfaMethodIds`<sup>Required</sup> <a name="MfaMethodIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.mfaMethodIds"></a>

```csharp
public string[] MfaMethodIds { get; set; }
```

- *Type:* string[]

Set of MFA method UUIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_login_enforcement#mfa_method_ids IdentityMfaLoginEnforcement#mfa_method_ids}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Login enforcement name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_login_enforcement#name IdentityMfaLoginEnforcement#name}

---

##### `AuthMethodAccessors`<sup>Optional</sup> <a name="AuthMethodAccessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodAccessors"></a>

```csharp
public string[] AuthMethodAccessors { get; set; }
```

- *Type:* string[]

Set of auth method accessor IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_login_enforcement#auth_method_accessors IdentityMfaLoginEnforcement#auth_method_accessors}

---

##### `AuthMethodTypes`<sup>Optional</sup> <a name="AuthMethodTypes" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodTypes"></a>

```csharp
public string[] AuthMethodTypes { get; set; }
```

- *Type:* string[]

Set of auth method types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_login_enforcement#auth_method_types IdentityMfaLoginEnforcement#auth_method_types}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_login_enforcement#id IdentityMfaLoginEnforcement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityEntityIds`<sup>Optional</sup> <a name="IdentityEntityIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityEntityIds"></a>

```csharp
public string[] IdentityEntityIds { get; set; }
```

- *Type:* string[]

Set of identity entity IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_login_enforcement#identity_entity_ids IdentityMfaLoginEnforcement#identity_entity_ids}

---

##### `IdentityGroupIds`<sup>Optional</sup> <a name="IdentityGroupIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityGroupIds"></a>

```csharp
public string[] IdentityGroupIds { get; set; }
```

- *Type:* string[]

Set of identity group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_login_enforcement#identity_group_ids IdentityMfaLoginEnforcement#identity_group_ids}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/identity_mfa_login_enforcement#namespace IdentityMfaLoginEnforcement#namespace}

---



