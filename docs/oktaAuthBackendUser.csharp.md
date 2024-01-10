# `oktaAuthBackendUser` Submodule <a name="`oktaAuthBackendUser` Submodule" id="@cdktf/provider-vault.oktaAuthBackendUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OktaAuthBackendUserA <a name="OktaAuthBackendUserA" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend_user vault_okta_auth_backend_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new OktaAuthBackendUserA(Construct Scope, string Id, OktaAuthBackendUserAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig">OktaAuthBackendUserAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig">OktaAuthBackendUserAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetPolicies">ResetPolicies</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OktaAuthBackendUserA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

OktaAuthBackendUserA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

OktaAuthBackendUserA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

OktaAuthBackendUserA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

OktaAuthBackendUserA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OktaAuthBackendUserA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OktaAuthBackendUserA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OktaAuthBackendUserA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OktaAuthBackendUserA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.policiesInput">PoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.policiesInput"></a>

```csharp
public string[] PoliciesInput { get; }
```

- *Type:* string[]

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OktaAuthBackendUserAConfig <a name="OktaAuthBackendUserAConfig" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new OktaAuthBackendUserAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Path,
    string Username,
    string[] Groups = null,
    string Id = null,
    string Namespace = null,
    string[] Policies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.path">Path</a></code> | <code>string</code> | Path to the Okta auth backend. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.username">Username</a></code> | <code>string</code> | Name of the user within Okta. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.groups">Groups</a></code> | <code>string[]</code> | Groups within the Okta auth backend to associate with this user. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend_user#id OktaAuthBackendUserA#id}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.policies">Policies</a></code> | <code>string[]</code> | Policies to associate with this user. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path to the Okta auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend_user#path OktaAuthBackendUserA#path}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Name of the user within Okta.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend_user#username OktaAuthBackendUserA#username}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Groups within the Okta auth backend to associate with this user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend_user#groups OktaAuthBackendUserA#groups}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend_user#id OktaAuthBackendUserA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend_user#namespace OktaAuthBackendUserA#namespace}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-vault.oktaAuthBackendUser.OktaAuthBackendUserAConfig.property.policies"></a>

```csharp
public string[] Policies { get; set; }
```

- *Type:* string[]

Policies to associate with this user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend_user#policies OktaAuthBackendUserA#policies}

---



