# `identityOidcKey` Submodule <a name="`identityOidcKey` Submodule" id="@cdktf/provider-vault.identityOidcKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityOidcKey <a name="IdentityOidcKey" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_oidc_key vault_identity_oidc_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new IdentityOidcKey(Construct Scope, string Id, IdentityOidcKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig">IdentityOidcKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig">IdentityOidcKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.resetAllowedClientIds">ResetAllowedClientIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.resetVerificationTtl">ResetVerificationTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetAllowedClientIds` <a name="ResetAllowedClientIds" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.resetAllowedClientIds"></a>

```csharp
private void ResetAllowedClientIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```

##### `ResetVerificationTtl` <a name="ResetVerificationTtl" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.resetVerificationTtl"></a>

```csharp
private void ResetVerificationTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityOidcKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityOidcKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityOidcKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityOidcKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityOidcKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityOidcKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityOidcKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityOidcKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_oidc_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityOidcKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.allowedClientIdsInput">AllowedClientIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.verificationTtlInput">VerificationTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.allowedClientIds">AllowedClientIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.verificationTtl">VerificationTtl</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `AllowedClientIdsInput`<sup>Optional</sup> <a name="AllowedClientIdsInput" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.allowedClientIdsInput"></a>

```csharp
public string[] AllowedClientIdsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.rotationPeriodInput"></a>

```csharp
public double RotationPeriodInput { get; }
```

- *Type:* double

---

##### `VerificationTtlInput`<sup>Optional</sup> <a name="VerificationTtlInput" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.verificationTtlInput"></a>

```csharp
public double VerificationTtlInput { get; }
```

- *Type:* double

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `AllowedClientIds`<sup>Required</sup> <a name="AllowedClientIds" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.allowedClientIds"></a>

```csharp
public string[] AllowedClientIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; }
```

- *Type:* double

---

##### `VerificationTtl`<sup>Required</sup> <a name="VerificationTtl" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.verificationTtl"></a>

```csharp
public double VerificationTtl { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityOidcKeyConfig <a name="IdentityOidcKeyConfig" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new IdentityOidcKeyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Algorithm = null,
    string[] AllowedClientIds = null,
    string Id = null,
    string Namespace = null,
    double RotationPeriod = null,
    double VerificationTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.name">Name</a></code> | <code>string</code> | Name of the key. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.algorithm">Algorithm</a></code> | <code>string</code> | Signing algorithm to use. Signing algorithm to use. Allowed values are: RS256 (default), RS384, RS512, ES256, ES384, ES512, EdDSA. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.allowedClientIds">AllowedClientIds</a></code> | <code>string[]</code> | Array of role client ids allowed to use this key for signing. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_oidc_key#id IdentityOidcKey#id}. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | How often to generate a new signing key in number of seconds. |
| <code><a href="#@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.verificationTtl">VerificationTtl</a></code> | <code>double</code> | Controls how long the public portion of a signing key will be available for verification after being rotated in seconds. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_oidc_key#name IdentityOidcKey#name}

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Signing algorithm to use. Signing algorithm to use. Allowed values are: RS256 (default), RS384, RS512, ES256, ES384, ES512, EdDSA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_oidc_key#algorithm IdentityOidcKey#algorithm}

---

##### `AllowedClientIds`<sup>Optional</sup> <a name="AllowedClientIds" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.allowedClientIds"></a>

```csharp
public string[] AllowedClientIds { get; set; }
```

- *Type:* string[]

Array of role client ids allowed to use this key for signing.

If empty, no roles are allowed. If "*", all roles are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_oidc_key#allowed_client_ids IdentityOidcKey#allowed_client_ids}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_oidc_key#id IdentityOidcKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_oidc_key#namespace IdentityOidcKey#namespace}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; set; }
```

- *Type:* double

How often to generate a new signing key in number of seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_oidc_key#rotation_period IdentityOidcKey#rotation_period}

---

##### `VerificationTtl`<sup>Optional</sup> <a name="VerificationTtl" id="@cdktf/provider-vault.identityOidcKey.IdentityOidcKeyConfig.property.verificationTtl"></a>

```csharp
public double VerificationTtl { get; set; }
```

- *Type:* double

Controls how long the public portion of a signing key will be available for verification after being rotated in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/identity_oidc_key#verification_ttl IdentityOidcKey#verification_ttl}

---



