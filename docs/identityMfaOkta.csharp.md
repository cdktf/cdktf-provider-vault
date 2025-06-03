# `identityMfaOkta` Submodule <a name="`identityMfaOkta` Submodule" id="@cdktf/provider-vault.identityMfaOkta"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaOkta <a name="IdentityMfaOkta" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_okta vault_identity_mfa_okta}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new IdentityMfaOkta(Construct Scope, string Id, IdentityMfaOktaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig">IdentityMfaOktaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig">IdentityMfaOktaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetPrimaryEmail">ResetPrimaryEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetUsernameFormat">ResetUsernameFormat</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPrimaryEmail` <a name="ResetPrimaryEmail" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetPrimaryEmail"></a>

```csharp
private void ResetPrimaryEmail()
```

##### `ResetUsernameFormat` <a name="ResetUsernameFormat" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetUsernameFormat"></a>

```csharp
private void ResetUsernameFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityMfaOkta resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityMfaOkta.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityMfaOkta.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityMfaOkta.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityMfaOkta.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityMfaOkta resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityMfaOkta to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityMfaOkta that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_okta#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityMfaOkta to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.methodId">MethodId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.mountAccessor">MountAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespacePath">NamespacePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.apiTokenInput">ApiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.orgNameInput">OrgNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.primaryEmailInput">PrimaryEmailInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.usernameFormatInput">UsernameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.apiToken">ApiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.orgName">OrgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.primaryEmail">PrimaryEmail</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.usernameFormat">UsernameFormat</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `MethodId`<sup>Required</sup> <a name="MethodId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.methodId"></a>

```csharp
public string MethodId { get; }
```

- *Type:* string

---

##### `MountAccessor`<sup>Required</sup> <a name="MountAccessor" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.mountAccessor"></a>

```csharp
public string MountAccessor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespacePath"></a>

```csharp
public string NamespacePath { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.apiTokenInput"></a>

```csharp
public string ApiTokenInput { get; }
```

- *Type:* string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OrgNameInput`<sup>Optional</sup> <a name="OrgNameInput" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.orgNameInput"></a>

```csharp
public string OrgNameInput { get; }
```

- *Type:* string

---

##### `PrimaryEmailInput`<sup>Optional</sup> <a name="PrimaryEmailInput" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.primaryEmailInput"></a>

```csharp
public object PrimaryEmailInput { get; }
```

- *Type:* object

---

##### `UsernameFormatInput`<sup>Optional</sup> <a name="UsernameFormatInput" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.usernameFormatInput"></a>

```csharp
public string UsernameFormatInput { get; }
```

- *Type:* string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.apiToken"></a>

```csharp
public string ApiToken { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OrgName`<sup>Required</sup> <a name="OrgName" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.orgName"></a>

```csharp
public string OrgName { get; }
```

- *Type:* string

---

##### `PrimaryEmail`<sup>Required</sup> <a name="PrimaryEmail" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.primaryEmail"></a>

```csharp
public object PrimaryEmail { get; }
```

- *Type:* object

---

##### `UsernameFormat`<sup>Required</sup> <a name="UsernameFormat" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.usernameFormat"></a>

```csharp
public string UsernameFormat { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaOktaConfig <a name="IdentityMfaOktaConfig" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new IdentityMfaOktaConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiToken,
    string OrgName,
    string BaseUrl = null,
    string Id = null,
    string Namespace = null,
    object PrimaryEmail = null,
    string UsernameFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.apiToken">ApiToken</a></code> | <code>string</code> | Okta API token. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.orgName">OrgName</a></code> | <code>string</code> | Name of the organization to be used in the Okta API. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.baseUrl">BaseUrl</a></code> | <code>string</code> | The base domain to use for API requests. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_okta#id IdentityMfaOkta#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.primaryEmail">PrimaryEmail</a></code> | <code>object</code> | Only match the primary email for the account. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.usernameFormat">UsernameFormat</a></code> | <code>string</code> | A template string for mapping Identity names to MFA methods. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.apiToken"></a>

```csharp
public string ApiToken { get; set; }
```

- *Type:* string

Okta API token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_okta#api_token IdentityMfaOkta#api_token}

---

##### `OrgName`<sup>Required</sup> <a name="OrgName" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.orgName"></a>

```csharp
public string OrgName { get; set; }
```

- *Type:* string

Name of the organization to be used in the Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_okta#org_name IdentityMfaOkta#org_name}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

The base domain to use for API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_okta#base_url IdentityMfaOkta#base_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_okta#id IdentityMfaOkta#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_okta#namespace IdentityMfaOkta#namespace}

---

##### `PrimaryEmail`<sup>Optional</sup> <a name="PrimaryEmail" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.primaryEmail"></a>

```csharp
public object PrimaryEmail { get; set; }
```

- *Type:* object

Only match the primary email for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_okta#primary_email IdentityMfaOkta#primary_email}

---

##### `UsernameFormat`<sup>Optional</sup> <a name="UsernameFormat" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.usernameFormat"></a>

```csharp
public string UsernameFormat { get; set; }
```

- *Type:* string

A template string for mapping Identity names to MFA methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_okta#username_format IdentityMfaOkta#username_format}

---



