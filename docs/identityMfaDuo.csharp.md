# `identityMfaDuo` Submodule <a name="`identityMfaDuo` Submodule" id="@cdktf/provider-vault.identityMfaDuo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaDuo <a name="IdentityMfaDuo" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/identity_mfa_duo vault_identity_mfa_duo}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new IdentityMfaDuo(Construct Scope, string Id, IdentityMfaDuoConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig">IdentityMfaDuoConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig">IdentityMfaDuoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetPushInfo">ResetPushInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetUsePasscode">ResetUsePasscode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetUsernameFormat">ResetUsernameFormat</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPushInfo` <a name="ResetPushInfo" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetPushInfo"></a>

```csharp
private void ResetPushInfo()
```

##### `ResetUsePasscode` <a name="ResetUsePasscode" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetUsePasscode"></a>

```csharp
private void ResetUsePasscode()
```

##### `ResetUsernameFormat` <a name="ResetUsernameFormat" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.resetUsernameFormat"></a>

```csharp
private void ResetUsernameFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityMfaDuo resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityMfaDuo.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityMfaDuo.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityMfaDuo.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityMfaDuo.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityMfaDuo resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityMfaDuo to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityMfaDuo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/identity_mfa_duo#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityMfaDuo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.methodId">MethodId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.mountAccessor">MountAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespacePath">NamespacePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.apiHostnameInput">ApiHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.integrationKeyInput">IntegrationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.pushInfoInput">PushInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.secretKeyInput">SecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usePasscodeInput">UsePasscodeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usernameFormatInput">UsernameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.apiHostname">ApiHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.integrationKey">IntegrationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.pushInfo">PushInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.secretKey">SecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usePasscode">UsePasscode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usernameFormat">UsernameFormat</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `MethodId`<sup>Required</sup> <a name="MethodId" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.methodId"></a>

```csharp
public string MethodId { get; }
```

- *Type:* string

---

##### `MountAccessor`<sup>Required</sup> <a name="MountAccessor" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.mountAccessor"></a>

```csharp
public string MountAccessor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespacePath"></a>

```csharp
public string NamespacePath { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `ApiHostnameInput`<sup>Optional</sup> <a name="ApiHostnameInput" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.apiHostnameInput"></a>

```csharp
public string ApiHostnameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationKeyInput`<sup>Optional</sup> <a name="IntegrationKeyInput" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.integrationKeyInput"></a>

```csharp
public string IntegrationKeyInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PushInfoInput`<sup>Optional</sup> <a name="PushInfoInput" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.pushInfoInput"></a>

```csharp
public string PushInfoInput { get; }
```

- *Type:* string

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.secretKeyInput"></a>

```csharp
public string SecretKeyInput { get; }
```

- *Type:* string

---

##### `UsePasscodeInput`<sup>Optional</sup> <a name="UsePasscodeInput" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usePasscodeInput"></a>

```csharp
public object UsePasscodeInput { get; }
```

- *Type:* object

---

##### `UsernameFormatInput`<sup>Optional</sup> <a name="UsernameFormatInput" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usernameFormatInput"></a>

```csharp
public string UsernameFormatInput { get; }
```

- *Type:* string

---

##### `ApiHostname`<sup>Required</sup> <a name="ApiHostname" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.apiHostname"></a>

```csharp
public string ApiHostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.integrationKey"></a>

```csharp
public string IntegrationKey { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PushInfo`<sup>Required</sup> <a name="PushInfo" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.pushInfo"></a>

```csharp
public string PushInfo { get; }
```

- *Type:* string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.secretKey"></a>

```csharp
public string SecretKey { get; }
```

- *Type:* string

---

##### `UsePasscode`<sup>Required</sup> <a name="UsePasscode" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usePasscode"></a>

```csharp
public object UsePasscode { get; }
```

- *Type:* object

---

##### `UsernameFormat`<sup>Required</sup> <a name="UsernameFormat" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.usernameFormat"></a>

```csharp
public string UsernameFormat { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuo.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaDuoConfig <a name="IdentityMfaDuoConfig" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new IdentityMfaDuoConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiHostname,
    string IntegrationKey,
    string SecretKey,
    string Id = null,
    string Namespace = null,
    string PushInfo = null,
    object UsePasscode = null,
    string UsernameFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.apiHostname">ApiHostname</a></code> | <code>string</code> | API hostname for Duo. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.integrationKey">IntegrationKey</a></code> | <code>string</code> | Integration key for Duo. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.secretKey">SecretKey</a></code> | <code>string</code> | Secret key for Duo. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/identity_mfa_duo#id IdentityMfaDuo#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.pushInfo">PushInfo</a></code> | <code>string</code> | Push information for Duo. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.usePasscode">UsePasscode</a></code> | <code>object</code> | Require passcode upon MFA validation. |
| <code><a href="#@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.usernameFormat">UsernameFormat</a></code> | <code>string</code> | A template string for mapping Identity names to MFA methods. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiHostname`<sup>Required</sup> <a name="ApiHostname" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.apiHostname"></a>

```csharp
public string ApiHostname { get; set; }
```

- *Type:* string

API hostname for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/identity_mfa_duo#api_hostname IdentityMfaDuo#api_hostname}

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.integrationKey"></a>

```csharp
public string IntegrationKey { get; set; }
```

- *Type:* string

Integration key for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/identity_mfa_duo#integration_key IdentityMfaDuo#integration_key}

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.secretKey"></a>

```csharp
public string SecretKey { get; set; }
```

- *Type:* string

Secret key for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/identity_mfa_duo#secret_key IdentityMfaDuo#secret_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/identity_mfa_duo#id IdentityMfaDuo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/identity_mfa_duo#namespace IdentityMfaDuo#namespace}

---

##### `PushInfo`<sup>Optional</sup> <a name="PushInfo" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.pushInfo"></a>

```csharp
public string PushInfo { get; set; }
```

- *Type:* string

Push information for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/identity_mfa_duo#push_info IdentityMfaDuo#push_info}

---

##### `UsePasscode`<sup>Optional</sup> <a name="UsePasscode" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.usePasscode"></a>

```csharp
public object UsePasscode { get; set; }
```

- *Type:* object

Require passcode upon MFA validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/identity_mfa_duo#use_passcode IdentityMfaDuo#use_passcode}

---

##### `UsernameFormat`<sup>Optional</sup> <a name="UsernameFormat" id="@cdktf/provider-vault.identityMfaDuo.IdentityMfaDuoConfig.property.usernameFormat"></a>

```csharp
public string UsernameFormat { get; set; }
```

- *Type:* string

A template string for mapping Identity names to MFA methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/identity_mfa_duo#username_format IdentityMfaDuo#username_format}

---



