# `spiffeAuthBackendRole` Submodule <a name="`spiffeAuthBackendRole` Submodule" id="@cdktf/provider-vault.spiffeAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpiffeAuthBackendRole <a name="SpiffeAuthBackendRole" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role vault_spiffe_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new SpiffeAuthBackendRole(Construct Scope, string Id, SpiffeAuthBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig">SpiffeAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig">SpiffeAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetAliasMetadata">ResetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenType">ResetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetWorkloadIdPatterns">ResetWorkloadIdPatterns</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAliasMetadata` <a name="ResetAliasMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetAliasMetadata"></a>

```csharp
private void ResetAliasMetadata()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenBoundCidrs"></a>

```csharp
private void ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```csharp
private void ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenMaxTtl"></a>

```csharp
private void ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```csharp
private void ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenNumUses"></a>

```csharp
private void ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenPeriod"></a>

```csharp
private void ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenPolicies"></a>

```csharp
private void ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenTtl"></a>

```csharp
private void ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenType"></a>

```csharp
private void ResetTokenType()
```

##### `ResetWorkloadIdPatterns` <a name="ResetWorkloadIdPatterns" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetWorkloadIdPatterns"></a>

```csharp
private void ResetWorkloadIdPatterns()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpiffeAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SpiffeAuthBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SpiffeAuthBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SpiffeAuthBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SpiffeAuthBackendRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpiffeAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpiffeAuthBackendRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpiffeAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpiffeAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.aliasMetadataInput">AliasMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTtlInput">TokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.workloadIdPatternsInput">WorkloadIdPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.workloadIdPatterns">WorkloadIdPatterns</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AliasMetadataInput`<sup>Optional</sup> <a name="AliasMetadataInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.aliasMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenBoundCidrsInput"></a>

```csharp
public string[] TokenBoundCidrsInput { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```csharp
public double TokenExplicitMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenMaxTtlInput"></a>

```csharp
public double TokenMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNumUsesInput"></a>

```csharp
public double TokenNumUsesInput { get; }
```

- *Type:* double

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPeriodInput"></a>

```csharp
public double TokenPeriodInput { get; }
```

- *Type:* double

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPoliciesInput"></a>

```csharp
public string[] TokenPoliciesInput { get; }
```

- *Type:* string[]

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTtlInput"></a>

```csharp
public double TokenTtlInput { get; }
```

- *Type:* double

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `WorkloadIdPatternsInput`<sup>Optional</sup> <a name="WorkloadIdPatternsInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.workloadIdPatternsInput"></a>

```csharp
public string[] WorkloadIdPatternsInput { get; }
```

- *Type:* string[]

---

##### `AliasMetadata`<sup>Required</sup> <a name="AliasMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; }
```

- *Type:* double

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; }
```

- *Type:* double

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; }
```

- *Type:* double

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; }
```

- *Type:* double

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `WorkloadIdPatterns`<sup>Required</sup> <a name="WorkloadIdPatterns" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.workloadIdPatterns"></a>

```csharp
public string[] WorkloadIdPatterns { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpiffeAuthBackendRoleConfig <a name="SpiffeAuthBackendRoleConfig" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new SpiffeAuthBackendRoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mount,
    string Name,
    System.Collections.Generic.IDictionary<string, string> AliasMetadata = null,
    string DisplayName = null,
    string Namespace = null,
    string[] TokenBoundCidrs = null,
    double TokenExplicitMaxTtl = null,
    double TokenMaxTtl = null,
    bool|IResolvable TokenNoDefaultPolicy = null,
    double TokenNumUses = null,
    double TokenPeriod = null,
    string[] TokenPolicies = null,
    double TokenTtl = null,
    string TokenType = null,
    string[] WorkloadIdPatterns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.mount">Mount</a></code> | <code>string</code> | Mount path for the SPIFFE auth engine in Vault. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.name">Name</a></code> | <code>string</code> | Name of the SPIFFE auth role. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A display name for the role. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenType">TokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.workloadIdPatterns">WorkloadIdPatterns</a></code> | <code>string[]</code> | A comma separated list of patterns that match an incoming workload id to this role. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Mount path for the SPIFFE auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#mount SpiffeAuthBackendRole#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the SPIFFE auth role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#name SpiffeAuthBackendRole#name}

---

##### `AliasMetadata`<sup>Optional</sup> <a name="AliasMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#alias_metadata SpiffeAuthBackendRole#alias_metadata}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A display name for the role.

This is only used for display purposes in Vault, if not provided it will default to the role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#display_name SpiffeAuthBackendRole#display_name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#namespace SpiffeAuthBackendRole#namespace}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; set; }
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_bound_cidrs SpiffeAuthBackendRole#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; set; }
```

- *Type:* double

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_explicit_max_ttl SpiffeAuthBackendRole#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; set; }
```

- *Type:* double

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_max_ttl SpiffeAuthBackendRole#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_no_default_policy SpiffeAuthBackendRole#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; set; }
```

- *Type:* double

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_num_uses SpiffeAuthBackendRole#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; set; }
```

- *Type:* double

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_period SpiffeAuthBackendRole#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; set; }
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_policies SpiffeAuthBackendRole#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; set; }
```

- *Type:* double

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_ttl SpiffeAuthBackendRole#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_type SpiffeAuthBackendRole#token_type}

---

##### `WorkloadIdPatterns`<sup>Optional</sup> <a name="WorkloadIdPatterns" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.workloadIdPatterns"></a>

```csharp
public string[] WorkloadIdPatterns { get; set; }
```

- *Type:* string[]

A comma separated list of patterns that match an incoming workload id to this role.

A workload id is the part that remains after stripping the trust domain prefix and the slash separator from a spiffe id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#workload_id_patterns SpiffeAuthBackendRole#workload_id_patterns}

---



