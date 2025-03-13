# `configUiCustomMessage` Submodule <a name="`configUiCustomMessage` Submodule" id="@cdktf/provider-vault.configUiCustomMessage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigUiCustomMessage <a name="ConfigUiCustomMessage" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/config_ui_custom_message vault_config_ui_custom_message}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ConfigUiCustomMessage(Construct Scope, string Id, ConfigUiCustomMessageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig">ConfigUiCustomMessageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig">ConfigUiCustomMessageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink">PutLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetAuthenticated">ResetAuthenticated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetLink">ResetLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLink` <a name="PutLink" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink"></a>

```csharp
private void PutLink(ConfigUiCustomMessageLink Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

---

##### `ResetAuthenticated` <a name="ResetAuthenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetAuthenticated"></a>

```csharp
private void ResetAuthenticated()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetLink` <a name="ResetLink" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetLink"></a>

```csharp
private void ResetLink()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigUiCustomMessage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

ConfigUiCustomMessage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

ConfigUiCustomMessage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

ConfigUiCustomMessage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

ConfigUiCustomMessage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ConfigUiCustomMessage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigUiCustomMessage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigUiCustomMessage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/config_ui_custom_message#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ConfigUiCustomMessage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.link">Link</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference">ConfigUiCustomMessageLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticatedInput">AuthenticatedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.linkInput">LinkInput</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64Input">MessageBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticated">Authenticated</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64">MessageBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.link"></a>

```csharp
public ConfigUiCustomMessageLinkOutputReference Link { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference">ConfigUiCustomMessageLinkOutputReference</a>

---

##### `AuthenticatedInput`<sup>Optional</sup> <a name="AuthenticatedInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticatedInput"></a>

```csharp
public object AuthenticatedInput { get; }
```

- *Type:* object

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.linkInput"></a>

```csharp
public ConfigUiCustomMessageLink LinkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

---

##### `MessageBase64Input`<sup>Optional</sup> <a name="MessageBase64Input" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64Input"></a>

```csharp
public string MessageBase64Input { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Authenticated`<sup>Required</sup> <a name="Authenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticated"></a>

```csharp
public object Authenticated { get; }
```

- *Type:* object

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `MessageBase64`<sup>Required</sup> <a name="MessageBase64" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64"></a>

```csharp
public string MessageBase64 { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigUiCustomMessageConfig <a name="ConfigUiCustomMessageConfig" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ConfigUiCustomMessageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MessageBase64,
    string StartTime,
    string Title,
    object Authenticated = null,
    string EndTime = null,
    ConfigUiCustomMessageLink Link = null,
    string Namespace = null,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.messageBase64">MessageBase64</a></code> | <code>string</code> | The base64-encoded content of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.startTime">StartTime</a></code> | <code>string</code> | The starting time of the active period of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.title">Title</a></code> | <code>string</code> | The title of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.authenticated">Authenticated</a></code> | <code>object</code> | A flag indicating whether the custom message is displayed pre-login (false) or post-login (true). |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.endTime">EndTime</a></code> | <code>string</code> | The ending time of the active period of the custom message. Can be omitted for non-expiring message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.link">Link</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | link block. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map containing additional options for the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.type">Type</a></code> | <code>string</code> | The display type of custom message. Allowed values are banner and modal. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MessageBase64`<sup>Required</sup> <a name="MessageBase64" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.messageBase64"></a>

```csharp
public string MessageBase64 { get; set; }
```

- *Type:* string

The base64-encoded content of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/config_ui_custom_message#message_base64 ConfigUiCustomMessage#message_base64}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The starting time of the active period of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/config_ui_custom_message#start_time ConfigUiCustomMessage#start_time}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/config_ui_custom_message#title ConfigUiCustomMessage#title}

---

##### `Authenticated`<sup>Optional</sup> <a name="Authenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.authenticated"></a>

```csharp
public object Authenticated { get; set; }
```

- *Type:* object

A flag indicating whether the custom message is displayed pre-login (false) or post-login (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/config_ui_custom_message#authenticated ConfigUiCustomMessage#authenticated}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The ending time of the active period of the custom message. Can be omitted for non-expiring message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/config_ui_custom_message#end_time ConfigUiCustomMessage#end_time}

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.link"></a>

```csharp
public ConfigUiCustomMessageLink Link { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/config_ui_custom_message#link ConfigUiCustomMessage#link}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/config_ui_custom_message#namespace ConfigUiCustomMessage#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map containing additional options for the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/config_ui_custom_message#options ConfigUiCustomMessage#options}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The display type of custom message. Allowed values are banner and modal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/config_ui_custom_message#type ConfigUiCustomMessage#type}

---

### ConfigUiCustomMessageLink <a name="ConfigUiCustomMessageLink" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ConfigUiCustomMessageLink {
    string Href,
    string Title
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.href">Href</a></code> | <code>string</code> | The URL of the hyperlink. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.title">Title</a></code> | <code>string</code> | The title of the hyperlink. |

---

##### `Href`<sup>Required</sup> <a name="Href" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.href"></a>

```csharp
public string Href { get; set; }
```

- *Type:* string

The URL of the hyperlink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/config_ui_custom_message#href ConfigUiCustomMessage#href}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the hyperlink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/config_ui_custom_message#title ConfigUiCustomMessage#title}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigUiCustomMessageLinkOutputReference <a name="ConfigUiCustomMessageLinkOutputReference" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ConfigUiCustomMessageLinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.hrefInput">HrefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.href">Href</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HrefInput`<sup>Optional</sup> <a name="HrefInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.hrefInput"></a>

```csharp
public string HrefInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Href`<sup>Required</sup> <a name="Href" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.href"></a>

```csharp
public string Href { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.internalValue"></a>

```csharp
public ConfigUiCustomMessageLink InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

---



