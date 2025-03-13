# `oktaAuthBackendGroup` Submodule <a name="`oktaAuthBackendGroup` Submodule" id="@cdktf/provider-vault.oktaAuthBackendGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OktaAuthBackendGroupA <a name="OktaAuthBackendGroupA" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/okta_auth_backend_group vault_okta_auth_backend_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new OktaAuthBackendGroupA(Construct Scope, string Id, OktaAuthBackendGroupAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig">OktaAuthBackendGroupAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig">OktaAuthBackendGroupAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetPolicies">ResetPolicies</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OktaAuthBackendGroupA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

OktaAuthBackendGroupA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

OktaAuthBackendGroupA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

OktaAuthBackendGroupA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

OktaAuthBackendGroupA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OktaAuthBackendGroupA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OktaAuthBackendGroupA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OktaAuthBackendGroupA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/okta_auth_backend_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OktaAuthBackendGroupA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.policiesInput">PoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.policiesInput"></a>

```csharp
public string[] PoliciesInput { get; }
```

- *Type:* string[]

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OktaAuthBackendGroupAConfig <a name="OktaAuthBackendGroupAConfig" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new OktaAuthBackendGroupAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GroupName,
    string Path,
    string Id = null,
    string Namespace = null,
    string[] Policies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.groupName">GroupName</a></code> | <code>string</code> | Name of the Okta group. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.path">Path</a></code> | <code>string</code> | Path to the Okta auth backend. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/okta_auth_backend_group#id OktaAuthBackendGroupA#id}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.policies">Policies</a></code> | <code>string[]</code> | Policies to associate with this group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

Name of the Okta group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/okta_auth_backend_group#group_name OktaAuthBackendGroupA#group_name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path to the Okta auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/okta_auth_backend_group#path OktaAuthBackendGroupA#path}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/okta_auth_backend_group#id OktaAuthBackendGroupA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/okta_auth_backend_group#namespace OktaAuthBackendGroupA#namespace}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.policies"></a>

```csharp
public string[] Policies { get; set; }
```

- *Type:* string[]

Policies to associate with this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/okta_auth_backend_group#policies OktaAuthBackendGroupA#policies}

---



